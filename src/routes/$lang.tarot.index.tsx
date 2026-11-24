import { createFileRoute, notFound } from "@tanstack/react-router";
import { t } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/language";
import { buildContentMeta, buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks, getLocaleByPrefix, localizePath } from "@/locales";
import { TarotIndexScreen } from "@/screens/TarotIndexScreen";

export const Route = createFileRoute("/$lang/tarot/" as any)({
  loader: async ({ params }: { params: { lang: string } }) => {
    const locale = getLocaleByPrefix(params.lang);
    if (!locale) throw notFound();
    const { TAROT_CARD_LIST } = await import("@/data/tarot-list");
    return { locale, cards: TAROT_CARD_LIST };
  },
  head: ({ loaderData, params }: { loaderData?: { locale: any }; params: { lang: string } }) => {
    const locale = loaderData?.locale ?? getLocaleByPrefix(params.lang);
    if (!locale) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    const code = locale.meta.code;
    const path = localizePath("/tarot", code);
    const title = t("seo.tarot.title", code);
    const description = t("seo.tarot.desc", code);

    return {
      meta: buildContentMeta({
        path,
        title,
        description,
        exactTitle: true,
        locale: locale.meta.ogLocale,
        keywords: ["tarot card meanings", "78 tarot cards", locale.meta.englishName],
      }),
      links: [
        { rel: "canonical", href: `${SITE_URL}${path}` },
        ...getAllHreflangLinks("/tarot", SITE_URL),
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
              crumbs: [{ name: t("nav.tarot", code), path }],
            }),
          ),
        },
      ],
    };
  },
  component: LangTarotComponent,
});

function LangTarotComponent() {
  const { locale } = Route.useLoaderData();
  return (
    <LocaleProvider lang={locale.meta.code}>
      <TarotIndexScreen />
    </LocaleProvider>
  );
}
