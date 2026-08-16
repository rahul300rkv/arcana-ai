import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  Hash,
  Home as HomeIcon,
  RotateCcw,
  Sparkles,
  Star,
  Wand2,
} from "lucide-react";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { AppShell } from "@/components/app/AppShell";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { ShareButtons } from "@/components/content/ShareButtons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { generateNumerologyReading } from "@/lib/numerology/ai.server";
import { reduceToSingleDigit, ARCHETYPES } from "@/lib/numerology/engine";
import { findCardSynergy } from "@/lib/numerology/synergy";
import { SITE_URL } from "@/lib/site";
import type { NumerologyResult, Pacing, RootNumber } from "@/lib/numerology/types";

const PAGE_TITLE = "Numerology Calculator — Free Mulank, Personal Year & Month";
const PAGE_DESC =
  "Free numerology calculator: enter your date of birth to get your Mulank (birth number), Personal Year and Personal Month, each mapped to its tarot archetype with practical guidance.";
const PAGE_URL = `${SITE_URL}/numerology`;

export const Route = createFileRoute("/numerology/")({
  validateSearch: (search: Record<string, unknown>) => {
    const dob =
      typeof search.dob === "string" && /^\d{4}-\d{2}-\d{2}$/.test(search.dob)
        ? search.dob
        : undefined;
    // A bare year (?period=2026) is parsed as a number — keep the original type so
    // the URL round-trips without the router rewriting it.
    const raw = search.period;
    const asText = typeof raw === "number" ? String(raw) : raw;
    const period =
      typeof asText === "string" && /^\d{4}(-\d{2})?$/.test(asText)
        ? (raw as string | number)
        : undefined;
    return { dob, period } as { dob?: string; period?: string | number };
  },
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "numerology calculator, free numerology calculator, indian numerology calculator, numerology calculator by date of birth, mulank calculator, birth number calculator, personal year number, personal month number, moolank",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Numerology Calculator",
          url: PAGE_URL,
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Any",
          description: PAGE_DESC,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Mulank?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Mulank is the birth number that comes from reducing the day of birth to a single digit, such as 24-08-1999 becoming 2 + 4 = 6.",
              },
            },
            {
              "@type": "Question",
              name: "Is Mulank different from zodiac?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Zodiac is based on sun sign and date range; Mulank is a numerology root number derived from the day of birth.",
              },
            },
            {
              "@type": "Question",
              name: "Can two people have the same Mulank?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Many people share the same day-of-birth reduction, but their full numerology chart and life experiences remain different.",
              },
            },
            {
              "@type": "Question",
              name: "Which Mulank is lucky?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No single Mulank is universally lucky. Each number carries different strengths, struggles, and timing patterns, so the value depends on context.",
              },
            },
            {
              "@type": "Question",
              name: "How is Personal Year calculated?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Personal Year is calculated by adding your birth day and birth month to the target year and reducing the total to a single digit.",
              },
            },
            {
              "@type": "Question",
              name: "Does name affect numerology?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Name numerology is a separate calculation called Namank, which uses letters and a different system than Mulank.",
              },
            },
            {
              "@type": "Question",
              name: "Is numerology scientific?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Numerology is a symbolic tradition and reflective framework rather than a scientifically validated predictive system.",
              },
            },
            {
              "@type": "Question",
              name: "Is AstroFree free?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. AstroFree offers free educational numerology tools, tarot content, and calculators without a paywall.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: NumerologyPage,
});

const currentYear = new Date().getFullYear();

/** Renders the digit-reduction math, e.g. 28 → 2 + 8 → 10 → 1 + 0 → 1 */
function reductionSteps(n: number): string[] {
  const steps: string[] = [String(n)];
  let v = Math.abs(Math.trunc(n));
  while (v > 9) {
    const digits = String(v).split("");
    v = digits.reduce((s, d) => s + Number(d), 0);
    steps.push(`${digits.join(" + ")} = ${v}`);
  }
  return steps;
}

