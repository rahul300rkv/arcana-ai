import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Flame, Layers, Sparkles, BookOpen } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { StatCard } from "@/components/app/StatCard";
import { DailyCard } from "@/components/app/DailyCard";
import { RecentReadings } from "@/components/app/RecentReadings";
import { useArcanaData } from "@/lib/tarot/history";
import { useTranslate, type TranslationKey } from "@/lib/i18n";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — AstroFree" },
      {
        name: "description",
        content: "Your daily card, recent readings, journal, and reading streak.",
      },
    ],
  }),
  component: DashboardPage,
});

function greetingKey(): TranslationKey {
  const h = new Date().getHours();
  if (h < 5) return "dashboard.greetingNight";
  if (h < 12) return "dashboard.greetingMorning";
  if (h < 18) return "dashboard.greetingAfternoon";
  return "dashboard.greetingEvening";
}

function DashboardPage() {
  const { stats } = useArcanaData();
  const t = useTranslate();
  const [greeting, setGreeting] = useState<TranslationKey>("dashboard.greetingMorning");

  useEffect(() => {
    setGreeting(greetingKey());
  }, []);

  return (
    <AppShell>
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-[color-mix(in_oklab,var(--gold)_80%,white)]">
            {t("dashboard.welcomeEyebrow")}
          </div>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl">
            {t(greeting)}, <span className="gold-text">{t("dashboard.seeker")}</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{t("dashboard.subtitle")}</p>
        </div>
        <Link to="/reading">
          <GoldButton>
            <Sparkles className="h-4 w-4" /> {t("dashboard.startReading")}
          </GoldButton>
        </Link>
      </header>

      <div className="grid gap-5">
        <DailyCard />

        <div className="grid gap-5 sm:grid-cols-3">
          <StatCard
            label={t("stat.streak")}
            value={stats.streak > 0 ? `${stats.streak} day${stats.streak === 1 ? "" : "s"}` : "—"}
            hint={t("stat.streakHint")}
            icon={Flame}
          />
          <StatCard
            label={t("stat.readings")}
            value={String(stats.totalReadings)}
            hint={t("stat.readingsHint")}
            icon={Layers}
          />
          <StatCard
            label={t("stat.favoriteSpread")}
            value={stats.favoriteSpreadName ?? "—"}
            hint={
              stats.favoriteSpreadName
                ? t("stat.favoriteSpreadHint")
                : t("stat.favoriteSpreadEmpty")
            }
            icon={Sparkles}
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentReadings />
          </div>
          <GlassCard className="flex flex-col justify-between">
            <div>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_25%,transparent),transparent)] border border-white/10">
                <BookOpen
                  className="h-5 w-5 text-[color-mix(in_oklab,var(--gold)_85%,white)]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mt-4 font-display text-xl">{t("dashboard.journalTitle")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {stats.journalCount > 0
                  ? `${stats.journalCount} reflection${stats.journalCount === 1 ? "" : "s"} saved so far.`
                  : t("dashboard.journalEmpty")}
              </p>
            </div>
            <Link to="/journal">
              <GoldButton variant="secondary" className="mt-6 w-full">
                {t("dashboard.openJournal")}
              </GoldButton>
            </Link>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
