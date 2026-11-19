import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/reading/shuffle")({
  head: () => ({
    meta: [
      { title: "Shuffle the Deck | AstroFree" },
      {
        name: "description",
        content: "Center yourself and shuffle the deck. The cards will find you.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/ReadingShuffleScreen"),
    "ReadingShuffleScreen",
  ),
});
