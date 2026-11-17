import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";

const PATH = "/guide/celtic-cross-guide";
const TITLE = "Celtic Cross Spread: Step-by-Step Guide";
const DESCRIPTION =
  "A complete, step-by-step walkthrough of the ten-card Celtic Cross tarot spread — what each position means, the order to lay and read them in, and how to weave all ten into one coherent answer.";
const UPDATED = "2026-08-14";

const FAQS = [
  {
    question: "How long does a Celtic Cross reading take?",
    answer:
      "Most readers spend 15 to 20 minutes on a full Celtic Cross — a few minutes to lay the ten cards, and the rest interpreting them individually and then together.",
  },
  {
    question: "What's the correct order to lay the ten cards in?",
    answer:
      'Present, Challenge (crossed over it), Foundation (below), Recent Past (left), Crown (above), Near Future (right) completes the central cross. Then Self, Environment, Hopes & Fears, and Outcome are laid bottom to top in a vertical line beside it, forming the "staff."',
  },
  {
    question: "Do I read the ten cards in the order they're laid, or some other order?",
    answer:
      "Read them in position order (1 through 10) on your first pass to build the story chronologically, then read the spread again as a whole, looking for repeated suits, numbers, or themes across all ten cards — that's usually where the clearest message emerges.",
  },
  {
    question: "Is the Celtic Cross too advanced for beginners?",
    answer:
      "It's more demanding than a Single Card or Three Card spread, but not off-limits to beginners — it simply rewards familiarity with upright and reversed card meanings first. Most readers try their first Celtic Cross after a few weeks of practice with smaller spreads.",
  },
  {
    question: "What if two positions seem to contradict each other?",
    answer:
      "That's common and meaningful, not a sign of a bad reading — it usually reflects real tension in the situation, such as the Hopes & Fears position pulling one way while the Outcome pulls another. Sit with the contradiction rather than picking whichever card you prefer.",
  },
];

export const Route = createFileRoute("/guide/celtic-cross-guide")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "celtic cross spread",
        "celtic cross tarot guide",
        "how to read celtic cross",
        "celtic cross positions meaning",
        "ten card tarot spread",
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
