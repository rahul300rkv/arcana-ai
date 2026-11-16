import { QueryClient } from "@tanstack/react-query";
import { createRouter, type RouterHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function createAppRouter(options?: { history?: RouterHistory }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  const router = createRouter({
    routeTree,
    context: { queryClient },
    history: options?.history,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return { router, queryClient };
}

export const getRouter = () => createAppRouter().router;
export type AppRouter = ReturnType<typeof createAppRouter>["router"];
