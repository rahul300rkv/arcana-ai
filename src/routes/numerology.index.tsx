import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";

const PAGE_TITLE = "Numerology Calculator — Free Mulank, Personal Year & Month";
const PAGE_DESC =
  "Free numerology calculator: enter your date of birth to get your Mulank (birth number), Personal Year and Personal Month, each mapped to its tarot archetype with practical guidance.";
const PAGE_URL = `${SITE_URL}/numerology`;

export const Route = createFileRoute("/numerology/")({
  validateSearch: (search: Record<string, unknown>) => {
    const dob =
      typeof search.dob === "string" && /^\d{4}-\d{2}-\d{2}$/.test(search.dob)
        ? search.dob
        : undefined;
    const raw = search.period;
    const asText = typeof raw === "number" ? String(raw) : raw;
    const period =
      typeof asText === "string" && /^\d{4}(-\d{2})?$/.test(asText)
        ? (raw as string | number)
        : undefined;
    return { dob, period } as { dob?: string; period?: string | number };
  },
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "numerology calculator, free numerology calculator, indian numerology calculator, numerology calculator by date of birth, mulank calculator, birth number calculator, personal year number, personal month number, moolank",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Numerology Calculator",
          url: PAGE_URL,
          datePublished: "2026-07-15",
          dateModified: "2026-11-16",
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Any",
          description: PAGE_DESC,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Mulank?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Mulank is the birth number that comes from reducing the day of birth to a single digit, such as 24-08-1999 becoming 2 + 4 = 6.",
              },
            },
            {
              "@type": "Question",
              name: "Is Mulank different from zodiac?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Zodiac is based on sun sign and date range; Mulank is a numerology root number derived from the day of birth.",
              },
            },
            {
              "@type": "Question",
              name: "Can two people have the same Mulank?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Many people share the same day-of-birth reduction, but their full numerology chart and life experiences remain different.",
              },
            },
            {
              "@type": "Question",
              name: "Which Mulank is lucky?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No single Mulank is universally lucky. Each number carries different strengths, struggles, and timing patterns, so the value depends on context.",
              },
            },
            {
              "@type": "Question",
              name: "How is Personal Year calculated?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Personal Year is calculated by adding your birth day and birth month to the target year and reducing the total to a single digit.",
              },
            },
            {
              "@type": "Question",
              name: "Does name affect numerology?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Name numerology is a separate calculation called Namank, which uses letters and a different system than Mulank.",
              },
            },
            {
              "@type": "Question",
              name: "Is numerology scientific?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Numerology is a symbolic tradition and reflective framework rather than a scientifically validated predictive system.",
              },
            },
            {
              "@type": "Question",
              name: "Is AstroFree free?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. AstroFree offers free educational numerology tools, tarot content, and calculators without a paywall.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: lazyRouteComponent(
    () => import("@/screens/NumerologyIndexScreen"),
    "NumerologyIndexScreen",
  ),
});
