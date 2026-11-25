import { useMemo } from "react";
import { Link } from "@/components/LocalizedLink";
import { CalendarClock, Clock, Layers } from "@/components/icons";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SPREAD_LIST, getLocalizedSpread } from "@/lib/tarot/spreads";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { AuthorCard } from "@/components/AuthorCard";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { getBcp47, useLanguage, useTranslate } from "@/lib/i18n";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";
import { GUIDE_COMMON, SPREADS_GUIDE_I18N } from "@/locales/guides-tarot-i18n";
import { CELTIC_GUIDE_I18N } from "@/locales/guides-tarot-i18n";

const SPREADS_FAQS_EN = [
  {
    question: "Which tarot spread should a beginner use?",
    answer:
      "Start with the Single Card or Three Card spread: few positions, crisp narrative structure, and easy to cross-check against real-world events without overwhelm.",
  },
  {
    question: "What is the Celtic Cross spread?",
    answer:
      "The Celtic Cross is a traditional ten-card layout examining present situation, immediate crossing challenge, conscious aims, subconscious roots, recent past, near future, internal stance, external influences, hopes and fears, and likely outcome.",
  },
  {
    question: "Can I use any spread for any question?",
    answer:
      "Yes, though tailored topic layouts deliver clearer contrast: Love spreads compare two partners evenly while Decision spreads illuminate blindspots between distinct paths.",
  },
  {
    question: "How should I word questions before pulling a spread?",
    answer:
      "Frame open-ended questions beginning with 'What helps me see...', 'How can I approach...', or 'What dynamic deserves attention in...' rather than passive fatalistic 'When will...' phrasing.",
  },
];

