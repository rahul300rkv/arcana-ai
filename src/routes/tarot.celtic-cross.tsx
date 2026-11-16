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
  published: "2026-08-16",
  updated: "2026-11-16",
  readingTime: "8 min read",
  sections: [
    {
      id: "how-it-works",
      title: "How the Celtic Cross spread works",
      paragraphs: [
        "Ten cards are dealt into ten fixed positions, each illuminating a distinct layer of the situation: the heart of the matter (1), what crosses or challenges you (2), the hidden foundation beneath it (3), what is passing away (4), the highest potential or conscious goal (5), what is approaching next (6), how you see yourself (7), outside influences around you (8), your hopes and fears (9), and finally the likely outcome (10).",
        "Because ten cards carry dramatically more nuance than a quick pull, AstroFree writes a dedicated paragraph for every position and then weaves all ten into a comprehensive closing synthesis — giving you a structured, readable narrative rather than ten disconnected dictionary entries.",
        "For a full position-by-position reference with worked reading tips, see our companion step-by-step Celtic Cross guide.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use the Celtic Cross",
      paragraphs: [
        "Reach for the Celtic Cross when your question is complex, multi-layered, or carries real emotional stakes — a major career pivot, a long-term relationship crossroads, moving to a new city, or a chapter where shorter spreads have only scratched the surface.",
        "It is intentionally unhurried. If you only need a fast morning check-in or a single directional lean, the One Card or Three Card reading is lighter and easier to digest. Save the Celtic Cross for moments when you have ten or fifteen quiet minutes to reflect.",
      ],
    },
    {
      id: "cross-and-staff",
      title: "Anatomy of the Cross (1–6) and the Staff (7–10)",
      paragraphs: [
        "Most readers mentally divide the Celtic Cross into two halves. Positions 1 through 6 form the Cross: they examine the situation itself — the core tension between Positions 1 and 2, the timeline flowing horizontally from Position 4 (Recent Past) to Position 6 (Near Future), and the vertical axis connecting subconscious roots (Position 3) with conscious aspirations (Position 5).",
        "Positions 7 through 10 form the Staff on the right side, shifting the lens toward psychology and context. Position 7 mirrors your inner attitude, Position 8 reflects people or external circumstances shaping the arena, Position 9 exposes what you secretly wish for or dread, and Position 10 integrates everything into the culminating trajectory.",
      ],
    },
    {
      id: "pattern-spotting",
      title: "Spotting dominant suits, court cards, and Major Arcana",
      paragraphs: [
        "After reading the ten positions in order, step back and look for repetition. If four or more cards belong to the same suit — say, Swords or Pentacles — that element names the true centerpiece of the issue, even if your question sounded like it belonged to another area of life.",
        "Similarly, three or more Court Cards (Pages, Knights, Queens, Kings) often indicate that multiple personalities, mentors, or competing roles are influencing the outcome. Multiple Major Arcana cards signal a milestone chapter where deeper personal growth matters just as much as immediate logistics.",
      ],
    },
    {
      id: "preparing-your-reading",
      title: "Getting the most out of a ten-card reading",
      paragraphs: [
        "Before drawing, write down or state your question in plain, honest language. Broad, open framing such as 'Help me understand what is unfolding in my creative life and career over the next six months' works far better across ten cards than a narrow yes/no question.",
        "Once your synthesis appears, pay attention to the relationship between Position 3 (Foundation), Position 9 (Hopes & Fears), and Position 10 (Outcome). Very often, shifting an unspoken fear revealed in Position 9 directly unlocks a healthier outcome.",
      ],
    },
  ],
  samplePull: {
    question: "How can I navigate the next six months of relocating to a new city and restarting my work?",
    positions: [
      {
        position: "1 · Present & 2 · Challenge",
        card: "The Fool (Upright) crossed by Four of Pentacles (Upright)",
        reading:
          "A genuine willingness to start fresh (The Fool) sits directly in tension with clinging tightly to security, old routines, and financial caution (Four of Pentacles). Growth requires smart budgeting without letting fear freeze movement.",
      },
      {
        position: "3 · Foundation & 5 · Crown",
        card: "Nine of Wands (Upright) beneath The Star (Upright)",
        reading:
          "Your resilience comes from hard-earned endurance through past setbacks (Nine of Wands), while your conscious aspiration (The Star) seeks calmer purpose, community healing, and creative renewal.",
      },
      {
        position: "7 · Self, 9 · Hopes & Fears, 10 · Outcome",
        card: "Queen of Pentacles · Two of Cups · The World (Upright)",
        reading:
          "Seeing yourself as capable and practical (Queen of Pentacles) while craving genuine belonging (Two of Cups) points toward The World in Outcome: closing an older chapter cleanly and establishing rooted wholeness in the new setting.",
      },
    ],
    synthesis:
      "When reading the full ten-card arc, practical grounding pairs with major life integration (The Fool in 1 moving into The World in 10). Build a transparent cash runway to satisfy Position 2, then give new local friendships room to take root.",
  },
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
    {
      question: "Why does Position 2 'cross' Position 1 — is it always negative?",
      answer:
        "No. Although Position 2 is often called the Challenge or Crossing card, it represents whatever intersects with the main situation. Sometimes a positive card there shows an opportunity you aren't sure how to integrate yet, or an asset you are overlooking.",
    },
    {
      question: "Can I revisit a Celtic Cross reading weeks later?",
      answer:
        "Yes — in fact, the Celtic Cross rewards revisiting. Saving your reading to your local journal and re-reading Positions 6, 8, and 10 a month later is one of the best ways to notice how subtle symbols played out in real life.",
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
            published: CONFIG.published,
            updated: CONFIG.updated,
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
