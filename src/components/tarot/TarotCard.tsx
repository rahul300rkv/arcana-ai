import { motion } from "framer-motion";
import { CardBack } from "./CardBack";
import { CardFront } from "./CardFront";
import type { TarotCard as TCard } from "@/lib/tarot/types";
import { cn } from "@/lib/utils";

interface Props {
  card: TCard;
  reversed?: boolean;
  revealed?: boolean;
  onReveal?: () => void;
  className?: string;
}

export function TarotCard({ card, reversed, revealed, onReveal, className }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onReveal}
      className={cn(
        "relative aspect-[2/3] w-full [perspective:1200px] focus-visible:outline-none",
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
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <CardBack />
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <CardFront card={card} reversed={reversed} />
        </div>
      </motion.div>
    </motion.button>
  );
}
