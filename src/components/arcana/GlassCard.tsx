import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const GlassCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass rounded-2xl p-6 shadow-elegant transition-all duration-300",
        "hover:border-[color-mix(in_oklab,var(--gold)_35%,transparent)] hover:shadow-glow-gold",
        className,
      )}
      {...props}
    />
  ),
);
GlassCard.displayName = "GlassCard";
