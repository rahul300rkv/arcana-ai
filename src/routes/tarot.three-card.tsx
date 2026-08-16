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
        "Three cards are drawn in sequence and placed into three positions: what has shaped the situation (Past), where you stand right now (Present), and where things are heading if the current pattern continues (Future). Each card is read both on its own and in relation to the others, since the story is in how they connect.",
        "AstroFree's AI interpretation writes one short paragraph per card, then a closing synthesis that weaves all three into a single, coherent read rather than three disconnected fragments.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a three card tarot spread",
      paragraphs: [
        "This spread suits situations that are unfolding rather than static — a relationship shifting, a project in motion, a decision that's been building for a while. It's more revealing than a single card without the depth (and time) required by something like the Celtic Cross, which makes it the most popular general-purpose spread for everyday questions.",
        "Some readers also use the same three positions as Situation / Action / Outcome, or Mind / Body / Spirit — the structure is flexible, but Past / Present / Future is the default and the one AstroFree uses here.",
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
