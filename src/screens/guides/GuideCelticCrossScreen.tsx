import { useMemo } from "react";
import { Link } from "@/components/LocalizedLink";
import { Cross, ListChecks, Compass, ShieldQuestion, HelpCircle, BookOpen } from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";
import { CELTIC_GUIDE_I18N } from "@/locales/guides-tarot-i18n";
import type { TranslationKey } from "@/locales";

const PATH = "/guide/celtic-cross-guide";
const UPDATED = "2026-11-18";

const FAQS_EN = [
  {
    question: "How long does a Celtic Cross reading take?",
    answer:
      "Most readers spend 15 to 20 minutes on a full Celtic Cross: a few minutes to lay the ten cards, and the rest interpreting them individually and then together.",
  },
  {
    question: "What's the correct order to lay the ten cards in?",
    answer:
      'Present, Challenge (crossed over it), Foundation (below), Recent Past (left), Crown (above), Near Future (right) completes the central cross. Then Self, Environment, Hopes & Fears, and Outcome are laid bottom to top in a vertical line beside it, forming the "staff."',
  },
  {
    question: "Do I read the ten cards in the order they're laid, or some other order?",
    answer:
      "Read them in position order (1 through 10) on your first pass to build the story chronologically, then read the spread again as a whole, looking for repeated suits, numbers, or themes across all ten cards: that's usually where the clearest message emerges.",
  },
  {
    question: "Is the Celtic Cross too advanced for beginners?",
    answer:
      "It's more demanding than a Single Card or Three Card spread, but not off-limits to beginners: it simply rewards familiarity with upright and reversed card meanings first. Most readers try their first Celtic Cross after a few weeks of practice with smaller spreads.",
  },
  {
    question: "What if two positions seem to contradict each other?",
    answer:
      "That's common and meaningful, not a sign of a bad reading: it usually reflects real tension in the situation, such as the Hopes & Fears position pulling one way while the Outcome pulls another. Sit with the contradiction rather than picking whichever card you prefer.",
  },
  {
    question: "What is the 10 card tarot spread called?",
    answer:
      "The classic 10 card tarot spread is called the Celtic Cross. Positions 1–6 form the Cross (Present, Challenge, Foundation, Recent Past, Crown, Near Future), and Positions 7–10 form the Staff (Self, Environment, Hopes & Fears, Outcome).",
  },
];

export function GuideCelticCrossScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const loc = CELTIC_GUIDE_I18N[language];

  const positions = useMemo(
    () =>
      Array.from({ length: 10 }, (_, idx) => ({
        n: idx + 1,
        name: t(`spread.celtic.p${idx}Name` as TranslationKey),
        meaning: t(`spread.celtic.p${idx}Meaning` as TranslationKey),
        detail: loc.positionDetails[idx] ?? "",
      })),
    [t, loc.positionDetails],
  );

  const faqs = useMemo(() => {
    if (language === "en") return FAQS_EN;
    return [
      { question: loc.summaryTitle, answer: loc.summaryBody },
      {
        question: loc.secLayout,
        answer: `${loc.crossTitle}: ${loc.crossDesc} ${loc.staffTitle}: ${loc.staffDesc}`,
      },
      {
        question: loc.secHowToRead,
        answer: loc.howToReadSteps.join(" "),
      },
      {
        question: loc.secMistakes,
        answer: loc.mistakesList.join(" "),
      },
    ];
  }, [language, loc]);

  return (
    <ArticleLayout
      crumbs={[{ label: BREADCRUMB_LABELS.guides[language], to: "/guide" }, { label: loc.crumb }]}
      eyebrow={loc.eyebrow}
      title={loc.title}
      intro={loc.intro}
      url={`${SITE_URL}${PATH}`}
      updated={UPDATED}
      readingMinutes={11}
      wordCount={2580}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <Cross className="h-16 w-16 text-[var(--gold)]" strokeWidth={1.2} />
        </GlassCard>
      }
      afterHeader={
        <section
          aria-labelledby="celtic-summary-heading"
          className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
            {loc.summaryKicker}
          </p>
          <h2 id="celtic-summary-heading" className="mt-1 font-display text-xl text-foreground sm:text-2xl">
            {loc.summaryTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {loc.summaryBody}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-4 text-sm">
            <Link
              to="/tarot/celtic-cross"
              className="font-semibold text-[var(--gold)] underline underline-offset-4 hover:opacity-85"
            >
              {loc.tryOnline}
            </Link>
            <Link
              to="/tarot/three-card"
              className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              {loc.tryThreeCard}
            </Link>
          </div>
        </section>
      }
    >
      <ContentSection id="what-is-it" title={loc.secWhatIsIt} icon={BookOpen}>
        {loc.whatIsItParas.map((para, i) => (
          <p
            key={para}
            className={`${i > 0 ? "mt-4 " : ""}text-sm leading-relaxed text-muted-foreground sm:text-base`}
          >
            {para}
          </p>
        ))}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <Link to="/guide/tarot-for-beginners" className="text-[var(--gold)] hover:underline">
            {t("guideHub.g4Title")} →
          </Link>
        </p>
      </ContentSection>

      <ContentSection id="layout" title={loc.secLayout} icon={ListChecks}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {loc.layoutIntro}
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <GlassCard className="p-5">
            <h3 className="font-display text-base text-[var(--gold)]">{loc.crossTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {loc.crossDesc}
            </p>
          </GlassCard>
          <GlassCard className="p-5">
            <h3 className="font-display text-base text-[var(--gold)]">{loc.staffTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {loc.staffDesc}
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection id="positions" title={loc.secPositions} icon={Compass}>
        <div className="space-y-4">
          {positions.map((p) => (
            <GlassCard key={p.n} className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg">
                  {p.n}. {p.name}
                </h3>
                <span className="text-xs uppercase tracking-[0.15em] text-[var(--gold)]">
                  {p.meaning}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="how-to-read" title={loc.secHowToRead} icon={ListChecks}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {loc.howToReadIntro}
        </p>
        <ol className="mt-4 space-y-3">
          {loc.howToReadSteps.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-display text-base text-[var(--gold)]">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection id="mistakes" title={loc.secMistakes} icon={ShieldQuestion}>
        <ul className="mt-2 space-y-3">
          {loc.mistakesList.map((m) => (
            <li key={m} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
              />
              {m}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={faqs} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/guide/tarot-spreads",
            label: t("guideHub.g2Title"),
            blurb: t("guideHub.g2Body"),
          },
          {
            to: "/guide/tarot-for-beginners",
            label: t("guideHub.g4Title"),
            blurb: t("guideHub.g4Body"),
          },
          {
            to: "/what-do-reversed-tarot-cards-mean",
            label: t("guideHub.g5Title"),
            blurb: t("guideHub.g5Body"),
          },
          {
            to: "/tarot/celtic-cross",
            label: t("tarotHub.rt6Title"),
            blurb: t("tarotHub.rt6Body"),
          },
        ]}
      />

      <CTASection
        title={loc.ctaTitle}
        body={loc.ctaBody}
        ctaLabel={loc.ctaLabel}
        to="/tarot/celtic-cross"
      />
    </ArticleLayout>
  );
}
