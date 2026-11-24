import { Link } from "@/components/LocalizedLink";
import { motion } from "framer-motion";
import { CalendarClock, Sparkles, Heart, Briefcase, Coins, Flame } from "@/components/icons";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { CardFront } from "@/components/tarot/CardFront";
import { DECK } from "@/lib/tarot/engine";
import type { TarotCard } from "@/lib/tarot/types";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { AuthorCard } from "@/components/AuthorCard";
import { InArticleAd } from "@/components/ads/InArticleAd";

const MEANINGS_FAQS = [
  {
    question: "How many tarot cards are there?",
    answer:
      "A standard tarot deck has 78 cards: 22 Major Arcana trump cards tracing major life chapters from The Fool to The World, and 56 Minor Arcana cards split evenly across four elemental suits of 14 cards each.",
  },
  {
    question: "What does a reversed tarot card mean?",
    answer:
      "A reversed card usually softens, delays, blocks, or turns inward the upright archetype, signaling where energy feels internalized, resisted, or overdue for balanced adjustment rather than automatic doom.",
  },
  {
    question: "Which tarot deck are these meanings based on?",
    answer:
      "All meanings follow the classic 1909 Rider-Waite-Smith pictorial system illustrated by Pamela Colman Smith under Arthur Edward Waite, chosen for its clear narrative scenes across every pip card.",
  },
  {
    question: "How do the four Minor Arcana suits map to daily life?",
    answer:
      "Wands (Fire) track creativity, ambition, and courage; Cups (Water) trace relationships, intuition, and emotional depth; Swords (Air) dissect intellect, conflict, and candid truth; and Pentacles (Earth) anchor finances, physical health, craftsmanship, and steady security.",
  },
  {
    question: "Should beginners memorize keywords or read the card artwork first?",
    answer:
      "Always observe posture, color, gaze direction, and weather inside the illustration before consulting memorized keywords. Connecting visual cues directly to your spread question produces far sharper, less mechanical readings.",
  },
];

const SUIT_INTRO: Record<string, string> = {
  wands: "Wands govern passion, ambition, creativity, and action as the fire suit of the tarot.",
  cups: "Cups govern emotion, relationships, intuition, and the heart as the water suit of the tarot.",
  swords: "Swords govern thought, conflict, truth, and communication as the air suit of the tarot.",
  pentacles:
    "Pentacles govern money, work, the body, and material security as the earth suit of the tarot.",
};

const SUIT_ORDER = ["wands", "cups", "swords", "pentacles"] as const;
const SUIT_LABEL: Record<string, string> = {
  wands: "Wands",
  cups: "Cups",
  swords: "Swords",
  pentacles: "Pentacles",
};
const SUIT_ELEMENT: Record<string, string> = {
  wands: "Fire",
  cups: "Water",
  swords: "Air",
  pentacles: "Earth",
};

