import { createRouter, type RouterHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function createAppRouter(options?: { history?: RouterHistory }) {
  const router = createRouter({
    routeTree,
    history: options?.history,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return { router };
}

export const getRouter = () => createAppRouter().router;
export type AppRouter = ReturnType<typeof createAppRouter>["router"];
