import { useEffect, useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import { motion } from "framer-motion";
import { BookHeart, RefreshCw, RotateCcw, Sparkles, Wand2 } from "@/components/icons";
import { AppShell } from "@/components/app/AppShell";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { getCardById } from "@/lib/tarot/engine";
import { getLocalizedSpread, getSpread } from "@/lib/tarot/spreads";
import { readingStore, useReading } from "@/lib/tarot/store";
import { addJournalEntry, getReadingById, saveReading } from "@/lib/tarot/history";
import { generateAiInterpretation } from "@/lib/tarot/ai.server";
import { interpretReading } from "@/lib/tarot/interpret";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";
import type { SavedReading } from "@/lib/tarot/types";
import { cn } from "@/lib/utils";

export function ReadingResultScreen() {
  const { id } = useSearch({ strict: false }) as { id?: string };
  const reading = useReading();
  const navigate = useNavigate();
  const [language] = useLanguage();
  const t = useTranslate();
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const [result, setResult] = useState<SavedReading | undefined>(() =>
    id ? getReadingById(id) : undefined,
  );
  const [loading, setLoading] = useState(!id);

  useEffect(() => {
    if (id) {
      const existing = getReadingById(id);
      setResult(existing);
      setLoading(false);
      if (!existing) navigate({ to: localizePath("/reading", language) as any });
      return;
    }

    if (!reading.spreadId || !reading.cards.length) {
      navigate({ to: localizePath("/reading", language) as any });
      return;
    }

    let cancelled = false;
    setLoading(true);
    generateAiInterpretation({
      data: {
        spreadId: reading.spreadId,
        question: reading.question,
        cards: reading.cards,
        language,
      },
    })
      .catch((err) => {
        console.error("generateAiInterpretation call failed, using local synthesis:", err);
        return {
          interpretation: interpretReading(
            reading.spreadId!,
            reading.question,
            reading.cards,
            language,
          ),
          source: "local" as const,
        };
      })
      .then(({ interpretation, source }) => {
        if (cancelled || !reading.spreadId) return;
        const saved = saveReading({
          spreadId: reading.spreadId,
          question: reading.question,
          cards: reading.cards,
          interpretation,
          source,
        });
        setResult(saved);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return (
      <AppShell>
        <div className="mx-auto max-w-md pt-24 text-center">
          <Wand2 className="mx-auto h-8 w-8 animate-pulse text-[color-mix(in_oklab,var(--gold)_85%,white)]" />
          <p className="mt-4 text-sm text-muted-foreground">{t("reading.weaving")}</p>
        </div>
      </AppShell>
    );
  }

  if (!result) return null;

  const spread = getLocalizedSpread(getSpread(result.spreadId), t);
  if (!spread) {
    navigate({ to: localizePath("/reading", language) as any });
    return null;
  }

  function onSaveJournal() {
    if (!note.trim() || !result) return;
    addJournalEntry(note.trim(), `${spread.name} ${t("reading.readingSuffix")}`, result.id);
    setNote("");
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  function onNewReading() {
    readingStore.reset();
    navigate({ to: localizePath("/reading", language) as any });
  }

  return (
    <AppShell>
      <header className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {spread.name}
          {result.source === "ai" && ` · ${t("reading.aiGenerated")}`}
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          {t("reading.interpTitle")} <span className="aurora-text">{t("reading.interpAccent")}</span>
        </h1>
        {result.question && (
          <p className="mt-2 text-muted-foreground italic">"{result.question}"</p>
        )}
      </header>

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <GlassCard>
              <div className="flex items-center gap-2 text-[color-mix(in_oklab,var(--gold)_85%,white)]">
                <Sparkles className="h-4 w-4" />
                <h2 className="font-display text-xl text-foreground">{t("reading.synthesis")}</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {result.interpretation.summary}
              </p>
            </GlassCard>
          </motion.div>

          <div className="space-y-3">
            {result.interpretation.perCard.map((pc, i) => {
              const card = getCardById(pc.cardId);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <GlassCard className="flex gap-4">
                    <div
                      className={cn(
                        "grid h-12 w-9 shrink-0 place-items-center rounded-lg border text-[10px] font-display",
                        pc.reversed
                          ? "border-[color-mix(in_oklab,var(--aurora-1)_50%,transparent)] text-[color:var(--aurora-1)]"
                          : "border-[color-mix(in_oklab,var(--gold)_50%,transparent)] text-[color:var(--gold)]",
                      )}
                    >
                      {card?.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="font-display text-lg">{spread.positions[i]?.name ?? pc.positionName}</h3>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">
                          {card?.name}
                          {pc.reversed ? ` · ${t("reading.reversed")}` : ""}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {pc.text}
                      </p>
                      {pc.reversed && (
                        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-[color:var(--gold)]">
                          <RefreshCw className="h-3 w-3 shrink-0" aria-hidden />
                          <Link
                            to="/what-do-reversed-tarot-cards-mean"
                            className="underline underline-offset-4 hover:opacity-85"
                          >
                            {t("reading.howToReadReversed")}
                          </Link>
                        </p>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="space-y-5">
          <GlassCard>
            <div className="flex items-center gap-2 text-[color-mix(in_oklab,var(--gold)_85%,white)]">
              <BookHeart className="h-4 w-4" />
              <h2 className="font-display text-xl text-foreground">{t("reading.journalThis")}</h2>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {t("reading.journalSub")}
            </p>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={t("reading.journalPlaceholder")}
              rows={5}
              className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-base sm:text-sm leading-relaxed placeholder:text-muted-foreground focus:border-[color-mix(in_oklab,var(--gold)_40%,transparent)] focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <GoldButton
              size="sm"
              className="mt-3 w-full"
              onClick={onSaveJournal}
              disabled={!note.trim()}
            >
              {saved ? t("dailycard.reflectSaved") : t("reading.saveReflection")}
            </GoldButton>
          </GlassCard>

          <GlassCard className="space-y-3">
            <GoldButton variant="secondary" className="w-full" onClick={onNewReading}>
              <RotateCcw className="h-4 w-4" /> {t("reading.newReading")}
            </GoldButton>
            <Link to="/dashboard" className="block">
              <GoldButton variant="ghost" className="w-full">
                {t("reading.backDashboard")}
              </GoldButton>
            </Link>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
