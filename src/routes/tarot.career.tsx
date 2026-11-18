import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const CANONICAL_PATH = "/career-tarot-reading";
const TITLE = "Free Career Tarot Reading Online: Job, Money & Future Spread";
const DESCRIPTION =
  "Get a free career tarot reading online: draw cards for your current role, career obstacle, strategic action, and job or financial outlook — instant guidance, no signup.";

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
      path: CANONICAL_PATH,
      title: TITLE,
      description: DESCRIPTION,
      exactTitle: true,
      keywords: [
        "career tarot reading",
        "career tarot",
        "tarot for career",
        "work tarot reading",
        "free tarot reading",
      ],
    }),
    links: [{ rel: "canonical", href: `https://astrofree.vercel.app${CANONICAL_PATH}` }],
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
              { name: "Career Reading", path: CANONICAL_PATH },
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
