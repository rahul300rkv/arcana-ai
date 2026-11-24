import { useMemo, useState } from "react";
import { Link } from "@/components/LocalizedLink";
import { ArrowRight, Compass, HeartHandshake, HelpCircle, Sparkles } from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import {
  buildMulankBhagyankPair,
  PAIRS_UPDATED,
  type PairHarmony,
} from "@/data/mulank-bhagyank-pairs";
import { SITE_URL } from "@/lib/site";

export const COMPATIBILITY_HUB_FAQS = [
  {
    question: "What does a Mulank and Bhagyank combination tell you?",
    answer:
      "Your Mulank (day of birth reduced to 1 through 9) reflects your instinctive temperament, first impression, and emotional reflexes. Your Bhagyank (sum of your full DD/MM/YYYY birth date) reveals your long-term life path, career trajectory, and mature purpose after age 28 to 32. Comparing the two explains where your daily habits naturally amplify your destiny versus where conscious balance creates growth.",
  },
  {
    question: "How is Vedic Mulank-Bhagyank compatibility judged?",
    answer:
      "Classical Ank Shastra maps each digit 1 through 9 to a Navagraha planet (Sun, Moon, Jupiter, Rahu, Mercury, Venus, Ketu, Saturn, Mars) and checks planetary friendship (Naisargika Maitri). Friendly pairs create smooth cooperation, neutral pairs give steady autonomy, and contrasting pairs produce high-resilience growth.",
  },
  {
    question: "What if my Mulank and Bhagyank are unfriendly or contrasting numbers (like 1 and 8, or 4 and 1)?",
    answer:
      "Challenging planetary combinations never mean failure. Many successful leaders and reformers carry contrasting pairs like 1 and 8 (Sun and Saturn) or 2 and 5 (Moon and Mercury). It simply means early patience and conscious bridge-building turn inner friction into lasting strength.",
  },
  {
    question: "Can I check partner compatibility using Mulank and Bhagyank too?",
    answer:
      "Yes. While a personal chart compares your own Mulank against your Bhagyank, comparing one person's Mulank against a partner's Mulank or Bhagyank uses the exact same Vedic planetary friendship table to highlight emotional and lifestyle alignment.",
  },
];

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

const HARMONY_BADGE: Record<PairHarmony, string> = {
  synergy: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
  balanced: "border-[color:var(--gold)]/45 bg-[color:var(--gold)]/15 text-[color:var(--gold)]",
  dynamic: "border-rose-400/40 bg-rose-500/15 text-rose-200",
};

