import { useState } from "react";
import { Link } from "@/components/LocalizedLink";
import { Briefcase, RefreshCw, RotateCcw, Sparkles } from "@/components/icons";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { TarotCard } from "@/components/tarot/TarotCard";
import { ReadingLanding } from "@/components/tarot/ReadingLanding";
import { CAREER_CONFIG } from "@/data/tarot-landings";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { drawCards, getCardById } from "@/lib/tarot/engine";
import type { DrawnCard } from "@/lib/tarot/types";
import { getLocalizedCardNameBySlug } from "@/locales/card-terms";
import {
  buildLocalizedCareerNote,
  getCareerUi,
} from "@/locales/spreads-i18n";

const LIFE_PATH_CAREERS = [
  {
    num: 1,
    slug: "life-path-1",
    archetype: "The Pioneer & Founder",
    careers: "Founder, Product Lead, Independent Consultant, Executive, Inventor",
    strength: "Thrives with autonomy, clear ownership, and launching initiatives from zero.",
  },
  {
    num: 2,
    slug: "life-path-2",
    archetype: "The Mediator & Strategist",
    careers: "HR Director, Therapist, Diplomacy, UX Research, Client Partnerships",
    strength: "Turns quiet emotional intelligence and alliance-building into long-term stability.",
  },
  {
    num: 3,
    slug: "life-path-3",
    archetype: "The Communicator & Creator",
    careers: "Creative Director, Writer, Marketing Lead, Educator, Public Speaker",
    strength: "Monetizes storytelling, design craft, and persuasive audience connection.",
  },
  {
    num: 4,
    slug: "life-path-4",
    archetype: "The Systems Architect",
    careers: "Software Architect, Finance Lead, Civil Engineering, Operations, Law",
    strength: "Builds durable wealth through process mastery, reliability, and compounding systems.",
  },
  {
    num: 5,
    slug: "life-path-5",
    archetype: "The Catalyst & Explorer",
    careers: "Growth Marketing, Venture Scouting, Travel & Media, Sales, Freelance",
    strength: "Excels in fast-changing markets, negotiation, and multi-disciplinary pivots.",
  },
  {
    num: 6,
    slug: "life-path-6",
    archetype: "The Steward & Designer",
    careers: "Healthcare, Architecture, Brand Design, Education, Advisory",
    strength: "Attracts loyal clients through quality standards, stewardship, and ethical leadership.",
  },
  {
    num: 7,
    slug: "life-path-7",
    archetype: "The Analyst & Researcher",
    careers: "Data Science, Quantitative Finance, R&D, Academia, Technical Strategy",
    strength: "Solves deep, high-value problems others miss through specialist expertise.",
  },
  {
    num: 8,
    slug: "life-path-8",
    archetype: "The Executive & Builder",
    careers: "Private Equity, Real Estate, Managing Director, Enterprise Operations",
    strength: "Scales capital, teams, and organizations through decisive commercial judgment.",
  },
  {
    num: 9,
    slug: "life-path-9",
    archetype: "The Humanitarian Visionary",
    careers: "Nonprofit Leadership, Policy, Philanthropy, Storytelling, Coaching",
    strength: "Sustains influence by aligning work, reputation, and money with lasting impact.",
  },
];

function cardSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function InteractiveCareerSpread() {
  const [language] = useLanguage();
  const t = useTranslate();
  const ui = getCareerUi(language);
  const [question, setQuestion] = useState("");
  const [drawn, setDrawn] = useState<DrawnCard[] | null>(null);
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false]);

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
          search={{ spread: "career" }}
          className="text-xs font-medium text-[color:var(--gold)] underline underline-offset-4 hover:opacity-80"
        >
          {ui.aiLink}
        </Link>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {ui.sub}
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="career-question" className="sr-only">
          {t("tarotUi.focusedQuestion")}
        </label>
        <input
          id="career-question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={t("tarotUi.careerPlaceholder")}
          className="min-h-[48px] flex-1 rounded-full border border-white/15 bg-white/[0.04] px-5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-[color:var(--gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/30"
        />
        <GoldButton size="lg" onClick={handleDraw} className="min-h-[48px] shrink-0">
          <Sparkles className="h-4 w-4" aria-hidden />
          {drawn ? t("tarotUi.shuffleDraw") : t("tarotUi.draw3Career")}
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
              const pos = ui.positions[i];
              if (!card || !pos) return null;
              const isRevealed = revealed[i];
              const slug = cardSlug(card.name);
              const locName = getLocalizedCardNameBySlug(slug, card.name, language);
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
                        <span
                          className={`mt-1 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${
                            draw.reversed
                              ? "border-[color-mix(in_oklab,var(--aurora-1)_50%,transparent)] text-[color:var(--aurora-1)]"
                              : "border-[color-mix(in_oklab,var(--gold)_50%,transparent)] text-[color:var(--gold)]"
                          }`}
                        >
                          {draw.reversed ? t("tarotUi.reversed") : t("tarotUi.upright")}
                        </span>
                        <p className="mt-3 text-left text-sm leading-relaxed text-muted-foreground">
                          {buildLocalizedCareerNote(card, draw.reversed, i, language)}
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
                <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--aurora-1)]" aria-hidden />
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

          <div className="flex justify-end">
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

function LifePathCareerTable() {
  const [language] = useLanguage();
  const ui = getCareerUi(language);
  const t = useTranslate();
  return (
    <section aria-labelledby="life-path-career-heading">
      <div className="flex items-center gap-2 text-[color:var(--gold)]">
        <Briefcase className="h-4 w-4" aria-hidden />
        <p className="text-xs font-semibold uppercase tracking-[0.22em]">
          {ui.tableEyebrow}
        </p>
      </div>
      <h2
        id="life-path-career-heading"
        className="mt-2 font-display text-2xl aurora-text sm:text-3xl"
      >
        {ui.tableHeading}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {ui.tableSub}{" "}
        <Link to="/numerology" className="text-[color:var(--gold)] hover:underline">
          {t("numerologyLanding2.cta")}
        </Link>
      </p>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.04] text-xs uppercase tracking-[0.16em] text-[color:var(--gold)]">
              <th className="px-4 py-3.5">{ui.colLifePath}</th>
              <th className="px-4 py-3.5">{ui.colArchetype}</th>
              <th className="px-4 py-3.5">{ui.colCareers}</th>
              <th className="px-4 py-3.5">{ui.colStrength}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {LIFE_PATH_CAREERS.map((row) => (
              <tr key={row.num} className="hover:bg-white/[0.02]">
                <td className="whitespace-nowrap px-4 py-3.5 font-display text-base">
                  <Link
                    to="/numerology/$slug"
                    params={{ slug: row.slug }}
                    className="text-[color:var(--gold)] underline underline-offset-4 hover:opacity-80"
                  >
                    {ui.lifePathWord} {row.num}
                  </Link>
                </td>
                <td className="px-4 py-3.5 font-medium text-foreground">{row.archetype}</td>
                <td className="px-4 py-3.5 text-muted-foreground">{row.careers}</td>
                <td className="px-4 py-3.5 text-muted-foreground">{row.strength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function CareerTarotReadingScreen() {
  return (
    <ReadingLanding
      config={CAREER_CONFIG}
      interactiveSlot={<InteractiveCareerSpread />}
      afterInteractiveSlot={<LifePathCareerTable />}
    />
  );
}
