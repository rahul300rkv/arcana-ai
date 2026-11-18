import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
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

function getBhagyankMeta(value: BhagyankValue) {
  if (value === 11 || value === 22 || value === 33) {
    return {
      planet: MASTER_NUMBER_META[value].planet,
      friendly: MASTER_NUMBER_META[value].friendly,
      archetype: MASTER_NUMBER_META[value].label,
      guideLabel:
        value === 33 ? "Open Full Bhagyank Calculator" : `Read ${MASTER_NUMBER_META[value].label} Guide`,
      guideTo: (value === 33 ? "/bhagyank-calculator" : "/numerology/$slug") as
        | "/bhagyank-calculator"
        | "/numerology/$slug",
      guideSlug: value === 33 ? undefined : MASTER_NUMBER_META[value].slug,
    };
  }
  const row = getMulankMeta(value as RootNumber);
  return {
    planet: row.planet,
    friendly: row.friendly,
    archetype: row.archetype,
    guideLabel: `Read Life Path / Bhagyank ${value} Guide`,
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

function dayLookupFormula(day: number): string {
  if (day <= 9) return `${day} (single digit)`;
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
      bhagyankMeta: getBhagyankMeta(bhagyank.value),
    };
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
                  Mulank (Psychic)
                </span>
                <span className="font-display text-xl text-[color:var(--gold)]">
                  {preview.mulankValue}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Planet: <span className="text-foreground">{preview.mulankMeta.planet}</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Friendly:{" "}
                <span className="text-foreground">{preview.mulankMeta.friendly.join(", ")}</span>
              </p>
              <MathTrail value={preview.day} className="mt-1.5" />
              <Link
                to="/numerology/$slug"
                params={{ slug: `mulank-${preview.mulankValue}` }}
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[color:var(--gold)] hover:underline"
              >
                Mulank {preview.mulankValue} Guide <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="border-t border-white/10 pt-3 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Bhagyank (Destiny)
                </span>
                <span className="font-display text-xl text-[color:var(--gold)]">
                  {preview.bhagyank.value}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Planet: <span className="text-foreground">{preview.bhagyankMeta.planet}</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Friendly:{" "}
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

export function NumerologyIndexScreen() {
  const t = useTranslate();
  const [language] = useLanguage();
  const search = useSearch({ strict: false }) as { dob?: string; period?: string | number };
  const navigate = useNavigate({ from: "/numerology/" });
  const linkedPeriod = search.period === undefined ? undefined : String(search.period);

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
      question: "What is Mulank called in English?",
      answer:
        "In English numerology, Mulank (Moolank) is called the Psychic Number, Birth Number, Driver Number, or Radical Number. It reflects your core temperament based solely on the calendar day of your birth.",
    },
    {
      question: "How to calculate Mulank and Bhagyank?",
      answer:
        "To calculate Mulank, sum only the digits of your birth day (1–31) until you get a single digit between 1 and 9 (for example, born on the 24th gives 2 + 4 = 6). To calculate Bhagyank (Destiny Number), add every digit of your complete date of birth (DD + MM + YYYY) and reduce to a single digit 1–9 or Master Number 11, 22, or 33.",
    },
    {
      question: "Mulank kaise nikale?",
      answer:
        "Mulank nikalne ke liye sirf apni janam tarikh (birth date 1–31) ke anko ko tab tak jodein jab tak 1 se 9 ke beech ek single digit na aa jaye. Jaise agar janam 19 tarikh ko hua hai toh 1 + 9 = 10, phir 1 + 0 = 1 — yani aapka Mulank 1 hai.",
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
        "No single Mulank is universally lucky or unlucky. Each number comes with unique strengths, challenges, and timing patterns. The more useful question is: which strengths and lessons does this number highlight for you?",
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
  ];

  const mulankOverview = MULANK_MASTER_CHART;
  const birthDateLookup = useMemo(
    () =>
      Array.from({ length: 31 }, (_, i) => {
        const day = i + 1;
        const mulank = reduceToSingleDigit(day);
        const row = getMulankMeta(mulank);
        return {
          day,
          mulank,
          formula: dayLookupFormula(day),
          planet: row.planet,
        };
      }),
    [],
  );

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
          <Hash className="h-3.5 w-3.5" /> Vedic Numerology · Ank Shastra
        </p>
        <h1 className="mt-2 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          <span className="aurora-text">
            Mulank &amp; Bhagyank Calculator (Check Your Psychic &amp; Destiny Number)
          </span>
        </h1>
        <p className="mt-3 max-w-3xl text-base text-muted-foreground">
          Enter your date of birth below to calculate your Mulank (Psychic Number), Bhagyank
          (Destiny / Life Path Number), Ruling Planet, Friendly Numbers, and yearly timing cycles.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden />
            Published <time dateTime="2026-07-15">15 July 2026</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden />
            Last updated <time dateTime="2026-11-18">18 November 2026</time>
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
                  Instant Mulank &amp; Bhagyank Checker
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
                    Calculate Mulank &amp; Bhagyank
                  </span>
                )}
              </GoldButton>
            </GlassCard>

            <GlassCard className="relative space-y-4 overflow-hidden">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent opacity-45" />
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--gold)]">
                Formula Summary
              </p>
              <h2 className="font-display text-xl text-foreground">
                How Mulank &amp; Bhagyank Are Calculated
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To calculate your <strong className="text-foreground">Mulank</strong> (Psychic
                Number), take only your calendar day of birth (1–31) and sum its digits until a
                single digit (1–9) remains—for example, 19 becomes 1 + 9 = 10, then 1 + 0 = 1. For{" "}
                <strong className="text-foreground">Bhagyank</strong> (Destiny Number), add all
                digits of your full birth date (DD + MM + YYYY), preserving Master Numbers 11, 22,
                and 33.
              </p>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-xs text-muted-foreground">
                <p className="font-medium text-foreground">Featured Number Guides</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  <Link
                    to="/numerology/$slug"
                    params={{ slug: "mulank-7" }}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-3.5 py-1.5 font-medium text-[color:var(--gold)] transition-colors hover:bg-[color:var(--gold)]/20"
                  >
                    Mulank 7 (Ketu) Guide <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    to="/numerology/$slug"
                    params={{ slug: "master-number-22" }}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-[color:var(--gold)]/40 hover:text-[color:var(--gold)]"
                  >
                    Master Number 22 Guide <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    to="/bhagyank-calculator"
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 font-medium text-foreground transition-colors hover:border-[color:var(--gold)]/40 hover:text-[color:var(--gold)]"
                  >
                    Bhagyank Deep Dive <ArrowRight className="h-3 w-3" />
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
                      Your Mulank &amp; Bhagyank Profile
                    </h2>
                    {source === "ai" && (
                      <span className="ml-auto rounded-full border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] px-2 py-0.5 text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
                        AI
                      </span>
                    )}
                  </div>

                  {(() => {
                    const mulankMeta = getMulankMeta(result.calculations.mulank.value as RootNumber);
                    const bhagyankMeta = bhagyankResult
                      ? getBhagyankMeta(bhagyankResult.value)
                      : null;
                    return (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/[0.06] p-4">
                          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                            Mulank (Psychic / Birth Number)
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
                              <span className="font-medium text-foreground">Ruling Planet:</span>{" "}
                              {mulankMeta.planet}
                            </p>
                            <p>
                              <span className="font-medium text-foreground">Friendly Numbers:</span>{" "}
                              {mulankMeta.friendly.join(", ")}
                            </p>
                          </div>
                          <Link
                            to="/numerology/$slug"
                            params={{ slug: `mulank-${result.calculations.mulank.value}` }}
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--gold)] hover:underline"
                          >
                            Read Mulank {result.calculations.mulank.value} Full Guide{" "}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>

                        {bhagyankResult && bhagyankMeta && (
                          <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                              Bhagyank (Destiny / Life Path)
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
                                <span className="font-medium text-foreground">Ruling Planet:</span>{" "}
                                {bhagyankMeta.planet}
                              </p>
                              <p>
                                <span className="font-medium text-foreground">
                                  Friendly Numbers:
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
                        How your numbers were calculated
                      </p>
                      <div className="mt-2 space-y-2">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Mulank = birth day reduced
                          </p>
                          <MathTrail value={dobParts.day} className="mt-1" />
                        </div>
                        {bhagyankResult && (
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Bhagyank = full birth date (DD + MM + YYYY) reduced
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

      <section className="mt-12 max-w-5xl space-y-12">
        {/* Table A: 1–31 Birth Date Lookup */}
        <div id="birth-date-lookup">
          <h2 className="font-display text-3xl sm:text-4xl">
            Mulank Lookup by Birth Date (1 to 31)
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Find your exact Mulank (Psychic / Birth Number) from any calendar birth date (1–31),
            along with its digit reduction and ruling planet.
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
                      <th className="px-3.5 py-2.5">Date</th>
                      <th className="px-3.5 py-2.5">Reduction</th>
                      <th className="px-3.5 py-2.5">Mulank</th>
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
                            Mulank {row.mulank}
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

        {/* Table B: Master Mulank 1–9 Chart */}
        <div id="master-mulank-chart">
          <h2 className="font-display text-3xl sm:text-4xl">
            Master Mulank 1–9 Chart: Planets, Friendly &amp; Enemy Numbers
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Compare all nine Mulank root numbers, their corresponding calendar dates, Vedic ruling
            planets, friendly numbers, and neutral or challenging numbers. Click any Mulank or{" "}
            <Link
              to="/numerology/$slug"
              params={{ slug: "master-number-22" }}
              className="text-[color:var(--gold)] hover:underline"
            >
              Master Number 22
            </Link>{" "}
            guide for complete traits and remedies.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full min-w-[680px] text-left text-sm text-muted-foreground">
              <thead className="bg-white/[0.04] text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold)]">
                <tr>
                  <th className="px-4 py-3">Mulank</th>
                  <th className="px-4 py-3">Birth Dates</th>
                  <th className="px-4 py-3">Ruling Planet</th>
                  <th className="px-4 py-3">Friendly Numbers</th>
                  <th className="px-4 py-3">Enemy / Neutral Numbers</th>
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
                        Mulank {row.number}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-foreground">{row.dates.join(", ")}</td>
                    <td className="px-4 py-3">{row.planet}</td>
                    <td className="px-4 py-3 text-foreground">{row.friendly.join(", ")}</td>
                    <td className="px-4 py-3">
                      <span className="text-foreground">Enemy: {row.enemy.join(", ")}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        · Neutral: {row.neutral.join(", ")}
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
                Most Searched Psychic Number
              </p>
              <h3 className="mt-1 font-display text-xl text-foreground">
                Mulank 7 Deep-Dive Guide (7, 16, 25)
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Ruled by Ketu — explore intuition, research careers, love dynamics, and remedies.
              </p>
            </Link>
            <Link
              to="/numerology/$slug"
              params={{ slug: "master-number-22" }}
              className="block rounded-2xl border border-white/15 bg-white/[0.03] p-5 transition-colors hover:border-[color:var(--gold)]/50"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--gold)]">
                Master Destiny Number
              </p>
              <h3 className="mt-1 font-display text-xl text-foreground">
                Master Number 22 Guide (The Master Builder)
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Unreduced Bhagyank 22 traits, high-impact leadership, and practical karmic balance.
              </p>
            </Link>
          </div>
        </div>

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
                <p className="mt-3 text-base sm:text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Planet:</span> {item.planet}
                </p>
                <p className="mt-2 text-base sm:text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Personality:</span>{" "}
                  {item.personality}
                </p>
                <Link
                  to="/numerology/$slug"
                  params={{ slug: `mulank-${item.number}` }}
                  className="mt-4 inline-flex min-h-12 sm:min-h-0 items-center gap-2 text-sm sm:text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] hover:text-[color:var(--gold)]"
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
          <h2 className="font-display text-3xl sm:text-4xl">
            Planetary Rulerships in Vedic Numerology (Ank Shastra)
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            One reason Vedic numerology feels distinct from purely Western number charts is its
            close tie to the nine classical planetary forces (Navagraha). In Indian tradition, each
            root number from 1 through 9 embodies the psychological strengths and shadow lessons of
            its ruling planet: Surya (Sun) governs Mulank 1 with leadership and self-reliance;
            Chandra (Moon) infuses Mulank 2 with empathy and emotional nuance; Guru (Jupiter) expands
            Mulank 3 toward teaching and optimism; Rahu lends Mulank 4 unconventional precision;
            Budha (Mercury) quickens Mulank 5 toward curiosity and adaptability; Shukra (Venus)
            harmonizes Mulank 6 around beauty and care; Ketu draws Mulank 7 into contemplation;
            Shani (Saturn) tempers Mulank 8 through patience and accountability; and Mangal (Mars)
            energizes Mulank 9 with courage and humanitarian resolve.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Understanding planetary temperament helps explain why two people with equally ambitious
            goals pursue them differently. A Mulank 1 builds momentum through visible initiative and
            autonomy, whereas a Mulank 8 achieves lasting authority through endurance, structure,
            and long-range discipline.
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl">
            Combining Mulank Numerology with Tarot Archetypes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            AstroFree pairs every single-digit numerology cycle directly with its corresponding Major
            Arcana tarot card (1 The Magician through 9 The Hermit). When you calculate your Personal
            Year or Personal Month above and then pull a Three Card or One Card tarot spread, look
            for resonance between your number theme and your drawn cards. For example, stepping into
            a Personal Month 4 (The Emperor) while drawing Pentacles or Justice reinforces a clear
            season for contracts, budgeting, and disciplined foundations rather than impulsive risk.
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
