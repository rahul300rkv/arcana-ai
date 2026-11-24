import { useId, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import { Globe, Menu, X, ArrowRight, ChevronDown } from "@/components/icons";
import { Brand } from "./Brand";
import { LANGUAGE_OPTIONS, useLanguage, type Language } from "@/lib/language";
import { useTranslate } from "@/lib/i18n";
import {
  getLocaleFromPath,
  localizePath,
  stripLocalePrefix,
} from "@/locales";

export function LandingNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const [language, setLanguage] = useLanguage();
  const t = useTranslate();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const pathLocale = getLocaleFromPath(pathname);
  const selectValue: Language = pathLocale.meta.routePrefix !== null ? pathLocale.meta.code : language;

  const navLinks = [
    { label: t("lnav.mulank"), to: localizePath("/numerology", selectValue) },
    { label: t("lnav.celtic"), to: localizePath("/tarot/celtic-cross", selectValue) },
    {
      label: t("lnav.majorArcana"),
      to: localizePath("/major-arcana-tarot-cards-meanings", selectValue),
    },
    { label: t("lnav.yesNo"), to: localizePath("/yes-no-tarot", selectValue) },
  ];

  const readingTo = localizePath("/reading", selectValue);

  function handleLanguageChange(next: Language) {
    setLanguage(next);
    setOpen(false);
    const stripped = stripLocalePrefix(pathname);
    void navigate({
      to: localizePath(stripped, next),
      search: true,
    } as any);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 transition-all duration-300">
      <div className="mx-auto mt-3 max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 rounded-full border border-[#f5e7d0]/20 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(250,238,218,0.12)_0%,rgba(38,8,16,0.95)_100%)] md:bg-[radial-gradient(120%_120%_at_50%_0%,rgba(250,238,218,0.12)_0%,rgba(38,8,16,0.9)_100%)] px-5 py-2.5 shadow-[0_15px_40px_-10px_rgba(12,2,5,0.88),inset_0_1px_1px_rgba(255,248,235,0.32)] md:backdrop-blur-2xl">
          <div className="shrink-0">
            <Brand size="md" />
          </div>

          <nav aria-label="Main Navigation" className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to as any}
                className="whitespace-nowrap text-sm font-medium text-[#ead9c3] transition-all duration-200 hover:text-[#fffaf0] hover:drop-shadow-[0_0_10px_rgba(250,240,224,0.5)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/hi"
              onClick={() => setLanguage("hi")}
              className="whitespace-nowrap text-sm font-semibold text-[#f5e7d0] transition-all duration-200 hover:text-[#fffaf0] hover:underline underline-offset-4"
            >
              {t("lnav.hindiHub")}
            </Link>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="relative flex items-center gap-1.5 rounded-full border border-[#f5e7d0]/20 bg-[#f5e7d0]/[0.05] px-2.5 py-1 shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
              <Globe className="h-3.5 w-3.5 shrink-0 text-[#ead9c3]" aria-hidden="true" />
              <select
                aria-label={t("lnav.language")}
                value={selectValue}
                onChange={(e) => handleLanguageChange(e.target.value as Language)}
                className="h-7 w-[112px] cursor-pointer appearance-none rounded-full bg-transparent pr-5 text-xs text-[#faf2e4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5e7d0]/70"
              >
                {LANGUAGE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#23080f] text-[#faf2e4]">
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-[#ead9c3]/75"
                aria-hidden="true"
              />
            </div>

            <Link
              to={readingTo as any}
              className="liquid-chrome-btn inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap"
            >
              <span>{t("lnav.beginReading")}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#f5e7d0]/25 bg-[#f5e7d0]/[0.06] text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.28)] lg:hidden"
            aria-label={open ? t("lnav.closeMenu") : t("lnav.openMenu")}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <nav
            id={menuId}
            aria-label="Mobile Navigation"
            className="mt-2 flex flex-col gap-1.5 rounded-2xl border border-[#f5e7d0]/20 bg-[#1f060d]/95 p-4 shadow-2xl md:backdrop-blur-2xl lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to as any}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-lg px-3 py-2.5 text-base font-medium text-[#ead9c3] transition-colors hover:bg-[#f5e7d0]/[0.08] hover:text-[#fffaf0]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/hi"
              onClick={() => {
                setLanguage("hi");
                setOpen(false);
              }}
              className="flex min-h-12 items-center rounded-lg px-3 py-2.5 text-base font-semibold text-[#f5e7d0] transition-colors hover:bg-[#f5e7d0]/[0.08] hover:text-[#fffaf0]"
            >
              {t("lnav.hindiHub")} (/hi)
            </Link>

            <div className="mt-2 flex items-center justify-between gap-3 border-t border-[#f5e7d0]/15 pt-3">
              <label htmlFor="mobile-nav-lang" className="text-base text-[#dcc8b2]">
                {t("lnav.language")}
              </label>
              <div className="relative">
                <select
                  id="mobile-nav-lang"
                  value={selectValue}
                  onChange={(e) => handleLanguageChange(e.target.value as Language)}
                  className="h-12 min-w-[168px] cursor-pointer appearance-none rounded-xl border border-[#f5e7d0]/20 bg-[#f5e7d0]/[0.06] px-3.5 pr-9 text-base text-[#faf2e4] focus:outline-none focus:ring-2 focus:ring-[#f5e7d0]/40"
                >
                  {LANGUAGE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#23080f] text-[#faf2e4]">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#ead9c3]"
                  aria-hidden="true"
                />
              </div>
            </div>

            <Link
              to={readingTo as any}
              onClick={() => setOpen(false)}
              className="liquid-chrome-btn mt-2 flex min-h-12 items-center justify-center gap-2 rounded-full py-3 text-center text-sm font-bold uppercase tracking-wider"
            >
              <span>{t("lnav.beginReading")}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
