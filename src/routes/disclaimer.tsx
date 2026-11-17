import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — AstroFree" },
      {
        name: "description",
        content:
          "AstroFree's tarot and numerology readings are for entertainment and self-reflection only. Read our full disclaimer before using the app.",
      },
      { property: "og:title", content: "Disclaimer — AstroFree" },
      {
        property: "og:description",
        content: "Important context on what AstroFree's readings are — and are not — intended for.",
      },
      { property: "og:url", content: `${SITE_URL}/disclaimer` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/disclaimer` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/disclaimer",
            title: "Disclaimer — AstroFree",
            description:
              "AstroFree's tarot and numerology readings are for entertainment and self-reflection only, and are not medical, legal, or financial advice.",
            crumbs: [
              {
                name: "Disclaimer",
                path: "/disclaimer",
              },
            ],
            article: {
              published: "2026-08-07",
              updated: "2026-11-16",
              section: "Legal",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/DisclaimerScreen"), "DisclaimerScreen"),
});
