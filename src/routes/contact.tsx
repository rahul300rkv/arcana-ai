import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AstroFree — Get in Touch" },
      {
        name: "description",
        content:
          "Reach out to the AstroFree team securely for support, feedback, content corrections, or business inquiries.",
      },
      { property: "og:title", content: "Contact AstroFree — Get in Touch" },
      {
        property: "og:description",
        content: "Secure contact form for support, feedback, and inquiries.",
      },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/contact",
            title: "Contact AstroFree — Get in Touch",
            description:
              "Secure contact form for support, feedback, bug reports, and content enquiries.",
            crumbs: [
              {
                name: "Contact",
                path: "/contact",
              },
            ],
            article: {
              published: "2026-08-07",
              updated: "2026-11-16",
              section: "Support",
            },
          }),
        ),
      },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/ContactScreen"), "ContactScreen"),
});
