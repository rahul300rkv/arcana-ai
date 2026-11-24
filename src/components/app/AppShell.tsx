import type { ReactNode } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Globe } from "@/components/icons";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { ParticleBackground } from "@/components/arcana/ParticleBackground";
import { PageTransition } from "@/components/arcana/PageTransition";
import { Brand } from "@/components/arcana/Brand";
import { LANGUAGE_OPTIONS, useLanguage, type Language } from "@/lib/language";
import { useTranslate } from "@/lib/i18n";
import {
  getLocaleFromPath,
  localizePath,
  stripLocalePrefix,
} from "@/locales";

export function AppShell({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useLanguage();
  const t = useTranslate();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const pathLocale = getLocaleFromPath(pathname);
  const selectValue: Language = pathLocale.meta.routePrefix !== null ? pathLocale.meta.code : language;

  function handleLanguageChange(next: Language) {
    setLanguage(next);
    const stripped = stripLocalePrefix(pathname);
    void navigate({
      to: localizePath(stripped, next),
      search: true,
    } as any);
  }

  return (
    <div className="relative min-h-dvh">
      <AuroraBackground />
      <ParticleBackground count={30} />
      <Sidebar />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-6xl px-4 pt-6 pb-28 lg:pt-8 lg:pb-14">
          <div className="mb-5 flex items-center justify-between gap-3 lg:hidden">
            <Brand size="sm" />
            <div className="relative flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1">
              <Globe className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <select
                aria-label={t("lnav.language")}
                value={selectValue}
                onChange={(e) => handleLanguageChange(e.target.value as Language)}
                className="h-7 max-w-[130px] cursor-pointer bg-transparent text-xs text-foreground focus:outline-none"
              >
                {LANGUAGE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#1b060c] text-[#faf2e4]">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <PageTransition>{children}</PageTransition>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
