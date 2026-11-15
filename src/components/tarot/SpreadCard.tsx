import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle, Hourglass, Heart, Briefcase, Coins, Scale, Cross, CalendarDays, Layers } from "lucide-react";
import type { Spread } from "@/lib/tarot/types";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  sparkle: Sparkle, hourglass: Hourglass, heart: Heart, briefcase: Briefcase,
  coin: Coins, scale: Scale, cross: Cross, calendar: CalendarDays,
};

export function SpreadCard({ spread, onSelect }: { spread: Spread; onSelect: () => void }) {
  const Icon = ICONS[spread.icon] ?? Layers;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <GlassCard className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_25%,transparent),transparent)] border border-[color-mix(in_oklab,var(--gold)_35%,transparent)]">
            <Icon className="h-6 w-6 text-[color:var(--gold)]" />
          </div>
          <div className="flex gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>{spread.count} cards</span>
            <span>·</span>
            <span>{spread.minutes} min</span>
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl">{spread.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{spread.description}</p>
        </div>
        <div className="mt-auto pt-2">
          <Link to="/reading/question" search={{ spread: spread.id }} onClick={onSelect}>
            <GoldButton size="sm" className="w-full">
              Begin <ArrowRight className="h-4 w-4" />
            </GoldButton>
          </Link>
        </div>
      </GlassCard>
    </motion.div>
  );
}
