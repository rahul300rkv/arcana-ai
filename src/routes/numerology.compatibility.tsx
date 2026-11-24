import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/numerology/compatibility";
const TITLE = "Mulank & Bhagyank Compatibility Matrix: All 81 Pairs (1–9 × 1–9)";
const DESCRIPTION =
  "Check your Vedic Mulank and Bhagyank compatibility across all 81 planetary pairs. Interactive matcher for career alignment, marriage harmony, Tarot correspondence, and remedies.";

export const Route = createFileRoute("/numerology/compatibility")({
  loader: async () => {
    const [{ PAIRS_UPDATED }, { COMPATIBILITY_HUB_FAQS }] = await Promise.all([
      import("@/data/mulank-bhagyank-pairs"),
      import("@/screens/MulankCompatibilityHubScreen"),
    ]);
    return { updated: PAIRS_UPDATED, faqs: COMPATIBILITY_HUB_FAQS };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "mulank bhagyank compatibility",
        "mulank and bhagyank combination chart",
        "81 numerology combinations",
        "driver conductor number compatibility",
        "vedic numerology marriage compatibility",
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
            updated: loaderData?.updated ?? "2026-11-19",
            crumbs: [
              { name: "Numerology", path: "/numerology" },
              { name: "Compatibility Matrix", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
            webApp: {
              name: "AstroFree Mulank & Bhagyank Compatibility Matrix",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/MulankCompatibilityHubScreen"),
    "MulankCompatibilityHubScreen",
  ),
});
