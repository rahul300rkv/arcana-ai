import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { Input } from "@/components/ui/input";
import { TAROT_PAGES } from "@/data/tarot";
import { NUMEROLOGY_PAGES } from "@/data/numerology";
import { buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const TITLE = "Tarot Card Meanings — All 78 Cards Explained";
const DESCRIPTION =
  "Browse in-depth meanings for all 78 tarot cards: upright and reversed interpretations, love, career, money, health, yes/no answers and journal prompts.";

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
            Tarot Card Meanings
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {DESCRIPTION}
          </p>
        </motion.header>

        <div className="mt-8 flex flex-col gap-4">
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
        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
