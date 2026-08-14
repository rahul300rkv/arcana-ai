import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

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
    // Prevent double pushing in React strict mode
    if (pushedRef.current) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushedRef.current = true;
    } catch (err) {
      console.error("AdSense push error:", err);
    }
  }, []);

  return (
    <div
      className={`my-8 w-full min-h-[280px] rounded-xl overflow-hidden bg-[#0a0d14] border border-slate-800/50 flex items-center justify-center ${className}`}
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
