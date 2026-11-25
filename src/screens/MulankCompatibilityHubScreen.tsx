import { useMemo, useState } from "react";
import { Link } from "@/components/LocalizedLink";
import { ArrowRight, Compass, HeartHandshake, HelpCircle } from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import {
  buildMulankBhagyankPair,
  PAIRS_UPDATED,
  type PairHarmony,
} from "@/data/mulank-bhagyank-pairs";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { getLocalizedPlanet } from "@/locales/card-terms";
import { getNumerologyNumUi } from "@/locales/guides-num-i18n";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";

export const COMPATIBILITY_HUB_FAQS = [
  {
    question: "What does a Mulank and Bhagyank combination tell you?",
    answer:
      "Your Mulank (day of birth reduced to 1 through 9) reflects your instinctive temperament, first impression, and emotional reflexes. Your Bhagyank (sum of your full DD/MM/YYYY birth date) reveals your long-term life path, career trajectory, and mature purpose after age 28 to 32. Comparing the two explains where your daily habits naturally amplify your destiny versus where conscious balance creates growth.",
  },
  {
    question: "How is Vedic Mulank-Bhagyank compatibility judged?",
    answer:
      "Classical Ank Shastra maps each digit 1 through 9 to a Navagraha planet (Sun, Moon, Jupiter, Rahu, Mercury, Venus, Ketu, Saturn, Mars) and checks planetary friendship (Naisargika Maitri). Friendly pairs create smooth cooperation, neutral pairs give steady autonomy, and contrasting pairs produce high-resilience growth.",
  },
  {
    question: "What if my Mulank and Bhagyank are unfriendly or contrasting numbers (like 1 and 8, or 4 and 1)?",
    answer:
      "Challenging planetary combinations never mean failure. Many successful leaders and reformers carry contrasting pairs like 1 and 8 (Sun and Saturn) or 2 and 5 (Moon and Mercury). It simply means early patience and conscious bridge-building turn inner friction into lasting strength.",
  },
  {
    question: "Can I check partner compatibility using Mulank and Bhagyank too?",
    answer:
      "Yes. While a personal chart compares your own Mulank against your Bhagyank, comparing one person's Mulank against a partner's Mulank or Bhagyank uses the exact same Vedic planetary friendship table to highlight emotional and lifestyle alignment.",
  },
];

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

const HARMONY_BADGE: Record<PairHarmony, string> = {
  synergy: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
  balanced: "border-[color:var(--gold)]/45 bg-[color:var(--gold)]/15 text-[color:var(--gold)]",
  dynamic: "border-rose-400/40 bg-rose-500/15 text-rose-200",
};

