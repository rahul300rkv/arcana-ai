import { useState } from "react";
import { Check, Link2, Share2 } from "lucide-react";

/** Native share where available, clipboard copy everywhere else. */
export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // User dismissed the share sheet — fall through to copy.
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={share}
        aria-label={`Share ${title}`}
        className="inline-flex min-h-11 items-center gap-2 rounded-full glass px-4 text-xs hover:border-[color-mix(in_oklab,var(--gold)_40%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-[var(--gold)]" aria-hidden />
        ) : (
          <Share2 className="h-3.5 w-3.5" aria-hidden />
        )}
        {copied ? "Link copied" : "Share"}
      </button>
      <a
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} — ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share ${title} on WhatsApp`}
        className="inline-flex min-h-11 items-center gap-2 rounded-full glass px-4 text-xs hover:border-[color-mix(in_oklab,var(--gold)_40%,transparent)]"
      >
        <Link2 className="h-3.5 w-3.5" aria-hidden />
        WhatsApp
      </a>
    </div>
  );
}
