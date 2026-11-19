import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal | AstroFree" },
      { name: "description", content: "Your reading history and private reflections." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/JournalScreen"), "JournalScreen"),
});
