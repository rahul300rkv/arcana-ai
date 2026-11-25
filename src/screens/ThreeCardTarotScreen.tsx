import { useState } from "react";
import { Link } from "@/components/LocalizedLink";
import { Compass, RefreshCw, RotateCcw, Sparkles } from "@/components/icons";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { TarotCard } from "@/components/tarot/TarotCard";
import { ReadingLanding } from "@/components/tarot/ReadingLanding";
import { THREE_CARD_CONFIG } from "@/data/tarot-landings";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { drawCards, getCardById } from "@/lib/tarot/engine";
import type { DrawnCard } from "@/lib/tarot/types";
import {
  getLocalizedArcana,
  getLocalizedCardNameBySlug,
  getLocalizedSuit,
} from "@/locales/card-terms";
import {
  buildLocalizedThreeCardNote,
  getThreeCardUi,
} from "@/locales/spreads-i18n";

type SpreadFramingId = "timeline" | "troubleshoot" | "wellness";

const FRAMING_IDS: SpreadFramingId[] = ["timeline", "troubleshoot", "wellness"];

function cardSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function InteractiveThreeCardSpread() {
  const [language] = useLanguage();
  const t = useTranslate();
  const ui = getThreeCardUi(language);
  const [framingId, setFramingId] = useState<SpreadFramingId>("timeline");
  const [question, setQuestion] = useState("");
  const [drawn, setDrawn] = useState<DrawnCard[] | null>(null);
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false]);

  const activePositions = ui.positions[framingId] ?? ui.positions.timeline;

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
            {ui.kicker}
          </p>
          <h2 className="mt-1 font-display text-2xl text-foreground sm:text-3xl">
            {ui.heading}
          </h2>
        </div>
        <Link
          to="/reading/question"
          search={{ spread: "three-card" }}
          className="text-xs font-medium text-[color:var(--gold)] underline underline-offset-4 hover:opacity-80"
        >
          {ui.fullAiLink}
        </Link>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {ui.sub}
      </p>

      <div
        role="tablist"
        aria-label={ui.heading}
        className="mt-4 inline-flex flex-wrap gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] p-1.5"
      >
        {FRAMING_IDS.map((fid) => {
          const active = fid === framingId;
          return (
            <button
              key={fid}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFramingId(fid)}
              className={`min-h-[40px] rounded-lg px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                active
                  ? "bg-white/15 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {ui.tabLabels[fid]}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="three-card-question" className="sr-only">
          {t("tarotUi.focusedQuestion")}
        </label>
        <input
          id="three-card-question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={t("tarotUi.threeCardPlaceholder")}
          className="min-h-[48px] flex-1 rounded-full border border-white/15 bg-white/[0.04] px-5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-[color:var(--gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/30"
        />
        <GoldButton size="lg" onClick={handleDraw} className="min-h-[48px] shrink-0">
          <Sparkles className="h-4 w-4" aria-hidden />
          {drawn ? t("tarotUi.shuffleDraw3") : t("tarotUi.draw3Cards")}
        </GoldButton>
      </div>

      {drawn && (
        <div className="mt-7 space-y-6">
          {question.trim() && (
            <p className="text-sm italic text-muted-foreground">
              {t("tarotUi.focusedQuestion")} “{question.trim()}”
            </p>
          )}

          {!allRevealed && (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-muted-foreground">
              <span>{t("tarotUi.tapOrRevealAll")}</span>
              <button
                type="button"
                onClick={handleRevealAll}
                className="min-h-[40px] rounded-full border border-[color-mix(in_oklab,var(--gold)_45%,transparent)] px-4 py-1.5 text-xs font-semibold text-[color:var(--gold)] transition-colors hover:bg-[color:var(--gold)]/10"
              >
                {t("tarotUi.revealAll3")}
              </button>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-3">
            {drawn.map((draw, i) => {
              const card = getCardById(draw.cardId);
              const pos = activePositions[i];
              if (!card || !pos) return null;
              const isRevealed = revealed[i];
              const slug = cardSlug(card.name);
              const locName = getLocalizedCardNameBySlug(slug, card.name, language);
              const locSuit =
                card.arcana === "major"
                  ? getLocalizedArcana("major", language)
                  : getLocalizedSuit(card.suit, language);
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
                        <p className="font-display text-lg text-foreground">{locName}</p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
                          {draw.reversed ? t("tarotUi.reversed") : t("tarotUi.upright")} ·{" "}
                          {locSuit}
                        </p>
                        <p className="mt-3 text-left text-sm leading-relaxed text-muted-foreground">
                          {buildLocalizedThreeCardNote(card, draw.reversed, framingId, i, language)}
                        </p>
                      </div>
                      <Link
                        to="/tarot/$slug"
                        params={{ slug }}
                        className="inline-block text-xs font-medium text-[color:var(--gold)] underline underline-offset-4 hover:opacity-80"
                      >
                        {ui.fullMeaningPrefix} ({locName})
                      </Link>
                    </div>
                  ) : (
                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      {t("tarotUi.tapReveal")}
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
                <span>{ui.reversedAlert}</span>
              </div>
              <Link
                to="/what-do-reversed-tarot-cards-mean"
                className="font-semibold text-[color:var(--gold)] underline underline-offset-4 hover:opacity-85"
              >
                {ui.reversedGuideLink}
              </Link>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/numerology"
              className="text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              {ui.pairNumerologyLink}
            </Link>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[44px] items-center gap-1.5 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden />
              {t("tarotUi.clearTable")}
            </button>
          </div>
        </div>
      )}
    </GlassCard>
  );
}

function ThreeCardAstroPairBox() {
  const [language] = useLanguage();
  const ui = getThreeCardUi(language);
  const t = useTranslate();
  return (
    <section
      aria-labelledby="three-card-summary-heading"
      className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="flex items-center gap-2 text-[color:var(--gold)]">
        <Compass className="h-4 w-4" aria-hidden />
        <p className="text-xs font-semibold uppercase tracking-[0.22em]">
          {ui.astroEyebrow}
        </p>
      </div>
      <h2
        id="three-card-summary-heading"
        className="mt-2 font-display text-2xl aurora-text sm:text-3xl"
      >
        {ui.astroHeading}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        {ui.positions.timeline[0].label} · {ui.positions.timeline[1].label} ·{" "}
        {ui.positions.timeline[2].label} —{" "}
        <Link to="/numerology" className="text-[color:var(--gold)] hover:underline">
          {t("numerologyLanding2.cta")}
        </Link>{" "}
        ·{" "}
        <Link to="/yes-no-tarot" className="text-[color:var(--gold)] hover:underline">
          {t("tarotUi.yesNoOracle")}
        </Link>{" "}
        ·{" "}
        <Link to="/tarot/celtic-cross" className="text-[color:var(--gold)] hover:underline">
          {t("tarotHub.rt6Title")}
        </Link>
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
