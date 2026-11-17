import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/numerology/bhagyank";
const TITLE = "Bhagyank (Destiny Number) in Numerology: Complete Guide 1–33";
const DESCRIPTION =
  "What Bhagyank (Destiny Number) means in Indian numerology, how to calculate it from your complete date of birth, and detailed guides to numbers 1-9 and Master Numbers 11, 22, 33.";

export const Route = createFileRoute("/numerology/bhagyank")({
  loader: async () => {
    const { BHAGYANK_HUB_FAQS, BHAGYANK_UPDATED } = await import("@/data/bhagyank");
    return { faqs: BHAGYANK_HUB_FAQS, updated: BHAGYANK_UPDATED };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "bhagyank",
        "destiny number",
        "life path number",
        "bhagyank calculator",
        "numerology life path",
        "master numbers",
        "bhagyank 1 to 9",
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
              { name: "Bhagyank", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/BhagyankHubScreen"), "BhagyankHubScreen"),
});
