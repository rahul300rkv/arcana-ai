import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks } from "@/locales";

const PAGE_TITLE = "Mulank & Bhagyank Calculator by Date of Birth (Free Moolank Checker)";
const PAGE_DESC =
  "Free Mulank & Bhagyank calculator by date of birth: check your Psychic (Birth) Number, Destiny (Life Path) Number, ruling planet, friendly numbers, and 1–31 lookup chart instantly.";
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
          "mulank calculator, bhagyank calculator, moolank checker, mulank and bhagyank calculator by date of birth, psychic number, destiny number, mulank kaise nikale, vedic numerology calculator, ank shastra",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [
      { rel: "canonical", href: PAGE_URL },
      ...getAllHreflangLinks("/numerology", SITE_URL),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Mulank & Bhagyank Calculator",
          url: PAGE_URL,
          datePublished: "2026-07-15",
          dateModified: "2026-11-18",
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
              name: "What is Mulank called in English?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "In English numerology, Mulank (Moolank) is called the Psychic Number, Birth Number, Driver Number, or Radical Number. It reflects your core temperament based solely on the calendar day of your birth.",
              },
            },
            {
              "@type": "Question",
              name: "How to calculate Mulank and Bhagyank?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "To calculate Mulank, sum only the digits of your birth day (1–31) until you get a single digit between 1 and 9 (for example, born on the 24th gives 2 + 4 = 6). To calculate Bhagyank (Destiny Number), add every digit of your complete date of birth (DD + MM + YYYY) and reduce to a single digit 1–9 or Master Number 11, 22, or 33.",
              },
            },
            {
              "@type": "Question",
              name: "Mulank kaise nikale?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Mulank nikalne ke liye sirf apni janam tarikh (birth date 1–31) ke anko ko tab tak jodein jab tak 1 se 9 ke beech ek single digit na aa jaye. Jaise agar janam 19 tarikh ko hua hai toh 1 + 9 = 10, phir 1 + 0 = 1: yani aapka Mulank 1 hai.",
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
                text: "Personal Year is computed by reducing the sum of your birth day, birth month, and target year to a single digit.",
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
