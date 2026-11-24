import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { getAllHreflangLinks } from "@/locales";

const GUIDE_HUB_FAQS = [
  {
    question: "Which guide should an absolute beginner read first?",
    answer:
      "Start with Tarot for Beginners to learn the 22 Major Arcana vs. 56 Minor Arcana structure, how shuffling works, and how to formulate open-ended questions before jumping into complex spreads.",
  },
  {
    question: "How do AstroFree's tarot and Vedic numerology guides fit together?",
    answer:
      "Tarot captures the texture of immediate circumstances and personal choices, while Indian Ank Shastra (Mulank, Bhagyank, and Namank) maps temperament and multi-year timing cycles: pair both to compare daily nuance against longer life arcs.",
  },
  {
    question: "Are all AstroFree study guides free without account registration?",
    answer:
      "Yes. All eight in-depth tutorials, our 78 individual tarot card pages, and every Mulank and Life Path reference page remain open without paywalls or mandatory accounts.",
  },
  {
    question: "Why does AstroFree include reversed card guidance?",
    answer:
      "Reversals prevent one-dimensional fatalistic readings by highlighting when a card's core energy sits internalized, blocked, overdue, or subtly overexpressed: helpful context covered step by step in Reversed Tarot Cards.",
  },
];

export const Route = createFileRoute("/guide/")({
  head: () => ({
    meta: [
      { title: "Tarot & Numerology Guides | AstroFree" },
      {
        name: "description",
        content:
          "Free tarot and numerology guides covering 78 card meanings, tarot spreads, Mulank vs Bhagyank calculation, and Personal Year explanations.",
      },
      { property: "og:title", content: "Tarot & Numerology Guides | AstroFree" },
      {
        property: "og:description",
        content:
          "Learn tarot spreads, card meanings, and Mulank numerology with clear educational guides from AstroFree.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/guide` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/guide` },
      ...getAllHreflangLinks("/guide", SITE_URL),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/guide",
            title: "Tarot & Numerology Guides | AstroFree",
            description:
              "Free tarot and numerology guides: 78 card meanings, spreads, and Mulank calculations.",
            crumbs: [
              {
                name: "Guides",
                path: "/guide",
              },
            ],
            faqs: GUIDE_HUB_FAQS,
            article: {
              published: "2026-07-15",
              updated: "2026-11-16",
              section: "Guides",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/guides/GuideIndexScreen"),
    "GuideIndexScreen",
  ),
});
