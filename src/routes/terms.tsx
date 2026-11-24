import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks } from "@/locales";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | AstroFree" },
      {
        name: "description",
        content:
          "The terms governing your use of AstroFree, India's first free AI tarot card reading app.",
      },
    ],
    links: [
      { rel: "canonical", href: `https://astrofree.vercel.app/terms` },
      ...getAllHreflangLinks("/terms", "https://astrofree.vercel.app"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/terms",
            title: "Terms of Service | AstroFree",
            description:
              "The terms that govern your use of AstroFree's free tarot readings, numerology calculator, and journal.",
            crumbs: [
              {
                name: "Terms of Service",
                path: "/terms",
              },
            ],
            article: {
              published: "2026-07-15",
              updated: "2026-11-16",
              section: "Legal",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/TermsScreen"), "TermsScreen"),
});
