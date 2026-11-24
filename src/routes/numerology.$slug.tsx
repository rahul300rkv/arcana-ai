import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/numerology/$slug")({
  loader: async ({ params }) => {
    const [{ getMulankBhagyankPair }, { getMulankPage }, { getNumerologyPage }] = await Promise.all([
      import("@/data/mulank-bhagyank-pairs"),
      import("@/data/mulank"),
      import("@/data/numerology"),
    ]);
    const pair = getMulankBhagyankPair(params.slug);
    if (pair) return { page: undefined, mulank: undefined, pair };
    const mulank = getMulankPage(params.slug);
    if (mulank) return { page: undefined, mulank, pair: undefined };
    const page = getNumerologyPage(params.slug);
    if (!page) throw notFound();
    return { page, mulank: undefined, pair: undefined };
  },
  head: ({ params, loaderData }) => {
    const page = loaderData?.page;
    const mulank = loaderData?.mulank;
    const pair = loaderData?.pair;
    if (pair) {
      const pPath = `/numerology/${params.slug}`;
      return {
        meta: buildContentMeta({
          path: pPath,
          title: pair.title,
          description: pair.description,
          keywords: pair.keywords,
        }),
        links: [{ rel: "canonical", href: `${SITE_URL}${pPath}` }],
        scripts: [
          {
            type: "application/ld+json",
            children: JSON.stringify(
              buildContentJsonLd({
                path: pPath,
                title: pair.title,
                description: pair.description,
                updated: pair.updated,
                crumbs: [
                  { name: "Numerology", path: "/numerology" },
                  { name: "Compatibility Matrix", path: "/numerology/compatibility" },
                  { name: `Mulank ${pair.mulank} × Bhagyank ${pair.bhagyank}`, path: pPath },
                ],
                faqs: pair.faqs,
              }),
            ),
          },
        ],
      };
    }
    if (mulank) {
      const mPath = `/numerology/${params.slug}`;
      const hiPath = `/hi/numerology/${params.slug}`;
      return {
        meta: buildContentMeta({
          path: mPath,
          title: mulank.title,
          description: mulank.description,
          keywords: mulank.keywords,
        }),
        links: [
          { rel: "canonical", href: `${SITE_URL}${mPath}` },
          { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${mPath}` },
          { rel: "alternate", hrefLang: "hi", href: `${SITE_URL}${hiPath}` },
          { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}${mPath}` },
        ],
        scripts: [
          {
            type: "application/ld+json",
            children: JSON.stringify(
              buildContentJsonLd({
                path: mPath,
                title: mulank.title,
                description: mulank.description,
                updated: mulank.updated,
                crumbs: [
                  { name: "Numerology", path: "/numerology" },
                  { name: "Mulank", path: "/numerology/mulank" },
                  { name: mulank.label, path: mPath },
                ],
                faqs: mulank.faqs,
              }),
            ),
          },
        ],
      };
    }
    if (!page) {
      return { meta: [{ title: "Number not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/numerology/${params.slug}`;
    return {
      meta: buildContentMeta({
        path,
        title: page.title,
        description: page.description,
        keywords: page.keywords,
      }),
      links: [{ rel: "canonical", href: `${SITE_URL}${path}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildContentJsonLd({
              path,
              title: page.title,
              description: page.description,
              updated: page.updated,
              crumbs: [
                { name: "Numerology", path: "/numerology" },
                { name: page.label, path },
              ],
              faqs: page.faqs,
            }),
          ),
        },
      ],
    };
  },
  component: lazyRouteComponent(
    () => import("@/screens/NumerologyNumberScreen"),
    "NumerologyNumberScreen",
  ),
});
