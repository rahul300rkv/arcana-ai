import { Link } from "@/components/LocalizedLink";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Coins,
  Compass,
  HeartHandshake,
  HelpCircle,
  Sparkles,
  Wand2,
} from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { InfoGrid } from "@/components/content/InfoGrid";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import {
  buildMulankBhagyankPair,
  type MulankBhagyankProfile,
} from "@/data/mulank-bhagyank-pairs";
import { SITE_URL } from "@/lib/site";
import { useLanguage, useTranslate, setLanguage } from "@/lib/i18n";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";
import { getNumerologyNumUi } from "@/locales/guides-num-i18n";
import { getLocalizedCardNameBySlug, getLocalizedPlanet } from "@/locales/card-terms";

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export function MulankBhagyankPairScreen({ pair }: { pair: MulankBhagyankProfile }) {
  const [language] = useLanguage();
  const t = useTranslate();
  const ui = getNumerologyNumUi(language);
  const path = `/numerology/${pair.slug}`;

  const mulankLabel = BREADCRUMB_LABELS.mulank[language];
  const bhagyankLabel = BREADCRUMB_LABELS.bhagyank[language];
  const mulankPlanet = getLocalizedPlanet(pair.mulankPlanet, language);
  const bhagyankPlanet = getLocalizedPlanet(pair.bhagyankPlanet, language);
  const mulankCard = getLocalizedCardNameBySlug(
    pair.tarotBridge.mulankTarotSlug,
    pair.tarotBridge.mulankCard,
    language,
  );
  const bhagyankCard = getLocalizedCardNameBySlug(
    pair.tarotBridge.bhagyankTarotSlug,
    pair.tarotBridge.bhagyankCard,
    language,
  );

  return (
    <ArticleLayout
      crumbs={[
        { label: BREADCRUMB_LABELS.numerology[language], to: "/numerology" },
        { label: BREADCRUMB_LABELS.compatibility[language], to: "/numerology/compatibility" },
        { label: `${mulankLabel} ${pair.mulank} × ${bhagyankLabel} ${pair.bhagyank}` },
      ]}
      eyebrow={`${mulankPlanet} × ${bhagyankPlanet}`}
      title={`${mulankLabel} ${pair.mulank} × ${bhagyankLabel} ${pair.bhagyank}: ${pair.archetypeTitle}`}
      intro={pair.summary}
      url={`${SITE_URL}${path}`}
      updated={pair.updated}
      readingMinutes={5}
      wordCount={820}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6 text-center">
          <div>
            <span className="block font-display text-4xl aurora-text">
              {pair.mulank} · {pair.bhagyank}
            </span>
            <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
              {pair.score}/100 {ui.pairScoreMatch}
            </span>
          </div>
        </GlassCard>
      }
      afterHeader={
        <section
          aria-label="Pair quick links"
          className="rounded-2xl border border-white/15 bg-white/[0.03] p-5 text-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
                {t("calcUi.planetaryVerdict")}
              </span>
              <p className="mt-1 font-display text-lg text-foreground">
                {pair.harmonyLabel} ({pair.score}/100)
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <Link
                to="/numerology/$slug"
                params={{ slug: `mulank-${pair.mulank}` }}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-foreground hover:border-[color:var(--gold)]/50"
              >
                {ui.pairMulankGuide} {pair.mulank}
              </Link>
              <Link
                to="/numerology/$slug"
                params={{ slug: `life-path-${pair.bhagyank}` }}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-foreground hover:border-[color:var(--gold)]/50"
              >
                {ui.pairBhagyankGuide} {pair.bhagyank}
              </Link>
              {language === "hi" ? (
                <Link
                  to="/numerology/$slug"
                  params={{ slug: `mulank-${pair.mulank}` }}
                  onClick={() => setLanguage("en")}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[color:var(--gold)] hover:border-[color:var(--gold)]/50"
                >
                  English: Mulank {pair.mulank}
                </Link>
              ) : (
                <Link
                  to="/hi/numerology/$slug"
                  params={{ slug: `mulank-${pair.mulank}` }}
                  onClick={() => setLanguage("hi")}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[color:var(--gold)] hover:border-[color:var(--gold)]/50"
                >
                  हिंदी: मूलांक {pair.mulank}
                </Link>
              )}
            </div>
          </div>
        </section>
      }
    >
      <ContentSection id="profile-at-a-glance" title={ui.pairProfileGlance} icon={Compass}>
        <InfoGrid
          items={[
            { label: ui.pairMulankDriver, value: `${pair.mulank} (${mulankPlanet})` },
            { label: ui.pairBhagyankDestiny, value: `${pair.bhagyank} (${bhagyankPlanet})` },
            { label: ui.pairSynergyRating, value: `${pair.harmonyLabel} (${pair.score}/100)` },
            { label: t("tarotUi.archetype"), value: pair.archetypeTitle },
            { label: t("calcUi.luckyDays"), value: pair.luckyDays.join(", ") },
            { label: t("calcUi.luckyColours"), value: pair.luckyColours.join(", ") },
          ]}
        />
      </ContentSection>

      <ContentSection
        id="inner-vs-outer"
        title={`${ui.pairInnerVsOuter} (${mulankLabel} ${pair.mulank} × ${bhagyankLabel} ${pair.bhagyank})`}
        icon={BookOpen}
        paragraphs={pair.innerVsOuter}
      />

      <ContentSection
        id="career"
        title={ui.pairCareerDir}
        icon={Briefcase}
        paragraphs={pair.careerAlignment}
      >
        <div className="flex flex-wrap gap-2">
          {pair.careerRoles.map((role) => (
            <span key={role} className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              {role}
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="love"
        title={ui.pairLoveHarmony}
        icon={HeartHandshake}
        paragraphs={pair.loveDynamics}
      />

      <ContentSection
        id="timing"
        title={ui.pairMoneyTiming}
        icon={Coins}
        paragraphs={pair.moneyAndTiming}
      />

      <ContentSection id="tarot-bridge" title={ui.pairTarotBridge} icon={Sparkles}>
        <GlassCard className="p-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {pair.tarotBridge.synthesis}
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Link
              to="/tarot/$slug"
              params={{ slug: pair.tarotBridge.mulankTarotSlug }}
              className="font-semibold text-[color:var(--gold)] hover:underline"
            >
              {ui.pairMulankCard} {mulankCard} →
            </Link>
            <Link
              to="/tarot/$slug"
              params={{ slug: pair.tarotBridge.bhagyankTarotSlug }}
              className="font-semibold text-[color:var(--gold)] hover:underline"
            >
              {ui.pairBhagyankCard} {bhagyankCard} →
            </Link>
          </div>
        </GlassCard>
      </ContentSection>

      <ContentSection id="remedies" title={ui.pairRemedies} icon={Wand2}>
        <ul className="space-y-3">
          {pair.remedies.map((r) => (
            <li key={r} className="flex gap-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
              {r}
            </li>
          ))}
        </ul>
      </ContentSection>

      <section aria-labelledby="sibling-pairs-heading" className="scroll-mt-24">
        <h2 id="sibling-pairs-heading" className="font-display text-2xl aurora-text sm:text-3xl">
          {ui.pairComparePrefix} {pair.mulank} {ui.pairCompareSuffix}
        </h2>
        <div className="mt-4 grid grid-cols-3 gap-2.5 sm:grid-cols-9">
          {NUMBERS.map((b) => {
            const p = buildMulankBhagyankPair(pair.mulank, b);
            const active = b === pair.bhagyank;
            return (
              <Link
                key={p.slug}
                to="/numerology/$slug"
                params={{ slug: p.slug }}
                className={`flex flex-col items-center justify-center rounded-xl border px-2 py-2.5 text-center transition-colors ${
                  active
                    ? "border-[color:var(--gold)] bg-[color:var(--gold)]/15 text-foreground"
                    : "border-white/10 bg-white/[0.02] text-muted-foreground hover:border-[color:var(--gold)]/50 hover:text-foreground"
                }`}
              >
                <span className="font-display text-sm font-semibold">
                  {pair.mulank}×{b}
                </span>
                <span className="text-[10px] text-[color:var(--gold)]">{p.score}%</span>
              </Link>
            );
          })}
        </div>
      </section>

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={pair.faqs} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/numerology/compatibility",
            label: t("calcUi.compatHubCrumb"),
            blurb: ui.compatIntro,
          },
          {
            to: "/numerology",
            label: t("numerology.title"),
            blurb: t("numerology.subtitle"),
          },
          {
            to: "/guide/mulank-vs-bhagyank",
            label: `${mulankLabel} × ${bhagyankLabel}`,
            blurb: t("numerologyLanding.subtitle"),
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
