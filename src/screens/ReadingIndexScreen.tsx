import { AppShell } from "@/components/app/AppShell";
import { SpreadCard } from "@/components/tarot/SpreadCard";
import { SPREAD_LIST } from "@/lib/tarot/spreads";
import { readingStore } from "@/lib/tarot/store";
import type { SpreadId } from "@/lib/tarot/types";

export function ReadingIndexScreen() {
  return (
    <AppShell>
      <header className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Step 1 of 4</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          Choose your <span className="aurora-text">spread</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          Every reading begins with a shape. Pick the one that fits the question in your heart.
        </p>
      </header>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SPREAD_LIST.map((s) => (
          <SpreadCard
            key={s.id}
            spread={s}
            onSelect={() => readingStore.setSpread(s.id as SpreadId)}
          />
        ))}
      </div>
    </AppShell>
  );
}
