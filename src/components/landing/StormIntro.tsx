import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "@/components/icons";

const StormCanvas = lazy(() => import("./StormCanvas"));

function hasHardwareWebGL(): boolean {
  try {
    const probe = document.createElement("canvas");
    const gl =
      (probe.getContext("webgl2") as WebGL2RenderingContext | null) ||
      (probe.getContext("webgl") as WebGLRenderingContext | null);
    if (!gl) return false;
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param) ?? "");
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
  } catch {
    return false;
  }
}

export function StormIntro() {
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
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setWebglReady(false);
      return;
    }
    if (isMobile || !hasHardwareWebGL()) {
      setWebglReady(false);
      return;
    }

    let triggered = false;
    let timerId: number | undefined;
    const events: Array<keyof WindowEventMap> = ["pointermove", "wheel", "scroll", "keydown"];

    const activate = () => {
      if (triggered) return;
      triggered = true;
      cleanup();
      setWebglReady(true);
    };

    const cleanup = () => {
      for (const ev of events) {
        window.removeEventListener(ev, activate);
      }
      if (timerId !== undefined) {
        window.clearTimeout(timerId);
        timerId = undefined;
      }
    };

    for (const ev of events) {
      window.addEventListener(ev, activate, { once: true, passive: true });
    }
    timerId = window.setTimeout(activate, 1800);

    return cleanup;
  }, []);

  return (
    <section
      ref={wrapperRef}
      id="storm-intro"
      aria-label="AstroFree Cosmic Introduction"
      className={
        reducedMotion
          ? "relative w-full min-h-[58svh] md:min-h-[76svh] bg-[#1a0418] border-b border-white/10 md:border-b-0"
          : "relative w-full min-h-[58svh] md:h-[94svh] md:min-h-[620px] bg-[#1a0418] border-b border-white/10 md:border-b-0"
      }
    >
      <div
        className={
          reducedMotion
            ? "relative w-full min-h-[58svh] md:min-h-[76svh] overflow-hidden"
            : "relative w-full min-h-[58svh] md:sticky md:top-0 md:h-[94svh] overflow-hidden"
        }
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(255,45,107,0.26) 0%, rgba(106,10,42,0.32) 38%, #1a0418 78%)",
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
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-32 sm:h-44 md:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(26, 4, 24, 0.55) 55%, var(--background) 100%)",
          }}
        />

        <div
          ref={contentRef}
          className="pointer-events-none relative z-20 flex min-h-[68svh] md:h-full w-full flex-col items-center justify-center px-5 pt-24 pb-14 md:px-4 md:pt-20 md:pb-20 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] md:tracking-[0.26em] text-[#ead9c3]">
            Ancient Wisdom · Vedic Numerology · Compassionate AI
          </p>

          <h1 className="mt-4 flex flex-col items-center">
            <span className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none">
              <span className="chrome-text">Astro</span>
              <span className="ml-1 font-light tracking-wide text-[#faf2e4]">Free</span>
            </span>
            <span className="mt-3 max-w-xl font-display text-lg sm:text-2xl font-semibold tracking-wide text-[#faf2e4]/95">
              Free AI Tarot Readings &amp; Vedic Numerology
            </span>
          </h1>

          <div
            aria-hidden="true"
            className="mt-3 md:mt-4 h-[1.5px] w-24 md:w-36 bg-gradient-to-r from-transparent via-[#ffd36b]/85 to-transparent"
          />

          <p className="mt-4 max-w-md text-base text-[#f5e7d0]/95 leading-relaxed [text-wrap:balance]">
            Enter the sanctuary for free 78-card AI tarot readings and Vedic numerology insights.
          </p>

          <div
            ref={ctaRowRef}
            className="pointer-events-auto mt-7 flex w-full max-w-md md:max-w-none flex-col sm:flex-row items-center justify-center gap-3.5 px-2 md:px-0"
          >
            <button
              type="button"
              onClick={scrollToSite}
              className="liquid-chrome-btn inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#24060e] cursor-pointer"
            >
              <span>Enter Sanctuary</span>
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </button>

            <Link
              to="/reading"
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#f5e7d0]/35 bg-[#2d0713]/90 px-6 py-3 text-base font-semibold text-[#faf2e4] transition-colors hover:border-[#f5e7d0]/65 hover:bg-[#490d20]/90"
            >
              <span>Begin Tarot Reading</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <nav
            aria-label="Popular AstroFree tools"
            className="pointer-events-auto mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-medium text-[#ead9c3]/90"
          >
            <Link
              to="/numerology"
              className="inline-flex min-h-10 items-center whitespace-nowrap underline-offset-4 hover:text-[#fffaf0] hover:underline"
            >
              Mulank Calculator
            </Link>
            <span aria-hidden="true" className="text-[#f5e7d0]/30">·</span>
            <Link
              to="/tarot/celtic-cross"
              className="inline-flex min-h-10 items-center whitespace-nowrap underline-offset-4 hover:text-[#fffaf0] hover:underline"
            >
              Celtic Cross Tarot
            </Link>
            <span aria-hidden="true" className="text-[#f5e7d0]/30">·</span>
            <Link
              to="/major-arcana-tarot-cards-meanings"
              className="inline-flex min-h-10 items-center whitespace-nowrap underline-offset-4 hover:text-[#fffaf0] hover:underline"
            >
              Card of the Day / Major Arcana
            </Link>
            <span aria-hidden="true" className="text-[#f5e7d0]/30">·</span>
            <Link
              to="/yes-no-tarot"
              className="inline-flex min-h-10 items-center whitespace-nowrap underline-offset-4 hover:text-[#fffaf0] hover:underline"
            >
              Yes / No Tarot
            </Link>
          </nav>
        </div>

        <div
          ref={scrollHintRef}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 font-mono text-xs uppercase tracking-[0.24em] text-[#ffd36b]/75 transition-opacity duration-500 md:block"
        >
          scroll ↓
        </div>
      </div>
    </section>
  );
}
