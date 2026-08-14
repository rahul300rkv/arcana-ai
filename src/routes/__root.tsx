import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_URL, SITE_NAME } from "../lib/site";
import { initTheme } from "../lib/theme";

// Set these in your host's environment variables (e.g. Vercel → Settings →
// Environment Variables) to override. Falls back to the values below so
// Search Console verification works even before env vars are configured.
const ADSENSE_CLIENT_ID =
  (import.meta.env.VITE_ADSENSE_CLIENT_ID as string | undefined) || "ca-pub-3532554351654388";
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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
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
      { name: "theme-color", content: "#12122a" },
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
      { name: "twitter:card", content: "summary_large_image" },
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
          sameAs: [],
        },
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: SITE_NAME,
          alternateName: "AstroFree — Free AI Tarot Reading & Mulank Numerology Calculator",
          url: SITE_URL,
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Any",
          description:
            "India's first free AI tarot card reading app, with a free Mulank numerology calculator. Instant AI-guided tarot readings, Personal Year & Personal Month numerology forecasts, a daily card ritual, and a private journal.",
          featureList: [
            "AI-powered tarot card readings",
            "8 tarot spreads including the Celtic Cross",
            "Daily tarot card ritual",
            "Private tarot journal",
            "Mulank (root number) numerology calculator",
            "Personal Year & Personal Month numerology forecast",
            "Tarot-numerology card synergy insights",
            "Support for 13 Indian languages",
          ],
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "INR",
          },
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // Loaded non-blocking below via the media="print" swap trick — this
      // entry is kept only as the <noscript> fallback for the head builder.
    ],
    scripts: ADSENSE_CLIENT_ID
      ? [
          {
            src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`,
            async: true,
            crossOrigin: "anonymous",
          },
        ]
      : [],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Runs before first paint: applies saved theme, and sets the correct lang attribute. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k="astrofree.theme.v1";var t=localStorage.getItem(k)||"dark";var r=t==="system"?(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"):t;if(r==="light"){document.documentElement.classList.add("light");document.documentElement.style.colorScheme="light"}else{document.documentElement.style.colorScheme="dark"}var l=localStorage.getItem("astrofree.language.v1");var bcp47={en:"en",hi:"hi",hinglish:"hi-Latn",bn:"bn",te:"te",mr:"mr",ta:"ta",gu:"gu",kn:"kn",ml:"ml",pa:"pa",or:"or",as:"as"};if(l&&bcp47[l]){document.documentElement.lang=bcp47[l]}}catch(e){}})();`,
          }}
        />
        <HeadContent />
        {/*
          Google Fonts, loaded non-blocking: the stylesheet is fetched with
          media="print" (so it doesn't block rendering), then swapped to
          media="all" once loaded via a tiny inline script. The <noscript>
          tag is the fallback for when JS is disabled.
        */}
        <link
          id="gfonts-stylesheet"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.getElementById("gfonts-stylesheet");if(l)l.media="all";})();`,
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          />
        </noscript>
        {/* Google tag (gtag.js) — deferred so it never blocks first paint */}
        <script async defer src="https://www.googletagmanager.com/gtag/js?id=G-16H3MC6MNV" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-16H3MC6MNV');`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => {
    initTheme();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
