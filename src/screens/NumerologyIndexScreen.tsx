import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  Compass,
  Hash,
  Home as HomeIcon,
  RotateCcw,
  Sparkles,
  Star,
  Wand2,
} from "@/components/icons";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { AppShell } from "@/components/app/AppShell";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { ShareButtons } from "@/components/content/ShareButtons";
import { AuthorCard } from "@/components/AuthorCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getBcp47, useLanguage, useTranslate, type TranslationKey } from "@/lib/i18n";
import { localizePath } from "@/locales";
import { generateNumerologyReading } from "@/lib/numerology/ai.server";
import { reduceToSingleDigit } from "@/lib/numerology/engine";
import { calculateBhagyank, type BhagyankValue } from "@/lib/numerology/bhagyank";
import { findCardSynergy } from "@/lib/numerology/synergy";
import { SITE_URL } from "@/lib/site";
import type { NumerologyResult, Pacing, RootNumber } from "@/lib/numerology/types";

const DEFAULT_SSR_YEAR = 2026;
const DEFAULT_SSR_MONTH = "2026-11";
const DEFAULT_SSR_MAX_DATE = "2026-12-31";

interface MulankChartRow {
  number: RootNumber;
  dates: number[];
  planet: string;
  archetype: string;
  personality: string;
  friendly: number[];
  neutral: number[];
  enemy: number[];
}

const MULANK_MASTER_CHART: MulankChartRow[] = [
  {
    number: 1,
    dates: [1, 10, 19, 28],
    planet: "Sun (Surya)",
    archetype: "The Magician",
    personality: "Independent, direct, and driven to lead.",
    friendly: [1, 2, 3, 9],
    neutral: [5, 6, 7],
    enemy: [4, 8],
  },
  {
    number: 2,
    dates: [2, 11, 20, 29],
    planet: "Moon (Chandra)",
    archetype: "The High Priestess",
    personality: "Sensitive, diplomatic, and deeply relational.",
    friendly: [1, 2, 4, 7],
    neutral: [3, 6, 9],
    enemy: [5, 8],
  },
  {
    number: 3,
    dates: [3, 12, 21, 30],
    planet: "Jupiter (Guru)",
    archetype: "The Empress",
    personality: "Expressive, social, and naturally creative.",
    friendly: [1, 3, 6, 9],
    neutral: [2, 5, 7],
    enemy: [4, 8],
  },
  {
    number: 4,
    dates: [4, 13, 22, 31],
    planet: "Rahu (Uranus)",
    archetype: "The Emperor",
    personality: "Grounded, practical, and process-oriented.",
    friendly: [4, 5, 7, 8],
    neutral: [2, 6, 9],
    enemy: [1, 3],
  },
  {
    number: 5,
    dates: [5, 14, 23],
    planet: "Mercury (Budh)",
    archetype: "The Hierophant",
    personality: "Adaptable, curious, and freedom-seeking.",
    friendly: [1, 4, 5, 6],
    neutral: [3, 7, 8],
    enemy: [2, 9],
  },
  {
    number: 6,
    dates: [6, 15, 24],
    planet: "Venus (Shukra)",
    archetype: "The Lovers",
    personality: "Responsible, caring, and harmony-seeking.",
    friendly: [3, 5, 6, 9],
    neutral: [1, 2, 4],
    enemy: [7, 8],
  },
  {
    number: 7,
    dates: [7, 16, 25],
    planet: "Ketu (Neptune)",
    archetype: "The Chariot",
    personality: "Reflective, analytical, and spiritually inclined.",
    friendly: [2, 4, 7, 9],
    neutral: [1, 3, 5],
    enemy: [6, 8],
  },
  {
    number: 8,
    dates: [8, 17, 26],
    planet: "Saturn (Shani)",
    archetype: "Strength / Justice",
    personality: "Ambitious, disciplined, and focused on results.",
    friendly: [4, 5, 8],
    neutral: [2, 7, 9],
    enemy: [1, 3, 6],
  },
  {
    number: 9,
    dates: [9, 18, 27],
    planet: "Mars (Mangal)",
    archetype: "The Hermit",
    personality: "Compassionate, transformative, and idealistic.",
    friendly: [1, 3, 6, 9],
    neutral: [2, 4, 7],
    enemy: [5, 8],
  },
];

