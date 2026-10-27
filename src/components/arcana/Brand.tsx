import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Brand({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const iconSize = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-11 w-11" : "h-9 w-9";
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <Link to="/" className="group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-full">
      <div className={`relative ${iconSize} shrink-0 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1.5px] shadow-glow-gold transition-transform duration-300 group-hover:scale-105`}>
        <div className="flex h-full w-full items-center justify-center rounded-full bg-background/95 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-amber-300 transition-transform duration-500 group-hover:rotate-12" />
        </div>
      </div>
      <div className="flex flex-col text-left">
        <span className={`font-display ${textSize} font-bold tracking-wide leading-none`}>
          <span className="gold-text">Astro</span>
          <span className="text-foreground/90 font-light">Free</span>
        </span>
      </div>
    </Link>
  );
}
