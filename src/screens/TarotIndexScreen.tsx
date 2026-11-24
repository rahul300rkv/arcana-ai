import { useMemo, useState } from "react";
import { Link } from "@/components/LocalizedLink";
import { Briefcase, CalendarClock, Clover, Heart, Layers, Search, Sparkles } from "@/components/icons";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { Input } from "@/components/ui/input";
import { TAROT_PAGES } from "@/data/tarot";
import { NUMEROLOGY_PAGES } from "@/data/numerology";
import { getBcp47, useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";
import { cn } from "@/lib/utils";

export const TAROT_HUB_FAQS = [
  {
    question: "Is the AI tarot reading really free?",
    answer:
      "Yes. Every reading, every spread, and the full 78-card meanings library are free, with no signup required.",
  },
  {
    question: "What's the difference between this page and the Tarot Card Meanings guide?",
    answer:
      "This page is the searchable, filterable directory of all 78 cards and the entry point for a reading. The Tarot Card Meanings guide is a faster quick-reference version for looking up a single card's meaning at a glance.",
  },
  {
    question: "Which tarot spread should I start with?",
    answer:
      "If you're new to tarot, start with a One Card or Three Card reading. Save the Celtic Cross for questions where you want real depth.",
  },
  {
    question: "Are tarot readings predictions?",
    answer:
      "No | AstroFree frames tarot as a reflective, symbolic tool for self-exploration, not a deterministic forecast or a substitute for professional advice.",
  },
];

type FilterKey = "all" | "major" | "wands" | "cups" | "swords" | "pentacles";

export function TarotIndexScreen() {
  const t = useTranslate();
  const [language] = useLanguage();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterKey>("all");

  const bcp47 = getBcp47(language);
  const formatUtcDate = (iso: string) =>
    new Intl.DateTimeFormat(bcp47, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${iso}T00:00:00Z`));

  const readingTypes = useMemo(
    () => [
      {
        to: "/tarot/one-card" as const,
        icon: Sparkles,
        label: t("tarotHub.rt1Title"),
        body: t("tarotHub.rt1Body"),
      },
      {
        to: "/tarot/three-card" as const,
        icon: Layers,
        label: t("tarotHub.rt2Title"),
        body: t("tarotHub.rt2Body"),
      },
      {
        to: "/tarot/love" as const,
        icon: Heart,
        label: t("tarotHub.rt3Title"),
        body: t("tarotHub.rt3Body"),
      },
      {
        to: "/yes-no-tarot" as const,
        icon: Clover,
        label: t("tarotHub.rt4Title"),
        body: t("tarotHub.rt4Body"),
      },
      {
        to: "/career-tarot-reading" as const,
        icon: Briefcase,
        label: t("tarotHub.rt5Title"),
        body: t("tarotHub.rt5Body"),
      },
      {
        to: "/tarot/celtic-cross" as const,
        icon: Layers,
        label: t("tarotHub.rt6Title"),
        body: t("tarotHub.rt6Body"),
      },
    ],
    [t],
  );

  const filters = useMemo(
    () =>
      [
        { key: "all", label: t("tarotHub.filterAll") },
        { key: "major", label: t("tarotHub.filterMajor") },
        { key: "wands", label: t("tarotHub.filterWands") },
        { key: "cups", label: t("tarotHub.filterCups") },
        { key: "swords", label: t("tarotHub.filterSwords") },
        { key: "pentacles", label: t("tarotHub.filterPentacles") },
      ] as const,
    [t],
  );

  const faqs = useMemo(
    () => [
      { question: t("tarotHub.faq1Q"), answer: t("tarotHub.faq1A") },
      { question: t("tarotHub.faq2Q"), answer: t("tarotHub.faq2A") },
      { question: t("tarotHub.faq3Q"), answer: t("tarotHub.faq3A") },
      { question: t("tarotHub.faq4Q"), answer: t("tarotHub.faq4A") },
    ],
    [t],
  );

  const cards = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TAROT_PAGES.filter((p) => {
      if (filter === "major" && p.arcana !== "major") return false;
      if (filter !== "all" && filter !== "major" && p.suit !== filter) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.cardKeywords.some((k) => k.toLowerCase().includes(q)) ||
        p.archetype.toLowerCase().includes(q)
      );
    });
  }, [query, filter]);

  return (
    <div className="relative min-h-dvh">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-28 sm:px-6">
        <Breadcrumb items={[{ label: t("tarotHub.crumb") }]} />

        <header>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" aria-hidden />
            {t("tarotHub.badge")}
          </span>
          <h1 className="mt-4 font-display text-3xl leading-tight aurora-text sm:text-5xl">
            {t("tarotHub.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t("tarotHub.intro")}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              {t("common.published")} <time dateTime="2026-07-15">{formatUtcDate("2026-07-15")}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              {t("common.lastUpdated")} <time dateTime="2026-11-16">{formatUtcDate("2026-11-16")}</time>
            </span>
          </div>
          <div className="mt-6">
            <Link to={localizePath("/reading", language)}>
              <GoldButton size="lg">
                <Sparkles className="h-4 w-4" /> {t("tarotHub.cta")}
              </GoldButton>
            </Link>
          </div>
        </header>

        <section aria-labelledby="reading-types-heading" className="mt-12">
          <h2
            id="reading-types-heading"
            className="font-display text-xl text-foreground sm:text-2xl"
          >
            {t("tarotHub.chooseTitle")}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {readingTypes.map((r) => (
              <li key={r.to}>
                <Link to={r.to} className="group block h-full">
                  <GlassCard className="h-full p-3.5 transition-transform duration-300 group-hover:-translate-y-1">
                    <r.icon className="h-4 w-4 text-[var(--gold)]" strokeWidth={1.5} aria-hidden />
                    <span className="mt-2 block font-display text-sm">{r.label}</span>
                    <span className="mt-1 block text-[11px] leading-snug text-muted-foreground">
                      {r.body}
                    </span>
                  </GlassCard>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            {t("tarotHub.seeSpreadsPrefix")}{" "}
            <Link
              to="/guide/tarot-spreads"
              className="underline underline-offset-4 hover:text-foreground"
            >
              {t("tarotHub.seeSpreadsLink")}
            </Link>
            .
          </p>
        </section>

        <div className="mt-12 flex flex-col gap-4">
          <h2 className="font-display text-xl text-foreground sm:text-2xl">
            {t("tarotHub.browseTitle")}
          </h2>
          <div className="relative max-w-md">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("tarotHub.searchPlaceholder")}
              aria-label={t("tarotHub.searchAria")}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={cn(
                  "inline-flex min-h-12 sm:min-h-9 items-center rounded-full px-4 py-2 sm:py-1.5 text-sm sm:text-xs transition",
                  filter === f.key
                    ? "bg-[linear-gradient(135deg,var(--gold-soft),var(--gold)_55%,#cbb38b)] text-primary-foreground shadow-glow-gold"
                    : "glass text-muted-foreground hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            {t("tarotHub.showingPrefix")} {cards.length} {t("tarotHub.showingOf")} {TAROT_PAGES.length}{" "}
            {t("tarotHub.showingSuffix")}
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {cards.map((p) => (
            <li key={p.slug}>
              <Link to="/tarot/$slug" params={{ slug: p.slug }} className="block h-full">
                <GlassCard className="h-full p-3">
                  <img
                    src={p.image}
                    alt={`${p.name} (${p.arcana === "major" ? "Major Arcana" : `${p.suit ? p.suit.charAt(0).toUpperCase() + p.suit.slice(1) : "Minor"} Suit`}) Rider-Waite-Smith tarot card illustration: ${p.cardKeywords.slice(0, 3).join(", ")}`}
                    loading="lazy"
                    decoding="async"
                    width={200}
                    height={300}
                    className="aspect-[2/3] w-full rounded-lg object-cover"
                  />
                  <h2 className="mt-3 font-display text-sm sm:text-base">{p.name}</h2>
                  <p className="mt-1 line-clamp-2 text-[11px] text-muted-foreground">
                    {p.cardKeywords.join(", ")}
                  </p>
                </GlassCard>
              </Link>
            </li>
          ))}
        </ul>

        {cards.length === 0 && (
          <p className="mt-10 text-sm text-muted-foreground">
            {t("tarotHub.noMatch")}
          </p>
        )}

        <section aria-labelledby="numbers-heading" className="mt-16">
          <h2 id="numbers-heading" className="font-display text-2xl aurora-text sm:text-3xl">
            {t("tarotHub.numbersHeading")}
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {NUMEROLOGY_PAGES.map((n) => (
              <li key={n.slug}>
                <Link to="/numerology/$slug" params={{ slug: n.slug }}>
                  <GlassCard className="p-4">
                    <span className="block font-display text-lg text-[var(--gold)]">{n.label}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{n.archetype}</span>
                  </GlassCard>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 rounded-3xl liquid-chrome-card p-8 sm:p-12 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              {t("tarotHub.treatiseEye")}
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              {t("tarotHub.treatiseTitle")}
            </h2>
            <p className="mt-3 text-base sm:text-sm text-muted-foreground leading-relaxed">
              {t("tarotHub.treatiseSub")}
            </p>
          </div>

          <div className="space-y-6 text-base sm:text-[15px] text-muted-foreground leading-relaxed pt-4">
            <div>
              <h3 className="font-display text-xl text-foreground mb-2">{t("tarotHub.t1Title")}</h3>
              <p>{t("tarotHub.t1Body")}</p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-2">{t("tarotHub.t2Title")}</h3>
              <p>{t("tarotHub.t2Body")}</p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-2">{t("tarotHub.t3Title")}</h3>
              <p>{t("tarotHub.t3Body")}</p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-2">{t("tarotHub.t4Title")}</h3>
              <p>{t("tarotHub.t4Body")}</p>
            </div>
          </div>
        </section>

        <ContentSection id="faq" title={t("common.faqHeading")} className="mt-16">
          <FAQAccordion items={faqs} />
        </ContentSection>

        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