const MASTER_NUMBER_META: Record<11 | 22 | 33, { planet: string; friendly: number[]; label: string; slug: string }> = {
  11: {
    planet: "Moon / Uranus (Master Intuitive)",
    friendly: [2, 4, 7, 11],
    label: "Master Number 11",
    slug: "master-number-11",
  },
  22: {
    planet: "Rahu / Uranus (Master Builder)",
    friendly: [4, 6, 8, 22],
    label: "Master Number 22",
    slug: "master-number-22",
  },
  33: {
    planet: "Venus / Jupiter (Master Teacher)",
    friendly: [3, 6, 9, 33],
    label: "Master Number 33",
    slug: "",
  },
};

function getMulankMeta(n: RootNumber): MulankChartRow {
  return MULANK_MASTER_CHART[n - 1];
}

function getBhagyankMeta(value: BhagyankValue, t: (k: TranslationKey) => string) {
  if (value === 11 || value === 22 || value === 33) {
    return {
      planet: MASTER_NUMBER_META[value].planet,
      friendly: MASTER_NUMBER_META[value].friendly,
      archetype: MASTER_NUMBER_META[value].label,
      guideLabel:
        value === 33
          ? t("numHub.master33Cta")
          : `${t("numHub.readMasterPrefix")} ${value} ${t("numHub.readLifePathSuffix")}`,
      guideTo: (value === 33 ? "/bhagyank-calculator" : "/numerology/$slug") as
        | "/bhagyank-calculator"
        | "/numerology/$slug",
      guideSlug: value === 33 ? undefined : MASTER_NUMBER_META[value].slug,
    };
  }
  const row = getMulankMeta(value as RootNumber);
  return {
    planet: t(`lnum.p${value as RootNumber}.planet` as TranslationKey),
    friendly: row.friendly,
    archetype: t(`lnum.p${value as RootNumber}.tarot` as TranslationKey),
    guideLabel: `${t("numHub.readLifePathPrefix")} ${value} ${t("numHub.readLifePathSuffix")}`,
    guideTo: "/numerology/$slug" as const,
    guideSlug: `life-path-${value}`,
  };
}

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

