import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface Step {
  /** e.g. "1 + 5 + 0 + 8 + 1 + 9 + 9 + 5" */
  expression: string;
  sum: number;
}

/**
 * Animates a chain of digit-reduction steps as staggered chips joined by
 * arrows, e.g. `1+5+0+8+1+9+9+5 = 38 → 3+8 = 11`. Shared by the Mulank and
 * Bhagyank calculators so both feel like the same fluid interaction.
 */
export function StepTrail({ steps, className = "" }: { steps: Step[]; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-1.5 font-mono text-[11px] ${className}`}>
      {steps.map((step, i) => (
        <motion.span
          key={`${step.expression}-${i}`}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="flex items-center gap-1.5"
        >
          {i > 0 && <ArrowRight aria-hidden className="h-3 w-3 text-[color:var(--gold)]/70" />}
          <span
            className="rounded-md border px-1.5 py-0.5 text-muted-foreground"
            style={{ borderColor: "color-mix(in oklab, var(--gold) 25%, transparent)" }}
          >
            {step.expression} = {step.sum}
          </span>
        </motion.span>
      ))}
    </div>
  );
}
