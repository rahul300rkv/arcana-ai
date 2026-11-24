import { Link } from "@/components/LocalizedLink";
import { Award, Flame, Sparkles, Star } from "@/components/icons";
import { AppShell } from "@/components/app/AppShell";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { StatCard } from "@/components/app/StatCard";
import { useArcanaData } from "@/lib/tarot/history";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";

export function ProfileScreen() {
  const { stats, history } = useArcanaData();
  const t = useTranslate();
  const [language] = useLanguage();
  const hasCelticCross = history.some((r) => r.spreadId === "celtic-cross");

  const achievements = [
    {
      title: t("profile.ach1Title"),
      body: t("profile.ach1Body"),
      earned: stats.totalReadings >= 1,
    },
    { title: t("profile.ach2Title"), body: t("profile.ach2Body"), earned: stats.streak >= 7 },
    { title: t("profile.ach3Title"), body: t("profile.ach3Body"), earned: hasCelticCross },
    {
      title: t("profile.ach4Title"),
      body: t("profile.ach4Body"),
      earned: stats.journalCount >= 30,
    },
    { title: t("profile.ach5Title"), body: t("profile.ach5Body"), earned: stats.totalReadings >= 50 },
    { title: t("profile.ach6Title"), body: t("profile.ach6Body"), earned: stats.streak >= 365 },
  ];

  const streakUnit = stats.streak === 1 ? t("dashboard.daySingular") : t("dashboard.dayPlural");

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
            {t("profile.seeker")}
          </div>
          <h1 className="mt-1 font-display text-3xl">{t("profile.guest")}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("profile.localNote")}
          </p>
        </div>
      </GlassCard>

      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        <StatCard
          label={t("profile.streak")}
          value={`${stats.streak} ${streakUnit}`}
          hint={t("profile.streakHint")}
          icon={Flame}
        />
        <StatCard
          label={t("profile.readings")}
          value={String(stats.totalReadings)}
          hint={t("profile.readingsHint")}
          icon={Sparkles}
        />
        <StatCard
          label={t("profile.journal")}
          value={String(stats.journalCount)}
          hint={t("profile.journalHint")}
          icon={Star}
        />
      </div>

      <section className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <Award className="h-4 w-4 text-[color-mix(in_oklab,var(--gold)_85%,white)]" />
          <h2 className="font-display text-xl">{t("profile.achievements")}</h2>
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
            {t("profile.emptyNote")}
          </p>
          <Link to={localizePath("/reading", language) as any} className="mt-3 inline-block">
            <GoldButton size="sm">{t("profile.startReading")}</GoldButton>
          </Link>
        </div>
      )}
    </AppShell>
  );
}
