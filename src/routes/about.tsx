import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AstroFree — Mission, Editorial Standards & Privacy" },
      {
        name: "description",
        content:
          "Discover how AstroFree builds free AI tarot readings and Vedic numerology guides with strict privacy, editorial review, and clear disclaimers.",
      },
      {
        property: "og:title",
        content: "About AstroFree — Mission, Editorial Standards & Privacy",
      },
      {
        property: "og:description",
        content:
          "Discover how AstroFree builds free AI tarot readings and Vedic numerology guides with strict privacy, editorial review, and clear disclaimers.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
      {
        name: "twitter:title",
        content: "About AstroFree — Mission, Editorial Standards & Privacy",
      },
      {
        name: "twitter:description",
        content:
          "Discover how AstroFree builds free AI tarot readings and Vedic numerology guides with strict privacy, editorial review, and clear disclaimers.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/about",
            title: "About AstroFree — Mission, Editorial Standards & Privacy",
            description:
              "Discover how AstroFree builds free AI tarot readings and Vedic numerology guides with strict privacy, editorial review, and clear disclaimers.",
            crumbs: [
              {
                name: "About",
                path: "/about",
              },
            ],
            article: {
              published: "2026-08-07",
              updated: "2026-11-16",
              section: "Company",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/AboutScreen"), "AboutScreen"),
});
