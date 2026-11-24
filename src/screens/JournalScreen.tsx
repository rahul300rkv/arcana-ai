import { Link } from "@/components/LocalizedLink";
import { BookOpen, Clock, Sparkles, Trash2 } from "@/components/icons";
import { AppShell } from "@/components/app/AppShell";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { useArcanaData, deleteJournalEntry } from "@/lib/tarot/history";
import { getLocalizedSpread, getSpread } from "@/lib/tarot/spreads";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { getBcp47 } from "@/lib/language";
import { localizePath } from "@/locales";

export function JournalScreen() {
  const { history, journal } = useArcanaData();
  const t = useTranslate();
  const [language] = useLanguage();

  function relativeTime(ts: number): string {
    const diff = Date.now() - ts;
    const mins = Math.round(diff / 60000);
    if (mins < 1) return t("journal.justNow");
    if (mins < 60) return `${mins}${t("journal.mAgo")}`;
    const hours = Math.round(mins / 60);
    if (hours < 24) return `${hours}${t("journal.hAgo")}`;
    const days = Math.round(hours / 24);
    if (days < 7) return `${days}${t("journal.dAgo")}`;
    return new Date(ts).toLocaleDateString(getBcp47(language));
  }

  return (
    <AppShell>
      <header className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t("journal.eyebrow")}</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          {t("journal.title1")} <span className="aurora-text">{t("journal.title2")}</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          {t("journal.sub")}
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[color-mix(in_oklab,var(--gold)_85%,white)]" />
            <h2 className="font-display text-xl">{t("journal.readingsTitle")}</h2>
          </div>
          {history.length === 0 ? (
            <GlassCard>
              <p className="text-sm text-muted-foreground">
                {t("journal.noReadings")}{" "}
                <Link to={localizePath("/reading", language) as any} className="underline underline-offset-4">
                  {t("journal.startOne")}
                </Link>{" "}
                {t("journal.toSeeHere")}
              </p>
            </GlassCard>
          ) : (
            <div className="space-y-3">
              {history.map((r) => {
                const spread = getLocalizedSpread(getSpread(r.spreadId), t);
                return (
                  <Link key={r.id} to="/reading/result" search={{ id: r.id }}>
                    <GlassCard className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="truncate text-sm">
                          {spread.name}
                          {r.question ? `: ${r.question}` : ""}
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" /> {relativeTime(r.createdAt)}
                          <span className="rounded-full glass px-2 py-0.5 text-[10px] uppercase tracking-widest">
                            {r.cards.length} {r.cards.length === 1 ? t("journal.card") : t("journal.cards")}
                          </span>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-[color-mix(in_oklab,var(--gold)_85%,white)]" />
            <h2 className="font-display text-xl">{t("journal.reflectionsTitle")}</h2>
          </div>
          {journal.length === 0 ? (
            <GlassCard>
              <p className="text-sm text-muted-foreground">
                {t("journal.noReflections")}
              </p>
            </GlassCard>
          ) : (
            <div className="space-y-3">
              {journal.map((j) => (
                <GlassCard key={j.id}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        {j.context} · {relativeTime(j.createdAt)}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed">{j.note}</p>
                    </div>
                    <GoldButton
                      variant="ghost"
                      size="sm"
                      aria-label={t("journal.deleteLabel")}
                      onClick={() => deleteJournalEntry(j.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </GoldButton>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </section>
      </div>
    </AppShell>
  );
}
