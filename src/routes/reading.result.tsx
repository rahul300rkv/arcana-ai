import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/reading/result")({
  validateSearch: (s: Record<string, unknown>) => ({
    id: typeof s.id === "string" ? s.id : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Your Reading — AstroFree" },
      { name: "description", content: "The synthesized interpretation of your tarot reading." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/ReadingResultScreen"),
    "ReadingResultScreen",
  ),
});
