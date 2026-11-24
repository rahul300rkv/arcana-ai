import { Link } from "@/components/LocalizedLink";
import { Brand } from "@/components/arcana/Brand";
import { Sparkles } from "@/components/icons";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { ALL_LOCALES, localizePath } from "@/locales";

export function Footer() {
  const t = useTranslate();
  const [language, setLanguage] = useLanguage();

  return (
    <footer className="relative border-t border-[#f5e7d0]/15 bg-[#120307] py-12 sm:py-16 [content-visibility:auto] [contain-intrinsic-size:auto_420px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="col-span-2">
            <Brand size="lg" />
            <p className="mt-4 max-w-sm text-base sm:text-sm text-[#d6bfa3] leading-relaxed">
              {t("lhero.sub")}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#ead9c3]">
              <Sparkles className="h-3.5 w-3.5 text-[#faf2e4]" aria-hidden="true" />
              <span>{t("hero.title1")} {t("hero.title2")}</span>
            </div>
          </div>

          <FooterCol
            title={t("lfooter.spreadsCol")}
            items={[
              { label: t("lfooter.s1"), to: localizePath("/tarot/celtic-cross", language) },
              { label: t("lfooter.s2"), to: localizePath("/tarot/three-card", language) },
              { label: t("lfooter.s3"), to: localizePath("/tarot/love", language) },
              { label: t("lfooter.s4"), to: localizePath("/career-tarot-reading", language) },
              { label: t("lfooter.s5"), to: localizePath("/tarot/one-card", language) },
              { label: t("lfooter.s6"), to: localizePath("/yes-no-tarot", language) },
              { label: t("lfooter.s7"), to: localizePath("/tarot/combinations", language) },
            ]}
          />

          <FooterCol
            title={t("lfooter.numCol")}
            items={[
              { label: t("lfooter.n1"), to: localizePath("/numerology", language) },
              { label: t("lfooter.n2"), to: localizePath("/numerology/mulank", language) },
              { label: t("lfooter.n3"), to: localizePath("/numerology/compatibility", language) },
              { label: t("lfooter.n4"), to: localizePath("/bhagyank-calculator", language) },
              { label: t("lfooter.n5"), to: localizePath("/namank-calculator", language) },
              { label: t("lfooter.n6"), to: localizePath("/guide/mulank-vs-bhagyank", language) },
              { label: t("lfooter.n7"), to: "/hi", onClick: () => setLanguage("hi") },
            ]}
          />

          <FooterCol
            title={t("lfooter.wisdomCol")}
            items={[
              { label: t("lfooter.w1"), to: localizePath("/guide", language) },
              { label: t("lfooter.w2"), to: localizePath("/guide/tarot-card-meanings", language) },
              { label: t("lfooter.w3"), to: localizePath("/major-arcana-tarot-cards-meanings", language) },
              { label: t("lfooter.w4"), to: localizePath("/about", language) },
              { label: t("lfooter.w5"), to: localizePath("/contact", language) },
              { label: t("lfooter.w6"), to: localizePath("/privacy", language) },
              { label: t("lfooter.w7"), to: localizePath("/terms", language) },
              { label: t("lfooter.w8"), to: localizePath("/disclaimer", language) },
            ]}
          />
        </div>

        {/* Crawlable 13-Language Selector Strip */}
        <div className="mt-10 pt-6 border-t border-[#f5e7d0]/10">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#ead9c3] mb-3">
            {t("lnav.language")}
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_LOCALES.map((loc) => {
              const target = localizePath("/", loc.meta.code);
              const isActive = loc.meta.code === language;
              return (
                <Link
                  key={loc.meta.code}
                  to={target as any}
                  onClick={() => setLanguage(loc.meta.code)}
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs transition-colors ${
                    isActive
                      ? "border-[#f5e7d0]/55 bg-[#f5e7d0]/15 text-[#fffaf0] font-semibold"
                      : "border-[#f5e7d0]/20 bg-[#2d0913]/55 text-[#d6bfa3] hover:border-[#f5e7d0]/45 hover:text-[#fffaf0]"
                  }`}
                >
                  {loc.meta.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#f5e7d0]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#d6bfa3]">
          <div>
            © {t("lfooter.copyright")}
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/hi" onClick={() => setLanguage("hi")} className="inline-flex min-h-12 min-w-12 sm:min-h-0 sm:min-w-0 items-center justify-center px-2 hover:text-[#fffaf0] transition-colors">
              {t("lnav.hindiHub")}
            </Link>
            <span aria-hidden="true">·</span>
            <Link to={localizePath("/privacy", language) as any} className="inline-flex min-h-12 min-w-12 sm:min-h-0 sm:min-w-0 items-center justify-center px-2 hover:text-[#fffaf0] transition-colors">
              {t("lfooter.bottomPrivacy")}
            </Link>
            <span aria-hidden="true">·</span>
            <Link to={localizePath("/terms", language) as any} className="inline-flex min-h-12 min-w-12 sm:min-h-0 sm:min-w-0 items-center justify-center px-2 hover:text-[#fffaf0] transition-colors">
              {t("lfooter.bottomTerms")}
            </Link>
            <span aria-hidden="true">·</span>
            <Link to={localizePath("/about", language) as any} className="inline-flex min-h-12 min-w-12 sm:min-h-0 sm:min-w-0 items-center justify-center px-2 hover:text-[#fffaf0] transition-colors">
              {t("lfooter.bottomAbout")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string; onClick?: () => void }[];
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-[#ead9c3]">
        {title}
      </div>
      <ul className="mt-3 space-y-0.5 sm:space-y-2 text-base sm:text-sm text-[#d6bfa3]">
        {items.map((i) => (
          <li key={`${i.to}-${i.label}`}>
            <Link
              to={i.to as any}
              onClick={i.onClick}
              className="inline-flex min-h-12 sm:min-h-0 items-center py-1 sm:py-0 transition-colors hover:text-[#fffaf0]"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
