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

export default defineConfig({
  plugins: [react(), tailwindcss(), cssBeforeScriptsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    hmr: false,
    watch: null,
  },
});
