import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { TAROT_SLUGS } from "@/data/tarot";
import { NUMEROLOGY_SLUGS } from "@/data/numerology";
import { MULANK_SLUGS } from "@/data/mulank";
import { SITE_URL } from "@/lib/site";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const STATIC_ENTRIES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/tarot", changefreq: "weekly", priority: "0.9" },
  { path: "/numerology", changefreq: "weekly", priority: "0.9" },
  { path: "/numerology/mulank", changefreq: "monthly", priority: "0.85" },
  { path: "/bhagyank-calculator", changefreq: "monthly", priority: "0.85" },
  { path: "/namank-calculator", changefreq: "monthly", priority: "0.85" },
  { path: "/guide", changefreq: "monthly", priority: "0.8" },
  { path: "/guide/tarot-card-meanings", changefreq: "monthly", priority: "0.85" },
  { path: "/guide/tarot-spreads", changefreq: "monthly", priority: "0.85" },
  { path: "/guide/numerology", changefreq: "monthly", priority: "0.85" },
  { path: "/about", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "monthly", priority: "0.5" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
  { path: "/cookie-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/editorial-policy", changefreq: "yearly", priority: "0.4" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...STATIC_ENTRIES,
          ...TAROT_SLUGS.map((slug) => ({
            path: `/tarot/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...MULANK_SLUGS.map((slug) => ({
            path: `/numerology/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...NUMEROLOGY_SLUGS.map((slug) => ({
            path: `/numerology/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${SITE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
