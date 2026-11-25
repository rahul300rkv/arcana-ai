import type { ComponentType } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { LocaleProvider } from "@/lib/language";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks } from "@/locales";

let cachedHindiMulankScreen: ComponentType | null = null;
let cachedNumerologyNumberScreen: ComponentType | null = null;

export const Route = createFileRoute("/hi/numerology/$slug")({
  loader: async ({ params }) => {
    const { getHindiMulankPage } = await import("@/data/hi-mulank");
    const hiPage = getHindiMulankPage(params.slug);
    if (hiPage) {
      if (!cachedHindiMulankScreen) {
        const mod = await import("@/screens/hi/HindiMulankNumberScreen");
        cachedHindiMulankScreen = mod.HindiMulankNumberScreen;
      }
      return { page: hiPage, pair: undefined, numPage: undefined };
    }

    const [{ getMulankBhagyankPair }, { getNumerologyPage }] = await Promise.all([
      import("@/data/mulank-bhagyank-pairs"),
      import("@/data/numerology"),
    ]);
    const pair = getMulankBhagyankPair(params.slug);
    if (pair) {
      if (!cachedNumerologyNumberScreen) {
        const mod = await import("@/screens/NumerologyNumberScreen");
        cachedNumerologyNumberScreen = mod.NumerologyNumberScreen;
      }
      return { page: undefined, pair, numPage: undefined };
    }

    const numPage = getNumerologyPage(params.slug);
    if (numPage) {
      if (!cachedNumerologyNumberScreen) {
        const mod = await import("@/screens/NumerologyNumberScreen");
        cachedNumerologyNumberScreen = mod.NumerologyNumberScreen;
      }
      return { page: undefined, pair: undefined, numPage };
    }

    throw notFound();
  },
  head: ({ params, loaderData }) => {
    const page = loaderData?.page;
    const pair = loaderData?.pair;
    const numPage = loaderData?.numPage;
    if (page) {
      const path = `/hi/numerology/${params.slug}`;
      const enPath = `/numerology/${page.enSlug}`;
      return {
        meta: buildContentMeta({
          path,
          title: page.title,
          description: page.description,
          keywords: page.keywords,
          locale: "hi_IN",
        }),
        links: [
          { rel: "canonical", href: `${SITE_URL}${path}` },
          ...getAllHreflangLinks(enPath, SITE_URL),
        ],
        scripts: [
          {
            type: "application/ld+json",
            children: JSON.stringify(
              buildContentJsonLd({
                path,
                title: page.title,
                description: page.description,
                updated: page.updated,
                inLanguage: "hi",
                homeLabel: "मुख्य पृष्ठ",
                section: "वैदिक अंक शास्त्र (मूलांक)",
                keywords: page.keywords,
                about: [page.label, "मूलांक", "अंक शास्त्र", "Vedic Numerology"],
                crumbs: [
                  { name: "हिंदी केंद्र", path: "/hi" },
                  { name: "मूलांक", path: "/hi/numerology/mulank" },
                  { name: page.label, path },
                ],
                faqs: page.faqs,
              }),
            ),
          },
        ],
      };
    }

    const fallback = pair ?? numPage;
    if (!fallback) {
      return { meta: [{ title: "पृष्ठ उपलब्ध नहीं" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/hi/numerology/${params.slug}`;
    const enPath = `/numerology/${params.slug}`;
    const label = pair
      ? `Mulank ${pair.mulank} × Bhagyank ${pair.bhagyank}`
      : (numPage?.label ?? params.slug);
    return {
      meta: buildContentMeta({
        path,
        title: fallback.title,
        description: fallback.description,
        keywords: fallback.keywords,
        locale: "hi_IN",
      }),
      links: [
        { rel: "canonical", href: `${SITE_URL}${path}` },
        ...getAllHreflangLinks(enPath, SITE_URL),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildContentJsonLd({
              path,
              title: fallback.title,
              description: fallback.description,
              updated: fallback.updated,
              inLanguage: "hi",
              homeLabel: "मुख्य पृष्ठ",
              section: pair ? "Vedic Numerology Compatibility" : "Life Path Numerology",
              keywords: fallback.keywords,
              about: pair
                ? [`Mulank ${pair.mulank}`, `Bhagyank ${pair.bhagyank}`, "Vedic Numerology"]
                : [label, "Numerology", "Life Path Number"],
              crumbs: [
                { name: "हिंदी केंद्र", path: "/hi" },
                { name: "अंक शास्त्र", path: "/hi/numerology" },
                { name: label, path },
              ],
              faqs: fallback.faqs,
            }),
          ),
        },
      ],
    };
  },
  component: HindiNumerologySlugComponent,
});

function HindiNumerologySlugComponent() {
  const data = Route.useLoaderData();
  if (data.page) {
    const Screen = cachedHindiMulankScreen;
    if (!Screen) return null;
    return (
      <LocaleProvider lang="hi">
        <Screen />
      </LocaleProvider>
    );
  }
  const Screen = cachedNumerologyNumberScreen;
  if (!Screen) return null;
  return (
    <LocaleProvider lang="hi">
      <Screen />
    </LocaleProvider>
  );
}