function MathTrail({ value, className = "" }: { value: number; className?: string }) {
  const steps = reductionSteps(value);
  return (
    <div className={`flex flex-wrap items-center gap-1.5 font-mono text-[11px] ${className}`}>
      {steps.map((s, i) => (
        <motion.span
          key={`${s}-${i}`}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="flex items-center gap-1.5"
        >
          {i > 0 && <ArrowRight aria-hidden className="h-3 w-3 text-[color:var(--gold)]/70" />}
          <span
            className="rounded-md border px-1.5 py-0.5 text-muted-foreground"
            style={{ borderColor: "color-mix(in oklab, var(--gold) 25%, transparent)" }}
          >
            {s}
          </span>
        </motion.span>
      ))}
    </div>
  );
}

function LivePreview({ dob }: { dob: string }) {
  const preview = useMemo(() => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dob.trim());
    if (!m) return null;
    const day = Number(m[3]);
    if (!day) return null;
    const value = reduceToSingleDigit(day);
    return { day, value, card: ARCHETYPES[value] };
  }, [dob]);

  return (
    <AnimatePresence>
      {preview && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          <div
            className="mt-3 rounded-xl border p-3"
            style={{
              borderColor: "color-mix(in oklab, var(--gold) 35%, transparent)",
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--gold) 10%, transparent), transparent 70%)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Your Mulank
              </span>
              <motion.span
                key={preview.value}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="font-display text-xl text-[color:var(--gold)]"
              >
                {preview.value}
              </motion.span>
              <span className="text-xs text-muted-foreground">· {preview.card}</span>
            </div>
            <MathTrail value={preview.day} className="mt-2" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function lifePathHref(value: RootNumber) {
  return `/numerology/life-path-${value}`;
}

function NumberSigil({
  value,
  card,
  delay = 0,
  href,
}: {
  value: number;
  card: string;
  delay?: number;
  href?: string;
}) {
  const Wrapper = href ? (motion(Link) as typeof motion.div) : motion.div;
  return (
    <Wrapper
      {...(href ? ({ to: href } as Record<string, unknown>) : {})}
      initial={{ opacity: 0, y: 14, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 220, damping: 20 }}
      whileHover={{ y: -3 }}
      className="group flex items-center gap-3"
    >
      <div className="relative">
        {/* pulsing halo */}
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-2xl blur-xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--gold) 55%, transparent), transparent 70%)",
          }}
          animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay }}
        />
        <div
          className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border font-display text-2xl text-[color:var(--gold)] transition-transform duration-300 group-hover:scale-105"
          style={{
            borderColor: "color-mix(in oklab, var(--gold) 55%, transparent)",
            background:
              "linear-gradient(140deg, color-mix(in oklab, var(--gold) 14%, transparent), transparent 60%)",
            boxShadow: "inset 0 0 24px color-mix(in oklab, var(--gold) 18%, transparent)",
          }}
        >
          {/* sheen sweep */}
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-x-4 top-0 h-full -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"
          />
          <Star
            aria-hidden
            className="absolute -right-1 -top-1 h-3 w-3 text-[color:var(--gold)] opacity-70"
          />
          <span className="relative">{value}</span>
        </div>
      </div>
      <div>
        <p className="font-display text-lg leading-tight group-hover:text-[color:var(--gold)]">
          {card}
        </p>
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {href ? "Archetype · read more" : "Archetype"}
        </p>
      </div>
    </Wrapper>
  );
}

