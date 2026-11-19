import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile | AstroFree" },
      {
        name: "description",
        content: "Your AstroFree profile: statistics, achievements, and reading streak.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/ProfileScreen"), "ProfileScreen"),
});
