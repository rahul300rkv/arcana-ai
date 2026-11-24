import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks } from "@/locales";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | AstroFree" },
      {
        name: "description",
        content:
          "How AstroFree collects, uses, and protects your data, including our use of cookies and advertising.",
      },
    ],
    links: [
      { rel: "canonical", href: `https://astrofree.vercel.app/privacy` },
      ...getAllHreflangLinks("/privacy", "https://astrofree.vercel.app"),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/privacy",
            title: "Privacy Policy | AstroFree",
            description:
              "How AstroFree handles your data: what we store on your device, what we never collect, and how cookies and advertising work.",
            crumbs: [
              {
                name: "Privacy Policy",
                path: "/privacy",
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
  component: lazyRouteComponent(() => import("@/screens/PrivacyScreen"), "PrivacyScreen"),
});
