import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig(({ isSsrBuild }) => {
  return {
    plugins: [react(), tailwindcss()],
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
