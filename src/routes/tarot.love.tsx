import { createFileRoute } from "@tanstack/react-router";
import { ReadingLanding, type ReadingLandingConfig } from "@/components/tarot/ReadingLanding";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/love";
const TITLE = "Love Tarot Reading — Free Relationship Tarot";
const DESCRIPTION =
  "Free love tarot reading: draw four cards for You, Partner, The Relationship, and Future to explore the dynamics between you and someone else — AI-guided and always free.";

const CONFIG: ReadingLandingConfig = {
  path: PATH,
  spreadId: "love",
  eyebrow: "Love Reading",
  h1: "Love Tarot Reading",
  intro:
    "The Love Tarot Reading lays out four cards — You, Partner, The Relationship, and Future — to illuminate the dynamics between you and another person, whether that's an existing relationship, a situationship, or someone you're still figuring out.",
  sections: [
    {
      id: "how-it-works",
      title: "How the love reading works",
      paragraphs: [
        "Four cards are drawn into four positions: your own energy in the connection, the other person's energy as reflected through the cards, the bond you share, and where the connection appears to be heading. Reading both people's positions side by side, rather than just your own, is what makes this spread specifically useful for relationships.",
        "AstroFree's AI interpretation reads each position against your stated question, then closes with a synthesis that names the pattern running through all four cards together.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a relationship tarot reading",
      paragraphs: [
        "This spread fits any question involving another person's energy alongside your own — a new relationship you're unsure about, a long-term partnership going through a rough patch, or wondering whether to reach out to someone. It's less suited to single-person questions like career or personal decisions, where the Career Reading or Decision Making spread will read more precisely.",
        "A love reading reflects patterns and energy, not a guaranteed outcome — it can't tell you what another person will actually decide to do, only offer a mirror for the dynamic as it currently stands.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can a love tarot reading tell me if someone likes me?",
      answer:
        "It can offer a reflective read on the energy between you, but tarot describes patterns and possibilities, not certainties — it isn't a substitute for an honest conversation with the person.",
    },
    {
      question: "What if I'm not currently in a relationship?",
      answer:
        "The spread still works for a situationship, a crush, or someone you're considering reconnecting with — just set your intention around that specific connection before drawing.",
    },
    {
      question: "Is this reading appropriate for a breakup or divorce question?",
      answer:
        "Yes, many people use it that way — set your question around the relationship's current state or path forward rather than framing it as You vs Partner in conflict.",
    },
  ],
  relatedCards: [
    {
      slug: "the-lovers",
      name: "The Lovers",
      subtitle: "Connection, choice, union",
      base: "/tarot/$slug",
    },
    {
      slug: "two-of-cups",
      name: "Two of Cups",
      subtitle: "Mutual attraction, partnership",
      base: "/tarot/$slug",
    },
    {
      slug: "ten-of-cups",
      name: "Ten of Cups",
      subtitle: "Lasting happiness, harmony",
      base: "/tarot/$slug",
    },
    {
      slug: "the-tower",
      name: "The Tower",
      subtitle: "Sudden change, upheaval, truth",
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
      to: "/tarot/career",
      label: "Career Reading",
      blurb: "Get clarity on work and direction with the same 4-card structure.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
    {
      to: "/guide/tarot-card-meanings",
      label: "Tarot card meanings guide",
      blurb: "Quick-reference every card's upright and reversed meaning.",
    },
  ],
  ctaLabel: "Start your love reading",
};

export const Route = createFileRoute("/tarot/love")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "love tarot reading",
        "love tarot",
        "relationship tarot reading",
        "free love tarot",
        "tarot for relationships",
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
              { name: "Love Reading", path: PATH },
            ],
            faqs: CONFIG.faqs,
          }),
        ),
      },
    ],
  }),
  component: () => <ReadingLanding config={CONFIG} />,
});
