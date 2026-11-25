import { useLoaderData } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import {
  BookOpen,
  Briefcase,
  Coins,
  Compass,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  Lightbulb,
  MoonStar,
  NotebookPen,
  Sparkles,
  Users,
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
import { getNumerologyPage, NUMEROLOGY_PAGES, type NumerologyPage } from "@/data/numerology";
import type { MulankPage } from "@/data/mulank";
import type { MulankBhagyankProfile } from "@/data/mulank-bhagyank-pairs";
import { MulankArticle } from "@/components/content/MulankArticle";
import { MulankBhagyankPairScreen } from "@/screens/MulankBhagyankPairScreen";
import { SITE_URL } from "@/lib/site";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";
import { getNumerologyNumUi } from "@/locales/guides-num-i18n";
import {
  getLocalizedCardNameBySlug,
  getLocalizedElement,
  getLocalizedPlanet,
} from "@/locales/card-terms";

export function NumerologyNumberScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const ui = getNumerologyNumUi(language);
  const data = useLoaderData({ strict: false }) as {
    page?: NumerologyPage;
    mulank?: MulankPage;
    pair?: MulankBhagyankProfile;
  };
  if (data.pair) return <MulankBhagyankPairScreen pair={data.pair} />;
  if (data.mulank) return <MulankArticle page={data.mulank} />;
  const page = data.page as NumerologyPage;
  const path = `/numerology/${page.slug}`;
  const index = NUMEROLOGY_PAGES.findIndex((p) => p.slug === page.slug);
  const prev = index > 0 ? NUMEROLOGY_PAGES[index - 1] : undefined;
  const next =
    index >= 0 && index < NUMEROLOGY_PAGES.length - 1 ? NUMEROLOGY_PAGES[index + 1] : undefined;

  const verdictLabel = {
    high: t("calcUi.highlyCompat"),
    medium: t("calcUi.workable"),
    growth: t("calcUi.growthPair"),
  } as const;

  const localizedLabel = page.isMaster
    ? `${ui.masterWord} ${page.number}`
    : `${ui.lifePathWord} ${page.number}`;
  const headingTitle = `${localizedLabel}: ${page.archetype}`;
  const localizedTarot = getLocalizedCardNameBySlug(page.tarotSlug, page.tarotCard, language);
  const localizedPlanet = getLocalizedPlanet(page.planet, language);
  const localizedElement = getLocalizedElement(page.element, language);
  const highMatches = page.compatibility
    .filter((c) => c.verdict === "high")
    .map((c) => c.number)
    .join(", ");

  return (
    <ArticleLayout
      crumbs={[{ label: BREADCRUMB_LABELS.numerology[language], to: "/numerology" }, { label: localizedLabel }]}
      eyebrow={localizedLabel}
      title={headingTitle}
      intro={page.hero}
      url={`${SITE_URL}${path}`}
      updated={page.updated}
      readingMinutes={page.readingMinutes}
      wordCount={page.wordCount}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-6xl aurora-text tabular-nums">{page.number}</span>
        </GlassCard>
      }
      afterHeader={
        <section
          aria-labelledby="quick-summary-heading"
          className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
            {ui.quickMeaningKicker}
          </p>
          <h2 id="quick-summary-heading" className="mt-1 font-display text-xl text-foreground sm:text-2xl">
            {ui.whatDoesMeanPrefix} {localizedLabel}{ui.whatDoesMeanSuffix ? ` ${ui.whatDoesMeanSuffix}` : ""}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">{page.quickAnswer}</p>

          <dl className="mt-5 grid gap-4 border-t border-white/10 pt-5 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t("calcUi.howCalc")}
              </dt>
              <dd className="mt-1 leading-relaxed text-muted-foreground">{page.calculationNote}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {ui.keyProfile}
              </dt>
              <dd className="mt-1 leading-relaxed text-muted-foreground">
                {t("calcUi.rulingPlanet")}: <strong className="text-foreground">{localizedPlanet}</strong>
                {highMatches ? (
                  <>
                    {" "}
                    · {ui.bestMatches}{" "}
                    <strong className="text-foreground tabular-nums">{highMatches}</strong>
                  </>
                ) : null}{" "}
                · {t("nav.tarot")}:{" "}
                <Link
                  to="/tarot/$slug"
                  params={{ slug: page.tarotSlug }}
                  className="text-[var(--gold)] hover:underline"
                >
                  {localizedTarot}
                </Link>
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-4 text-sm">
            <Link
              to="/numerology"
              className="font-semibold text-[var(--gold)] underline underline-offset-4 hover:opacity-85"
            >
              {ui.checkFreeLink}
            </Link>
            {!page.isMaster && (
              <Link
                to="/numerology/$slug"
                params={{ slug: `mulank-${page.number}` }}
                className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                {ui.compareMulankPrefix} {page.number} →
              </Link>
            )}
          </div>
        </section>
      }
    >
      <ContentSection id="correspondences" title={t("calcUi.numberAtGlance")} icon={Compass}>
        <InfoGrid
          items={[
            { label: BREADCRUMB_LABELS.numerology[language], value: String(page.number) },
            { label: t("tarotUi.archetype"), value: page.archetype },
            { label: t("calcUi.rulingPlanet"), value: localizedPlanet },
            { label: t("tarotUi.element"), value: localizedElement },
            { label: ui.tarotArchetype.replace(/:\s*$/, ""), value: localizedTarot },
            { label: t("calcUi.luckyColours"), value: page.luckyColours.join(", ") },
            { label: t("calcUi.luckyDays"), value: page.luckyDays.join(", ") },
            { label: t("calcUi.luckyNumbers"), value: page.luckyNumbers.join(", ") },
            { label: t("tarotUi.arcana"), value: page.isMaster ? t("calcUi.masterNumber") : ui.rootNumWord },
          ]}
        />
      </ContentSection>

      <ContentSection
        id="meaning"
        title={`${localizedLabel} ${ui.meaningSuffix}`.trim()}
        icon={BookOpen}
        paragraphs={page.meaning}
      />
      <ContentSection
        id="personality"
        title={ui.personalityTraits}
        icon={Sparkles}
        paragraphs={page.personality}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">{t("calcUi.strengths")}</h3>
            <ul className="mt-3 space-y-2 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.strengths.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden className="text-[var(--gold)]">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="font-display text-lg">{t("calcUi.challenges")}</h3>
            <ul className="mt-3 space-y-2 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.weaknesses.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden className="text-muted-foreground/70">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection id="career" title={t("calcUi.careerWork")} icon={Briefcase} paragraphs={page.career}>
        <div className="flex flex-wrap gap-2">
          {page.careerPaths.map((c) => (
            <span key={c} className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="relationships"
        title={t("calcUi.loveRel")}
        icon={HeartHandshake}
        paragraphs={page.relationships}
      />
      <ContentSection
        id="marriage"
        title={t("calcUi.marriageFamily")}
        icon={Users}
        paragraphs={page.marriage}
      />
      <ContentSection id="money" title={t("calcUi.moneyFin")} icon={Coins} paragraphs={page.money} />
      <ContentSection
        id="health"
        title={t("tarotUi.healthHeading")}
        icon={HeartPulse}
        paragraphs={page.health}
      />
      <ContentSection
        id="spiritual"
        title={t("calcUi.spiritualPath")}
        icon={MoonStar}
        paragraphs={page.spiritual}
      />

      <ContentSection
        id="compatibility"
        title={t("calcUi.compatNumbers")}
        icon={HeartHandshake}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {page.compatibility.map((c) => {
            const singleDigit = /^[1-9]$/.test(c.number.trim()) ? Number(c.number.trim()) : null;
            const masterSlug =
              c.number.trim() === "11"
                ? "master-number-11"
                : c.number.trim() === "22"
                  ? "master-number-22"
                  : null;
            const targetSlug =
              !page.isMaster && singleDigit && page.number >= 1 && page.number <= 9
                ? `mulank-${page.number}-bhagyank-${singleDigit}`
                : singleDigit
                  ? `life-path-${singleDigit}`
                  : masterSlug;

            const cardBody = (
              <GlassCard className="h-full p-5 transition-colors hover:border-[color:var(--gold)]/45">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-base">{c.number}</h3>
                  <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]">
                    {verdictLabel[c.verdict]}
                  </span>
                </div>
                <p className="mt-2 text-base sm:text-sm leading-relaxed text-muted-foreground">{c.note}</p>
                {targetSlug && (
                  <span className="mt-3 inline-block text-xs font-semibold text-[var(--gold)]">
                    {!page.isMaster && singleDigit
                      ? `${ui.explorePair} (${page.number} × ${singleDigit})`
                      : `${ui.readNumberGuide} (${c.number})`}
                  </span>
                )}
              </GlassCard>
            );

            return targetSlug ? (
              <Link
                key={c.number}
                to="/numerology/$slug"
                params={{ slug: targetSlug }}
                className="block h-full"
              >
                {cardBody}
              </Link>
            ) : (
              <div key={c.number}>{cardBody}</div>
            );
          })}
        </div>
      </ContentSection>

      <ContentSection id="lessons" title={t("calcUi.lifeLessons")} icon={Lightbulb}>
        <ul className="space-y-3">
          {page.lifeLessons.map((l, i) => (
            <li key={i} className="flex gap-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
              />
              {l}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection id="famous" title={t("calcUi.famousPeople")} icon={Users}>
        <div className="flex flex-wrap gap-2">
          {page.famous.map((f) => (
            <span key={f} className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              {f}
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="practice" title={t("calcUi.journalAffirm")} icon={NotebookPen}>
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg">{ui.journalPrompts}</h3>
            <ul className="mt-3 space-y-2 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.journalPrompts.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-[var(--gold)]">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="font-display text-lg">{ui.affirmation}</h3>
            <p className="mt-3 text-base sm:text-[15px] italic leading-relaxed text-foreground/90">
              “{page.affirmation}”
            </p>
            <p className="mt-4 text-base sm:text-sm text-muted-foreground">
              {ui.tarotArchetype}{" "}
              <Link
                to="/tarot/$slug"
                params={{ slug: page.tarotSlug }}
                className="text-[var(--gold)] hover:underline"
              >
                {localizedTarot}
              </Link>
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      <RelatedCards
        title={t("calcUi.relatedNumbers")}
        items={page.relatedSlugs
          .map((slug) => getNumerologyPage(slug))
          .filter((p): p is NumerologyPage => Boolean(p))
          .map((p) => ({
            slug: p.slug,
            name: p.isMaster ? `${ui.masterWord} ${p.number}` : `${ui.lifePathWord} ${p.number}`,
            subtitle: p.archetype,
            base: "/numerology/$slug" as const,
          }))}
      />

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={page.faqs} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/numerology",
            label: t("numerology.title"),
            blurb: t("numerology.subtitle"),
          },
          {
            to: "/numerology/compatibility",
            label: t("calcUi.compatHubCrumb"),
            blurb: ui.compatIntro,
          },
          {
            to: "/bhagyank-calculator",
            label: t("numerologyLanding2.cta"),
            blurb: t("numerologyLanding.step2Body"),
          },
          {
            to: "/namank-calculator",
            label: t("numerologyLanding3.cta"),
            blurb: t("numerologyLanding.step3Body"),
          },
          {
            to: "/guide/mulank-vs-bhagyank",
            label: `${BREADCRUMB_LABELS.mulank[language]} × ${BREADCRUMB_LABELS.bhagyank[language]}`,
            blurb: t("numerologyLanding.subtitle"),
          },
          {
            to: "/tarot",
            label: localizedTarot,
            blurb: t("tarotHub.intro"),
          },
        ]}
      />

      <PrevNextNav
        base="/numerology/$slug"
        hubTo="/numerology"
        hubLabel={t("calcUi.allNumbers")}
        prev={
          prev
            ? {
                slug: prev.slug,
                label: prev.isMaster ? `${ui.masterWord} ${prev.number}` : `${ui.lifePathWord} ${prev.number}`,
              }
            : undefined
        }
        next={
          next
            ? {
                slug: next.slug,
                label: next.isMaster ? `${ui.masterWord} ${next.number}` : `${ui.lifePathWord} ${next.number}`,
              }
            : undefined
        }
      />

      <CTASection
        title={localizedLabel}
        body={t("numerologyLanding.subtitle")}
        ctaLabel={t("calcUi.openFreeCalc")}
        to="/numerology"
      />
    </ArticleLayout>
  );
}
