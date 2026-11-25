import { cn } from "@/lib/utils";
import type { TarotCard } from "@/lib/tarot/types";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { getLocalizedArcana, getLocalizedCardName, getLocalizedSuit } from "@/locales/card-terms";

export type CardFrontCard = Pick<TarotCard, "id" | "name" | "arcana" | "image" | "keywords"> & {
  suit?: TarotCard["suit"];
  width?: number;
  height?: number;
};

export function CardFront({
  card,
  reversed,
  className,
  eager,
}: {
  card: CardFrontCard;
  reversed?: boolean;
  className?: string;
  eager?: boolean;
}) {
  const [lang] = useLanguage();
  const t = useTranslate();
  const localName = getLocalizedCardName(card.name, lang);
  const arcanaLabel = getLocalizedArcana(card.arcana, lang);
  const suitLabel =
    card.arcana === "major" ? arcanaLabel : `${getLocalizedSuit(card.suit, lang)} · ${arcanaLabel}`;
  const orientation = reversed ? ` (${t("tarotUi.reversed")})` : "";
  const themes = card.keywords.slice(0, 3).join(", ");
  const altText = `${localName}${orientation} (${suitLabel})${themes ? ` — ${themes}` : ""}`;

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
          {card.arcana === "major" ? arcanaLabel : getLocalizedSuit(card.suit, lang)}
        </div>
        <div className="relative overflow-hidden rounded-lg bg-[radial-gradient(80%_60%_at_50%_40%,color-mix(in_oklab,var(--aurora-1)_50%,transparent),transparent_70%)]">
          <img
            src={card.image}
            alt={altText}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : undefined}
            decoding="async"
            width={card.width ?? 360}
            height={card.height ?? 604}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(26,5,11,0.8))] mix-blend-multiply" />
        </div>
        <div className="text-center font-display text-sm tracking-wide">{localName}</div>
      </div>

    </div>
  );
}
