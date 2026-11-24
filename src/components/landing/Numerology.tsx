import { useState, useMemo } from "react";
import { Link } from "@/components/LocalizedLink";
import { Sparkles, ArrowRight, Calendar } from "@/components/icons";
import { SectionHeader } from "./Features";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath, type TranslationKey } from "@/locales";

function reduceToSingleDigit(num: number): number {
  while (num > 9) {
    num = String(num).split("").reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return num;
}

const MONTH_KEYS: TranslationKey[] = [
  "lnum.month1", "lnum.month2", "lnum.month3", "lnum.month4",
  "lnum.month5", "lnum.month6", "lnum.month7", "lnum.month8",
  "lnum.month9", "lnum.month10", "lnum.month11", "lnum.month12",
];

export function Numerology() {
  const t = useTranslate();
  const [language] = useLanguage();
  const [day, setDay] = useState<number>(15);
  const [month, setMonth] = useState<number>(10);
  const [year, setYear] = useState<number>(1998);

  const { mulank, bhagyank, archetype } = useMemo(() => {
    const m = reduceToSingleDigit(day);
    const dateSum = day + month + year;
    const b = reduceToSingleDigit(dateSum);
    const keyNum = (m >= 1 && m <= 9 ? m : 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    return {
      mulank: m,
      bhagyank: b,
      archetype: {
        name: t(`lnum.p${keyNum}.name` as TranslationKey),
        planet: t(`lnum.p${keyNum}.planet` as TranslationKey),
        traits: t(`lnum.p${keyNum}.traits` as TranslationKey),
        tarot: t(`lnum.p${keyNum}.tarot` as TranslationKey),
      },
    };
  }, [day, month, year, t]);

  const numerologyTo = localizePath("/numerology", language);
  const mulankTo = localizePath("/numerology/mulank", language);

  return (
    <section id="numerology" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-full max-w-5xl rounded-full bg-[radial-gradient(ellipse_at_center,rgba(165,28,56,0.14)_0%,rgba(248,236,214,0.04)_42%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={t("lnum.eyebrow")}
          title={t("lnum.title")}
          subtitle={t("lnum.subtitle")}
        />

        {/* Live Interactive Matrix Container */}
        <div className="mt-12 rounded-3xl liquid-chrome-card p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Input Controls */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                  <Calendar className="h-4 w-4 text-[#faf2e4]" aria-hidden="true" />
                  <span>{t("lnum.kicker")}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-[#faf2e4]">
                  {t("lnum.selectDob")}
                </h3>
                <p className="mt-1 text-base sm:text-sm text-[#e3cfb6]/90">
                  {t("lnum.subtitle")}
                </p>
              </div>

              {/* Day, Month, Year Pickers */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label htmlFor="birth-day" className="block text-sm sm:text-xs font-medium text-[#ead9c3] mb-1.5">
                    {t("lnum.day")}
                  </label>
                  <select
                    id="birth-day"
                    value={day}
                    onChange={(e) => setDay(Number(e.target.value))}
                    className="w-full min-h-12 sm:min-h-10 rounded-xl border border-[#f5e7d0]/25 bg-[#2e0913]/80 px-3 py-2.5 text-base sm:text-sm text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)] focus:border-[#f5e7d0] focus:outline-none focus:ring-1 focus:ring-[#f5e7d0]/50"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d} className="bg-[#23070f] text-[#faf2e4]">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="birth-month" className="block text-sm sm:text-xs font-medium text-[#ead9c3] mb-1.5">
                    {t("lnum.month")}
                  </label>
                  <select
                    id="birth-month"
                    value={month}
                    onChange={(e) => setMonth(Number(e.target.value))}
                    className="w-full min-h-12 sm:min-h-10 rounded-xl border border-[#f5e7d0]/25 bg-[#2e0913]/80 px-3 py-2.5 text-base sm:text-sm text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)] focus:border-[#f5e7d0] focus:outline-none focus:ring-1 focus:ring-[#f5e7d0]/50"
                  >
                    {MONTH_KEYS.map((mk, i) => (
                      <option key={mk} value={i + 1} className="bg-[#23070f] text-[#faf2e4]">
                        {t(mk)} ({i + 1})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="birth-year" className="block text-sm sm:text-xs font-medium text-[#ead9c3] mb-1.5">
                    {t("lnum.year")}
                  </label>
                  <select
                    id="birth-year"
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    className="w-full min-h-12 sm:min-h-10 rounded-xl border border-[#f5e7d0]/25 bg-[#2e0913]/80 px-3 py-2.5 text-base sm:text-sm text-[#faf2e4] shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)] focus:border-[#f5e7d0] focus:outline-none focus:ring-1 focus:ring-[#f5e7d0]/50"
                  >
                    {Array.from({ length: 80 }, (_, i) => 2026 - i).map((y) => (
                      <option key={y} value={y} className="bg-[#23070f] text-[#faf2e4]">
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Calculator Deep-Dive Links */}
              <div className="pt-2 border-t border-[#f5e7d0]/15 flex flex-wrap gap-2 text-sm sm:text-xs">
                <Link
                  to={mulankTo as any}
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/20 bg-[#3a0c18]/65 px-4 py-2 sm:px-3.5 sm:py-1.5 text-[#ead9c3] shadow-[inset_0_1px_1px_rgba(255,248,235,0.18)] hover:text-[#fffaf0] hover:border-[#f5e7d0]/45 transition-colors"
                >
                  {t("lnum.linkMulankGuide")}
                </Link>
                <Link
                  to={localizePath("/numerology/compatibility", language) as any}
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/20 bg-[#3a0c18]/65 px-4 py-2 sm:px-3.5 sm:py-1.5 text-[#ead9c3] shadow-[inset_0_1px_1px_rgba(255,248,235,0.18)] hover:text-[#fffaf0] hover:border-[#f5e7d0]/45 transition-colors"
                >
                  {t("lnum.linkCompat")}
                </Link>
                <Link
                  to={localizePath("/bhagyank-calculator", language) as any}
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/20 bg-[#3a0c18]/65 px-4 py-2 sm:px-3.5 sm:py-1.5 text-[#ead9c3] shadow-[inset_0_1px_1px_rgba(255,248,235,0.18)] hover:text-[#fffaf0] hover:border-[#f5e7d0]/45 transition-colors"
                >
                  {t("lnum.linkBhagyank")}
                </Link>
                <Link
                  to={localizePath("/namank-calculator", language) as any}
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/20 bg-[#3a0c18]/65 px-4 py-2 sm:px-3.5 sm:py-1.5 text-[#ead9c3] shadow-[inset_0_1px_1px_rgba(255,248,235,0.18)] hover:text-[#fffaf0] hover:border-[#f5e7d0]/45 transition-colors"
                >
                  {t("lnum.linkNamank")}
                </Link>
              </div>
            </div>

            {/* Right: Live Calculation Output Card */}
            <div className="lg:col-span-7">
              <div
                key={`${day}-${month}-${year}`}
                className="relative overflow-hidden rounded-2xl border border-[#f5e7d0]/25 bg-gradient-to-br from-[#470f1d]/75 via-[#2a0811]/85 to-[#160409]/95 p-6 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,248,235,0.35),0_15px_35px_rgba(10,1,4,0.85)] transition-opacity duration-200"
              >
                {/* Result header badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-[#f5e7d0]/20 bg-[#18040a]/75 p-3.5 text-center shadow-[inset_0_1px_1px_rgba(255,248,235,0.22)]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#d6bfa3] block">
                      {t("lnum.mulankLabel")}
                    </span>
                    <span className="font-display text-4xl font-extrabold chrome-gold-text block mt-1">
                      {mulank}
                    </span>
                    <span className="text-xs text-[#ead9c3] block mt-0.5">
                      {archetype.planet}
                    </span>
                  </div>

                  <div className="rounded-xl border border-[#f5e7d0]/20 bg-[#18040a]/75 p-3.5 text-center shadow-[inset_0_1px_1px_rgba(255,248,235,0.22)]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#d6bfa3] block">
                      {t("lnum.bhagyankLabel")}
                    </span>
                    <span className="font-display text-4xl font-extrabold chrome-text block mt-1">
                      {bhagyank}
                    </span>
                    <span className="text-xs text-[#ead9c3] block mt-0.5">
                      {t("lnum.fullLifePath")}
                    </span>
                  </div>

                  <div className="col-span-2 sm:col-span-1 rounded-xl border border-[#f5e7d0]/20 bg-[#18040a]/75 p-3.5 text-center shadow-[inset_0_1px_1px_rgba(255,248,235,0.22)]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#d6bfa3] block">
                      {t("lnum.tarotArch")}
                    </span>
                    <span className="font-display text-lg font-bold text-[#faf2e4] block mt-1 leading-tight">
                      {archetype.tarot}
                    </span>
                    <span className="text-xs text-[#ead9c3] block mt-0.5">
                      {t("lnum.majorArcanaNum")} {mulank}
                    </span>
                  </div>
                </div>

                {/* Archetype Synthesis */}
                <div className="mt-6 pt-5 border-t border-[#f5e7d0]/15">
                  <div className="flex items-center gap-2 text-base font-semibold text-[#faf2e4]">
                    <Sparkles className="h-4 w-4 text-[#ead9c3]" aria-hidden="true" />
                    <span>{archetype.name}</span>
                  </div>
                  <p className="mt-2 text-base sm:text-sm text-[#e8d7c0] leading-relaxed">
                    {t("lnum.govPrefix")} <strong className="text-[#fffaf0]">{archetype.planet}</strong> {t("lnum.govMid")} <strong className="text-[#fffaf0]">{archetype.tarot}</strong>. {t("lnum.govTraits")} <span className="text-[#ead9c3]">{archetype.traits}</span>.
                  </p>
                </div>

                {/* Action button */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <Link
                    to={
                      (language === "en"
                        ? "/numerology/$slug"
                        : localizePath(`/numerology/mulank-${mulank}-bhagyank-${bhagyank}`, language)) as any
                    }
                    params={
                      (language === "en"
                        ? { slug: `mulank-${mulank}-bhagyank-${bhagyank}` }
                        : undefined) as any
                    }
                    className="text-sm sm:text-xs font-semibold text-[#f5e7d0] hover:underline"
                  >
                    {t("lnum.readMatchPrefix")} {mulank} {t("lnum.readMatchMid")} {bhagyank} {t("lnum.readMatchSuffix")} →
                  </Link>
                  <Link
                    to={numerologyTo as any}
                    className="liquid-chrome-btn inline-flex min-h-12 items-center gap-1.5 rounded-full px-5 py-3 text-sm sm:text-xs font-bold uppercase tracking-wider text-[#24060e]"
                  >
                    <span>{t("lnum.cta")}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
