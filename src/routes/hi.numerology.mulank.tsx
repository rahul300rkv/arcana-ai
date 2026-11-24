import { createFileRoute } from "@tanstack/react-router";
import { t } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/language";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks } from "@/locales";
import { MulankHubScreen } from "@/screens/MulankHubScreen";

const PATH = "/hi/numerology/mulank";

export const Route = createFileRoute("/hi/numerology/mulank")({
  loader: async () => {
    const { MULANK_HUB_FAQS, MULANK_UPDATED } = await import("@/data/mulank");
    return { faqs: MULANK_HUB_FAQS, updated: MULANK_UPDATED };
  },
  head: ({ loaderData }) => {
    const title = t("seo.mulank.title", "hi");
    const description = t("seo.mulank.desc", "hi");
    return {
      meta: buildContentMeta({
        path: PATH,
        title,
        description,
        exactTitle: true,
        locale: "hi_IN",
        keywords: [
          "मूलांक कैसे निकालें",
          "मूलांक 1 से 9",
          "mulank in hindi",
          "अंक ज्योतिष मूलांक",
          "जन्म तारीख से मूलांक",
        ],
      }),
      links: [
        { rel: "canonical", href: `${SITE_URL}${PATH}` },
        ...getAllHreflangLinks("/numerology/mulank", SITE_URL),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildContentJsonLd({
              path: PATH,
              title,
              description,
              updated: loaderData?.updated ?? "2026-11-19",
              inLanguage: "hi",
              homeLabel: t("nav.home", "hi"),
              crumbs: [
                { name: t("numerology.navLabel", "hi"), path: "/hi/numerology" },
                { name: t("mulankHub.crumb", "hi"), path: PATH },
              ],
              faqs: loaderData?.faqs ?? [],
            }),
          ),
        },
      ],
    };
  },
  component: HindiMulankHubComponent,
});

function HindiMulankHubComponent() {
  return (
    <LocaleProvider lang="hi">
      <MulankHubScreen />
    </LocaleProvider>
  );
}
