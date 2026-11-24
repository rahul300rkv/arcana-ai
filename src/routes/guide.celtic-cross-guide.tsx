import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { getAllHreflangLinks } from "@/locales";

const PATH = "/guide/celtic-cross-guide";
const TITLE = "10-Card Celtic Cross Tarot Spread: Step-by-Step Guide";
const DESCRIPTION =
  "A complete step-by-step walkthrough of the 10 card tarot spread (Celtic Cross): what all 10 positions mean, how to lay them in order, and how to read them together.";
const UPDATED = "2026-11-18";

const FAQS = [
  {
    question: "How long does a Celtic Cross reading take?",
    answer:
      "Most readers spend 15 to 20 minutes on a full Celtic Cross: a few minutes to lay the ten cards, and the rest interpreting them individually and then together.",
  },
  {
    question: "What's the correct order to lay the ten cards in?",
    answer:
      'Present, Challenge (crossed over it), Foundation (below), Recent Past (left), Crown (above), Near Future (right) completes the central cross. Then Self, Environment, Hopes & Fears, and Outcome are laid bottom to top in a vertical line beside it, forming the "staff."',
  },
  {
    question: "Do I read the ten cards in the order they're laid, or some other order?",
    answer:
      "Read them in position order (1 through 10) on your first pass to build the story chronologically, then read the spread again as a whole, looking for repeated suits, numbers, or themes across all ten cards: that's usually where the clearest message emerges.",
  },
  {
    question: "Is the Celtic Cross too advanced for beginners?",
    answer:
      "It's more demanding than a Single Card or Three Card spread, but not off-limits to beginners: it simply rewards familiarity with upright and reversed card meanings first. Most readers try their first Celtic Cross after a few weeks of practice with smaller spreads.",
  },
  {
    question: "What if two positions seem to contradict each other?",
    answer:
      "That's common and meaningful, not a sign of a bad reading: it usually reflects real tension in the situation, such as the Hopes & Fears position pulling one way while the Outcome pulls another. Sit with the contradiction rather than picking whichever card you prefer.",
  },
      {
        question: "What is the 10 card tarot spread called?",
        answer:
          "The classic 10 card tarot spread is called the Celtic Cross. Positions 1–6 form the Cross (Present, Challenge, Foundation, Recent Past, Crown, Near Future), and Positions 7–10 form the Staff (Self, Environment, Hopes & Fears, Outcome).",
      },
    ];

export const Route = createFileRoute("/guide/celtic-cross-guide")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "10 card tarot spread",
        "ten card tarot spread",
        "celtic cross spread",
        "celtic cross tarot guide",
        "how to read celtic cross",
        "celtic cross positions meaning",
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
              { name: "Celtic Cross Guide", path: PATH },
            ],
            faqs: FAQS,
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/guides/GuideCelticCrossScreen"),
    "GuideCelticCrossScreen",
  ),
});
