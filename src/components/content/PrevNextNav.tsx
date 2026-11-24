import { Link } from "@/components/LocalizedLink";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { GlassCard } from "@/components/arcana/GlassCard";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";

export interface PrevNextItem {
  slug: string;
  label: string;
}

/**
 * Sequential prev/next links. Gives crawlers a complete path through every
 * card / number page, so no detail page is more than one hop from another.
 */
export function PrevNextNav({
  base,
  prev,
  next,
  hubTo,
  hubLabel,
}: {
  base: "/tarot/$slug" | "/numerology/$slug";
  prev?: PrevNextItem;
  next?: PrevNextItem;
  hubTo: "/tarot" | "/numerology";
  hubLabel: string;
}) {
  const t = useTranslate();
  const [language] = useLanguage();

  return (
    <nav aria-label={t("common.prevNext")} className="grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link to={base} params={{ slug: prev.slug }} className="block">
          <GlassCard className="flex h-full items-center gap-3 p-4">
            <ArrowLeft className="h-4 w-4 shrink-0 text-[var(--gold)]" aria-hidden />
            <span className="min-w-0">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("common.previous")}
              </span>
              <span className="mt-1 block truncate font-display text-sm">{prev.label}</span>
            </span>
          </GlassCard>
        </Link>
      ) : (
        <Link to={localizePath(hubTo, language) as any} className="block">
          <GlassCard className="flex h-full items-center gap-3 p-4">
            <ArrowLeft className="h-4 w-4 shrink-0 text-[var(--gold)]" aria-hidden />
            <span className="min-w-0">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("common.backTo")}
              </span>
              <span className="mt-1 block truncate font-display text-sm">{hubLabel}</span>
            </span>
          </GlassCard>
        </Link>
      )}
      {next && (
        <Link to={base} params={{ slug: next.slug }} className="block">
          <GlassCard className="flex h-full items-center justify-end gap-3 p-4 text-right">
            <span className="min-w-0">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {t("common.next")}
              </span>
              <span className="mt-1 block truncate font-display text-sm">{next.label}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-[var(--gold)]" aria-hidden />
          </GlassCard>
        </Link>
      )}
    </nav>
  );
}
