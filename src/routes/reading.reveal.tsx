import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/reading/reveal")({
  head: () => ({
    meta: [
      { title: "Reveal Your Cards — AstroFree" },
      { name: "description", content: "Turn each card and see what the deck drew for you." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/ReadingRevealScreen"),
    "ReadingRevealScreen",
  ),
});
