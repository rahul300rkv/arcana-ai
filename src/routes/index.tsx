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
import { CosmicIntro } from "@/components/landing/CosmicIntro";
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
              inLanguage: "en",
            },
            {
              "@type": "WebApplication",
              name: SITE_NAME,
              url: SITE_URL,
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
  const [replayIntro, setReplayIntro] = useState(false);

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-background text-foreground antialiased selection:bg-amber-400/30 selection:text-foreground">
      <CosmicIntro forcePlay={replayIntro} onClose={() => setReplayIntro(false)} />
      <AuroraBackground />
      <ParticleBackground count={45} />
      <Spotlight />
      <LandingNav />

      <main>
        {/* 1. Hero with Interactive 3D Card Fan & Intro Replay */}
        <Hero onReplayIntro={() => setReplayIntro(true)} />

        {/* 2. Asymmetric Bento Grid Capabilities */}
        <Features />

        {/* 3. Live Interactive Vedic Numerology Matrix */}
        <Numerology />

        {/* 4. Three-Step Sacred Ritual */}
        <HowItWorks />

        {/* 5. Featured Spreads Altar Showcase in Liquid Chrome */}
        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                The Sacred Formations
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
                Choose Your Gateway of Divination
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300/90 max-w-xl mx-auto leading-relaxed [text-wrap:balance]">
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
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-br from-white/20 via-slate-700/40 to-black/80 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] transition-transform duration-300 group-hover:scale-110">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-300">
                        {s.cards}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-white group-hover:text-slate-200 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300/80 leading-relaxed line-clamp-3">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white">
                    <span>{s.badge}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/tarot"
                className="liquid-chrome-btn inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950"
              >
                <span>Browse All 8 Tarot Spreads & Meanings</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Comprehensive Educational Content: The Architecture of Tarot (Liquid Chrome) */}
        <section className="relative py-20 border-t border-white/10 bg-black/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                Esoteric Foundations
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                The Symbolic Architecture of Tarot
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
                Tarot is not a parlor trick or a superstitious decree; it is a 600-year-old symbolic system that maps the spectrum of human consciousness, psychological archetypes, and spiritual transformation.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl liquid-chrome-card p-8">
                <div className="flex items-center gap-3 text-white">
                  <Sparkles className="h-5 w-5 text-slate-300" />
                  <h3 className="font-display text-2xl font-bold text-white">
                    The Major Arcana: The Soul's Pilgrimage
                  </h3>
                </div>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  The 22 cards of the Major Arcana (from 0 The Fool to XXI The World) represent the universal stages of spiritual maturation and psychological individuation. Often termed "The Fool's Journey," this sequence mirrors our passage through innocence, intellectual mastery, emotional union, worldly crisis, dark-night transformation, and cosmic enlightenment. When Major Arcana cards appear in your reading, they signal profound life themes, spiritual lessons, and karmic shifts that transcend temporary daily matters.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-white/20 bg-white/[0.05] px-3 py-1 font-medium text-slate-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                    22 Archetypal Keys
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/[0.05] px-3 py-1 font-medium text-slate-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                    Karmic Lessons
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/[0.05] px-3 py-1 font-medium text-slate-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                    Psychological Individuation
                  </span>
                </div>
              </div>

              <div className="rounded-3xl liquid-chrome-card p-8">
                <div className="flex items-center gap-3 text-white">
                  <Compass className="h-5 w-5 text-slate-300" />
                  <h3 className="font-display text-2xl font-bold text-white">
                    The Minor Arcana: Four Elemental Planes
                  </h3>
                </div>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  The 56 cards of the Minor Arcana reflect the daily fabric of human existence. Divided into four suits, each corresponds to a classical element and a distinct realm of life:
                </p>
                <div className="mt-5 space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Flame className="h-4 w-4 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Suit of Wands (Fire):</strong> Willpower, creative passion, spiritual vigor, ambition, and career projects.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Droplets className="h-4 w-4 text-cyan-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Suit of Cups (Water):</strong> Emotional depth, romantic bonding, intuitive wisdom, and healing.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Wind className="h-4 w-4 text-slate-200 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Suit of Swords (Air):</strong> Intellect, ethical dilemmas, mental clarity, communication, and truth.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Coins className="h-4 w-4 text-emerald-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Suit of Pentacles (Earth):</strong> Material reality, finances, bodily health, craft, and grounded security.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Directory to Top Major Arcana Cards in Liquid Chrome */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display text-xl font-bold text-white">
                  Explore Major Arcana Meanings
                </h4>
                <Link to="/guide/major-arcana-meanings" className="text-xs text-white hover:underline font-semibold">
                  View Full Archetype Index →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs">
                {MAJOR_CARDS.map((card) => (
                  <Link
                    key={card.slug}
                    to={`/tarot/${card.slug}` as any}
                    className="rounded-xl border border-white/15 bg-white/[0.04] p-3 text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-white/40 hover:bg-white/[0.08] transition-all"
                  >
                    <div className="chrome-text font-mono text-[11px] font-bold">Key {card.number}</div>
                    <div className="font-semibold text-white mt-1 truncate">{card.name}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 truncate">{card.theme}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Comprehensive Educational Content: The Vedic Science of Ank Shastra (Liquid Chrome) */}
        <section className="relative py-20 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                Ancient Indian Numerology
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                The Sacred Triad: Mulank, Bhagyank & Namank
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
                Vedic Numerology (अंक शास्त्र) teaches that each number from 1 to 9 emits a cosmic vibration presided over by one of the nine celestial planetary forces (Navagraha).
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
                    Core Personality
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    Mulank (Root Number / जन्मांक)
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Calculated solely from your birth date (1 to 31 reduced to a single digit). Mulank reflects your intrinsic nature, psychological temperament, personal tastes, and instinctual behavior when faced with challenges.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link to="/numerology/mulank" className="text-xs font-semibold text-white hover:underline inline-flex items-center gap-1">
                    <span>Mulank Master Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
                    Life Mission
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    Bhagyank (Destiny Number / भाग्यांक)
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Calculated by summing all digits of your Day, Month, and Year of birth. Bhagyank governs your destiny trajectory, societal role, major karma, and the career challenges you must master to achieve fulfillment.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link to="/bhagyank-calculator" className="text-xs font-semibold text-white hover:underline inline-flex items-center gap-1">
                    <span>Bhagyank Calculator</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
                    Name Frequency
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    Namank (Name Vibration / नामांक)
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Derived from ancient Chaldean sound vibration formulas that assign numeric weight to alphabet phonetics. A balanced Namank creates harmony between your inner desires and external life success.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link to="/namank-calculator" className="text-xs font-semibold text-white hover:underline inline-flex items-center gap-1">
                    <span>Namank Calculator</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Nine Planets Overview Table in Liquid Chrome */}
            <div className="mt-12 rounded-3xl liquid-chrome-card p-6 sm:p-8">
              <h4 className="font-display text-xl font-bold text-white mb-4">
                The 9 Planetary Lords & Their Core Vibration
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-xl border border-white/15 bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <strong className="chrome-text text-sm block">Number 1 · Surya (Sun)</strong>
                  <span className="text-slate-300 mt-1 block">Leadership, pioneering spirit, high self-respect, and vitality.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-white/15 bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <strong className="chrome-text text-sm block">Number 2 · Chandra (Moon)</strong>
                  <span className="text-slate-300 mt-1 block">Emotional intelligence, diplomacy, imagination, and empathy.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-white/15 bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <strong className="chrome-text text-sm block">Number 3 · Guru (Jupiter)</strong>
                  <span className="text-slate-300 mt-1 block">Spiritual wisdom, teaching, moral integrity, and eloquence.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-white/15 bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <strong className="chrome-text text-sm block">Number 4 · Rahu</strong>
                  <span className="text-slate-300 mt-1 block">Unconventional genius, disruptive strategy, and structural logic.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-white/15 bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <strong className="chrome-text text-sm block">Number 5 · Budha (Mercury)</strong>
                  <span className="text-slate-300 mt-1 block">Commercial acumen, versatile communication, and quick wit.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-white/15 bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <strong className="chrome-text text-sm block">Number 6 · Shukra (Venus)</strong>
                  <span className="text-slate-300 mt-1 block">Aesthetics, unconditional love, domestic harmony, and luxury.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-white/15 bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <strong className="chrome-text text-sm block">Number 7 · Ketu</strong>
                  <span className="text-slate-300 mt-1 block">Philosophical inquiry, mystical intuition, and analytical depth.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-white/15 bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <strong className="chrome-text text-sm block">Number 8 · Shani (Saturn)</strong>
                  <span className="text-slate-300 mt-1 block">Karmic justice, organizational resilience, and enduring mastery.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-white/15 bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <strong className="chrome-text text-sm block">Number 9 · Mangal (Mars)</strong>
                  <span className="text-slate-300 mt-1 block">Courage, humanitarian compassion, physical drive, and triumph.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Substantive In-Depth FAQ Section in Liquid Chrome */}
        <section id="faq" className="relative py-20 border-t border-white/10 bg-black/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                Frequently Asked Questions
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Everything You Need to Know About AstroFree
              </h2>
              <p className="mt-3 text-sm text-slate-300/90">
                Detailed explanations regarding our methodology, privacy practices, and esoteric frameworks.
              </p>
            </div>

            <div className="space-y-4">
              {COMPREHENSIVE_FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl liquid-chrome-card overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-display text-lg font-bold text-white hover:text-slate-200 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-300 transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-slate-300/90 leading-relaxed border-t border-white/10 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. Author & Editorial Desk Transparency (E-E-A-T) */}
        <section className="relative mx-auto max-w-4xl px-4 sm:px-6 py-16">
          <AuthorCard
            lastUpdated="2026-10-26"
            category="Esoteric Research & Methodology"
            readingTime="12 min read"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
