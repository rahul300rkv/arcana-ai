import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, Clover, Heart, Layers, Search, Sparkles } from "lucide-react";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { Input } from "@/components/ui/input";
import { TAROT_PAGES } from "@/data/tarot";
import { NUMEROLOGY_PAGES } from "@/data/numerology";
import { buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const TITLE = "Free AI Tarot Reading & Tarot Card Meanings — All 78 Cards";
const DESCRIPTION =
  "Start a free AI tarot reading, or browse in-depth meanings for all 78 tarot cards: upright and reversed interpretations, love, career, money, and yes/no answers.";

const READING_TYPES = [
  {
    to: "/tarot/one-card" as const,
    icon: Sparkles,
    label: "One Card",
    body: "A quick, focused message.",
  },
  {
    to: "/tarot/three-card" as const,
    icon: Layers,
    label: "Three Card",
    body: "Past, present, future.",
  },
  { to: "/tarot/love" as const, icon: Heart, label: "Love", body: "You, them, the bond ahead." },
  {
    to: "/tarot/yes-no" as const,
    icon: Clover,
    label: "Yes or No",
    body: "A direct, single-card lean.",
  },
  {
    to: "/tarot/career" as const,
    icon: Briefcase,
    label: "Career",
    body: "Where you stand, what's next.",
  },
  {
    to: "/tarot/celtic-cross" as const,
    icon: Layers,
    label: "Celtic Cross",
    body: "The full 10-card deep dive.",
  },
];

const TAROT_FAQS = [
  {
    question: "Is the AI tarot reading really free?",
    answer:
      "Yes — every reading, every spread, and the full 78-card meanings library are free, with no signup required.",
  },
  {
    question: "What's the difference between this page and the Tarot Card Meanings guide?",
    answer:
      "This page is the searchable, filterable directory of all 78 cards and the entry point for a reading. The Tarot Card Meanings guide is a faster quick-reference version for looking up a single card's meaning at a glance.",
  },
  {
    question: "Which tarot spread should I start with?",
    answer:
      "If you're new to tarot, start with a One Card or Three Card reading. Save the Celtic Cross for questions where you want real depth.",
  },
  {
    question: "Are tarot readings predictions?",
    answer:
      "No — AstroFree frames tarot as a reflective, symbolic tool for self-exploration, not a deterministic forecast or a substitute for professional advice.",
  },
];

export const Route = createFileRoute("/tarot/")({
  head: () => ({
    meta: buildContentMeta({
      path: "/tarot",
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "tarot card meanings",
        "all 78 tarot cards",
        "major arcana meanings",
        "minor arcana meanings",
        "reversed tarot meanings",
      ],
    }),
    links: [{ rel: "canonical", href: `${SITE_URL}/tarot` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: TITLE,
          description: DESCRIPTION,
          url: `${SITE_URL}/tarot`,
          hasPart: TAROT_PAGES.map((p) => ({
            "@type": "Article",
            headline: p.name,
            url: `${SITE_URL}/tarot/${p.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: TAROT_FAQS.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: TarotIndexPage,
});

const FILTERS = [
  { key: "all", label: "All 78" },
  { key: "major", label: "Major Arcana" },
  { key: "wands", label: "Wands" },
  { key: "cups", label: "Cups" },
  { key: "swords", label: "Swords" },
  { key: "pentacles", label: "Pentacles" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

function TarotIndexPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterKey>("all");

  const cards = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TAROT_PAGES.filter((p) => {
      if (filter === "major" && p.arcana !== "major") return false;
      if (filter !== "all" && filter !== "major" && p.suit !== filter) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.cardKeywords.some((k) => k.toLowerCase().includes(q)) ||
        p.archetype.toLowerCase().includes(q)
      );
    });
  }, [query, filter]);

  return (
    <div className="relative min-h-dvh">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-28 sm:px-6">
        <Breadcrumb items={[{ label: "Tarot Card Meanings" }]} />

        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" aria-hidden />
            Rider–Waite–Smith library
          </span>
          <h1 className="mt-4 font-display text-3xl leading-tight aurora-text sm:text-5xl">
            Free AI Tarot Reading &amp; Tarot Card Meanings
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {DESCRIPTION}
          </p>
          <div className="mt-6">
            <Link to="/reading">
              <GoldButton size="lg">
                <Sparkles className="h-4 w-4" /> Start free tarot reading
              </GoldButton>
            </Link>
          </div>
        </motion.header>

        <section aria-labelledby="reading-types-heading" className="mt-12">
          <h2
            id="reading-types-heading"
            className="font-display text-xl text-foreground sm:text-2xl"
          >
            Choose a reading
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {READING_TYPES.map((r) => (
              <li key={r.to}>
                <Link to={r.to} className="group block h-full">
                  <GlassCard className="h-full p-3.5 transition-transform duration-300 group-hover:-translate-y-1">
                    <r.icon className="h-4 w-4 text-[var(--gold)]" strokeWidth={1.5} aria-hidden />
                    <span className="mt-2 block font-display text-sm">{r.label}</span>
                    <span className="mt-1 block text-[11px] leading-snug text-muted-foreground">
                      {r.body}
                    </span>
                  </GlassCard>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Want the details on every layout?{" "}
            <Link
              to="/guide/tarot-spreads"
              className="underline underline-offset-4 hover:text-foreground"
            >
              See all tarot spreads explained
            </Link>
            .
          </p>
        </section>

        <div className="mt-12 flex flex-col gap-4">
          <h2 className="font-display text-xl text-foreground sm:text-2xl">
            Browse all 78 card meanings
          </h2>
          <div className="relative max-w-md">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a card, keyword or archetype…"
              aria-label="Search tarot cards"
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs transition",
                  filter === f.key
                    ? "bg-[linear-gradient(135deg,var(--gold-soft),var(--gold)_55%,#b8862c)] text-primary-foreground shadow-glow-gold"
                    : "glass text-muted-foreground hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Showing {cards.length} of {TAROT_PAGES.length} cards
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {cards.map((p) => (
            <li key={p.slug}>
              <Link to="/tarot/$slug" params={{ slug: p.slug }} className="block h-full">
                <GlassCard className="h-full p-3">
                  <img
                    src={p.image}
                    alt={`${p.name} tarot card`}
                    loading="lazy"
                    decoding="async"
                    width={200}
                    height={300}
                    className="aspect-[2/3] w-full rounded-lg object-cover"
                  />
                  <h2 className="mt-3 font-display text-sm sm:text-base">{p.name}</h2>
                  <p className="mt-1 line-clamp-2 text-[11px] text-muted-foreground">
                    {p.cardKeywords.join(", ")}
                  </p>
                </GlassCard>
              </Link>
            </li>
          ))}
        </ul>

        {cards.length === 0 && (
          <p className="mt-10 text-sm text-muted-foreground">
            No cards match that search. Try a keyword like “love”, “change” or “Cups”.
          </p>
        )}

        <section aria-labelledby="numbers-heading" className="mt-16">
          <h2 id="numbers-heading" className="font-display text-2xl aurora-text sm:text-3xl">
            Numerology life path numbers
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {NUMEROLOGY_PAGES.map((n) => (
              <li key={n.slug}>
                <Link to="/numerology/$slug" params={{ slug: n.slug }}>
                  <GlassCard className="p-4">
                    <span className="block font-display text-lg text-[var(--gold)]">{n.label}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{n.archetype}</span>
                  </GlassCard>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <ContentSection id="faq" title="Frequently asked questions" className="mt-16">
          <FAQAccordion items={TAROT_FAQS} />
        </ContentSection>

        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
