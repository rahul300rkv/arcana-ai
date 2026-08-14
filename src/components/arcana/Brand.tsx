import { Link } from "@tanstack/react-router";

export function Brand({ size = "md" }: { size?: "sm" | "md" }) {
  const dimension = size === "sm" ? "h-10 w-10" : "h-12 w-12 sm:h-11 sm:w-11";
  const text = size === "sm" ? "text-lg" : "text-2xl sm:text-xl";
  return (
    <Link to="/" className="group flex items-center gap-2">
      <img
        src="/logo.webp"
        alt="AstroFree logo"
        className={`${dimension} rounded-full object-cover shadow-lg shadow-primary/10 ring-2 ring-gold/20 transition-transform duration-300 group-hover:scale-105`}
      />
      <span className={`font-display ${text} tracking-wide`}>
        <span className="gold-text">Astro</span>
        <span className="text-foreground/90">Free</span>
      </span>
    </Link>
  );
}
