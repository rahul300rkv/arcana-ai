import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/reading/")({
  head: () => ({
    meta: [
      { title: "Choose a Spread | AstroFree" },
      {
        name: "description",
        content:
          "Pick a tarot spread to begin your reading: from a single card to the full Celtic Cross.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/ReadingIndexScreen"), "ReadingIndexScreen"),
});
