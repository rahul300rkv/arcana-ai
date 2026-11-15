/**
 * MonetagBanner — safe Monetag ad formats that do NOT intercept page clicks.
 *
 * Use one of:
 *   <MonetagBanner type="inpage" zoneId="YOUR_ZONE_ID" />   ← notification-style, sticks to bottom
 *   <MonetagBanner type="banner" zoneId="YOUR_ZONE_ID" />   ← standard inline banner
 *
 * NEVER use the "onclick" or "popunder" zone types — those attach a
 * document.onclick listener that breaks every button/link on the page.
 *
 * How to get your zone IDs:
 *   1. Log in to monetag.com → Publisher → Ad Zones
 *   2. Create Zone → choose "In-Page Push" or "Banner"
 *   3. Copy the zone ID (numeric) and paste below or pass as prop
 */

import { useEffect, useRef } from "react";

interface MonetagBannerProps {
  /** Monetag zone ID (numeric string from your dashboard) */
  zoneId: string;
  /**
   * "inpage" = In-Page Push (small notification card, anchored bottom-right).
   *            The tag.min.js script in <head> handles rendering automatically
   *            once data-type="inpage" is set — no extra component needed.
   *            Use this component only for "banner" zones.
   * "banner"  = Standard display banner, rendered inside this element.
   */
  type?: "banner";
  className?: string;
}

declare global {
  interface Window {
    // Monetag pushes ads via this global when the banner script fires
    _mNHandle?: { queue: unknown[] };
  }
}

export function MonetagBanner({ zoneId, className = "" }: MonetagBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current || !containerRef.current) return;
    scriptLoadedRef.current = true;

    // Monetag banner zones load via a per-zone script tag inserted into
    // the container element. This keeps the ad fully isolated inside the div
    // and does NOT attach any document-level click listeners.
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = `https://quge5.com/88/tag.min.js?zone=${zoneId}&type=banner`;

    containerRef.current.appendChild(script);

    return () => {
      // Clean up on unmount (route change)
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, [zoneId]);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden rounded-xl ${className}`}
      aria-label="Advertisement"
      style={{ minHeight: 60 }}
    />
  );
}
