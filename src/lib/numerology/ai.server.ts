import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { ARCHETYPES, PACING, calculate, parseNumerologyInput, toMapping } from "./engine";
import { interpretNumerology } from "./interpret";
import type { NumerologyResult } from "./types";
import type { Language } from "@/lib/i18n";

const inputSchema = z.object({
  dob: z.string(),
  targetPeriod: z.string(),
  language: z
    .enum(["en", "hi", "hinglish", "bn", "te", "mr", "ta", "gu", "kn", "ml", "pa", "or", "as"])
    .default("hinglish"),
});

const LANGUAGE_INSTRUCTION: Record<Language, string> = {
  en: "Write every string value in English.",
  hi: "Write every string value in Hindi, using the Devanagari script throughout.",
  hinglish:
    "Write every string value in Hinglish — natural, casual Hindi-English code-mixed prose written in the Latin/Roman alphabet (not Devanagari).",
  bn: "Write every string value in Bengali, using the Bengali script throughout.",
  te: "Write every string value in Telugu, using the Telugu script throughout.",
  mr: "Write every string value in Marathi, using the Devanagari script throughout.",
  ta: "Write every string value in Tamil, using the Tamil script throughout.",
  gu: "Write every string value in Gujarati, using the Gujarati script throughout.",
  kn: "Write every string value in Kannada, using the Kannada script throughout.",
  ml: "Write every string value in Malayalam, using the Malayalam script throughout.",
  pa: "Write every string value in Punjabi, using the Gurmukhi script throughout.",
  or: "Write every string value in Odia, using the Odia script throughout.",
  as: "Write every string value in Assamese, using the Bengali-Assamese script throughout.",
};

/** Only the text fields — the numbers/cards are computed by us and never trusted from the model. */
const aiContentSchema = z.object({
  energetic_layers: z.object({
    base_mindset: z.string(),
    yearly_theme: z.string(),
    monthly_focus: z.string(),
  }),
  guidance: z.object({
    recommended_actions: z.array(z.string()).min(1),
    caution_areas: z.array(z.string()).min(1),
  }),
});

function buildPrompt(
  mulank: number,
  personalYear: number,
  personalMonth: number | null,
  language: Language,
) {
  const isMonthly = personalMonth !== null;
  const pacing = isMonthly ? PACING[personalMonth as 1] : null;
  const pacingNote =
    pacing === "active"
      ? "This is classified as an ACTIVE month (per the Active/Reflective/Harmony pacing system: action, starting projects, networking, bold moves). Guidance should lean into taking initiative."
      : pacing === "reflective"
        ? "This is classified as a REFLECTIVE month (planning, organizing, auditing, wrapping up loose ends). Guidance should lean into consolidation, not new launches."
        : pacing === "harmony"
          ? "This is classified as a HARMONY month (home, relationships, commitments, legal/union decisions). Guidance should center on people and shared responsibilities."
          : null;

  return `You are a precise Numerology and Tarot Calculation Engine. The arithmetic has already been done; your only job is to write the interpretive text for it.

Already-calculated numbers (do not recompute or contradict these):
- Personal Mulank (Root Number): ${mulank} → ${ARCHETYPES[mulank as 1]}
- Personal Year: ${personalYear} → ${ARCHETYPES[personalYear as 1]}
${isMonthly ? `- Personal Month: ${personalMonth} → ${ARCHETYPES[personalMonth as 1]}` : "- This is a yearly forecast only; there is no target month."}
${pacingNote ? `- Pacing: ${pacingNote}` : ""}

Write a JSON object with exactly these keys and nothing else (no markdown fences, no commentary):
{
  "energetic_layers": {
    "base_mindset": string (2-3 sentences, tied to the Mulank archetype — this person's core operating mode),
    "yearly_theme": string (2-3 sentences, tied to the Personal Year archetype — the overarching theme of this year),
    "monthly_focus": ${isMonthly ? "string (1-2 sentences, tied to the Personal Month archetype — the specific flavor of this month)" : '""'}
  },
  "guidance": {
    "recommended_actions": array of exactly 3 short, concrete, actionable strings for this ${isMonthly ? "month" : "year"},
    "caution_areas": array of exactly 2 short, concrete pitfalls to watch for this ${isMonthly ? "month" : "year"}
  }
}

${LANGUAGE_INSTRUCTION[language]} Card/archetype names (e.g. "${ARCHETYPES[mulank as 1]}") may stay in English even within non-English sentences, as is standard practice.

Keep the tone grounded and specific — no vague platitudes, no astrology-website filler. Return ONLY the JSON object.`;
}

/** Server-only: calls Groq if GROQ_API_KEY is configured, otherwise falls back to local synthesis. */
export const generateNumerologyReading = createServerFn({ method: "POST" })
  .validator(inputSchema)
  .handler(async ({ data }): Promise<{ result: NumerologyResult; source: "ai" | "local" }> => {
    const { dob, targetPeriod, language } = data;

    let calc: ReturnType<typeof calculate>;
    try {
      const parsed = parseNumerologyInput({ dob, targetPeriod });
      calc = calculate(parsed);
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : "Invalid input");
    }

    const calculations: NumerologyResult["calculations"] = {
      mulank: toMapping(calc.mulank),
      personal_year: toMapping(calc.personalYear),
      personal_month: calc.personalMonth === null ? null : toMapping(calc.personalMonth),
    };

    const localContent = interpretNumerology(calc, language);
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return { result: { calculations, ...localContent }, source: "local" };
    }

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { "content-type": "application/json", authorization: `Bearer ${apiKey}` },
        signal: AbortSignal.timeout(8000),
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          max_completion_tokens: 900,
          reasoning_effort: "low",
          include_reasoning: false,
          response_format: { type: "json_object" },
          messages: [
            {
              role: "system",
              content:
                "You are a precise Numerology and Tarot Calculation Engine. Reply with JSON only.",
            },
            {
              role: "user",
              content: buildPrompt(calc.mulank, calc.personalYear, calc.personalMonth, language),
            },
          ],
        }),
      });

      if (!response.ok) throw new Error(`Groq API error: ${response.status}`);

      const json = (await response.json()) as { choices?: { message?: { content?: string } }[] };
      const text = json.choices?.[0]?.message?.content;
      if (!text) throw new Error("Empty AI response");

      const parsedJson = JSON.parse(text);
      const content = aiContentSchema.parse(parsedJson);
      const pacing = calc.personalMonth === null ? null : PACING[calc.personalMonth];

      return {
        result: {
          calculations,
          energetic_layers: { ...content.energetic_layers, pacing },
          guidance: content.guidance,
        },
        source: "ai",
      };
    } catch (err) {
      console.error("Numerology AI generation failed, falling back to local synthesis:", err);
      return { result: { calculations, ...localContent }, source: "local" };
    }
  });
