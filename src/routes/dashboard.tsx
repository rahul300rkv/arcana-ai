import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — AstroFree" },
      {
        name: "description",
        content: "Your daily card, recent readings, journal, and reading streak.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/DashboardScreen"), "DashboardScreen"),
});
