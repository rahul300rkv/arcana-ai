import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/numerology/$slug")({
  loader: async ({ params }) => {
    const [{ getMulankPage }, { getNumerologyPage }] = await Promise.all([
      import("@/data/mulank"),
      import("@/data/numerology"),
    ]);
    const mulank = getMulankPage(params.slug);
    if (mulank) return { page: undefined, mulank };
    const page = getNumerologyPage(params.slug);
    if (!page) throw notFound();
    return { page, mulank: undefined };
  },
  head: ({ params, loaderData }) => {
    const page = loaderData?.page;
    const mulank = loaderData?.mulank;
    if (mulank) {
      const mPath = `/numerology/${params.slug}`;
      return {
        meta: buildContentMeta({
          path: mPath,
          title: mulank.title,
          description: mulank.description,
          keywords: mulank.keywords,
        }),
        links: [{ rel: "canonical", href: `${SITE_URL}${mPath}` }],
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
