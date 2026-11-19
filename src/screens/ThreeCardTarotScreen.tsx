import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Compass, RefreshCw, RotateCcw, Sparkles } from "@/components/icons";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { TarotCard } from "@/components/tarot/TarotCard";
import { ReadingLanding } from "@/components/tarot/ReadingLanding";
import { THREE_CARD_CONFIG } from "@/data/tarot-landings";
import { drawCards, getCardById } from "@/lib/tarot/engine";
import type { DrawnCard, TarotCard as TarotCardType } from "@/lib/tarot/types";

type SpreadFramingId = "timeline" | "troubleshoot" | "wellness";

interface SpreadPositionDef {
  label: string;
  subtitle: string;
}

const FRAMINGS: {
  id: SpreadFramingId;
  tabLabel: string;
  positions: [SpreadPositionDef, SpreadPositionDef, SpreadPositionDef];
}[] = [
  {
    id: "timeline",
    tabLabel: "Past · Present · Future",
    positions: [
      { label: "1 · Past", subtitle: "What shaped this situation" },
      { label: "2 · Present", subtitle: "Where you stand right now" },
      { label: "3 · Future", subtitle: "Where current momentum leads" },
    ],
  },
  {
    id: "troubleshoot",
    tabLabel: "Situation · Challenge · Advice",
    positions: [
      { label: "1 · Situation", subtitle: "The core dynamic in front of you" },
      { label: "2 · Challenge", subtitle: "What creates tension or delay" },
      { label: "3 · Advice", subtitle: "Your clearest practical next move" },
    ],
  },
  {
    id: "wellness",
    tabLabel: "Mind · Body · Spirit",
    positions: [
      { label: "1 · Mind", subtitle: "Mental focus and thought patterns" },
      { label: "2 · Body", subtitle: "Energy, routines, and grounded habits" },
      { label: "3 · Spirit", subtitle: "Deeper alignment and intuition" },
    ],
  },
];

function cardSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildPositionInterpretation(
  card: TarotCardType,
  reversed: boolean,
  framing: SpreadFramingId,
  index: number,
): string {
  const uprightSummary = card.uprightMeaning.toLowerCase();
  const reversedSummary = card.reversedMeaning.toLowerCase();

  if (framing === "timeline") {
    if (!reversed) {
      if (index === 0) {
        return `In your Past position, ${card.name} upright shows foundations shaped by ${uprightSummary}. Those earlier experiences still frame how you read today's choices.`;
      }
      if (index === 1) {
        return `In your Present position, ${card.name} highlights active energy around ${uprightSummary}. Focus on ${card.spiritualityMeaning.toLowerCase()}.`;
      }
      return `Looking toward your Future, ${card.name} upright points toward ${uprightSummary} if current habits stay consistent.`;
    }
    if (index === 0) {
      return `Reversed in the Past slot, ${card.name} reflects lingering lessons tied to ${reversedSummary} that are still clearing out.`;
    }
    if (index === 1) {
      return `${card.name} reversed in the Present invites quiet recalibration around ${reversedSummary} before committing externally.`;
    }
    return `Reversed in the Future position, ${card.name} flags temporary delay around ${reversedSummary}: adjusting your Present posture redirects this smoothly.`;
  }

  if (framing === "troubleshoot") {
    if (!reversed) {
      if (index === 0) {
        return `As the core Situation, ${card.name} upright surfaces themes of ${uprightSummary}.`;
      }
      if (index === 1) {
        return `As the Challenge, ${card.name} shows where ${uprightSummary} feels overextended or untested right now.`;
      }
      return `For Advice, ${card.name} encourages leaning into ${card.spiritualityMeaning.toLowerCase()} while keeping practical momentum steady.`;
    }
    if (index === 0) {
      return `Reversed in the Situation slot, ${card.name} points to hidden friction around ${reversedSummary}.`;
    }
    if (index === 1) {
      return `As the Challenge, ${card.name} reversed signals resistance tied to ${reversedSummary}.`;
    }
    return `Reversed as Advice, ${card.name} urges slowing down to untangle ${reversedSummary} and reconnect with ${card.spiritualityMeaning.toLowerCase()}.`;
  }

  if (!reversed) {
    if (index === 0) {
      return `For Mind, ${card.name} upright mirrors thoughts centered on ${uprightSummary}.`;
    }
    if (index === 1) {
      return `For Body & practical rhythm, ${card.name} highlights grounded energy around ${card.careerMeaning.toLowerCase()}.`;
    }
    return `For Spirit, ${card.name} upright illuminates alignment with ${card.spiritualityMeaning.toLowerCase()}.`;
  }

  if (index === 0) {
    return `Reversed in Mind, ${card.name} points to mental noise or loops tied to ${reversedSummary}.`;
  }
  if (index === 1) {
    return `Reversed in Body, ${card.name} asks for rest and pacing around ${reversedSummary}.`;
  }
  return `Reversed in Spirit, ${card.name} points inward to address ${reversedSummary} gently through ${card.spiritualityMeaning.toLowerCase()}.`;
}

