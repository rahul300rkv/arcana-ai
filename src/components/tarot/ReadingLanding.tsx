import type { ReactNode } from "react";
import { Link } from "@/components/LocalizedLink";
import { CalendarClock, Clock, Layers, Sparkles } from "@/components/icons";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion, type FaqItem } from "@/components/content/FAQAccordion";
import { RelatedCards, type RelatedItem } from "@/components/content/RelatedCards";
import { KeepExploring, type HubLink } from "@/components/content/KeepExploring";
import { AuthorCard } from "@/components/AuthorCard";
import { InArticleAd } from "@/components/ads/InArticleAd";
import type { TarotLandingKey } from "@/data/tarot-landings";
import type { SpreadId } from "@/lib/tarot/types";
import { getLocalizedSpread, getSpread } from "@/lib/tarot/spreads";
import { getBcp47, useLanguage, useTranslate } from "@/lib/i18n";
import { getLocalizedReadingLanding } from "@/locales/spreads-i18n";

export interface ReadingSamplePosition {
  position: string;
  card: string;
  reading: string;
}

export interface ReadingSamplePull {
  question: string;
  positions: ReadingSamplePosition[];
  synthesis: string;
}

export interface SpreadPositionBreakdownItem {
  number: number;
  label: string;
  focus: string;
  description: string;
}

export interface ReadingLandingConfig {
  /** URL path, e.g. "/tarot/one-card". */
  path: string;
  /** The engine spread this page starts a reading with. */
  spreadId: SpreadId;
  eyebrow: string;
  h1: string;
  intro: string;
  published?: string;
  updated: string;
  readingTime?: string;
  /** Optional clean position-by-position breakdown displayed directly below the spread area. */
  positionsBreakdownEyebrow?: string;
  positionsBreakdownHeading?: string;
  positionsBreakdown?: SpreadPositionBreakdownItem[];
  /** Rich sections explaining mechanics, nuances, and practical framing. */
  sections: { id: string; title: string; paragraphs: string[] }[];
  /** Worked example walkthrough tailored specifically to this spread. */
  samplePull?: ReadingSamplePull;
  faqs: FaqItem[];
  relatedCards: RelatedItem[];
  relatedLinks: HubLink[];
  ctaLabel: string;
}

function formatDate(iso: string, locale: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function pathToLandingKey(path: string): TarotLandingKey {
  if (path === "/tarot/one-card") return "one-card";
  if (path === "/tarot/three-card") return "three-card";
  if (path === "/tarot/love") return "love";
  if (path === "/yes-no-tarot") return "yes-no";
  if (path === "/career-tarot-reading") return "career";
  return "celtic-cross";
}

/**
 * Shared shell for the crawlable tarot reading landing pages
 * (/tarot/one-card, /tarot/love, /career-tarot-reading, /yes-no-tarot, /tarot/celtic-cross).
 */
export function ReadingLanding({
  config,
  interactiveSlot,
  afterInteractiveSlot,
}: {
  config: ReadingLandingConfig;
  interactiveSlot?: ReactNode;
  afterInteractiveSlot?: ReactNode;
}) {
  const [language] = useLanguage();
  const t = useTranslate();
  const bcp47 = getBcp47(language);
  const localized = getLocalizedReadingLanding(pathToLandingKey(config.path), config, language, t);
  const spread = getLocalizedSpread(getSpread(localized.spreadId), t);

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-28 sm:px-6">
        <Breadcrumb items={[{ label: t("nav.tarot"), to: "/tarot" }, { label: localized.eyebrow }]} />

        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {t("tarotUi.freeAiReading")}
        </p>
        <h1 className="mt-2 font-display text-4xl leading-tight aurora-text sm:text-5xl">
          {localized.h1}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {localized.intro}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          {localized.published && localized.published !== localized.updated && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              {t("common.published")}{" "}
              <time dateTime={localized.published}>{formatDate(localized.published, bcp47)}</time>
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden />
            {t("common.lastUpdated")}{" "}
            <time dateTime={localized.updated}>{formatDate(localized.updated, bcp47)}</time>
          </span>
        </div>

        {interactiveSlot ? (
          <div className="mt-8">{interactiveSlot}</div>
        ) : (
          <GlassCard className="mt-8 flex flex-wrap items-center justify-between gap-4 p-6">
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5" /> {spread.count}{" "}
                {spread.count === 1 ? t("tarotUi.cardUnit") : t("tarotUi.cardsUnit")}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> ~{spread.minutes} {t("reading.minUnit")}
              </span>
            </div>
            <Link to="/reading/question" search={{ spread: localized.spreadId }}>
              <GoldButton size="lg">
                <Sparkles className="h-4 w-4" /> {localized.ctaLabel}
              </GoldButton>
            </Link>
          </GlassCard>
        )}

        {localized.positionsBreakdown && localized.positionsBreakdown.length > 0 && (
          <section
            aria-labelledby="positions-breakdown-heading"
            className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
              {localized.positionsBreakdownEyebrow ?? t("tarotUi.spreadLayoutRef")}
            </p>
            <h2
              id="positions-breakdown-heading"
              className="mt-2 font-display text-2xl aurora-text sm:text-3xl"
            >
              {localized.positionsBreakdownHeading ?? spread.name}
            </h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {localized.positionsBreakdown.map((pos) => (
                <li
                  key={pos.number}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-base text-[color:var(--gold)]">
                      {pos.number}. {pos.label}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {pos.focus}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pos.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {afterInteractiveSlot && <div className="mt-12">{afterInteractiveSlot}</div>}

        <article className="mt-14 space-y-12">
          {localized.sections.map((s) => (
            <ContentSection key={s.id} id={s.id} title={s.title} paragraphs={s.paragraphs} />
          ))}

          {localized.samplePull && (
            <ContentSection id="worked-example" title={t("tarotUi.workedExample")}>
              <GlassCard className="space-y-5 p-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">
                    {t("tarotUi.sampleQuestion")}
                  </p>
                  <p className="mt-1 font-display text-lg text-foreground">
                    “{localized.samplePull.question}”
                  </p>
                </div>
                <div className="space-y-4">
                  {localized.samplePull.positions.map((pos) => (
                    <div
                      key={pos.position}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
                          {pos.position}
                        </span>
                        <span className="font-display text-sm text-foreground">{pos.card}</span>
                      </div>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        {pos.reading}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t("tarotUi.synthesisTakeaway")}
                  </p>
                  <p className="mt-1.5 text-base leading-relaxed text-foreground/90">
                    {localized.samplePull.synthesis}
                  </p>
                </div>
              </GlassCard>
            </ContentSection>
          )}

          <ContentSection id="disclaimer" title={t("tarotUi.responsibleTitle")} as="h3">
            <p className="text-base leading-relaxed text-muted-foreground">
              {t("tarotUi.responsibleBody")}
            </p>
          </ContentSection>

          {localized.faqs.length > 0 && (
            <ContentSection id="faq" title={t("common.faqHeading")}>
              <FAQAccordion items={localized.faqs} />
            </ContentSection>
          )}

          <AuthorCard
            published={localized.published}
            lastUpdated={localized.updated}
            category={`${t("nav.tarot")} · ${localized.eyebrow}`}
            readingTime={localized.readingTime ?? `6 ${t("common.minRead")}`}
          />

          <RelatedCards title={t("tarotUi.relatedTarotCards")} items={localized.relatedCards} />
          <KeepExploring links={localized.relatedLinks} />
        </article>

        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
