import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { RefreshCw, RotateCcw, Sparkles } from "@/components/icons";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { TarotCard } from "@/components/tarot/TarotCard";
import { ReadingLanding } from "@/components/tarot/ReadingLanding";
import { YES_NO_CONFIG } from "@/data/tarot-landings";
import { drawCards, getCardById } from "@/lib/tarot/engine";
import {
  getReversedYesNo,
  getUprightYesNo,
  getYesNoExplanation,
  YES_NO_LABEL,
  type YesNo,
} from "@/lib/tarot/yesNo";
import type { DrawnCard } from "@/lib/tarot/types";

const BADGE_CLASSES: Record<YesNo, string> = {
  yes: "border-emerald-400/60 bg-emerald-500/20 text-emerald-200",
  no: "border-rose-400/60 bg-rose-500/20 text-rose-200",
  maybe: "border-[color-mix(in_oklab,var(--gold)_65%,transparent)] bg-[color-mix(in_oklab,var(--gold)_20%,transparent)] text-[color:var(--gold)]",
};

function cardSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function InteractiveYesNoOracle() {
  const [question, setQuestion] = useState("");
  const [drawn, setDrawn] = useState<DrawnCard | null>(null);
  const [revealed, setRevealed] = useState(false);

  function handleAskUniverse() {
    const [picked] = drawCards(1);
    setDrawn(picked);
    setRevealed(true);
  }

  function handleReset() {
    setDrawn(null);
    setRevealed(false);
  }

  const card = drawn ? getCardById(drawn.cardId) : undefined;
  const verdict: YesNo | null = drawn
    ? drawn.reversed
      ? getReversedYesNo(drawn.cardId)
      : getUprightYesNo(drawn.cardId)
    : null;
  const explanation =
    card && drawn && verdict ? getYesNoExplanation(card, drawn.reversed, verdict) : null;

  return (
    <GlassCard className="p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
            Universe Oracle · Single-Card Pull
          </p>
          <h2 className="mt-1 font-display text-2xl text-foreground sm:text-3xl">
            Ask the Universe for a Yes, No, or Maybe
          </h2>
        </div>
        <Link
          to="/reading/question"
          search={{ spread: "single" }}
          className="text-xs font-medium text-[color:var(--gold)] underline underline-offset-4 hover:opacity-80"
        >
          Open AI-Guided Pull →
        </Link>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Hold one direct yes-or-no question in mind, then pull a single card from the 78-card deck
        to reveal your instant directional verdict and two-sentence guidance.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="yesno-question" className="sr-only">
          Your yes or no question (optional)
        </label>
        <input
          id="yesno-question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Optional yes/no question (e.g., Is now the right time to make this move?)"
          className="min-h-[48px] flex-1 rounded-full border border-white/15 bg-white/[0.04] px-5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-[color:var(--gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/30"
        />
        <GoldButton size="lg" onClick={handleAskUniverse} className="min-h-[48px] shrink-0">
          <Sparkles className="h-4 w-4" aria-hidden />
          {drawn ? "Draw Another Card" : "Ask the Universe / Draw a Card"}
        </GoldButton>
      </div>

      {drawn && card && verdict && explanation && (
        <div className="mt-8 grid items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-[200px_1fr] sm:p-6">
          <div className="mx-auto w-full max-w-[190px]">
            <TarotCard
              card={card}
              reversed={drawn.reversed}
              revealed={revealed}
              onReveal={() => setRevealed(true)}
            />
          </div>

          <div className="space-y-4">
            {question.trim() && (
              <p className="text-sm italic text-muted-foreground">
                Question: “{question.trim()}”
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center rounded-full border px-5 py-1.5 font-display text-2xl font-bold uppercase tracking-[0.14em] ${BADGE_CLASSES[verdict]}`}
              >
                {YES_NO_LABEL[verdict]}
              </span>
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
                  drawn.reversed
                    ? "border-[color-mix(in_oklab,var(--aurora-1)_50%,transparent)] text-[color:var(--aurora-1)]"
                    : "border-[color-mix(in_oklab,var(--gold)_45%,transparent)] text-[color:var(--gold)]"
                }`}
              >
                {card.name} · {drawn.reversed ? "Reversed" : "Upright"}
              </span>
            </div>

            <p className="text-base leading-relaxed text-foreground/95">{explanation}</p>

            {drawn.reversed && (
              <p className="flex flex-wrap items-center gap-2 rounded-xl border border-[color-mix(in_oklab,var(--aurora-1)_38%,transparent)] bg-[color-mix(in_oklab,var(--aurora-1)_10%,transparent)] px-3.5 py-2.5 text-xs text-foreground/90">
                <RefreshCw className="h-3.5 w-3.5 shrink-0 text-[color:var(--aurora-1)]" aria-hidden />
                <span>Pulled reversed: check</span>
                <Link
                  to="/what-do-reversed-tarot-cards-mean"
                  className="font-semibold text-[color:var(--gold)] underline underline-offset-4 hover:opacity-85"
                >
                  What Do Reversed Tarot Cards Mean?
                </Link>
              </p>
            )}

            <div className="flex flex-wrap items-center gap-5 pt-1 text-xs">
              <Link
                to="/tarot/$slug"
                params={{ slug: cardSlug(card.name) }}
                className="font-semibold text-[color:var(--gold)] underline underline-offset-4 hover:opacity-85"
              >
                Read full {card.name} meaning →
              </Link>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-[40px] items-center gap-1.5 text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                Clear oracle
              </button>
            </div>
          </div>
        </div>
      )}
    </GlassCard>
  );
}

export function YesNoTarotScreen() {
  return <ReadingLanding config={YES_NO_CONFIG} interactiveSlot={<InteractiveYesNoOracle />} />;
}
