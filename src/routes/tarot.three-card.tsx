import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/three-card";
const TITLE = "Three Card Tarot Reading — Past, Present, Future";
const DESCRIPTION =
  "Free three card tarot reading: draw Past, Present, and Future cards for a clear AI-guided read on how your situation is developing and where it's heading.";

export const Route = createFileRoute("/tarot/three-card")({
  loader: async () => {
    const { THREE_CARD_CONFIG } = await import("@/data/tarot-landings");
    return {
      published: THREE_CARD_CONFIG.published,
      updated: THREE_CARD_CONFIG.updated,
      faqs: THREE_CARD_CONFIG.faqs,
    };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "three card tarot reading",
        "3 card tarot reading",
        "three card tarot spread",
        "past present future tarot",
        "free tarot reading",
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
              { name: "Three Card Reading", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/TarotLandingScreens"),
    "ThreeCardReadingScreen",
  ),
});
