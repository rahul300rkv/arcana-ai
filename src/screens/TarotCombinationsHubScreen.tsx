import { useMemo, useState } from "react";
import { Link } from "@/components/LocalizedLink";
import { ArrowRight, BookOpen, Compass, HelpCircle, Sparkles } from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { CardFront } from "@/components/tarot/CardFront";
import {
  COMBINATIONS_UPDATED,
  CURATED_TAROT_COMBINATIONS,
  synthesizeTarotCombination,
  TAROT_PAGES,
} from "@/data/tarot-combinations";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { getLocalizedCardNameBySlug } from "@/locales/card-terms";
import { COMBOS_I18N } from "@/locales/guides-tarot-i18n";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";

export const COMBINATIONS_HUB_FAQS = [
  {
    question: "How do you read two tarot cards together?",
    answer:
      "Treat the first card as the root energy, mood, or opening situation, and the second card as the modifier, direction, or outcome shaping it. Notice how their elements interact: for example, Water (Cups) cools or deepens Fire (Wands), while Air (Swords) sharpens hidden intuition from Major Arcana cards like The High Priestess.",
  },
  {
    question: "Can I check any two cards from the 78-card deck here?",
    answer:
      "Yes. Use the interactive Two-Card Combination Explorer at the top of this page to select any two cards from all 78 Major and Minor Arcana cards for instant combined symbolism, love guidance, career insight, and combined Yes or No leaning.",
  },
  {
    question: "What does it mean when The High Priestess appears with Ten of Swords?",
    answer:
      "The High Priestess with Ten of Swords signals quiet intuitive confirmation that a painful cycle or hidden doubt has finally reached complete closure. Nothing more needs to be forced open; rest in quiet discernment as dawn clears the old weight.",
  },
  {
    question: "Do reversed cards change a tarot combination?",
    answer:
      "Yes. A reversed card either turns the pairing inward (private feelings, hesitation, delayed closure) or highlights resistance to the second card's outcome. Start by reading the upright bridge first, then factor in where resistance sits.",
  },
];

