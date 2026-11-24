import { Link } from "@/components/LocalizedLink";
import { Compass, Sparkles, BookOpen, ArrowRight, ShieldCheck, Moon } from "@/components/icons";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";

export function Features() {
  const t = useTranslate();
  const [language] = useLanguage();

  return (
    <section id="features" className="relative py-20 sm:py-28">
      {/* Background ambient gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-full max-w-6xl rounded-full bg-[radial-gradient(ellipse_at_center,rgba(165,28,56,0.14)_0%,rgba(248,236,214,0.05)_40%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={t("lfeat.eyebrow")}
          title={t("lfeat.title")}
          subtitle={t("lfeat.subtitle")}
        />

        {/* Crimson Burgundy & Ivory Asymmetric Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 2-column marquee - Sacred Tarot Spreads */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-9 flex flex-col justify-between">
            {/* Background Image Scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/tarot-cosmic-sanctuary.webp"
                alt="Candlelit crimson and velvet tarot altar sanctuary prepared for sacred arcana spread readings"
                loading="lazy"
                decoding="async"
                width={640}
                height={358}
                className="h-full w-full object-cover object-center opacity-30 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18050a] via-[#1f060d]/85 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                <Compass className="h-4 w-4 text-[#faf2e4]" aria-hidden="true" />
                <span>{t("lfeat.c1Eye")}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-[#faf2e4] tracking-tight">
                {t("lfeat.c1Title")}
              </h3>
              <p className="mt-2.5 max-w-xl text-base text-[#e3cfb6]/95 leading-relaxed">
                {t("lfeat.c1Body")}
              </p>

              {/* Spread Quick Launchers */}
              <div className="mt-6 flex flex-wrap gap-2.5 text-sm sm:text-xs">
                <Link
                  to={localizePath("/tarot/celtic-cross", language) as any}
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/35 bg-[#f5e7d0]/15 px-4 py-2 sm:px-3.5 sm:py-1.5 font-medium text-[#fffaf0] shadow-[inset_0_1px_1px_rgba(255,248,235,0.3)] transition-all hover:bg-[#f5e7d0]/25 hover:border-[#f5e7d0]/60"
                >
                  {t("lnav.celtic")} (10)
                </Link>
                <Link
                  to={localizePath("/tarot/three-card", language) as any}
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/20 bg-[#3a0c18]/65 px-4 py-2 sm:px-3.5 sm:py-1.5 text-[#ead9c3] transition-colors hover:bg-[#521222]/80 hover:text-[#fffaf0]"
                >
                  {t("lfeat.threeCard")}
                </Link>
                <Link
                  to={localizePath("/tarot/love", language) as any}
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/20 bg-[#3a0c18]/65 px-4 py-2 sm:px-3.5 sm:py-1.5 text-[#ead9c3] transition-colors hover:bg-[#521222]/80 hover:text-[#fffaf0]"
                >
                  {t("lfeat.loveConn")}
                </Link>
                <Link
                  to={localizePath("/tarot/combinations", language) as any}
                  className="inline-flex min-h-12 sm:min-h-0 items-center rounded-full border border-[#f5e7d0]/20 bg-[#3a0c18]/65 px-4 py-2 sm:px-3.5 sm:py-1.5 text-[#ead9c3] transition-colors hover:bg-[#521222]/80 hover:text-[#fffaf0]"
                >
                  {t("lfeat.combos")}
                </Link>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#f5e7d0]/15 flex items-center justify-between gap-2">
              <span className="text-xs text-[#d6bfa3]">{t("lfeat.c1Footer")}</span>
              <Link
                to={localizePath("/tarot", language) as any}
                className="inline-flex min-h-12 sm:min-h-0 items-center gap-1.5 text-sm sm:text-xs font-semibold text-[#faf2e4] transition-colors hover:text-[#fffdf8]"
              >
                <span>{t("lfeat.c1Cta")}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 2: 1-column - Vedic Numerology Wheel */}
          <div className="group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-8 flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/vedic-numerology-wheel.webp"
                alt="Vedic numerology sacred geometry wheel illustrating numbers 1 through 9 and planetary rulers"
                loading="lazy"
                decoding="async"
                width={480}
                height={358}
                className="h-full w-full object-cover object-center opacity-25 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18050a] via-[#1f060d]/88 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                <Moon className="h-4 w-4 text-[#faf2e4]" aria-hidden="true" />
                <span>{t("lfeat.c2Eye")}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-[#faf2e4] tracking-tight">
                {t("lfeat.c2Title")}
              </h3>
              <p className="mt-2 text-base sm:text-sm text-[#e3cfb6]/95 leading-relaxed">
                {t("lfeat.c2Body")}
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#f5e7d0]/15">
              <Link
                to={localizePath("/numerology", language) as any}
                className="inline-flex min-h-12 sm:min-h-0 items-center gap-1.5 text-sm sm:text-xs font-semibold text-[#faf2e4] transition-colors hover:text-[#fffdf8]"
              >
                <span>{t("lfeat.c2Cta")}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 3: 1-column - Compassionate AI Oracle */}
          <div className="group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-8 flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/tarot-reading-oracle.webp"
                alt="Tarot reader hands thoughtfully drawing an illustrated arcana card during a reflective oracle reading"
                loading="lazy"
                decoding="async"
                width={480}
                height={358}
                className="h-full w-full object-cover object-center opacity-25 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18050a] via-[#1f060d]/88 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                <Sparkles className="h-4 w-4 text-[#faf2e4]" aria-hidden="true" />
                <span>{t("lfeat.c3Eye")}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-[#faf2e4] tracking-tight">
                {t("lfeat.c3Title")}
              </h3>
              <p className="mt-2 text-base sm:text-sm text-[#e3cfb6]/95 leading-relaxed">
                {t("lfeat.c3Body")}
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#f5e7d0]/15">
              <Link
                to={localizePath("/reading", language) as any}
                className="inline-flex min-h-12 sm:min-h-0 items-center gap-1.5 text-sm sm:text-xs font-semibold text-[#faf2e4] transition-colors hover:text-[#fffdf8]"
              >
                <span>{t("lfeat.c3Cta")}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 4: 2-column - Sacred Rituals & Private Journal */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl liquid-chrome-card liquid-chrome-card-hover p-7 sm:p-9 flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ead9c3] uppercase tracking-widest">
                <BookOpen className="h-4 w-4 text-[#faf2e4]" aria-hidden="true" />
                <span>{t("lfeat.c4Eye")}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-[#faf2e4] tracking-tight">
                {t("lfeat.c4Title")}
              </h3>
              <p className="mt-2.5 max-w-xl text-base text-[#e3cfb6]/95 leading-relaxed">
                {t("lfeat.c4Body")}
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl border border-[#f5e7d0]/20 bg-[#3a0c18]/55 p-3 text-left shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                  <div className="text-[#faf2e4] font-display text-lg font-bold">{t("lfeat.tile1Title")}</div>
                  <div className="text-xs text-[#d6bfa3] mt-0.5">{t("lhero.quickDaily")}</div>
                </div>
                <div className="rounded-2xl border border-[#f5e7d0]/20 bg-[#3a0c18]/55 p-3 text-left shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                  <div className="text-[#faf2e4] font-display text-lg font-bold">{t("lfeat.tile2Title")}</div>
                  <div className="text-xs text-[#d6bfa3] mt-0.5">{t("lfeat.tile2Desc")}</div>
                </div>
                <div className="rounded-2xl border border-[#f5e7d0]/20 bg-[#3a0c18]/55 p-3 text-left shadow-[inset_0_1px_1px_rgba(255,248,235,0.2)]">
                  <div className="text-[#faf2e4] font-display text-lg font-bold">{t("lfeat.tile3Title")}</div>
                  <div className="text-xs text-[#d6bfa3] mt-0.5">{t("lfeat.c4Footer")}</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#f5e7d0]/15 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[#ead9c3]">
                <ShieldCheck className="h-4 w-4 text-[#faf2e4]" aria-hidden="true" />
                <span>{t("lfeat.c4Footer")}</span>
              </div>
              <Link
                to={localizePath("/journal", language) as any}
                className="inline-flex min-h-12 sm:min-h-0 items-center gap-1.5 text-sm sm:text-xs font-semibold text-[#faf2e4] transition-colors hover:text-[#fffdf8]"
              >
                <span>{t("lfeat.c4Cta")}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ead9c3]">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#faf2e4] [text-wrap:balance]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-[#e3cfb6]/90 leading-relaxed [text-wrap:balance]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
