import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AstroFree — Editorial Mission" },
      {
        name: "description",
        content:
          "Learn how AstroFree creates free tarot and numerology education, why we combine AI with editorial review, and how we keep guidance responsible and privacy-first.",
      },
      { property: "og:title", content: "About AstroFree — Editorial Mission" },
      {
        property: "og:description",
        content:
          "AstroFree is a free educational tarot and numerology platform built for reflection, clarity, and responsible learning.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/about",
            title: "About AstroFree — Our Story & Mission",
            description:
              "Who builds AstroFree, why the app is free, and how we approach tarot and numerology content.",
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
