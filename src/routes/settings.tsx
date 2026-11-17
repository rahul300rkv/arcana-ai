import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — AstroFree" },
      {
        name: "description",
        content:
          "Personalize your AstroFree experience — theme, language, notifications, privacy, and account.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: lazyRouteComponent(() => import("@/screens/SettingsScreen"), "SettingsScreen"),
});
