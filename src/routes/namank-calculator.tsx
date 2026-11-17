import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/namank-calculator";
const META_TITLE = "Namank Calculator: Find Your Name Number";
const DESCRIPTION =
  "Calculate your Namank (Name Number) using Chaldean numerology. Enter your name for an instant calculation, a transparent letter-by-letter breakdown, and a full guide to what your number means.";

export const Route = createFileRoute("/namank-calculator")({
  loader: async () => {
    const { NAMANK_FAQS, NAMANK_UPDATED } = await import("@/data/namank");
    return { faqs: NAMANK_FAQS, updated: NAMANK_UPDATED };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: META_TITLE,
      description: DESCRIPTION,
      keywords: [
        "namank calculator",
        "name number calculator",
        "chaldean numerology",
        "namank number",
        "namank vs mulank",
        "name numerology",
        "master numbers 11 22",
        "free numerology calculator",
      ],
    }),
    links: [{ rel: "canonical", href: `${SITE_URL}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: PATH,
            title: META_TITLE,
            description: DESCRIPTION,
            crumbs: [{ name: "Namank Calculator", path: PATH }],
            faqs: loaderData?.faqs ?? [],
            article: {
              updated: loaderData?.updated ?? "2026-08-04",
              section: "Numerology",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/NamankCalculatorScreen"),
    "NamankCalculatorScreen",
  ),
});
