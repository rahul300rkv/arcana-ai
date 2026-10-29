import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Brand({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const iconSize = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-11 w-11" : "h-9 w-9";
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      {/* Liquid Chrome Emblem with Specular Highlight */}
      <div
        className={`relative ${iconSize} shrink-0 rounded-full bg-gradient-to-br from-white via-slate-300 to-slate-600 p-[1.5px] shadow-[0_0_20px_rgba(255,255,255,0.35)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(255,255,255,0.55)]`}
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#161824] to-[#090a10] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
          <Sparkles className="h-4 w-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-transform duration-500 group-hover:rotate-12" />
        </div>
      </div>

      {/* Chrome Typography */}
      <div className="flex flex-col text-left">
        <span className={`font-display ${textSize} font-bold tracking-tight leading-none`}>
          <span className="chrome-text">Astro</span>
          <span className="text-zinc-300/90 font-light tracking-wide ml-0.5">Free</span>
        </span>
      </div>
    </Link>
  );
}
