import { useMemo } from "react";
import { Link } from "@/components/LocalizedLink";
import {
  BookOpen,
  Sparkles,
  Layers,
  Hand,
  Compass,
  ListChecks,
  ShieldQuestion,
  HelpCircle,
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
import { BEGINNERS_GUIDE_I18N } from "@/locales/guides-tarot-i18n";

const PATH = "/guide/tarot-for-beginners";
const UPDATED = "2026-08-14";

const FAQS_EN = [
  {
    question: "Do I need a special deck to start reading tarot?",
    answer:
      "No. Any standard 78-card Rider–Waite–Smith style deck works, and even a well-illustrated app deck is fine while you're learning. What matters more than the deck is consistency: using the same one while you build familiarity with its imagery.",
  },
  {
    question: "How long does it take to learn tarot?",
    answer:
      "Most beginners feel comfortable with single-card pulls within a week or two, and confident with three-card spreads within a month of regular practice. Fluency with all 78 cards in varied spreads typically takes six months to a year of consistent reading.",
  },
  {
    question: "Do reversed cards mean something bad?",
    answer:
      "Not inherently. A reversed card usually points to an internalised, blocked, delayed, or shadow version of the upright meaning, not automatic misfortune. Many beginners choose to read every card upright at first, and add reversals once the upright meanings feel solid.",
  },
  {
    question: "Can I read tarot for myself, or do I need someone else to do it?",
    answer:
      "Self-reading is not only allowed, it's how most readers build their skill. The main challenge is staying neutral about a question you're emotionally invested in, which is why writing your question down before you shuffle helps keep the reading honest.",
  },
  {
    question: "Is tarot reading predicting the future?",
    answer:
      "Tarot is best treated as a structured reflection tool: the cards surface patterns, blind spots, and likely trajectories based on the energy already in motion, rather than fixed, unchangeable events. Most practising readers treat outcomes as probable, not certain.",
  },
];

export function GuideTarotForBeginnersScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const loc = BEGINNERS_GUIDE_I18N[language];

  const faqs = useMemo(() => {
    if (language === "en") return FAQS_EN;
    return [
      { question: t("tarotHub.faq3Q"), answer: t("tarotHub.faq3A") },
      { question: t("guideHub.faq4Q"), answer: t("guideHub.faq4A") },
      { question: loc.secDeck, answer: loc.suits.map((s) => `${s.name} (${s.element}): ${s.domain}`).join(" · ") },
      { question: t("tarotHub.faq4Q"), answer: t("tarotHub.faq4A") },
    ];
  }, [language, t, loc]);

  return (
    <ArticleLayout
      crumbs={[{ label: BREADCRUMB_LABELS.guides[language], to: "/guide" }, { label: loc.crumb }]}
      eyebrow={loc.eyebrow}
      title={loc.title}
      intro={loc.intro}
      url={`${SITE_URL}${PATH}`}
      updated={UPDATED}
      readingMinutes={14}
      wordCount={3050}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <Sparkles className="h-16 w-16 text-[var(--gold)]" strokeWidth={1.2} />
        </GlassCard>
      }
    >
      <ContentSection id="what-is-tarot" title={loc.secWhat} icon={BookOpen}>
        {language === "en" ? (
          <>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              A tarot deck is a set of 78 illustrated cards split into two families: the 22 Major Arcana
              and the 56 Minor Arcana. Each card carries a fixed core meaning: built from its imagery,
              numerology, and elemental associations, but that meaning shifts depending on the question
              asked, the position it lands in within a spread, and the cards drawn beside it. Learning
              tarot is really learning two things at once: a vocabulary of 78 symbols, and a method for
              reading them together as a sentence rather than in isolation.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Historically, tarot began as a 15th-century Italian card game before its symbolism was
              adopted for divination in the 18th century. Whether you approach it as a spiritual
              practice, a reflection tool, or simply an engaging way to structure your thinking about a
              decision, the mechanics are identical: shuffle, draw, and interpret. This guide walks
              through all three in the order a beginner actually needs them.
            </p>
          </>
        ) : (
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("tarotHub.t2Body")}
          </p>
        )}
      </ContentSection>

      <ContentSection id="deck-structure" title={loc.secDeck} icon={Layers}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t("tarotHub.t2Body")}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {loc.suits.map((s) => (
            <div key={s.name} className="rounded-lg border border-white/10 p-3 text-sm">
              <span className="font-display text-foreground">
                {s.name} <span className="text-xs text-muted-foreground">· {s.element}</span>
              </span>
              <p className="mt-1 text-xs text-muted-foreground">{s.domain}</p>
            </div>
          ))}
        </div>
        {language === "en" && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Within each suit, cards Ace through 10 describe a situation unfolding in stages, and the
            four court cards (Page, Knight, Queen, King) represent people, personality styles, or a
            particular way of approaching the suit&apos;s theme: sometimes you, sometimes someone else in
            the question.
          </p>
        )}
      </ContentSection>

      <ContentSection id="getting-ready" title={loc.secReady} icon={Hand}>
        {language === "en" ? (
          <>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              You don&apos;t need candles or a ritual to get a useful reading, but a few habits make the
              practice more consistent and easier to trust:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                'Write your question down before you shuffle, in specific rather than yes/no terms: "What do I need to understand about this job offer?" gives more to work with than "Should I take the job?"',
                "Shuffle for as long as feels right, cutting the deck once or twice. There's no required number of shuffles.",
                "Draw with your non-dominant hand if that ritual helps you feel present, but it makes no difference to the outcome: pick what keeps you focused.",
                "Read cards in the order you laid them, not the order that feels most dramatic. Skipping around breaks the narrative a spread is built to tell.",
                "Keep a simple reading journal: the question, the cards, and what you thought at the time. Beginners improve fastest by comparing early interpretations to how things actually played out.",
              ].map((tip) => (
                <li key={tip} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
                  />
                  {tip}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("reading.questionSub")} {t("reading.shuffleSub")}
          </p>
        )}
      </ContentSection>

      <ContentSection id="first-spreads" title={loc.secSpreads} icon={ListChecks}>
        <div className="space-y-4">
          <GlassCard className="p-5">
            <h3 className="font-display text-lg">{loc.spreadTitles[0]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("tarotHub.rt1Body")} {t("spread.single.desc")}
            </p>
          </GlassCard>
          <GlassCard className="p-5">
            <h3 className="font-display text-lg">{loc.spreadTitles[1]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("tarotHub.rt2Body")} {t("spread.three.desc")}
            </p>
          </GlassCard>
          <GlassCard className="p-5">
            <h3 className="font-display text-lg">{loc.spreadTitles[2]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("spread.career.desc")}{" "}
              <Link to="/guide/tarot-spreads" className="text-[var(--gold)] hover:underline">
                {t("guideHub.g2Title")} →
              </Link>
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection id="interpreting" title={loc.secInterp} icon={Compass}>
        <ol className="mt-2 space-y-3">
          {loc.interpSteps.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-display text-base text-[var(--gold)]">{i + 1}.</span>
              <span className="text-foreground/90">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <Link to="/what-do-reversed-tarot-cards-mean" className="text-[var(--gold)] hover:underline">
            {t("guideHub.g5Title")} →
          </Link>
        </p>
      </ContentSection>

      <ContentSection id="common-mistakes" title={loc.secMistakes} icon={ShieldQuestion}>
        {language === "en" ? (
          <ul className="mt-2 space-y-3">
            {[
              "Treating every card in isolation instead of as part of a sentence the whole spread is telling.",
              "Panicking at cards like Death or The Tower: both describe transformation and disruption, not literal endings, and are among the most misunderstood cards in the deck.",
              "Re-asking the same question repeatedly until a preferred answer appears. One clear question, one reading, is more reliable than five contradictory ones.",
              "Skipping the court cards because they feel harder: they're often the fastest way to identify who else is involved in a situation.",
              "Reading for others before feeling settled reading for yourself. Confidence with your own spreads transfers directly to reading anyone else's.",
            ].map((m) => (
              <li key={m} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
                />
                {m}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("reading.reversedNotice")}
          </p>
        )}
      </ContentSection>

      <ContentSection id="practice" title={loc.secPractice} icon={Sparkles}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {loc.ctaBody}{" "}
          <Link to="/guide/celtic-cross-guide" className="text-[var(--gold)] hover:underline">
            {t("guideHub.g7Title")}
          </Link>{" "}
          ·{" "}
          <Link to="/reading" className="text-[var(--gold)] hover:underline">
            {t("tarotUi.freeAiReading")} →
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
            to: "/what-do-reversed-tarot-cards-mean",
            label: t("guideHub.g5Title"),
            blurb: t("guideHub.g5Body"),
          },
          {
            to: "/guide/tarot-spreads",
            label: t("guideHub.g2Title"),
            blurb: t("guideHub.g2Body"),
          },
          {
            to: "/guide/tarot-card-meanings",
            label: t("guideHub.g1Title"),
            blurb: t("guideHub.g1Body"),
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
