import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CardFront } from "@/components/tarot/CardFront";
import { CardBack } from "@/components/tarot/CardBack";
import { getCardById } from "@/lib/tarot/engine";
import { Sparkles, Eye } from "lucide-react";

const STEP = "clamp(55px, 15vw, 130px)";

/** Five-card celestial fan: The Fool, The High Priestess, The Star, The Magician, The Sun */
const cards = [
  { id: "major-00", rotate: -14, x: `calc(${STEP} * -2)`, y: "26px" },
  { id: "major-02", rotate: -7, x: `calc(${STEP} * -1)`, y: "6px" },
  { id: "major-17", rotate: 0, x: "0px", y: "-10px" },
  { id: "major-01", rotate: 7, x: `calc(${STEP} * 1)`, y: "6px" },
  { id: "major-19", rotate: 14, x: `calc(${STEP} * 2)`, y: "26px" },
];

export function FloatingCards() {
  // Start revealed so center card image renders cleanly without an artificial 700ms LCP gate
  const [flipped, setFlipped] = useState(true);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    setFlipped(true);
  }, []);

  return (
    <div className="relative mx-auto h-[320px] w-full max-w-4xl sm:h-[400px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#8c162e]/35 via-[#f5e7d0]/22 to-[#6b0f23]/35 blur-3xl shadow-[0_0_65px_rgba(165,30,58,0.35)]"
      />

      {cards.map((c, i) => {
        const card = getCardById(c.id);
        if (!card) return null;
        const isActive = active === c.id;

        return (
          <div
            key={c.id}
            className="absolute top-1/2 transition-transform duration-300 ease-out"
            style={{
              left: `calc(50% + ${c.x})`,
              zIndex: isActive ? 40 : 10 + i,
              transform: `translate(-50%, -50%) scale(${isActive ? 1.12 : 1}) rotate(${isActive ? 0 : c.rotate}deg)`,
            }}
          >
            <button
              type="button"
              aria-label={`${card.name} — ${card.keywords.slice(0, 3).join(", ")}`}
              onMouseEnter={() => setActive(c.id)}
              onMouseLeave={() => setActive((v) => (v === c.id ? null : v))}
              onFocus={() => setActive(c.id)}
              onBlur={() => setActive((v) => (v === c.id ? null : v))}
              onClick={() => setActive((v) => (v === c.id ? null : c.id))}
              style={{ transform: `translateY(${c.y})` }}
              className="group block cursor-pointer rounded-2xl transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5e7d0]"
            >
              <div className="relative h-48 w-32 [perspective:1200px] sm:h-64 sm:w-40 transition-transform duration-300">
                <div
                  className={`absolute -inset-[1.5px] rounded-xl bg-gradient-to-br from-[#f8ebd3]/50 via-[#c9a97e]/25 to-[#8f1c35]/45 transition-opacity duration-300 ${
                    isActive
                      ? "opacity-100 ring-2 ring-[#f5e7d0]/80 shadow-glow-gold"
                      : "opacity-60"
                  }`}
                />

                <div
                  className="relative h-full w-full rounded-xl overflow-hidden [transform-style:preserve-3d] transition-transform duration-500 ease-out"
                  style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <CardBack alt={`${card.name} tarot card back with celestial gold filigree design, face-down`} />
                  </div>
                  <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <CardFront card={card} eager={i === 2} />
                  </div>
                </div>
              </div>
            </button>

            {isActive && flipped && (
              <div className="pointer-events-auto absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 translate-y-3 rounded-2xl border border-[#f5e7d0]/25 bg-[#1f060d]/95 p-3.5 text-center shadow-[0_20px_45px_rgba(10,1,4,0.92),inset_0_1px_1px_rgba(255,248,235,0.3)] backdrop-blur-xl">
                <div className="flex items-center justify-center gap-1.5 text-[#ead9c3] text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="h-3 w-3 text-[#faf2e4]" />
                  <span>Arcana Archetype</span>
                </div>
                <div className="font-display text-base font-bold text-[#faf2e4] tracking-wide mt-0.5">
                  {card.name}
                </div>
                <div className="mt-1 text-xs text-[#dcc8b2] leading-snug">
                  {card.keywords.slice(0, 3).join(" · ")}
                </div>
                <Link
                  to="/tarot"
                  className="mt-2.5 inline-flex min-h-11 sm:min-h-0 items-center gap-1 text-xs font-semibold text-[#fffaf0] hover:underline transition-colors"
                >
                  <Eye className="h-3 w-3" />
                  <span>View Card Insight</span>
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
