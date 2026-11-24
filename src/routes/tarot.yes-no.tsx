import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";
import { getAllHreflangLinks } from "@/locales";

const CANONICAL_PATH = "/yes-no-tarot";
const TITLE = "Free Yes or No Tarot Reading Online (Instant Oracle Answer)";
const DESCRIPTION =
  "Get a free yes or no tarot reading online: ask your question, draw a card, and reveal an instant Yes, No, or Maybe oracle answer with clear reasoning: no signup.";

export const Route = createFileRoute("/tarot/yes-no")({
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
      path: CANONICAL_PATH,
      title: TITLE,
      description: DESCRIPTION,
      exactTitle: true,
      keywords: [
        "yes or no tarot reading",
        "yes no tarot",
        "yes/no tarot",
        "tarot yes or no answer",
        "free tarot reading",
      ],
    }),
    links: [
      { rel: "canonical", href: `https://astrofree.vercel.app${CANONICAL_PATH}` },
      ...getAllHreflangLinks(CANONICAL_PATH, "https://astrofree.vercel.app"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildContentJsonLd({
            path: CANONICAL_PATH,
            title: TITLE,
            description: DESCRIPTION,
            published: loaderData?.published ?? "2026-08-16",
            updated: loaderData?.updated ?? "2026-11-16",
            crumbs: [
              { name: "Tarot", path: "/tarot" },
              { name: "Yes or No Reading", path: CANONICAL_PATH },
            ],
            faqs: loaderData?.faqs ?? [],
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/TarotLandingScreens"), "YesNoReadingScreen"),
});
