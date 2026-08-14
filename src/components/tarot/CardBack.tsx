import { cn } from "@/lib/utils";

export const CARD_BACK_SRC = "/cards/back.webp";

export function CardBack({
  className,
  alt = "",
}: {
  className?: string;
  /**
   * Defaults to "" (purely decorative — e.g. a generic face-down deck).
   * Pass real text when the card's identity is already known at render
   * time (e.g. a face-down card that's about to flip to reveal a specific
   * tarot card), so search engines and screen readers get meaningful
   * content instead of an empty alt on every occurrence.
   */
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--gold)_35%,transparent)]",
        "bg-[linear-gradient(160deg,#160f3a,#0b0820)] shadow-glow-gold",
        className,
      )}
    >
      <img
        src={CARD_BACK_SRC}
        alt={alt}
        aria-hidden={alt ? undefined : true}
        loading="lazy"
        decoding="async"
        width={440}
        height={660}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,color-mix(in_oklab,var(--gold)_12%,transparent),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-2 rounded-xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)]" />
    </div>
  );
}
