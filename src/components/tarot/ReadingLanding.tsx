import { Link } from "@tanstack/react-router";
import { Clock, Layers, Sparkles } from "lucide-react";
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
import { InArticleAd } from "@/components/ads/InArticleAd";
import type { SpreadId } from "@/lib/tarot/types";
import { getSpread } from "@/lib/tarot/spreads";

export interface ReadingLandingConfig {
  /** URL path, e.g. "/tarot/one-card". */
  path: string;
  /** The engine spread this page starts a reading with. */
  spreadId: SpreadId;
  eyebrow: string;
  h1: string;
  intro: string;
  /** 2-4 short paragraphs: what it is / how it works / when to use it. */
  sections: { id: string; title: string; paragraphs: string[] }[];
  faqs: FaqItem[];
  relatedCards: RelatedItem[];
  relatedLinks: HubLink[];
  ctaLabel: string;
}

/**
 * Shared shell for the crawlable tarot reading landing pages
 * (/tarot/one-card, /tarot/love, etc). Every CTA here routes into the same
 * existing reading engine via /reading/question?spread=<id> — no separate
 * or fake reading experience is created for SEO purposes.
 */
export function ReadingLanding({ config }: { config: ReadingLandingConfig }) {
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
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {config.intro}
        </p>

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

        <article className="mt-14 space-y-12">
          {config.sections.map((s) => (
            <ContentSection key={s.id} id={s.id} title={s.title} paragraphs={s.paragraphs} />
          ))}

          <ContentSection id="disclaimer" title="A note on responsible use" as="h3">
            <p className="text-sm leading-relaxed text-muted-foreground">
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

          <RelatedCards title="Related tarot cards" items={config.relatedCards} />
          <KeepExploring links={config.relatedLinks} />
        </article>

        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
