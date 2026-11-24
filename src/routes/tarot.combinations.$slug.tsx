import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks } from "@/locales";

export const Route = createFileRoute("/tarot/combinations/$slug")({
  loader: async ({ params }) => {
    const { getTarotCombination } = await import("@/data/tarot-combinations");
    const combo = getTarotCombination(params.slug);
    if (!combo) throw notFound();
    return { combo };
  },
  head: ({ params, loaderData }) => {
    const combo = loaderData?.combo;
    if (!combo) {
      return { meta: [{ title: "Combination not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/tarot/combinations/${combo.slug}`;
    return {
      meta: buildContentMeta({
        path,
        title: combo.title,
        description: combo.description,
        keywords: combo.keywords,
        image: combo.cardA.image,
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
              title: combo.title,
              description: combo.description,
              image: combo.cardA.image,
              updated: combo.updated,
              crumbs: [
                { name: "Tarot", path: "/tarot" },
                { name: "Combinations", path: "/tarot/combinations" },
                { name: `${combo.cardA.name} + ${combo.cardB.name}`, path },
              ],
              faqs: combo.faqs,
            }),
          ),
        },
      ],
    };
  },
  component: lazyRouteComponent(
    () => import("@/screens/TarotCombinationScreen"),
    "TarotCombinationScreen",
  ),
});