export function GuideTarotSpreadsScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const ui = SPREADS_GUIDE_I18N[language];
  const celticLoc = CELTIC_GUIDE_I18N[language];
  const bcp47 = getBcp47(language);

  const formatUtcDate = (iso: string) =>
    new Intl.DateTimeFormat(bcp47, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${iso}T00:00:00Z`));

  const localizedSpreads = useMemo(
    () => SPREAD_LIST.map((spread) => getLocalizedSpread(spread, t)),
    [t],
  );

  const faqs = useMemo(() => {
    if (language === "en") return SPREADS_FAQS_EN;
    return [
      {
        question: t("tarotHub.faq3Q"),
        answer: t("tarotHub.faq3A"),
      },
      {
        question: celticLoc.summaryTitle,
        answer: celticLoc.summaryBody,
      },
      {
        question: ui.secSizeTitle,
        answer: [
          `${t("spread.single.name")}: ${ui.whenToUse.single}`,
          `${t("spread.three.name")}: ${ui.whenToUse["three-card"]}`,
          `${t("spread.celtic.name")}: ${ui.whenToUse["celtic-cross"]}`,
        ].join(" "),
      },
      {
        question: t("tarotHub.faq4Q"),
        answer: t("tarotHub.faq4A"),
      },
    ];
  }, [language, t, celticLoc, ui]);

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-4xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: BREADCRUMB_LABELS.guides[language], to: "/guide" }, { label: ui.crumb }]} />
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {GUIDE_COMMON.freeGuide[language]}
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">
          {ui.titlePrefix} <span className="aurora-text">{ui.titleAccent}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {ui.intro}{" "}
          <Link to="/reading" className="underline underline-offset-4 hover:text-foreground">
            {t("tarotUi.freeAiReading")} →
          </Link>
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden />
            {t("common.published")} <time dateTime="2026-08-07">{formatUtcDate("2026-08-07")}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden />
            {t("common.lastUpdated")} <time dateTime="2026-11-16">{formatUtcDate("2026-11-16")}</time>
          </span>
        </div>

        <div className="mt-12 space-y-8">
          {localizedSpreads.map((spread) => (
            <GlassCard key={spread.id} id={spread.id} className="scroll-mt-24">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-2xl">{spread.name}</h2>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Layers className="h-3.5 w-3.5" /> {spread.count} {ui.cardsUnit}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> ~{spread.minutes} {t("reading.minUnit")}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{spread.description}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="text-foreground/90">{ui.whenToUseLabel}</span>{" "}
                {ui.whenToUse[spread.id]}
              </p>

              {spread.count <= 10 ? (
                <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                  {spread.positions.map((p) => (
                    <li key={p.index} className="rounded-lg border border-white/10 p-3 text-sm">
                      <span className="font-display text-foreground">
                        {p.index + 1}. {p.name}
                      </span>
                      <p className="mt-1 text-xs text-muted-foreground">{p.meaning}</p>
                    </li>
                  ))}
                </ol>
              ) : null}
              {spread.id === "celtic-cross" && (
                <p className="mt-4 text-sm text-muted-foreground">
                  <Link
                    to="/guide/celtic-cross-guide"
                    className="text-[var(--gold)] hover:underline"
                  >
                    {ui.celticGuideLink}
                  </Link>
                </p>
              )}
              {spread.count > 10 && (
                <p className="mt-4 text-sm text-muted-foreground">
                  {ui.yearAheadNote}
                </p>
              )}
            </GlassCard>
          ))}
        </div>

        <section className="mt-14 space-y-8">
          <GlassCard className="p-6 sm:p-8 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl">
              {ui.secContextTitle}
            </h2>
            {language === "en" ? (
              <>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Beginners often treat tarot cards as fixed flashcards: The Sun equals joy, Five of
                  Pentacles equals hardship, Three of Swords equals heartbreak. In practice, a spread&apos;s
                  architecture acts like grammar in a sentence. A card acts as a noun or verb, while the
                  position it lands in decides whether that energy describes a past habit, an unseen ally,
                  a present obstacle, or an emerging solution.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Consider drawing the Eight of Swords inside a Challenge position versus an Advice
                  position. As a Challenge, it points out where overthinking or self-imposed rules have
                  convinced you that you have fewer options than you actually do. Inside an Advice slot,
                  however, it invites you to question unexamined assumptions immediately: noticing that
                  the blindfold in traditional artwork is tied loosely enough to remove yourself.
                </p>
              </>
            ) : (
              <p className="text-sm leading-relaxed text-muted-foreground">{ui.intro}</p>
            )}
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl">
              {ui.secSizeTitle}
            </h2>
            <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground list-disc pl-5">
              <li>
                <strong className="text-foreground">{t("spread.single.name")} (1 {t("tarotUi.cardUnit")}):</strong>{" "}
                {ui.whenToUse.single}
              </li>
              <li>
                <strong className="text-foreground">{t("spread.three.name")} &amp; {t("spread.decision.name")} (3–5 {ui.cardsUnit}):</strong>{" "}
                {ui.whenToUse["three-card"]} {ui.whenToUse.decision}
              </li>
              <li>
                <strong className="text-foreground">{t("spread.love.name")}, {t("spread.career.name")}, {t("spread.money.name")} (4 {ui.cardsUnit}):</strong>{" "}
                {ui.whenToUse.love} {ui.whenToUse.career}
              </li>
              <li>
                <strong className="text-foreground">{t("spread.celtic.name")} &amp; {t("spread.year.name")} (10–12 {ui.cardsUnit}):</strong>{" "}
                {ui.whenToUse["celtic-cross"]}
              </li>
            </ul>
          </GlassCard>

          {language === "en" && (
            <>
              <GlassCard className="p-6 sm:p-8 space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl">
                  {ui.secExampleTitle}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Suppose a reader asks, &ldquo;How should I approach a possible job transition next
                  quarter?&rdquo; and draws <strong className="text-foreground">The Hermit</strong> (Past),{" "}
                  <strong className="text-foreground">Seven of Swords</strong> (Present), and{" "}
                  <strong className="text-foreground">Ace of Pentacles</strong> (Future).
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Read mechanically, Seven of Swords might trigger alarm about betrayal. Read inside the
                  spread arc, however, a calm narrative emerges: months of quiet private research (The
                  Hermit) have taught you quietly to inspect fine print and keep your plans discreet until
                  ready (Seven of Swords: tactical discretion rather than deceit), paving cleanly toward
                  a solid, tangible offer or contract (Ace of Pentacles). Notice the shift from Air
                  reflection to concrete Earth prosperity: discernment protects the seed.
                </p>
              </GlassCard>

              <GlassCard className="p-6 sm:p-8 space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl">
                  {ui.secSynthTitle}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  When staring at four to ten cards at once, resist reading each one in isolation. First,
                  scan the whole layout for elemental balance: an abundance of Cups points to emotional
                  sensitivity, Wands signals creative urgency, Swords reveals heavy mental analysis, and
                  Pentacles anchors the question in tangible stability, craft, or finances. Next, note
                  how many Major Arcana cards appear: two or more suggest deeper life themes at play
                  rather than minor passing moods. Finally, look at the first and last cards together as
                  a headline summarizing where the energy starts and where it resolves.
                </p>
              </GlassCard>
            </>
          )}

          <div className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl">{ui.faqTitle}</h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>

        <div className="mt-12">
          <KeepExploring
            links={[
              {
                to: "/tarot/one-card",
                label: t("tarotHub.rt1Title"),
                blurb: t("tarotHub.rt1Body"),
              },
              {
                to: "/tarot/three-card",
                label: t("tarotHub.rt2Title"),
                blurb: t("tarotHub.rt2Body"),
              },
              {
                to: "/tarot/celtic-cross",
                label: t("tarotHub.rt6Title"),
                blurb: t("tarotHub.rt6Body"),
              },
              {
                to: "/guide/celtic-cross-guide",
                label: t("guideHub.g7Title"),
                blurb: t("guideHub.g7Body"),
              },
              {
                to: "/tarot/combinations",
                label: t("calcUi.comboCrumb"),
                blurb: t("lfeat.combos"),
              },
              {
                to: "/yes-no-tarot",
                label: t("tarotHub.rt4Title"),
                blurb: t("tarotHub.rt4Body"),
              },
            ]}
          />
        </div>

        <div className="mt-12">
          <AuthorCard
            published="2026-08-07"
            lastUpdated="2026-11-16"
            category={ui.category}
            readingTime={`10 ${t("common.minRead")}`}
          />
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {GUIDE_COMMON.backHome[language]}
          </Link>
        </div>
        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
