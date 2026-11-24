import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import { Globe } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Brand } from "@/components/arcana/Brand";
import { appNavItems } from "@/lib/nav";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { LANGUAGE_OPTIONS, type Language } from "@/lib/language";
import {
  getLocaleFromPath,
  isMirroredLocalizedPath,
  localizePath,
  stripLocalePrefix,
} from "@/locales";

export function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const t = useTranslate();
  const [language, setLanguage] = useLanguage();
  const navigate = useNavigate();

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
    <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 flex-col p-4">
      <div className="glass flex h-full flex-col rounded-3xl p-4">
        <div className="px-2 py-3">
          <Brand />
        </div>
        <nav className="mt-4 flex flex-1 flex-col gap-1">
          {appNavItems.map((item) => {
            const target = isMirroredLocalizedPath(item.to)
              ? localizePath(item.to, selectValue)
              : item.to;
            const active = stripLocalePrefix(pathname) === item.to;
            return (
              <Link
                key={item.titleKey}
                to={target as any}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all",
                  active
                    ? "bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_18%,transparent),transparent)] text-foreground border border-white/10"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                )}
              >
                <item.icon
                  className={cn(
                    "h-4 w-4",
                    active && "text-[color-mix(in_oklab,var(--gold)_85%,white)]",
                  )}
                  strokeWidth={1.6}
                />
                {t(item.titleKey)}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-white/10 pt-3">
          <label
            htmlFor="sidebar-lang-select"
            className="mb-1.5 flex items-center gap-1.5 px-1 text-[11px] uppercase tracking-wider text-muted-foreground"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{t("lnav.language")}</span>
          </label>
          <select
            id="sidebar-lang-select"
            value={selectValue}
            onChange={(e) => handleLanguageChange(e.target.value as Language)}
            className="h-10 w-full cursor-pointer rounded-xl border border-white/15 bg-white/[0.04] px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--gold)_40%,transparent)]"
          >
            {LANGUAGE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#1b060c] text-[#faf2e4]">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </aside>
  );
}
