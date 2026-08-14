import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookHeart, RotateCcw, Sparkles, Wand2 } from "lucide-react";
import { z } from "zod";
import { AppShell } from "@/components/app/AppShell";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { getCardById } from "@/lib/tarot/engine";
import { getSpread } from "@/lib/tarot/spreads";
import { readingStore, useReading } from "@/lib/tarot/store";
import { addJournalEntry, getReadingById, saveReading } from "@/lib/tarot/history";
import { generateAiInterpretation } from "@/lib/tarot/ai.server";
import { interpretReading } from "@/lib/tarot/interpret";
import { useLanguage } from "@/lib/i18n";
import type { SavedReading } from "@/lib/tarot/types";
import { cn } from "@/lib/utils";

const search = z.object({
  id: z.string().optional(),
});

export const Route = createFileRoute("/reading/result")({
  validateSearch: (s) => search.parse(s),
  head: () => ({
    meta: [
      { title: "Your Reading — AstroFree" },
      { name: "description", content: "The synthesized interpretation of your tarot reading." },
    ],
  }),
  component: ResultPage,
});

function ResultPage() {
  const { id } = Route.useSearch();
  const reading = useReading();
  const navigate = useNavigate();
  const [language] = useLanguage();
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
      if (!existing) navigate({ to: "/reading" });
      return;
    }

    if (!reading.spreadId || !reading.cards.length) {
      navigate({ to: "/reading" });
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
        // Network/deployment-level failure (timeout, bad routing, etc.) — the
        // server fn's own try/catch already covers upstream AI errors, so if
        // we land here the call never reached our code. Fall back locally.
        console.error("generateAiInterpretation call failed, using local synthesis:", err);
        return {
          interpretation: interpretReading(reading.spreadId!, reading.question, reading.cards, language),
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
          <p className="mt-4 text-sm text-muted-foreground">Weaving your interpretation…</p>
        </div>
      </AppShell>
    );
  }

  if (!result) return null;

  const spread = getSpread(result.spreadId);
  if (!spread) {
    navigate({ to: "/reading" });
    return null;
  }

  function onSaveJournal() {
    if (!note.trim() || !result) return;
    addJournalEntry(note.trim(), `${spread.name} reading`, result.id);
    setNote("");
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  function onNewReading() {
    readingStore.reset();
    navigate({ to: "/reading" });
  }

  return (
    <AppShell>
      <header className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {spread.name}
          {result.source === "ai" && " · AI-generated"}
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          Your <span className="aurora-text">interpretation</span>
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
                <h2 className="font-display text-xl text-foreground">The synthesis</h2>
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
                        <h3 className="font-display text-lg">{pc.positionName}</h3>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">
                          {card?.name}
                          {pc.reversed ? " · Reversed" : ""}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {pc.text}
                      </p>
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
              <h2 className="font-display text-xl text-foreground">Journal this reading</h2>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Write a reflection while it's still fresh. Saved to your private journal.
            </p>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What resonated with you?"
              rows={5}
              className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed placeholder:text-muted-foreground focus:border-[color-mix(in_oklab,var(--gold)_40%,transparent)] focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <GoldButton
              size="sm"
              className="mt-3 w-full"
              onClick={onSaveJournal}
              disabled={!note.trim()}
            >
              {saved ? "Saved ✓" : "Save reflection"}
            </GoldButton>
          </GlassCard>

          <GlassCard className="space-y-3">
            <GoldButton variant="secondary" className="w-full" onClick={onNewReading}>
              <RotateCcw className="h-4 w-4" /> Start a new reading
            </GoldButton>
            <Link to="/dashboard" className="block">
              <GoldButton variant="ghost" className="w-full">
                Back to dashboard
              </GoldButton>
            </Link>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
