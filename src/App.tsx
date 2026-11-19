import { RouterProvider } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { createAppRouter, type AppRouter } from "./router";

interface AppProps {
  router?: AppRouter;
}

const SKIP_SYNC_META = new Set([
  "viewport",
  "google-site-verification",
  "google-adsense-account",
]);

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${CSS.escape(key)}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function syncDocumentHead(router: AppRouter) {
  if (typeof document === "undefined") return;
  const matches = router.state.matches;
  let title: string | undefined;
  let canonical: string | undefined;
  const metaMap = new Map<string, { attr: "name" | "property"; key: string; content: string }>();

  for (const match of matches) {
    const meta = (match as unknown as { meta?: Array<Record<string, unknown>> }).meta;
    if (Array.isArray(meta)) {
      for (const entry of meta) {
        if (!entry || typeof entry !== "object") continue;
        if (typeof entry.title === "string" && entry.title.trim()) {
          title = entry.title;
          continue;
        }
        if (typeof entry.name === "string" && typeof entry.content === "string") {
          if (SKIP_SYNC_META.has(entry.name)) continue;
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
    const links = (match as unknown as { links?: Array<Record<string, unknown>> }).links;
    if (Array.isArray(links)) {
      for (const link of links) {
        if (link.rel === "canonical" && typeof link.href === "string") {
          canonical = link.href;
        }
      }
    }
  }

  if (title) document.title = title;
  for (const { attr, key, content } of metaMap.values()) {
    upsertMeta(attr, key, content);
  }
  if (canonical) {
    let linkEl = document.head.querySelector('link[rel="canonical"]');
    if (!linkEl) {
      linkEl = document.createElement("link");
      linkEl.setAttribute("rel", "canonical");
      document.head.appendChild(linkEl);
    }
    linkEl.setAttribute("href", canonical);
  }
}

export default function App({ router: providedRouter }: AppProps) {
  const router = useMemo(() => {
    if (providedRouter) return providedRouter;
    return createAppRouter().router;
  }, [providedRouter]);

  useEffect(() => {
    syncDocumentHead(router);
    const unsubLoad = router.subscribe("onLoad", () => syncDocumentHead(router));
    const unsubResolved = router.subscribe("onResolved", () => syncDocumentHead(router));
    return () => {
      unsubLoad();
      unsubResolved();
    };
  }, [router]);

  return <RouterProvider router={router} />;
}
