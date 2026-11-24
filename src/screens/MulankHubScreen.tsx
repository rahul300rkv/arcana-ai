import { useMemo } from "react";
import { Link } from "@/components/LocalizedLink";
import { BookOpen, Calculator, Compass, Globe, HelpCircle, Sparkles } from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { MULANK_PAGES, MULANK_UPDATED } from "@/data/mulank";
import { setLanguage, useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";
import { SITE_URL } from "@/lib/site";

export function MulankHubScreen() {
  const t = useTranslate();
  const [language] = useLanguage();

  const faqs = useMemo(
    () => [
      { question: t("numHub.faq1Q"), answer: t("numHub.faq1A") },
      { question: t("numHub.faq2Q"), answer: t("numHub.faq2A") },
      { question: t("numHub.faq4Q"), answer: t("numHub.faq4A") },
      { question: t("numHub.faq5Q"), answer: t("numHub.faq5A") },
      { question: t("numHub.faq6Q"), answer: t("numHub.faq6A") },
      { question: t("numHub.faq7Q"), answer: t("numHub.faq7A") },
    ],
    [t],
  );

  const numerologyPath = localizePath("/numerology", language);
  const mulankPath = localizePath("/numerology/mulank", language);

  return (
    <ArticleLayout
      crumbs={[
        { label: t("numerology.navLabel"), to: numerologyPath },
        { label: t("mulankHub.crumb") },
      ]}
      eyebrow={t("mulankHub.eyebrow")}
      title={t("mulankHub.title")}
      intro={t("mulankHub.intro")}
      url={`${SITE_URL}${mulankPath}`}
      updated={MULANK_UPDATED}
      readingMinutes={9}
      wordCount={1400}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-5xl aurora-text">1–9</span>
        </GlassCard>
      }
      afterHeader={
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3.5 text-xs">
          <span className="text-muted-foreground">
            {t("mulankHub.bannerText")}
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/hi/numerology/mulank"
              onClick={() => setLanguage("hi")}
              className="inline-flex items-center gap-1.5 font-semibold text-[var(--gold)] hover:underline"
            >
              <Globe className="h-3.5 w-3.5" aria-hidden />
              {t("lnav.hindiHub")} (/hi)
            </Link>
            <Link
              to="/numerology/compatibility"
              className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-[var(--gold)] hover:underline"
            >
              {t("mulankHub.bannerMatrix")} →
            </Link>
          </div>
        </div>
      }
    >
      <ContentSection
        id="what-is-mulank"
        title={t("mulankHub.whatTitle")}
        icon={BookOpen}
        paragraphs={[
          t("mulankHub.whatP1"),
          t("mulankHub.whatP2"),
          t("mulankHub.whatP3"),
        ]}
      />

      <ContentSection
        id="how-to-calculate"
        title={t("mulankHub.howTitle")}
        icon={Calculator}
        paragraphs={[t("mulankHub.howP1"), t("mulankHub.howP2")]}
      >
        <GlassCard className="p-6">
          <p className="text-sm text-muted-foreground">{t("mulankHub.exampleIntro")}</p>
          <p className="mt-3 font-display text-xl aurora-text">23 → 2 + 3 = 5</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("mulankHub.exampleDesc")}
          </p>
          <Link
            to={numerologyPath}
            className="mt-4 inline-flex min-h-12 items-center text-sm text-[var(--gold)] hover:underline"
          >
            {t("mulankHub.autoCalcLink")} →
          </Link>
        </GlassCard>
      </ContentSection>

      <ContentSection id="all-numbers" title={t("mulankHub.allTitle")} icon={Compass}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {MULANK_PAGES.map((p) => (
            <li key={p.slug}>
              <Link to="/numerology/$slug" params={{ slug: p.slug }} className="block h-full">
                <GlassCard className="flex h-full items-start gap-4 p-5">
                  <span className="font-display text-3xl aurora-text">{p.number}</span>
                  <span className="min-w-0">
                    <span className="block font-display text-base">
                      {t("mulankHub.crumb")} {p.number}: {t(`lnum.p${p.number}.name` as `lnum.p${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}.name`)}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {t("mulankHub.bornOnPrefix")} {p.dates.join(", ")} · {t(`lnum.p${p.number}.planet` as `lnum.p${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}.planet`)}
                    </span>
                  </span>
                </GlassCard>
              </Link>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection
        id="how-to-use"
        title={t("mulankHub.howUseTitle")}
        icon={Sparkles}
        paragraphs={[
          t("mulankHub.howUseP1"),
          t("mulankHub.howUseP2"),
          t("mulankHub.howUseP3"),
        ]}
      />

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={faqs} />
      </ContentSection>

      <KeepExploring
        links={
          [
            {
              to: numerologyPath,
              label: t("numHub.rel1Title"),
              blurb: t("numHub.rel1Body"),
            },
            {
              to: "/bhagyank-calculator",
              label: t("numHub.rel2Title"),
              blurb: t("numHub.rel2Body"),
            },
            {
              to: "/guide/numerology",
              label: t("guideHub.g3Title"),
              blurb: t("guideHub.g3Body"),
            },
            {
              to: localizePath("/tarot", language),
              label: t("tarotHub.crumb"),
              blurb: t("tarotHub.intro"),
            },
            {
              to: localizePath("/guide", language),
              label: t("guideHub.crumb"),
              blurb: t("guideHub.intro"),
            },
          ] as Array<{ to: any; label: string; blurb: string }>
        }
      />

      <CTASection
        title={t("mulankHub.ctaTitle")}
        body={t("mulankHub.ctaBody")}
        ctaLabel={t("mulankHub.ctaBtn")}
        to={numerologyPath as any}
      />
    </ArticleLayout>
  );
}
