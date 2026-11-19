import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { CalendarClock, Clock, Layers, Sparkles } from "lucide-react";
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
import type { SpreadId } from "@/lib/tarot/types";
import { getSpread } from "@/lib/tarot/spreads";

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

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
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
  const spread = getSpread(config.spreadId);

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-28 sm:px-6">
        <Breadcrumb items={[{ label: "Tarot", to: "/tarot" }, { label: config.eyebrow }]} />

        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Free AI tarot reading
        </p>
        <h1 className="mt-2 font-display text-4xl leading-tight aurora-text sm:text-5xl">
          {config.h1}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {config.intro}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          {config.published && config.published !== config.updated && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              Published <time dateTime={config.published}>{formatDate(config.published)}</time>
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden />
            Last updated <time dateTime={config.updated}>{formatDate(config.updated)}</time>
          </span>
        </div>

        {interactiveSlot ? (
          <div className="mt-8">{interactiveSlot}</div>
        ) : (
          <GlassCard className="mt-8 flex flex-wrap items-center justify-between gap-4 p-6">
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5" /> {spread.count} card{spread.count > 1 ? "s" : ""}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> ~{spread.minutes} min
              </span>
            </div>
            <Link to="/reading/question" search={{ spread: config.spreadId }}>
              <GoldButton size="lg">
                <Sparkles className="h-4 w-4" /> {config.ctaLabel}
              </GoldButton>
            </Link>
          </GlassCard>
        )}

        {config.positionsBreakdown && config.positionsBreakdown.length > 0 && (
          <section
            aria-labelledby="positions-breakdown-heading"
            className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
              {config.positionsBreakdownEyebrow ?? "Spread layout reference"}
            </p>
            <h2
              id="positions-breakdown-heading"
              className="mt-2 font-display text-2xl aurora-text sm:text-3xl"
            >
              {config.positionsBreakdownHeading ?? "10 Celtic Cross positions explained"}
            </h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {config.positionsBreakdown.map((pos) => (
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
          {config.sections.map((s) => (
            <ContentSection key={s.id} id={s.id} title={s.title} paragraphs={s.paragraphs} />
          ))}

          {config.samplePull && (
            <ContentSection id="worked-example" title="Worked example spread walkthrough">
              <GlassCard className="space-y-5 p-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">
                    Sample question asked
                  </p>
                  <p className="mt-1 font-display text-lg text-foreground">
                    “{config.samplePull.question}”
                  </p>
                </div>
                <div className="space-y-4">
                  {config.samplePull.positions.map((pos) => (
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
                    Synthesis takeaway
                  </p>
                  <p className="mt-1.5 text-base leading-relaxed text-foreground/90">
                    {config.samplePull.synthesis}
                  </p>
                </div>
              </GlassCard>
            </ContentSection>
          )}

          <ContentSection id="disclaimer" title="A note on responsible use" as="h3">
            <p className="text-base leading-relaxed text-muted-foreground">
              This reading is a reflective, symbolic tool for self-exploration — not a deterministic
              prediction. It is not a substitute for professional medical, legal, or financial
              advice. Use it as a prompt for your own judgement, not a replacement for it.
            </p>
          </ContentSection>

          {config.faqs.length > 0 && (
            <ContentSection id="faq" title="Frequently asked questions">
              <FAQAccordion items={config.faqs} />
            </ContentSection>
          )}

          <AuthorCard
            published={config.published}
            lastUpdated={config.updated}
            category={`Tarot Spread · ${config.eyebrow}`}
            readingTime={config.readingTime ?? "6 min read"}
          />

          <RelatedCards title="Related tarot cards" items={config.relatedCards} />
          <KeepExploring links={config.relatedLinks} />
        </article>

        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
