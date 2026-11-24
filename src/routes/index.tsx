import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import {
  BriefcaseBusiness,
  Compass,
  Heart,
  Sparkles,
  Wand2,
  ArrowRight,
  Flame,
  Droplets,
  Wind,
  Coins,
  ChevronDown,
} from "@/components/icons";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { ParticleBackground } from "@/components/arcana/ParticleBackground";
import { Spotlight } from "@/components/arcana/Spotlight";
import { LandingNav } from "@/components/arcana/LandingNav";
import { StormIntro } from "@/components/landing/StormIntro";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Numerology } from "@/components/landing/Numerology";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Footer } from "@/components/landing/Footer";
import { AuthorCard } from "@/components/AuthorCard";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { getAllHreflangLinks, localizePath, type TranslationKey } from "@/locales";

const SPREAD_META = [
  { to: "/tarot/celtic-cross", key: "spread1", icon: Compass },
  { to: "/tarot/three-card", key: "spread2", icon: Wand2 },
  { to: "/tarot/love", key: "spread3", icon: Heart },
  { to: "/career-tarot-reading", key: "spread4", icon: BriefcaseBusiness },
] as const;

const MAJOR_CARD_META = [
  { slug: "the-fool", number: 0, key: "card0" },
  { slug: "the-magician", number: 1, key: "card1" },
  { slug: "the-high-priestess", number: 2, key: "card2" },
  { slug: "the-empress", number: 3, key: "card3" },
  { slug: "the-emperor", number: 4, key: "card4" },
  { slug: "the-hierophant", number: 5, key: "card5" },
  { slug: "the-lovers", number: 6, key: "card6" },
  { slug: "the-chariot", number: 7, key: "card7" },
  { slug: "strength", number: 8, key: "card8" },
  { slug: "the-hermit", number: 9, key: "card9" },
  { slug: "wheel-of-fortune", number: 10, key: "card10" },
  { slug: "the-star", number: 17, key: "card17" },
] as const;

