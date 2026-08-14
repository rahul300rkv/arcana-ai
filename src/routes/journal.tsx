import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Clock, Sparkles, Trash2 } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { useArcanaData, deleteJournalEntry } from "@/lib/tarot/history";
import { getSpread } from "@/lib/tarot/spreads";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — AstroFree" },
      { name: "description", content: "Your reading history and private reflections." },
    ],
  }),
  component: JournalPage,
});

function relativeTime(ts: number): string {
  const diff = Date.now() - ts;
  const mins = Math.round(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(ts).toLocaleDateString();
}

function JournalPage() {
  const { history, journal } = useArcanaData();

  return (
    <AppShell>
      <header className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Your journey</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          Journal &amp; <span className="aurora-text">history</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          Every reading and reflection you've kept, in one quiet place.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[color-mix(in_oklab,var(--gold)_85%,white)]" />
            <h2 className="font-display text-xl">Readings</h2>
          </div>
          {history.length === 0 ? (
            <GlassCard>
              <p className="text-sm text-muted-foreground">
                No readings yet.{" "}
                <Link to="/reading" className="underline underline-offset-4">
                  Start one
                </Link>{" "}
                to see it here.
              </p>
            </GlassCard>
          ) : (
            <div className="space-y-3">
              {history.map((r) => (
                <Link key={r.id} to="/reading/result" search={{ id: r.id }}>
                  <GlassCard className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="truncate text-sm">
                        {getSpread(r.spreadId).name}
                        {r.question ? ` — ${r.question}` : ""}
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" /> {relativeTime(r.createdAt)}
                        <span className="rounded-full glass px-2 py-0.5 text-[10px] uppercase tracking-widest">
                          {r.cards.length} card{r.cards.length === 1 ? "" : "s"}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          )}
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-[color-mix(in_oklab,var(--gold)_85%,white)]" />
            <h2 className="font-display text-xl">Reflections</h2>
          </div>
          {journal.length === 0 ? (
            <GlassCard>
              <p className="text-sm text-muted-foreground">
                Reflections you save after a reading or your daily card will appear here.
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
                      aria-label="Delete reflection"
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
