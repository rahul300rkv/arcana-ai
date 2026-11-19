import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | AstroFree" },
      {
        name: "description",
        content:
          "How AstroFree uses cookies and local storage, including cookies set by Google AdSense, and how to manage your preferences.",
      },
      { property: "og:title", content: "Cookie Policy | AstroFree" },
      {
        property: "og:description",
        content:
          "Details on the cookies and local storage AstroFree uses, and how to control them.",
      },
      { property: "og:url", content: `${SITE_URL}/cookie-policy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cookie-policy` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/cookie-policy",
            title: "Cookie Policy | AstroFree",
            description:
              "How AstroFree uses cookies and local storage, including advertising and analytics cookies, and how to control them.",
            crumbs: [
              {
                name: "Cookie Policy",
                path: "/cookie-policy",
              },
            ],
            article: {
              published: "2026-08-07",
              updated: "2026-11-16",
              section: "Legal",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/CookiePolicyScreen"),
    "CookiePolicyScreen",
  ),
});
