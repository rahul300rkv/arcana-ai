import { Link } from "@/components/LocalizedLink";
import { BookOpen, Calculator, Compass, Globe, HelpCircle, Sparkles } from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { HI_MULANK_PAGES, HI_MULANK_HUB_FAQS, HI_MULANK_UPDATED } from "@/data/hi-mulank";
import { LocaleProvider, setLanguage } from "@/lib/language";
import { SITE_URL } from "@/lib/site";

export function HindiMulankHubScreen() {
  return (
    <LocaleProvider lang="hi">
      <ArticleLayout
      crumbs={[
        { label: "हिंदी केंद्र", to: "/hi" },
        { label: "मूलांक गाइड" },
      ]}
      eyebrow="वैदिक अंक ज्योतिष (Ank Shastra)"
      title="मूलांक (Mulank) क्या है? जन्म तारीख से मूलांक 1 से 9 कैसे जानें"
      intro="मूलांक आपके जन्म की तारीख (1 से 31) का एकल अंक होता है, जो आपके मूल स्वभाव, निर्णय शैली और नवग्रह प्रभाव को दर्शाता है। यहां जानें मूलांक निकालने की विधि तथा मूलांक 1 से 9 का पूरा विवरण।"
      url={`${SITE_URL}/hi/numerology/mulank`}
      updated={HI_MULANK_UPDATED}
      readingMinutes={7}
      wordCount={1100}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-5xl aurora-text">1–9</span>
        </GlassCard>
      }
      afterHeader={
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3.5 text-xs">
          <span className="text-muted-foreground">
            यह पृष्ठ हिंदी में उपलब्ध है। अंग्रेजी संस्करण भी देखें:
          </span>
          <Link
            to="/numerology/mulank"
            onClick={() => setLanguage("en")}
            className="inline-flex items-center gap-1.5 font-semibold text-[var(--gold)] hover:underline"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden />
            English Mulank Guide
          </Link>
        </div>
      }
    >
      <ContentSection
        id="what-is-mulank"
        title="मूलांक (जन्मांक) क्या होता है?"
        icon={BookOpen}
        paragraphs={[
          "भारतीय अंक ज्योतिष में जन्म तिथि की केवल 'तारीख' (1 से 31) को जोड़कर प्राप्त होने वाले 1 से 9 तक के अंक को मूलांक (Mulank / Driver Number) कहा जाता है। यह बिना किसी जन्म समय या जन्म स्थान की जानकारी के सबसे शीघ्र निकलने वाला प्रमुख अंक है।",
          "मूलांक आपके तात्कालिक व्यवहार, लोगों पर पड़ने वाले पहले प्रभाव, पसंद-नापसंद और दबाव के समय आने वाली प्रतिक्रिया को दर्शाता है। वहीं पूरी जन्मतिथि (तारीख + माह + वर्ष) से निकलने वाला भाग्यांक (Bhagyank) जीवन की समग्र दिशा और दीर्घकालिक कर्म को बताता है।",
          "नवग्रह सिद्धांत के अनुसार प्रत्येक अंक एक ग्रह से जुड़ा है: 1 का सूर्य, 2 का चंद्र, 3 का बृहस्पति, 4 का राहु, 5 का बुध, 6 का शुक्र, 7 का केतु, 8 का शनि और 9 का मंगल।",
        ]}
      />

      <ContentSection
        id="how-to-calculate"
        title="मूलांक कैसे निकालें? (सरल उदाहरण)"
        icon={Calculator}
        paragraphs={[
          "अपनी जन्म तारीख के अंकों को तब तक जोड़ें जब तक कि 1 से 9 के बीच एक अकेला अंक न आ जाए। इसमें जन्म के महीने या साल को शामिल नहीं किया जाता। जैसे यदि जन्म 7 तारीख को हुआ है तो मूलांक 7 होगा। यदि 14 को हुआ है तो 1 + 4 = 5 होगा। यदि 29 को हुआ है तो 2 + 9 = 11, फिर 1 + 1 = 2 होगा।",
        ]}
      >
        <GlassCard className="p-6">
          <p className="text-sm text-muted-foreground">उदाहरण: जन्म तिथि 23 जुलाई 1998</p>
          <p className="mt-3 font-display text-xl aurora-text">23 → 2 + 3 = 5 (मूलांक 5)</p>
          <p className="mt-2 text-sm text-muted-foreground">
            यहां स्वामी ग्रह बुध होगा। माह और वर्ष का उपयोग केवल भाग्यांक निकालने के लिए किया जाता है।
          </p>
          <Link
            to={"/hi/numerology" as any}
            className="mt-4 inline-flex min-h-10 items-center text-sm font-semibold text-[var(--gold)] hover:underline"
          >
            फ्री कैलकुलेटर में तुरंत जांचें →
          </Link>
        </GlassCard>
      </ContentSection>

      <ContentSection id="all-numbers" title="मूलांक 1 से 9 का संपूर्ण विवरण" icon={Compass}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {HI_MULANK_PAGES.map((p) => (
            <li key={p.slug}>
              <Link
                to={"/hi/numerology/$slug" as any}
                params={{ slug: p.slug } as any}
                className="block h-full"
              >
                <GlassCard className="flex h-full items-start gap-4 p-5">
                  <span className="font-display text-3xl aurora-text">{p.number}</span>
                  <span className="min-w-0">
                    <span className="block font-display text-base text-foreground">
                      {p.label}: {p.planet}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      तारीख: {p.dates.join(", ")}
                    </span>
                  </span>
                </GlassCard>
              </Link>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection
        id="practical-use"
        title="मूलांक का व्यावहारिक उपयोग कैसे करें?"
        icon={Sparkles}
        paragraphs={[
          "मूलांक का उद्देश्य भाग्यवादी डर पैदा करना नहीं, बल्कि अपने स्वभाव और ऊर्जा को पहचानना है। जब आप जानते हैं कि आपका स्वामी ग्रह किस दिशा में काम करता है, तो आप सही करियर, शुभ दिन और बेहतर आदतें चुन सकते हैं।",
          "मूलांक के साथ अपने भाग्यांक की जोड़ी भी अवश्य देखें। हमारा मूलांक × भाग्यांक संगतता मैट्रिक्स 1 से 9 की सभी 81 जोड़ियों का विश्लेषण दिखाता है।",
        ]}
      />

      <ContentSection id="faq" title="अक्सर पूछे जाने वाले प्रश्न" icon={HelpCircle}>
        <FAQAccordion items={HI_MULANK_HUB_FAQS} />
      </ContentSection>

      <KeepExploring
        links={
          [
            {
              to: "/hi/numerology",
              label: "फ्री मूलांक व भाग्यांक कैलकुलेटर",
              blurb: "जन्मतिथि डालकर मूलांक, भाग्यांक और पर्सनल ईयर तुरंत निकालें。",
            },
            {
              to: "/numerology/compatibility",
              label: "मूलांक × भाग्यांक 81 जोड़ी मैट्रिक्स",
              blurb: "अपने मूलांक और भाग्यांक के बीच ग्रहों की मित्रता जांचें।",
            },
            {
              to: "/hi/reading",
              label: "फ्री AI टैरो कार्ड रीडिंग",
              blurb: "हिंदी भाषा में अपना प्रश्न पूछकर मुफ्त टैरो मार्गदर्शन पाएं।",
            },
            {
              to: "/hi",
              label: "हिंदी होम पेज",
              blurb: "हिंदी अंक ज्योतिष व टैरो की सभी सेवाओं पर वापस जाएं।",
            },
          ] as Array<{ to: any; label: string; blurb: string }>
        }
      />

      <CTASection
        title="अपना मूलांक और भाग्यांक तुरंत निकालें"
        body="केवल अपनी जन्मतिथि दर्ज करें और अपना स्वामी ग्रह, मित्र अंक तथा वर्तमान वर्ष का प्रभाव जानें।"
        ctaLabel="फ्री कैलकुलेटर खोलें"
        to={"/hi/numerology" as any}
      />
      </ArticleLayout>
    </LocaleProvider>
  );
}
