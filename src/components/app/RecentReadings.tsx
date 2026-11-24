import { Link } from "@/components/LocalizedLink";
import { motion } from "framer-motion";
import { ChevronRight, Clock } from "@/components/icons";
import { GlassCard } from "@/components/arcana/GlassCard";
import { useArcanaData } from "@/lib/tarot/history";
import { getLocalizedSpread, getSpread } from "@/lib/tarot/spreads";
import { getBcp47 } from "@/lib/language";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";

export function RecentReadings() {
  const { history } = useArcanaData();
  const t = useTranslate();
  const [language] = useLanguage();
  const recent = history.slice(0, 3);

  function relativeTime(ts: number): string {
    const diff = Date.now() - ts;
    const mins = Math.round(diff / 60000);
    if (mins < 1) return t("journal.justNow");
    if (mins < 60) return `${mins}${t("journal.mAgo")}`;
    const hours = Math.round(mins / 60);
    if (hours < 24) return `${hours}${t("journal.hAgo")}`;
    const days = Math.round(hours / 24);
    if (days < 7) return `${days}${t("journal.dAgo")}`;
    return new Date(ts).toLocaleDateString(getBcp47(language));
  }

  return (
    <GlassCard>
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl">{t("recent.title")}</h3>
        <Link to="/journal" className="text-xs text-muted-foreground hover:text-foreground">
          {t("recent.viewAll")}
        </Link>
      </div>
      {recent.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">
          {t("recent.emptyPrefix")}{" "}
          <Link to={localizePath("/reading", language) as any} className="underline underline-offset-4">
            {t("recent.emptyCta")}
          </Link>
          .
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-white/5">
          {recent.map((r, i) => {
            const spread = getLocalizedSpread(getSpread(r.spreadId), t);
            return (
              <motion.li
                key={r.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/reading/result"
                  search={{ id: r.id }}
                  className="group relative flex w-full items-center justify-between py-3.5 text-left"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-[-8px] inset-y-1 rounded-xl bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.04]"
                  />
                  <span
                    aria-hidden
                    className="absolute left-[-8px] top-1 bottom-1 w-0.5 origin-top scale-y-0 rounded-full bg-[linear-gradient(180deg,var(--gold-soft),var(--gold))] transition-transform duration-300 group-hover:scale-y-100"
                  />
                  <div className="relative min-w-0">
                    <div className="truncate text-sm text-foreground transition-colors group-hover:text-[color-mix(in_oklab,var(--gold)_75%,white)]">
                      {spread.name}
                      {r.question ? `: ${r.question}` : ""}
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {relativeTime(r.createdAt)}
                      <span className="rounded-full glass px-2 py-0.5 text-[10px] uppercase tracking-widest">
                        {r.cards.length} {t("reading.cardsUnit")}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="relative h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-[color-mix(in_oklab,var(--gold)_80%,white)]" />
                </Link>
              </motion.li>
            );
          })}
        </ul>
      )}
    </GlassCard>
  );
}
