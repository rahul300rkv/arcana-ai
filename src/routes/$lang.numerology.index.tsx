import { createFileRoute, notFound } from "@tanstack/react-router";
import { t } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/language";
import { buildContentMeta, buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks, getLocaleByPrefix, localizePath } from "@/locales";
import { NumerologyIndexScreen } from "@/screens/NumerologyIndexScreen";

export const Route = createFileRoute("/$lang/numerology/" as any)({
  validateSearch: (search: Record<string, unknown>) => {
    const dob =
      typeof search.dob === "string" && /^\d{4}-\d{2}-\d{2}$/.test(search.dob)
        ? search.dob
        : undefined;
    const raw = search.period;
    const asText = typeof raw === "number" ? String(raw) : raw;
    const period =
      typeof asText === "string" && /^\d{4}(-\d{2})?$/.test(asText)
        ? (raw as string | number)
        : undefined;
    return { dob, period } as { dob?: string; period?: string | number };
  },
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
    const path = localizePath("/numerology", code);
    const title = t("seo.numerology.title", code);
    const description = t("seo.numerology.desc", code);

    return {
      meta: buildContentMeta({
        path,
        title,
        description,
        exactTitle: true,
        locale: locale.meta.ogLocale,
        keywords: ["mulank calculator", "bhagyank calculator", locale.meta.englishName],
      }),
      links: [
        { rel: "canonical", href: `${SITE_URL}${path}` },
        ...getAllHreflangLinks("/numerology", SITE_URL),
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
              crumbs: [{ name: t("numerology.navLabel", code), path }],
            }),
          ),
        },
      ],
    };
  },
  component: LangNumerologyComponent,
});

function LangNumerologyComponent() {
  const { locale } = Route.useLoaderData();
  return (
    <LocaleProvider lang={locale.meta.code}>
      <NumerologyIndexScreen />
    </LocaleProvider>
  );
}