const COMPREHENSIVE_FAQS = [
  {
    question: "Is AstroFree genuinely 100% free with no hidden charges?",
    answer:
      "Yes. AstroFree was created on the core philosophy that foundational esoteric wisdom, reflective tarot divination, and Vedic numerology should be accessible to all seekers without financial barriers. Every spread (including the full 10-card Celtic Cross), daily single-card draws, Mulank and Bhagyank calculations, personal year forecasts, and journal logs are completely free to use. You will never be asked for a credit card, payment gateway authorization, or subscription tier.",
  },
  {
    question: "How do AstroFree's AI tarot interpretations work, and are they accurate?",
    answer:
      "AstroFree's interpretation engine combines classical esoteric symbolism with modern artificial intelligence. When you shuffle and draw cards, the deck maintains the authentic mathematical probabilities of traditional 78-card physical tarot decks, including reversed orientations. Our interpretation models analyze the drawn card archetypes, their specific positions within the chosen spread (e.g., roots, challenges, conscious intentions, outcome), and any specific question you share. The resulting guidance is synthesized into grounded, empathetic narrative paragraphs designed for contemplation and clarity, rather than fatalistic or superstitious predictions.",
  },
  {
    question: "What is the difference between Mulank (Root Number) and Bhagyank (Destiny Number)?",
    answer:
      "In Vedic Numerology (Ank Shastra), Mulank and Bhagyank represent the two most vital planetary forces in human life. Your Mulank (Root Number) is calculated strictly from the date of the month you were born (reduced to a single digit between 1 and 9). It dictates your inner temperament, conscious thoughts, emotional wiring, and instinctive desires. Your Bhagyank (Destiny Number) is calculated from the complete sum of your birth day, month, and year. It governs your outer life trajectory, karmic lessons, life purpose, and maturity path after age 28-32. While Mulank represents 'who you are,' Bhagyank reflects 'what life demands you become.'",
  },
  {
    question: "Can tarot predict the future with 100% certainty?",
    answer:
      "No ethical tarot reader or reputable system claims that tarot predicts an unchangeable future. Tarot works through symbolic archetypes and psychological synchronicity (a concept extensively documented by Swiss psychoanalyst Carl Jung). The cards reflect current subconscious patterns, emotional trajectories, and energetic crossroads based on where you stand today. Because human beings possess free will, your conscious choices, actions, and boundaries continually reshape tomorrow. Tarot serves as an illuminating mirror to help you make wiser, more grounded decisions.",
  },
  {
    question: "Is my personal data, birth date, and question history kept private?",
    answer:
      "Your privacy is fundamental to our sanctuary design. Your journal entries, reading history, and entered dates of birth are preserved directly in your browser's local storage. AstroFree does not sell or trade user query logs or personal identity details to third-party data brokers. You can clear your journal and saved sessions at any time with a single click in your browser settings.",
  },
  {
    question: "Which Indian languages and scripts does AstroFree support?",
    answer:
      "AstroFree is built to serve seekers across the globe and India with support for 13 languages: English, Hindi (हिन्दी), Hinglish (conversational Hindi in Roman script), Bengali (বাংলা), Telugu (తెలుగు), Marathi (मराठी), Tamil (தமிழ்), Gujarati (ગુજરાતી), Kannada (ಕನ್ನಡ), Malayalam (മലയാളം), Punjabi (ਪੰਜਾਬੀ), Odia (ଓଡ଼ିଆ), and Assamese (অসমীয়া). Both tarot spread interpretations and Vedic numerology readings can be viewed in your native tongue.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AstroFree | Free AI Tarot Readings & Vedic Numerology Calculators" },
      {
        name: "description",
        content:
          "AstroFree offers free AI tarot readings, Card of the Day meanings, Celtic Cross & Yes/No spreads, and instant Vedic Mulank & Bhagyank numerology calculators.",
      },
      {
        name: "keywords",
        content:
          "astrofree, free tarot reading, AI tarot, card of the day, celtic cross tarot, yes or no tarot, major arcana tarot meanings, mulank calculator, bhagyank calculator, namank name numerology, vedic numerology",
      },
      {
        property: "og:title",
        content: "AstroFree | Free AI Tarot Readings & Vedic Numerology Calculators",
      },
      {
        property: "og:description",
        content:
          "Explore AstroFree: free AI tarot readings, Card of the Day interpretations, Celtic Cross & Yes/No spreads, and instant Mulank & Bhagyank calculators.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      {
        name: "twitter:title",
        content: "AstroFree | Free AI Tarot Readings & Vedic Numerology Calculators",
      },
      {
        name: "twitter:description",
        content:
          "Explore AstroFree: free AI tarot readings, Card of the Day interpretations, Celtic Cross & Yes/No spreads, and instant Mulank & Bhagyank calculators.",
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: SITE_NAME,
              description: "Free AI Tarot Card Readings & Vedic Numerology Calculators",
              datePublished: "2026-07-15",
              dateModified: "2026-11-19",
              inLanguage: "en",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "WebApplication",
              "@id": `${SITE_URL}/#webapp`,
              name: SITE_NAME,
              url: SITE_URL,
              datePublished: "2026-07-15",
              dateModified: "2026-11-19",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "All",
              description:
                "Free AI tarot card reading platform with 8 spreads including Celtic Cross, Card of the Day insights, Yes/No oracle, and Mulank, Bhagyank & Namank Vedic numerology calculators.",
              featureList: [
                "AI-powered tarot card readings in 13 Indian languages",
                "8 tarot spreads including 10-card Celtic Cross & Yes/No oracle",
                "78-card Major & Minor Arcana interpretations with Card of the Day",
                "Mulank, Bhagyank, Namank & Personal Year calculators",
              ],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "FAQPage",
              mainEntity: COMPREHENSIVE_FAQS.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ],
        },
      },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      ...getAllHreflangLinks("/", SITE_URL),
    ],
  }),
  component: HomeScreen,
});

