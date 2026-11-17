import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/tarot/career";
const TITLE = "Career Tarot Reading — Free Work & Path Guidance";
const DESCRIPTION =
  "Free career tarot reading: draw four cards for Where You Are, Challenge, Advice, and Outcome to get AI-guided clarity on your work, path, or calling.";

export const Route = createFileRoute("/tarot/career")({
  loader: async () => {
    const { CAREER_CONFIG } = await import("@/data/tarot-landings");
    return {
      published: CAREER_CONFIG.published,
      updated: CAREER_CONFIG.updated,
      faqs: CAREER_CONFIG.faqs,
    };
  },
  head: ({ loaderData }) => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "career tarot reading",
        "career tarot",
        "tarot for career",
        "work tarot reading",
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
              { name: "Career Reading", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/TarotLandingScreens"),
    "CareerReadingScreen",
  ),
});
