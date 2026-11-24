import type { ReactNode } from "react";
import { CalendarClock, Clock, UserRound } from "@/components/icons";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { AuthorCard } from "@/components/AuthorCard";
import { Breadcrumb, type Crumb } from "./Breadcrumb";
import { ShareButtons } from "./ShareButtons";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { DisplayAd } from "@/components/ads/DisplayAd";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { getBcp47 } from "@/lib/language";

interface Props {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  intro: string;
  url: string;
  published?: string;
  updated: string;
  readingMinutes: number;
  wordCount: number;
  /** Optional visual shown beside the title (card art, sigil, etc.). */
  aside?: ReactNode;
  /** Optional high-contrast reference block placed directly below the H1 and aside image. */
  afterHeader?: ReactNode;
  children: ReactNode;
}

const AUTHOR = {
  name: "The AstroFree Editorial Desk",
  bio: "Written and reviewed by the AstroFree editorial team, practising tarot readers and numerologists who maintain our 78-card and 11-number reference library. Our interpretations follow the Rider-Waite-Smith tradition and classical Pythagorean numerology. Readings are for reflection and entertainment, and are not a substitute for medical, legal, or financial advice.",
};

function formatDate(iso: string, locale: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Shared shell for every tarot and numerology content page. */
export function ArticleLayout({
  crumbs,
  eyebrow,
  title,
  intro,
  url,
  published,
  updated,
  readingMinutes,
  wordCount,
  aside,
  afterHeader,
  children,
}: Props) {
  const t = useTranslate();
  const [language] = useLanguage();
  const locale = getBcp47(language);

  return (
    <div className="relative min-h-dvh">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto w-full max-w-4xl px-4 pb-24 pt-28 sm:px-6">
        <Breadcrumb items={crumbs} />

        <header className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">{eyebrow}</p>
            <h1 className="mt-3 font-display text-3xl leading-tight aurora-text sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <UserRound className="h-3.5 w-3.5" aria-hidden />
                {t("author.desk")}
              </span>
              {published && published !== updated && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarClock className="h-3.5 w-3.5" aria-hidden />
                  {t("common.published")} <time dateTime={published}>{formatDate(published, locale)}</time>
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <CalendarClock className="h-3.5 w-3.5" aria-hidden />
                {t("common.updated")} <time dateTime={updated}>{formatDate(updated, locale)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {readingMinutes} {t("common.minRead")} · {wordCount.toLocaleString(locale)} {t("common.words")}
              </span>
            </div>
            <div className="mt-5">
              <ShareButtons title={title} url={url} />
            </div>
          </div>
          {aside && <div className="mx-auto w-full max-w-[220px] sm:mx-0">{aside}</div>}
        </header>

        {afterHeader && <div className="mt-8">{afterHeader}</div>}

        <article className="mt-14 space-y-14">{children}</article>

        <InArticleAd />

        <div className="mt-14">
          <AuthorCard
            published={published}
            lastUpdated={updated}
            category={eyebrow}
            readingTime={`${readingMinutes} ${t("common.minRead")}`}
          />
        </div>
      </main>
      <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6">
        <DisplayAd />
      </div>
      <Footer />
    </div>
  );
}

export { AUTHOR };
