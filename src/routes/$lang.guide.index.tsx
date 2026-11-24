import { createFileRoute, notFound } from "@tanstack/react-router";
import { t } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/language";
import { buildContentMeta, buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks, getLocaleByPrefix, localizePath } from "@/locales";
import { GuideIndexScreen } from "@/screens/guides/GuideIndexScreen";

export const Route = createFileRoute("/$lang/guide/" as any)({
  loader: ({ params }: { params: { lang: string } }) => {
    const locale = getLocaleByPrefix(params.lang);
    if (!locale) throw notFound();
    return { locale };
  },
  head: ({ loaderData, params }: { loaderData?: { locale: any }; params: { lang: string } }) => {
    const locale = loaderData?.locale ?? getLocaleByPrefix(params.lang);
    if (!locale) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    const code = locale.meta.code;
    const path = localizePath("/guide", code);
    const title = t("seo.guide.title", code);
    const description = t("seo.guide.desc", code);

    return {
      meta: buildContentMeta({
        path,
        title,
        description,
        exactTitle: true,
        locale: locale.meta.ogLocale,
        keywords: ["tarot guides", "vedic numerology guides", locale.meta.englishName],
      }),
      links: [
        { rel: "canonical", href: `${SITE_URL}${path}` },
        ...getAllHreflangLinks("/guide", SITE_URL),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildPageJsonLd({
              path,
              title,
              description,
              inLanguage: locale.meta.bcp47,
              homeLabel: t("nav.home", code),
              crumbs: [{ name: t("nav.guides", code), path }],
              article: {
                published: "2026-07-15",
                updated: "2026-11-16",
                section: "Guides",
              },
            }),
          ),
        },
      ],
    };
  },
  component: LangGuideComponent,
});

function LangGuideComponent() {
  const { locale } = Route.useLoaderData();
  return (
    <LocaleProvider lang={locale.meta.code}>
      <GuideIndexScreen />
    </LocaleProvider>
  );
}
