import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import type { SpreadId } from "@/lib/tarot/types";

const VALID_SPREADS = new Set<string>([
  "single",
  "three-card",
  "love",
  "career",
  "money",
  "decision",
  "celtic-cross",
  "year-ahead",
]);

export const Route = createFileRoute("/reading/question")({
  validateSearch: (s: Record<string, unknown>) => ({
    spread: typeof s.spread === "string" && VALID_SPREADS.has(s.spread)
      ? (s.spread as SpreadId)
      : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Ask Your Question — AstroFree" },
      {
        name: "description",
        content: "Focus your intention. Type the question you want the cards to speak to.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/ReadingQuestionScreen"),
    "ReadingQuestionScreen",
  ),
});
