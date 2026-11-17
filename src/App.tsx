import { RouterProvider } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { createAppRouter, type AppRouter } from "./router";

interface AppProps {
  router?: AppRouter;
}

function syncDocumentHead(router: AppRouter) {
  if (typeof document === "undefined") return;
  const matches = router.state.matches;
  let title: string | undefined;
  let description: string | undefined;
  let canonical: string | undefined;

  for (const match of matches) {
    const meta = (match as unknown as { meta?: Array<Record<string, unknown>> }).meta;
    if (Array.isArray(meta)) {
      for (const entry of meta) {
        if (typeof entry.title === "string") title = entry.title;
        if (entry.name === "description" && typeof entry.content === "string") {
          description = entry.content;
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
  if (description) {
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", description);
  }
  if (canonical) {
    let linkEl = document.querySelector('link[rel="canonical"]');
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
    return router.subscribe("onResolved", () => {
      syncDocumentHead(router);
    });
  }, [router]);

  return <RouterProvider router={router} />;
}
