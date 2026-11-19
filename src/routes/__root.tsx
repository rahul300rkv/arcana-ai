import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_URL, SITE_NAME } from "../lib/site";
import { initTheme } from "../lib/theme";
import { ADSENSE_CLIENT_ID, scheduleAdsenseLoad } from "../lib/adsense";

const GOOGLE_SITE_VERIFICATION =
  (import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined) ||
  "RBbljzCIw3mPRaMp6kDl03gswB9HqiyYYwUSdhC8cEA";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-4">
      <div className="glass max-w-md rounded-3xl p-10 text-center">
        <h1 className="font-display text-7xl aurora-text">404</h1>
        <h2 className="mt-4 font-display text-2xl">This path is uncharted</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The card you drew doesn't exist here. Return to the constellation.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full glass px-5 py-2.5 text-sm hover:border-[color-mix(in_oklab,var(--gold)_40%,transparent)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center px-4">
      <div className="glass max-w-md rounded-3xl p-10 text-center">
        <h1 className="font-display text-2xl">A wisp of static in the ether</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something interrupted the reading. Try again, or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-[linear-gradient(135deg,var(--gold-soft),var(--gold))] px-5 py-2.5 text-sm text-primary-foreground shadow-glow-gold"
          >
            Try again
          </button>
          <a href="/" className="rounded-full glass px-5 py-2.5 text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AstroFree — Free AI Tarot & Mulank Numerology" },
      {
        name: "description",
        content:
          "AstroFree is India's first free AI tarot card reading app, now with a free Mulank numerology calculator. Get instant AI-guided tarot readings, your Personal Year & Personal Month forecast, a daily card ritual, and a private journal — always free.",
      },
      { name: "theme-color", content: "#19060b" },
      { property: "og:site_name", content: SITE_NAME },
      {
        property: "og:title",
        content: "AstroFree — Free AI Tarot Reading & Mulank Numerology Calculator",
      },
      {
        property: "og:description",
        content:
          "India's first free AI tarot card reading app, plus a free Mulank numerology calculator for your Personal Year & Month. Always free.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/logo.webp` },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "AstroFree — Free AI Tarot Reading & Mulank Numerology Calculator",
      },
      {
        name: "twitter:description",
        content:
          "India's first free AI tarot card reading app, plus a free Mulank numerology calculator for your Personal Year & Month. Always free.",
      },
      { name: "twitter:image", content: `${SITE_URL}/logo.webp` },
      ...(GOOGLE_SITE_VERIFICATION
        ? [{ name: "google-site-verification", content: GOOGLE_SITE_VERIFICATION }]
        : []),
      ...(ADSENSE_CLIENT_ID
        ? [{ name: "google-adsense-account", content: ADSENSE_CLIENT_ID }]
        : []),
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: SITE_NAME,
          alternateName: "AstroFree",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.webp`,
            width: 192,
            height: 192,
          },
          description:
            "AstroFree is India's first free AI tarot card reading app, with free Mulank, Bhagyank and Namank numerology calculators.",
          slogan: "Ancient Wisdom. Modern Intelligence.",
          foundingLocation: {
            "@type": "Place",
            name: "India",
          },
          sameAs: ["https://github.com/rahul300rkv/arcana-ai"],
        },
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function RootComponent() {
  useEffect(() => {
    initTheme();
    return scheduleAdsenseLoad();
  }, []);
  return <Outlet />;
}
