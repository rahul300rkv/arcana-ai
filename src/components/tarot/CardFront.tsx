import { cn } from "@/lib/utils";
import type { TarotCard } from "@/lib/tarot/types";

export function CardFront({
  card,
  reversed,
  className,
  eager,
}: {
  card: TarotCard;
  reversed?: boolean;
  className?: string;
  eager?: boolean;
}) {

  const suitLabel =
    card.arcana === "major"
      ? "Major Arcana"
      : `${card.suit ? card.suit.charAt(0).toUpperCase() + card.suit.slice(1) : "Minor"} Minor Arcana`;
  const orientation = reversed ? ", reversed" : "";
  const themes = card.keywords.slice(0, 3).join(", ");
  const altText = `${card.name}${orientation} (${suitLabel}) Rider–Waite–Smith tarot card illustration${themes ? ` symbolizing ${themes}` : ""}`;

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--gold)_35%,transparent)]",
        "bg-[linear-gradient(160deg,#3b0d19,#18050b)] shadow-elegant",
        className,
      )}
    >
      <div className="absolute inset-3 rounded-xl border border-white/10" />
      <div
        className={cn(
          "absolute inset-4 grid grid-rows-[auto_1fr_auto] gap-2",
          reversed && "rotate-180",
        )}
      >
        <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {card.arcana === "major" ? "Major Arcana" : card.suit}
        </div>
        <div className="relative overflow-hidden rounded-lg bg-[radial-gradient(80%_60%_at_50%_40%,color-mix(in_oklab,var(--aurora-1)_50%,transparent),transparent_70%)]">
          <img
            src={card.image}
            alt={altText}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : undefined}
            decoding="async"
            width={360}
            height={604}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(26,5,11,0.8))] mix-blend-multiply" />
        </div>
        <div className="text-center font-display text-sm tracking-wide">{card.name}</div>
      </div>

    </div>
  );
}
