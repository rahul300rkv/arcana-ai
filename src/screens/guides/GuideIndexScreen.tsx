import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  CalendarClock,
  LayoutGrid,
  Hash,
  ArrowRight,
  Sparkles,
  GraduationCap,
  RotateCcw,
  Star,
  Cross,
  Scale,
} from "lucide-react";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { AuthorCard } from "@/components/AuthorCard";
import { InArticleAd } from "@/components/ads/InArticleAd";

const GUIDE_HUB_FAQS = [
  {
    question: "Which guide should an absolute beginner read first?",
    answer:
      "Start with Tarot for Beginners to learn the 22 Major Arcana vs. 56 Minor Arcana structure, how shuffling works, and how to formulate open-ended questions before jumping into complex spreads.",
  },
  {
    question: "How do AstroFree's tarot and Vedic numerology guides fit together?",
    answer:
      "Tarot captures the texture of immediate circumstances and personal choices, while Indian Ank Shastra (Mulank, Bhagyank, and Namank) maps temperament and multi-year timing cycles—pair both to compare daily nuance against longer life arcs.",
  },
  {
    question: "Are all AstroFree study guides free without account registration?",
    answer:
      "Yes. All eight in-depth tutorials, our 78 individual tarot card pages, and every Mulank and Life Path reference page remain open without paywalls or mandatory accounts.",
  },
  {
    question: "Why does AstroFree include reversed card guidance?",
    answer:
      "Reversals prevent one-dimensional fatalistic readings by highlighting when a card's core energy sits internalized, blocked, overdue, or subtly overexpressed—helpful context covered step by step in Reversed Tarot Cards.",
  },
];

const guides = [
  {
    to: "/guide/tarot-card-meanings",
    icon: BookOpen,
    title: "Tarot Card Meanings",
    body: "Upright and reversed meanings for all 78 cards — the 22 Major Arcana and all four Minor Arcana suits — plus what each card suggests for love, career, finances, and spiritual growth.",
    readingMinutes: 16,
    anchor: "tarot-card-meanings",
  },
  {
    to: "/guide/tarot-spreads",
    icon: LayoutGrid,
    title: "Tarot Spreads Explained",
    body: "How each spread works and what its positions mean — from a quick Single Card pull to the ten-position Celtic Cross and the twelve-card Year Ahead spread.",
    readingMinutes: 10,
    anchor: "tarot-spreads",
  },
  {
    to: "/guide/numerology",
    icon: Hash,
    title: "Mulank Numerology Guide",
    body: "How your Mulank (root number), Personal Year, and Personal Month are calculated from your birth date, what each of the nine numbers means, and how they map to tarot archetypes.",
    readingMinutes: 9,
    anchor: "numerology-guide",
  },
  {
    to: "/guide/tarot-for-beginners",
    icon: GraduationCap,
    title: "Tarot for Beginners",
    body: "The complete starting guide — deck structure, how to shuffle and draw, your first spreads, and a repeatable method for interpreting any card.",
    readingMinutes: 14,
    anchor: "tarot-for-beginners",
  },
  {
    to: "/what-do-reversed-tarot-cards-mean",
    icon: RotateCcw,
    title: "What Do Reversed Tarot Cards Mean?",
    body: "What a reversed card actually changes, the four common interpretations, and worked examples across Major and Minor Arcana.",
    readingMinutes: 9,
    anchor: "reversed-tarot-cards",
  },
  {
    to: "/major-arcana-tarot-cards-meanings",
    icon: Star,
    title: "Major Arcana Meanings (22 Cards)",
    body: "Complete 22-card Major Arcana reference table from The Fool to The World, The Fool's Journey stages, and real-life reading examples.",
    readingMinutes: 18,
    anchor: "major-arcana-meanings",
  },
  {
    to: "/guide/celtic-cross-guide",
    icon: Cross,
    title: "Celtic Cross Spread Guide",
    body: "A step-by-step walkthrough of all ten Celtic Cross positions, how to lay them, and how to read them as one coherent answer.",
    readingMinutes: 11,
    anchor: "celtic-cross-guide",
  },
  {
    to: "/guide/mulank-vs-bhagyank",
    icon: Scale,
    title: "Mulank vs Bhagyank",
    body: "The difference between your birth number and destiny number in Indian numerology, how each is calculated, and how to read them together.",
    readingMinutes: 11,
    anchor: "mulank-vs-bhagyank",
  },
];

