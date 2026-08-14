import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CardFront } from "@/components/tarot/CardFront";
import { CardBack } from "@/components/tarot/CardBack";
import { getCardById } from "@/lib/tarot/engine";

const STEP = "clamp(56px, 16vw, 150px)";

/** Four-card arc: dealt out from a centre stack, then flipped face-up. */
const cards = [
  { id: "major-18", rotate: -12, x: `calc(${STEP} * -1.5)`, y: "22px" },
  { id: "major-17", rotate: -4, x: `calc(${STEP} * -0.5)`, y: "-10px" },
  { id: "major-19", rotate: 4, x: `calc(${STEP} * 0.5)`, y: "-10px" },
  { id: "major-00", rotate: 12, x: `calc(${STEP} * 1.5)`, y: "22px" },
];

const DEAL = 0.18;
const FLIP_AT = 1.1;

export function FloatingCards() {
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (reduce) {
      setFlipped(true);
      return;
    }
    const id = window.setTimeout(() => setFlipped(true), FLIP_AT * 1000);
    return () => window.clearTimeout(id);
  }, [reduce]);

  return (
    <div className="relative mx-auto h-[300px] w-full max-w-2xl sm:h-[380px]">
      {cards.map((c, i) => {
        const card = getCardById(c.id);
        if (!card) return null;
        const isActive = active === c.id;
        const deal = i * DEAL;

        return (
          <motion.div
            key={c.id}
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: `calc(50% + ${c.x})`,
              zIndex: isActive ? 40 : 10 + i,
            }}
            initial={
              reduce
                ? false
                : { opacity: 0, x: "-50%", y: 0, scale: 0.7, rotate: 0, filter: "blur(6px)" }
            }
            animate={{
              opacity: 1,
              x: "-50%",
              scale: 1,
              rotate: c.rotate,
              filter: "blur(0px)",
            }}
            transition={{
              default: { type: "spring", stiffness: 140, damping: 18, delay: deal },
              opacity: { duration: 0.35, delay: deal },
              filter: { duration: 0.45, delay: deal },
            }}
          >
            <motion.button
              type="button"
              aria-label={`${card.name} — ${card.keywords.slice(0, 3).join(", ")}`}
              onHoverStart={() => setActive(c.id)}
              onHoverEnd={() => setActive((v) => (v === c.id ? null : v))}
              onFocus={() => setActive(c.id)}
              onBlur={() => setActive((v) => (v === c.id ? null : v))}
              onClick={() => setActive((v) => (v === c.id ? null : c.id))}
              className="block cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in_oklab,var(--gold)_60%,transparent)]"
              animate={
                reduce
                  ? undefined
                  : { y: [`calc(${c.y} - 6px)`, `calc(${c.y} + 6px)`, `calc(${c.y} - 6px)`] }
              }
              transition={{
                duration: 7 + i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: deal,
              }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="h-44 w-28 [perspective:1200px] sm:h-56 sm:w-36">
                <motion.div
                  className="relative h-full w-full [transform-style:preserve-3d]"
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{
                    duration: 0.85,
                    delay: reduce ? 0 : deal,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <CardBack alt={`${card.name} tarot card, face-down`} />
                  </div>
                  <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <CardFront card={card} eager />
                  </div>
                </motion.div>
              </div>
            </motion.button>

            <AnimatePresence>
              {isActive && flipped && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="pointer-events-none absolute left-1/2 top-full z-50 w-44 -translate-x-1/2 translate-y-2 rounded-xl border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-[color-mix(in_oklab,#0b0820_88%,transparent)] p-3 text-center shadow-glow-gold backdrop-blur-md"
                >
                  <div className="font-display text-sm tracking-wide">{card.name}</div>
                  <div className="mt-1 text-[11px] leading-snug text-muted-foreground">
                    {card.keywords.slice(0, 3).join(" · ")}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
