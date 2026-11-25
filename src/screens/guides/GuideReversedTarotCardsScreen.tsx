import { useMemo } from "react";
import { Link } from "@/components/LocalizedLink";
import {
  RotateCcw,
  Layers,
  ListChecks,
  Compass,
  ShieldQuestion,
  HelpCircle,
  BookOpen,
} from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";
import { REVERSED_GUIDE_I18N } from "@/locales/guides-tarot-i18n";
import { getLocalizedCardNameBySlug } from "@/locales/card-terms";

const PATH = "/what-do-reversed-tarot-cards-mean";
const UPDATED = "2026-11-18";

const FAQS_EN = [
  {
    question: "Does a reversed card always mean something negative?",
    answer:
      "No. A reversal usually signals that the card's energy is blocked, internal, delayed, or being expressed in its shadow form, not that the outcome is automatically bad. Some reversed cards, like a reversed Tower, can even soften a difficult upright meaning.",
  },
  {
    question: "Do I have to read reversed cards at all?",
    answer:
      "No. Reading every card upright is a completely valid, common approach, especially for beginners. Many experienced readers choose to read upright-only for clarity and add reversals later once the 78 upright meanings feel automatic.",
  },
  {
    question: "How do I decide if a card is reversed when shuffling?",
    answer:
      'Shuffle so some cards naturally flip during the process, for example, by including a few reversed cuts, or using a "riffle" or "overhand" shuffle without straightening the deck. Whatever orientation a card lands in when drawn is read as-is.',
  },
  {
    question:
      "Is a reversed Major Arcana card interpreted differently than a reversed Minor Arcana card?",
    answer:
      "The same four interpretive lenses apply to both, but Major Arcana reversals tend to describe a stalled or internalised life theme, while Minor Arcana reversals more often describe a practical delay, blockage, or an excess/deficiency in a specific area like money or communication.",
  },
  {
    question: "Can two people read the same reversed card differently?",
    answer:
      "Yes, and that's expected: reversed meanings depend heavily on the surrounding cards and the question asked, more so than upright meanings do. Consistency comes from picking one interpretive framework (see the four approaches below) and applying it the same way every time.",
  },
];

export function GuideReversedTarotCardsScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const loc = REVERSED_GUIDE_I18N[language];

  const faqs = useMemo(() => {
    if (language === "en") return FAQS_EN;
    return [
      { question: loc.secWhatChanges, answer: loc.whatChangesParas.join(" ") },
      {
        question: loc.secFourLenses,
        answer: loc.approaches.map((a) => `${a.title}: ${a.detail}`).join(" "),
      },
      { question: loc.secMethod, answer: loc.steps.join(" ") },
      { question: loc.secShouldI, answer: loc.shouldIPara },
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
      readingMinutes={9}
      wordCount={2050}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <RotateCcw className="h-16 w-16 text-[var(--gold)]" strokeWidth={1.2} />
        </GlassCard>
      }
    >
      <ContentSection id="what-changes" title={loc.secWhatChanges} icon={BookOpen}>
        {loc.whatChangesParas.map((para, i) => (
          <p
            key={para}
            className={`${i > 0 ? "mt-4 " : ""}text-sm leading-relaxed text-muted-foreground sm:text-base`}
          >
            {para}
          </p>
        ))}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <Link to="/guide/tarot-card-meanings" className="text-[var(--gold)] hover:underline">
            {t("guideHub.g1Title")} →
          </Link>
        </p>
      </ContentSection>

      <ContentSection id="four-lenses" title={loc.secFourLenses} icon={Layers}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {loc.approachesIntro}
        </p>
        <div className="mt-4 space-y-4">
          {loc.approaches.map((a, i) => (
            <GlassCard key={a.title} className="p-5">
              <h3 className="font-display text-lg">
                {i + 1}. {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="method"
        title={loc.secMethod}
        icon={ListChecks}
      >
        <ol className="mt-2 space-y-3">
          {loc.steps.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-display text-base text-[var(--gold)]">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection id="examples" title={loc.secExamples} icon={Compass}>
        <div className="grid gap-4 sm:grid-cols-2">
          {loc.examples.map((e) => {
            const cardName = getLocalizedCardNameBySlug(e.slug, e.slug, language);
            return (
              <GlassCard key={e.slug} className="p-5">
                <h3 className="font-display text-base text-[var(--gold)]">
                  {cardName} · {t("tarotUi.reversed")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.read}</p>
              </GlassCard>
            );
          })}
        </div>
      </ContentSection>

      <ContentSection id="should-i" title={loc.secShouldI} icon={ShieldQuestion}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {loc.shouldIPara}{" "}
          <Link to="/guide/tarot-for-beginners" className="text-[var(--gold)] hover:underline">
            {t("guideHub.g4Title")} →
          </Link>
        </p>
      </ContentSection>

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={faqs} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/major-arcana-tarot-cards-meanings",
            label: t("guideHub.g6Title"),
            blurb: t("guideHub.g6Body"),
          },
          {
            to: "/yes-no-tarot",
            label: t("tarotHub.rt4Title"),
            blurb: t("tarotHub.rt4Body"),
          },
          {
            to: "/career-tarot-reading",
            label: t("tarotHub.rt5Title"),
            blurb: t("tarotHub.rt5Body"),
          },
          {
            to: "/guide/tarot-for-beginners",
            label: t("guideHub.g4Title"),
            blurb: t("guideHub.g4Body"),
          },
        ]}
      />

      <CTASection
        title={loc.ctaTitle}
        body={loc.ctaBody}
        ctaLabel={loc.ctaLabel}
        to="/reading"
      />
    </ArticleLayout>
  );
}
