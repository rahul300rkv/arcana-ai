import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Heart, Briefcase, Coins, Flame } from "lucide-react";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { CardFront } from "@/components/tarot/CardFront";
import { DECK } from "@/lib/tarot/engine";
import type { TarotCard } from "@/lib/tarot/types";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";

export const Route = createFileRoute("/guide/tarot-card-meanings")({
  head: () => ({
    meta: [
      { title: "Tarot Card Meanings — All 78 Cards, Upright & Reversed | AstroFree" },
      {
        name: "description",
        content:
          "A complete free tarot card meanings guide: upright and reversed meanings for all 22 Major Arcana and 56 Minor Arcana cards, plus what each card means for love, career, money, and spirituality.",
      },
      {
        name: "keywords",
        content:
          "tarot card meanings, major arcana meanings, minor arcana meanings, tarot cards upright reversed, tarot card guide, wands cups swords pentacles meanings",
      },
      { property: "og:title", content: "Tarot Card Meanings — All 78 Cards, Upright & Reversed" },
      { property: "og:url", content: `${SITE_URL}/guide/tarot-card-meanings` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/guide/tarot-card-meanings` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildPageJsonLd({
          "path": "/guide/tarot-card-meanings",
          "title": "Tarot Card Meanings — All 78 Cards, Upright & Reversed",
          "description": "Free tarot card meanings for all 78 Rider-Waite-Smith cards, with upright and reversed interpretations.",
          "crumbs": [
                    {
                              "name": "Guides",
                              "path": "/guide"
                    },
                    {
                              "name": "Tarot Card Meanings",
                              "path": "/guide/tarot-card-meanings"
                    }
          ],
          "faqs": [
                    {
                              "question": "How many tarot cards are there?",
                              "answer": "A standard tarot deck has 78 cards: 22 Major Arcana and 56 Minor Arcana split across Wands, Cups, Swords, and Pentacles."
                    },
                    {
                              "question": "What does a reversed tarot card mean?",
                              "answer": "A reversed card usually softens, blocks, or turns inward the upright meaning — it is a shift in expression rather than a simple opposite."
                    },
                    {
                              "question": "Which tarot deck are these meanings based on?",
                              "answer": "All meanings follow the Rider-Waite-Smith (1909) tradition, which is in the public domain and the most widely used tarot system."
                    }
          ],
          "article": {
                    "updated": "2026-08-07",
                    "section": "Tarot"
          }
        })),
      },
    ],
  }),
  component: TarotCardMeaningsPage,
});

const SUIT_INTRO: Record<string, string> = {
  wands: "Wands govern passion, ambition, creativity, and action — the fire suit of the tarot.",
  cups: "Cups govern emotion, relationships, intuition, and the heart — the water suit of the tarot.",
  swords: "Swords govern thought, conflict, truth, and communication — the air suit of the tarot.",
  pentacles:
    "Pentacles govern money, work, the body, and material security — the earth suit of the tarot.",
};

const SUIT_ORDER = ["wands", "cups", "swords", "pentacles"] as const;
const SUIT_LABEL: Record<string, string> = {
  wands: "Wands",
  cups: "Cups",
  swords: "Swords",
  pentacles: "Pentacles",
};
const SUIT_GLYPH: Record<string, string> = {
  wands: "🜂",
  cups: "🜄",
  swords: "🜁",
  pentacles: "🜃",
};

function CardEntry({ card, index }: { card: TarotCard; index: number }) {
  return (
    <motion.div
      id={card.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.25), ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-28"
    >
      <GlassCard className="group relative overflow-hidden">
        {/* ambient gold glow on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px 200px at var(--x,50%) 0%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 60%)",
          }}
        />
        <div className="relative grid gap-6 sm:grid-cols-[160px_1fr] sm:gap-7">
          <motion.div
            whileHover={{ y: -6, rotate: -1.5 }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
            className="mx-auto w-32 sm:mx-0 sm:w-40"
          >
            <div className="aspect-[2/3] w-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]">
              <CardFront card={card} />
            </div>
          </motion.div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl sm:text-2xl">
                <span className="aurora-text">{card.name}</span>
              </h3>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {card.arcana === "major" ? `Major · ${romanize(card.number)}` : `${SUIT_LABEL[card.suit!]} · ${card.number}`}
              </span>
            </div>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {card.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-foreground/80"
                >
                  {k}
                </span>
              ))}
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[color-mix(in_oklab,var(--gold)_80%,white)]">
                  <Sparkles className="h-3 w-3" /> Upright
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {card.uprightMeaning}.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[color-mix(in_oklab,var(--aurora-2)_75%,white)]">
                  <Sparkles className="h-3 w-3 rotate-180" /> Reversed
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {card.reversedMeaning}.
                </p>
              </div>
            </div>

            <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              <MetaRow icon={Heart} label="Love" value={card.loveMeaning} />
              <MetaRow icon={Briefcase} label="Career" value={card.careerMeaning} />
              <MetaRow icon={Coins} label="Finances" value={card.financeMeaning} />
              <MetaRow icon={Flame} label="Spirituality" value={card.spiritualityMeaning} />
            </dl>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function MetaRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-2">
      <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color-mix(in_oklab,var(--gold)_75%,white)]" />
      <div className="min-w-0">
        <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</dt>
        <dd className="text-muted-foreground">{value}</dd>
      </div>
    </div>
  );
}

function romanize(n: number): string {
  const m: [number, string][] = [
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  if (n === 0) return "0";
  let out = "", x = n;
  for (const [v, s] of m) while (x >= v) { out += s; x -= v; }
  return out;
}

function TarotCardMeaningsPage() {
  const major = DECK.filter((c) => c.arcana === "major").sort((a, b) => a.number - b.number);
  const bySuit = Object.fromEntries(
    SUIT_ORDER.map((suit) => [
      suit,
      DECK.filter((c) => c.suit === suit).sort((a, b) => a.number - b.number),
    ]),
  );

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-5xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: "Guides", to: "/guide" }, { label: "Tarot Card Meanings" }]} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Free guide</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">
            Tarot card <span className="aurora-text">meanings</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every tarot card carries an upright meaning and a reversed meaning — the same archetype
            expressed in flow or in friction. Below is the full 78-card deck, illustrated: the 22
            Major Arcana cards that mark life's turning points, and the 56 Minor Arcana across four
            suits that speak to day-to-day texture. If you'd rather have these interpreted for your
            own question, AstroFree's{" "}
            <Link to="/reading" className="underline underline-offset-4 hover:text-foreground">
              free AI tarot reading
            </Link>{" "}
            draws and reads them for you.
          </p>
        </motion.div>

        {/* jump nav */}
        <nav className="mt-8 flex flex-wrap gap-2 text-sm">
          <a
            href="#major-arcana"
            className="rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-white/[0.03] px-3.5 py-1.5 transition hover:bg-white/[0.08] hover:shadow-glow-gold"
          >
            ✦ Major Arcana
          </a>
          {SUIT_ORDER.map((suit) => (
            <a
              key={suit}
              href={`#${suit}`}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 transition hover:border-[color-mix(in_oklab,var(--gold)_30%,transparent)] hover:bg-white/[0.08]"
            >
              <span className="mr-1 text-[color-mix(in_oklab,var(--gold)_85%,white)]">
                {SUIT_GLYPH[suit]}
              </span>
              {SUIT_LABEL[suit]}
            </a>
          ))}
        </nav>

        <section id="major-arcana" className="mt-16 scroll-mt-24">
          <SectionHeader
            eyebrow="22 cards"
            title="Major Arcana"
            body="From The Fool (0) to The World (XXI), a symbolic journey through life's biggest lessons — new beginnings, hard choices, endings, transformation. When one shows up, something significant is at play."
          />
          <div className="mt-8 grid gap-5">
            {major.map((card, i) => (
              <CardEntry key={card.id} card={card} index={i} />
            ))}
          </div>
        </section>

        {SUIT_ORDER.map((suit) => (
          <section key={suit} id={suit} className="mt-16 scroll-mt-24">
            <SectionHeader
              eyebrow={`14 cards · ${SUIT_GLYPH[suit]}`}
              title={SUIT_LABEL[suit]}
              body={SUIT_INTRO[suit]}
            />
            <div className="mt-8 grid gap-5">
              {bySuit[suit].map((card, i) => (
                <CardEntry key={card.id} card={card} index={i} />
              ))}
            </div>
          </section>
        ))}

        <div className="mt-16">
          <Link
            to="/"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            ← Back home
          </Link>
        </div>
        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--gold)_60%,transparent))]" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_80%,white)]">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">
        <span className="gold-text">{title}</span>
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{body}</p>
    </motion.div>
  );
}
