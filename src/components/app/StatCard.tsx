import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/arcana/GlassCard";
import type { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  value: string;
  hint?: string;
  icon: LucideIcon;
  className?: string;
};

/**
 * Parses a value like "12 days" into prefix number + suffix so we can count up
 * the numeric part while keeping the unit static. Non-numeric values render as-is.
 */
function splitValue(value: string): { num: number | null; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: null, suffix: value };
  return { num: Number(match[1]), suffix: match[2] };
}

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 900, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) mv.set(target);
  }, [inView, target, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
    </span>
  );
}

export function StatCard({ label, value, hint, icon: Icon, className }: Props) {
  const { num, suffix } = splitValue(value);

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group"
    >
      <GlassCard
        className={cn(
          "relative flex items-center justify-between overflow-hidden",
          className,
        )}
      >
        {/* shimmer sweep on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_40%,color-mix(in_oklab,var(--gold)_18%,transparent)_50%,transparent_60%)] transition-transform duration-[900ms] ease-out group-hover:translate-x-full"
        />
        <div className="relative">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
          <div className="mt-2 font-display text-3xl">
            {num !== null ? (
              <>
                <CountUp target={num} />
                {suffix}
              </>
            ) : (
              value
            )}
          </div>
          {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
        </div>
        <motion.div
          whileHover={{ rotate: 8, scale: 1.06 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="relative grid h-12 w-12 place-items-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--gold)_25%,transparent),transparent)] border border-white/10"
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-xl"
            style={{ boxShadow: "0 0 0 0 color-mix(in oklab, var(--gold) 40%, transparent)" }}
            animate={{
              boxShadow: [
                "0 0 0 0 color-mix(in oklab, var(--gold) 30%, transparent)",
                "0 0 0 8px color-mix(in oklab, var(--gold) 0%, transparent)",
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          />
          <Icon
            className="relative h-5 w-5 text-[color-mix(in_oklab,var(--gold)_85%,white)]"
            strokeWidth={1.5}
          />
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}
