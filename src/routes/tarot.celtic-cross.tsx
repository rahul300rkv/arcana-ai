import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/celtic-cross";
const TITLE = "Free Celtic Cross Tarot Reading Online (Instant 10-Card Spread)";
const DESCRIPTION =
  "Get a free, instant 10-card Celtic Cross tarot reading online. Draw your cards now for deep AI-guided insights into love, career, and your future path.";

export const Route = createFileRoute("/tarot/celtic-cross")({
  loader: async () => {
    const { CELTIC_CROSS_CONFIG } = await import("@/data/tarot-landings");
    return {
      published: CELTIC_CROSS_CONFIG.published,
      updated: CELTIC_CROSS_CONFIG.updated,
      faqs: CELTIC_CROSS_CONFIG.faqs,
    };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      exactTitle: true,
      keywords: [
        "free celtic cross tarot reading online",
        "celtic cross tarot reading",
        "celtic cross tarot spread",
        "10 card tarot reading",
        "free tarot reading",
        "detailed tarot reading",
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
            updated: loaderData?.updated ?? "2026-11-18",
            crumbs: [
              { name: "Tarot", path: "/tarot" },
              { name: "Celtic Cross Reading", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
            webApp: { name: "Free Celtic Cross Tarot Reading Online" },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/TarotLandingScreens"),
    "CelticCrossReadingScreen",
  ),
});
