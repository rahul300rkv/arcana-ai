import { createFileRoute, notFound } from "@tanstack/react-router";
import { t } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/language";
import { buildContentMeta, buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks, getLocaleByPrefix, localizePath } from "@/locales";
import { HomeScreen } from "./index";

export const Route = createFileRoute("/$lang/" as any)({
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
    const path = localizePath("/", code);
    const title = t("seo.home.title", code);
    const description = t("seo.home.desc", code);

    return {
      meta: buildContentMeta({
        path,
        title,
        description,
        exactTitle: true,
        locale: locale.meta.ogLocale,
        keywords: [
          "astrofree",
          "free tarot reading",
          "vedic numerology",
          "mulank calculator",
          locale.meta.englishName,
          locale.meta.nativeName,
        ],
      }),
      links: [
        { rel: "canonical", href: `${SITE_URL}${path}` },
        ...getAllHreflangLinks("/", SITE_URL),
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
              crumbs: [{ name: locale.meta.nativeName, path }],
            }),
          ),
        },
      ],
    };
  },
  component: LangHomeComponent,
});

function LangHomeComponent() {
  const { locale } = Route.useLoaderData();
  return (
    <LocaleProvider lang={locale.meta.code}>
      <HomeScreen />
    </LocaleProvider>
  );
}