export function TarotCombinationsHubScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const ui = COMBOS_I18N[language];
  const [slugA, setSlugA] = useState("the-high-priestess");
  const [slugB, setSlugB] = useState("ten-of-swords");

  const cardA = useMemo(
    () => TAROT_PAGES.find((p) => p.slug === slugA) ?? TAROT_PAGES[2],
    [slugA],
  );
  const cardB = useMemo(
    () => TAROT_PAGES.find((p) => p.slug === slugB) ?? TAROT_PAGES[59],
    [slugB],
  );

  const locNameA = getLocalizedCardNameBySlug(cardA.slug, cardA.name, language);
  const locNameB = getLocalizedCardNameBySlug(cardB.slug, cardB.name, language);

  const liveSynthesis = useMemo(() => {
    if (cardA.slug === cardB.slug) return null;
    const curated = CURATED_TAROT_COMBINATIONS.find(
      (c) =>
        (c.cardASlug === cardA.slug && c.cardBSlug === cardB.slug) ||
        (c.cardASlug === cardB.slug && c.cardBSlug === cardA.slug),
    );
    return curated ?? synthesizeTarotCombination(cardA, cardB);
  }, [cardA, cardB]);

  return (
    <ArticleLayout
      crumbs={[
        { label: t("nav.tarot"), to: "/tarot" },
        { label: BREADCRUMB_LABELS.combinations[language] },
      ]}
      eyebrow={ui.hubEyebrow}
      title={ui.hubTitle}
      intro={ui.hubIntro}
      url={`${SITE_URL}/tarot/combinations`}
      updated={COMBINATIONS_UPDATED}
      readingMinutes={8}
      wordCount={1250}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6 text-center">
          <div>
            <span className="block font-display text-4xl aurora-text">78 × 78</span>
            <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {ui.hubBadgeSub}
            </span>
          </div>
        </GlassCard>
      }
      afterHeader={
        <section
          aria-labelledby="combo-explorer-heading"
          className="rounded-2xl border border-[color:var(--gold)]/40 bg-white/[0.03] p-5 sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
            {t("calcUi.comboKicker")}
          </p>
          <h2 id="combo-explorer-heading" className="mt-1 font-display text-xl sm:text-2xl">
            {t("calcUi.comboHeading")}
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="combo-card-a" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("calcUi.firstCard")}
              </label>
              <select
                id="combo-card-a"
                value={slugA}
                onChange={(e) => setSlugA(e.target.value)}
                className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-[#1b060d] px-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
              >
                {TAROT_PAGES.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {getLocalizedCardNameBySlug(p.slug, p.name, language)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="combo-card-b" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("calcUi.secondCard")}
              </label>
              <select
                id="combo-card-b"
                value={slugB}
                onChange={(e) => setSlugB(e.target.value)}
                className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-[#1b060d] px-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
              >
                {TAROT_PAGES.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {getLocalizedCardNameBySlug(p.slug, p.name, language)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {cardA.slug === cardB.slug ? (
            <GlassCard className="mt-5 p-5 text-sm text-muted-foreground">
              {t("calcUi.sameCardWarn")}
            </GlassCard>
          ) : (
            liveSynthesis && (
              <GlassCard className="mt-5 p-5 sm:p-6">
                <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-center">
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="aspect-[2/3]">
                      <CardFront card={{ id: cardA.id, name: cardA.name, arcana: cardA.arcana, image: cardA.image, keywords: cardA.cardKeywords, suit: cardA.suit as any }} />
                    </div>
                    <div className="aspect-[2/3]">
                      <CardFront card={{ id: cardB.id, name: cardB.name, arcana: cardB.arcana, image: cardB.image, keywords: cardB.cardKeywords, suit: cardB.suit as any }} />
                    </div>
                  </div>
                  <div>
                    <span className="rounded-full border border-[color:var(--gold)]/45 bg-[color:var(--gold)]/12 px-3 py-1 text-[11px] font-semibold text-[color:var(--gold)]">
                      {liveSynthesis.themeBadge} · {t("tarotUi.yesNoVerdict")}: {liveSynthesis.yesNoCombined.label}
                    </span>
                    <h3 className="mt-3 font-display text-xl text-foreground">
                      {language === "en" ? liveSynthesis.headline : `${locNameA} + ${locNameB}`}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {liveSynthesis.quickSummary}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      <strong className="text-foreground">{t("calcUi.elementalSynth")}</strong>{" "}
                      {liveSynthesis.elementalDynamic}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-xs">
                      <Link
                        to="/tarot/combinations/$slug"
                        params={{ slug: liveSynthesis.slug }}
                        className="inline-flex items-center gap-1.5 font-semibold text-[color:var(--gold)] hover:underline"
                      >
                        {t("calcUi.readCombo")}: {locNameA} + {locNameB}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </div>
              </GlassCard>
            )
          )}
        </section>
      }
    >
      <ContentSection
        id="featured-combinations"
        title={ui.featuredTitle}
        icon={Sparkles}
        paragraphs={[ui.featuredIntro]}
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {CURATED_TAROT_COMBINATIONS.map((combo) => {
            const nameA = getLocalizedCardNameBySlug(combo.cardASlug, combo.cardA.name, language);
            const nameB = getLocalizedCardNameBySlug(combo.cardBSlug, combo.cardB.name, language);
            return (
              <li key={combo.slug}>
                <Link
                  to="/tarot/combinations/$slug"
                  params={{ slug: combo.slug }}
                  className="block h-full"
                >
                  <GlassCard className="flex h-full flex-col justify-between p-5 transition-transform duration-300 hover:-translate-y-0.5">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold)]">
                        <span>{combo.themeBadge}</span>
                        <span>{combo.yesNoCombined.label}</span>
                      </div>
                      <h3 className="mt-2 font-display text-lg text-foreground">
                        {nameA} + {nameB}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {combo.quickSummary}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--gold)]">
                      {t("calcUi.readCombo")} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </GlassCard>
                </Link>
              </li>
            );
          })}
        </ul>
      </ContentSection>

      <ContentSection
        id="how-combinations-work"
        title={ui.principlesTitle}
        icon={BookOpen}
        paragraphs={ui.principlesParas}
      />

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={COMBINATIONS_HUB_FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/tarot",
            label: t("tarotUi.all78Cards"),
            blurb: t("tarotHub.rt1Body"),
          },
          {
            to: "/tarot/three-card",
            label: t("tarotHub.rt2Title"),
            blurb: t("tarotHub.rt2Body"),
          },
          {
            to: "/tarot/one-card",
            label: t("tarotHub.rt1Title"),
            blurb: t("tarotHub.rt1Body"),
          },
          {
            to: "/numerology/compatibility",
            label: BREADCRUMB_LABELS.compatibility[language],
            blurb: t("calcUi.compatHeading"),
          },
        ]}
      />

      <CTASection
        title={ui.ctaHubTitle}
        body={ui.ctaHubBody}
        ctaLabel={t("tarotUi.startFreeReading")}
        to="/reading"
      />
    </ArticleLayout>
  );
}
