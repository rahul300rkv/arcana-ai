import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/one-card";
const TITLE = "One Card Tarot Reading — Free Daily Card Pull";
const DESCRIPTION =
  "Draw one tarot card for a focused, free AI-guided reading. A quick single-card pull for daily check-ins, yes/no questions, or a clear message right now.";

export const Route = createFileRoute("/tarot/one-card")({
  loader: async () => {
    const { ONE_CARD_CONFIG } = await import("@/data/tarot-landings");
    return {
      published: ONE_CARD_CONFIG.published,
      updated: ONE_CARD_CONFIG.updated,
      faqs: ONE_CARD_CONFIG.faqs,
    };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "one card tarot reading",
        "single card tarot reading",
        "one card tarot",
        "daily tarot card",
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
              { name: "One Card Reading", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/TarotLandingScreens"),
    "OneCardReadingScreen",
  ),
});
