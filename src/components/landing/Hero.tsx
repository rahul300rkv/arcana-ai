import { Link } from "@/components/LocalizedLink";
import { ArrowRight, Sparkles, Compass, Moon, Sun, Shield, Globe } from "@/components/icons";
import { FloatingCards } from "@/components/arcana/FloatingCards";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";

export function Hero() {
  const t = useTranslate();
  const [language, setLanguage] = useLanguage();
  const readingTo = localizePath("/reading", language);
  const numerologyTo = localizePath("/numerology", language);

  return (
    <section
      id="site-content"
      className="relative overflow-hidden scroll-mt-16 pt-20 pb-16 sm:pt-24 sm:pb-24"
    >
      {/* Ambient Crimson Burgundy & Warm Ivory Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[92vw] max-w-4xl rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,238,218,0.1)_0%,rgba(165,28,56,0.2)_38%,rgba(105,12,32,0.09)_62%,transparent_76%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 right-10 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(248,236,214,0.08)_0%,rgba(155,24,52,0.12)_45%,transparent_72%)] md:block"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Unboxed clean metadata kicker */}
          <div className="mx-auto mb-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-[#e6d3ba] tracking-[0.22em] uppercase">
            <span>{t("lhero.k1")}</span>
            <span aria-hidden="true" className="text-[#f5e7d0]/40">·</span>
            <span>{t("lhero.k2")}</span>
            <span aria-hidden="true" className="text-[#f5e7d0]/40">·</span>
            <span>{t("lhero.k3")}</span>
          </div>

          {/* Majestic Display Sub-Headline with Warm Ivory Satin Shine */}
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] [text-wrap:balance]">
            <span>{t("lhero.head1")}</span>{" "}
            <span className="chrome-text">{t("lhero.head2")}</span>
          </h2>

          {/* Subtitle in Warm Ivory Cream */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#e5d2ba]/95 leading-relaxed [text-wrap:balance]">
            {t("lhero.sub")}
          </p>

          {/* Primary Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={readingTo as any}
              className="liquid-chrome-btn w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#24060e]"
            >
              <Compass className="h-4 w-4" aria-hidden="true" />
              <span>{t("lhero.ctaTarot")}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              to={numerologyTo as any}
              className="w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f5e7d0]/25 bg-[#3f0e1b]/85 md:bg-[#3f0e1b]/55 px-7 py-3.5 text-base sm:text-sm font-semibold text-[#faf2e4] hover:bg-[#571324]/75 hover:border-[#f5e7d0]/55 shadow-[inset_0_1px_1px_rgba(255,248,235,0.28)] transition-all duration-300 md:backdrop-blur-md"
            >
              <Moon className="h-4 w-4 text-[#ead9c3]" aria-hidden="true" />
              <span>{t("lhero.ctaNumerology")}</span>
            </Link>
          </div>

          {/* Crawlable Quick-Entry Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#d6bfa3]">
            <Link
              to={localizePath("/tarot/one-card", language) as any}
              className="inline-flex min-h-10 sm:min-h-0 items-center gap-1.5 hover:text-[#faf2e4] hover:underline underline-offset-4"
            >
              <Sun className="h-3.5 w-3.5 text-[#ead9c3]" aria-hidden="true" />
              <span>{t("lhero.quickDaily")}</span>
            </Link>
            <span aria-hidden="true" className="text-[#f5e7d0]/25">·</span>
            <Link
              to={localizePath("/tarot/celtic-cross", language) as any}
              className="inline-flex min-h-10 sm:min-h-0 items-center gap-1.5 hover:text-[#faf2e4] hover:underline underline-offset-4"
            >
              <span>{t("lnav.celtic")}</span>
            </Link>
            <span aria-hidden="true" className="text-[#f5e7d0]/25">·</span>
            <Link
              to={localizePath("/major-arcana-tarot-cards-meanings", language) as any}
              className="inline-flex min-h-10 sm:min-h-0 items-center gap-1.5 hover:text-[#faf2e4] hover:underline underline-offset-4"
            >
              <span>{t("lnav.majorArcana")}</span>
            </Link>
            <span aria-hidden="true" className="text-[#f5e7d0]/25">·</span>
            <Link
              to={numerologyTo as any}
              className="inline-flex min-h-10 sm:min-h-0 items-center gap-1.5 hover:text-[#faf2e4] hover:underline underline-offset-4"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#ead9c3]" aria-hidden="true" />
              <span>{t("lhero.quickCalc")}</span>
            </Link>
            <span aria-hidden="true" className="text-[#f5e7d0]/25">·</span>
            <Link
              to={localizePath("/yes-no-tarot", language) as any}
              className="inline-flex min-h-10 sm:min-h-0 items-center gap-1.5 hover:text-[#faf2e4] hover:underline underline-offset-4"
            >
              <Shield className="h-3.5 w-3.5 text-[#ead9c3]" aria-hidden="true" />
              <span>{t("lnav.yesNo")}</span>
            </Link>
            <span aria-hidden="true" className="text-[#f5e7d0]/25">·</span>
            <Link
              to="/hi"
              onClick={() => setLanguage("hi")}
              className="inline-flex min-h-10 sm:min-h-0 items-center gap-1.5 font-semibold text-[#f5e7d0] hover:text-[#fffaf0] hover:underline underline-offset-4"
            >
              <Globe className="h-3.5 w-3.5 text-[#ead9c3]" aria-hidden="true" />
              <span>{t("lhero.quickHindi")}</span>
            </Link>
          </div>
        </div>

        {/* Five-Card Interactive Fan Display */}
        <div className="mt-14 sm:mt-16">
          <FloatingCards />
        </div>
      </div>
    </section>
  );
}
