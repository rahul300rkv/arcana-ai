import { useMemo } from "react";
import { Link } from "@/components/LocalizedLink";
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
} from "@/components/icons";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { AuthorCard } from "@/components/AuthorCard";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { getBcp47, useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";

export function GuideIndexScreen() {
  const t = useTranslate();
  const [language] = useLanguage();

  const bcp47 = getBcp47(language);
  const formatUtcDate = (iso: string) =>
    new Intl.DateTimeFormat(bcp47, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${iso}T00:00:00Z`));

  const guides = useMemo(
    () => [
      {
        to: "/guide/tarot-card-meanings" as const,
        icon: BookOpen,
        title: t("guideHub.g1Title"),
        body: t("guideHub.g1Body"),
        readingMinutes: 16,
        anchor: "tarot-card-meanings",
      },
      {
        to: "/guide/tarot-spreads" as const,
        icon: LayoutGrid,
        title: t("guideHub.g2Title"),
        body: t("guideHub.g2Body"),
        readingMinutes: 10,
        anchor: "tarot-spreads",
      },
      {
        to: "/guide/numerology" as const,
        icon: Hash,
        title: t("guideHub.g3Title"),
        body: t("guideHub.g3Body"),
        readingMinutes: 9,
        anchor: "numerology-guide",
      },
      {
        to: "/guide/tarot-for-beginners" as const,
        icon: GraduationCap,
        title: t("guideHub.g4Title"),
        body: t("guideHub.g4Body"),
        readingMinutes: 14,
        anchor: "tarot-for-beginners",
      },
      {
        to: "/what-do-reversed-tarot-cards-mean" as const,
        icon: RotateCcw,
        title: t("guideHub.g5Title"),
        body: t("guideHub.g5Body"),
        readingMinutes: 9,
        anchor: "reversed-tarot-cards",
      },
      {
        to: "/major-arcana-tarot-cards-meanings" as const,
        icon: Star,
        title: t("guideHub.g6Title"),
        body: t("guideHub.g6Body"),
        readingMinutes: 18,
        anchor: "major-arcana-meanings",
      },
      {
        to: "/guide/celtic-cross-guide" as const,
        icon: Cross,
        title: t("guideHub.g7Title"),
        body: t("guideHub.g7Body"),
        readingMinutes: 11,
        anchor: "celtic-cross-guide",
      },
      {
        to: "/guide/mulank-vs-bhagyank" as const,
        icon: Scale,
        title: t("guideHub.g8Title"),
        body: t("guideHub.g8Body"),
        readingMinutes: 11,
        anchor: "mulank-vs-bhagyank",
      },
    ],
    [t],
  );

  const faqs = useMemo(
    () => [
      { question: t("guideHub.faq1Q"), answer: t("guideHub.faq1A") },
      { question: t("guideHub.faq2Q"), answer: t("guideHub.faq2A") },
      { question: t("guideHub.faq3Q"), answer: t("guideHub.faq3A") },
      { question: t("guideHub.faq4Q"), answer: t("guideHub.faq4A") },
    ],
    [t],
  );

  const homePath = localizePath("/", language);
  const numerologyPath = localizePath("/numerology", language);

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-5xl px-4 pb-24 pt-36 sm:pt-40">
        <Breadcrumb items={[{ label: t("guideHub.crumb") }]} />
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-white/[0.03] px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[color-mix(in_oklab,var(--gold)_90%,white)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_90%,white)]">
              {t("guideHub.eyebrow")}
            </span>
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-6xl">
            {t("guideHub.title1")} <span className="aurora-text">{t("guideHub.title2")}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t("guideHub.intro")}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              {t("common.published")} <time dateTime="2026-07-15">{formatUtcDate("2026-07-15")}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              {t("common.lastUpdated")} <time dateTime="2026-11-16">{formatUtcDate("2026-11-16")}</time>
            </span>
          </div>
        </div>

        <nav
          aria-label={t("guideHub.crumb")}
          className="mt-10 rounded-2xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-white/[0.02] p-4 sm:p-5"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="mr-2 text-[color:var(--gold)]">{t("guideHub.jumpTo")}</span>
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
                      <span>{t("guideHub.readingTime")}</span>
                      <span className="text-[color:var(--gold)]">
                        {g.readingMinutes} {t("guideHub.min")}
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-xl sm:text-2xl text-foreground transition-colors duration-300 group-hover:text-[color-mix(in_oklab,var(--gold)_90%,white)]">
                      {g.title}
                    </h2>
                    <p className="mt-2 text-base sm:text-sm leading-relaxed text-muted-foreground">
                      {g.body}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-xs uppercase tracking-widest text-[color-mix(in_oklab,var(--gold)_80%,white)] opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                      <span>{t("guideHub.readGuide")}</span>
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
                {t("guideHub.curriculumEye")}
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
                {t("guideHub.curriculumTitle")}
              </h2>
              <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                {t("guideHub.curriculumP1")}
              </p>
              <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                {t("guideHub.curriculumP2")}
              </p>
            </div>

            <div className="grid gap-5 border-t border-white/10 pt-6 md:grid-cols-3">
              <div>
                <h3 className="font-display text-lg text-foreground">{t("guideHub.stage1Title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t("guideHub.stage1Desc")}
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">{t("guideHub.stage2Title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t("guideHub.stage2Desc")}
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground">{t("guideHub.stage3Title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t("guideHub.stage3Desc")}
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              {t("guideHub.combineTitle")}
            </h2>
            <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {t("guideHub.combineP1")}
            </p>
            <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {t("guideHub.combineP2")}
            </p>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              {t("guideHub.glossaryTitle")}
            </h2>
            <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {t("guideHub.glossaryIntro")}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-base sm:text-sm text-muted-foreground">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">{t("guideHub.gl1Title")}</h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  {t("guideHub.gl1Desc")}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">{t("guideHub.gl2Title")}</h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  {t("guideHub.gl2Desc")}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">{t("guideHub.gl3Title")}</h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  {t("guideHub.gl3Desc")}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <h3 className="font-display text-base text-foreground">{t("guideHub.gl4Title")}</h3>
                <p className="mt-1.5 text-sm sm:text-xs leading-relaxed">
                  {t("guideHub.gl4Desc")}
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">
              {t("common.faqHeading")}
            </h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>

        <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {t("common.relatedArticles")}
            </p>
            <ul className="mt-3 space-y-2 text-base sm:text-sm text-muted-foreground">
              <li>
                <Link
                  to={numerologyPath}
                  className="inline-flex min-h-11 sm:min-h-0 items-center underline underline-offset-4 hover:text-foreground"
                >
                  {t("guideHub.relMulank")}
                </Link>
              </li>
              <li>
                <Link
                  to="/tarot/$slug"
                  params={{ slug: "the-fool" }}
                  className="inline-flex min-h-11 sm:min-h-0 items-center underline underline-offset-4 hover:text-foreground"
                >
                  {t("guideHub.relFool")}
                </Link>
              </li>
              <li>
                <Link
                  to="/bhagyank-calculator"
                  className="inline-flex min-h-11 sm:min-h-0 items-center underline underline-offset-4 hover:text-foreground"
                >
                  {t("guideHub.relBhagyank")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {t("common.prevNext")}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Link
                to={homePath}
                className="inline-flex min-h-11 sm:min-h-0 items-center rounded-full border border-white/10 px-4 py-2 sm:py-1.5 text-muted-foreground hover:text-foreground"
              >
                {t("guideHub.prevHome")}
              </Link>
              <Link
                to={numerologyPath}
                className="inline-flex min-h-11 sm:min-h-0 items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] px-4 py-2 sm:py-1.5 text-[color:var(--gold)]"
              >
                {t("guideHub.nextNum")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <AuthorCard
            published="2026-07-15"
            lastUpdated="2026-11-16"
            category={t("lhome.authorCat")}
            readingTime={`8 ${t("common.minRead")}`}
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            to={homePath}
            className="inline-flex min-h-12 sm:min-h-0 items-center gap-1.5 text-base sm:text-sm text-muted-foreground underline underline-offset-4 transition-colors duration-200 hover:text-foreground"
          >
            {t("privacy.back")}
          </Link>
        </div>
        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