function InteractiveThreeCardSpread() {
  const [framingId, setFramingId] = useState<SpreadFramingId>("timeline");
  const [question, setQuestion] = useState("");
  const [drawn, setDrawn] = useState<DrawnCard[] | null>(null);
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false]);

  const activeFraming = FRAMINGS.find((f) => f.id === framingId) ?? FRAMINGS[0];

  function handleDraw() {
    const cards = drawCards(3);
    setDrawn(cards);
    setRevealed([false, false, false]);
  }

  function handleRevealCard(index: number) {
    setRevealed((prev) => prev.map((v, i) => (i === index ? true : v)));
  }

  function handleRevealAll() {
    setRevealed([true, true, true]);
  }

  function handleReset() {
    setDrawn(null);
    setRevealed([false, false, false]);
  }

  const allRevealed = drawn !== null && revealed.every(Boolean);
  const anyReversedRevealed =
    drawn !== null && drawn.some((d, i) => revealed[i] && d.reversed);

  return (
    <GlassCard className="p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
            Interactive 3-Card Tarot Pull
          </p>
          <h2 className="mt-1 font-display text-2xl text-foreground sm:text-3xl">
            Draw Your 3 Card Tarot Spread Now
          </h2>
        </div>
        <Link
          to="/reading/question"
          search={{ spread: "three-card" }}
          className="text-xs font-medium text-[color:var(--gold)] underline underline-offset-4 hover:opacity-80"
        >
          Open Full AI 3-Card Synthesis →
        </Link>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Choose how you want your three cards framed, hold a question in mind, and pull three cards
        instantly in your browser.
      </p>

      <div
        role="tablist"
        aria-label="3-card spread framing"
        className="mt-4 inline-flex flex-wrap gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] p-1.5"
      >
        {FRAMINGS.map((framing) => {
          const active = framing.id === framingId;
          return (
            <button
              key={framing.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFramingId(framing.id)}
              className={`min-h-[40px] rounded-lg px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                active
                  ? "bg-white/15 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {framing.tabLabel}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="three-card-question" className="sr-only">
          Your 3-card tarot question (optional)
        </label>
        <input
          id="three-card-question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Optional question (e.g., How is this relationship or project unfolding next?)"
          className="min-h-[48px] flex-1 rounded-full border border-white/15 bg-white/[0.04] px-5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-[color:var(--gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/30"
        />
        <GoldButton size="lg" onClick={handleDraw} className="min-h-[48px] shrink-0">
          <Sparkles className="h-4 w-4" aria-hidden />
          {drawn ? "Shuffle & Draw 3 Again" : "Draw 3 Tarot Cards"}
        </GoldButton>
      </div>

      {drawn && (
        <div className="mt-7 space-y-6">
          {question.trim() && (
            <p className="text-sm italic text-muted-foreground">
              Focused question: “{question.trim()}”
            </p>
          )}

          {!allRevealed && (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-muted-foreground">
              <span>Tap each card to flip it, or reveal all three together.</span>
              <button
                type="button"
                onClick={handleRevealAll}
                className="min-h-[40px] rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-4 py-1.5 text-xs font-semibold text-[color:var(--gold)] transition-colors hover:bg-[color:var(--gold)]/10"
              >
                Reveal all 3 cards
              </button>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-3">
            {drawn.map((draw, i) => {
              const card = getCardById(draw.cardId);
              const pos = activeFraming.positions[i];
              if (!card || !pos) return null;
              const isRevealed = revealed[i];
              return (
                <div
                  key={`${draw.cardId}-${i}`}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                    {pos.label}
                  </p>
                  <p className="mt-1 text-center text-xs text-muted-foreground">{pos.subtitle}</p>
                  <div className="mx-auto mt-4 w-full max-w-[180px]">
                    <TarotCard
                      card={card}
                      reversed={draw.reversed}
                      revealed={isRevealed}
                      onReveal={() => handleRevealCard(i)}
                    />
                  </div>
                  {isRevealed ? (
                    <div className="mt-4 flex flex-1 flex-col justify-between space-y-3 text-center">
                      <div>
                        <p className="font-display text-lg text-foreground">{card.name}</p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                          {draw.reversed ? "Reversed" : "Upright"} ·{" "}
                          {card.arcana === "major" ? "Major Arcana" : card.suit}
                        </p>
                        <p className="mt-3 text-left text-sm leading-relaxed text-muted-foreground">
                          {buildPositionInterpretation(card, draw.reversed, framingId, i)}
                        </p>
                      </div>
                      <Link
                        to="/tarot/$slug"
                        params={{ slug: cardSlug(card.name) }}
                        className="inline-block text-xs font-medium text-[color:var(--gold)] underline underline-offset-4 hover:opacity-80"
                      >
                        Full {card.name} Card Meaning →
                      </Link>
                    </div>
                  ) : (
                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      Tap card to reveal
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {anyReversedRevealed && (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[color-mix(in_oklab,var(--aurora-1)_40%,transparent)] bg-[color-mix(in_oklab,var(--aurora-1)_10%,transparent)] p-4 text-sm">
              <div className="flex items-start gap-2.5 text-foreground/90">
                <RefreshCw
                  className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--aurora-1)]"
                  aria-hidden
                />
                <span>
                  A <strong>reversed card</strong> appeared in your 3-card spread: reversals point
                  to internalized energy, delays, or shadow lessons waiting for gentle adjustment.
                </span>
              </div>
              <Link
                to="/what-do-reversed-tarot-cards-mean"
                className="font-semibold text-[color:var(--gold)] underline underline-offset-4 hover:opacity-85"
              >
                Read: What Do Reversed Cards Mean? →
              </Link>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/numerology"
              className="text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Pair with your Vedic Numerology Life Path &amp; Mulank →
            </Link>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[44px] items-center gap-1.5 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden />
              Clear table
            </button>
          </div>
        </div>
      )}
    </GlassCard>
  );
}

function ThreeCardAstroPairBox() {
  return (
    <section
      aria-labelledby="three-card-summary-heading"
      className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="flex items-center gap-2 text-[color:var(--gold)]">
        <Compass className="h-4 w-4" aria-hidden />
        <p className="text-xs font-semibold uppercase tracking-[0.22em]">
          Quick Reference · Astrology &amp; 3-Card Tarot Timing
        </p>
      </div>
      <h2
        id="three-card-summary-heading"
        className="mt-2 font-display text-2xl aurora-text sm:text-3xl"
      >
        Combining 3-Card Tarot Spreads with Life Path Numerology
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        In classic 3-card tarot practice, Card 1 anchors your <strong className="text-foreground">Past</strong>{" "}
        pattern, Card 2 illuminates your <strong className="text-foreground">Present</strong> choice,
        and Card 3 previews the <strong className="text-foreground">Future</strong> direction. For deeper
        timing context alongside your pull, pair the spread with your birth-date{" "}
        <Link to="/numerology" className="text-[color:var(--gold)] hover:underline">
          Mulank &amp; Bhagyank (Life Path) number
        </Link>{" "}
        or explore our{" "}
        <Link to="/yes-no-tarot" className="text-[color:var(--gold)] hover:underline">
          instant Yes/No Tarot Oracle
        </Link>{" "}
        and{" "}
        <Link to="/tarot/celtic-cross" className="text-[color:var(--gold)] hover:underline">
          10-Card Celtic Cross spread
        </Link>
        .
      </p>
    </section>
  );
}

export function ThreeCardTarotScreen() {
  return (
    <ReadingLanding
      config={THREE_CARD_CONFIG}
      interactiveSlot={<InteractiveThreeCardSpread />}
      afterInteractiveSlot={<ThreeCardAstroPairBox />}
    />
  );
}
