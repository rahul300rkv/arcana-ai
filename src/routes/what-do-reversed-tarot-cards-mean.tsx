import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";

const PATH = "/what-do-reversed-tarot-cards-mean";
const TITLE = "What Do Reversed Tarot Cards Mean? How to Interpret Upside-Down Cards";
const DESCRIPTION =
  "What do reversed tarot cards mean? Learn how to read upside-down cards using the four practical lenses: blocked energy, internalized meaning, delay, and shadow aspect.";
const UPDATED = "2026-11-18";

const FAQS = [
  {
    question: "Does a reversed card always mean something negative?",
    answer:
      "No. A reversal usually signals that the card's energy is blocked, internal, delayed, or being expressed in its shadow form, not that the outcome is automatically bad. Some reversed cards, like a reversed Tower or Nine of Swords, can even soften a difficult upright meaning.",
  },
  {
    question: "Do I have to read reversed cards at all?",
    answer:
      "No. Reading every card upright is a completely valid, common approach, especially for beginners. Many experienced readers choose to read upright-only for clarity and add reversals later once the 78 upright meanings feel automatic.",
  },
  {
    question: "How do I decide if a card is reversed when shuffling?",
    answer:
      'Shuffle so some cards naturally flip during the process, for example, by including a few reversed cuts, or using a "riffle" or "overhand" shuffle without straightening the deck. Whatever orientation a card lands in when drawn is read as-is.',
  },
  {
    question:
      "Is a reversed Major Arcana card interpreted differently than a reversed Minor Arcana card?",
    answer:
      "The same four interpretive lenses apply to both, but Major Arcana reversals tend to describe a stalled or internalised life theme, while Minor Arcana reversals more often describe a practical delay, blockage, or an excess/deficiency in a specific area like money or communication.",
  },
  {
    question: "Can two people read the same reversed card differently?",
    answer:
      "Yes, and that's expected: reversed meanings depend heavily on the surrounding cards and the question asked, more so than upright meanings do. Consistency comes from picking one interpretive framework (blocked energy, internalized meaning, delay, or shadow aspect) and applying it thoughtfully.",
  },
];

export const Route = createFileRoute("/what-do-reversed-tarot-cards-mean")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      exactTitle: true,
      keywords: [
        "what do reversed tarot cards mean",
        "reversed tarot cards",
        "how to read reversed tarot",
        "upside down tarot card meaning",
        "tarot reversals explained",
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
              { name: "What Do Reversed Tarot Cards Mean?", path: PATH },
            ],
            faqs: FAQS,
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/guides/GuideReversedTarotCardsScreen"),
    "GuideReversedTarotCardsScreen",
  ),
});
