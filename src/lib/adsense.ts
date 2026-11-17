const DEFAULT_ADSENSE_CLIENT_ID = "ca-pub-3532554351654388";

export const ADSENSE_CLIENT_ID =
  (import.meta.env.VITE_ADSENSE_CLIENT_ID as string | undefined) || DEFAULT_ADSENSE_CLIENT_ID;

let loadPromise: Promise<void> | null = null;
let scheduled = false;

/**
 * Lazily injects the Google AdSense script once without blocking initial page
 * parse, hydration, or mobile Main-Thread / TBT during initial load.
 */
export function loadAdsenseScript(): Promise<void> {
  if (typeof window === "undefined" || typeof document === "undefined" || !ADSENSE_CLIENT_ID) {
    return Promise.resolve();
  }
  if (loadPromise) return loadPromise;

  const existing = document.querySelector<HTMLScriptElement>(
    'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]',
  );
  if (existing) {
    loadPromise = Promise.resolve();
    return loadPromise;
  }

  loadPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });

  return loadPromise;
}

/**
 * Schedules AdSense to load cleanly on first user interaction or after initial
 * idle, preserving mobile FCP/LCP/TBT scores while serving ads to active readers.
 */
export function scheduleAdsenseLoad(): () => void {
  if (typeof window === "undefined" || scheduled || !ADSENSE_CLIENT_ID) {
    return () => {};
  }
  scheduled = true;

  let timerId: number | undefined;
  const trigger = () => {
    cleanup();
    void loadAdsenseScript();
  };

  const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "touchstart", "scroll"];
  const cleanup = () => {
    for (const ev of events) {
      window.removeEventListener(ev, trigger);
    }
    if (timerId !== undefined) {
      window.clearTimeout(timerId);
      timerId = undefined;
    }
  };

  for (const ev of events) {
    window.addEventListener(ev, trigger, { once: true, passive: true });
  }

  timerId = window.setTimeout(trigger, 3800);
  return cleanup;
}
