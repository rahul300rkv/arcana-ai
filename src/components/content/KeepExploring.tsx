import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/arcana/GlassCard";

type Hub =
  | "/tarot"
  | "/numerology"
  | "/numerology/mulank"
  | "/bhagyank-calculator"
  | "/guide"
  | "/guide/tarot-card-meanings"
  | "/guide/tarot-spreads"
  | "/guide/numerology";

export interface HubLink {
  to: Hub;
  label: string;
  blurb: string;
}

/** Contextual hub links so every deep page links back into the main pillars. */
export function KeepExploring({ links }: { links: HubLink[] }) {
  return (
    <section aria-labelledby="keep-exploring-heading" className="scroll-mt-24">
      <h2 id="keep-exploring-heading" className="font-display text-2xl aurora-text sm:text-3xl">
        Keep exploring
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="block h-full">
              <GlassCard className="flex h-full items-start gap-3 p-4">
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base">{l.label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                    {l.blurb}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--gold)]" aria-hidden />
              </GlassCard>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
