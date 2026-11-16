import { createFileRoute } from "@tanstack/react-router";
import { ReadingLanding, type ReadingLandingConfig } from "@/components/tarot/ReadingLanding";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/three-card";
const TITLE = "Three Card Tarot Reading — Past, Present, Future";
const DESCRIPTION =
  "Free three card tarot reading: draw Past, Present, and Future cards for a clear AI-guided read on how your situation is developing and where it's heading.";

const CONFIG: ReadingLandingConfig = {
  path: PATH,
  spreadId: "three-card",
  eyebrow: "Three Card Reading",
  h1: "Three Card Tarot Reading",
  intro:
    "The Three Card Tarot Reading is the classic next step up from a single card pull: three cards drawn into Past, Present, and Future positions, giving you the arc of a situation rather than just a snapshot of it.",
  sections: [
    {
      id: "how-it-works",
      title: "How the three card spread works",
      paragraphs: [
        "Three cards are drawn in sequence and placed into three positions: what has shaped the situation (Past), where you stand right now (Present), and where things are heading if the current pattern continues (Future). Each card is read both on its own and in relation to the others, since the real narrative lives in how the three cards transition from one to the next.",
        "AstroFree's AI interpretation writes one dedicated paragraph per card, connecting both its upright or reversed orientation and its position in the timeline, then finishes with a closing synthesis that weaves all three into a single, coherent read rather than three disconnected fragments.",
        "Notice the momentum across the row. Does the energy accelerate from passive Minor Arcana cards into a decisive Major Arcana card? Or does a grounded Earth card (Pentacles) in the Past shift into turbulent mental energy (Swords) in the Present? Watching how the energy moves left to right gives you far more insight than reading three isolated definitions.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a three card tarot spread",
      paragraphs: [
        "This spread suits situations that are unfolding rather than static — a relationship shifting, a project in motion, a personal transition, or a decision that's been building for a while. It's more revealing than a single card without the depth (and time) required by something like the Celtic Cross, which makes it the most popular general-purpose spread for everyday questions.",
        "If you feel stuck inside the middle of a story and cannot tell whether your current tension is old baggage or an incoming turning point, a three-card layout gives you immediate perspective. Seeing what belongs to the Past position helps you separate historical habits from what is actually happening in the Present.",
      ],
    },
    {
      id: "alternative-layouts",
      title: "Alternative ways readers frame three cards",
      paragraphs: [
        "Although Past / Present / Future is the classic default used here, experienced tarot readers love the three-card structure because the same three slots can adapt to almost any inner question. Common variations include Situation / Challenge / Advice (great for practical troubleshooting), Mind / Body / Spirit (ideal for wellness and emotional check-ins), and What Helps / What Hinders / What Unfolds.",
        "Even when using Past, Present, and Future, remember that the 'Future' card is never locked in stone. In reflective tarot practice, the third card shows the probable trajectory if nothing changes in your mindset or actions — meaning an uncomfortable third card acts as an early warning system you still have full agency to redirect.",
      ],
    },
    {
      id: "elemental-balance",
      title: "Reading elemental and Major Arcana patterns across three cards",
      paragraphs: [
        "Once you read each position individually, step back and scan the suit balance across all three cards. Three cards heavy in Cups signal emotional processing, empathy, or creative intuition; Swords highlight communication, analysis, or mental stress; Wands bring urgency, ambition, and creative fire; and Pentacles ground the question in finances, habits, health, or tangible work.",
        "Pay special attention when one or more Major Arcana cards appear in a three-card spread. While Minor Arcana cards typically describe day-to-day choices and passing moods, Major Arcana cards mark deeper turning points, life lessons, or archetypal shifts that carry longer-lasting significance.",
      ],
    },
    {
      id: "journaling-prompts",
      title: "Questions and journaling prompts for three-card spreads",
      paragraphs: [
        "To get the sharpest reading, frame your prompt around movement or evolution: 'How is my approach to this project shifting right now?', 'What have I carried into this chapter from the past, and where can I grow next?', or 'What is the arc of my creative momentum over the coming month?'",
        "After reading your synthesis, write down one sentence linking the Past card to the Present card — for example, 'Because I felt overextended (Ten of Wands) earlier, I am now pausing to re-evaluate (The Hermit).' Naming that bridge turns symbolic insight into genuine self-awareness.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is the three card spread good for beginners?",
      answer:
        "Yes — it's one of the two spreads we'd recommend starting with, alongside the One Card Reading. The fixed Past/Present/Future structure gives you a clear framework without the complexity of a ten-card layout.",
    },
    {
      question: "Can I use the three card spread for love or career questions?",
      answer:
        "You can, but AstroFree also offers dedicated Love and Career readings with positions built specifically for those topics, which usually give more targeted guidance than the general-purpose three card spread.",
    },
    {
      question: "What if two of my three cards seem to contradict each other?",
      answer:
        "That's common and meaningful rather than a sign of error — it often reflects genuine tension in the situation. The synthesis paragraph in your reading is written to address exactly that kind of contrast.",
    },
    {
      question: "Is the Future card in a three card reading permanent?",
      answer:
        "No. The Future position reflects the natural direction of your current momentum if patterns remain unchanged. You always retain free will to adjust your response based on what the Present card reveals.",
    },
    {
      question: "How far back and ahead do Past and Future reach?",
      answer:
        "Timeframes in tarot depend on the scope of your question. If you ask about this week, Past and Future usually span days; if you ask about a career transition, they may reflect months of buildup and upcoming change.",
    },
  ],
  relatedCards: [
    {
      slug: "the-wheel-of-fortune",
      name: "Wheel of Fortune",
      subtitle: "Cycles, change, turning points",
      base: "/tarot/$slug",
    },
    {
      slug: "the-hanged-man",
      name: "The Hanged Man",
      subtitle: "Pause, new perspective, surrender",
      base: "/tarot/$slug",
    },
    {
      slug: "the-world",
      name: "The World",
      subtitle: "Completion, arrival, wholeness",
      base: "/tarot/$slug",
    },
    {
      slug: "judgement",
      name: "Judgement",
      subtitle: "Reflection, reckoning, renewal",
      base: "/tarot/$slug",
    },
  ],
  relatedLinks: [
    {
      to: "/tarot",
      label: "All 78 tarot card meanings",
      blurb: "Browse the full major and minor arcana library.",
    },
    {
      to: "/tarot/celtic-cross",
      label: "Celtic Cross Reading",
      blurb: "Go deeper with the classic ten-card spread.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
    {
      to: "/guide/tarot-for-beginners",
      label: "Tarot for beginners",
      blurb: "Start with the foundations of reading cards.",
    },
  ],
  ctaLabel: "Start your reading",
};

export const Route = createFileRoute("/tarot/three-card")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "three card tarot reading",
        "3 card tarot reading",
        "three card tarot spread",
        "past present future tarot",
        "free tarot reading",
      ],
    }),
    links: [{ rel: "canonical", href: `https://astrofree.vercel.app${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildContentJsonLd({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            updated: "2026-08-16",
            crumbs: [
              { name: "Tarot", path: "/tarot" },
              { name: "Three Card Reading", path: PATH },
            ],
            faqs: CONFIG.faqs,
          }),
        ),
      },
    ],
  }),
  component: () => <ReadingLanding config={CONFIG} />,
});
