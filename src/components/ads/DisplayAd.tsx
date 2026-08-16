import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

// Same env var the AdSense loader script in __root.tsx keys off. Set
// VITE_ADSENSE_CLIENT_ID in your host's env vars to turn ads on everywhere.
const ADSENSE_CLIENT_ID =
  (import.meta.env.VITE_ADSENSE_CLIENT_ID as string | undefined) || "ca-pub-3532554351654388";

// "Astrodisp" — standard responsive display unit, created separately from
// the in-article slot in the AdSense dashboard.
const DEFAULT_SLOT = "3944159567";

/**
 * Google AdSense responsive display ad unit ("Astrodisp").
 *
 * Unlike InArticleAd (data-ad-format="fluid", meant to sit inline within
 * flowing text), this uses data-ad-format="auto" with
 * data-full-width-responsive, meant for standalone slots like below a
 * calculator's result or just above the footer — places with no
 * surrounding paragraph flow for the ad to blend into.
 *
 * This is an SPA — TanStack Router swaps route components without a full
 * page reload, so a single <ins> node can survive a navigation and never
 * get re-filled. Keying the inner slot on the current pathname forces React
 * to mount a fresh <ins> (and re-run the adsbygoogle push) on every page.
 *
 * Renders nothing if VITE_ADSENSE_CLIENT_ID isn't set, so dev/staging
 * builds stay ad-free automatically.
 */
export function DisplayAd({
  slot = DEFAULT_SLOT,
  className = "",
}: {
  slot?: string;
  className?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (!ADSENSE_CLIENT_ID) return null;

  return <AdSlot key={pathname} client={ADSENSE_CLIENT_ID} slot={slot} className={className} />;
}

function AdSlot({ client, slot, className }: { client: string; slot: string; className: string }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // adsbygoogle script hasn't loaded yet (slow network, ad-blocker, etc).
      // Nothing to recover — just skip this fill.
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle my-8 block ${className}`}
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