function CardEntry({ card }: { card: TarotCard; index?: number }) {
  return (
    <div id={card.id} className="scroll-mt-28">
      <GlassCard className="group relative overflow-hidden">
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
                {card.arcana === "major"
                  ? `Major · ${romanize(card.number)}`
                  : `${SUIT_LABEL[card.suit!]} · ${card.number}`}
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
    </div>
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
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  if (n === 0) return "0";
  let out = "",
    x = n;
  for (const [v, s] of m)
    while (x >= v) {
      out += s;
      x -= v;
    }
  return out;
}

export function GuideTarotCardMeaningsScreen() {
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
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Free reference</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">
            Tarot card <span className="aurora-text">meanings</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            Every tarot card carries an upright expression and a reversed expression: the same
            living archetype moving smoothly outward or pausing inward for recalibration. Below is
            the entire 78-card Rider-Waite-Smith deck organized by Major Arcana and the four Minor
            Arcana suits, alongside love, career, money, and spiritual prompts. If you want these
            symbols synthesized around a specific question, launch AstroFree&apos;s{" "}
            <Link to="/reading" className="underline underline-offset-4 hover:text-foreground">
              free AI tarot reading
            </Link>{" "}
            anytime.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              Published <time dateTime="2026-08-07">7 August 2026</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              Last updated <time dateTime="2026-11-16">16 November 2026</time>
            </span>
          </div>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6 space-y-3">
            <h2 className="font-display text-xl text-foreground">
              How the 78-Card Deck Fits Together
            </h2>
            <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              Understanding deck architecture eliminates brute rote memorization. The 22{" "}
              <strong className="text-foreground">Major Arcana</strong> trump cards trace sweeping
              developmental chapters (courage, disillusionment, moral choice, loss, and renewal),
              marking turning points that outlast any single busy week. When several Major cards
              dominate one spread, pay close attention: you are standing at a pivotal crossroads
              rather than navigating ordinary administrative chores.
            </p>
            <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              By contrast, the 56 <strong className="text-foreground">Minor Arcana</strong> cards
              mirror daily texture across four classical elements: fiery Wands fuel creative
              initiative, watery Cups hold shifting relationships, airy Swords sharpen candid
              analysis, and earthy Pentacles ground real budgets, craft, and physical wellbeing.
            </p>
          </GlassCard>

          <GlassCard className="p-6 space-y-3">
            <h2 className="font-display text-xl text-foreground">
              Reading Numbers, Courts &amp; Reversals
            </h2>
            <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              Inside every Minor suit, pip cards numbered Ace through Ten tell a continuous ten-step
              story: Aces offer pure unshaped potential; Twos negotiate balance; Fives test
              resilience under sudden disruption; Sixes restore constructive reciprocity; Eights
              accelerate craft or speed; and Tens close cycles completely before renewal starts.
            </p>
            <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              Above the tens sit four <strong className="text-foreground">Court Cards</strong>.
              Pages embody curious learners or unexpected news, Knights rush outward with focused
              drive, Queens steward elemental wisdom intuitively from within, and Kings govern
              mature outward order. When any card lands{" "}
              <strong className="text-foreground">reversed</strong>, check whether the theme is
              delayed, internalized silently, blocked by hesitation, or tipped slightly past healthy
              moderation.
            </p>
          </GlassCard>
        </section>

        <nav className="mt-8 flex flex-wrap gap-2 text-sm">
          <a
            href="#major-arcana"
            className="inline-flex min-h-11 sm:min-h-0 items-center gap-1.5 rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-white/[0.03] px-4 py-2 sm:px-3.5 sm:py-1.5 transition hover:bg-white/[0.08] hover:shadow-glow-gold"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" aria-hidden />
            Major Arcana
          </a>
          {SUIT_ORDER.map((suit) => (
            <a
              key={suit}
              href={`#${suit}`}
              className="inline-flex min-h-11 sm:min-h-0 items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 sm:px-3.5 sm:py-1.5 transition hover:border-[color-mix(in_oklab,var(--gold)_30%,transparent)] hover:bg-white/[0.08]"
            >
              {SUIT_LABEL[suit]} ({SUIT_ELEMENT[suit]})
            </a>
          ))}
        </nav>

        <section id="major-arcana" className="mt-16 scroll-mt-24">
          <SectionHeader
            eyebrow="22 cards"
            title="Major Arcana"
            body="From The Fool (0) to The World (XXI), a symbolic journey through life's biggest lessons: new beginnings, hard choices, endings, and transformation. When one shows up, something significant is at play."
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
              eyebrow={`14 cards · ${SUIT_ELEMENT[suit]}`}
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

        <section className="mt-16 space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl">Frequently asked questions</h2>
          <FAQAccordion items={MEANINGS_FAQS} />
        </section>

        <div className="mt-12">
          <AuthorCard
            published="2026-08-07"
            lastUpdated="2026-11-16"
            category="Tarot Reference"
            readingTime="16 min read"
          />
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex min-h-12 sm:min-h-0 items-center text-base sm:text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
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

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--gold)_60%,transparent))]" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_80%,white)]">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">
        <span className="gold-text">{title}</span>
      </h2>
      <p className="mt-2 max-w-2xl text-base sm:text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
