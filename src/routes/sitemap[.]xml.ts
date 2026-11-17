import { createFileRoute } from "@tanstack/react-router";

// Static sitemap is generated in public/sitemap.xml during build/maintenance;
// keep route definition minimal so client entry never bundles content data modules.
export const Route = createFileRoute("/sitemap.xml")({
  component: () => null,
});
