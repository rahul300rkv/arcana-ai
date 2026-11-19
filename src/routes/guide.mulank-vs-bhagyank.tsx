import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";

const PATH = "/guide/mulank-vs-bhagyank";
const TITLE = "Mulank vs Bhagyank: Numerology in Indian Tradition";
const DESCRIPTION =
  "The difference between Mulank (birth number) and Bhagyank (destiny number) in Indian Vedic numerology: how each is calculated, what they govern, and how to read them together.";
const UPDATED = "2026-08-14";

const FAQS = [
  {
    question: "What is the difference between Mulank and Bhagyank?",
    answer:
      "Mulank (also called Moolank) is calculated only from your day of birth and describes your core personality and instinctive nature. Bhagyank is calculated from your full date of birth and describes your life path, destiny, and the larger arc your life tends to follow.",
  },
  {
    question: "Which number matters more, Mulank or Bhagyank?",
    answer:
      "Neither outranks the other: they describe different layers. Mulank is closer to how you naturally behave day to day, while Bhagyank shapes the long-term direction and major turning points of your life. A full reading considers both together.",
  },
  {
    question: "Can Mulank and Bhagyank be the same number?",
    answer:
      "Yes. If your birth day itself already reduces cleanly and lines up with your full birth date's reduced total, the two numbers can match. When they do, most Indian numerologists read it as a sign of unusual internal alignment between your personality and your life direction.",
  },
  {
    question: "Is this the same as Western numerology's Life Path number?",
    answer:
      "Bhagyank is calculated the same way as the Western Life Path number: reducing the full birth date to a single digit. Mulank has no exact Western equivalent; it's closer to, but not identical to, a birth-day or personality number used in some Western systems.",
  },
  {
    question: "Do master numbers 11 and 22 apply to Bhagyank?",
    answer:
      "In most Indian numerology traditions, yes: a Bhagyank total of 11 or 22 is often kept unreduced and treated as a master number carrying amplified potential and responsibility, rather than being reduced further to 2 or 4.",
  },
];

export const Route = createFileRoute("/guide/mulank-vs-bhagyank")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "mulank vs bhagyank",
        "indian numerology",
        "vedic numerology",
        "moolank calculation",
        "bhagyank calculation",
        "destiny number numerology",
        "birth number vs destiny number",
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
              { name: "Mulank vs Bhagyank", path: PATH },
            ],
            faqs: FAQS,
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/guides/GuideMulankVsBhagyankScreen"),
    "GuideMulankVsBhagyankScreen",
  ),
});
