import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks } from "@/locales";

const PATH = "/numerology/namank";
const TITLE = "Namank (Name Number) in Numerology: Complete Guide to 1–9";
const DESCRIPTION =
  "What Namank means, how to calculate your name number using Chaldean numerology, and detailed interpretations of all nine name numbers.";

export const Route = createFileRoute("/numerology/namank")({
  loader: async () => {
    const { NAMANK_HUB_FAQS, NAMANK_UPDATED } = await import("@/data/namank");
    return { faqs: NAMANK_HUB_FAQS, updated: NAMANK_UPDATED };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "namank",
        "name number",
        "chaldean numerology",
        "name number calculator",
        "numerology name",
        "namank 1 to 9",
        "name vibration",
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
            updated: loaderData?.updated ?? "2026-08-04",
            crumbs: [
              { name: "Numerology", path: "/numerology" },
              { name: "Namank", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/NamankHubScreen"), "NamankHubScreen"),
});
