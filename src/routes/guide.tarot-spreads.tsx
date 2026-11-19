import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";

const SPREADS_FAQS = [
  {
    question: "Which tarot spread should a beginner use?",
    answer:
      "Start with the Single Card or Three Card spread — few positions, crisp narrative structure, and easy to cross-check against real-world events without overwhelm.",
  },
  {
    question: "What is the Celtic Cross spread?",
    answer:
      "The Celtic Cross is a traditional ten-card layout examining present situation, immediate crossing challenge, conscious aims, subconscious roots, recent past, near future, internal stance, external influences, hopes and fears, and likely outcome.",
  },
  {
    question: "Can I use any spread for any question?",
    answer:
      "Yes, though tailored topic layouts deliver clearer contrast — Love spreads compare two partners evenly while Decision spreads illuminate blindspots between distinct paths.",
  },
  {
    question: "How should I word questions before pulling a spread?",
    answer:
      "Frame open-ended questions beginning with 'What helps me see...', 'How can I approach...', or 'What dynamic deserves attention in...' rather than passive fatalistic 'When will...' phrasing.",
  },
];

export const Route = createFileRoute("/guide/tarot-spreads")({
  head: () => ({
    meta: [
      { title: "Tarot Spreads Explained — Single Card to Celtic Cross | AstroFree" },
      {
        name: "description",
        content:
          "Explore 8 tarot spreads from Single Card to the 10-card Celtic Cross. Learn every card position for Love, Career, Decision, and Year Ahead draws.",
      },
      {
        name: "keywords",
        content:
          "tarot spreads, celtic cross spread, three card tarot spread, love tarot spread, career tarot spread, year ahead tarot spread, tarot spread meanings",
      },
      { property: "og:title", content: "Tarot Spreads Explained — Single Card to Celtic Cross" },
      {
        property: "og:description",
        content:
          "Explore 8 tarot spreads from Single Card to the 10-card Celtic Cross. Learn every card position for Love, Career, Decision, and Year Ahead draws.",
      },
      { property: "og:url", content: `${SITE_URL}/guide/tarot-spreads` },
      { name: "twitter:title", content: "Tarot Spreads Explained — Single Card to Celtic Cross" },
      {
        name: "twitter:description",
        content:
          "Explore 8 tarot spreads from Single Card to the 10-card Celtic Cross. Learn every card position for Love, Career, Decision, and Year Ahead draws.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/guide/tarot-spreads` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/guide/tarot-spreads",
            title: "Tarot Spreads Explained — Single Card to Celtic Cross",
            description:
              "A free guide to tarot spreads: what each position means in the Single Card, Three Card, Love, Career, Money, Decision, Celtic Cross, and Year Ahead spreads.",
            crumbs: [
              {
                name: "Guides",
                path: "/guide",
              },
              {
                name: "Tarot Spreads",
                path: "/guide/tarot-spreads",
              },
            ],
            faqs: SPREADS_FAQS,
            article: {
              published: "2026-08-07",
              updated: "2026-11-16",
              section: "Tarot",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/guides/GuideTarotSpreadsScreen"),
    "GuideTarotSpreadsScreen",
  ),
});
