import { motion } from "framer-motion";
import { CardBack } from "./CardBack";

export function TarotDeck({ shuffling = false }: { shuffling?: boolean }) {
  const cards = Array.from({ length: 7 });
  return (
    <div className="relative mx-auto h-64 w-44 sm:h-80 sm:w-56">
      {cards.map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={
            shuffling
              ? {
                  x: [0, (i - 3) * 40, 0],
                  y: [0, (i % 2 === 0 ? -1 : 1) * 30, 0],
                  rotate: [0, (i - 3) * 12, 0],
                }
              : { x: (i - 3) * 2, y: (i - 3) * -2, rotate: (i - 3) * 1.5 }
          }
          transition={{ duration: 1.1, repeat: shuffling ? Infinity : 0, ease: "easeInOut" }}
          style={{ zIndex: i }}
        >
          <CardBack />
        </motion.div>
      ))}
    </div>
  );
}
