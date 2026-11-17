import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

const TITLE = "Free AI Tarot Reading & Tarot Card Meanings — All 78 Cards";
const DESCRIPTION =
  "Start a free AI tarot reading, or browse in-depth meanings for all 78 tarot cards: upright and reversed interpretations, love, career, money, and yes/no answers.";

const TAROT_FAQS = [
  {
    question: "Is the AI tarot reading really free?",
    answer:
      "Yes — every reading, every spread, and the full 78-card meanings library are free, with no signup required.",
  },
  {
    question: "What's the difference between this page and the Tarot Card Meanings guide?",
    answer:
      "This page is the searchable, filterable directory of all 78 cards and the entry point for a reading. The Tarot Card Meanings guide is a faster quick-reference version for looking up a single card's meaning at a glance.",
  },
  {
    question: "Which tarot spread should I start with?",
    answer:
      "If you're new to tarot, start with a One Card or Three Card reading. Save the Celtic Cross for questions where you want real depth.",
  },
  {
    question: "Are tarot readings predictions?",
    answer:
      "No — AstroFree frames tarot as a reflective, symbolic tool for self-exploration, not a deterministic forecast or a substitute for professional advice.",
  },
];

export const Route = createFileRoute("/tarot/")({
  loader: async () => {
    const { TAROT_CARD_LIST } = await import("@/data/tarot-list");
    return { cards: TAROT_CARD_LIST };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: "/tarot",
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "tarot card meanings",
        "all 78 tarot cards",
        "major arcana meanings",
        "minor arcana meanings",
        "reversed tarot meanings",
      ],
    }),
    links: [{ rel: "canonical", href: `${SITE_URL}/tarot` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-07-15",
          dateModified: "2026-11-16",
          url: `${SITE_URL}/tarot`,
          hasPart: (loaderData?.cards ?? []).map((p) => ({
            "@type": "Article",
            headline: p.name,
            url: `${SITE_URL}/tarot/${p.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: TAROT_FAQS.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/TarotIndexScreen"), "TarotIndexScreen"),
});
