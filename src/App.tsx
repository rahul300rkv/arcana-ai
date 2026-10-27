import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useMemo } from "react";
import { routeTree } from "./routeTree.gen";

export default function App() {
  const { router, queryClient } = useMemo(() => {
    const qc = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5,
        },
      },
    });

    const r = createRouter({
      routeTree,
      context: { queryClient: qc },
      scrollRestoration: true,
      defaultPreloadStaleTime: 0,
    });

    return { router: r, queryClient: qc };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
