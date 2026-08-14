import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, Lock, Palette, User } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useThemePreference } from "@/lib/theme";
import { useTranslate } from "@/lib/i18n";
import { exportDataAsJson } from "@/lib/tarot/history";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — AstroFree" },
      {
        name: "description",
        content:
          "Personalize your AstroFree experience — theme, language, notifications, privacy, and account.",
      },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const [theme, setTheme] = useThemePreference();
  const t = useTranslate();
  const [dailyReminder, setDailyReminder] = useState(true);
  const [productUpdates, setProductUpdates] = useState(false);
  const [privateJournal, setPrivateJournal] = useState(true);

  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl">{t("settings.title")}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t("settings.subtitle")}</p>
      </div>

      <div className="grid gap-5">
        <SettingsSection
          icon={Palette}
          title={t("settings.appearance")}
          desc={t("settings.appearanceDesc")}
        >
          <Row label={t("settings.theme")} hint={t("settings.themeHint")}>
            <Select value={theme} onValueChange={(v) => setTheme(v as typeof theme)}>
              <SelectTrigger className="w-40 bg-white/5 border-white/10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dark">{t("settings.dark")}</SelectItem>
                <SelectItem value="light">{t("settings.light")}</SelectItem>
                <SelectItem value="system">{t("settings.system")}</SelectItem>
              </SelectContent>
            </Select>
          </Row>
        </SettingsSection>

        <SettingsSection
          icon={Bell}
          title={t("settings.notifications")}
          desc={t("settings.notificationsDesc")}
        >
          <Row label={t("settings.dailyReminder")} hint={t("settings.dailyReminderHint")}>
            <Switch checked={dailyReminder} onCheckedChange={setDailyReminder} />
          </Row>
          <Row label={t("settings.productUpdates")} hint={t("settings.productUpdatesHint")}>
            <Switch checked={productUpdates} onCheckedChange={setProductUpdates} />
          </Row>
        </SettingsSection>

        <SettingsSection icon={Lock} title={t("settings.privacy")} desc={t("settings.privacyDesc")}>
          <Row label={t("settings.privateJournal")} hint={t("settings.privateJournalHint")}>
            <Switch checked={privateJournal} onCheckedChange={setPrivateJournal} />
          </Row>
          <Row label={t("settings.exportData")} hint={t("settings.exportDataHint")}>
            <GoldButton variant="secondary" size="sm" onClick={exportDataAsJson}>
              {t("settings.export")}
            </GoldButton>
          </Row>
        </SettingsSection>

        <SettingsSection icon={User} title={t("settings.account")} desc={t("settings.accountDesc")}>
          <Row label={t("settings.signedInAs")} hint={t("settings.browsingAsGuest")}>
            <span className="text-sm text-muted-foreground">{t("settings.guest")}</span>
          </Row>
          <Row label={t("settings.deleteAccount")} hint={t("settings.deleteAccountHint")}>
            <GoldButton variant="secondary" size="sm" className="text-destructive">
              {t("settings.delete")}
            </GoldButton>
          </Row>
        </SettingsSection>
      </div>
    </AppShell>
  );
}

function SettingsSection({
  icon: Icon,
  title,
  desc,
  children,
}: {
  icon: typeof Bell;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <GlassCard>
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_25%,transparent),transparent)] border border-white/10">
          <Icon
            className="h-4 w-4 text-[color-mix(in_oklab,var(--gold)_85%,white)]"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-display text-xl">{title}</h2>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
      <div className="mt-5 divide-y divide-white/5">{children}</div>
    </GlassCard>
  );
}

function Row({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <div className="min-w-0">
        <Label className="text-sm">{label}</Label>
        {hint && <div className="mt-0.5 text-xs text-muted-foreground">{hint}</div>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}
