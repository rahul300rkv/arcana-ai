import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AppShell } from "@/components/app/AppShell";
import { ShuffleAnimation } from "@/components/tarot/ShuffleAnimation";
import { GoldButton } from "@/components/arcana/GoldButton";
import { drawCards } from "@/lib/tarot/engine";
import { getLocalizedSpread, getSpread } from "@/lib/tarot/spreads";
import { readingStore, useReading } from "@/lib/tarot/store";
import { useTranslate } from "@/lib/i18n";
import { Shuffle } from "@/components/icons";

export function ReadingShuffleScreen() {
  const reading = useReading();
  const navigate = useNavigate();
  const t = useTranslate();
  const [shuffling, setShuffling] = useState(false);
  const spread = getLocalizedSpread(
    reading.spreadId ? getSpread(reading.spreadId) : getSpread("single"),
    t,
  );

  function onShuffle() {
    setShuffling(true);
    window.setTimeout(() => {
      const cards = drawCards(spread.count);
      readingStore.setCards(cards);
      navigate({ to: "/reading/reveal" });
    }, 1800);
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {t("reading.step3")} · {spread.name}
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          {t("reading.shuffleTitle")} <span className="aurora-text">{t("reading.shuffleAccent")}</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          {t("reading.shuffleSub")}
        </p>

        <ShuffleAnimation shuffling={shuffling} />

        <motion.div
          className="pointer-events-none absolute inset-0 -z-10"
          initial={false}
          animate={shuffling ? { opacity: 1 } : { opacity: 0.4 }}
        />

        <div className="mt-4 flex justify-center">
          <GoldButton size="lg" onClick={onShuffle} disabled={shuffling}>
            <Shuffle className="h-4 w-4" />
            {shuffling ? t("reading.shuffling") : t("reading.shuffleBtn")}
          </GoldButton>
        </div>
      </div>
    </AppShell>
  );
}
