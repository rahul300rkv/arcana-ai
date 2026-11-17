import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Briefcase, CalendarClock, Clover, Heart, Layers, Search, Sparkles } from "lucide-react";
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
import { cn } from "@/lib/utils";

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

export const TAROT_HUB_FAQS = [
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

const FILTERS = [
  { key: "all", label: "All 78" },
  { key: "major", label: "Major Arcana" },
  { key: "wands", label: "Wands" },
  { key: "cups", label: "Cups" },
  { key: "swords", label: "Swords" },
  { key: "pentacles", label: "Pentacles" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

export function TarotIndexScreen() {
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

        <header>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" aria-hidden />
            Rider–Waite–Smith library
          </span>
          <h1 className="mt-4 font-display text-3xl leading-tight aurora-text sm:text-5xl">
            Free AI Tarot Reading &amp; Tarot Card Meanings
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {DESCRIPTION}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              Published <time dateTime="2026-07-15">15 July 2026</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              Last updated <time dateTime="2026-11-16">16 November 2026</time>
            </span>
          </div>
          <div className="mt-6">
            <Link to="/reading">
              <GoldButton size="lg">
                <Sparkles className="h-4 w-4" /> Start free tarot reading
              </GoldButton>
            </Link>
          </div>
        </header>

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
                  "inline-flex min-h-12 sm:min-h-9 items-center rounded-full px-4 py-2 sm:py-1.5 text-sm sm:text-xs transition",
                  filter === f.key
                    ? "bg-[linear-gradient(135deg,var(--gold-soft),var(--gold)_55%,#cbb38b)] text-primary-foreground shadow-glow-gold"
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
                    alt={`${p.name} (${p.arcana === "major" ? "Major Arcana" : `${p.suit ? p.suit.charAt(0).toUpperCase() + p.suit.slice(1) : "Minor"} Suit`}) Rider–Waite–Smith tarot card illustration — ${p.cardKeywords.slice(0, 3).join(", ")}`}
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

        <section className="mt-20 rounded-3xl liquid-chrome-card p-8 sm:p-12 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Comprehensive Guide
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              The History, Symbolism, and Cultural Significance of Tarot
            </h2>
            <p className="mt-3 text-base sm:text-sm text-muted-foreground leading-relaxed">
              An exploration of how a 15th-century European parlor game evolved into a profound mirror for human consciousness and psychological self-reflection.
            </p>
          </div>

          <div className="space-y-6 text-base sm:text-[15px] text-muted-foreground leading-relaxed pt-4">
            <div>
              <h3 className="font-display text-xl text-foreground mb-2">1. The 600-Year Evolution of the Tarot Deck</h3>
              <p>
                Popular culture often associates tarot with ancient mystical origins in Egypt or esoteric cabalistic orders of antiquity. However, historical records trace the roots of tarot directly to 15th-century Northern Italy. Originally conceived as a luxurious card game known as <em className="text-foreground italic">Tarocchi</em>, played by wealthy aristocratic courts such as the Visconti-Sforza family in Milan, these decks featured standard suits alongside a special set of 21 allegorical trump cards and a single unnumbered card known as The Fool. It was not until the late 18th century in France—championed by occult scholars like Antoine Court de Gébelin and Jean-Baptiste Alliette (Etteilla)—that the cards were systematically reinterpreted as esoteric instruments for divination and spiritual insight.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-2">2. The Dual Structure: Major and Minor Arcana</h3>
              <p>
                A standard 78-card tarot deck is divided into two distinct structural domains: the Major Arcana and the Minor Arcana. The word "arcana" derives from the Latin <em className="text-foreground italic">arcanum</em>, meaning secret or mystery. The 22 cards of the Major Arcana (numbered 0 through 21) represent major archetypal life milestones, karmic lessons, and spiritual turning points. Known collectively as "The Fool's Journey," this sequence mirrors human maturation from innocence through worldly struggle, crisis, transformation, and ultimate enlightenment.
              </p>
              <p className="mt-3">
                In contrast, the 56 cards of the Minor Arcana govern the immediate fabric of everyday life. Divided into four suits—Wands (Fire / Ambition), Cups (Water / Emotion), Swords (Air / Intellect), and Pentacles (Earth / Material Security)—the Minor Arcana explore how universal archetypes manifest in practical decisions, relationships, professional challenges, and daily emotional rhythms.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-2">3. Symbolism, Psychology, and Synchronicity</h3>
              <p>
                The enduring power of tarot lies in its rich visual symbolism. Created in 1909 by occultist Arthur Edward Waite and artist Pamela Colman Smith, the Rider–Waite–Smith deck imbued every minor card with narrative illustrations that bypass rigid memorization and engage human intuition directly. In analytical psychology, Carl Jung noted that these symbolic images function as keys to the collective unconscious. When drawing cards in a spread, the apparent coincidence is understood through synchronicity—meaningful alignment where outer visual patterns mirror inner psychological states.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-2">4. Ethical Divination and Empowered Free Will</h3>
              <p>
                Ethical tarot practice rejects fatalism. The cards do not decree an immutable future; instead, they serve as a diagnostic mirror reflecting current energies, hidden blind spots, and probable outcomes based on present trajectories. By consulting tarot with an open, reflective mindset, seekers exercise free will, make conscious course corrections, and navigate life's transitions with grounded wisdom and self-compassion.
              </p>
            </div>
          </div>
        </section>

        <ContentSection id="faq" title="Frequently asked questions" className="mt-16">
          <FAQAccordion items={TAROT_HUB_FAQS} />
        </ContentSection>

        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
