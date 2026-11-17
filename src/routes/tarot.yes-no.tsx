import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/yes-no";
const TITLE = "Yes or No Tarot Reading — Free Instant Answer";
const DESCRIPTION =
  "Free yes or no tarot reading: draw a single card and get a clear yes, no, or maybe lean, plus an AI-guided explanation of why — always free, no signup.";

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
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "yes or no tarot reading",
        "yes no tarot",
        "yes/no tarot",
        "tarot yes or no answer",
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
              { name: "Yes or No Reading", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/TarotLandingScreens"), "YesNoReadingScreen"),
});
