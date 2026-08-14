import { lazy, Suspense } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpenText, BriefcaseBusiness, Compass, Flame, Hash, Heart, MoonStar, ShieldCheck, Sparkles, Wand2 } from "lucide-react";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { ParticleBackground } from "@/components/arcana/ParticleBackground";
import { Spotlight } from "@/components/arcana/Spotlight";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Numerology } from "@/components/landing/Numerology";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL, SITE_NAME } from "@/lib/site";

// Below-the-fold sections: not needed for first paint, so they're split
// into their own chunks and only fetched once the browser is idle /
// they're about to scroll into view (handled by Suspense's async boundary
// — the import itself is what's deferred, not visibility tracking).
const FAQ = lazy(() => import("@/components/landing/FAQ").then((m) => ({ default: m.FAQ })));
const InArticleAd = lazy(() =>
  import("@/components/ads/InArticleAd").then((m) => ({ default: m.InArticleAd })),
);
const DisplayAd = lazy(() =>
  import("@/components/ads/DisplayAd").then((m) => ({ default: m.DisplayAd })),
);

const FAQ_ITEMS: Array<[string, string]> = [
  [
    "Is AstroFree really free?",
    "Yes — every reading, spread, numerology calculation, and journal entry is free forever. No credit card, no paywall.",
  ],
  [
    "Do I need to sign up?",
    "No account required. Guest mode gives you full access instantly, for both tarot readings and the Mulank numerology calculator.",
  ],
  [
    "How do the interpretations work?",
    "You choose a spread, set an intention, and draw cards. AstroFree uses the card symbolism, your question, and numerology context to create a reflective interpretation — not a guaranteed prediction.",
  ],
  [
    "What is my Mulank number and how is it calculated?",
    "Your Mulank (root number) comes from reducing the digits of your birth date to a single digit from 1 to 9 — born on the 28th? 2+8=10, 1+0=1, so your Mulank is 1. AstroFree's free numerology calculator does this instantly and maps it to a Major Arcana tarot archetype.",
  ],
  [
    "Can I get a free Personal Year and Personal Month forecast?",
    "Yes. Enter your date of birth and a target year or month, and AstroFree calculates your Personal Year and Personal Month numbers, pairs them with tarot archetypes, and gives you actionable guidance — completely free, no signup required.",
  ],
  [
    "Is my data private?",
    "Your questions, birth date, and journal stay on your device. We don't sell or mine your data.",
  ],
  [
    "Which languages are supported?",
    "English, Hindi, Hinglish, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, Malayalam, Punjabi, Odia, and Assamese — for both tarot readings and numerology forecasts.",
  ],
];

