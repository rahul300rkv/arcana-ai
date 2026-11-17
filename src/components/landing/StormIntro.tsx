import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";

const StormCanvas = lazy(() => import("./StormCanvas"));

export function StormIntro() {
  const isMobile = useIsMobile();
  const wrapperRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRowRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const [webglReady, setWebglReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const scrollToSite = () => {
    const target = document.getElementById("site-content");
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      return;
    }
    const wrapper = wrapperRef.current;
    if (wrapper) {
      window.scrollTo({
        top: wrapper.offsetTop + wrapper.offsetHeight,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    }
  };

  useEffect(() => {
    if (isMobile || window.innerWidth < 768) {
      setWebglReady(false);
      return;
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setWebglReady(false);
      return;
    }

    // Defer loading Three.js cleanly so first paint & hydration stay unblocked.
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setWebglReady(true), { timeout: 600 });
      return () => w.cancelIdleCallback?.(id);
    }
    const timer = window.setTimeout(() => setWebglReady(true), 120);
    return () => window.clearTimeout(timer);
  }, [isMobile]);

  if (isMobile) {
    return (
      <section
        id="storm-intro"
        aria-label="AstroFree Cosmic Introduction"
        className="relative w-full min-h-[76svh] bg-[#1a0418] flex flex-col items-center justify-center px-5 pt-24 pb-14 text-center overflow-hidden border-b border-white/10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(255,45,107,0.28) 0%, rgba(106,10,42,0.35) 45%, #1a0418 85%)",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#ff2d6b]/15 blur-3xl pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center justify-center max-w-lg mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ead9c3] drop-shadow-md">
            Ancient Wisdom · Vedic Numerology · Compassionate AI
          </p>

          <p className="mt-4 font-display text-5xl font-extrabold tracking-tight leading-none drop-shadow-lg">
            <span className="chrome-text">Astro</span>
            <span className="ml-1 font-light tracking-wide text-[#faf2e4]">Free</span>
          </p>

          <div
            aria-hidden="true"
            className="mt-3 h-[1.5px] w-24 bg-gradient-to-r from-transparent via-[#ffd36b]/85 to-transparent"
          />

          <p className="mt-4 text-base text-[#f5e7d0]/95 leading-relaxed [text-wrap:balance]">
            Enter the sanctuary for free 78-card AI tarot readings and Vedic numerology insights.
          </p>

          <div className="mt-7 flex flex-col w-full gap-3.5 px-2">
            <button
              type="button"
              onClick={scrollToSite}
              className="liquid-chrome-btn inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#24060e] cursor-pointer"
            >
              <span>Enter Sanctuary</span>
              <ArrowDown className="h-4 w-4" />
            </button>

            <Link
              to="/reading"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f5e7d0]/35 bg-[#2d0713]/85 px-6 py-3 text-base font-semibold text-[#faf2e4]"
            >
              <span>Begin Tarot Reading</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={wrapperRef}
      id="storm-intro"
      aria-label="AstroFree Cosmic Introduction"
      className={
        reducedMotion
          ? "relative w-full min-h-[82svh] bg-[#1a0418]"
          : "relative w-full h-[155svh] min-h-[780px] bg-[#1a0418]"
      }
    >
      <div
        className={
          reducedMotion
            ? "relative w-full min-h-[82svh] overflow-hidden"
            : "sticky top-0 w-full h-[100svh] overflow-hidden"
        }
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 48%, rgba(255,45,107,0.22) 0%, rgba(106,10,42,0.28) 32%, #1a0418 72%)",
          }}
        />

        {webglReady && (
          <Suspense fallback={null}>
            <StormCanvas
              wrapperRef={wrapperRef}
              contentRef={contentRef}
              ctaRowRef={ctaRowRef}
              scrollHintRef={scrollHintRef}
              onFallback={() => setWebglReady(false)}
            />
          </Suspense>
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 sm:h-44"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(26, 4, 24, 0.55) 55%, var(--background) 100%)",
          }}
        />

        <div
          ref={contentRef}
          className="pointer-events-none relative z-20 flex h-full w-full flex-col items-center justify-center px-4 pt-20 pb-20 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#ead9c3] drop-shadow-[0_2px_10px_rgba(12,2,8,0.9)]">
            Ancient Wisdom · Vedic Numerology · Compassionate AI
          </p>

          <p className="mt-4 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none drop-shadow-[0_6px_28px_rgba(15,2,10,0.85)]">
            <span className="chrome-text">Astro</span>
            <span className="ml-1 font-light tracking-wide text-[#faf2e4]">Free</span>
          </p>

          <div
            aria-hidden="true"
            className="mt-4 h-[1.5px] w-28 sm:w-36 bg-gradient-to-r from-transparent via-[#ffd36b]/85 to-transparent"
          />

          <p className="mt-4 max-w-md text-base text-[#f5e7d0]/95 leading-relaxed drop-shadow-[0_2px_14px_rgba(12,2,8,0.95)] [text-wrap:balance]">
            Enter the sanctuary for free 78-card AI tarot readings and Vedic numerology insights.
          </p>

          <div
            ref={ctaRowRef}
            className="pointer-events-auto mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <button
              type="button"
              onClick={scrollToSite}
              className="liquid-chrome-btn inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#24060e] cursor-pointer"
            >
              <span>Enter Sanctuary</span>
              <ArrowDown className="h-4 w-4" />
            </button>

            <Link
              to="/reading"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f5e7d0]/35 bg-[#2d0713]/85 px-6 py-3 text-sm sm:text-base font-semibold text-[#faf2e4] transition-colors hover:border-[#f5e7d0]/65 hover:bg-[#490d20]/90"
            >
              <span>Begin Tarot Reading</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div
          ref={scrollHintRef}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.24em] text-[#ffd36b]/75 transition-opacity duration-500"
        >
          scroll ↓
        </div>
      </div>
    </section>
  );
}
