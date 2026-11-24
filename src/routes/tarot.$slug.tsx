import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks } from "@/locales";

export const Route = createFileRoute("/tarot/$slug")({
  loader: async ({ params }) => {
    const { getTarotPage } = await import("@/data/tarot");
    const page = getTarotPage(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ params, loaderData }) => {
    const page = loaderData?.page;
    if (!page) {
      return { meta: [{ title: "Card not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/tarot/${params.slug}`;
    return {
      meta: buildContentMeta({
        path,
        title: page.title,
        description: page.description,
        keywords: page.keywords,
        image: page.image,
      }),
      links: [
      { rel: "canonical", href: `https://astrofree.vercel.app${path}` },
      ...getAllHreflangLinks(path, "https://astrofree.vercel.app"),
    ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildContentJsonLd({
              path,
              title: page.title,
              description: page.description,
              image: page.image,
              updated: page.updated,
              crumbs: [
                { name: "Tarot Card Meanings", path: "/tarot" },
                { name: page.name, path },
              ],
              faqs: page.faqs,
            }),
          ),
        },
      ],
    };
  },
  component: lazyRouteComponent(() => import("@/screens/TarotCardScreen"), "TarotCardScreen"),
});
