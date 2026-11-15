import { createFileRoute } from "@tanstack/react-router";
import { ReadingLanding, type ReadingLandingConfig } from "@/components/tarot/ReadingLanding";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/celtic-cross";
const TITLE = "Celtic Cross Tarot Reading — Free 10-Card Spread";
const DESCRIPTION =
  "Free Celtic Cross tarot reading: the classic ten-card spread for deep, complex questions, drawn and interpreted by AI across all ten positions — always free.";

const CONFIG: ReadingLandingConfig = {
  path: PATH,
  spreadId: "celtic-cross",
  eyebrow: "Celtic Cross Reading",
  h1: "Celtic Cross Tarot Reading",
  intro:
    "The Celtic Cross is the most well-known tarot spread in the world: ten cards covering the present situation, the challenge crossing it, its roots, the recent past and near future, your own self-image, outside influences, hopes and fears, and the likely outcome. It's the spread to reach for when a question is layered, high-stakes, or hard to untangle in a quick pull.",
  sections: [
    {
      id: "how-it-works",
      title: "How the Celtic Cross spread works",
      paragraphs: [
        "Ten cards are dealt into ten fixed positions, each covering a different facet of the situation: the heart of the matter, what crosses you, the foundation beneath it, what's passing away, what's possible, what's approaching, how you see yourself, outside influences, your hopes and fears, and finally the likely outcome. Reading it well means looking at each card individually and then at how the ten connect as a single story.",
        "Because there's so much more information here than in a single or three-card pull, AstroFree writes one paragraph per position and then a longer synthesis that draws the whole spread together — we'd recommend giving yourself a few unhurried minutes to read the full result.",
        "For a full walkthrough of what each of the ten positions means and how to read them together, see our step-by-step Celtic Cross guide.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use the Celtic Cross",
      paragraphs: [
        "This is the right spread for complex, multi-layered questions — a major life decision, a relationship with a long history, or a situation where a quick single-card or three-card read has left you wanting more depth. It's less suited to quick daily check-ins, where the One Card Reading is faster and easier to sit with.",
      ],
    },
  ],
  faqs: [
    {
      question: "How long does a Celtic Cross reading take?",
      answer:
        "Around 15 minutes to read through properly, given there are ten positions to work through plus a closing synthesis. It's the most involved spread AstroFree offers.",
    },
    {
      question: "Do I need tarot experience to read a Celtic Cross spread?",
      answer:
        "No — AstroFree's AI interpretation writes out the meaning of every position in plain language, so you don't need to already know the traditional layout to follow the reading.",
    },
    {
      question: "What's the difference between the Celtic Cross and a Three Card Reading?",
      answer:
        "Both use a Past/Present/Future-style logic, but the Celtic Cross adds seven more positions — challenge, foundation, hopes and fears, outside influences, and more — for a far more detailed picture. Use the Three Card Reading for lighter questions and the Celtic Cross when you want the full depth.",
    },
  ],
  relatedCards: [
    {
      slug: "the-wheel-of-fortune",
      name: "Wheel of Fortune",
      subtitle: "Cycles, fate, turning points",
      base: "/tarot/$slug",
    },
    {
      slug: "the-hermit",
      name: "The Hermit",
      subtitle: "Introspection, seeking answers within",
      base: "/tarot/$slug",
    },
    {
      slug: "the-world",
      name: "The World",
      subtitle: "Completion, integration, arrival",
      base: "/tarot/$slug",
    },
    {
      slug: "strength",
      name: "Strength",
      subtitle: "Quiet courage, resilience",
      base: "/tarot/$slug",
    },
  ],
  relatedLinks: [
    {
      to: "/guide/celtic-cross-guide",
      label: "Celtic Cross step-by-step guide",
      blurb: "A full walkthrough of all ten positions.",
    },
    {
      to: "/tarot",
      label: "All 78 tarot card meanings",
      blurb: "Browse the full major and minor arcana library.",
    },
    {
      to: "/tarot/three-card",
      label: "Three Card Reading",
      blurb: "A lighter spread for quicker questions.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
  ],
  ctaLabel: "Begin the Celtic Cross",
};

export const Route = createFileRoute("/tarot/celtic-cross")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "celtic cross tarot reading",
        "celtic cross tarot spread",
        "10 card tarot reading",
        "free tarot reading",
        "detailed tarot reading",
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
              { name: "Celtic Cross Reading", path: PATH },
            ],
            faqs: CONFIG.faqs,
          }),
        ),
      },
    ],
  }),
  component: () => <ReadingLanding config={CONFIG} />,
});
