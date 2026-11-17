import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";

export const Route = createFileRoute("/guide/numerology")({
  head: () => ({
    meta: [
      { title: "Mulank Numerology Guide — How Personal Year & Month Are Calculated | AstroFree" },
      {
        name: "description",
        content:
          "A free guide to Mulank numerology: how to calculate your root number, Personal Year, and Personal Month from your birth date, worked examples, and what each of the nine numbers means.",
      },
      {
        name: "keywords",
        content:
          "mulank numerology guide, how to calculate mulank, personal year number calculation, personal month number calculation, root number numerology, numerology meanings 1 to 9",
      },
      {
        property: "og:title",
        content: "Mulank Numerology Guide — How Personal Year & Month Are Calculated",
      },
      { property: "og:url", content: `${SITE_URL}/guide/numerology` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/guide/numerology` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/guide/numerology",
            title: "Mulank Numerology Guide — How Personal Year & Month Are Calculated",
            description:
              "A free guide to Mulank (root number) numerology: how your Mulank, Personal Year, and Personal Month numbers are calculated, with worked examples.",
            crumbs: [
              {
                name: "Guides",
                path: "/guide",
              },
              {
                name: "Mulank Numerology Guide",
                path: "/guide/numerology",
              },
            ],
            faqs: [
              {
                question: "What is a Mulank number?",
                answer:
                  "Your Mulank, or root number, is the single digit you get by reducing your day of birth. Born on the 28th? 2+8=10, then 1+0=1, so your Mulank is 1.",
              },
              {
                question: "How is a Personal Year number calculated?",
                answer:
                  "Add your birth day and birth month to the target year, then reduce the total to a single digit. That number describes the theme of that year for you.",
              },
              {
                question: "How is a Personal Month number calculated?",
                answer:
                  "Add your Personal Year number to the calendar month number and reduce the result to a single digit.",
              },
              {
                question: "Are master numbers 11 and 22 reduced?",
                answer:
                  "In this guide the final Mulank is reduced to 1-9, while 11 and 22 are treated as master life path numbers with their own dedicated pages.",
              },
            ],
            article: {
              published: "2026-08-07",
              updated: "2026-11-16",
              section: "Numerology",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/guides/GuideNumerologyScreen"),
    "GuideNumerologyScreen",
  ),
});
