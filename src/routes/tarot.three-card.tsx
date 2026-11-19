import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/three-card";
const TITLE = "Free 3 Card Tarot Reading Online (Past, Present & Future)";
const DESCRIPTION =
  "Draw a free 3 card tarot spread online right now. Explore Past, Present & Future or Situation, Challenge & Advice cards with instant meanings and AI guidance.";

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
        "3 card tarot reading",
        "three card tarot reading",
        "3 card tarot spread",
        "three card tarot spread",
        "astro 3 card tarot",
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
            updated: loaderData?.updated ?? "2026-11-18",
            crumbs: [
              { name: "Tarot", path: "/tarot" },
              { name: "Three Card Reading", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
            webApp: { name: "Free 3 Card Tarot Reading Online" },
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
