import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";

const PATH = "/guide/tarot-for-beginners";
const TITLE = "Complete Guide to Tarot Reading for Beginners";
const DESCRIPTION =
  "A step-by-step beginner's guide to tarot reading: the deck structure, how to shuffle and draw, your first spreads, and how to actually interpret a card instead of just memorising meanings.";
const UPDATED = "2026-08-14";

const FAQS = [
  {
    question: "Do I need a special deck to start reading tarot?",
    answer:
      "No. Any standard 78-card Rider–Waite–Smith style deck works, and even a well-illustrated app deck is fine while you're learning. What matters more than the deck is consistency: using the same one while you build familiarity with its imagery.",
  },
  {
    question: "How long does it take to learn tarot?",
    answer:
      "Most beginners feel comfortable with single-card pulls within a week or two, and confident with three-card spreads within a month of regular practice. Fluency with all 78 cards in varied spreads typically takes six months to a year of consistent reading.",
  },
  {
    question: "Do reversed cards mean something bad?",
    answer:
      "Not inherently. A reversed card usually points to an internalised, blocked, delayed, or shadow version of the upright meaning, not automatic misfortune. Many beginners choose to read every card upright at first, and add reversals once the upright meanings feel solid.",
  },
  {
    question: "Can I read tarot for myself, or do I need someone else to do it?",
    answer:
      "Self-reading is not only allowed, it's how most readers build their skill. The main challenge is staying neutral about a question you're emotionally invested in, which is why writing your question down before you shuffle helps keep the reading honest.",
  },
  {
    question: "Is tarot reading predicting the future?",
    answer:
      "Tarot is best treated as a structured reflection tool: the cards surface patterns, blind spots, and likely trajectories based on the energy already in motion, rather than fixed, unchangeable events. Most practising readers treat outcomes as probable, not certain.",
  },
];

export const Route = createFileRoute("/guide/tarot-for-beginners")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "tarot for beginners",
        "how to read tarot cards",
        "learn tarot reading",
        "tarot card meanings for beginners",
        "how to shuffle tarot cards",
        "first tarot spread",
      ],
    }),
    links: [{ rel: "canonical", href: `${SITE_URL}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildContentJsonLd({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            updated: UPDATED,
            crumbs: [
              { name: "Guides", path: "/guide" },
              { name: "Tarot for Beginners", path: PATH },
            ],
            faqs: FAQS,
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/guides/GuideTarotForBeginnersScreen"),
    "GuideTarotForBeginnersScreen",
  ),
});
