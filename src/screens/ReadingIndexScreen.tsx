import { AppShell } from "@/components/app/AppShell";
import { SpreadCard } from "@/components/tarot/SpreadCard";
import { SPREAD_LIST } from "@/lib/tarot/spreads";
import { readingStore } from "@/lib/tarot/store";
import { useTranslate } from "@/lib/i18n";
import type { SpreadId } from "@/lib/tarot/types";

export function ReadingIndexScreen() {
  const t = useTranslate();

  return (
    <AppShell>
      <header className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("reading.step1")}</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          {t("reading.chooseTitle")} <span className="aurora-text">{t("reading.chooseAccent")}</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          {t("reading.chooseSub")}
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