function dayLookupFormula(day: number, singleDigitNote: string): string {
  if (day <= 9) return `${day} (${singleDigitNote})`;
  const parts: string[] = [];
  let v = day;
  while (v > 9) {
    const digits = String(v).split("");
    v = digits.reduce((s, d) => s + Number(d), 0);
    parts.push(`${digits.join(" + ")} = ${v}`);
  }
  return parts.join(" → ");
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
  const t = useTranslate();
  const preview = useMemo(() => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dob.trim());
    if (!m) return null;
    const year = Number(m[1]);
    const month = Number(m[2]);
    const day = Number(m[3]);
    if (!day || !month || !year) return null;
    const mulankValue = reduceToSingleDigit(day);
    const bhagyank = calculateBhagyank(day, month, year);
    return {
      day,
      mulankValue,
      mulankMeta: getMulankMeta(mulankValue),
      bhagyank,
      bhagyankMeta: getBhagyankMeta(bhagyank.value, t),
    };
  }, [dob, t]);

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
            className="mt-3 grid gap-3 rounded-xl border p-3.5 sm:grid-cols-2"
            style={{
              borderColor: "color-mix(in oklab, var(--gold) 35%, transparent)",
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--gold) 10%, transparent), transparent 70%)",
            }}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t("numHub.mulankLabel")}
                </span>
                <span className="font-display text-xl text-[color:var(--gold)]">
                  {preview.mulankValue}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {t("numHub.planetPrefix")}{" "}
                <span className="text-foreground">
                  {t(`lnum.p${preview.mulankValue}.planet` as TranslationKey)}
                </span>
              </p>
              <p className="text-xs text-muted-foreground">
                {t("numHub.friendlyLabel")}{" "}
                <span className="text-foreground">{preview.mulankMeta.friendly.join(", ")}</span>
              </p>
              <MathTrail value={preview.day} className="mt-1.5" />
              <Link
                to="/numerology/$slug"
                params={{ slug: `mulank-${preview.mulankValue}` }}
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[color:var(--gold)] hover:underline"
              >
                {t("numHub.readLinkPrefix")} {preview.mulankValue} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="border-t border-white/10 pt-3 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t("numHub.bhagyankLabel")}
                </span>
                <span className="font-display text-xl text-[color:var(--gold)]">
                  {preview.bhagyank.value}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {t("numHub.planetPrefix")}{" "}
                <span className="text-foreground">{preview.bhagyankMeta.planet}</span>
              </p>
              <p className="text-xs text-muted-foreground">
                {t("numHub.friendlyLabel")}{" "}
                <span className="text-foreground">
                  {preview.bhagyankMeta.friendly.join(", ")}
                </span>
              </p>
              <p className="mt-1.5 font-mono text-[11px] text-muted-foreground">
                {preview.bhagyank.steps
                  .map((s) => `${s.expression} = ${s.sum}`)
                  .join(" → ")}
              </p>
              {preview.bhagyankMeta.guideSlug ? (
                <Link
                  to="/numerology/$slug"
                  params={{ slug: preview.bhagyankMeta.guideSlug }}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[color:var(--gold)] hover:underline"
                >
                  {preview.bhagyankMeta.guideLabel} <ArrowRight className="h-3 w-3" />
                </Link>
              ) : (
                <Link
                  to="/bhagyank-calculator"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[color:var(--gold)] hover:underline"
                >
                  {preview.bhagyankMeta.guideLabel} <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </div>
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
  const t = useTranslate();
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
          {href ? t("numHub.archReadMore") : t("numHub.archetypeLabel")}
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

export function NumerologyIndexScreen() {
  const t = useTranslate();
  const [language] = useLanguage();
  const search = useSearch({ strict: false }) as { dob?: string; period?: string | number };
  const navigate = useNavigate();
  const linkedPeriod = search.period === undefined ? undefined : String(search.period);

  const bcp47 = getBcp47(language);
  const formatUtcDate = (iso: string) =>
    new Intl.DateTimeFormat(bcp47, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${iso}T00:00:00Z`));

  const [dob, setDob] = useState(search.dob ?? "");
  const [periodType, setPeriodType] = useState<"year" | "month">(
    linkedPeriod?.includes("-") ? "month" : "year",
  );
  const [targetYear, setTargetYear] = useState(
    linkedPeriod && !linkedPeriod.includes("-") ? linkedPeriod : String(DEFAULT_SSR_YEAR),
  );
  const [targetMonth, setTargetMonth] = useState(
    linkedPeriod?.includes("-") ? linkedPeriod : DEFAULT_SSR_MONTH,
  );
  const [maxDobDate, setMaxDobDate] = useState(DEFAULT_SSR_MAX_DATE);

  useEffect(() => {
    const now = new Date();
    setMaxDobDate(now.toISOString().slice(0, 10));
    if (!linkedPeriod) {
      setTargetYear(String(now.getFullYear()));
      setTargetMonth(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`);
    }
  }, [linkedPeriod]);

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

  const bhagyankResult = useMemo(() => {
    if (!dobParts) return null;
    return calculateBhagyank(dobParts.day, dobParts.month, dobParts.year);
  }, [dobParts]);

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
        } as any,
        replace: true,
      });
    } catch (err) {
      console.error("Numerology calculation failed:", err);
      setError(t("numerology.errorGeneric"));
    } finally {
      setLoading(false);
    }
  }

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
    return `${base}${localizePath("/numerology", language)}?dob=${encodeURIComponent(dob)}&period=${encodeURIComponent(sharedPeriod)}`;
  }, [result, sharedPeriod, dob, language]);

  const mulankFaqs = useMemo(
    () => [
      { question: t("numHub.faq1Q"), answer: t("numHub.faq1A") },
      { question: t("numHub.faq2Q"), answer: t("numHub.faq2A") },
      { question: t("numHub.faq3Q"), answer: t("numHub.faq3A") },
      { question: t("numHub.faq4Q"), answer: t("numHub.faq4A") },
      { question: t("numHub.faq5Q"), answer: t("numHub.faq5A") },
      { question: t("numHub.faq6Q"), answer: t("numHub.faq6A") },
      { question: t("numHub.faq7Q"), answer: t("numHub.faq7A") },
      { question: t("numHub.faq8Q"), answer: t("numHub.faq8A") },
    ],
    [t],
  );

  const mulankOverview = MULANK_MASTER_CHART;
  const singleDigitNote = t("numHub.singleDigitNote");
  const birthDateLookup = useMemo(
    () =>
      Array.from({ length: 31 }, (_, i) => {
        const day = i + 1;
        const mulank = reduceToSingleDigit(day);
        const row = getMulankMeta(mulank);
        return {
          day,
          mulank,
          formula: dayLookupFormula(day, singleDigitNote),
          planet: row.planet,
        };
      }),
    [singleDigitNote],
  );

  function onReset() {
    setResult(null);
    setError(null);
    setSubmittedPeriod(null);
    setSharedPeriod(null);
    autoRan.current = true;
    void navigate({ search: {} as any, replace: true });
  }

  return (
    <AppShell>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-32 top-10 h-96 w-96 rounded-full blur-3xl opacity-80"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--aurora-2) 35%, transparent), transparent 70%)",
          }}
        />
        <div
          className="absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-80"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)",
          }}
        />
      </div>

      <header className="mb-8 max-w-4xl">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <Hash className="h-3.5 w-3.5" /> {t("numHub.headerKicker")}
        </p>
        <h1 className="mt-2 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          <span className="aurora-text">{t("numHub.title")}</span>
        </h1>
        <p className="mt-3 max-w-3xl text-base text-muted-foreground">
          {t("numHub.subtitle")}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden />
            {t("common.published")} <time dateTime="2026-07-15">{formatUtcDate("2026-07-15")}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden />
            {t("common.lastUpdated")} <time dateTime="2026-11-18">{formatUtcDate("2026-11-18")}</time>
          </span>
        </div>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[color:var(--gold)] to-transparent" />
      </header>

      <AnimatePresence mode="wait">
        {!result && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <GlassCard className="relative space-y-6 overflow-hidden">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent opacity-60" />

              <div className="flex items-center gap-2 text-[color-mix(in_oklab,var(--gold)_85%,white)]">
                <Wand2 className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.3em]">
                  {t("numHub.checkerKicker")}
                </span>
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
                  max={maxDobDate}
                  onChange={(e) => setDob(e.target.value)}
                  className="mt-2 min-h-12 transition-all focus-visible:ring-[color:var(--gold)]"
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
                        className="relative flex min-h-12 cursor-pointer items-center gap-2 rounded-xl border p-3 text-base sm:text-sm transition-all"
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
                        {[DEFAULT_SSR_YEAR - 1, DEFAULT_SSR_YEAR, DEFAULT_SSR_YEAR + 1].map((y) => {
                          const active = targetYear === String(y);
                          return (
                            <button
                              key={y}
                              type="button"
                              onClick={() => setTargetYear(String(y))}
                              className="inline-flex min-h-12 sm:min-h-8 items-center rounded-full border px-4 py-1.5 text-sm sm:text-xs transition-colors"
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
                    {t("numHub.calcBtn")}
                  </span>
                )}
              </GoldButton>
            </GlassCard>

            <GlassCard className="relative space-y-4 overflow-hidden">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent opacity-45" />
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--gold)]">
                {t("numHub.formulaEye")}
              </p>
              <h2 className="font-display text-xl text-foreground">
                {t("numHub.formulaTitle")}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("numHub.formulaBody")}
              </p>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-xs text-muted-foreground">
                <p className="font-medium text-foreground">{t("numHub.featuredTitle")}</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  <Link
                    to="/numerology/$slug"
                    params={{ slug: "mulank-7" }}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-3.5 py-1.5 font-medium text-[color:var(--gold)] transition-colors hover:bg-[color:var(--gold)]/20"
                  >
                    {t("numHub.featMulank7")} <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    to="/numerology/$slug"
                    params={{ slug: "master-number-22" }}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-[color:var(--gold)]/40 hover:text-[color:var(--gold)]"
                  >
                    {t("numHub.featMaster22")} <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    to="/bhagyank-calculator"
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-[color:var(--gold)]/40 hover:text-[color:var(--gold)]"
                  >
                    {t("numHub.featBhagyank")} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
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
                      {t("numHub.profileTitle")}
                    </h2>
                    {source === "ai" && (
                      <span className="ml-auto rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] px-2 py-0.5 text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
                        AI
                      </span>
                    )}
                  </div>

                  {(() => {
                    const mulankNum = result.calculations.mulank.value as RootNumber;
                    const mulankMeta = getMulankMeta(mulankNum);
                    const bhagyankMeta = bhagyankResult
                      ? getBhagyankMeta(bhagyankResult.value, t)
                      : null;
                    return (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/[0.06] p-4">
                          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                            {t("numHub.mulankSub")}
                          </p>
                          <div className="mt-2.5">
                            <NumberSigil
                              value={result.calculations.mulank.value}
                              card={result.calculations.mulank.card}
                              delay={0}
                              href={`/numerology/mulank-${result.calculations.mulank.value}`}
                            />
                          </div>
                          <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                            <p>
                              <span className="font-medium text-foreground">
                                {t("numHub.planetLabel")}
                              </span>{" "}
                              {t(`lnum.p${mulankNum}.planet` as TranslationKey)}
                            </p>
                            <p>
                              <span className="font-medium text-foreground">
                                {t("numHub.friendlyLabel")}
                              </span>{" "}
                              {mulankMeta.friendly.join(", ")}
                            </p>
                          </div>
                          <Link
                            to="/numerology/$slug"
                            params={{ slug: `mulank-${result.calculations.mulank.value}` }}
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--gold)] hover:underline"
                          >
                            {t("numHub.readMulankPrefix")} {result.calculations.mulank.value}{" "}
                            {t("numHub.readMulankSuffix")} <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>

                        {bhagyankResult && bhagyankMeta && (
                          <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                              {t("numHub.bhagyankSub")}
                            </p>
                            <div className="mt-2.5">
                              <NumberSigil
                                value={bhagyankResult.value}
                                card={bhagyankMeta.archetype}
                                delay={0.08}
                                href={
                                  bhagyankMeta.guideSlug
                                    ? `/numerology/${bhagyankMeta.guideSlug}`
                                    : "/bhagyank-calculator"
                                }
                              />
                            </div>
                            <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                              <p>
                                <span className="font-medium text-foreground">
                                  {t("numHub.planetLabel")}
                                </span>{" "}
                                {bhagyankMeta.planet}
                              </p>
                              <p>
                                <span className="font-medium text-foreground">
                                  {t("numHub.friendlyLabel")}
                                </span>{" "}
                                {bhagyankMeta.friendly.join(", ")}
                              </p>
                            </div>
                            {bhagyankMeta.guideSlug ? (
                              <Link
                                to="/numerology/$slug"
                                params={{ slug: bhagyankMeta.guideSlug }}
                                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--gold)] hover:underline"
                              >
                                {bhagyankMeta.guideLabel} <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            ) : (
                              <Link
                                to="/bhagyank-calculator"
                                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--gold)] hover:underline"
                              >
                                {bhagyankMeta.guideLabel} <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {t("numerology.personalYear")}
                      </p>
                      <div className="mt-2">
                        <NumberSigil
                          value={result.calculations.personal_year.value}
                          card={result.calculations.personal_year.card}
                          delay={0.12}
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
                        {t("numHub.mathHeading")}
                      </p>
                      <div className="mt-2 space-y-2">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            {t("numHub.mathMulank")}
                          </p>
                          <MathTrail value={dobParts.day} className="mt-1" />
                        </div>
                        {bhagyankResult && (
                          <div>
                            <p className="text-xs text-muted-foreground">
                              {t("numHub.mathBhagyank")}
                            </p>
                            <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                              {bhagyankResult.steps
                                .map((s) => `${s.expression} = ${s.sum}`)
                                .join(" → ")}
                            </p>
                          </div>
                        )}
                        <div>
                          <p className="text-xs text-muted-foreground">
                            {t("numHub.mathPY")}
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
                              {t("numHub.mathPM")}
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
                        <span aria-hidden className="text-[color:var(--gold)]">•</span>
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
                        transition={{ delay: 0.27 + i * 0.05 }}
                        className="flex gap-2"
                      >
                        <span aria-hidden className="text-[color:var(--aurora-1)]">•</span>
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
                      <h3 className="font-display text-lg text-foreground">
                        {t("numHub.shareTitle")}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("numHub.shareBody")}
                    </p>
                    <ShareButtons
                      title={`${t("numHub.colMulank")} ${result.calculations.mulank.value} (${sharedPeriod})`}
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

      <section className="mt-12 max-w-5xl space-y-12">
        <div id="birth-date-lookup">
          <h2 className="font-display text-3xl sm:text-4xl">
            {t("numHub.lookupTitle")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {t("numHub.lookupDesc")}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              birthDateLookup.slice(0, 11),
              birthDateLookup.slice(11, 21),
              birthDateLookup.slice(21, 31),
            ].map((chunk, chunkIdx) => (
              <div
                key={chunkIdx}
                className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <table className="w-full text-left text-sm text-muted-foreground">
                  <thead className="bg-white/[0.04] text-[10px] uppercase tracking-[0.18em] text-[color:var(--gold)]">
                    <tr>
                      <th className="px-3.5 py-2.5">{t("numHub.colDate")}</th>
                      <th className="px-3.5 py-2.5">{t("numHub.colReduction")}</th>
                      <th className="px-3.5 py-2.5">{t("numHub.colMulank")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chunk.map((row) => (
                      <tr key={row.day} className="border-t border-white/10">
                        <td className="px-3.5 py-2 font-medium text-foreground">{row.day}</td>
                        <td className="px-3.5 py-2 font-mono text-xs">{row.formula}</td>
                        <td className="px-3.5 py-2">
                          <Link
                            to="/numerology/$slug"
                            params={{ slug: `mulank-${row.mulank}` }}
                            className="font-semibold text-[color:var(--gold)] hover:underline"
                          >
                            {t("numHub.colMulank")} {row.mulank}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>

        <div id="master-mulank-chart">
          <h2 className="font-display text-3xl sm:text-4xl">
            {t("numHub.masterChartTitle")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {t("numHub.masterChartDesc")}
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full min-w-[680px] text-left text-sm text-muted-foreground">
              <thead className="bg-white/[0.04] text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold)]">
                <tr>
                  <th className="px-4 py-3">{t("numHub.colMulank")}</th>
                  <th className="px-4 py-3">{t("numHub.colBirthDates")}</th>
                  <th className="px-4 py-3">{t("numHub.colPlanet")}</th>
                  <th className="px-4 py-3">{t("numHub.colFriendly")}</th>
                  <th className="px-4 py-3">{t("numHub.colEnemyNeutral")}</th>
                </tr>
              </thead>
              <tbody>
                {MULANK_MASTER_CHART.map((row) => (
                  <tr key={row.number} className="border-t border-white/10">
                    <td className="px-4 py-3 font-medium">
                      <Link
                        to="/numerology/$slug"
                        params={{ slug: `mulank-${row.number}` }}
                        className="font-display text-base text-[color:var(--gold)] hover:underline"
                      >
                        {t("numHub.colMulank")} {row.number}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-foreground">{row.dates.join(", ")}</td>
                    <td className="px-4 py-3">{t(`lnum.p${row.number}.planet` as TranslationKey)}</td>
                    <td className="px-4 py-3 text-foreground">{row.friendly.join(", ")}</td>
                    <td className="px-4 py-3">
                      <span className="text-foreground">
                        {t("numHub.enemyPrefix")} {row.enemy.join(", ")}
                      </span>
                      <span className="text-muted-foreground">
                        {" "}
                        · {t("numHub.neutralPrefix")} {row.neutral.join(", ")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              to="/numerology/$slug"
              params={{ slug: "mulank-7" }}
              className="block rounded-2xl border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/[0.06] p-5 transition-colors hover:border-[color:var(--gold)]/60"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--gold)]">
                {t("numHub.cardMulank7Eye")}
              </p>
              <h3 className="mt-1 font-display text-xl text-foreground">
                {t("numHub.cardMulank7Title")}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {t("numHub.cardMulank7Desc")}
              </p>
            </Link>
            <Link
              to="/numerology/$slug"
              params={{ slug: "master-number-22" }}
              className="block rounded-2xl border border-white/15 bg-white/[0.03] p-5 transition-colors hover:border-[color:var(--gold)]/50"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--gold)]">
                {t("numHub.cardMaster22Eye")}
              </p>
              <h3 className="mt-1 font-display text-xl text-foreground">
                {t("numHub.cardMaster22Title")}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {t("numHub.cardMaster22Desc")}
              </p>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{t("numHub.whatTitle")}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("numHub.whatP1")}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("numHub.whatP2")}
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{t("numHub.howTitle")}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("numHub.howBody")}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("numHub.exampleA")}
              </p>
              <div className="mt-3 font-mono text-base text-foreground">
                <p>24-08-1999</p>
                <p className="mt-2">2 + 4 = 6</p>
                <p className="mt-2 text-[color:var(--gold)]">{t("numHub.colMulank")} = 6</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("numHub.exampleB")}
              </p>
              <div className="mt-3 font-mono text-base text-foreground">
                <p>17-11-1987</p>
                <p className="mt-2">1 + 7 = 8</p>
                <p className="mt-2 text-[color:var(--gold)]">{t("numHub.colMulank")} = 8</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{t("numHub.overviewTitle")}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {mulankOverview.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t("numHub.numberLabel")}
                </p>
                <h3 className="mt-2 font-display text-3xl text-[color:var(--gold)]">
                  {item.number}
                </h3>
                <p className="mt-3 text-base sm:text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{t("numHub.planetPrefix")}</span>{" "}
                  {t(`lnum.p${item.number}.planet` as TranslationKey)}
                </p>
                <p className="mt-2 text-base sm:text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{t("numHub.personalityPrefix")}</span>{" "}
                  {t(`numHub.row${item.number}Desc` as TranslationKey)}
                </p>
                <Link
                  to="/numerology/$slug"
                  params={{ slug: `mulank-${item.number}` }}
                  className="mt-4 inline-flex min-h-12 sm:min-h-0 items-center gap-2 text-sm sm:text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] hover:text-[color:var(--gold)]"
                >
                  {t("numHub.readLinkPrefix")} {item.number} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{t("numHub.vsTitle")}</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left text-sm text-muted-foreground">
              <thead className="bg-white/[0.03] text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold)]">
                <tr>
                  <th className="px-4 py-3">{t("numHub.colAspect")}</th>
                  <th className="px-4 py-3">{t("numHub.colMulank")}</th>
                  <th className="px-4 py-3">{t("numHub.colBhagyank")}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [t("numHub.vsR1A"), t("numHub.vsR1B"), t("numHub.vsR1C")],
                  [t("numHub.vsR2A"), t("numHub.vsR2B"), t("numHub.vsR2C")],
                  [t("numHub.vsR3A"), t("numHub.vsR3B"), t("numHub.vsR3C")],
                  [t("numHub.vsR4A"), t("numHub.vsR4B"), t("numHub.vsR4C")],
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
          <h2 className="font-display text-3xl sm:text-4xl">{t("numHub.pyTitle")}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("numHub.pyBody")}
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{t("numHub.planetsTitle")}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("numHub.planetsP1")}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("numHub.planetsP2")}
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{t("numHub.tarotComboTitle")}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("numHub.tarotComboBody")}
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{t("common.faqHeading")}</h2>
          <div className="mt-5">
            <FAQAccordion items={mulankFaqs} />
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{t("numHub.relatedTitle")}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                to: "/guide/numerology" as const,
                title: t("numHub.rel1Title"),
                body: t("numHub.rel1Body"),
              },
              {
                to: "/bhagyank-calculator" as const,
                title: t("numHub.rel2Title"),
                body: t("numHub.rel2Body"),
              },
              {
                to: "/namank-calculator" as const,
                title: t("numHub.rel3Title"),
                body: t("numHub.rel3Body"),
              },
              {
                to: "/guide/mulank-vs-bhagyank" as const,
                title: t("numHub.rel4Title"),
                body: t("numHub.rel4Body"),
              },
              {
                to: "/numerology/$slug" as const,
                params: { slug: "life-path-1" },
                title: t("numHub.rel5Title"),
                body: t("numHub.rel5Body"),
              },
              {
                to: "/numerology/$slug" as const,
                params: { slug: "master-number-11" },
                title: t("numHub.rel6Title"),
                body: t("numHub.rel6Body"),
              },
              {
                to: "/numerology/compatibility" as const,
                title: t("lfooter.n3"),
                body: t("mulankHub.bannerMatrix"),
              },
              {
                to: "/numerology/mulank" as const,
                title: t("lhome.triad1Title"),
                body: t("lhome.triad1Body"),
              },
              {
                to: "/numerology/bhagyank" as const,
                title: t("lhome.triad2Title"),
                body: t("lhome.triad2Body"),
              },
              {
                to: "/numerology/namank" as const,
                title: t("lhome.triad3Title"),
                body: t("lhome.triad3Body"),
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

        <AuthorCard
          published="2026-07-15"
          lastUpdated="2026-11-18"
          category={t("numHub.headerKicker")}
          readingTime={`14 ${t("common.minRead")}`}
        />
      </section>
    </AppShell>
  );
}