function PacingBadge({ pacing }: { pacing: Pacing }) {
  const t = useTranslate();
  const config = {
    active: {
      icon: Sparkles,
      label: t("numerology.pacingActive"),
      desc: t("numerology.pacingActiveDesc"),
      color: "var(--gold)",
    },
    reflective: {
      icon: Compass,
      label: t("numerology.pacingReflective"),
      desc: t("numerology.pacingReflectiveDesc"),
      color: "var(--aurora-2)",
    },
    harmony: {
      icon: HomeIcon,
      label: t("numerology.pacingHarmony"),
      desc: t("numerology.pacingHarmonyDesc"),
      color: "var(--aurora-1)",
    },
  }[pacing];
  const Icon = config.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className="relative flex items-start gap-3 overflow-hidden rounded-xl border p-3"
      style={{
        borderColor: `color-mix(in oklab, ${config.color} 40%, transparent)`,
        background: `linear-gradient(135deg, color-mix(in oklab, ${config.color} 12%, transparent), transparent 70%)`,
      }}
    >
      <motion.div
        aria-hidden
        className="absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl"
        style={{ background: `color-mix(in oklab, ${config.color} 40%, transparent)` }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <Icon className="relative mt-0.5 h-4 w-4 shrink-0" style={{ color: config.color }} />
      <div className="relative">
        <p className="font-display text-base leading-tight">{config.label}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{config.desc}</p>
      </div>
    </motion.div>
  );
}

