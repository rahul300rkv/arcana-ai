import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/love";
const TITLE = "Love Tarot Reading — Free Relationship Tarot";
const DESCRIPTION =
  "Free love tarot reading: draw four cards for You, Partner, The Relationship, and Future to explore the dynamics between you and someone else — AI-guided and always free.";

export const Route = createFileRoute("/tarot/love")({
  loader: async () => {
    const { LOVE_CONFIG } = await import("@/data/tarot-landings");
    return {
      published: LOVE_CONFIG.published,
      updated: LOVE_CONFIG.updated,
      faqs: LOVE_CONFIG.faqs,
    };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "love tarot reading",
        "love tarot",
        "relationship tarot reading",
        "free love tarot",
        "tarot for relationships",
      ],
    }),
    links: [{ rel: "canonical", href: `https://astrofree.vercel.app${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildContentJsonLd({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            published: loaderData?.published ?? "2026-08-16",
            updated: loaderData?.updated ?? "2026-11-16",
            crumbs: [
              { name: "Tarot", path: "/tarot" },
              { name: "Love Reading", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/TarotLandingScreens"), "LoveReadingScreen"),
});
