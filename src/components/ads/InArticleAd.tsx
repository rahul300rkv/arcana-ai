import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { loadAdsenseScript } from "@/lib/adsense";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const ADSENSE_CLIENT_ID =
  (import.meta.env.VITE_ADSENSE_CLIENT_ID as string | undefined) || undefined;

const DEFAULT_SLOT = "7537093674";

export function InArticleAd({
  slot = DEFAULT_SLOT,
  className = "",
}: {
  slot?: string;
  className?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (!ADSENSE_CLIENT_ID) return null;

  return (
    <AdSlot
      key={pathname}
      client={ADSENSE_CLIENT_ID}
      slot={slot}
      className={className}
    />
  );
}

function AdSlot({
  client,
  slot,
  className,
}: {
  client: string;
  slot: string;
  className: string;
}) {
  const pushedRef = useRef(false);

  useEffect(() => {
    if (pushedRef.current) return;
    void loadAdsenseScript();

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushedRef.current = true;
    } catch {
      // Ad blocker or delayed script fill — gracefully ignore.
    }
  }, []);

  return (
    <div
      className={`my-8 w-full min-h-[280px] rounded-xl overflow-hidden bg-[#1e070d] border border-[#f5e7d0]/15 flex items-center justify-center ${className}`}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={client}
        data-ad-slot={slot}
      />
    </div>
  );
}
