import { useLoaderData } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Compass,
  HeartHandshake,
  HelpCircle,
  Lightbulb,
  Sun,
} from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { CardFront } from "@/components/tarot/CardFront";
import {
  getCombinationsForCard,
  type TarotCombinationProfile,
} from "@/data/tarot-combinations";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { getLocalizedCardNameBySlug, getLocalizedElement } from "@/locales/card-terms";
import { COMBOS_I18N } from "@/locales/guides-tarot-i18n";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";

export function TarotCombinationScreen() {
  const { combo } = useLoaderData({ strict: false }) as { combo: TarotCombinationProfile };
  const [language] = useLanguage();
  const t = useTranslate();
  const ui = COMBOS_I18N[language];
  const path = `/tarot/combinations/${combo.slug}`;

  const locNameA = getLocalizedCardNameBySlug(combo.cardASlug, combo.cardA.name, language);
  const locNameB = getLocalizedCardNameBySlug(combo.cardBSlug, combo.cardB.name, language);
  const locElemA = getLocalizedElement(combo.cardA.element, language);
  const locElemB = getLocalizedElement(combo.cardB.element, language);

  const related = Array.from(
    new Map(
      [
        ...getCombinationsForCard(combo.cardASlug),
        ...getCombinationsForCard(combo.cardBSlug),
      ]
        .filter((c) => c.slug !== combo.slug)
        .map((c) => [c.slug, c]),
    ).values(),
  ).slice(0, 6);

  return (
    <ArticleLayout
      crumbs={[
        { label: t("nav.tarot"), to: "/tarot" },
        { label: BREADCRUMB_LABELS.combinations[language], to: "/tarot/combinations" },
        { label: `${locNameA} + ${locNameB}` },
      ]}
      eyebrow={`${ui.pairEyebrowPrefix} · ${combo.themeBadge}`}
      title={language === "en" ? combo.headline : `${locNameA} + ${locNameB} — ${combo.themeBadge}`}
      intro={combo.quickSummary}
      url={`${SITE_URL}${path}`}
      updated={combo.updated}
      readingMinutes={5}
      wordCount={780}
      aside={
        <div className="grid grid-cols-2 gap-2.5 w-full max-w-[260px]">
          <div className="aspect-[2/3]">
            <CardFront
              eager
              card={{
                id: combo.cardA.id,
                name: combo.cardA.name,
                arcana: combo.cardA.arcana,
                image: combo.cardA.image,
                keywords: combo.cardA.cardKeywords,
                suit: combo.cardA.suit as any,
              }}
            />
          </div>
          <div className="aspect-[2/3]">
            <CardFront
              eager
              card={{
                id: combo.cardB.id,
                name: combo.cardB.name,
                arcana: combo.cardB.arcana,
                image: combo.cardB.image,
                keywords: combo.cardB.cardKeywords,
                suit: combo.cardB.suit as any,
              }}
            />
          </div>
        </div>
      }
      afterHeader={
        <section
          aria-label={ui.pairSummaryAria}
          className="rounded-2xl border border-[color:var(--gold)]/35 bg-white/[0.03] p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
              {t("calcUi.combinedYesNo")} {combo.yesNoCombined.label}
            </span>
            <Link
              to="/tarot/combinations"
              className="text-xs font-semibold text-[color:var(--gold)] underline underline-offset-4"
            >
              {ui.compareOther}
            </Link>
          </div>
          <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {locNameA} ({locElemA})
              </dt>
              <dd className="mt-1 text-foreground">
                {combo.cardA.uprightKeywords.join(", ")}
              </dd>
              <Link
                to="/tarot/$slug"
                params={{ slug: combo.cardASlug }}
                className="mt-1 inline-block text-xs text-[color:var(--gold)] hover:underline"
              >
                {locNameA} →
              </Link>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {locNameB} ({locElemB})
              </dt>
              <dd className="mt-1 text-foreground">
                {combo.cardB.uprightKeywords.join(", ")}
              </dd>
              <Link
                to="/tarot/$slug"
                params={{ slug: combo.cardBSlug }}
                className="mt-1 inline-block text-xs text-[color:var(--gold)] hover:underline"
              >
                {locNameB} →
              </Link>
            </div>
          </dl>
        </section>
      }
    >
      <ContentSection
        id="combined-meaning"
        title={`${locNameA} + ${locNameB} (${ui.meanTogetherSuffix})`}
        icon={BookOpen}
        paragraphs={combo.combinedMeaning}
      />

      <ContentSection id="card-of-the-day-pair" title={ui.cardOfDayPairTitle} icon={Sun}>
        <GlassCard className="p-6">
          <p className="text-base leading-relaxed text-foreground/90">{combo.cardOfTheDayNote}</p>
        </GlassCard>
      </ContentSection>

      <ContentSection
        id="love"
        title={t("tarotUi.loveHeading")}
        icon={HeartHandshake}
        paragraphs={combo.loveMeaning}
      />

      <ContentSection
        id="career"
        title={t("tarotUi.careerHeading")}
        icon={Briefcase}
        paragraphs={combo.careerMeaning}
      />

      <ContentSection
        id="yes-no"
        title={`${t("calcUi.combinedYesNo")} ${combo.yesNoCombined.label}`}
        icon={Compass}
      >
        <GlassCard className="p-6">
          <p className="font-display text-2xl aurora-text">{combo.yesNoCombined.label}</p>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            {combo.yesNoCombined.explanation}
          </p>
        </GlassCard>
      </ContentSection>

      <ContentSection id="advice" title={t("calcUi.practicalGuidance")} icon={Lightbulb}>
        <ul className="space-y-3">
          {combo.advice.map((item) => (
            <li key={item} className="flex gap-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
              {item}
            </li>
          ))}
        </ul>
      </ContentSection>

      {related.length > 0 && (
        <section aria-labelledby="related-combos-heading" className="scroll-mt-24">
          <h2 id="related-combos-heading" className="font-display text-2xl aurora-text sm:text-3xl">
            {t("calcUi.relatedCombos")}
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/tarot/combinations/$slug"
                  params={{ slug: r.slug }}
                  className="block h-full"
                >
                  <GlassCard className="flex h-full flex-col justify-between p-4">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                        {r.themeBadge}
                      </span>
                      <span className="mt-1 block font-display text-base text-foreground">
                        {getLocalizedCardNameBySlug(r.cardASlug, r.cardA.name, language)} +{" "}
                        {getLocalizedCardNameBySlug(r.cardBSlug, r.cardB.name, language)}
                      </span>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs text-[color:var(--gold)]">
                      {t("calcUi.readCombo")} <ArrowRight className="h-3 w-3" aria-hidden />
                    </span>
                  </GlassCard>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={combo.faqs} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/tarot/combinations",
            label: t("calcUi.comboCrumb"),
            blurb: t("calcUi.comboHeading"),
          },
          {
            to: "/tarot/one-card",
            label: t("tarotHub.rt1Title"),
            blurb: t("tarotHub.rt1Body"),
          },
          {
            to: "/yes-no-tarot",
            label: t("tarotHub.rt4Title"),
            blurb: t("tarotHub.rt4Body"),
          },
          {
            to: "/numerology/compatibility",
            label: BREADCRUMB_LABELS.compatibility[language],
            blurb: t("calcUi.compatHeading"),
          },
        ]}
      />

      <CTASection
        title={ui.ctaPairTitle}
        body={ui.ctaPairBody}
        ctaLabel={t("tarotUi.startFreeReading")}
        to="/reading"
      />
    </ArticleLayout>
  );
}