export function GuideIndexScreen() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-5xl px-4 pb-24 pt-36 sm:pt-40">
        <Breadcrumb items={[{ label: "Guides" }]} />
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-white/[0.03] px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[color-mix(in_oklab,var(--gold)_90%,white)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_90%,white)]">
              Free guides
            </span>
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-6xl">
            Learn tarot <span className="aurora-text">&amp; numerology</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            These reference guides go deeper than any single reading — a plain-language explanation
            of what every tarot card means, how each spread is laid out, and the exact math behind
            Mulank numerology. Everything here is free to read, no signup required.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              Published <time dateTime="2026-07-15">15 July 2026</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              Last updated <time dateTime="2026-11-16">16 November 2026</time>
            </span>
          </div>
        </div>

        <nav
          aria-label="Guide sections"
          className="mt-10 rounded-2xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-white/[0.02] p-4 sm:p-5"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="mr-2 text-[color:var(--gold)]">Jump to</span>
            {guides.map((g) => (
              <a
                key={g.anchor}
                href={`#${g.anchor}`}
                className="inline-flex min-h-11 sm:min-h-0 items-center rounded-full border border-white/10 px-3.5 py-2 sm:py-1.5 transition-colors hover:border-[color-mix(in_oklab,var(--gold)_35%,transparent)] hover:text-[color:var(--gold)]"
              >
                {g.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <div key={g.to} id={g.anchor}>
              <Link to={g.to} className="group block h-full">
                <GlassCard className="relative h-full overflow-hidden p-6 sm:p-7">
                  <div
                    aria-hidden
                    className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                    style={{ background: "color-mix(in oklab, var(--gold) 40%, transparent)" }}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-xl border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-white/[0.03]">
                        <g.icon
                          className="h-5 w-5 text-[color-mix(in_oklab,var(--gold)_85%,white)]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.03] opacity-60 transition-all duration-300 group-hover:border-[color-mix(in_oklab,var(--gold)_40%,transparent)] group-hover:bg-[color-mix(in_oklab,var(--gold)_8%,transparent)] group-hover:opacity-100">
                        <ArrowRight className="h-3.5 w-3.5 text-[color-mix(in_oklab,var(--gold)_90%,white)] transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      <span>Reading time</span>
                      <span className="text-[color:var(--gold)]">{g.readingMinutes} min</span>
                    </div>
                    <h2 className="mt-3 font-display text-xl sm:text-2xl text-foreground transition-colors duration-300 group-hover:text-[color-mix(in_oklab,var(--gold)_90%,white)]">
                      {g.title}
                    </h2>
                    <p className="mt-2 text-base sm:text-sm leading-relaxed text-muted-foreground">{g.body}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-xs uppercase tracking-widest text-[color-mix(in_oklab,var(--gold)_80%,white)] opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                      <span>Read guide</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-16 space-y-10">
          <GlassCard className="p-6 sm:p-8 space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[color-mix(in_oklab,var(--gold)_85%,white)]">
                Structured curriculum
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
                How to Use the AstroFree Learning Library
              </h2>
              <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                Learning tarot and Vedic numerology works best when you treat them as living
                reflective languages rather than trivia lists to memorize overnight. Every guide in
                this library is written in plain, grounded English and structured so you can move
                smoothly from basic definitions to confident, nuanced interpretation. Whether you are
                drawing your very first daily card or comparing your Mulank and Bhagyank numbers side
                by side, you can read every page here without paywalls, registration walls, or
                overly mystical jargon.
              </p>
              <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                Instead of treating cards or birth numbers as fatalistic predictions, our editorial
                framework centers on pattern recognition and self-inquiry. A card like The Tower or a
                challenging Personal Year cycle does not sentence you to misfortune; rather, it names
                the kind of pressure or structural shift already asking for your attention so you can
                meet it consciously.
              </p>
            </div>

            <div className="grid gap-5 border-t border-white/10 pt-6 md:grid-cols-3">
              <div>
                <h3 className="font-display text-lg text-foreground">Stage 1: Foundations</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Start with <strong className="text-foreground/90">Tarot for Beginners</strong> to
                  grasp the 22 Major Arcana vs. 56 Minor Arcana split, then explore the{" "}
                  <strong className="text-foreground/90">22 Major Arcana Explained</strong> guide to
                  recognize life's big archetypal turning points.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">Stage 2: Spreads &amp; Nuance</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Move on to <strong className="text-foreground/90">Tarot Spreads Explained</strong>{" "}
                  and <strong className="text-foreground/90">Reversed Tarot Cards</strong> to learn
                  how card positions alter meaning and how reversals highlight internal energy,
                  hesitation, or subtle delays.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">Stage 3: Vedic Timing</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Pair your card study with <strong className="text-foreground/90">Mulank Numerology</strong>{" "}
                  and <strong className="text-foreground/90">Mulank vs Bhagyank</strong> to map your
                  innate birth vibration alongside Personal Year and Personal Month timing cycles.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              Combining Tarot Symbolism with Vedic Numerology
            </h2>
            <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              Many readers approach tarot and numerology as unrelated hobbies, yet the two systems
              share deep structural symmetry. Tarot excels at illuminating immediate dilemmas — what
              is unfolding in a specific relationship, creative effort, or crossroads decision right
              now. Vedic Ank Shastra zooms out across longer spans: your Mulank highlights native
              instinctive temperament driven by the calendar day of birth, while your Bhagyank and
              Personal Year spotlight recurring multi-year developmental lessons.
            </p>
            <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              When practicing both together, pull a Three Card spread right after calculating your
              Personal Month. Notice whether Major Arcana cards matching your birth number or ruler
              planet surface repeatedly inside your journal. Pairing concrete visual reflection with
              structured numeric timing turns solitary study into an organized habit of sober
              self-awareness rather than wishful daydreaming.
            </p>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              Core Tarot &amp; Numerology Terms at a Glance
            </h2>
            <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              If you encounter unfamiliar terminology while exploring readings or calculators, use this
              concise reference glossary as your anchor:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-base sm:text-sm text-muted-foreground">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">Major &amp; Minor Arcana</h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  The 78-card tarot deck is split into 22 Major Arcana trump cards representing core
                  life themes and archetypes, and 56 Minor Arcana cards divided into Wands (Fire),
                  Cups (Water), Swords (Air), and Pentacles (Earth) reflecting daily circumstances.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">Upright vs. Reversed</h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  Cards drawn right-side up usually express energy outwardly and directly. Upside-down
                  (reversed) cards point toward inward processing, blocked flow, moderation, or a
                  lesson still taking shape beneath the surface.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">Mulank (Root Number)</h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  Derived solely from the calendar day of your birth reduced to 1–9, Mulank describes
                  your instinctive temperament, natural talents, and immediate reaction style under
                  Vedic planetary rulerships.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">Bhagyank &amp; Namank</h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  Bhagyank (Destiny Number) reduces every digit of your full birth date to show your
                  broader life path, while Namank translates the letters of your given name into a
                  harmonic vibration complementing your birth chart.
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={GUIDE_HUB_FAQS} />
          </div>
        </section>

        <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Related articles
            </p>
            <ul className="mt-3 space-y-2 text-base sm:text-sm text-muted-foreground">
              <li>
                <Link
                  to="/numerology"
                  className="inline-flex min-h-11 sm:min-h-0 items-center underline underline-offset-4 hover:text-foreground"
                >
                  Mulank calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/tarot/$slug"
                  params={{ slug: "the-fool" }}
                  className="inline-flex min-h-11 sm:min-h-0 items-center underline underline-offset-4 hover:text-foreground"
                >
                  The Fool card meaning
                </Link>
              </li>
              <li>
                <Link
                  to="/bhagyank-calculator"
                  className="inline-flex min-h-11 sm:min-h-0 items-center underline underline-offset-4 hover:text-foreground"
                >
                  Bhagyank calculator
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Previous / Next
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Link
                to="/"
                className="inline-flex min-h-11 sm:min-h-0 items-center rounded-full border border-white/10 px-4 py-2 sm:py-1.5 text-muted-foreground hover:text-foreground"
              >
                Previous: Home
              </Link>
              <Link
                to="/numerology"
                className="inline-flex min-h-11 sm:min-h-0 items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] px-4 py-2 sm:py-1.5 text-[color:var(--gold)]"
              >
                Next: Numerology
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <AuthorCard
            published="2026-07-15"
            lastUpdated="2026-11-16"
            category="Study Archive"
            readingTime="8 min read"
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex min-h-12 sm:min-h-0 items-center gap-1.5 text-base sm:text-sm text-muted-foreground underline underline-offset-4 transition-colors duration-200 hover:text-foreground"
          >
            ← Back home
          </Link>
        </div>
        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
