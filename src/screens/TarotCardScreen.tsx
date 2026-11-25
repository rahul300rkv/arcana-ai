import { useLoaderData } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import {
  BookOpen,
  Briefcase,
  Compass,
  HeartHandshake,
  HelpCircle,
  HeartPulse,
  Lightbulb,
  MoonStar,
  NotebookPen,
  RefreshCw,
  Sparkles,
  Timer,
} from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { InfoGrid } from "@/components/content/InfoGrid";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { RelatedCards } from "@/components/content/RelatedCards";
import { PrevNextNav } from "@/components/content/PrevNextNav";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { CardFront } from "@/components/tarot/CardFront";
import { getCardById } from "@/lib/tarot/engine";
import { getTarotPage, TAROT_PAGES, type TarotPage, type YesNo } from "@/data/tarot";
import { getCombinationsForCard } from "@/data/tarot-combinations";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import {
  CARD_SCREEN_EXTRA,
  getLocalizedArcana,
  getLocalizedCardH1,
  getLocalizedCardNameBySlug,
  getLocalizedCardSummaryLead,
  getLocalizedElement,
  getLocalizedPlanet,
  getLocalizedSuit,
  getLocalizedTimeline,
  getLocalizedZodiac,
} from "@/locales/card-terms";

const VERDICT_BADGE: Record<YesNo, string> = {
  yes: "border-emerald-400/50 bg-emerald-500/15 text-emerald-200",
  no: "border-rose-400/50 bg-rose-500/15 text-rose-200",
  maybe: "border-[color-mix(in_oklab,var(--gold)_55%,transparent)] bg-[color-mix(in_oklab,var(--gold)_15%,transparent)] text-[color:var(--gold)]",
};

