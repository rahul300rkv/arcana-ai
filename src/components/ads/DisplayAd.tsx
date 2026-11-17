import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ADSENSE_CLIENT_ID, loadAdsenseScript } from "@/lib/adsense";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const DEFAULT_SLOT = "3944159567";

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
    void loadAdsenseScript();
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blocker or delayed script fill — gracefully ignore.
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
