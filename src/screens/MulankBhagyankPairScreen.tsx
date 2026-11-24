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

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export function MulankBhagyankPairScreen({ pair }: { pair: MulankBhagyankProfile }) {
  const path = `/numerology/${pair.slug}`;

  return (
    <ArticleLayout
      crumbs={[
        { label: "Numerology", to: "/numerology" },
        { label: "Compatibility Matrix", to: "/numerology/compatibility" },
        { label: `Mulank ${pair.mulank} × Bhagyank ${pair.bhagyank}` },
      ]}
      eyebrow={`${pair.mulankPlanet} × ${pair.bhagyankPlanet}`}
      title={pair.headline}
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
              {pair.score}/100 Match
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
                Planetary Verdict
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
                Mulank {pair.mulank} Guide
              </Link>
              <Link
                to="/numerology/$slug"
                params={{ slug: `life-path-${pair.bhagyank}` }}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-foreground hover:border-[color:var(--gold)]/50"
              >
                Bhagyank / Life Path {pair.bhagyank}
              </Link>
              <Link
                to="/hi/numerology/$slug"
                params={{ slug: `mulank-${pair.mulank}` }}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[color:var(--gold)] hover:border-[color:var(--gold)]/50"
              >
                हिंदी: मूलांक {pair.mulank}
              </Link>
            </div>
          </div>
        </section>
      }
    >
      <ContentSection id="profile-at-a-glance" title="Combination profile at a glance" icon={Compass}>
        <InfoGrid
          items={[
            { label: "Mulank (Driver)", value: `${pair.mulank} (${pair.mulankPlanet})` },
            { label: "Bhagyank (Destiny)", value: `${pair.bhagyank} (${pair.bhagyankPlanet})` },
            { label: "Synergy rating", value: `${pair.harmonyLabel} (${pair.score}/100)` },
            { label: "Archetype", value: pair.archetypeTitle },
            { label: "Lucky days", value: pair.luckyDays.join(", ") },
            { label: "Lucky colours", value: pair.luckyColours.join(", ") },
          ]}
        />
      </ContentSection>

      <ContentSection
        id="inner-vs-outer"
        title={`Inner drive (Mulank ${pair.mulank}) vs. Life Destiny (Bhagyank ${pair.bhagyank})`}
        icon={BookOpen}
        paragraphs={pair.innerVsOuter}
      />

      <ContentSection
        id="career"
        title="Career & financial direction"
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
        title="Love, marriage & partnership harmony"
        icon={HeartHandshake}
        paragraphs={pair.loveDynamics}
      />

      <ContentSection
        id="timing"
        title="Money, maturity age & favorable timing"
        icon={Coins}
        paragraphs={pair.moneyAndTiming}
      />

      <ContentSection id="tarot-bridge" title="Tarot archetypes for this chart" icon={Sparkles}>
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
              Mulank Card: {pair.tarotBridge.mulankCard} →
            </Link>
            <Link
              to="/tarot/$slug"
              params={{ slug: pair.tarotBridge.bhagyankTarotSlug }}
              className="font-semibold text-[color:var(--gold)] hover:underline"
            >
              Bhagyank Card: {pair.tarotBridge.bhagyankCard} →
            </Link>
          </div>
        </GlassCard>
      </ContentSection>

      <ContentSection id="remedies" title="Balancing remedies & daily habits" icon={Wand2}>
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
          Compare Mulank {pair.mulank} with every Bhagyank
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

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={pair.faqs} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/numerology/compatibility",
            label: "Full 81-Pair Compatibility Matrix",
            blurb: "Compare any Mulank (1–9) with any Bhagyank (1–9) interactively.",
          },
          {
            to: "/numerology",
            label: "Mulank & Bhagyank Calculator",
            blurb: "Verify your exact numbers and calculate your current Personal Year.",
          },
          {
            to: "/guide/mulank-vs-bhagyank",
            label: "Mulank vs. Bhagyank Explained",
            blurb: "Learn why Birth Number and Destiny Number work together across life stages.",
          },
          {
            to: "/tarot/combinations",
            label: "Tarot Combinations Explorer",
            blurb: "Explore paired tarot card meanings for love, work, and daily draws.",
          },
        ]}
      />

      <CTASection
        title="Verify your full Vedic chart"
        body="Enter your date of birth to confirm your Mulank, Bhagyank, and current Personal Year & Month."
        ctaLabel="Open the free calculator"
        to="/numerology"
      />
    </ArticleLayout>
  );
}