export function TarotCardScreen() {
  const { page } = useLoaderData({ strict: false }) as { page: TarotPage };
  const [language] = useLanguage();
  const t = useTranslate();
  const extra = CARD_SCREEN_EXTRA[language];
  const card = getCardById(page.id);
  const path = `/tarot/${page.slug}`;
  const index = TAROT_PAGES.findIndex((p) => p.slug === page.slug);
  const prev = index > 0 ? TAROT_PAGES[index - 1] : undefined;
  const next = index >= 0 && index < TAROT_PAGES.length - 1 ? TAROT_PAGES[index + 1] : undefined;
  const combinations = getCombinationsForCard(page.slug);

  const verdictLabel: Record<YesNo, string> = {
    yes: t("tarotUi.yes"),
    no: t("tarotUi.no"),
    maybe: t("tarotUi.maybe"),
  };

  const locName = getLocalizedCardNameBySlug(page.slug, page.name, language);
  const headingName = language === "en" && page.altName ? `${page.altName} (${page.name})` : locName;
  const pageH1 = getLocalizedCardH1(
    page.slug,
    language === "en" && page.altName ? `${page.altName} (${page.name})` : page.name,
    language,
  );
  const locArcana = getLocalizedArcana(page.arcana, language);
  const locSuit = page.suit ? getLocalizedSuit(page.suit, language) : t("tarotUi.majorNone");
  const locElement = getLocalizedElement(page.element, language);
  const locPlanet = getLocalizedPlanet(page.planet, language);
  const locZodiac = getLocalizedZodiac(page.zodiac, language);
  const summaryLead = getLocalizedCardSummaryLead(
    {
      slug: page.slug,
      name: page.name,
      arcana: page.arcana,
      element: page.element,
      planet: page.planet,
      yesNoUpright: verdictLabel[page.yesNo],
      yesNoRev: verdictLabel[page.yesNoReversed],
    },
    language,
  );

  return (
    <ArticleLayout
      crumbs={[{ label: t("tarotUi.all78Cards"), to: "/tarot" }, { label: locName }]}
      eyebrow={`${locArcana}${page.suit ? ` · ${locSuit}` : ""}`}
      title={pageH1}
      intro={language === "en" ? page.intro : `${summaryLead} ${page.intro}`}
      url={`${SITE_URL}${path}`}
      updated={page.updated}
      readingMinutes={page.readingMinutes}
      wordCount={page.wordCount}
      aside={
        card ? (
          <div className="aspect-[2/3] w-full">
            <CardFront card={card} eager />
          </div>
        ) : null
      }
      afterHeader={
        <section
          aria-label={`${headingName} — ${t("tarotUi.quickSummary")}`}
          className="rounded-2xl border border-[color-mix(in_oklab,var(--gold)_42%,transparent)] bg-[color-mix(in_oklab,var(--bg-elevated,#14111d)_88%,transparent)] p-5 shadow-[0_12px_36px_-18px_rgba(212,175,55,0.35)] sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">
              {t("tarotUi.quickSummary")}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <Link
                to="/tarot/one-card"
                className="text-foreground/85 underline underline-offset-4 hover:text-[color:var(--gold)]"
              >
                {t("tarotUi.drawDaily")} →
              </Link>
              <Link
                to="/yes-no-tarot"
                className="text-foreground/85 underline underline-offset-4 hover:text-[color:var(--gold)]"
              >
                {t("tarotUi.yesNoOracle")} →
              </Link>
              <Link
                to="/what-do-reversed-tarot-cards-mean"
                className="text-foreground/85 underline underline-offset-4 hover:text-[color:var(--gold)]"
              >
                {t("tarotUi.reversedGuide")}
              </Link>
            </div>
          </div>

          <dl className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
                {t("tarotUi.uprightKeywords")}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground">
                {page.uprightKeywords.join(", ")}
              </dd>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--aurora-1)]">
                {t("tarotUi.reversedKeywords")}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground">
                {page.reversedKeywords.join(", ")}
              </dd>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {t("tarotUi.yesNoVerdict")}
              </dt>
              <dd className="mt-2 flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${VERDICT_BADGE[page.yesNo]}`}
                >
                  {t("tarotUi.upright")}: {verdictLabel[page.yesNo]}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${VERDICT_BADGE[page.yesNoReversed]}`}
                >
                  {t("tarotUi.reversed")}: {verdictLabel[page.yesNoReversed]}
                </span>
              </dd>
            </div>
          </dl>

          <div className="mt-5 border-t border-white/10 pt-5">
            <h2 className="font-display text-lg text-foreground sm:text-xl">
              {language === "en" ? page.cardOfTheDayTitle : `${locName} — ${t("tarotUi.drawDaily")}`}
            </h2>
            <dl className="mt-3 grid gap-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                  {t("tarotUi.todaysEnergy")}
                </dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">
                  {page.cardOfTheDay.energy}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/90">
                  {t("tarotUi.leanInto")}
                </dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">
                  {page.cardOfTheDay.leanInto}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--aurora-1)]">
                  {t("tarotUi.watchOut")}
                </dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">
                  {page.cardOfTheDay.watchOutFor}
                </dd>
              </div>
            </dl>
          </div>
        </section>
      }
    >
      <ContentSection id="correspondences" title={t("tarotUi.cardAtGlance")} icon={Compass}>
        <InfoGrid
          items={[
            { label: t("tarotUi.cardNumber"), value: page.numberLabel },
            { label: t("tarotUi.arcana"), value: locArcana },
            { label: t("tarotUi.suit"), value: locSuit },
            { label: t("tarotUi.element"), value: locElement },
            { label: t("tarotUi.planet"), value: locPlanet },
            { label: t("tarotUi.zodiac"), value: locZodiac },
            { label: t("tarotUi.archetype"), value: page.archetype },
            {
              label: t("tarotUi.yesNoVerdict"),
              value: `${t("tarotUi.upright")}: ${verdictLabel[page.yesNo]} · ${t("tarotUi.reversed")}: ${verdictLabel[page.yesNoReversed]}`,
            },
            { label: t("tarotUi.uprightKeywords"), value: page.uprightKeywords.join(", ") },
          ]}
        />
      </ContentSection>

      <ContentSection id="overview" title={t("tarotUi.overview")} icon={BookOpen} paragraphs={page.overview} />

      <ContentSection id="meaning" title={`${headingName} — ${extra.meaningHeadingSuffix}`} icon={Sparkles}>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">{t("tarotUi.uprightMeaning")}</h3>
            <div className="mt-3 space-y-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.upright.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="flex items-center gap-2 font-display text-lg">
              <RefreshCw className="h-4 w-4" aria-hidden />
              {t("tarotUi.reversedMeaning")}
            </h3>
            <div className="mt-3 space-y-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.reversed.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {extra.reversedNotePrefix}{" "}
              <Link
                to="/what-do-reversed-tarot-cards-mean"
                className="text-[color:var(--gold)] hover:underline"
              >
                {extra.reversedNoteLink}
              </Link>
              .
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection
        id="future-outcome"
        title={`${headingName} — ${extra.outcomeHeadingSuffix}`}
        icon={Timer}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">
              {t("tarotUi.futureUpright")}
            </h3>
            <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.outcomeUpright}
            </p>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[color:var(--aurora-1)]">
              {t("tarotUi.futureReversed")}
            </h3>
            <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.outcomeReversed}
            </p>
          </GlassCard>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {page.timeline
            .filter((item) => item.label !== "Future")
            .map((item) => (
              <GlassCard key={item.label} className="p-5">
                <h3 className="font-display text-base text-[var(--gold)]">
                  {getLocalizedTimeline(item.label, language)} · {extra.positionSuffix}
                </h3>
                <p className="mt-2 text-base sm:text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </GlassCard>
            ))}
        </div>
      </ContentSection>

      <ContentSection
        id="love"
        title={`${headingName} — ${extra.loveHeadingSuffix}`}
        icon={HeartHandshake}
        paragraphs={page.love}
      />

      <ContentSection
        id="career-finances"
        title={`${headingName} — ${extra.careerFinHeadingSuffix}`}
        icon={Briefcase}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">{t("tarotUi.careerHeading")}</h3>
            <div className="mt-3 space-y-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.career.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">{t("tarotUi.moneyHeading")}</h3>
            <div className="mt-3 space-y-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.finance.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </GlassCard>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {extra.careerNotePrefix}{" "}
          <Link to="/career-tarot-reading" className="text-[color:var(--gold)] hover:underline">
            {extra.careerNoteLink}
          </Link>
          .
        </p>
      </ContentSection>

      <ContentSection
        id="health"
        title={t("tarotUi.healthHeading")}
        icon={HeartPulse}
        paragraphs={page.health}
      />
      <ContentSection
        id="spiritual"
        title={t("tarotUi.spiritualHeading")}
        icon={MoonStar}
        paragraphs={page.spiritual}
      />

      <ContentSection id="yes-no" title={`${headingName} — ${extra.yesNoHeadingSuffix}`} icon={HelpCircle}>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("tarotUi.whenUpright")}
            </p>
            <p className="mt-1 font-display text-3xl aurora-text">{verdictLabel[page.yesNo]}</p>
            <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.yesNoText}
            </p>
          </GlassCard>
          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("tarotUi.whenReversed")}
            </p>
            <p className="mt-1 font-display text-3xl text-[color:var(--aurora-1)]">
              {verdictLabel[page.yesNoReversed]}
            </p>
            <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.yesNoReversedText}
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection id="advice" title={t("tarotUi.adviceHeading")} icon={Lightbulb}>
        <ul className="space-y-3">
          {page.advice.map((a, i) => (
            <li key={i} className="flex gap-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
              />
              {a}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection id="practice" title={t("tarotUi.practiceHeading")} icon={NotebookPen}>
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg">{t("tarotUi.journalPrompts")}</h3>
            <ul className="mt-3 space-y-2 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.journalPrompts.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-[var(--gold)]">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
          <div className="space-y-4">
            <GlassCard className="p-6">
              <h3 className="font-display text-lg">{t("tarotUi.meditation")}</h3>
              <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                {page.meditation}
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-display text-lg">{t("tarotUi.affirmation")}</h3>
              <p className="mt-3 text-base sm:text-[15px] italic leading-relaxed text-foreground/90">
                “{page.affirmation}”
              </p>
            </GlassCard>
          </div>
        </div>
      </ContentSection>

      <RelatedCards
        title={t("tarotUi.relatedCards")}
        items={page.relatedSlugs
          .map((slug) => getTarotPage(slug))
          .filter((p): p is NonNullable<typeof p> => Boolean(p))
          .map((p) => ({
            slug: p.slug,
            name: getLocalizedCardNameBySlug(p.slug, p.name, language),
            subtitle: p.cardKeywords.join(", "),
            image: p.image,
            base: "/tarot/$slug" as const,
          }))}
      />

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={page.faqs} />
      </ContentSection>

      {combinations.length > 0 && (
        <ContentSection
          id="combinations"
          title={`${headingName} — ${t("calcUi.comboCrumb")}`}
          icon={Compass}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {combinations.map((combo) => {
              const nameA = getLocalizedCardNameBySlug(combo.cardASlug, combo.cardA.name, language);
              const nameB = getLocalizedCardNameBySlug(combo.cardBSlug, combo.cardB.name, language);
              return (
                <Link
                  key={combo.slug}
                  to="/tarot/combinations/$slug"
                  params={{ slug: combo.slug }}
                  className="block h-full"
                >
                  <GlassCard className="flex h-full flex-col justify-between p-5 transition-colors hover:border-[color-mix(in_oklab,var(--gold)_45%,transparent)]">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                        {combo.themeBadge}
                      </p>
                      <h3 className="mt-1.5 font-display text-lg text-foreground">
                        {nameA} + {nameB}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {combo.quickSummary}
                      </p>
                    </div>
                    <span className="mt-3 text-xs font-semibold text-[var(--gold)]">
                      {extra.comboReadMore}
                    </span>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {extra.comboComparePrefix}{" "}
            <Link to="/tarot/combinations" className="text-[var(--gold)] underline underline-offset-4">
              {extra.comboCompareLink}
            </Link>
            .
          </p>
        </ContentSection>
      )}

      {(() => {
        const sameClusterPeers = TAROT_PAGES.filter((p) => {
          if (p.slug === page.slug || page.relatedSlugs.includes(p.slug)) return false;
          return page.suit ? p.suit === page.suit : p.arcana === "major";
        }).slice(0, 6);

        const cardNumber = card?.number;
        const rootNumber =
          typeof cardNumber === "number" && cardNumber > 0
            ? cardNumber === 11
              ? 11
              : ((cardNumber - 1) % 9) + 1
            : null;
        const numerologySlug =
          rootNumber === 11
            ? "master-number-11"
            : rootNumber
              ? `life-path-${rootNumber}`
              : null;
        const mulankSlug =
          rootNumber && rootNumber >= 1 && rootNumber <= 9 ? `mulank-${rootNumber}` : null;
        const clusterName = page.arcana === "major" ? extra.clusterMajor : locSuit;

        return (
          <ContentSection
            id="topical-cluster"
            title={`${clusterName} — ${extra.clusterSuffix}`}
            icon={Compass}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <GlassCard className="p-5 space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  {clusterName} ({locElement})
                </p>
                <div className="flex flex-wrap gap-2">
                  {sameClusterPeers.map((peer) => (
                    <Link
                      key={peer.slug}
                      to="/tarot/$slug"
                      params={{ slug: peer.slug }}
                      className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-foreground/90 transition-colors hover:border-[var(--gold)]/55 hover:text-[var(--gold)]"
                    >
                      {getLocalizedCardNameBySlug(peer.slug, peer.name, language)}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-xs text-muted-foreground">
                  <Link
                    to={
                      page.suit
                        ? (`/guide/tarot-card-meanings#${page.suit}` as any)
                        : "/major-arcana-tarot-cards-meanings"
                    }
                    className="text-[var(--gold)] underline underline-offset-4"
                  >
                    {page.suit ? `${locSuit} — ${t("guideHub.g3Title")}` : t("guideHub.g6Title")} →
                  </Link>
                  <Link to="/guide/tarot-spreads" className="underline underline-offset-4 hover:text-foreground">
                    {t("guideHub.g2Title")}
                  </Link>
                </div>
              </GlassCard>

              <GlassCard className="p-5 space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--aurora-1)]">
                  {extra.bridgeTitle}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {summaryLead}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                  {numerologySlug && (
                    <Link
                      to="/numerology/$slug"
                      params={{ slug: numerologySlug }}
                      className="font-semibold text-[var(--gold)] underline underline-offset-4"
                    >
                      {rootNumber === 11 ? `${extra.masterWord} 11` : `${extra.lifePathWord} ${rootNumber}`} →
                    </Link>
                  )}
                  {mulankSlug && (
                    <Link
                      to="/numerology/$slug"
                      params={{ slug: mulankSlug }}
                      className="font-semibold text-foreground/90 underline underline-offset-4 hover:text-[var(--gold)]"
                    >
                      {extra.rootNumWord} {rootNumber} →
                    </Link>
                  )}
                  <Link
                    to="/numerology/compatibility"
                    className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  >
                    {t("calcUi.compatHubCrumb")}
                  </Link>
                </div>
              </GlassCard>
            </div>
          </ContentSection>
        );
      })()}

      <KeepExploring
        links={[
          {
            to: "/tarot/combinations",
            label: extra.comboCompareLink,
            blurb: `${locName} — ${t("calcUi.comboHeading")}`,
          },
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
            to: "/yes-no-tarot",
            label: t("tarotHub.rt4Title"),
            blurb: t("tarotHub.rt4Body"),
          },
          {
            to: "/numerology",
            label: t("numerologyLanding2.cta"),
            blurb: t("calcUi.openFreeCalc"),
          },
        ]}
      />

      <PrevNextNav
        base="/tarot/$slug"
        hubTo="/tarot"
        hubLabel={t("tarotUi.all78Cards")}
        prev={prev ? { slug: prev.slug, label: getLocalizedCardNameBySlug(prev.slug, prev.name, language) } : undefined}
        next={next ? { slug: next.slug, label: getLocalizedCardNameBySlug(next.slug, next.name, language) } : undefined}
      />

      <CTASection
        title={`${locName} — ${extra.drawLivePrefix}`}
        body={page.cardOfTheDay.energy}
        ctaLabel={extra.drawLiveCta}
        to="/reading"
      />
    </ArticleLayout>
  );
}