function NumerologyPage() {
  const t = useTranslate();
  const [language] = useLanguage();
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/numerology/" });
  const linkedPeriod = search.period === undefined ? undefined : String(search.period);

  const [dob, setDob] = useState(search.dob ?? "");
  const [periodType, setPeriodType] = useState<"year" | "month">(
    linkedPeriod?.includes("-") ? "month" : "year",
  );
  const [targetYear, setTargetYear] = useState(
    linkedPeriod && !linkedPeriod.includes("-") ? linkedPeriod : String(currentYear),
  );
  const [targetMonth, setTargetMonth] = useState(
    linkedPeriod?.includes("-")
      ? linkedPeriod
      : `${currentYear}-${String(new Date().getMonth() + 1).padStart(2, "0")}`,
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<NumerologyResult | null>(null);
  const [source, setSource] = useState<"ai" | "local" | null>(null);
  const [submittedPeriod, setSubmittedPeriod] = useState<{ year: number; month: number } | null>(
    null,
  );
  const [sharedPeriod, setSharedPeriod] = useState<string | null>(null);

  const dobParts = useMemo(() => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dob.trim());
    if (!m) return null;
    return { year: Number(m[1]), month: Number(m[2]), day: Number(m[3]) };
  }, [dob]);

  const synergyMatches = useMemo(() => {
    const personalMonth = result?.calculations.personal_month;
    if (!personalMonth || !submittedPeriod) return null;
    return findCardSynergy(personalMonth.value, submittedPeriod.year, submittedPeriod.month);
  }, [result, submittedPeriod]);

  const isFutureMonth = useMemo(() => {
    if (!submittedPeriod) return false;
    const now = new Date();
    const target = new Date(submittedPeriod.year, submittedPeriod.month - 1, 1);
    const current = new Date(now.getFullYear(), now.getMonth(), 1);
    return target > current;
  }, [submittedPeriod]);

  async function onCalculate(override?: { dob: string; targetPeriod: string }) {
    setError(null);
    const useDob = override?.dob ?? dob;
    if (!useDob) {
      setError(t("numerology.errorGeneric"));
      return;
    }
    const targetPeriod =
      override?.targetPeriod ?? (periodType === "year" ? targetYear.trim() : targetMonth.trim());
    if (!targetPeriod) {
      setError(t("numerology.errorGeneric"));
      return;
    }

    setLoading(true);
    setResult(null);
    setSubmittedPeriod(null);
    try {
      const { result, source } = await generateNumerologyReading({
        data: { dob: useDob, targetPeriod, language },
      });
      setResult(result);
      setSource(source);
      setSharedPeriod(targetPeriod);
      if (targetPeriod.includes("-")) {
        const [y, m] = targetPeriod.split("-").map(Number);
        setSubmittedPeriod({ year: y, month: m });
      }
      void navigate({
        search: {
          dob: useDob,
          period: /^\d{4}$/.test(targetPeriod) ? Number(targetPeriod) : targetPeriod,
        },
        replace: true,
      });
    } catch (err) {
      console.error("Numerology calculation failed:", err);
      setError(t("numerology.errorGeneric"));
    } finally {
      setLoading(false);
    }
  }

  // Auto-run the calculation when arriving via a shared link.
  const autoRan = useRef(false);
  useEffect(() => {
    if (autoRan.current) return;
    if (!search.dob || !linkedPeriod) return;
    autoRan.current = true;
    void onCalculate({ dob: search.dob, targetPeriod: linkedPeriod });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.dob, linkedPeriod]);

  const shareUrl = useMemo(() => {
    if (!result || !sharedPeriod || !dob) return "";
    const base = typeof window !== "undefined" ? window.location.origin : SITE_URL;
    return `${base}/numerology?dob=${encodeURIComponent(dob)}&period=${encodeURIComponent(sharedPeriod)}`;
  }, [result, sharedPeriod, dob]);

  const mulankFaqs = [
    {
      question: "What is Mulank?",
      answer:
        "Mulank is the birth number derived from the day you were born. In numerology it is treated as a root number, reflecting your natural style, instinctive patterns, and the way you show up in daily life.",
    },
    {
      question: "Is Mulank different from zodiac?",
      answer:
        "Yes. Zodiac is tied to your sun sign and date range, while Mulank is a calculated birth number derived from the day of birth. They are different systems used for different kinds of reflection.",
    },
    {
      question: "Can two people have the same Mulank?",
      answer:
        "Yes. People born on the same day of the month can share the same Mulank. The same number does not create identical lives, because environment, relationships, and choices shape the experience.",
    },
    {
      question: "Which Mulank is lucky?",
      answer:
        "No single Mulank is universally lucky or unlucky. Every number comes with unique strengths, challenges, and timing patterns. The more useful question is: which strengths and lessons does this number highlight for you?",
    },
    {
      question: "How is Personal Year calculated?",
      answer:
        "Personal Year is computed by reducing the sum of your birth day, birth month, and target year. For example, a person born on the 24th with a target year of 2026 would calculate 2 + 4 + 2 + 0 + 2 + 6 = 16, then 1 + 6 = 7.",
    },
    {
      question: "Does name affect numerology?",
      answer:
        "Name numerology is a separate branch, usually called Namank. It uses the letters of your name and a different method than Mulank, which is based only on the day of birth.",
    },
    {
      question: "Is numerology scientific?",
      answer:
        "Numerology is a symbolic and interpretive framework, not a scientific method. AstroFree presents it as a reflective tool rather than a measurable prediction system.",
    },
    {
      question: "Is AstroFree free?",
      answer:
        "Yes. AstroFree is a free educational platform with tarot guides, numerology calculators, and reflection tools available at no cost.",
    },
  ];

  const mulankOverview = [
    { number: 1, planet: "Sun", personality: "Independent, direct, and driven to lead." },
    { number: 2, planet: "Moon", personality: "Sensitive, diplomatic, and deeply relational." },
    { number: 3, planet: "Jupiter", personality: "Expressive, social, and naturally creative." },
    { number: 4, planet: "Rahu", personality: "Grounded, practical, and process-oriented." },
    { number: 5, planet: "Mercury", personality: "Adaptable, curious, and freedom-seeking." },
    { number: 6, planet: "Venus", personality: "Responsible, caring, and harmony-seeking." },
    { number: 7, planet: "Ketu", personality: "Reflective, analytical, and spiritually inclined." },
    { number: 8, planet: "Saturn", personality: "Ambitious, disciplined, and focused on results." },
    { number: 9, planet: "Mars", personality: "Compassionate, transformative, and idealistic." },
  ];

  function onReset() {
    setResult(null);
    setError(null);
    setSubmittedPeriod(null);
    setSharedPeriod(null);
    autoRan.current = true;
    void navigate({ search: {}, replace: true });
  }

  return (
    <AppShell>
      {/* ambient aurora backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-10 h-96 w-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--aurora-2) 35%, transparent), transparent 70%)",
          }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)",
          }}
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 max-w-2xl"
      >
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <Hash className="h-3.5 w-3.5" /> {t("numerology.navLabel")}
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          <span className="aurora-text">{t("numerology.title")}</span>
        </h1>
        <p className="mt-3 text-muted-foreground">{t("numerology.subtitle")}</p>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[color:var(--gold)] to-transparent" />
      </motion.header>

      <AnimatePresence mode="wait">
        {!result && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <GlassCard className="relative max-w-xl space-y-6 overflow-hidden">
              {/* top accent */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent opacity-60" />

              <div className="flex items-center gap-2 text-[color-mix(in_oklab,var(--gold)_85%,white)]">
                <Wand2 className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.3em]">Enter your details</span>
              </div>

              <div>
                <Label htmlFor="dob" className="flex items-center gap-2 text-sm">
                  <CalendarDays className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                  {t("numerology.dobLabel")}
                </Label>
                <Input
                  id="dob"
                  type="date"
                  value={dob}
                  max={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setDob(e.target.value)}
                  className="mt-2 transition-all focus-visible:ring-[color:var(--gold)]"
                />
                <LivePreview dob={dob} />
              </div>

              <div>
                <Label className="text-sm">{t("numerology.forecastTypeLabel")}</Label>
                <RadioGroup
                  value={periodType}
                  onValueChange={(v) => setPeriodType(v as "year" | "month")}
                  className="mt-2 grid grid-cols-2 gap-2"
                >
                  {(["year", "month"] as const).map((opt) => {
                    const active = periodType === opt;
                    return (
                      <label
                        key={opt}
                        htmlFor={`period-${opt}`}
                        className="relative flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm transition-all"
                        style={{
                          borderColor: active
                            ? "color-mix(in oklab, var(--gold) 60%, transparent)"
                            : "color-mix(in oklab, var(--foreground) 12%, transparent)",
                          background: active
                            ? "linear-gradient(135deg, color-mix(in oklab, var(--gold) 14%, transparent), transparent 70%)"
                            : "transparent",
                        }}
                      >
                        <RadioGroupItem value={opt} id={`period-${opt}`} />
                        <span>
                          {opt === "year"
                            ? t("numerology.yearOption")
                            : t("numerology.monthOption")}
                        </span>
                      </label>
                    );
                  })}
                </RadioGroup>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={periodType}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {periodType === "year" ? (
                    <>
                      <Label htmlFor="target-year" className="text-sm">
                        {t("numerology.yearLabel")}
                      </Label>
                      <Input
                        id="target-year"
                        type="number"
                        inputMode="numeric"
                        min={1900}
                        max={2200}
                        value={targetYear}
                        onChange={(e) => setTargetYear(e.target.value)}
                        className="mt-2 focus-visible:ring-[color:var(--gold)]"
                      />
                      <div className="mt-2 flex flex-wrap gap-2">
                        {[currentYear - 1, currentYear, currentYear + 1].map((y) => {
                          const active = targetYear === String(y);
                          return (
                            <button
                              key={y}
                              type="button"
                              onClick={() => setTargetYear(String(y))}
                              className="rounded-full border px-3 py-1 text-xs transition-colors"
                              style={{
                                borderColor: active
                                  ? "color-mix(in oklab, var(--gold) 60%, transparent)"
                                  : "color-mix(in oklab, var(--foreground) 15%, transparent)",
                                color: active ? "var(--gold)" : undefined,
                              }}
                            >
                              {y}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <>
                      <Label htmlFor="target-month" className="text-sm">
                        {t("numerology.monthLabel")}
                      </Label>
                      <Input
                        id="target-month"
                        type="month"
                        value={targetMonth}
                        onChange={(e) => setTargetMonth(e.target.value)}
                        className="mt-2 focus-visible:ring-[color:var(--gold)]"
                      />
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 text-sm text-destructive"
                >
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /> {error}
                </motion.p>
              )}

              <GoldButton className="w-full" onClick={() => void onCalculate()} disabled={loading}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      className="inline-block h-3.5 w-3.5 rounded-full border-2 border-current border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                    {t("numerology.calculating")}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    {t("numerology.calculate")}
                  </span>
                )}
              </GoldButton>
            </GlassCard>
          </motion.div>
        )}

        {result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="grid gap-5 lg:grid-cols-[1.1fr_1fr]"
          >
            <div className="space-y-5">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                <GlassCard className="relative space-y-5 overflow-hidden">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent opacity-60" />
                  <div className="flex items-center gap-2 text-[color-mix(in_oklab,var(--gold)_85%,white)]">
                    <Sparkles className="h-4 w-4" />
                    <h2 className="font-display text-xl text-foreground">
                      {t("numerology.title")}
                    </h2>
                    {source === "ai" && (
                      <span className="ml-auto rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] px-2 py-0.5 text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
                        AI
                      </span>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {t("numerology.mulank")}
                      </p>
                      <div className="mt-2">
                        <NumberSigil
                          value={result.calculations.mulank.value}
                          card={result.calculations.mulank.card}
                          delay={0}
                          href={lifePathHref(result.calculations.mulank.value as RootNumber)}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {t("numerology.personalYear")}
                      </p>
                      <div className="mt-2">
                        <NumberSigil
                          value={result.calculations.personal_year.value}
                          card={result.calculations.personal_year.card}
                          delay={0.08}
                          href={lifePathHref(result.calculations.personal_year.value as RootNumber)}
                        />
                      </div>
                    </div>
                    {result.calculations.personal_month && (
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">
                          {t("numerology.personalMonth")}
                        </p>
                        <div className="mt-2">
                          <NumberSigil
                            value={result.calculations.personal_month.value}
                            card={result.calculations.personal_month.card}
                            delay={0.16}
                            href={lifePathHref(
                              result.calculations.personal_month.value as RootNumber,
                            )}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {dobParts && (
                    <div
                      className="rounded-xl border p-3"
                      style={{
                        borderColor: "color-mix(in oklab, var(--foreground) 12%, transparent)",
                      }}
                    >
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        How this was calculated
                      </p>
                      <div className="mt-2 space-y-2">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Mulank = birth day reduced
                          </p>
                          <MathTrail value={dobParts.day} className="mt-1" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Personal Year = day + month + year reduced
                          </p>
                          <MathTrail
                            value={
                              dobParts.day +
                              dobParts.month +
                              (submittedPeriod?.year ?? Number(targetYear))
                            }
                            className="mt-1"
                          />
                        </div>
                        {submittedPeriod && result.calculations.personal_month && (
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Personal Month = personal year + month reduced
                            </p>
                            <MathTrail
                              value={
                                result.calculations.personal_year.value + submittedPeriod.month
                              }
                              className="mt-1"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <GlassCard className="space-y-5">
                  {[
                    {
                      title: t("numerology.baseMindset"),
                      body: result.energetic_layers.base_mindset,
                    },
                    {
                      title: t("numerology.yearlyTheme"),
                      body: result.energetic_layers.yearly_theme,
                    },
                    ...(result.energetic_layers.monthly_focus
                      ? [
                          {
                            title: t("numerology.monthlyFocus"),
                            body: result.energetic_layers.monthly_focus,
                          },
                        ]
                      : []),
                  ].map((layer, i) => (
                    <motion.div
                      key={layer.title}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="relative border-l-2 pl-4"
                      style={{
                        borderColor: "color-mix(in oklab, var(--gold) 45%, transparent)",
                      }}
                    >
                      <h3 className="font-display text-lg">{layer.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {layer.body}
                      </p>
                    </motion.div>
                  ))}
                  {result.energetic_layers.monthly_focus && result.energetic_layers.pacing && (
                    <div>
                      <PacingBadge pacing={result.energetic_layers.pacing} />
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            </div>

            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <GlassCard className="space-y-3">
                  <div className="flex items-center gap-2 text-[color-mix(in_oklab,var(--gold)_85%,white)]">
                    <CheckCircle2 className="h-4 w-4" />
                    <h3 className="font-display text-lg text-foreground">
                      {t("numerology.recommendedActions")}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {result.guidance.recommended_actions.map((a, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="flex gap-2"
                      >
                        <span className="text-[color:var(--gold)]">✦</span>
                        <span>{a}</span>
                      </motion.li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
              >
                <GlassCard className="space-y-3">
                  <div className="flex items-center gap-2 text-[color:var(--aurora-1)]">
                    <AlertTriangle className="h-4 w-4" />
                    <h3 className="font-display text-lg text-foreground">
                      {t("numerology.cautionAreas")}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {result.guidance.caution_areas.map((c, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + i * 0.05 }}
                        className="flex gap-2"
                      >
                        <span className="text-[color:var(--aurora-1)]">◆</span>
                        <span>{c}</span>
                      </motion.li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>

              {synergyMatches !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <GlassCard className="space-y-3">
                    <div className="flex items-center gap-2 text-[color-mix(in_oklab,var(--gold)_85%,white)]">
                      <Sparkles className="h-4 w-4" />
                      <h3 className="font-display text-lg text-foreground">
                        {t("numerology.cardSynergyTitle")}
                      </h3>
                    </div>
                    {synergyMatches.length > 0 ? (
                      <>
                        <p className="text-sm text-muted-foreground">
                          {t("numerology.cardSynergyFound")}
                        </p>
                        <ul className="space-y-2 text-sm leading-relaxed">
                          {synergyMatches.map((m) => (
                            <li
                              key={`${m.readingId}-${m.cardName}`}
                              className="flex justify-between gap-2 rounded-lg border border-[color-mix(in_oklab,var(--gold)_20%,transparent)] px-3 py-2 transition-colors hover:border-[color-mix(in_oklab,var(--gold)_45%,transparent)]"
                            >
                              <span>
                                {m.cardName}
                                {m.reversed ? ` (${t("dailycard.reversed")})` : ""}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {new Date(m.createdAt).toLocaleDateString()}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {isFutureMonth
                          ? t("numerology.cardSynergyFuture")
                          : t("numerology.cardSynergyNone")}
                      </p>
                    )}
                  </GlassCard>
                </motion.div>
              )}

              {shareUrl && (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                  <GlassCard className="relative space-y-3 overflow-hidden">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent opacity-60" />
                    <div className="flex items-center gap-2 text-[color-mix(in_oklab,var(--gold)_85%,white)]">
                      <Sparkles className="h-4 w-4" />
                      <h3 className="font-display text-lg text-foreground">Share this reading</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Anyone with this link sees the same Mulank {result.calculations.mulank.value}{" "}
                      forecast for {sharedPeriod}.
                    </p>
                    <ShareButtons
                      title={`My Mulank ${result.calculations.mulank.value} forecast for ${sharedPeriod}`}
                      url={shareUrl}
                    />
                    <p className="break-all rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-muted-foreground">
                      {shareUrl}
                    </p>
                  </GlassCard>
                </motion.div>
              )}

              <GoldButton variant="secondary" className="w-full" onClick={onReset}>
                <RotateCcw className="h-4 w-4" /> {t("numerology.newForecast")}
              </GoldButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="mt-14 max-w-5xl space-y-10">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">What is Mulank?</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Mulank is the numerology number derived from the day of your birth. In many traditions
            it is called the birth number, root number, or psychic number, and it is usually read as
            your natural way of responding to life. The calculation is simple: take the number of
            the day you were born, add its digits together, and reduce until you reach a single
            digit from 1 to 9. A person born on the 24th reduces as 2 + 4 = 6, so the Mulank is 6.
            This is a useful lens because it describes how you act instinctively, what kind of
            energy you carry, and what you tend to notice first when life becomes noisy or
            uncertain.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Two people can share the same date of birth day but still live very different lives;
            numerology does not remove free will or personal history. What Mulank adds is context.
            It offers a mirror for your habitual style, tendencies, and recurring themes. That is
            why many readers pair it with Bhagyank, Namank, and the Personal Year cycle to build a
            more nuanced understanding of timing, identity, and direction.
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">How to Calculate Mulank</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            To calculate your Mulank, reduce the day of birth to a single digit. If the day is
            already one digit, the number stays the same. If the day is double-digit, add the digits
            together. If the total is still double-digit, add again until you arrive at a value
            between 1 and 9.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Example A
              </p>
              <div className="mt-3 font-mono text-base text-foreground">
                <p>24-08-1999</p>
                <p className="mt-2">2 + 4 = 6</p>
                <p className="mt-2 text-[color:var(--gold)]">Mulank = 6</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Example B
              </p>
              <div className="mt-3 font-mono text-base text-foreground">
                <p>17-11-1987</p>
                <p className="mt-2">1 + 7 = 8</p>
                <p className="mt-2 text-[color:var(--gold)]">Mulank = 8</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">Mulank 1–9 Overview</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {mulankOverview.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Number
                </p>
                <h3 className="mt-2 font-display text-3xl text-[color:var(--gold)]">
                  {item.number}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Planet:</span> {item.planet}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Personality:</span>{" "}
                  {item.personality}
                </p>
                <Link
                  to="/numerology/$slug"
                  params={{ slug: `mulank-${item.number}` }}
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] hover:text-[color:var(--gold)]"
                >
                  Read Mulank {item.number} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">Mulank vs Bhagyank</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left text-sm text-muted-foreground">
              <thead className="bg-white/[0.03] text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold)]">
                <tr>
                  <th className="px-4 py-3">Aspect</th>
                  <th className="px-4 py-3">Mulank</th>
                  <th className="px-4 py-3">Bhagyank</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Based on", "Day of birth", "Full date of birth"],
                  [
                    "Meaning",
                    "Instinctive style and root energy",
                    "Life direction and broader path",
                  ],
                  ["Changes?", "No", "No"],
                  [
                    "Purpose",
                    "How you show up in daily life",
                    "What long-term themes may shape your journey",
                  ],
                ].map(([label, mulankValue, bhagyankValue]) => (
                  <tr key={label} className="border-t border-white/10">
                    <td className="px-4 py-3 font-medium text-foreground">{label}</td>
                    <td className="px-4 py-3">{mulankValue}</td>
                    <td className="px-4 py-3">{bhagyankValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">Personal Year Explained</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The Personal Year explains the theme of a specific year in your life. The formula is
            usually calculated by adding your birth day and birth month to the target year, then
            reducing the sum to a single digit. If you were born on 24 August and you want the
            Personal Year for 2026, the formula is 2 + 4 + 2 + 0 + 2 + 6 = 16, then 1 + 6 = 7. A
            Personal Year of 7 often points to reflection, inner work, and deeper learning, while a
            3 tends to emphasize creativity and expression. The Personal Year is different from
            Mulank because it changes over time and describes the energy of a specific cycle.
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">FAQs</h2>
          <div className="mt-5">
            <FAQAccordion items={mulankFaqs} />
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">Related Guides</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                to: "/guide/numerology" as const,
                title: "Mulank Numerology Guide",
                body: "Learn the calculation logic, number meanings, and timing formulas in one place.",
              },
              {
                to: "/bhagyank-calculator" as const,
                title: "Bhagyank Calculator",
                body: "See how your full birth date creates a broader destiny number.",
              },
              {
                to: "/namank-calculator" as const,
                title: "Namank Calculator",
                body: "Explore the vibration created by the letters in your name.",
              },
              {
                to: "/guide/mulank-vs-bhagyank" as const,
                title: "Mulank vs Bhagyank",
                body: "Understand how these two Indian numerology numbers differ and work together.",
              },
              {
                to: "/numerology/$slug" as const,
                params: { slug: "life-path-1" },
                title: "Life Path Numbers",
                body: "Compare the Western Life Path system with Mulank and Bhagyank.",
              },
              {
                to: "/numerology/$slug" as const,
                params: { slug: "master-number-11" },
                title: "Master Numbers 11 & 22",
                body: "What it means to carry an unreduced Master Number in your chart.",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                {...("params" in item ? { params: item.params } : {})}
                className="block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-[color-mix(in_oklab,var(--gold)_35%,transparent)]"
              >
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
