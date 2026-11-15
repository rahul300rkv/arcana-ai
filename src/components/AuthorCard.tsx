import { CalendarClock, Sparkles, UserRound } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface AuthorCardProps {
  lastUpdated: string;
  category: string;
  readingTime: string;
  className?: string;
}

const formatDate = (value: string) =>
  new Date(`${value}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export function AuthorCard({
  lastUpdated,
  category,
  readingTime,
  className,
}: AuthorCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl liquid-chrome-card p-6 shadow-2xl backdrop-blur-xl",
        className,
      )}
    >
      <div className="flex items-center gap-3.5">
        <div className="grid h-12 w-12 place-items-center rounded-full border border-[#f5e7d0]/30 bg-gradient-to-br from-[#f5e7d0]/20 via-[#5a1224]/65 to-[#1c050b]/90 shadow-[inset_0_1px_1px_rgba(255,248,235,0.45)]">
          <UserRound className="h-5 w-5 text-[#faf2e4]" aria-hidden="true" />
        </div>

        <div>
          <p className="font-display text-xl font-bold text-[#faf2e4]">AstroFree Editorial Team</p>
          <p className="text-xs uppercase tracking-[0.2em] text-[#d6bfa3] font-medium">
            Tarot & Numerology Research
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[#e3cfb6]/90">
        Every guide is reviewed by the AstroFree Editorial Team. Our articles combine traditional
        tarot and numerology references with carefully edited AI-assisted writing. Content is created
        for education and self-reflection, not as professional medical, legal or financial advice.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-[#d6bfa3] font-medium">
        <span className="inline-flex items-center gap-1.5">
          <CalendarClock className="h-3.5 w-3.5 text-[#faf2e4]" aria-hidden="true" />
          Last updated {formatDate(lastUpdated)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-[#faf2e4]" aria-hidden="true" />
          {category}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#faf2e4] shadow-[0_0_6px_rgba(250,240,224,0.8)]" aria-hidden="true" />
          {readingTime}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-xs text-[#ead9c3]">
        <Link to="/editorial-policy" className="underline underline-offset-4 hover:text-[#fffaf0] transition-colors">
          Editorial Policy
        </Link>
        <Link to="/about" className="underline underline-offset-4 hover:text-[#fffaf0] transition-colors">
          AI Methodology
        </Link>
      </div>
    </div>
  );
}
