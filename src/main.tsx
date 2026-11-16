import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;
const currentPath =
  window.location.pathname === "/" ? "/" : window.location.pathname.replace(/\/+$/, "");
const prerenderedPath = rootEl.getAttribute("data-prerendered-path");

if (prerenderedPath === currentPath && rootEl.firstElementChild !== null) {
  hydrateRoot(rootEl, <App />);
} else {
  createRoot(rootEl).render(<App />);
}
