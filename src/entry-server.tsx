import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";
import { renderToString } from "react-dom/server";
import { createAppRouter } from "./router";
import { SITE_URL } from "./lib/site";

export interface PrerenderResult {
  appHtml: string;
  headHtml: string;
  statusCode: number;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeJsonLd(json: string): string {
  return json.replace(/</g, "\\u003c");
}

const SKIP_META_NAMES = new Set([
  "viewport",
  "google-site-verification",
  "google-adsense-account",
]);

export async function renderRoute(urlPath: string): Promise<PrerenderResult> {
  const normalizedPath = urlPath === "/" ? "/" : urlPath.replace(/\/+$/, "");
  const history = createMemoryHistory({ initialEntries: [normalizedPath] });
  const { router } = createAppRouter({ history });

  await router.load();
  await Promise.all(
    router.state.matches.map((m) => {
      const route = (
        router.routesById as unknown as Record<
          string,
          { options?: { component?: unknown } } | undefined
        >
      )?.[m.routeId];
      const comp = route?.options?.component as { preload?: () => Promise<unknown> } | undefined;
      return comp?.preload?.();
    }),
  );

  const appHtml = renderToString(<RouterProvider router={router} />);

  let title = "AstroFree — Free AI Tarot & Vedic Numerology";
  const metaMap = new Map<string, { attr: "name" | "property"; key: string; content: string }>();
  const ldJsonSeen = new Set<string>();
  const ldJsonBlocks: string[] = [];
  let canonical = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;

  for (const match of router.state.matches) {
    const matchAny = match as unknown as {
      meta?: Array<Record<string, unknown> | undefined>;
      links?: Array<Record<string, unknown> | undefined>;
      scripts?: Array<Record<string, unknown> | undefined>;
      headScripts?: Array<Record<string, unknown> | undefined>;
    };

    if (Array.isArray(matchAny.meta)) {
      for (const entry of matchAny.meta) {
        if (!entry || typeof entry !== "object") continue;

        if (typeof entry.title === "string" && entry.title.trim()) {
          title = entry.title;
          continue;
        }

        if ("script:ld+json" in entry && entry["script:ld+json"]) {
          const serialized =
            typeof entry["script:ld+json"] === "string"
              ? entry["script:ld+json"]
              : JSON.stringify(entry["script:ld+json"]);
          if (!ldJsonSeen.has(serialized)) {
            ldJsonSeen.add(serialized);
            ldJsonBlocks.push(serialized);
          }
          continue;
        }

        if (typeof entry.name === "string" && typeof entry.content === "string") {
          if (SKIP_META_NAMES.has(entry.name)) continue;
          metaMap.set(`name:${entry.name}`, {
            attr: "name",
            key: entry.name,
            content: entry.content,
          });
          continue;
        }

        if (typeof entry.property === "string" && typeof entry.content === "string") {
          metaMap.set(`property:${entry.property}`, {
            attr: "property",
            key: entry.property,
            content: entry.content,
          });
        }
      }
    }

    if (Array.isArray(matchAny.links)) {
      for (const link of matchAny.links) {
        if (!link || typeof link !== "object") continue;
        if (link.rel === "canonical" && typeof link.href === "string") {
          canonical = link.href;
        }
      }
    }

    const scriptSources = [
      ...(Array.isArray(matchAny.scripts) ? matchAny.scripts : []),
      ...(Array.isArray(matchAny.headScripts) ? matchAny.headScripts : []),
    ];

    for (const script of scriptSources) {
      if (!script || typeof script !== "object") continue;
      if (script.type === "application/ld+json") {
        const raw =
          typeof script.children === "string"
            ? script.children
            : typeof (script.dangerouslySetInnerHTML as { __html?: string } | undefined)?.__html ===
                "string"
              ? ((script.dangerouslySetInnerHTML as { __html: string }).__html)
              : null;
        if (raw && !ldJsonSeen.has(raw)) {
          ldJsonSeen.add(raw);
          ldJsonBlocks.push(raw);
        }
      }
    }
  }

  const headLines: string[] = [`<title>${escapeHtml(title)}</title>`];
  for (const { attr, key, content } of metaMap.values()) {
    headLines.push(`<meta ${attr}="${escapeHtml(key)}" content="${escapeHtml(content)}" />`);
  }
  headLines.push(`<link rel="canonical" href="${escapeHtml(canonical)}" />`);
  for (const block of ldJsonBlocks) {
    headLines.push(`<script type="application/ld+json">${escapeJsonLd(block)}</script>`);
  }

  const hasNotFound = router.state.matches.some(
    (m) => m.status === "notFound" || m.status === "error",
  );

  return {
    appHtml,
    headHtml: headLines.join("\n    "),
    statusCode: hasNotFound ? 404 : 200,
  };
}
