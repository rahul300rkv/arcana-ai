import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks } from "@/locales";

export const Route = createFileRoute("/reading/")({
  head: () => ({
    meta: [
      { title: "Choose a Spread | AstroFree" },
      {
        name: "description",
        content:
          "Pick a tarot spread to begin your reading: from a single card to the full Celtic Cross.",
      },
      { property: "og:title", content: "Choose a Spread | AstroFree" },
      {
        property: "og:description",
        content:
          "Pick a tarot spread to begin your reading: from a single card to the full Celtic Cross.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/reading` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/reading` },
      ...getAllHreflangLinks("/reading", SITE_URL),
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/ReadingIndexScreen"), "ReadingIndexScreen"),
});
