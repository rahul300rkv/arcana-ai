import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import { RefreshCw } from "@/components/icons";
import { AppShell } from "@/components/app/AppShell";
import { TarotCard } from "@/components/tarot/TarotCard";
import { RevealAnimation } from "@/components/tarot/RevealAnimation";
import { ReadingProgress } from "@/components/tarot/ReadingProgress";
import { ContinueButton } from "@/components/tarot/ContinueButton";
import { getCardById } from "@/lib/tarot/engine";
import { getLocalizedSpread, getSpread } from "@/lib/tarot/spreads";
import { useReading } from "@/lib/tarot/store";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";
import { cn } from "@/lib/utils";

export function ReadingRevealScreen() {
  const reading = useReading();
  const navigate = useNavigate();
  const t = useTranslate();
  const [language] = useLanguage();
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const spread = useMemo(
    () => (reading.spreadId ? getLocalizedSpread(getSpread(reading.spreadId), t) : null),
    [reading.spreadId, t],
  );

  useEffect(() => {
    if (!reading.cards.length) navigate({ to: localizePath("/reading", language) as any });
  }, [reading.cards.length, navigate, language]);

  if (!spread || !reading.cards.length) return null;

  const allRevealed = revealed.size === reading.cards.length;
  const hasRevealedReversed = reading.cards.some((c, i) => revealed.has(i) && c.reversed);

  function toggle(i: number) {
    setRevealed((prev) => {
      if (prev.has(i)) return prev;
      const next = new Set(prev);
      next.add(i);
      return next;
    });
  }

  return (
    <AppShell>
      <header className="mb-6 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {t("reading.step4")} · {spread.name}
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          {t("reading.revealTitle")} <span className="aurora-text">{t("reading.revealAccent")}</span>
        </h1>
        {reading.question && (
          <p className="mt-2 text-muted-foreground italic">"{reading.question}"</p>
        )}
      </header>

      <div className="mb-6">
        <ReadingProgress total={reading.cards.length} revealed={revealed.size} />
      </div>

      <div
        className={cn(
          "grid gap-5",
          reading.cards.length === 1 && "mx-auto max-w-xs grid-cols-1",
          reading.cards.length === 3 && "grid-cols-3",
          reading.cards.length === 4 && "grid-cols-2 sm:grid-cols-4",
          reading.cards.length === 5 && "grid-cols-2 sm:grid-cols-5",
          reading.cards.length === 10 && "grid-cols-2 sm:grid-cols-5",
          reading.cards.length === 12 && "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6",
        )}
      >
        {reading.cards.map((c, i) => {
          const card = getCardById(c.cardId);
          if (!card) return null;
          const isRevealed = revealed.has(i);
          const position = spread.positions[i];
          return (
            <RevealAnimation key={i} delay={i * 0.05}>
              <div className="space-y-2">
                <p className="text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {position?.name}
                </p>
                <TarotCard
                  card={card}
                  reversed={c.reversed}
                  revealed={isRevealed}
                  onReveal={() => toggle(i)}
                />
                <div className="text-center">
                  {isRevealed ? (
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{card.name}</p>
                      <span
                        className={cn(
                          "inline-block rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-widest",
                          c.reversed
                            ? "border-[color-mix(in_oklab,var(--aurora-1)_50%,transparent)] text-[color:var(--aurora-1)]"
                            : "border-[color-mix(in_oklab,var(--gold)_50%,transparent)] text-[color:var(--gold)]",
                        )}
                      >
                        {c.reversed ? t("reading.reversed") : t("reading.upright")}
                      </span>
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground">{t("reading.tapToReveal")}</p>
                  )}
                </div>
              </div>
            </RevealAnimation>
          );
        })}
      </div>

      {hasRevealedReversed && (
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[color-mix(in_oklab,var(--aurora-1)_40%,transparent)] bg-[color-mix(in_oklab,var(--aurora-1)_10%,transparent)] px-5 py-4 text-sm">
          <div className="flex items-start gap-2.5 text-foreground/90">
            <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--aurora-1)]" aria-hidden />
            <span>{t("reading.reversedNotice")}</span>
          </div>
          <Link
            to="/what-do-reversed-tarot-cards-mean"
            className="font-semibold text-[color:var(--gold)] underline underline-offset-4 hover:opacity-85"
          >
            {t("reading.reversedLink")} →
          </Link>
        </div>
      )}

      {allRevealed && (
        <div className="mt-10">
          <ContinueButton
            label={t("reading.continueInterp")}
            onClick={() => navigate({ to: "/reading/result" })}
          />
        </div>
      )}
    </AppShell>
  );
}
