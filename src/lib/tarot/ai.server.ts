import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getCardById } from "./engine";
import { getSpread } from "./spreads";
import { interpretReading } from "./interpret";
import type { DrawnCard, ReadingInterpretation, SpreadId } from "./types";
import type { Language } from "@/lib/i18n";

const inputSchema = z.object({
  spreadId: z.enum([
    "single",
    "three-card",
    "love",
    "career",
    "money",
    "decision",
    "celtic-cross",
    "year-ahead",
  ]),
  question: z.string(),
  cards: z.array(z.object({ cardId: z.string(), reversed: z.boolean() })),
  language: z
    .enum(["en", "hi", "hinglish", "bn", "te", "mr", "ta", "gu", "kn", "ml", "pa", "or", "as"])
    .default("hinglish"),
});

const LANGUAGE_INSTRUCTION: Record<Language, string> = {
  en: "Write the entire reading in English.",
  hi: "Write the entire reading in Hindi, using the Devanagari script throughout.",
  hinglish:
    "Write the entire reading in Hinglish — natural, casual Hindi-English code-mixed prose written in the Latin/Roman alphabet (not Devanagari), the way many Indians text and speak day to day.",
  bn: "Write the entire reading in Bengali, using the Bengali script throughout.",
  te: "Write the entire reading in Telugu, using the Telugu script throughout.",
  mr: "Write the entire reading in Marathi, using the Devanagari script throughout.",
  ta: "Write the entire reading in Tamil, using the Tamil script throughout.",
  gu: "Write the entire reading in Gujarati, using the Gujarati script throughout.",
  kn: "Write the entire reading in Kannada, using the Kannada script throughout.",
  ml: "Write the entire reading in Malayalam, using the Malayalam script throughout.",
  pa: "Write the entire reading in Punjabi, using the Gurmukhi script throughout.",
  or: "Write the entire reading in Odia, using the Odia script throughout.",
  as: "Write the entire reading in Assamese, using the Bengali-Assamese script throughout.",
};

function buildPrompt(spreadId: SpreadId, question: string, cards: DrawnCard[], language: Language) {
  const spread = getSpread(spreadId);
  const cardLines = cards
    .map((c, i) => {
      const card = getCardById(c.cardId);
      const position = spread.positions[i];
      if (!card || !position) return null;
      return `${i + 1}. Position "${position.name}" (${position.meaning}): ${card.name}${c.reversed ? " — Reversed" : " — Upright"}. Keywords: ${card.keywords.join(", ")}.`;
    })
    .filter(Boolean)
    .join("\n");

  return `You are a warm, insightful tarot reader. A seeker drew the "${spread.name}" spread (${spread.description}).
${question ? `Their question: "${question}"` : "They did not share a specific question — offer general guidance."}

Cards drawn:
${cardLines}

Write a tarot reading interpretation with:
1. One short paragraph per card, connecting its position, orientation, and traditional meaning to the seeker's question.
2. A closing synthesis paragraph (3-5 sentences) that weaves the cards together into cohesive guidance.

${LANGUAGE_INSTRUCTION[language]} Card names (e.g. "${cards[0] ? getCardById(cards[0].cardId)?.name : "The Fool"}") may stay in English even within Hindi/Hinglish sentences, as is standard practice.

Keep the tone grounded, compassionate, and specific — avoid vague platitudes. Do not use markdown headers. Return plain prose paragraphs only, separated by blank lines, in this exact order: one paragraph per card (in spread order), then the synthesis paragraph last.`;
}

function parseAiResponse(
  text: string,
  spreadId: SpreadId,
  cards: DrawnCard[],
): ReadingInterpretation {
  const spread = getSpread(spreadId);
  const paragraphs = text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paragraphs.length < cards.length + 1) {
    // Model didn't follow the format closely enough to parse reliably — fall back.
    throw new Error("Unexpected AI response shape");
  }

  const perCard = cards.map((c, i) => ({
    positionName: spread.positions[i]?.name ?? `Card ${i + 1}`,
    cardId: c.cardId,
    reversed: c.reversed,
    text: paragraphs[i],
  }));
  const summary = paragraphs[paragraphs.length - 1];

  return { perCard, summary };
}

/** Server-only: calls Groq if GROQ_API_KEY is configured, otherwise falls back to local synthesis. */
export const generateAiInterpretation = createServerFn({ method: "POST" })
  .validator(inputSchema)
  .handler(
    async ({
      data,
    }): Promise<{ interpretation: ReadingInterpretation; source: "ai" | "local" }> => {
      const { spreadId, question, cards, language } = data;
      const apiKey = process.env.GROQ_API_KEY;

      if (!apiKey) {
        return {
          interpretation: interpretReading(spreadId, question, cards, language),
          source: "local",
        };
      }

      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${apiKey}`,
          },
          // Bounded well under typical serverless function limits so a slow
          // upstream call fails fast into the local fallback instead of the
          // whole function getting killed by a platform-level timeout.
          signal: AbortSignal.timeout(8000),
          body: JSON.stringify({
            model: "openai/gpt-oss-120b",
            max_completion_tokens: 1500,
            reasoning_effort: "low",
            include_reasoning: false,
            messages: [
              { role: "system", content: "You are a warm, insightful tarot reader." },
              { role: "user", content: buildPrompt(spreadId, question, cards, language) },
            ],
          }),
        });

        if (!response.ok) throw new Error(`Groq API error: ${response.status}`);

        const json = (await response.json()) as {
          choices?: { message?: { content?: string } }[];
        };
        const text = json.choices?.[0]?.message?.content;
        if (!text) throw new Error("Empty AI response");

        const interpretation = parseAiResponse(text, spreadId, cards);
        return { interpretation, source: "ai" };
      } catch (err) {
        console.error("AI interpretation failed, falling back to local synthesis:", err);
        return {
          interpretation: interpretReading(spreadId, question, cards, language),
          source: "local",
        };
      }
    },
  );
