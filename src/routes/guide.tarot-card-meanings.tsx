import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { getAllHreflangLinks } from "@/locales";

const MEANINGS_FAQS = [
  {
    question: "How many tarot cards are there?",
    answer:
      "A standard tarot deck has 78 cards: 22 Major Arcana trump cards tracing major life chapters from The Fool to The World, and 56 Minor Arcana cards split evenly across four elemental suits of 14 cards each.",
  },
  {
    question: "What does a reversed tarot card mean?",
    answer:
      "A reversed card usually softens, delays, blocks, or turns inward the upright archetype, signaling where energy feels internalized, resisted, or overdue for balanced adjustment rather than signifying automatic doom.",
  },
  {
    question: "Which tarot deck are these meanings based on?",
    answer:
      "All meanings follow the classic 1909 Rider–Waite–Smith pictorial system illustrated by Pamela Colman Smith under Arthur Edward Waite, chosen for its clear narrative scenes across every pip card.",
  },
  {
    question: "How do the four Minor Arcana suits map to daily life?",
    answer:
      "Wands (Fire) track creativity, ambition, and courage; Cups (Water) trace relationships, intuition, and emotional depth; Swords (Air) dissect intellect, conflict, and candid truth; and Pentacles (Earth) anchor finances, physical health, craftsmanship, and steady security.",
  },
  {
    question: "Should beginners memorize keywords or read the card artwork first?",
    answer:
      "Always observe posture, color, gaze direction, and weather inside the illustration before consulting memorized keywords. Connecting visual cues directly to your spread question produces far sharper, less mechanical readings.",
  },
];

export const Route = createFileRoute("/guide/tarot-card-meanings")({
  head: () => ({
    meta: [
      { title: "Tarot Card Meanings | All 78 Cards, Upright & Reversed | AstroFree" },
      {
        name: "description",
        content:
          "A complete free tarot card meanings guide: upright and reversed meanings for all 22 Major Arcana and 56 Minor Arcana cards, plus deck structure, four elements, and domain applications.",
      },
      {
        name: "keywords",
        content:
          "tarot card meanings, major arcana meanings, minor arcana meanings, tarot cards upright reversed, tarot card guide, wands cups swords pentacles meanings",
      },
      { property: "og:title", content: "Tarot Card Meanings | All 78 Cards, Upright & Reversed" },
      { property: "og:url", content: `${SITE_URL}/guide/tarot-card-meanings` },
    ],
    links: [
      { rel: "canonical", href: `https://astrofree.vercel.app/guide/tarot-card-meanings` },
      ...getAllHreflangLinks("/guide/tarot-card-meanings", "https://astrofree.vercel.app"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/guide/tarot-card-meanings",
            title: "Tarot Card Meanings | All 78 Cards, Upright & Reversed",
            description:
              "Free tarot card meanings for all 78 Rider-Waite-Smith cards, with upright and reversed interpretations and deck architecture guide.",
            crumbs: [
              {
                name: "Guides",
                path: "/guide",
              },
              {
                name: "Tarot Card Meanings",
                path: "/guide/tarot-card-meanings",
              },
            ],
            faqs: MEANINGS_FAQS,
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
    () => import("@/screens/guides/GuideTarotCardMeaningsScreen"),
    "GuideTarotCardMeaningsScreen",
  ),
});
