import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

function cssBeforeScriptsPlugin(): Plugin {
  return {
    name: "astrofree-css-before-scripts",
    enforce: "post",
    transformIndexHtml(html) {
      const cssTags: string[] = [];
      const stripped = html.replace(
        /\s*<link\b[^>]*rel=["']stylesheet["'][^>]*href=["']\/assets\/[^"']+["'][^>]*>/gi,
        (match) => {
          cssTags.push(match.trim());
          return "";
        },
      );
      if (cssTags.length === 0) return html;
      return stripped.replace(
        /<script\b[^>]*type=["']module["'][^>]*>/i,
        `${cssTags.join("\n    ")}\n    $&`,
      );
    },
  };
}

export default defineConfig(({ isSsrBuild }) => {
  return {
    plugins: [react(), tailwindcss(), cssBeforeScriptsPlugin()],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
    build: isSsrBuild
      ? undefined
      : {
          rolldownOptions: {
            output: {
              manualChunks(id) {
                if (
                  id.includes("node_modules/react/") ||
                  id.includes("node_modules/react-dom/") ||
                  id.includes("node_modules/scheduler/")
                ) {
                  return "vendor-react";
                }
                if (id.includes("node_modules/@tanstack/")) return "vendor-router";
                if (id.includes("node_modules/three/")) return "vendor-three";
                if (id.includes("node_modules/recharts/")) return "vendor-charts";
              },
            },
          },
        },
    server: {
      hmr: false,
      watch: null,
    },
  };
});
