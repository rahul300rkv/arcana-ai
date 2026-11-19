import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/numerology/mulank";
const TITLE = "Mulank (Birth Number) in Numerology: Complete Guide to 1–9";
const DESCRIPTION =
  "What Mulank means, how to calculate your birth number from your date of birth, and detailed guides to Mulank 1 through 9: planets, personality, career, compatibility and remedies.";

export const Route = createFileRoute("/numerology/mulank")({
  loader: async () => {
    const { MULANK_HUB_FAQS, MULANK_UPDATED } = await import("@/data/mulank");
    return { faqs: MULANK_HUB_FAQS, updated: MULANK_UPDATED };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "mulank",
        "birth number numerology",
        "mulank calculator",
        "radical number",
        "psychic number",
        "mulank 1 to 9",
        "driver number",
      ],
    }),
    links: [{ rel: "canonical", href: `${SITE_URL}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildContentJsonLd({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            updated: loaderData?.updated ?? "2026-08-04",
            crumbs: [
              { name: "Numerology", path: "/numerology" },
              { name: "Mulank", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/MulankHubScreen"), "MulankHubScreen"),
});
