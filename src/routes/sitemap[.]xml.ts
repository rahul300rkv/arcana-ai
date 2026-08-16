import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { TAROT_SLUGS } from "@/data/tarot";
import { NUMEROLOGY_SLUGS } from "@/data/numerology";
import { MULANK_SLUGS } from "@/data/mulank";
import { SITE_URL } from "@/lib/site";

// Google does not use <changefreq> or <priority> as ranking signals, so the
// sitemap intentionally omits them. <lastmod> is included only where we
// have a real, non-fabricated modification date to report.
interface SitemapEntry {
  path: string;
  lastmod?: string;
}

const STATIC_ENTRIES: SitemapEntry[] = [
  { path: "/" },
  { path: "/tarot" },
  { path: "/tarot/one-card" },
  { path: "/tarot/three-card" },
  { path: "/tarot/love" },
  { path: "/tarot/yes-no" },
  { path: "/tarot/career" },
  { path: "/tarot/celtic-cross" },
  { path: "/numerology" },
  { path: "/numerology/mulank" },
  { path: "/numerology/bhagyank" },
  { path: "/numerology/namank" },
  { path: "/bhagyank-calculator" },
  { path: "/namank-calculator" },
  { path: "/guide" },
  { path: "/guide/tarot-card-meanings" },
  { path: "/guide/tarot-spreads" },
  { path: "/guide/numerology" },
  { path: "/guide/tarot-for-beginners" },
  { path: "/guide/reversed-tarot-cards" },
  { path: "/guide/major-arcana-meanings" },
  { path: "/guide/celtic-cross-guide" },
  { path: "/guide/mulank-vs-bhagyank" },
  { path: "/about" },
  { path: "/contact" },
  { path: "/privacy" },
  { path: "/terms" },
  { path: "/disclaimer" },
  { path: "/cookie-policy" },
  { path: "/editorial-policy" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...STATIC_ENTRIES,
          ...TAROT_SLUGS.map((slug) => ({ path: `/tarot/${slug}` })),
          ...MULANK_SLUGS.map((slug) => ({ path: `/numerology/${slug}` })),
          ...NUMEROLOGY_SLUGS.map((slug) => ({ path: `/numerology/${slug}` })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${SITE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
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