export function HomeScreen() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const t = useTranslate();
  const [language, setLanguage] = useLanguage();

  const localizedFaqs =
    language === "en"
      ? COMPREHENSIVE_FAQS
      : [
          { question: t("faq.q1"), answer: t("faq.a1") },
          { question: t("faq.q6"), answer: t("faq.a6") },
          { question: t("faq.q7"), answer: t("faq.a7") },
          { question: t("faq.q2"), answer: t("faq.a2") },
          { question: t("faq.q3"), answer: t("faq.a3") },
          { question: t("faq.q4"), answer: t("faq.a4") },
          { question: t("faq.q5"), answer: t("faq.a5") },
        ];

  const lordKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

  return (
    <div className="relative min-h-dvh overflow-x-clip bg-background text-foreground antialiased selection:bg-[#6e1427]/60 selection:text-[#faf2e4]">
      <AuroraBackground />
      <ParticleBackground count={45} />
      <Spotlight />
      <LandingNav />

      <main>
        {/* 0. Interactive Three.js Storm Scroll Intro */}
        <StormIntro />

        {/* 1. Hero with Interactive 3D Card Fan */}
        <Hero />

        {/* 2. Asymmetric Grid Capabilities */}
        <Features />

        {/* 3. Live Interactive Vedic Numerology Matrix */}
        <Numerology />

        {/* 4. Three-Step Sacred Ritual */}
        <HowItWorks />

        {/* 5. Featured Spreads Altar Showcase */}
        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ead9c3]">
                {t("lhome.spreadsEye")}
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf2e4] [text-wrap:balance]">
                {t("lhome.spreadsTitle")}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#e3cfb6]/90 max-w-xl mx-auto leading-relaxed [text-wrap:balance]">
                {t("lfeat.subtitle")}
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SPREAD_META.map((s) => (
                <Link
                  key={s.to}
                  to={localizePath(s.to, language) as any}
                  className="group relative flex flex-col justify-between rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-6"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5e7d0]/30 bg-gradient-to-br from-[#f5e7d0]/20 via-[#5a1224]/65 to-[#1c050b]/90 text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.45)] transition-transform duration-300 group-hover:scale-110">
                        <s.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-[#ead9c3]">
                        {t(`lhome.${s.key}.cards` as TranslationKey)}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-[#faf2e4] group-hover:text-[#fffdf8] transition-colors">
                      {t(`lhome.${s.key}.title` as TranslationKey)}
                    </h3>
                    <p className="mt-2 text-base sm:text-sm text-[#dfd0bc]/90 leading-relaxed line-clamp-3">
                      {t(`lhome.${s.key}.desc` as TranslationKey)}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#f5e7d0]/15 flex items-center justify-between text-sm sm:text-xs font-semibold text-[#faf2e4]">
                    <span>{t(`lhome.${s.key}.badge` as TranslationKey)}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center">
              <Link
                to={localizePath("/tarot", language) as any}
                className="liquid-chrome-btn inline-flex min-h-12 items-center gap-2 rounded-full px-6 py-3 text-sm sm:text-xs font-bold uppercase tracking-wider text-[#24060e]"
              >
                <span>{t("lhome.browseSpreads")}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/hi"
                onClick={() => setLanguage("hi")}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#f5e7d0]/30 bg-[#3a0c18]/75 px-6 py-3 text-sm sm:text-xs font-semibold text-[#faf2e4] hover:border-[#f5e7d0]/60 transition-colors"
              >
                <span>{t("lhero.quickHindi")}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Comprehensive Educational Content: The Architecture of Tarot */}
        <section className="relative py-20 border-t border-[#f5e7d0]/15 bg-[#120307]/55 [content-visibility:auto] [contain-intrinsic-size:auto_780px]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ead9c3]">
                {t("lhome.archEye")}
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf2e4]">
                {t("lhome.archTitle")}
              </h2>
              <p className="mt-4 text-base text-[#e3cfb6]/90 leading-relaxed">
                {t("lhome.archSub")}
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl liquid-chrome-card p-8">
                <div className="flex items-center gap-3 text-[#faf2e4]">
                  <Sparkles className="h-5 w-5 text-[#ead9c3]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                    {t("lhome.majorTitle")}
                  </h3>
                </div>
                <p className="mt-4 text-base sm:text-[15px] text-[#e3cfb6] leading-relaxed">
                  {t("lhome.majorBody")}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-[#f5e7d0]/25 bg-[#3a0c18]/65 px-3 py-1 font-medium text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                    {t("lhome.majorTag1")}
                  </span>
                  <span className="rounded-full border border-[#f5e7d0]/25 bg-[#3a0c18]/65 px-3 py-1 font-medium text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                    {t("lhome.majorTag2")}
                  </span>
                  <span className="rounded-full border border-[#f5e7d0]/25 bg-[#3a0c18]/65 px-3 py-1 font-medium text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                    {t("lhome.majorTag3")}
                  </span>
                </div>
              </div>

              <div className="rounded-3xl liquid-chrome-card p-8">
                <div className="flex items-center gap-3 text-[#faf2e4]">
                  <Compass className="h-5 w-5 text-[#ead9c3]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                    {t("lhome.minorTitle")}
                  </h3>
                </div>
                <p className="mt-4 text-base sm:text-[15px] text-[#e3cfb6] leading-relaxed">
                  {t("lhome.minorBody")}
                </p>
                <div className="mt-5 space-y-3 text-base sm:text-sm text-[#dfd0bc]">
                  <div className="flex items-start gap-2.5">
                    <Flame className="h-4 w-4 text-[#f6c49f] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <strong className="text-[#faf2e4]">{t("lhome.suit1Title")}</strong> {t("lhome.suit1Desc")}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Droplets className="h-4 w-4 text-[#f2d6c3] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <strong className="text-[#faf2e4]">{t("lhome.suit2Title")}</strong> {t("lhome.suit2Desc")}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Wind className="h-4 w-4 text-[#faf2e4] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <strong className="text-[#faf2e4]">{t("lhome.suit3Title")}</strong> {t("lhome.suit3Desc")}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Coins className="h-4 w-4 text-[#e9cea4] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <strong className="text-[#faf2e4]">{t("lhome.suit4Title")}</strong> {t("lhome.suit4Desc")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Directory to Top Major Arcana Cards */}
            <div className="mt-12">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h4 className="font-display text-xl font-bold text-[#faf2e4]">
                  {t("lhome.majDirTitle")}
                </h4>
                <Link to={localizePath("/major-arcana-tarot-cards-meanings", language) as any} className="inline-flex min-h-12 sm:min-h-0 items-center text-sm sm:text-xs text-[#faf2e4] hover:underline font-semibold">
                  {t("lhome.majDirLink")} →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm sm:text-xs">
                {MAJOR_CARD_META.map((card) => (
                  <Link
                    key={card.slug}
                    to={localizePath(`/tarot/${card.slug}`, language) as any}
                    className="min-h-14 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/70 p-3 text-left shadow-[inset_0_1px_1px_rgba(255,248,235,0.18)] hover:border-[#f5e7d0]/45 hover:bg-[#3f0d1b]/80 transition-all"
                  >
                    <div className="chrome-text font-mono text-xs font-bold">
                      {t("lhome.keyPrefix")} {card.number}
                    </div>
                    <div className="font-semibold text-[#faf2e4] mt-1 truncate">
                      {t(`lhome.${card.key}.name` as TranslationKey)}
                    </div>
                    <div className="text-xs text-[#d6bfa3] mt-0.5 truncate">
                      {t(`lhome.${card.key}.theme` as TranslationKey)}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Comprehensive Educational Content: The Vedic Science of Ank Shastra */}
        <section className="relative py-20 border-t border-[#f5e7d0]/15 [content-visibility:auto] [contain-intrinsic-size:auto_780px]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ead9c3]">
                {t("lhome.triadEye")}
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf2e4]">
                {t("lhome.triadTitle")}
              </h2>
              <p className="mt-4 text-base text-[#e3cfb6]/90 leading-relaxed">
                {t("lhome.triadSub")}
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                    {t("lhome.triad1Eye")}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#faf2e4]">
                    {t("lhome.triad1Title")}
                  </h3>
                  <p className="mt-3 text-base sm:text-[15px] text-[#e3cfb6] leading-relaxed">
                    {t("lhome.triad1Body")}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f5e7d0]/15">
                  <Link
                    to={localizePath("/numerology/mulank", language) as any}
                    className="min-h-12 sm:min-h-0 text-sm sm:text-xs font-semibold text-[#faf2e4] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>{t("lhome.triad1Cta")}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                    {t("lhome.triad2Eye")}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#faf2e4]">
                    {t("lhome.triad2Title")}
                  </h3>
                  <p className="mt-3 text-base sm:text-[15px] text-[#e3cfb6] leading-relaxed">
                    {t("lhome.triad2Body")}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f5e7d0]/15">
                  <Link
                    to={localizePath("/bhagyank-calculator", language) as any}
                    className="min-h-12 sm:min-h-0 text-sm sm:text-xs font-semibold text-[#faf2e4] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>{t("lhome.triad2Cta")}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                    {t("lhome.triad3Eye")}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#faf2e4]">
                    {t("lhome.triad3Title")}
                  </h3>
                  <p className="mt-3 text-base sm:text-[15px] text-[#e3cfb6] leading-relaxed">
                    {t("lhome.triad3Body")}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f5e7d0]/15">
                  <Link
                    to={localizePath("/namank-calculator", language) as any}
                    className="min-h-12 sm:min-h-0 text-sm sm:text-xs font-semibold text-[#faf2e4] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>{t("lhome.triad3Cta")}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Nine Planets Overview Table */}
            <div className="mt-12 rounded-3xl liquid-chrome-card p-6 sm:p-8">
              <h4 className="font-display text-xl font-bold text-[#faf2e4] mb-4">
                {t("lhome.lordsTitle")}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {lordKeys.map((num) => (
                  <div
                    key={num}
                    className="p-3.5 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/65 shadow-[inset_0_1px_1px_rgba(255,248,235,0.16)]"
                  >
                    <strong className="chrome-text text-sm block">
                      {t(`lhome.lord${num}Title` as TranslationKey)}
                    </strong>
                    <span className="text-[#e3cfb6] mt-1 block">
                      {t(`lhome.lord${num}Desc` as TranslationKey)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Comprehensive Editorial Treatise: The Synthesis of Tarot and Vedic Numerology */}
        <section className="relative py-20 border-t border-[#f5e7d0]/15 bg-[#17040a]/80 [content-visibility:auto] [contain-intrinsic-size:auto_1400px]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ead9c3]">
                {t("lhome.treatiseEye")}
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf2e4]">
                {t("lhome.treatiseTitle")}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#e3cfb6]/90 max-w-2xl mx-auto leading-relaxed">
                {t("lhome.treatiseSub")}
              </p>
            </div>

            <div className="mt-14 space-y-10 text-base text-[#e3cfb6]/95 leading-relaxed">
              <div className="liquid-chrome-card rounded-3xl p-8 sm:p-10 space-y-5">
                <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                  {t("lhome.tSec1Title")}
                </h3>
                <p>{t("lhome.tSec1P1")}</p>
                <p>{t("lhome.tSec1P2")}</p>
              </div>

              <div className="liquid-chrome-card rounded-3xl p-8 sm:p-10 space-y-5">
                <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                  {t("lhome.tSec2Title")}
                </h3>
                <p>{t("lhome.tSec2P1")}</p>
                <p>{t("lhome.tSec2P2")}</p>
              </div>

              <div className="liquid-chrome-card rounded-3xl p-8 sm:p-10 space-y-5">
                <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                  {t("lhome.tSec3Title")}
                </h3>
                <p>{t("lhome.tSec3P1")}</p>
                <ul className="list-disc pl-5 space-y-3 text-[#dfd0bc]">
                  {lordKeys.map((num) => (
                    <li key={num}>{t(`lhome.tSec3B${num}` as TranslationKey)}</li>
                  ))}
                </ul>
                <p>{t("lhome.tSec3P2")}</p>
              </div>

              <div className="liquid-chrome-card rounded-3xl p-8 sm:p-10 space-y-5">
                <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                  {t("lhome.tSec4Title")}
                </h3>
                <p>{t("lhome.tSec4P1")}</p>
                <p>{t("lhome.tSec4P2")}</p>
              </div>

              <div className="liquid-chrome-card rounded-3xl p-8 sm:p-10 space-y-5">
                <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                  {t("lhome.tSec5Title")}
                </h3>
                <p>{t("lhome.tSec5P1")}</p>
                <p>{t("lhome.tSec5P2")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Substantive In-Depth FAQ Section */}
        <section id="faq" className="relative py-20 border-t border-[#f5e7d0]/15 bg-[#120307]/55 [content-visibility:auto] [contain-intrinsic-size:auto_680px]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ead9c3]">
                {t("lhome.faqEye")}
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#faf2e4]">
                {t("lhome.faqTitle")}
              </h2>
              <p className="mt-3 text-base sm:text-sm text-[#e3cfb6]/90">
                {t("lfeat.subtitle")}
              </p>
            </div>

            <div className="space-y-4">
              {localizedFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const panelId = `home-faq-panel-${index}`;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl liquid-chrome-card overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full min-h-14 flex items-center justify-between p-5 text-left font-display text-lg font-bold text-[#faf2e4] hover:text-[#fffdf8] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 text-[#ead9c3] transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      id={panelId}
                      hidden={!isOpen}
                      className="px-5 pb-5 text-base sm:text-[15px] text-[#e3cfb6]/95 leading-relaxed border-t border-[#f5e7d0]/15 pt-3"
                    >
                      {faq.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. Author & Editorial Desk Transparency (E-E-A-T) */}
        <section className="relative mx-auto max-w-4xl px-4 sm:px-6 py-16">
          <AuthorCard
            published="2026-07-15"
            lastUpdated="2026-11-19"
            category={t("lhome.authorCat")}
            readingTime={t("lhome.authorReadTime")}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
