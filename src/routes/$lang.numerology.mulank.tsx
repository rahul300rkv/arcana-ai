import { createFileRoute, notFound } from "@tanstack/react-router";
import { t } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/language";
import { buildContentMeta, buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks, getLocaleByPrefix, localizePath } from "@/locales";
import { MulankHubScreen } from "@/screens/MulankHubScreen";

export const Route = createFileRoute("/$lang/numerology/mulank" as any)({
  loader: async ({ params }: { params: { lang: string } }) => {
    const locale = getLocaleByPrefix(params.lang);
    if (!locale) throw notFound();
    const { MULANK_HUB_FAQS, MULANK_UPDATED } = await import("@/data/mulank");
    return { locale, faqs: MULANK_HUB_FAQS, updated: MULANK_UPDATED };
  },
  head: ({ loaderData, params }: { loaderData?: { locale: any; updated?: string }; params: { lang: string } }) => {
    const locale = loaderData?.locale ?? getLocaleByPrefix(params.lang);
    if (!locale) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    const code = locale.meta.code;
    const path = localizePath("/numerology/mulank", code);
    const title = t("seo.mulank.title", code);
    const description = t("seo.mulank.desc", code);

    return {
      meta: buildContentMeta({
        path,
        title,
        description,
        exactTitle: true,
        locale: locale.meta.ogLocale,
        keywords: ["mulank", "birth number", locale.meta.englishName],
      }),
      links: [
        { rel: "canonical", href: `${SITE_URL}${path}` },
        ...getAllHreflangLinks("/numerology/mulank", SITE_URL),
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
              crumbs: [
                { name: t("numerology.navLabel", code), path: localizePath("/numerology", code) },
                { name: t("lnav.mulank", code), path },
              ],
            }),
          ),
        },
      ],
    };
  },
  component: LangMulankHubComponent,
});

function LangMulankHubComponent() {
  const { locale } = Route.useLoaderData();
  return (
    <LocaleProvider lang={locale.meta.code}>
      <MulankHubScreen />
    </LocaleProvider>
  );
}
