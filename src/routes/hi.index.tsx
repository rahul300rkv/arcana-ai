import { createFileRoute } from "@tanstack/react-router";
import { t } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/language";
import { buildContentMeta, buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks } from "@/locales";
import { HomeScreen } from "./index";

const PATH = "/hi";

const HI_FAQS = [
  {
    question: "क्या AstroFree पर टैरो रीडिंग और मूलांक कैलकुलेटर पूरी तरह मुफ्त है?",
    answer:
      "हां। AstroFree पर सभी टैरो स्प्रेड, कार्ड ऑफ द डे, और मूलांक-भाग्यांक-नामांक कैलकुलेटर पूरी तरह मुफ्त हैं। कोई साइनअप या भुगतान अनिवार्य नहीं है।",
  },
  {
    question: "क्या मैं हिंदी भाषा में AI टैरो रीडिंग प्राप्त कर सकता हूं?",
    answer:
      "हां। AstroFree पर आप रीडिंग शुरू करते समय हिंदी सहित 13 भारतीय भाषाओं में से किसी भी भाषा में पूरा विश्लेषण पढ़ सकते हैं।",
  },
];

export const Route = createFileRoute("/hi/")({
  head: () => {
    const title = t("seo.home.title", "hi");
    const description = t("seo.home.desc", "hi");
    return {
      meta: buildContentMeta({
        path: PATH,
        title,
        description,
        exactTitle: true,
        locale: "hi_IN",
        keywords: [
          "फ्री टैरो कार्ड रीडिंग",
          "मूलांक अंक ज्योतिष हिंदी",
          "वैदिक अंक शास्त्र",
          "मूलांक 1 से 9",
          "टैरो कार्ड हिंदी में",
        ],
      }),
      links: [
        { rel: "canonical", href: `${SITE_URL}${PATH}` },
        ...getAllHreflangLinks("/", SITE_URL),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildPageJsonLd({
              path: PATH,
              title,
              description,
              inLanguage: "hi",
              homeLabel: t("nav.home", "hi"),
              crumbs: [{ name: "हिन्दी", path: PATH }],
              faqs: HI_FAQS,
              article: {
                published: "2026-11-19",
                updated: "2026-11-19",
                section: "Hindi Tarot & Vedic Numerology",
              },
            }),
          ),
        },
      ],
    };
  },
  component: HindiHomeComponent,
});

function HindiHomeComponent() {
  return (
    <LocaleProvider lang="hi">
      <HomeScreen />
    </LocaleProvider>
  );
}