export function MulankCompatibilityHubScreen() {
  const [selectedMulank, setSelectedMulank] = useState<number>(1);
  const [selectedBhagyank, setSelectedBhagyank] = useState<number>(5);

  const livePair = useMemo(
    () => buildMulankBhagyankPair(selectedMulank, selectedBhagyank),
    [selectedMulank, selectedBhagyank],
  );

  return (
    <ArticleLayout
      crumbs={[
        { label: "Numerology", to: "/numerology" },
        { label: "Mulank × Bhagyank Compatibility" },
      ]}
      eyebrow="81 Vedic Numerology Pairs"
      title="Mulank & Bhagyank Compatibility Matrix (1–9 × 1–9)"
      intro="Check how your Birth Number (Mulank) interacts with your Destiny Number (Bhagyank) across all 81 classical Navagraha planetary pairings. Select your two numbers below or explore the full 9×9 grid."
      url={`${SITE_URL}/numerology/compatibility`}
      updated={PAIRS_UPDATED}
      readingMinutes={8}
      wordCount={1200}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6 text-center">
          <div>
            <span className="block font-display text-5xl aurora-text">81</span>
            <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Pair Matrix
            </span>
          </div>
        </GlassCard>
      }
      afterHeader={
        <section
          aria-labelledby="interactive-matcher-heading"
          className="rounded-2xl border border-[color:var(--gold)]/40 bg-white/[0.03] p-5 sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
            Interactive Compatibility Checker
          </p>
          <h2 id="interactive-matcher-heading" className="mt-1 font-display text-xl sm:text-2xl">
            Test Your Mulank + Bhagyank Combination
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="select-mulank" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Your Mulank (Birth Day 1–9)
              </label>
              <select
                id="select-mulank"
                value={selectedMulank}
                onChange={(e) => setSelectedMulank(Number(e.target.value))}
                className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-[#1b060d] px-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
              >
                {NUMBERS.map((n) => (
                  <option key={n} value={n}>
                    Mulank {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="select-bhagyank" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Your Bhagyank (Destiny 1–9)
              </label>
              <select
                id="select-bhagyank"
                value={selectedBhagyank}
                onChange={(e) => setSelectedBhagyank(Number(e.target.value))}
                className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-[#1b060d] px-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
              >
                {NUMBERS.map((n) => (
                  <option key={n} value={n}>
                    Bhagyank {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <GlassCard className="mt-5 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-display text-lg sm:text-xl text-foreground">
                  {livePair.headline}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {livePair.mulankPlanet} × {livePair.bhagyankPlanet}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${HARMONY_BADGE[livePair.harmony]}`}>
                  {livePair.harmonyLabel} · {livePair.score}/100
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{livePair.summary}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs">
              <Link
                to="/numerology/$slug"
                params={{ slug: livePair.slug }}
                className="inline-flex items-center gap-1.5 font-semibold text-[color:var(--gold)] hover:underline"
              >
                Read Full Mulank {livePair.mulank} &amp; Bhagyank {livePair.bhagyank} Guide
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
              <Link
                to="/numerology"
                className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                Don&apos;t know your numbers? Calculate free →
              </Link>
            </div>
          </GlassCard>
        </section>
      }
    >
      <ContentSection
        id="matrix"
        title="Complete 81-Pair Directory (Mulank 1–9 × Bhagyank 1–9)"
        icon={Compass}
        paragraphs={[
          "Click any cell in the Vedic compatibility matrix below to open the dedicated full-length guide covering personality interplay, career roles, marriage dynamics, planetary remedies, and Tarot correspondence for that exact Mulank and Bhagyank pair.",
        ]}
      >
        <div className="space-y-4">
          {NUMBERS.map((m) => (
            <GlassCard key={m} className="p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <h3 className="font-display text-lg text-[color:var(--gold)]">
                  Mulank {m} Pairings
                </h3>
                <Link
                  to="/numerology/$slug"
                  params={{ slug: `mulank-${m}` }}
                  className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  About Mulank {m} →
                </Link>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-9">
                {NUMBERS.map((b) => {
                  const pair = buildMulankBhagyankPair(m, b);
                  return (
                    <Link
                      key={pair.slug}
                      to="/numerology/$slug"
                      params={{ slug: pair.slug }}
                      className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-2 py-2.5 text-center transition-colors hover:border-[color:var(--gold)]/60 hover:bg-[color:var(--gold)]/10"
                    >
                      <span className="font-display text-sm font-semibold text-foreground">
                        {m}×{b}
                      </span>
                      <span className="mt-0.5 text-[10px] text-[color:var(--gold)]">
                        {pair.score}%
                      </span>
                    </Link>
                  );
                })}
              </div>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="how-planetary-friendship-works"
        title="How Vedic planetary friendship shapes your pair"
        icon={HeartHandshake}
        paragraphs={[
          "Traditional Indian Ank Shastra evaluates every Mulank and Bhagyank pair through the relationship of their ruling Navagraha lords. Harmonious combinations such as Sun (1) with Jupiter (3) or Venus (6) with Mercury (5) minimize internal self-sabotage so talent reaches its goal without unnecessary second-guessing.",
          "Contrasting combinations such as Saturn (8) with Sun (1) or Mars (9) with Mercury (5) are often misunderstood as unlucky. In lived experience, they create highly capable individuals who combine opposing strengths once they outgrow youthful impatience.",
        ]}
      />

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={COMPATIBILITY_HUB_FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/numerology",
            label: "Mulank & Bhagyank Calculator",
            blurb: "Compute both your Birth Number and Destiny Number from one date of birth.",
          },
          {
            to: "/guide/mulank-vs-bhagyank",
            label: "Mulank vs. Bhagyank Guide",
            blurb: "Detailed comparison of day-of-birth temperament vs full-date destiny.",
          },
          {
            to: "/hi/numerology/mulank",
            label: "हिंदी मूलांक मार्गदर्शिका",
            blurb: "मूलांक 1 से 9 तक संपूर्ण विवरण हिंदी भाषा में पढ़ें।",
          },
          {
            to: "/tarot/combinations",
            label: "Tarot Card Combinations Explorer",
            blurb: "Interpret two tarot cards appearing together across love, work, and Yes/No.",
          },
        ]}
      />

      <CTASection
        title="Check your exact Mulank & Bhagyank"
        body="Enter your date of birth to compute your Birth Number, Destiny Number, and Personal Year instantly."
        ctaLabel="Open the free calculator"
        to="/numerology"
      />
    </ArticleLayout>
  );
}
