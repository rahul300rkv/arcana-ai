import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { getAllHreflangLinks } from "@/locales";

const PATH = "/major-arcana-tarot-cards-meanings";
const TITLE = "Major Arcana Tarot Cards & Meanings: All 22 Cards Explained";
const DESCRIPTION =
  "Every Major Arcana card from The Fool to The World, explained with archetypes, upright and reversed keywords, The Fool's Journey, and real-life reading examples.";
const UPDATED = "2026-11-18";

const FAQS = [
  {
    question: "What makes a card part of the Major Arcana rather than the Minor Arcana?",
    answer:
      "The 22 Major Arcana are numbered 0 (The Fool) through 21 (The World) and represent significant, archetypal life themes rather than everyday events. The 56 Minor Arcana, split into four suits, describe more immediate, situational influences.",
  },
  {
    question: "Does drawing a lot of Major Arcana cards in one spread mean something?",
    answer:
      "Many readers treat a spread dominated by Major Arcana as a sign the question touches something significant (a real turning point rather than routine day-to-day matters) while a Minor-Arcana-heavy spread points to more immediate, practical circumstances.",
  },
  {
    question: "Are Death and The Tower always bad cards?",
    answer:
      "No. Both describe necessary, often overdue change rather than literal disaster. Death marks an ending that clears space for growth, and The Tower marks the fast collapse of something unstable: disruptive, but usually clarifying rather than purely negative.",
  },
  {
    question: "Is there a correct order to learn the Major Arcana in?",
    answer:
      "The numbered sequence (0 to 21) is often read as a symbolic journey (The Fool's Journey) where each card represents a stage of growth. Learning them in that order can help the meanings build on each other logically.",
  },
  {
    question: "Do Major Arcana meanings change much when reversed?",
    answer:
      "The core theme stays the same, but reversed Major Arcana cards typically describe that theme as blocked, delayed, or turned inward rather than reversed outright: see AstroFree's dedicated guide to reversed tarot cards for the full method.",
  },
];

export const Route = createFileRoute("/guide/major-arcana-meanings")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      exactTitle: true,
      keywords: [
        "major arcana meanings",
        "22 major arcana explained",
        "major arcana tarot cards",
        "the fool's journey",
        "major arcana card list",
      ],
    }),
    links: [
      { rel: "canonical", href: `https://astrofree.vercel.app${PATH}` },
      ...getAllHreflangLinks(PATH, "https://astrofree.vercel.app"),
    ],
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
              { name: "Major Arcana Meanings", path: PATH },
            ],
            faqs: FAQS,
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/guides/GuideMajorArcanaMeaningsScreen"),
    "GuideMajorArcanaMeaningsScreen",
  ),
});
