import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  CalendarDays,
  CalendarClock,
  Sparkles,
  Zap,
  Moon,
  Heart,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { ARCHETYPES, PACING, reduceToSingleDigit } from "@/lib/numerology/engine";
import type { RootNumber, Pacing } from "@/lib/numerology/types";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";

export const Route = createFileRoute("/guide/numerology")({
  head: () => ({
    meta: [
      { title: "Mulank Numerology Guide — How Personal Year & Month Are Calculated | AstroFree" },
      {
        name: "description",
        content:
          "A free guide to Mulank numerology: how to calculate your root number, Personal Year, and Personal Month from your birth date, worked examples, and what each of the nine numbers means.",
      },
      {
        name: "keywords",
        content:
          "mulank numerology guide, how to calculate mulank, personal year number calculation, personal month number calculation, root number numerology, numerology meanings 1 to 9",
      },
      {
        property: "og:title",
        content: "Mulank Numerology Guide — How Personal Year & Month Are Calculated",
      },
      { property: "og:url", content: `${SITE_URL}/guide/numerology` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/guide/numerology` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildPageJsonLd({
          "path": "/guide/numerology",
          "title": "Mulank Numerology Guide — How Personal Year & Month Are Calculated",
          "description": "A free guide to Mulank (root number) numerology: how your Mulank, Personal Year, and Personal Month numbers are calculated, with worked examples.",
          "crumbs": [
                    {
                              "name": "Guides",
                              "path": "/guide"
                    },
                    {
                              "name": "Mulank Numerology Guide",
                              "path": "/guide/numerology"
                    }
          ],
          "faqs": [
                    {
                              "question": "What is a Mulank number?",
                              "answer": "Your Mulank, or root number, is the single digit you get by reducing your day of birth. Born on the 28th? 2+8=10, then 1+0=1, so your Mulank is 1."
                    },
                    {
                              "question": "How is a Personal Year number calculated?",
                              "answer": "Add your birth day and birth month to the target year, then reduce the total to a single digit. That number describes the theme of that year for you."
                    },
                    {
                              "question": "How is a Personal Month number calculated?",
                              "answer": "Add your Personal Year number to the calendar month number and reduce the result to a single digit."
                    },
                    {
                              "question": "Are master numbers 11 and 22 reduced?",
                              "answer": "In this guide the final Mulank is reduced to 1-9, while 11 and 22 are treated as master life path numbers with their own dedicated pages."
                    }
          ],
          "article": {
                    "updated": "2026-08-07",
                    "section": "Numerology"
          }
        })),
      },
    ],
  }),
  component: NumerologyGuidePage,
});

const NUMBERS: RootNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const KEYWORDS: Record<RootNumber, string> = {
  1: "initiation, leadership, independence",
  2: "intuition, patience, partnership",
  3: "expression, creativity, growth",
  4: "structure, discipline, foundations",
  5: "change, freedom, discovery",
  6: "relationships, responsibility, harmony",
  7: "reflection, study, inner work",
  8: "consequence, power, material reward",
  9: "completion, release, closing a cycle",
};

const PACING_META: Record<Pacing, { label: string; icon: typeof Zap; tint: string }> = {
  active: { label: "Active", icon: Zap, tint: "var(--gold)" },
  reflective: { label: "Reflective", icon: Moon, tint: "var(--aurora-2)" },
  harmony: { label: "Harmony", icon: Heart, tint: "var(--aurora-1)" },
};

function clampInt(value: string, min: number, max: number): number {
  const num = Number.parseInt(value, 10);
  if (Number.isNaN(num)) return min;
  return Math.max(min, Math.min(max, num));
}

function NumberInput({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(clampInt(e.target.value, min, max))}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center font-display text-lg text-foreground outline-none transition-all focus:border-[color-mix(in_oklab,var(--gold)_50%,transparent)] focus:bg-white/[0.06] focus:ring-1 focus:ring-[color-mix(in_oklab,var(--gold)_30%,transparent)]"
      />
    </label>
  );
}

function MathStep({
  label,
  expression,
  result,
  archetype,
  pacing,
}: {
  label: string;
  expression: string;
  result: RootNumber;
  archetype: string;
  pacing?: Pacing;
}) {
  const meta = pacing ? PACING_META[pacing] : null;
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
        {meta && (
          <span
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] uppercase tracking-widest"
            style={{ color: `color-mix(in oklab, ${meta.tint} 85%, white)` }}
          >
            <meta.icon className="h-3 w-3" /> {meta.label}
          </span>
        )}
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-sm">
        <span className="text-muted-foreground">{expression}</span>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="grid h-7 w-7 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_50%,transparent)] bg-[color-mix(in_oklab,var(--gold)_10%,transparent)] font-display text-sm gold-text">
          {result}
        </span>
      </div>
      <div className="mt-2 text-sm text-foreground/90">
        <span className="gold-text">{result}</span> → {archetype}
      </div>
    </div>
  );
}

function InteractiveExample() {
  const today = new Date();
  const [day, setDay] = useState(22);
  const [month, setMonth] = useState(7);
  const [targetYear, setTargetYear] = useState(today.getFullYear() + 1);
  const [targetMonth, setTargetMonth] = useState(today.getMonth() + 1);

  const { mulank, personalYear, personalMonth, mulankSum, personalYearSum, personalMonthSum } = useMemo(() => {
    const safeDay = Math.max(1, Math.min(31, day));
    const safeMonth = Math.max(1, Math.min(12, month));
    const mulank = reduceToSingleDigit(safeDay);
    const personalYearSum = safeDay + safeMonth + targetYear;
    const personalYear = reduceToSingleDigit(personalYearSum);
    const personalMonthSum = personalYear + targetMonth;
    const personalMonth = reduceToSingleDigit(personalMonthSum);
    return {
      mulank,
      personalYear,
      personalMonth,
      mulankSum: safeDay,
      personalYearSum,
      personalMonthSum,
    };
  }, [day, month, targetYear, targetMonth]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mt-8"
    >
      <GlassCard className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(600px 200px at 80% 0%, color-mix(in oklab, var(--aurora-2) 25%, transparent), transparent 60%)",
          }}
        />
        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_80%,white)]">
                Try it live
              </p>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl">Interactive worked example</h3>
            </div>
            <button
              onClick={() => {
                setDay(22);
                setMonth(7);
                setTargetYear(today.getFullYear() + 1);
                setTargetMonth(today.getMonth() + 1);
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-[color-mix(in_oklab,var(--gold)_40%,transparent)] hover:text-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Pick a birth day and month, plus a target year and month. Watch how the numbers reduce and
            which archetypes appear.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <NumberInput label="Birth day" value={day} min={1} max={31} onChange={setDay} />
            <NumberInput label="Birth month" value={month} min={1} max={12} onChange={setMonth} />
            <NumberInput label="Target year" value={targetYear} min={1900} max={2100} onChange={setTargetYear} />
            <NumberInput label="Target month" value={targetMonth} min={1} max={12} onChange={setTargetMonth} />
          </div>

          <div className="mt-6 grid gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${day}-${month}-${targetYear}-${targetMonth}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid gap-3"
              >
                <MathStep
                  label="Mulank (root number)"
                  expression={`reduce(${day} digits) = ${String(day).split("").join(" + ")}`}
                  result={mulank}
                  archetype={ARCHETYPES[mulank]}
                />
                <MathStep
                  label="Personal Year"
                  expression={`${day} + ${month} + ${targetYear} = ${personalYearSum}`}
                  result={personalYear}
                  archetype={ARCHETYPES[personalYear]}
                />
                <MathStep
                  label="Personal Month"
                  expression={`${personalYear} + ${targetMonth} = ${personalMonthSum}`}
                  result={personalMonth}
                  archetype={ARCHETYPES[personalMonth]}
                  pacing={PACING[personalMonth]}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function NumberGlyph({ n }: { n: RootNumber }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 45%, transparent), transparent 70%)",
        }}
      />
      <div className="relative grid h-14 w-14 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] bg-[linear-gradient(160deg,#1a1338,#0d0a24)] shadow-glow-gold">
        <span className="font-display text-2xl gold-text">{n}</span>
      </div>
    </div>
  );
}

function StepCard({
  step,
  icon: Icon,
  title,
  children,
  example,
}: {
  step: string;
  icon: typeof Calculator;
  title: string;
  children: React.ReactNode;
  example: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <GlassCard className="group relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: "color-mix(in oklab, var(--gold) 35%, transparent)" }}
        />
        <div className="relative flex items-start gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-white/[0.03]">
            <Icon className="h-5 w-5 text-[color-mix(in_oklab,var(--gold)_85%,white)]" strokeWidth={1.5} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_80%,white)]">
              {step}
            </p>
            <h3 className="mt-1 font-display text-2xl">{title}</h3>
            <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
            <div className="mt-4 rounded-xl border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[color-mix(in_oklab,var(--gold)_75%,white)]">
                <Sparkles className="h-3 w-3" /> Worked example
              </div>
              <div className="mt-2 font-mono text-sm text-foreground/90">{example}</div>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}


function NumerologyGuidePage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-4xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: "Guides", to: "/guide" }, { label: "Mulank Numerology Guide" }]} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Free guide</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">
            Mulank numerology, <span className="aurora-text">explained</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Mulank numerology reduces your birth date to a set of single-digit numbers — 1 through
            9 — each mapped to a Major Arcana tarot archetype. Unlike sun-sign astrology, it
            doesn't need your birth time or location, just the date. This guide walks through
            exactly how each number is calculated, with worked examples, so you can check the math
            yourself or just understand what AstroFree's{" "}
            <Link to="/numerology" className="underline underline-offset-4 hover:text-foreground">
              free Mulank calculator
            </Link>{" "}
            is doing behind the scenes.
          </p>
        </motion.div>

        {/* Reduction rule — highlighted */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <GlassCard className="relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(600px 200px at 20% 0%, color-mix(in oklab, var(--aurora-1) 30%, transparent), transparent 60%)",
              }}
            />
            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_80%,white)]">
                The core rule
              </p>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl">The reduction rule</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every calculation below comes down to the same operation: add up the digits, and if
                the result is more than one digit, add those digits again — repeat until you're
                left with a single digit from 1 to 9.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-sm">
                <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">28</span>
                <span className="text-muted-foreground">→</span>
                <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                  2 + 8 = 10
                </span>
                <span className="text-muted-foreground">→</span>
                <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                  1 + 0 = 1
                </span>
                <span className="text-muted-foreground">→</span>
                <span className="rounded-lg border border-[color-mix(in_oklab,var(--gold)_50%,transparent)] bg-[color-mix(in_oklab,var(--gold)_10%,transparent)] px-3 py-2 gold-text">
                  1
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Three-step calculations */}
        <div className="mt-8 grid gap-5">
          <StepCard
            step="Step 1"
            icon={Calculator}
            title="Mulank (root number)"
            example={
              <>
                Born on the <span className="text-foreground">22nd</span> → 2 + 2 = 4.
                <div className="mt-1 text-foreground/80">
                  Mulank = <span className="gold-text">4</span> → The Emperor.
                </div>
              </>
            }
          >
            Your Mulank is the reduction of the day you were born — nothing else. It captures your
            core operating mode: how you instinctively think and react, independent of any
            particular year.
          </StepCard>

          <StepCard
            step="Step 2"
            icon={CalendarDays}
            title="Personal Year"
            example={
              <>
                Born <span className="text-foreground">July 22</span>, asking about{" "}
                <span className="text-foreground">2026</span> → 22 + 7 + 2026 = 2055 → 2+0+5+5 = 12
                → 1+2 = 3.
                <div className="mt-1 text-foreground/80">
                  Personal Year = <span className="gold-text">3</span> → The Empress.
                </div>
              </>
            }
          >
            Add your birth day and birth month to whichever calendar year you're asking about, then
            reduce. It describes the overarching theme running through that year — a cycle, not a
            fixed trait.
          </StepCard>

          <StepCard
            step="Step 3"
            icon={CalendarClock}
            title="Personal Month"
            example={
              <>
                Personal Year <span className="text-foreground">3</span>, asking about{" "}
                <span className="text-foreground">August</span> (month 8) → 3 + 8 = 11 → 1+1 = 2.
                <div className="mt-1 text-foreground/80">
                  Personal Month = <span className="gold-text">2</span> → The High Priestess.
                </div>
              </>
            }
          >
            Narrow the yearly theme down to a specific 30-day window. Add the calendar month's
            number (January = 1 … December = 12) to your Personal Year, then reduce.
          </StepCard>
        </div>

        <InteractiveExample />

        {/* Nine numbers grid */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--gold)_60%,transparent))]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_80%,white)]">
              9 archetypes
            </p>
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            <span className="gold-text">What each number means</span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Whether it's your Mulank, Personal Year, or Personal Month, the number itself always
            maps to the same archetype and general theme — only the layer it's describing changes.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {NUMBERS.map((n, i) => {
              const meta = PACING_META[PACING[n]];
              const Icon = meta.icon;
              return (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3) }}
                >
                  <GlassCard className="group h-full">
                    <div className="flex items-start gap-4">
                      <NumberGlyph n={n} />
                      <div className="min-w-0 flex-1">
                        <div className="font-display text-lg text-foreground">{ARCHETYPES[n]}</div>
                        <div
                          className="mt-1 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] uppercase tracking-widest"
                          style={{ color: `color-mix(in oklab, ${meta.tint} 85%, white)` }}
                        >
                          <Icon className="h-3 w-3" /> {meta.label}
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {KEYWORDS[n]}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Pacing */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--gold)_60%,transparent))]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_80%,white)]">
              Monthly rhythm
            </p>
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            <span className="gold-text">The pacing system</span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            For a Personal Month specifically, each number also carries a pacing signal — a
            practical cue for what kind of energy the month favors.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {(["active", "reflective", "harmony"] as Pacing[]).map((p) => {
              const meta = PACING_META[p];
              const Icon = meta.icon;
              const nums = NUMBERS.filter((n) => PACING[n] === p);
              const body =
                p === "active"
                  ? "Good timing for action, starting projects, networking, and bold moves."
                  : p === "reflective"
                    ? "Good timing for planning, organizing, auditing, and wrapping up loose ends."
                    : "Good timing for home, relationships, and lasting commitments.";
              return (
                <GlassCard key={p} className="relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-3xl"
                    style={{ background: `color-mix(in oklab, ${meta.tint} 45%, transparent)` }}
                  />
                  <div className="relative">
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-widest"
                      style={{ color: `color-mix(in oklab, ${meta.tint} 85%, white)` }}
                    >
                      <Icon className="h-3 w-3" /> {meta.label}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {nums.map((n) => (
                        <span
                          key={n}
                          className="grid h-7 w-7 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-[linear-gradient(160deg,#1a1338,#0d0a24)] font-display text-sm gold-text"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <GlassCard className="relative overflow-hidden text-center">
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(500px 200px at 50% 0%, color-mix(in oklab, var(--gold) 25%, transparent), transparent 60%)",
              }}
            />
            <div className="relative py-6">
              <h3 className="font-display text-2xl sm:text-3xl">
                Skip the manual math
              </h3>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
                Enter your birth date and get your full Mulank, Personal Year, and Personal Month —
                free, no signup.
              </p>
              <div className="mt-5 flex justify-center">
                <Link to="/numerology">
                  <GoldButton>Calculate your Mulank</GoldButton>
                </Link>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            to="/"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            ← Back home
          </Link>
          <Link
            to="/guide/mulank-vs-bhagyank"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Mulank vs Bhagyank: how the two numbers differ →
          </Link>
        </div>
        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
