import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { TarotCard } from "@/components/tarot/TarotCard";
import { getCardById } from "@/lib/tarot/engine";
import { getCardMeaning } from "@/lib/tarot/card-i18n";
import { addJournalEntry, redrawDailyCard, useArcanaData } from "@/lib/tarot/history";
import { useTranslate, useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";


export function DailyCard() {
  const { daily } = useArcanaData();
  const t = useTranslate();
  const [lang] = useLanguage();
  const [reflecting, setReflecting] = useState(false);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const [redrawing, setRedrawing] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(false);
    const id = window.setTimeout(() => setRevealed(true), 450);
    return () => window.clearTimeout(id);
  }, [daily.cardId, daily.reversed]);


  const card = getCardById(daily.cardId);

  function onSaveReflection() {
    if (!note.trim() || !card) return;
    addJournalEntry(note.trim(), `Daily card — ${card.name}`);
    setNote("");
    setSaved(true);
    setReflecting(false);
    window.setTimeout(() => setSaved(false), 2500);
  }

  if (!card) return null;

  const meaning = getCardMeaning(card, daily.reversed, lang);

  function onRedraw() {
    setRedrawing(true);
    window.setTimeout(() => {
      redrawDailyCard();
      setRedrawing(false);
      setReflecting(false);
    }, 500);
  }

  return (
    <GlassCard className="relative overflow-hidden">
      {/* ambient orbiting glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 30%, transparent), transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-24 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--aurora-1) 35%, transparent), transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
        <motion.div
          key={card.id + String(daily.reversed)}
          animate={{ opacity: redrawing ? 0.3 : 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.4 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.03 }}
          className="mx-auto w-36"
        >
          <TarotCard card={card} reversed={daily.reversed} revealed={!redrawing && revealed} onReveal={() => setRevealed(true)} />
        </motion.div>



        <div>
          <div className="text-xs uppercase tracking-widest text-[color-mix(in_oklab,var(--gold)_80%,white)]">
            {t("dailycard.eyebrow")}
          </div>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl">
            {card.name}
            {daily.reversed ? ` (${t("dailycard.reversed")})` : ""}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{meaning}</p>

          {reflecting ? (
            <div className="mt-4 space-y-2">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder={t("dailycard.placeholder")}
                rows={3}
                autoFocus
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 p-3 text-sm placeholder:text-muted-foreground focus:border-[color-mix(in_oklab,var(--gold)_40%,transparent)] focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <div className="flex gap-2">
                <GoldButton size="sm" onClick={onSaveReflection} disabled={!note.trim()}>
                  {t("dailycard.save")}
                </GoldButton>
                <GoldButton size="sm" variant="ghost" onClick={() => setReflecting(false)}>
                  {t("dailycard.cancel")}
                </GoldButton>
              </div>
            </div>
          ) : (
            <div className="mt-5 flex flex-wrap gap-2">
              <GoldButton size="sm" onClick={() => setReflecting(true)}>
                {saved ? t("dailycard.reflectSaved") : t("dailycard.reflect")}
              </GoldButton>
              <GoldButton size="sm" variant="secondary" onClick={onRedraw} disabled={redrawing}>
                <RefreshCw className={cn("h-3.5 w-3.5", redrawing && "animate-spin")} />{" "}
                {t("dailycard.redraw")}
              </GoldButton>
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
