import { Link } from "@/components/LocalizedLink";
import {
  BookOpen,
  Briefcase,
  CalendarDays,
  Coins,
  Compass,
  Globe,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  NotebookPen,
  Sparkles,
  Users,
  Wand2,
} from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { InfoGrid } from "@/components/content/InfoGrid";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { MULANK_PAGES, getMulankPage, type MulankPage } from "@/data/mulank";
import { setLanguage } from "@/lib/language";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { getLocalizedCardNameBySlug, getLocalizedElement, getLocalizedPlanet } from "@/locales/card-terms";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";
import { getNumerologyNumUi } from "@/locales/guides-num-i18n";

/** Full article body for a single `/numerology/mulank-N` page. */
export function MulankArticle({ page }: { page: MulankPage }) {
  const [lang] = useLanguage();
  const t = useTranslate();
  const ui = getNumerologyNumUi(lang);

  const verdictLabel = {
    friend: t("calcUi.friendly"),
    neutral: t("calcUi.neutral"),
    challenge: t("calcUi.growth"),
  } as const;

  const mulankWord = BREADCRUMB_LABELS.mulank[lang];
  const bhagyankWord = BREADCRUMB_LABELS.bhagyank[lang];
  const localLabel = lang === "en" ? page.label : `${mulankWord} ${page.number}`;
  const localPlanet = getLocalizedPlanet(page.planet, lang);
  const localElement = getLocalizedElement(page.element, lang);
  const localTarotCard = getLocalizedCardNameBySlug(page.tarotSlug, page.tarotCard, lang);

  const path = `/numerology/${page.slug}`;
  const index = MULANK_PAGES.findIndex((p) => p.slug === page.slug);
  const prev = index > 0 ? MULANK_PAGES[index - 1] : undefined;
  const next = index < MULANK_PAGES.length - 1 ? MULANK_PAGES[index + 1] : undefined;
  const related = page.relatedSlugs
    .map((s) => getMulankPage(s))
    .filter((p): p is MulankPage => Boolean(p) && p!.slug !== page.slug);

  return (
    <ArticleLayout
      crumbs={[
        { label: t("numerology.navLabel"), to: "/numerology" },
        { label: mulankWord, to: "/numerology/mulank" },
        { label: localLabel },
      ]}
      eyebrow={ui.mulankEyebrow}
      title={`${localLabel}: ${page.archetype}`}
      intro={page.hero}
      url={`${SITE_URL}${path}`}
      updated={page.updated}
      readingMinutes={page.readingMinutes}
      wordCount={page.wordCount}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-6xl aurora-text">{page.number}</span>
        </GlassCard>
      }
      afterHeader={
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3.5 text-xs">
          <span className="text-muted-foreground">
            {ui.ruledBy} <strong className="text-[var(--gold)]">{localPlanet}</strong> · {t("calcUi.datesLabel")}{" "}
            <strong className="text-foreground">{page.dates.join(", ")}</strong>
          </span>
          <div className="flex flex-wrap items-center gap-4">
            {lang === "hi" ? (
              <Link
                to="/numerology/$slug"
                params={{ slug: page.slug }}
                onClick={() => setLanguage("en")}
                className="inline-flex items-center gap-1.5 font-semibold text-[var(--gold)] hover:underline"
              >
                <Globe className="h-3.5 w-3.5" aria-hidden />
                English: Mulank {page.number}
              </Link>
            ) : (
              <Link
                to="/hi/numerology/$slug"
                params={{ slug: page.slug }}
                onClick={() => setLanguage("hi")}
                className="inline-flex items-center gap-1.5 font-semibold text-[var(--gold)] hover:underline"
              >
                <Globe className="h-3.5 w-3.5" aria-hidden />
                हिंदी: मूलांक {page.number}
              </Link>
            )}
            <Link
              to="/numerology/$slug"
              params={{ slug: `mulank-${page.number}-bhagyank-${page.number}` }}
              className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-[var(--gold)] hover:underline"
            >
              {mulankWord} {page.number} × {bhagyankWord} {page.number} →
            </Link>
          </div>
        </div>
      }
    >
      <ContentSection id="dates" title={ui.whoHasMulank} icon={CalendarDays}>
        <div className="flex flex-wrap gap-2">
          {page.dates.map((d) => (
            <span key={d} className="rounded-full glass px-4 py-1.5 text-sm text-[var(--gold)]">
              {t("calcUi.bornOnPrefix")} {d}
            </span>
          ))}
        </div>
        <p className="mt-4 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
          {ui.mulankCalcNote1}{" "}
          <Link
            to="/numerology/$slug"
            params={{ slug: page.lifePathSlug }}
            className="text-[var(--gold)] hover:underline"
          >
            {ui.lifePathWord} {page.number}
          </Link>{" "}
          {ui.mulankCalcNote2}
        </p>
      </ContentSection>

      <ContentSection id="correspondences" title={ui.mulankAtGlance} icon={Compass}>
        <InfoGrid
          items={[
            { label: mulankWord, value: String(page.number) },
            { label: t("tarotUi.archetype"), value: page.archetype },
            { label: t("calcUi.rulingPlanet"), value: localPlanet },
            { label: t("calcUi.deity"), value: page.deity },
            { label: t("tarotUi.element"), value: localElement },
            { label: t("calcUi.direction"), value: page.direction },
            { label: t("calcUi.gemstone"), value: page.gemstone },
            { label: ui.tarotArchetype.replace(/:$/, ""), value: localTarotCard },
            { label: ui.birthDates, value: page.dates.join(", ") },
            { label: t("calcUi.luckyColours"), value: page.luckyColours.join(", ") },
            { label: t("calcUi.luckyDays"), value: page.luckyDays.join(", ") },
          ]}
        />
      </ContentSection>

      <ContentSection
        id="meaning"
        title={`${localLabel} ${ui.meaningSuffix}`}
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

      <ContentSection
        id="career"
        title={ui.careerAndBusiness}
        icon={Briefcase}
        paragraphs={page.career}
      >
        <div className="flex flex-wrap gap-2">
          {page.careerPaths.map((c) => (
            <span key={c} className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="love"
        title={ui.loveAndCompat}
        icon={HeartHandshake}
        paragraphs={page.love}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {page.compatibility.map((c) => (
            <Link
              key={`${c.verdict}-${c.number}`}
              to="/numerology/$slug"
              params={{ slug: `mulank-${c.number}` }}
              className="block h-full"
            >
              <GlassCard className="h-full p-5 transition-colors hover:border-[color:var(--gold)]/45">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-base">{mulankWord} {c.number}</h3>
                  <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]">
                    {verdictLabel[c.verdict]}
                  </span>
                </div>
                <p className="mt-2 text-base sm:text-sm leading-relaxed text-muted-foreground">{c.note}</p>
                <span className="mt-3 inline-block text-xs font-semibold text-[var(--gold)]">
                  {ui.exploreMulank} {c.number} →
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="health"
        title={t("tarotUi.healthHeading")}
        icon={HeartPulse}
        paragraphs={page.health}
      />
      <ContentSection id="money" title={t("calcUi.moneyFin")} icon={Coins} paragraphs={page.money} />

      <ContentSection id="remedies" title={t("calcUi.remediesTitle")} icon={Wand2}>
        <ul className="space-y-3">
          {page.remedies.map((r) => (
            <li key={r} className="flex gap-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
              />
              {r}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm sm:text-xs leading-relaxed text-muted-foreground">
          {ui.remediesNote}
        </p>
      </ContentSection>

      <ContentSection id="famous" title={ui.famousMulank} icon={Users}>
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
                {localTarotCard}
              </Link>
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      <section aria-labelledby="related-mulank-heading" className="scroll-mt-24">
        <h2 id="related-mulank-heading" className="font-display text-2xl aurora-text sm:text-3xl">
          {t("calcUi.relatedBirthNumbers")}
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link to="/numerology/$slug" params={{ slug: r.slug }} className="block h-full">
                <GlassCard className="h-full p-4">
                  <span className="block font-display text-base">
                    {lang === "en" ? r.label : `${mulankWord} ${r.number}`}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">{r.archetype}</span>
                </GlassCard>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={page.faqs} />
      </ContentSection>

      <nav aria-label={ui.completeMulankGuide} className="grid gap-4 sm:grid-cols-2">
        <Link
          to={prev ? "/numerology/$slug" : "/numerology/mulank"}
          {...(prev ? { params: { slug: prev.slug } } : {})}
          className="block"
        >
          <GlassCard className="h-full p-4">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {prev ? t("common.previous") : t("common.backTo")}
            </span>
            <span className="mt-1 block font-display text-sm">
              {prev ? (lang === "en" ? prev.label : `${mulankWord} ${prev.number}`) : ui.completeMulankGuide}
            </span>
          </GlassCard>
        </Link>
        <Link
          to={next ? "/numerology/$slug" : "/numerology/mulank"}
          {...(next ? { params: { slug: next.slug } } : {})}
          className="block"
        >
          <GlassCard className="h-full p-4 text-right">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {next ? t("common.next") : t("common.backTo")}
            </span>
            <span className="mt-1 block font-display text-sm">
              {next ? (lang === "en" ? next.label : `${mulankWord} ${next.number}`) : ui.completeMulankGuide}
            </span>
          </GlassCard>
        </Link>
      </nav>

      <KeepExploring
        links={[
          {
            to: "/numerology/mulank",
            label: t("mulankHub.title"),
            blurb: t("numHub.rel1Body"),
          },
          {
            to: "/numerology/compatibility",
            label: t("numHub.rel4Title"),
            blurb: t("lfooter.n3"),
          },
          {
            to: "/bhagyank-calculator",
            label: t("numHub.rel2Title"),
            blurb: t("numHub.rel2Body"),
          },
          {
            to: "/namank-calculator",
            label: t("numHub.rel3Title"),
            blurb: t("numHub.rel3Body"),
          },
          {
            to: "/guide/mulank-vs-bhagyank",
            label: t("lfooter.n6"),
            blurb: t("numHub.rel4Body"),
          },
          {
            to: "/tarot",
            label: `${localTarotCard} · ${t("tarotUi.all78Cards")}`,
            blurb: t("tarotHub.t1Body"),
          },
        ]}
      />

      <CTASection
        title={`${localLabel} — ${t("numerology.title")}`}
        body={`${t("mulankHub.ctaBody")}`}
        ctaLabel={t("calcUi.openFreeCalc")}
        to="/numerology"
      />
    </ArticleLayout>
  );
}
