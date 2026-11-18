import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/yes-no-tarot";
const TITLE = "Free Yes or No Tarot Reading Online (Instant Oracle Answer)";
const DESCRIPTION =
  "Get a free yes or no tarot reading online: ask your question, draw a card, and reveal an instant Yes, No, or Maybe oracle answer with clear reasoning — no signup.";

export const Route = createFileRoute("/yes-no-tarot")({
  loader: async () => {
    const { YES_NO_CONFIG } = await import("@/data/tarot-landings");
    return {
      published: YES_NO_CONFIG.published,
      updated: YES_NO_CONFIG.updated,
      faqs: YES_NO_CONFIG.faqs,
    };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      exactTitle: true,
      keywords: [
        "free yes or no tarot reading online",
        "yes or no tarot",
        "yes no tarot reading",
        "instant tarot oracle answer",
        "ask the universe tarot",
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
              { name: "Yes or No Tarot Reading", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
            webApp: { name: "Free Yes or No Tarot Oracle" },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/TarotLandingScreens"), "YesNoReadingScreen"),
});
