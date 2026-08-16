import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/arcana/GlassCard";

interface Props {
  title: string;
  body: string;
  ctaLabel: string;
  to:
    | "/reading"
    | "/numerology"
    | "/numerology/mulank"
    | "/numerology/bhagyank"
    | "/numerology/namank"
    | "/bhagyank-calculator"
    | "/namank-calculator"
    | "/tarot"
    | "/tarot/one-card"
    | "/tarot/three-card"
    | "/tarot/love"
    | "/tarot/yes-no"
    | "/tarot/career"
    | "/tarot/celtic-cross";
}

/** Shared conversion block at the end of every content page. */
export function CTASection({ title, body, ctaLabel, to }: Props) {
  return (
    <GlassCard className="relative overflow-hidden p-8 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_0%,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_70%)]"
      />
      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" aria-hidden />
          Free, no signup
        </span>
        <h2 className="mt-4 font-display text-2xl aurora-text sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
        <Link
          to={to}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--gold-soft),var(--gold)_55%,#b8862c)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow-gold transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </GlassCard>
  );
}
