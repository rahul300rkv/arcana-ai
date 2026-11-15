import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AppShell } from "@/components/app/AppShell";
import { ShuffleAnimation } from "@/components/tarot/ShuffleAnimation";
import { GoldButton } from "@/components/arcana/GoldButton";
import { drawCards } from "@/lib/tarot/engine";
import { getSpread } from "@/lib/tarot/spreads";
import { readingStore, useReading } from "@/lib/tarot/store";
import { Shuffle } from "lucide-react";

export const Route = createFileRoute("/reading/shuffle")({
  head: () => ({
    meta: [
      { title: "Shuffle the Deck — AstroFree" },
      {
        name: "description",
        content: "Center yourself and shuffle the deck. The cards will find you.",
      },
    ],
  }),
  component: ShufflePage,
});

function ShufflePage() {
  const reading = useReading();
  const navigate = useNavigate();
  const [shuffling, setShuffling] = useState(false);
  const spread = reading.spreadId ? getSpread(reading.spreadId) : getSpread("single");

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
          Step 3 of 4 · {spread.name}
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          Shuffle the <span className="aurora-text">cosmos</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          Hold your question in mind. When you are ready, shuffle the deck.
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
            {shuffling ? "Shuffling…" : "Shuffle the Deck"}
          </GoldButton>
        </div>
      </div>
    </AppShell>
  );
}
