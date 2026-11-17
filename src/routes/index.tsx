import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  BookOpenText,
  BriefcaseBusiness,
  Compass,
  Heart,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  Wand2,
  ArrowRight,
  Flame,
  Droplets,
  Wind,
  Coins,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
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

const SPREADS = [
  {
    to: "/tarot/celtic-cross",
    title: "Celtic Cross",
    cards: "10 Cards",
    description: "The premier traditional spread revealing conscious focus, subconscious roots, past foundation, immediate challenge, and destiny outcome.",
    icon: Compass,
    badge: "Most Comprehensive",
  },
  {
    to: "/tarot/three-card",
    title: "Past · Present · Future",
    cards: "3 Cards",
    description: "A classical timeline mapping the formative energies behind you, where you stand today, and the trajectory unfolding ahead.",
    icon: Wand2,
    badge: "Quick Clarity",
  },
  {
    to: "/tarot/love",
    title: "Love & Relationships",
    cards: "5 Cards",
    description: "Explore emotional dynamics, unspoken desires, mutual obstacles, and the spiritual potential between you and another soul.",
    icon: Heart,
    badge: "Deep Connection",
  },
  {
    to: "/tarot/career",
    title: "Career & Abundance",
    cards: "5 Cards",
    description: "Incisive guidance on vocational decisions, leadership opportunities, financial timing, and practical professional momentum.",
    icon: BriefcaseBusiness,
    badge: "Strategic Vision",
  },
];

const MAJOR_CARDS = [
  { name: "The Fool", slug: "the-fool", number: 0, theme: "New Beginnings & Spontaneity" },
  { name: "The Magician", slug: "the-magician", number: 1, theme: "Willpower & Manifestation" },
  { name: "The High Priestess", slug: "the-high-priestess", number: 2, theme: "Intuition & Inner Mysteries" },
  { name: "The Empress", slug: "the-empress", number: 3, theme: "Abundance & Creative Nurturing" },
  { name: "The Emperor", slug: "the-emperor", number: 4, theme: "Structure, Logic & Authority" },
  { name: "The Hierophant", slug: "the-hierophant", number: 5, theme: "Spiritual Tradition & Wisdom" },
  { name: "The Lovers", slug: "the-lovers", number: 6, theme: "Harmony, Values & Alignment" },
  { name: "The Chariot", slug: "the-chariot", number: 7, theme: "Determination & Triumph" },
  { name: "Strength", slug: "strength", number: 8, theme: "Patience, Courage & Grace" },
  { name: "The Hermit", slug: "the-hermit", number: 9, theme: "Soul Searching & Solitude" },
  { name: "Wheel of Fortune", slug: "wheel-of-fortune", number: 10, theme: "Karmic Turning Points" },
  { name: "The Star", slug: "the-star", number: 17, theme: "Hope, Healing & Inspiration" },
];

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
      { title: "AstroFree — Free AI Tarot Readings & Vedic Numerology Calculators" },
      {
        name: "description",
        content:
          "AstroFree is India's premier free tarot and Vedic numerology platform. Experience 8 traditional tarot spreads, instant Mulank and Bhagyank calculations, 78 card meanings, and multi-language AI guidance.",
      },
      {
        name: "keywords",
        content:
          "free tarot reading, AI tarot, online tarot reading, celtic cross spread, tarot card meanings, love tarot, career tarot, mulank calculator, bhagyank calculator, namank name numerology, personal year numerology, tarot reading India, Vedic numerology",
      },
      {
        property: "og:title",
        content: "AstroFree — Free AI Tarot Readings & Vedic Numerology",
      },
      {
        property: "og:description",
        content:
          "Explore free tarot card readings, 78 card archetype meanings, Vedic Mulank and Bhagyank calculators, and personal astrology guides.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
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
              dateModified: "2026-11-16",
              inLanguage: "en",
            },
            {
              "@type": "WebApplication",
              name: SITE_NAME,
              url: SITE_URL,
              datePublished: "2026-07-15",
              dateModified: "2026-11-16",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
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
  }),
  component: LandingPage,
});

