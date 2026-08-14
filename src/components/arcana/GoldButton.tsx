import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const GoldButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-sm",
      lg: "h-13 px-8 text-base",
    }[size];

    const variants = {
      primary:
        "text-primary-foreground bg-[linear-gradient(135deg,var(--gold-soft),var(--gold)_55%,#b8862c)] shadow-glow-gold hover:brightness-110",
      secondary:
        "glass text-foreground hover:border-[color-mix(in_oklab,var(--gold)_40%,transparent)]",
      ghost: "text-foreground/80 hover:text-foreground hover:bg-white/5",
    }[variant];

    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-wide",
          "transition-all duration-300 active:scale-[0.98] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          sizes,
          variants,
          className,
        )}
        {...props}
      >
        {variant === "primary" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover:translate-x-full"
          />
        )}
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </button>
    );
  },
);
GoldButton.displayName = "GoldButton";
