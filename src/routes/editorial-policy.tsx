import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { getAllHreflangLinks } from "@/locales";

export const Route = createFileRoute("/editorial-policy")({
  head: () => ({
    meta: [
      { title: "Editorial Policy | AstroFree" },
      {
        name: "description",
        content:
          "How AstroFree researches, writes, and maintains its tarot and numerology guides, including our use of AI in content production.",
      },
      { property: "og:title", content: "Editorial Policy | AstroFree" },
      {
        property: "og:description",
        content:
          "Our approach to accuracy, sourcing, and AI-assisted writing across AstroFree's guides.",
      },
      { property: "og:url", content: `${SITE_URL}/editorial-policy` },
    ],
    links: [
      { rel: "canonical", href: `https://astrofree.vercel.app/editorial-policy` },
      ...getAllHreflangLinks("/editorial-policy", "https://astrofree.vercel.app"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/editorial-policy",
            title: "Editorial Policy | AstroFree",
            description:
              "How AstroFree writes, reviews, and corrects its tarot and numerology content, and the sources our interpretations follow.",
            crumbs: [
              {
                name: "Editorial Policy",
                path: "/editorial-policy",
              },
            ],
            article: {
              published: "2026-08-07",
              updated: "2026-11-16",
              section: "Editorial",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/EditorialPolicyScreen"),
    "EditorialPolicyScreen",
  ),
});
