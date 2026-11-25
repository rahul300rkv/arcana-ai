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
import { SITE_URL } from "@/lib/site";

const VERDICT_LABEL: Record<YesNo, "Yes" | "No" | "Maybe"> = {
  yes: "Yes",
  no: "No",
  maybe: "Maybe",
};

const VERDICT_BADGE: Record<YesNo, string> = {
  yes: "border-emerald-400/50 bg-emerald-500/15 text-emerald-200",
  no: "border-rose-400/50 bg-rose-500/15 text-rose-200",
  maybe: "border-[color-mix(in_oklab,var(--gold)_55%,transparent)] bg-[color-mix(in_oklab,var(--gold)_15%,transparent)] text-[color:var(--gold)]",
};

export function TarotCardScreen() {
  const { page } = useLoaderData({ strict: false }) as { page: TarotPage };
  const card = getCardById(page.id);
  const path = `/tarot/${page.slug}`;
  const index = TAROT_PAGES.findIndex((p) => p.slug === page.slug);
  const prev = index > 0 ? TAROT_PAGES[index - 1] : undefined;
  const next = index >= 0 && index < TAROT_PAGES.length - 1 ? TAROT_PAGES[index + 1] : undefined;
  const combinations = getCombinationsForCard(page.slug);

  const headingName = page.altName ? `${page.altName} (${page.name})` : page.name;
  const pageH1 = page.altName
    ? `${page.altName} (${page.name}): Meaning & Card of the Day`
    : `${page.name} Tarot Card Meaning & Card of the Day`;

  return (
    <ArticleLayout
      crumbs={[{ label: "Tarot Card Meanings", to: "/tarot" }, { label: page.name }]}
      eyebrow={`${page.arcanaLabel}${page.suit ? ` · ${page.suitLabel}` : ""}`}
      title={pageH1}
      intro={page.intro}
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
          aria-label={`${headingName} quick reference keywords, Yes or No verdict, and Card of the Day`}
          className="rounded-2xl border border-[color-mix(in_oklab,var(--gold)_42%,transparent)] bg-[color-mix(in_oklab,var(--bg-elevated,#14111d)_88%,transparent)] p-5 shadow-[0_12px_36px_-18px_rgba(212,175,55,0.35)] sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">
              Quick-Reference Card Summary
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <Link
                to="/tarot/one-card"
                className="text-foreground/85 underline underline-offset-4 hover:text-[color:var(--gold)]"
              >
                Draw Card of the Day →
              </Link>
              <Link
                to="/yes-no-tarot"
                className="text-foreground/85 underline underline-offset-4 hover:text-[color:var(--gold)]"
              >
                Yes / No Oracle →
              </Link>
              <Link
                to="/what-do-reversed-tarot-cards-mean"
                className="text-foreground/85 underline underline-offset-4 hover:text-[color:var(--gold)]"
              >
                Reversed Cards Guide
              </Link>
            </div>
          </div>

          <dl className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
                Upright Card Keywords
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground">
                {page.uprightKeywords.join(", ")}
              </dd>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--aurora-1)]">
                Reversed Card Keywords
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground">
                {page.reversedKeywords.join(", ")}
              </dd>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Yes or No Verdict
              </dt>
              <dd className="mt-2 flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${VERDICT_BADGE[page.yesNo]}`}
                >
                  Upright: {VERDICT_LABEL[page.yesNo]}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${VERDICT_BADGE[page.yesNoReversed]}`}
                >
                  Reversed: {VERDICT_LABEL[page.yesNoReversed]}
                </span>
              </dd>
            </div>
          </dl>

          <div className="mt-5 border-t border-white/10 pt-5">
            <h2 className="font-display text-lg text-foreground sm:text-xl">
              {page.cardOfTheDayTitle}
            </h2>
            <dl className="mt-3 grid gap-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                  Today&apos;s Energy
                </dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">
                  {page.cardOfTheDay.energy}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/90">
                  Lean Into
                </dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">
                  {page.cardOfTheDay.leanInto}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--aurora-1)]">
                  Watch Out For
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
      <ContentSection id="correspondences" title="Card at a glance" icon={Compass}>
        <InfoGrid
          items={[
            { label: "Card number", value: page.numberLabel },
            { label: "Arcana", value: page.arcanaLabel },
            { label: "Suit", value: page.suit ? page.suitLabel : "None (Major Arcana)" },
            { label: "Element", value: page.element },
            { label: "Planet", value: page.planet },
            { label: "Zodiac", value: page.zodiac },
            { label: "Archetype", value: page.archetype },
            {
              label: "Yes / No",
              value: `Upright: ${VERDICT_LABEL[page.yesNo]} · Reversed: ${VERDICT_LABEL[page.yesNoReversed]}`,
            },
            { label: "Upright keywords", value: page.uprightKeywords.join(", ") },
          ]}
        />
      </ContentSection>

      <ContentSection id="overview" title="Symbolism and overview" icon={BookOpen} paragraphs={page.overview} />

      <ContentSection id="meaning" title={`${headingName} meaning: upright & reversed`} icon={Sparkles}>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">Upright meaning</h3>
            <div className="mt-3 space-y-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.upright.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="flex items-center gap-2 font-display text-lg">
              <RefreshCw className="h-4 w-4" aria-hidden />
              Reversed meaning
            </h3>
            <div className="mt-3 space-y-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.reversed.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              New to upside-down draws? Read our{" "}
              <Link
                to="/what-do-reversed-tarot-cards-mean"
                className="text-[color:var(--gold)] hover:underline"
              >
                complete guide to reversed tarot card meanings
              </Link>
              .
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection
        id="future-outcome"
        title={`${headingName} in the Future / Outcome Position`}
        icon={Timer}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">
              Future / Outcome (Upright)
            </h3>
            <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.outcomeUpright}
            </p>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[color:var(--aurora-1)]">
              Future / Outcome (Reversed)
            </h3>
            <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.outcomeReversed}
            </p>
          </GlassCard>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {page.timeline
            .filter((t) => t.label !== "Future")
            .map((t) => (
              <GlassCard key={t.label} className="p-5">
                <h3 className="font-display text-base text-[var(--gold)]">{t.label} position</h3>
                <p className="mt-2 text-base sm:text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </p>
              </GlassCard>
            ))}
        </div>
      </ContentSection>

      <ContentSection
        id="love"
        title={`${headingName} in Love, Feelings & Relationships`}
        icon={HeartHandshake}
        paragraphs={page.love}
      />

      <ContentSection
        id="career-finances"
        title={`${headingName} in Career & Finances`}
        icon={Briefcase}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">Career &amp; Work</h3>
            <div className="mt-3 space-y-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.career.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">Money &amp; Finances</h3>
            <div className="mt-3 space-y-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.finance.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </GlassCard>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Asking about a role change, promotion, or financial timing? Pull a free 3-card{" "}
          <Link to="/career-tarot-reading" className="text-[color:var(--gold)] hover:underline">
            Career Tarot Reading
          </Link>
          .
        </p>
      </ContentSection>

      <ContentSection
        id="health"
        title="Health and wellbeing"
        icon={HeartPulse}
        paragraphs={page.health}
      />
      <ContentSection
        id="spiritual"
        title="Spiritual meaning"
        icon={MoonStar}
        paragraphs={page.spiritual}
      />

      <ContentSection id="yes-no" title={`${headingName} Yes or No verdict`} icon={HelpCircle}>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">When Upright</p>
            <p className="mt-1 font-display text-3xl aurora-text">{VERDICT_LABEL[page.yesNo]}</p>
            <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.yesNoText}
            </p>
          </GlassCard>
          <GlassCard className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">When Reversed</p>
            <p className="mt-1 font-display text-3xl text-[color:var(--aurora-1)]">
              {VERDICT_LABEL[page.yesNoReversed]}
            </p>
            <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.yesNoReversedText}
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection id="advice" title="Advice from this card" icon={Lightbulb}>
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

      <ContentSection id="practice" title="Journal, meditation and affirmation" icon={NotebookPen}>
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg">Journal prompts</h3>
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
              <h3 className="font-display text-lg">Meditation</h3>
              <p className="mt-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                {page.meditation}
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-display text-lg">Affirmation</h3>
              <p className="mt-3 text-base sm:text-[15px] italic leading-relaxed text-foreground/90">
                “{page.affirmation}”
              </p>
            </GlassCard>
          </div>
        </div>
      </ContentSection>

      <RelatedCards
        title="Related cards"
        items={page.relatedSlugs
          .map((slug) => getTarotPage(slug))
          .filter((p): p is NonNullable<typeof p> => Boolean(p))
          .map((p) => ({
            slug: p.slug,
            name: p.name,
            subtitle: p.cardKeywords.join(", "),
            image: p.image,
            base: "/tarot/$slug" as const,
          }))}
      />

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={page.faqs} />
      </ContentSection>

      {combinations.length > 0 && (
        <ContentSection
          id="combinations"
          title={`${headingName} Tarot Combinations`}
          icon={Compass}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {combinations.map((combo) => (
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
                      {combo.cardA.name} + {combo.cardB.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {combo.quickSummary}
                    </p>
                  </div>
                  <span className="mt-3 text-xs font-semibold text-[var(--gold)]">
                    Read combination meaning →
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Compare more two-card pairings in the{" "}
            <Link to="/tarot/combinations" className="text-[var(--gold)] underline underline-offset-4">
              Tarot Card Combinations Explorer
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

        return (
          <ContentSection
            id="topical-cluster"
            title={`${page.arcana === "major" ? "Major Arcana" : page.suitLabel} cluster & numerology bridge`}
            icon={Compass}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <GlassCard className="p-5 space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  Explore {page.arcana === "major" ? "Major Arcana" : `${page.suitLabel} (${page.element})`}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sameClusterPeers.map((peer) => (
                    <Link
                      key={peer.slug}
                      to="/tarot/$slug"
                      params={{ slug: peer.slug }}
                      className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-foreground/90 transition-colors hover:border-[var(--gold)]/55 hover:text-[var(--gold)]"
                    >
                      {peer.name}
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
                    {page.suit ? `${page.suitLabel} quick guide` : "All 22 Major Arcana meanings"} →
                  </Link>
                  <Link to="/guide/tarot-spreads" className="underline underline-offset-4 hover:text-foreground">
                    Spreads guide
                  </Link>
                </div>
              </GlassCard>

              <GlassCard className="p-5 space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--aurora-1)]">
                  Tarot × Vedic Numerology Bridge
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {numerologySlug
                    ? `${page.name} carries the energetic vibration of ${rootNumber === 11 ? "Master Number 11" : `Number ${rootNumber}`} alongside its ${page.element} element and ${page.planet} rulership.`
                    : `${page.name} opens the Major Arcana cycle at 0 — pure unconditioned potential before numerical manifestation.`}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                  {numerologySlug && (
                    <Link
                      to="/numerology/$slug"
                      params={{ slug: numerologySlug }}
                      className="font-semibold text-[var(--gold)] underline underline-offset-4"
                    >
                      {rootNumber === 11 ? "Master Number 11" : `Life Path ${rootNumber}`} Meaning →
                    </Link>
                  )}
                  {mulankSlug && (
                    <Link
                      to="/numerology/$slug"
                      params={{ slug: mulankSlug }}
                      className="font-semibold text-foreground/90 underline underline-offset-4 hover:text-[var(--gold)]"
                    >
                      Mulank {rootNumber} Profile →
                    </Link>
                  )}
                  <Link
                    to="/numerology/compatibility"
                    className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  >
                    Mulank × Bhagyank 81 Pairs
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
            label: "Tarot Combinations Explorer",
            blurb: `Check what ${page.name} means when drawn next to any other card in a spread.`,
          },
          {
            to: "/major-arcana-tarot-cards-meanings",
            label: "Major Arcana 22-card table",
            blurb: "See all 22 Major Arcana archetypes and Three Stages of The Fool's Journey.",
          },
          {
            to: "/what-do-reversed-tarot-cards-mean",
            label: "Reversed tarot cards guide",
            blurb: "Learn how upside-down cards modify outcomes through four practical lenses.",
          },
          {
            to: "/yes-no-tarot",
            label: "Free Yes or No Tarot Oracle",
            blurb: `Test ${page.name} alongside a live Yes / No / Maybe oracle card pull.`,
          },
          {
            to: "/numerology",
            label: "Mulank & Bhagyank Calculator",
            blurb: `Pair ${page.name}'s themes with your Vedic Psychic and Destiny numbers.`,
          },
        ]}
      />

      <PrevNextNav
        base="/tarot/$slug"
        hubTo="/tarot"
        hubLabel="All 78 tarot cards"
        prev={prev ? { slug: prev.slug, label: prev.name } : undefined}
        next={next ? { slug: next.slug, label: next.name } : undefined}
      />

      <CTASection
        title={`Draw ${page.name} in a live spread`}
        body={`Pull ${page.name} alongside clarifying cards to test how ${page.cardKeywords[0].toLowerCase()} speaks directly to your current question.`}
        ctaLabel="Start your free reading"
        to="/reading"
      />
    </ArticleLayout>
  );
}
