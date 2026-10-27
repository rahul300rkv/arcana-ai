import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { getCardById } from "./src/lib/tarot/engine.ts";
import { getSpread } from "./src/lib/tarot/spreads.ts";
import { interpretReading } from "./src/lib/tarot/interpret.ts";
import { ARCHETYPES, PACING, calculate, parseNumerologyInput, toMapping } from "./src/lib/numerology/engine.ts";
import { interpretNumerology } from "./src/lib/numerology/interpret.ts";
import type { DrawnCard, SpreadId } from "./src/lib/tarot/types.ts";
import type { Language } from "./src/lib/i18n.ts";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const host = "0.0.0.0";

app.use(express.json());

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

function buildTarotPrompt(spreadId: SpreadId, question: string, cards: DrawnCard[], language: Language) {
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

${LANGUAGE_INSTRUCTION[language] || LANGUAGE_INSTRUCTION.en} Card names (e.g. "${cards[0] ? getCardById(cards[0].cardId)?.name : "The Fool"}") may stay in English even within Hindi/Hinglish sentences, as is standard practice.

Keep the tone grounded, compassionate, and specific — avoid vague platitudes. Do not use markdown headers. Return plain prose paragraphs only, separated by blank lines, in this exact order: one paragraph per card (in spread order), then the synthesis paragraph last.`;
}

function parseTarotAiResponse(text: string, spreadId: SpreadId, cards: DrawnCard[]) {
  const spread = getSpread(spreadId);
  const paragraphs = text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paragraphs.length < cards.length + 1) {
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

// API endpoint for Tarot reading
app.post("/api/ai/tarot", async (req, res) => {
  const { spreadId, question, cards, language = "en" } = req.body;
  if (!spreadId || !cards || !Array.isArray(cards)) {
    return res.status(400).json({ error: "Missing spreadId or cards" });
  }

  const geminiApiKey = process.env.GEMINI_API_KEY;
  if (geminiApiKey) {
    try {
      const ai = new GoogleGenAI();
      const prompt = buildTarotPrompt(spreadId, question || "", cards, language);
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const text = response.text;
      if (text) {
        const interpretation = parseTarotAiResponse(text, spreadId, cards);
        return res.json({ interpretation, source: "ai" });
      }
    } catch (err) {
      console.warn("Gemini Tarot AI generation failed, falling back:", err);
    }
  }

  // Fallback to local synthesis
  const interpretation = interpretReading(spreadId, question || "", cards, language);
  return res.json({ interpretation, source: "local" });
});

// API endpoint for Numerology reading
app.post("/api/ai/numerology", async (req, res) => {
  const { dob, targetPeriod, language = "en" } = req.body;
  if (!dob || !targetPeriod) {
    return res.status(400).json({ error: "Missing dob or targetPeriod" });
  }

  try {
    const parsed = parseNumerologyInput({ dob, targetPeriod });
    const calc = calculate(parsed);

    const calculations = {
      mulank: toMapping(calc.mulank),
      personal_year: toMapping(calc.personalYear),
      personal_month: calc.personalMonth === null ? null : toMapping(calc.personalMonth),
    };

    const isMonthly = calc.personalMonth !== null;
    const pacing = isMonthly ? PACING[calc.personalMonth as 1] : null;

    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (geminiApiKey) {
      try {
        const ai = new GoogleGenAI();
        const prompt = `You are a precise Numerology and Tarot Calculation Engine. The arithmetic has already been done; your only job is to write the interpretive text for it.
Already-calculated numbers:
- Personal Mulank (Root Number): ${calc.mulank} → ${ARCHETYPES[calc.mulank as 1]}
- Personal Year: ${calc.personalYear} → ${ARCHETYPES[calc.personalYear as 1]}
${isMonthly ? `- Personal Month: ${calc.personalMonth} → ${ARCHETYPES[calc.personalMonth as 1]}` : "- Yearly forecast only"}
${pacing ? `- Pacing: ${pacing}` : ""}

Return a JSON object with this exact shape:
{
  "energetic_layers": {
    "base_mindset": "2-3 sentences tied to the Mulank archetype",
    "yearly_theme": "2-3 sentences tied to the Personal Year archetype",
    "monthly_focus": ${isMonthly ? '"1-2 sentences tied to Personal Month archetype"' : '""'}
  },
  "guidance": {
    "recommended_actions": ["3 short, concrete actionable guidance strings"],
    "caution_areas": ["2 short pitfalls to watch out for"]
  }
}
${LANGUAGE_INSTRUCTION[language as Language] || LANGUAGE_INSTRUCTION.en}
Return ONLY valid raw JSON without markdown formatting.`;

        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          },
        });

        const text = response.text;
        if (text) {
          const parsedContent = JSON.parse(text);
          return res.json({
            result: {
              calculations,
              energetic_layers: {
                ...parsedContent.energetic_layers,
                pacing,
              },
              guidance: parsedContent.guidance,
            },
            source: "ai",
          });
        }
      } catch (err) {
        console.warn("Gemini Numerology AI generation failed, falling back:", err);
      }
    }

    const localContent = interpretNumerology(calc, language as Language);
    return res.json({
      result: {
        calculations,
        ...localContent,
      },
      source: "local",
    });
  } catch (err: any) {
    return res.status(400).json({ error: err.message || "Invalid input" });
  }
});

// Explicit sitemap.xml and ads.txt routes
app.get("/sitemap.xml", (_req, res) => {
  res.setHeader("Content-Type", "application/xml");
  const sitemapPath = path.resolve(process.cwd(), "public", "sitemap.xml");
  if (fs.existsSync(sitemapPath)) {
    res.sendFile(sitemapPath);
  } else {
    res.status(404).send("Not found");
  }
});

app.get("/ads.txt", (_req, res) => {
  res.setHeader("Content-Type", "text/plain");
  const adsPath = path.resolve(process.cwd(), "public", "ads.txt");
  if (fs.existsSync(adsPath)) {
    res.sendFile(adsPath);
  } else {
    res.status(404).send("Not found");
  }
});

// Vite middleware or static serving
async function startServer() {
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  } else {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });
}

startServer();
