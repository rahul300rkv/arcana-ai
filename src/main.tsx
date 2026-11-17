import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { createAppRouter } from "./router";
import "./index.css";

const rootEl = document.getElementById("root")!;
const currentPath =
  window.location.pathname === "/" ? "/" : window.location.pathname.replace(/\/+$/, "");
const prerenderedPath = rootEl.getAttribute("data-prerendered-path");

async function mount() {
  if (prerenderedPath === currentPath && rootEl.firstElementChild !== null) {
    const { router, queryClient } = createAppRouter();
    await router.load();
    const matchComponents = router.state.matches.map((m) => {
      const route = (
        router.routesById as unknown as Record<
          string,
          { options?: { component?: unknown } } | undefined
        >
      )?.[m.routeId];
      const comp = route?.options?.component as { preload?: () => Promise<unknown> } | undefined;
      return comp?.preload?.();
    });
    await Promise.all(matchComponents);
    hydrateRoot(rootEl, <App router={router} queryClient={queryClient} />);
  } else {
    createRoot(rootEl).render(<App />);
  }
}

void mount();
