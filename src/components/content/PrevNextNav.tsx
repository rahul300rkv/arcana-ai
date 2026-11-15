import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/arcana/GlassCard";

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
  return (
    <nav aria-label="More in this series" className="grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link to={base} params={{ slug: prev.slug }} className="block">
          <GlassCard className="flex h-full items-center gap-3 p-4">
            <ArrowLeft className="h-4 w-4 shrink-0 text-[var(--gold)]" aria-hidden />
            <span className="min-w-0">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Previous
              </span>
              <span className="mt-1 block truncate font-display text-sm">{prev.label}</span>
            </span>
          </GlassCard>
        </Link>
      ) : (
        <Link to={hubTo} className="block">
          <GlassCard className="flex h-full items-center gap-3 p-4">
            <ArrowLeft className="h-4 w-4 shrink-0 text-[var(--gold)]" aria-hidden />
            <span className="min-w-0">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Back to
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
                Next
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
