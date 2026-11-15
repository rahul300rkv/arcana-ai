import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Brand({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const iconSize = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-11 w-11" : "h-9 w-9";
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5e7d0]/60"
    >
      {/* Crimson & Warm Ivory Seal Emblem */}
      <div
        className={`relative ${iconSize} shrink-0 rounded-full bg-gradient-to-br from-[#fffdf8] via-[#eadac1] to-[#9b7c5a] p-[1.5px] shadow-[0_0_20px_rgba(248,236,214,0.28)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(248,236,214,0.48)]`}
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#3b0b17] to-[#170409] shadow-[inset_0_1px_1px_rgba(255,248,235,0.35)]">
          <Sparkles className="h-4 w-4 text-[#faf2e4] drop-shadow-[0_0_8px_rgba(250,240,224,0.8)] transition-transform duration-500 group-hover:rotate-12" />
        </div>
      </div>

      {/* Warm Ivory Typography */}
      <div className="flex flex-col text-left">
        <span className={`font-display ${textSize} font-bold tracking-tight leading-none`}>
          <span className="chrome-text">Astro</span>
          <span className="text-[#eadac1] font-light tracking-wide ml-0.5">Free</span>
        </span>
      </div>
    </Link>
  );
}
