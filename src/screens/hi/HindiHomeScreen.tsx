import { Link } from "@/components/LocalizedLink";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Compass,
  Globe,
  HelpCircle,
  Sparkles,
} from "@/components/icons";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { HI_MULANK_PAGES } from "@/data/hi-mulank";
import { LocaleProvider, setLanguage } from "@/lib/language";

const HI_HOME_FAQS = [
  {
    question: "क्या AstroFree पर टैरो रीडिंग और मूलांक कैलकुलेटर पूरी तरह मुफ्त है?",
    answer:
      "हां। AstroFree पर सभी टैरो स्प्रेड (वन कार्ड, थ्री कार्ड, लव, करियर और सेल्टिक क्रॉस), कार्ड ऑफ द डे, और मूलांक-भाग्यांक-नामांक कैलकुलेटर पूरी तरह मुफ्त हैं। कोई छिपा शुल्क या साइनअप अनिवार्य नहीं है।",
  },
  {
    question: "क्या मैं हिंदी भाषा में AI टैरो रीडिंग प्राप्त कर सकता हूं?",
    answer:
      "हां। AstroFree पर आप रीडिंग शुरू करते समय हिंदी, हिंग्लिश सहित 13 भारतीय भाषाओं में से किसी भी भाषा को चुनकर पूरा टैरो और अंक ज्योतिष विश्लेषण पढ़ सकते हैं।",
  },
  {
    question: "मूलांक और भाग्यांक दोनों क्यों महत्वपूर्ण हैं?",
    answer:
      "मूलांक (जन्म तारीख से निकलने वाला अंक) आपके मूल स्वभाव और तुरंत सोचने के तरीके को दिखाता है, जबकि भाग्यांक (पूरी जन्मतिथि का योग) जीवन के बड़े उद्देश्य और भाग्य की दिशा बताता है। दोनों का मेल सही करियर और जीवनसाथी चुनने में मदद करता है।",
  },
];

export function HindiHomeScreen() {
  return (
    <LocaleProvider lang="hi">
      <div className="relative min-h-dvh">
        <AuroraBackground />
        <LandingNav />

        <main className="relative mx-auto w-full max-w-5xl px-4 pb-24 pt-28 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-[var(--gold)]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              हिंदी अंक ज्योतिष एवं टैरो केंद्र
            </span>
            <Link
              to="/"
              onClick={() => setLanguage("en")}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-[var(--gold)]/45 hover:text-foreground"
            >
              <Globe className="h-3.5 w-3.5" aria-hidden />
              Read in English
            </Link>
          </div>

          <header className="mt-6">
            <h1 className="font-display text-3xl leading-tight aurora-text sm:text-5xl">
              फ्री AI टैरो कार्ड रीडिंग और वैदिक अंक ज्योतिष (मूलांक व भाग्यांक)
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              AstroFree भारत के साधकों और जिज्ञासु पाठकों के लिए बनाया गया एक निःशुल्क डिजिटल मंच है। यहां आप हिंदी में मूलांक (1 से 9) का संपूर्ण विश्लेषण पढ़ सकते हैं, मूलांक-भाग्यांक संगतता देख सकते हैं और 78 कार्डों के टैरो अर्थ व AI मार्गदर्शन का लाभ उठा सकते हैं।
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to={"/hi/reading" as any}>
                <GoldButton size="lg">
                  <Sparkles className="h-4 w-4" />
                  फ्री टैरो रीडिंग शुरू करें
                </GoldButton>
              </Link>
              <Link
                to={"/hi/numerology" as any}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.08]"
              >
                <Calculator className="h-4 w-4 text-[var(--gold)]" aria-hidden />
                मूलांक व भाग्यांक कैलकुलेटर
              </Link>
            </div>
          </header>

        <section aria-labelledby="hi-mulank-grid-heading" className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]">
                अंक शास्त्र (Ank Shastra)
              </p>
              <h2
                id="hi-mulank-grid-heading"
                className="mt-2 font-display text-2xl aurora-text sm:text-3xl"
              >
                मूलांक 1 से 9 तक संपूर्ण मार्गदर्शिका
              </h2>
            </div>
            <Link
              to={"/hi/numerology/mulank" as any}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--gold)] hover:underline"
            >
              मूलांक कैसे निकालें?
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HI_MULANK_PAGES.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/hi/numerology/$slug"
                  params={{ slug: p.slug }}
                  className="block h-full"
                >
                  <GlassCard className="flex h-full flex-col justify-between p-5 transition-transform duration-300 hover:-translate-y-0.5">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-display text-3xl aurora-text">{p.number}</span>
                        <span className="text-xs font-medium text-[var(--gold)]">{p.planet}</span>
                      </div>
                      <h3 className="mt-2 font-display text-lg text-foreground">{p.label}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        जन्म तारीख: {p.dates.join(", ")}
                      </p>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {p.hero}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--gold)]">
                      विस्तार से पढ़ें <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </GlassCard>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="hi-tools-heading" className="mt-16">
          <h2 id="hi-tools-heading" className="font-display text-2xl aurora-text sm:text-3xl">
            प्रमुख टूल्स और गहन अध्ययन
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Link to="/numerology/compatibility" className="block h-full">
              <GlassCard className="h-full p-6">
                <Compass className="h-5 w-5 text-[var(--gold)]" aria-hidden />
                <h3 className="mt-3 font-display text-xl text-foreground">
                  मूलांक × भाग्यांक 81 जोड़ियां
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  अपने जन्म अंक (1 से 9) और भाग्यांक (1 से 9) की ग्रह मित्रता, करियर मेल और वैवाहिक संतुलन की जांच करें।
                </p>
              </GlassCard>
            </Link>

            <Link to="/tarot/combinations" className="block h-full">
              <GlassCard className="h-full p-6">
                <BookOpen className="h-5 w-5 text-[var(--gold)]" aria-hidden />
                <h3 className="mt-3 font-display text-xl text-foreground">
                  टैरो कार्ड कॉम्बिनेशन एक्सप्लोरर
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  किसी भी दो टैरो कार्ड्स के एक साथ आने का अर्थ, प्रेम और करियर संकेत तथा हां/नहीं परिणाम जानें।
                </p>
              </GlassCard>
            </Link>

            <Link to="/tarot/one-card" className="block h-full">
              <GlassCard className="h-full p-6">
                <Sparkles className="h-5 w-5 text-[var(--gold)]" aria-hidden />
                <h3 className="mt-3 font-display text-xl text-foreground">
                  दैनिक टैरो कार्ड (Card of the Day)
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  आज के दिन की ऊर्जा, सही निर्णय और सावधानियों को समझने के लिए एक मुफ्त दैनिक कार्ड निकालें।
                </p>
              </GlassCard>
            </Link>
          </div>
        </section>

        <section aria-labelledby="hi-faq-heading" className="mt-16">
          <div className="mb-5 flex items-center gap-2.5">
            <HelpCircle className="h-5 w-5 text-[var(--gold)]" aria-hidden />
            <h2 id="hi-faq-heading" className="font-display text-2xl aurora-text sm:text-3xl">
              अक्सर पूछे जाने वाले प्रश्न (FAQ)
            </h2>
          </div>
          <FAQAccordion items={HI_HOME_FAQS} />
        </section>
      </main>

      <Footer />
      </div>
    </LocaleProvider>
  );
}
