import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Flame, Sparkles, Star } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { StatCard } from "@/components/app/StatCard";
import { useArcanaData } from "@/lib/tarot/history";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — AstroFree" },
      {
        name: "description",
        content: "Your AstroFree profile — statistics, achievements, and reading streak.",
      },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const { stats, history } = useArcanaData();
  const hasCelticCross = history.some((r) => r.spreadId === "celtic-cross");

  const achievements = [
    {
      title: "First Light",
      body: "Completed your first reading.",
      earned: stats.totalReadings >= 1,
    },
    { title: "Seven Moons", body: "7-day reading streak.", earned: stats.streak >= 7 },
    { title: "Deep Waters", body: "Completed a Celtic Cross spread.", earned: hasCelticCross },
    {
      title: "The Cartographer",
      body: "Journal 30 reflections.",
      earned: stats.journalCount >= 30,
    },
    { title: "Constellation", body: "50 readings completed.", earned: stats.totalReadings >= 50 },
    { title: "The Oracle", body: "365-day streak.", earned: stats.streak >= 365 },
  ];

  return (
    <AppShell>
      <GlassCard className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[linear-gradient(135deg,var(--aurora-1),var(--aurora-2),var(--gold))] p-[2px]">
          <div className="grid h-full w-full place-items-center rounded-full bg-background font-display text-3xl gold-text">
            S
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[color-mix(in_oklab,var(--gold)_80%,white)]">
            Seeker
          </div>
          <h1 className="mt-1 font-display text-3xl">Guest</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Your readings and journal are saved on this device.
          </p>
        </div>
      </GlassCard>

      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        <StatCard
          label="Streak"
          value={stats.streak > 0 ? `${stats.streak} day${stats.streak === 1 ? "" : "s"}` : "—"}
          hint="Keep the ritual alive"
          icon={Flame}
        />
        <StatCard
          label="Readings"
          value={String(stats.totalReadings)}
          hint="Total sessions"
          icon={Sparkles}
        />
        <StatCard
          label="Journal"
          value={String(stats.journalCount)}
          hint="Reflections written"
          icon={Star}
        />
      </div>

      <section className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <Award className="h-4 w-4 text-[color-mix(in_oklab,var(--gold)_85%,white)]" />
          <h2 className="font-display text-xl">Achievements</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <GlassCard key={a.title} className={a.earned ? "" : "opacity-50"}>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_25%,transparent),transparent)] border border-white/10">
                  <Star className="h-4 w-4 text-[color-mix(in_oklab,var(--gold)_85%,white)]" />
                </div>
                <div>
                  <div className="font-display text-base">{a.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{a.body}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {history.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Your achievements unlock as you read. Ready to begin?
          </p>
          <Link to="/reading" className="mt-3 inline-block">
            <GoldButton size="sm">Start a reading</GoldButton>
          </Link>
        </div>
      )}
    </AppShell>
  );
}
