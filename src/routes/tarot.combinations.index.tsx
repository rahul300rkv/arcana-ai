import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks } from "@/locales";

const PATH = "/tarot/combinations";
const TITLE = "Tarot Card Combinations Meanings: Interactive 78×78 Pair Explorer";
const DESCRIPTION =
  "Discover what any two tarot cards mean together. Interactive 78-card combination explorer plus deep guides on love, career, Card of the Day pairings, and combined Yes or No verdicts.";

export const Route = createFileRoute("/tarot/combinations/")({
  loader: async () => {
    const [{ COMBINATIONS_UPDATED }, { COMBINATIONS_HUB_FAQS }] = await Promise.all([
      import("@/data/tarot-combinations"),
      import("@/screens/TarotCombinationsHubScreen"),
    ]);
    return { updated: COMBINATIONS_UPDATED, faqs: COMBINATIONS_HUB_FAQS };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "tarot card combinations",
        "tarot combination meanings",
        "two card tarot spread meanings",
        "the high priestess and ten of swords",
        "tarot combinations love",
      ],
    }),
    links: [
      { rel: "canonical", href: `https://astrofree.vercel.app${PATH}` },
      ...getAllHreflangLinks(PATH, "https://astrofree.vercel.app"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildContentJsonLd({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            updated: loaderData?.updated ?? "2026-11-19",
            crumbs: [
              { name: "Tarot", path: "/tarot" },
              { name: "Combinations", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
            webApp: {
              name: "AstroFree 78x78 Tarot Combination Synthesizer",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/TarotCombinationsHubScreen"),
    "TarotCombinationsHubScreen",
  ),
});
