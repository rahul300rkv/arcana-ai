import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildContentMeta, buildContentJsonLd } from "@/lib/content-seo";

const PATH = "/career-tarot-reading";
const TITLE = "Free Career Tarot Reading Online: Job, Money & Future Spread";
const DESCRIPTION =
  "Get a free career tarot reading online: draw cards for your current role, career obstacle, strategic action, and job or financial outlook: instant guidance, no signup.";

export const Route = createFileRoute("/career-tarot-reading")({
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
      exactTitle: true,
      keywords: [
        "free career tarot reading online",
        "career tarot reading",
        "job tarot spread",
        "money tarot reading",
        "work future tarot",
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
            updated: loaderData?.updated ?? "2026-11-18",
            crumbs: [
              { name: "Tarot", path: "/tarot" },
              { name: "Career Tarot Reading", path: PATH },
            ],
            faqs: loaderData?.faqs ?? [],
            webApp: { name: "Free Career Tarot Reading Online" },
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