export function MulankCompatibilityHubScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const ui = getNumerologyNumUi(language);
  const [selectedMulank, setSelectedMulank] = useState<number>(1);
  const [selectedBhagyank, setSelectedBhagyank] = useState<number>(5);

  const livePair = useMemo(
    () => buildMulankBhagyankPair(selectedMulank, selectedBhagyank),
    [selectedMulank, selectedBhagyank],
  );

  const harmonyLabel =
    livePair.harmony === "synergy"
      ? t("calcUi.friendly")
      : livePair.harmony === "balanced"
        ? t("calcUi.neutral")
        : t("calcUi.growth");

  return (
    <ArticleLayout
      crumbs={[
        { label: BREADCRUMB_LABELS.numerology[language], to: "/numerology" },
        { label: BREADCRUMB_LABELS.compatibility[language] },
      ]}
      eyebrow={ui.compatEyebrow}
      title={ui.compatTitle}
      intro={ui.compatIntro}
      url={`${SITE_URL}/numerology/compatibility`}
      updated={PAIRS_UPDATED}
      readingMinutes={8}
      wordCount={1200}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6 text-center">
          <div>
            <span className="block font-display text-5xl aurora-text">81</span>
            <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {ui.compatPairMatrix}
            </span>
          </div>
        </GlassCard>
      }
      afterHeader={
        <section
          aria-labelledby="interactive-matcher-heading"
          className="rounded-2xl border border-[color:var(--gold)]/40 bg-white/[0.03] p-5 sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
            {t("calcUi.compatKicker")}
          </p>
          <h2 id="interactive-matcher-heading" className="mt-1 font-display text-xl sm:text-2xl">
            {t("calcUi.compatHeading")}
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="select-mulank" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {ui.compatSelectMulank}
              </label>
              <select
                id="select-mulank"
                value={selectedMulank}
                onChange={(e) => setSelectedMulank(Number(e.target.value))}
                className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-[#1b060d] px-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
              >
                {NUMBERS.map((n) => (
                  <option key={n} value={n}>
                    {BREADCRUMB_LABELS.mulank[language]} {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="select-bhagyank" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {ui.compatSelectBhagyank}
              </label>
              <select
                id="select-bhagyank"
                value={selectedBhagyank}
                onChange={(e) => setSelectedBhagyank(Number(e.target.value))}
                className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-[#1b060d] px-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
              >
                {NUMBERS.map((n) => (
                  <option key={n} value={n}>
                    {BREADCRUMB_LABELS.bhagyank[language]} {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <GlassCard className="mt-5 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-display text-lg sm:text-xl text-foreground">
                  {BREADCRUMB_LABELS.mulank[language]} {livePair.mulank} × {BREADCRUMB_LABELS.bhagyank[language]} {livePair.bhagyank}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {getLocalizedPlanet(livePair.mulankPlanet, language)} × {getLocalizedPlanet(livePair.bhagyankPlanet, language)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${HARMONY_BADGE[livePair.harmony]}`}>
                  {harmonyLabel} · {livePair.score}/100
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{livePair.summary}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs">
              <Link
                to="/numerology/$slug"
                params={{ slug: livePair.slug }}
                className="inline-flex items-center gap-1.5 font-semibold text-[color:var(--gold)] hover:underline"
              >
                {ui.compatReadFull} {livePair.mulank} &amp; {BREADCRUMB_LABELS.bhagyank[language]} {livePair.bhagyank}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
              <Link
                to="/numerology"
                className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                {ui.compatCalcFree}
              </Link>
            </div>
          </GlassCard>
        </section>
      }
    >
      <ContentSection
        id="matrix"
        title={ui.compatDirectoryTitle}
        icon={Compass}
        paragraphs={[ui.compatDirectoryDesc]}
      >
        <div className="space-y-4">
          {NUMBERS.map((m) => (
            <GlassCard key={m} className="p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <h3 className="font-display text-lg text-[color:var(--gold)]">
                  {BREADCRUMB_LABELS.mulank[language]} {m} {ui.compatPairingsSuffix}
                </h3>
                <Link
                  to="/numerology/$slug"
                  params={{ slug: `mulank-${m}` }}
                  className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  {ui.compatAboutMulank} {m} →
                </Link>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-9">
                {NUMBERS.map((b) => {
                  const pair = buildMulankBhagyankPair(m, b);
                  return (
                    <Link
                      key={pair.slug}
                      to="/numerology/$slug"
                      params={{ slug: pair.slug }}
                      className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-2 py-2.5 text-center transition-colors hover:border-[color:var(--gold)]/60 hover:bg-[color:var(--gold)]/10"
                    >
                      <span className="font-display text-sm font-semibold text-foreground">
                        {m}×{b}
                      </span>
                      <span className="mt-0.5 text-[10px] text-[color:var(--gold)]">
                        {pair.score}%
                      </span>
                    </Link>
                  );
                })}
              </div>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="how-planetary-friendship-works"
        title={ui.compatPlanetaryTitle}
        icon={HeartHandshake}
        paragraphs={[
          "Traditional Indian Ank Shastra evaluates every Mulank and Bhagyank pair through the relationship of their ruling Navagraha lords. Harmonious combinations such as Sun (1) with Jupiter (3) or Venus (6) with Mercury (5) minimize internal self-sabotage so talent reaches its goal without unnecessary second-guessing.",
          "Contrasting combinations such as Saturn (8) with Sun (1) or Mars (9) with Mercury (5) are often misunderstood as unlucky. In lived experience, they create highly capable individuals who combine opposing strengths once they outgrow youthful impatience.",
        ]}
      />

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={COMPATIBILITY_HUB_FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/numerology",
            label: t("numerologyLanding2.cta"),
            blurb: t("calcUi.openFreeCalc"),
          },
          {
            to: "/guide/mulank-vs-bhagyank",
            label: t("guideHub.g8Title"),
            blurb: t("guideHub.g8Body"),
          },
          {
            to: "/numerology/mulank",
            label: ui.completeMulankGuide,
            blurb: `${BREADCRUMB_LABELS.mulank[language]} 1–9`,
          },
          {
            to: "/tarot/combinations",
            label: t("calcUi.comboCrumb"),
            blurb: t("calcUi.comboHeading"),
          },
        ]}
      />

      <CTASection
        title={ui.compatCtaTitle}
        body={ui.compatCtaBody}
        ctaLabel={t("calcUi.openFreeCalc")}
        to="/numerology"
      />
    </ArticleLayout>
  );
}
