import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/bhagyank-calculator";
const META_TITLE = "Bhagyank Calculator: Find Your Destiny Number";
const DESCRIPTION =
  "Calculate your Bhagyank (Destiny Number) from your date of birth. Get your number, calculation breakdown, meaning, personality traits, career insights and more.";

export const Route = createFileRoute("/bhagyank-calculator")({
  loader: async () => {
    const { BHAGYANK_FAQS, BHAGYANK_UPDATED } = await import("@/data/bhagyank");
    return { faqs: BHAGYANK_FAQS, updated: BHAGYANK_UPDATED };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: META_TITLE,
      description: DESCRIPTION,
      keywords: [
        "bhagyank calculator",
        "destiny number calculator",
        "life path number",
        "bhagyank number",
        "bhagyank vs mulank",
        "numerology destiny number",
        "master numbers 11 22 33",
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
            crumbs: [{ name: "Bhagyank Calculator", path: PATH }],
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
    () => import("@/screens/BhagyankCalculatorScreen"),
    "BhagyankCalculatorScreen",
  ),
});