function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

        {/* 2. Asymmetric Bento Grid Capabilities */}
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
                The Sacred Formations
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf2e4] [text-wrap:balance]">
                Choose Your Gateway of Divination
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#e3cfb6]/90 max-w-xl mx-auto leading-relaxed [text-wrap:balance]">
                Each spread is an energetic constellation arranged to illuminate different facets of your life journey.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SPREADS.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group relative flex flex-col justify-between rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-6"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f5e7d0]/30 bg-gradient-to-br from-[#f5e7d0]/20 via-[#5a1224]/65 to-[#1c050b]/90 text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.45)] transition-transform duration-300 group-hover:scale-110">
                        <s.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-[#ead9c3]">
                        {s.cards}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-[#faf2e4] group-hover:text-[#fffdf8] transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-base sm:text-sm text-[#dfd0bc]/90 leading-relaxed line-clamp-3">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#f5e7d0]/15 flex items-center justify-between text-sm sm:text-xs font-semibold text-[#faf2e4]">
                    <span>{s.badge}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/tarot"
                className="liquid-chrome-btn inline-flex min-h-12 items-center gap-2 rounded-full px-6 py-3 text-sm sm:text-xs font-bold uppercase tracking-wider text-[#24060e]"
              >
                <span>Browse All 8 Tarot Spreads & Meanings</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Comprehensive Educational Content: The Architecture of Tarot */}
        <section className="relative py-20 border-t border-[#f5e7d0]/15 bg-[#120307]/55">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ead9c3]">
                Esoteric Foundations
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf2e4]">
                The Symbolic Architecture of Tarot
              </h2>
              <p className="mt-4 text-base text-[#e3cfb6]/90 leading-relaxed">
                Tarot is not a parlor trick or a superstitious decree; it is a 600-year-old symbolic system that maps the spectrum of human consciousness, psychological archetypes, and spiritual transformation.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl liquid-chrome-card p-8">
                <div className="flex items-center gap-3 text-[#faf2e4]">
                  <Sparkles className="h-5 w-5 text-[#ead9c3]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                    The Major Arcana: The Soul's Pilgrimage
                  </h3>
                </div>
                <p className="mt-4 text-base sm:text-[15px] text-[#e3cfb6] leading-relaxed">
                  The 22 cards of the Major Arcana (from 0 The Fool to XXI The World) represent the universal stages of spiritual maturation and psychological individuation. Often termed "The Fool's Journey," this sequence mirrors our passage through innocence, intellectual mastery, emotional union, worldly crisis, dark-night transformation, and cosmic enlightenment. When Major Arcana cards appear in your reading, they signal profound life themes, spiritual lessons, and karmic shifts that transcend temporary daily matters.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-[#f5e7d0]/25 bg-[#3a0c18]/65 px-3 py-1 font-medium text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                    22 Archetypal Keys
                  </span>
                  <span className="rounded-full border border-[#f5e7d0]/25 bg-[#3a0c18]/65 px-3 py-1 font-medium text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                    Karmic Lessons
                  </span>
                  <span className="rounded-full border border-[#f5e7d0]/25 bg-[#3a0c18]/65 px-3 py-1 font-medium text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                    Psychological Individuation
                  </span>
                </div>
              </div>

              <div className="rounded-3xl liquid-chrome-card p-8">
                <div className="flex items-center gap-3 text-[#faf2e4]">
                  <Compass className="h-5 w-5 text-[#ead9c3]" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                    The Minor Arcana: Four Elemental Planes
                  </h3>
                </div>
                <p className="mt-4 text-base sm:text-[15px] text-[#e3cfb6] leading-relaxed">
                  The 56 cards of the Minor Arcana reflect the daily fabric of human existence. Divided into four suits, each corresponds to a classical element and a distinct realm of life:
                </p>
                <div className="mt-5 space-y-3 text-base sm:text-sm text-[#dfd0bc]">
                  <div className="flex items-start gap-2.5">
                    <Flame className="h-4 w-4 text-[#f6c49f] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <strong className="text-[#faf2e4]">Suit of Wands (Fire):</strong> Willpower, creative passion, spiritual vigor, ambition, and career projects.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Droplets className="h-4 w-4 text-[#f2d6c3] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <strong className="text-[#faf2e4]">Suit of Cups (Water):</strong> Emotional depth, romantic bonding, intuitive wisdom, and healing.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Wind className="h-4 w-4 text-[#faf2e4] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <strong className="text-[#faf2e4]">Suit of Swords (Air):</strong> Intellect, ethical dilemmas, mental clarity, communication, and truth.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Coins className="h-4 w-4 text-[#e9cea4] shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <strong className="text-[#faf2e4]">Suit of Pentacles (Earth):</strong> Material reality, finances, bodily health, craft, and grounded security.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Directory to Top Major Arcana Cards */}
            <div className="mt-12">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h4 className="font-display text-xl font-bold text-[#faf2e4]">
                  Explore Major Arcana Meanings
                </h4>
                <Link to="/guide/major-arcana-meanings" className="inline-flex min-h-12 sm:min-h-0 items-center text-sm sm:text-xs text-[#faf2e4] hover:underline font-semibold">
                  View Full Archetype Index →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm sm:text-xs">
                {MAJOR_CARDS.map((card) => (
                  <Link
                    key={card.slug}
                    to={`/tarot/${card.slug}` as any}
                    className="min-h-14 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/70 p-3 text-left shadow-[inset_0_1px_1px_rgba(255,248,235,0.18)] hover:border-[#f5e7d0]/45 hover:bg-[#3f0d1b]/80 transition-all"
                  >
                    <div className="chrome-text font-mono text-xs font-bold">Key {card.number}</div>
                    <div className="font-semibold text-[#faf2e4] mt-1 truncate">{card.name}</div>
                    <div className="text-xs text-[#d6bfa3] mt-0.5 truncate">{card.theme}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Comprehensive Educational Content: The Vedic Science of Ank Shastra */}
        <section className="relative py-20 border-t border-[#f5e7d0]/15">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ead9c3]">
                Ancient Indian Numerology
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf2e4]">
                The Sacred Triad: Mulank, Bhagyank & Namank
              </h2>
              <p className="mt-4 text-base text-[#e3cfb6]/90 leading-relaxed">
                Vedic Numerology (अंक शास्त्र) teaches that each number from 1 to 9 emits a cosmic vibration presided over by one of the nine celestial planetary forces (Navagraha).
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                    Core Personality
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#faf2e4]">
                    Mulank (Root Number / जन्मांक)
                  </h3>
                  <p className="mt-3 text-base sm:text-[15px] text-[#e3cfb6] leading-relaxed">
                    Calculated solely from your birth date (1 to 31 reduced to a single digit). Mulank reflects your intrinsic nature, psychological temperament, personal tastes, and instinctual behavior when faced with challenges.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f5e7d0]/15">
                  <Link to="/numerology/mulank" className="min-h-12 sm:min-h-0 text-sm sm:text-xs font-semibold text-[#faf2e4] hover:underline inline-flex items-center gap-1.5">
                    <span>Mulank Master Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                    Life Mission
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#faf2e4]">
                    Bhagyank (Destiny Number / भाग्यांक)
                  </h3>
                  <p className="mt-3 text-base sm:text-[15px] text-[#e3cfb6] leading-relaxed">
                    Calculated by summing all digits of your Day, Month, and Year of birth. Bhagyank governs your destiny trajectory, societal role, major karma, and the career challenges you must master to achieve fulfillment.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f5e7d0]/15">
                  <Link to="/bhagyank-calculator" className="min-h-12 sm:min-h-0 text-sm sm:text-xs font-semibold text-[#faf2e4] hover:underline inline-flex items-center gap-1.5">
                    <span>Bhagyank Calculator</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                    Name Frequency
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-[#faf2e4]">
                    Namank (Name Vibration / नामांक)
                  </h3>
                  <p className="mt-3 text-base sm:text-[15px] text-[#e3cfb6] leading-relaxed">
                    Derived from ancient Chaldean sound vibration formulas that assign numeric weight to alphabet phonetics. A balanced Namank creates harmony between your inner desires and external life success.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f5e7d0]/15">
                  <Link to="/namank-calculator" className="min-h-12 sm:min-h-0 text-sm sm:text-xs font-semibold text-[#faf2e4] hover:underline inline-flex items-center gap-1.5">
                    <span>Namank Calculator</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Nine Planets Overview Table */}
            <div className="mt-12 rounded-3xl liquid-chrome-card p-6 sm:p-8">
              <h4 className="font-display text-xl font-bold text-[#faf2e4] mb-4">
                The 9 Planetary Lords & Their Core Vibration
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/65 shadow-[inset_0_1px_1px_rgba(255,248,235,0.16)]">
                  <strong className="chrome-text text-sm block">Number 1 · Surya (Sun)</strong>
                  <span className="text-[#e3cfb6] mt-1 block">Leadership, pioneering spirit, high self-respect, and vitality.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/65 shadow-[inset_0_1px_1px_rgba(255,248,235,0.16)]">
                  <strong className="chrome-text text-sm block">Number 2 · Chandra (Moon)</strong>
                  <span className="text-[#e3cfb6] mt-1 block">Emotional intelligence, diplomacy, imagination, and empathy.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/65 shadow-[inset_0_1px_1px_rgba(255,248,235,0.16)]">
                  <strong className="chrome-text text-sm block">Number 3 · Guru (Jupiter)</strong>
                  <span className="text-[#e3cfb6] mt-1 block">Spiritual wisdom, teaching, moral integrity, and eloquence.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/65 shadow-[inset_0_1px_1px_rgba(255,248,235,0.16)]">
                  <strong className="chrome-text text-sm block">Number 4 · Rahu</strong>
                  <span className="text-[#e3cfb6] mt-1 block">Unconventional genius, disruptive strategy, and structural logic.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/65 shadow-[inset_0_1px_1px_rgba(255,248,235,0.16)]">
                  <strong className="chrome-text text-sm block">Number 5 · Budha (Mercury)</strong>
                  <span className="text-[#e3cfb6] mt-1 block">Commercial acumen, versatile communication, and quick wit.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/65 shadow-[inset_0_1px_1px_rgba(255,248,235,0.16)]">
                  <strong className="chrome-text text-sm block">Number 6 · Shukra (Venus)</strong>
                  <span className="text-[#e3cfb6] mt-1 block">Aesthetics, unconditional love, domestic harmony, and luxury.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/65 shadow-[inset_0_1px_1px_rgba(255,248,235,0.16)]">
                  <strong className="chrome-text text-sm block">Number 7 · Ketu</strong>
                  <span className="text-[#e3cfb6] mt-1 block">Philosophical inquiry, mystical intuition, and analytical depth.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/65 shadow-[inset_0_1px_1px_rgba(255,248,235,0.16)]">
                  <strong className="chrome-text text-sm block">Number 8 · Shani (Saturn)</strong>
                  <span className="text-[#e3cfb6] mt-1 block">Karmic justice, organizational resilience, and enduring mastery.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-[#f5e7d0]/20 bg-[#2d0913]/65 shadow-[inset_0_1px_1px_rgba(255,248,235,0.16)]">
                  <strong className="chrome-text text-sm block">Number 9 · Mangal (Mars)</strong>
                  <span className="text-[#e3cfb6] mt-1 block">Courage, humanitarian compassion, physical drive, and triumph.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Comprehensive Editorial Treatise: The Synthesis of Tarot and Vedic Numerology (800+ Words for AdSense Quality Compliance) */}
        <section className="relative py-20 border-t border-[#f5e7d0]/15 bg-[#17040a]/80">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ead9c3]">
                Comprehensive Editorial Treatise
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf2e4]">
                The Convergence of Tarot Archetypes and Vedic Numerology
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#e3cfb6]/90 max-w-2xl mx-auto leading-relaxed">
                An exhaustive examination of symbolic psychology, planetary vibrations, and the enduring human quest for self-understanding through sacred esoteric frameworks.
              </p>
            </div>

            <div className="mt-14 space-y-10 text-base text-[#e3cfb6]/95 leading-relaxed">
              <div className="liquid-chrome-card rounded-3xl p-8 sm:p-10 space-y-5">
                <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                  1. Introduction: Bridging Western Hermeticism and Eastern Ank Shastra
                </h3>
                <p>
                  For millennia, civilizations across East and West have sought systematic methods to decode the mysteries of human destiny, temperament, and personal timing. While Western esoteric traditions developed the rich pictorial language of the 78-card tarot deck, ancient Indian sages perfected <em className="text-[#faf2e4] italic">Ank Shastra</em>—the sacred science of Vedic numerology. At first glance, these two disciplines originate from distinct cultural paradigms: one relies on allegorical archetypes and visual resonance, while the other employs precise arithmetic reduction based on birth dates and phonetic vibrations.
                </p>
                <p>
                  However, when explored with a contemplative and open mind, tarot and Vedic numerology reveal a profound structural harmony. Both systems operate on the principle of correspondence—the ancient Hermetic axiom that "as above, so below; as within, so without." AstroFree was engineered to unite these complementary wisdom streams into a single, seamless digital sanctuary. By offering both instant 8-spread tarot divinations and robust Mulank/Bhagyank numerology calculators, our platform provides seekers with multifaceted lenses for deep introspection.
                </p>
              </div>

              <div className="liquid-chrome-card rounded-3xl p-8 sm:p-10 space-y-5">
                <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                  2. The Psychological Mechanics of Tarot: Synchronicity and Archetypes
                </h3>
                <p>
                  Skeptics often dismiss tarot as superstitious fortune-telling, overlooking its profound roots in analytical psychology. Swiss psychiatrist Carl Jung introduced the concept of <em className="text-[#faf2e4] italic">synchronicity</em>—meaningful coincidences that cannot be explained by cause and effect, but are instead bonded by shared meaning. When a seeker shuffles a deck of tarot cards and draws a specific spread, the images that appear are not random anomalies; they serve as external mirrors reflecting the internal, subconscious landscape of the querent at that exact moment in time.
                </p>
                <p>
                  The 22 Major Arcana cards depict universal human milestones—from the naive optimism of The Fool to the hard-won integration of The World. These archetypes reside deep within the collective unconscious. When a difficult card like The Tower or Death appears in a reading, it does not decree an unalterable catastrophe. Instead, it illuminates a psychological necessity: old, rigid structures must crumble to make room for authentic spiritual growth. By interpreting these symbols without fatalism, seekers gain clarity, emotional resilience, and agency over their life choices.
                </p>
              </div>

              <div className="liquid-chrome-card rounded-3xl p-8 sm:p-10 space-y-5">
                <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                  3. The Navagraha and the Nine Numbers of Vedic Numerology
                </h3>
                <p>
                  In Vedic numerology, numbers are living energetic forces rather than mere abstract quantities. Every number from 1 to 9 is governed by one of the <em className="text-[#faf2e4] italic">Navagraha</em> (celestial planetary forces), exerting subtle yet profound influences on human personality and life trajectory.
                </p>
                <ul className="list-disc pl-5 space-y-3 text-[#dfd0bc]">
                  <li><strong className="text-[#faf2e4]">Number 1 (Surya / Sun):</strong> Radiates leadership, authority, creative independence, and high willpower.</li>
                  <li><strong className="text-[#faf2e4]">Number 2 (Chandra / Moon):</strong> Embodies emotional intelligence, intuition, diplomacy, and nurturing empathy.</li>
                  <li><strong className="text-[#faf2e4]">Number 3 (Guru / Jupiter):</strong> Governs expansion, wisdom, philosophical teaching, and moral optimism.</li>
                  <li><strong className="text-[#faf2e4]">Number 4 (Rahu):</strong> Fosters unconventional genius, disruptive innovation, and sharp analytical strategy.</li>
                  <li><strong className="text-[#faf2e4]">Number 5 (Budha / Mercury):</strong> Rules commercial acumen, versatile communication, adaptability, and wit.</li>
                  <li><strong className="text-[#faf2e4]">Number 6 (Shukra / Venus):</strong> Inspires aesthetic refinement, unconditional love, harmony, and luxury.</li>
                  <li><strong className="text-[#faf2e4]">Number 7 (Ketu):</strong> Directs mystical introspection, spiritual awakening, and deep philosophical inquiry.</li>
                  <li><strong className="text-[#faf2e4]">Number 8 (Shani / Saturn):</strong> Presides over karmic discipline, endurance, organizational mastery, and justice.</li>
                  <li><strong className="text-[#faf2e4]">Number 9 (Mangal / Mars):</strong> Empowers physical courage, humanitarian drive, protective leadership, and passion.</li>
                </ul>
                <p>
                  Understanding whether a number manifests in its constructive <em className="text-[#faf2e4] italic">positive</em> frequency or its challenging <em className="text-[#faf2e4] italic">shadow</em> frequency allows individuals to navigate personal weaknesses with self-compassion and strategic awareness.
                </p>
              </div>

              <div className="liquid-chrome-card rounded-3xl p-8 sm:p-10 space-y-5">
                <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                  4. Cultivating a Contemplative Daily Divination Practice
                </h3>
                <p>
                  Divination achieves its highest utility when approached as a disciplined meditative ritual rather than a hasty impulse. To derive maximum value from AstroFree or any esoteric practice, seekers should cultivate a calm physical and mental environment. Begin by lighting a gentle candle or taking five unhurried, diaphragmatic breaths to quiet the analytical chatter of the mind.
                </p>
                <p>
                  When formulating a query, avoid closed yes/no questions ("Will I get this job?"). Instead, frame inquiries openly to invite self-discovery ("What energy do I need to cultivate to succeed in my career transition?"). After receiving your AI-guided interpretation, record your reflections in a private journal. Over weeks and months, reviewing past entries reveals recurring life patterns, emotional maturation cycles, and the astonishing synchronicities between numerological forecasts and lived experience.
                </p>
              </div>

              <div className="liquid-chrome-card rounded-3xl p-8 sm:p-10 space-y-5">
                <h3 className="font-display text-2xl font-bold text-[#faf2e4]">
                  5. Conclusion: Empowering Free Will Through Esoteric Wisdom
                </h3>
                <p>
                  Ultimately, neither tarot cards nor numerological charts dictate human destiny. Human beings are endowed with free will, consciousness, and moral agency. Esoteric systems are simply navigational instruments—like a mariner's astrolabe or a traveler's topographic map. They do not walk the path for you; they merely illuminate the terrain, highlight unseen obstacles, and remind you of your innate inner strength.
                </p>
                <p>
                  AstroFree remains steadfastly committed to keeping these sacred tools free, accessible, private, and grounded in psychological depth. Whether you draw a single daily card for morning reflection or calculate your Personal Year forecast during a major life transition, may these insights serve as a faithful compass on your journey toward self-mastery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Substantive In-Depth FAQ Section */}
        <section id="faq" className="relative py-20 border-t border-[#f5e7d0]/15 bg-[#120307]/55">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ead9c3]">
                Frequently Asked Questions
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#faf2e4]">
                Everything You Need to Know About AstroFree
              </h2>
              <p className="mt-3 text-base sm:text-sm text-[#e3cfb6]/90">
                Detailed explanations regarding our methodology, privacy practices, and esoteric frameworks.
              </p>
            </div>

            <div className="space-y-4">
              {COMPREHENSIVE_FAQS.map((faq, index) => {
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

        {/* 9. Author & Editorial Desk Transparency (E-E-A-T) */}
        <section className="relative mx-auto max-w-4xl px-4 sm:px-6 py-16">
          <AuthorCard
            published="2026-07-15"
            lastUpdated="2026-11-16"
            category="Esoteric Research & Methodology"
            readingTime="12 min read"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
