import { motion } from "framer-motion";
import { CardBack } from "./CardBack";
import { CardFront } from "./CardFront";
import type { TarotCard as TCard } from "@/lib/tarot/types";
import { cn } from "@/lib/utils";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { getLocalizedCardName } from "@/locales/card-terms";

interface Props {
  card: TCard;
  reversed?: boolean;
  revealed?: boolean;
  onReveal?: () => void;
  className?: string;
}

export function TarotCard({ card, reversed, revealed, onReveal, className }: Props) {
  const [lang] = useLanguage();
  const t = useTranslate();
  const localName = getLocalizedCardName(card.name, lang);
  const buttonLabel = revealed
    ? `${localName}${reversed ? ` (${t("tarotUi.reversed")})` : ""}`
    : t("tarotUi.tapReveal");

  return (
    <motion.button
      type="button"
      onClick={onReveal}
      aria-label={buttonLabel}
      aria-pressed={Boolean(revealed)}
      className={cn(
        "relative aspect-[2/3] w-full [perspective:1200px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded-2xl",
        !revealed && "cursor-pointer",
        className,
      )}
      whileHover={!revealed ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: revealed ? 180 : 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div aria-hidden={Boolean(revealed)} className="absolute inset-0 [backface-visibility:hidden]">
          <CardBack alt={t("tarotUi.cardBackAlt")} />
        </div>
        <div
          aria-hidden={!revealed}
          className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <CardFront card={card} reversed={reversed} />
        </div>
      </motion.div>
    </motion.button>
  );
}