const HOWTO_STEPS: Array<[string, string]> = [
  [
    "Enter your date of birth",
    "Provide your birth date so AstroFree can calculate your Mulank (root) number.",
  ],
  [
    "Choose a target year or month",
    "Pick the year or month you want a free Personal Year or Personal Month numerology forecast for.",
  ],
  [
    "Get your reading",
    "AstroFree instantly calculates your Personal Year and Personal Month numbers, maps them to Major Arcana tarot archetypes, and shows guidance and cautions.",
  ],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AstroFree — Tarot & Numerology Learning" },
      {
        name: "description",
        content:
          "Free tarot and numerology education with clear guides, reflective readings, and calculators for Mulank, Bhagyank, Namank, spreads, and card meanings.",
      },
      {
        name: "keywords",
        content:
          "free tarot reading, AI tarot, online tarot, daily tarot card, tarot spreads, celtic cross, love tarot, career tarot, mulank calculator, mulank number by date of birth, bhagyank calculator, bhagyank number, namank calculator, name number calculator, numerology calculator, personal year number calculator, personal month numerology, free numerology calculator, root number calculator, numerology 2026, tarot numerology, AstroFree, tarot India",
      },
      {
        property: "og:title",
        content: "AstroFree — Free AI Tarot Reading & Numerology Calculator",
      },
      {
        property: "og:description",
        content:
          "Free tarot and numerology education with reflective interpretations, calculators, and personal journaling tools for learning and self-reflection.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "AstroFree — Free AI Tarot Reading & Numerology Calculator",
      },
      {
        name: "twitter:description",
        content:
          "Learn tarot and numerology through free guides, reflective readings, and calculators for Mulank, Bhagyank, Namank, spreads, and life-cycle forecasts.",
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png.asset.json`,
          sameAs: [],
          description: "Free AI-powered tarot readings and numerology calculators for learning and self-reflection.",
        },
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          searchAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/tarot?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        },
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        },
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to calculate your free Mulank (root) number, Personal Year, and Personal Month",
          description:
            "Calculate your numerology Mulank, Personal Year, and Personal Month number for free with AstroFree, mapped to tarot archetypes.",
          totalTime: "PT1M",
          step: HOWTO_STEPS.map(([name, text]) => ({
            "@type": "HowToStep",
            name,
            text,
          })),
        },
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <ParticleBackground count={50} />
      <Spotlight />
      <LandingNav />
      <main>
        <Hero />

        <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold)]">Learn with clarity</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">What is AstroFree?</h2>
          </div>
          <div className="mt-8 rounded-3xl border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-white/[0.02] p-6 sm:p-8 lg:p-10">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tarot is a symbolic system used to explore questions, emotions, and patterns through imagery and archetypes. Each card acts like a mirror, inviting reflection rather than fixed prediction. Numerology is a traditional study of numbers and their meanings, often used to understand character, timing, and recurring life themes from a birth date or a name. AstroFree brings both traditions together in a free educational format designed for learning, journaling, and self-reflection.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our interpretation layer combines card symbolism, your question, and the context of a reading, but the goal is not to replace human judgment. AstroFree is designed as a reflective learning space where the user brings their own intuition, values, and lived experience into the final meaning. We do not promise certainty, and we do not present tarot or numerology as a substitute for professional guidance in health, legal, or financial decisions.
            </p>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold)]">A careful framework</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">What tarot and numerology are not</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <GlassCard className="h-full p-6">
              <h3 className="font-display text-xl text-foreground">Not a prediction engine</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tarot and numerology help people notice patterns, themes, and emotional context. They are best used as reflective prompts rather than fixed forecasts. A reading can be insightful without being definitive.
              </p>
            </GlassCard>
            <GlassCard className="h-full p-6">
              <h3 className="font-display text-xl text-foreground">Not a substitute for professional guidance</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                These tools are designed for learning, journaling, and self-reflection. They are not a replacement for advice from a qualified professional when the decision involves health, money, legal matters, or emotional wellbeing.
              </p>
            </GlassCard>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold)]">Explore the library</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">Learn Tarot</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {[
              { to: "/guide/tarot-card-meanings", icon: BookOpenText, title: "Tarot Guide", body: "Start with the foundations of tarot symbolism, card structure, and intuitive reading habits.", cta: "Read the guide" },
              { to: "/tarot/the-magician", icon: Wand2, title: "Major Arcana", body: "Explore the archetypal journey of the 22 cards that define major turning points.", cta: "Browse major arcana" },
              { to: "/tarot", icon: Compass, title: "Minor Arcana", body: "Learn how the four suits describe everyday situations, emotion, thought, and practical life.", cta: "See the suits" },
              { to: "/guide/tarot-spreads", icon: Sparkles, title: "Tarot Spreads", body: "Understand common layouts from single-card pulls to full spread structures.", cta: "View spreads" },
              { to: "/guide/tarot-card-meanings", icon: MoonStar, title: "78 Card Meanings", body: "Access the full library of upright and reversed meanings for every card.", cta: "Open meanings" },
            ].map((item) => (
              <Link key={item.title} to={item.to} className="group block h-full">
                <GlassCard className="h-full p-5 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-white/[0.04]">
                    <item.icon className="h-5 w-5 text-[color:var(--gold)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[color:var(--gold)]">
                    {item.cta} <ArrowRight className="h-3 w-3" />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold)]">Read your numbers</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">Learn Numerology</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {[
              { to: "/guide/numerology", icon: Hash, title: "Mulank Guide", body: "Understand your root number, birth date reduction, and the nine-number framework.", cta: "Learn Mulank" },
              { to: "/bhagyank-calculator", icon: Flame, title: "Bhagyank", body: "See the date-of-birth calculation used for destiny and life-path themes.", cta: "Calculate Bhagyank" },
              { to: "/namank-calculator", icon: BookOpenText, title: "Namank", body: "Learn how the letters of your name are translated into a name vibration.", cta: "Explore Namank" },
              { to: "/numerology?period=2026", icon: Compass, title: "Personal Year", body: "Understand how timing cycles shape your year, month, and personal momentum.", cta: "Check your year" },
              { to: "/numerology", icon: BriefcaseBusiness, title: "Numerology Calculator", body: "Use the free calculator to generate your Mulank, Personal Year, and Personal Month.", cta: "Try the calculator" },
            ].map((item) => (
              <Link key={item.title} to={item.to} className="group block h-full">
                <GlassCard className="h-full p-5 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-white/[0.04]">
                    <item.icon className="h-5 w-5 text-[color:var(--gold)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[color:var(--gold)]">
                    {item.cta} <ArrowRight className="h-3 w-3" />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold)]">How it works</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">How Readings Work</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { icon: Compass, title: "Choose spread", body: "Pick a reading style that matches your question, from a quick single card to a fuller spread." },
              { icon: Sparkles, title: "Select cards", body: "Draw the cards and set an intention so the symbols speak to your context." },
              { icon: Wand2, title: "AI interprets symbolism", body: "AstroFree angles the reading through tarot symbolism, numerology context, and card meaning." },
              { icon: Heart, title: "Reflect & journal", body: "Write down what resonates and return to the card later as your story unfolds." },
            ].map((step, index) => (
              <div key={step.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-white/[0.04]">
                  <step.icon className="h-5 w-5 text-[color:var(--gold)]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Step {index + 1}</p>
                  <h3 className="mt-1 font-display text-xl text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-5xl px-4 pb-16 sm:pb-24">
          <div className="rounded-2xl border border-[color-mix(in_oklab,var(--gold)_60%,transparent)] bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_8%,transparent),transparent_70%)] p-6 sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl">Responsible Use</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              AstroFree is not a fortune-telling service and it is not a substitute for medical, financial, or legal advice. It is a tool for reflection, pattern recognition, and personal journaling. Human intuition, context, and lived experience matter more than any single reading or number.
            </p>
          </div>
        </section>

        <Features />
        <Numerology />
        <HowItWorks />

        <section className="relative mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold)]">Why readers choose us</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">Why choose AstroFree?</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: BookOpenText,
                title: "Clear learning",
                body: "Our guides explain the meaning behind the symbols, the maths behind the numbers, and the context behind each reading.",
              },
              {
                icon: Compass,
                title: "Reflective tools",
                body: "Every reading is framed as a prompt for self-reflection, discussion, and journaling rather than a fixed certainty.",
              },
              {
                icon: ShieldCheck,
                title: "Transparent methods",
                body: "We explain how card meanings and numerology calculations are derived, so readers know the framework behind the result.",
              },
              {
                icon: Heart,
                title: "Private and free",
                body: "No account is required for the core experience. Your questions, journal notes, and birth data stay in your own flow.",
              },
            ].map((item) => (
              <GlassCard key={item.title} className="h-full p-5">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-white/[0.04]">
                  <item.icon className="h-5 w-5 text-[color:var(--gold)]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-xl text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <Suspense fallback={null}>
          <FAQ />
          <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6">
            <InArticleAd />
            <DisplayAd />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
