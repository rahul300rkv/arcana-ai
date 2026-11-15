import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BookOpen,
  LayoutGrid,
  Hash,
  ArrowRight,
  Sparkles,
  GraduationCap,
  RotateCcw,
  Star,
  Cross,
  Scale,
} from "lucide-react";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { buildPageJsonLd } from "@/lib/content-seo";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";

export const Route = createFileRoute("/guide/")({
  head: () => ({
    meta: [
      { title: "Tarot & Numerology Guides — AstroFree" },
      {
        name: "description",
        content:
          "Free tarot and numerology guides covering 78 card meanings, tarot spreads, Mulank calculation, and Personal Year explanations.",
      },
      { property: "og:title", content: "Tarot & Numerology Guides — AstroFree" },
      {
        property: "og:description",
        content:
          "Learn tarot spreads, card meanings, and Mulank numerology with clear educational guides from AstroFree.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/guide` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/guide` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: "/guide",
            title: "Tarot & Numerology Guides — AstroFree",
            description:
              "Free tarot and numerology guides — 78 card meanings, spreads, and Mulank calculations.",
            crumbs: [
              {
                name: "Guides",
                path: "/guide",
              },
            ],
          }),
        ),
      },
    ],
  }),
  component: GuideIndexPage,
});

const guides = [
  {
    to: "/guide/tarot-card-meanings",
    icon: BookOpen,
    title: "Tarot Card Meanings",
    body: "Upright and reversed meanings for all 78 cards — the 22 Major Arcana and all four Minor Arcana suits — plus what each card suggests for love, career, finances, and spiritual growth.",
    readingMinutes: 12,
    anchor: "tarot-card-meanings",
  },
  {
    to: "/guide/tarot-spreads",
    icon: LayoutGrid,
    title: "Tarot Spreads Explained",
    body: "How each spread works and what its positions mean — from a quick Single Card pull to the ten-position Celtic Cross and the twelve-card Year Ahead spread.",
    readingMinutes: 10,
    anchor: "tarot-spreads",
  },
  {
    to: "/guide/numerology",
    icon: Hash,
    title: "Mulank Numerology Guide",
    body: "How your Mulank (root number), Personal Year, and Personal Month are calculated from your birth date, what each of the nine numbers means, and how they map to tarot archetypes.",
    readingMinutes: 9,
    anchor: "numerology-guide",
  },
  {
    to: "/guide/tarot-for-beginners",
    icon: GraduationCap,
    title: "Tarot for Beginners",
    body: "The complete starting guide — deck structure, how to shuffle and draw, your first spreads, and a repeatable method for interpreting any card.",
    readingMinutes: 14,
    anchor: "tarot-for-beginners",
  },
  {
    to: "/guide/reversed-tarot-cards",
    icon: RotateCcw,
    title: "Reversed Tarot Cards",
    body: "What a reversed card actually changes, the four common interpretations, and worked examples across Major and Minor Arcana.",
    readingMinutes: 9,
    anchor: "reversed-tarot-cards",
  },
  {
    to: "/guide/major-arcana-meanings",
    icon: Star,
    title: "22 Major Arcana Explained",
    body: "Every Major Arcana card from The Fool to The World, with its core meaning and a real-life example of how it tends to show up in a reading.",
    readingMinutes: 16,
    anchor: "major-arcana-meanings",
  },
  {
    to: "/guide/celtic-cross-guide",
    icon: Cross,
    title: "Celtic Cross Spread Guide",
    body: "A step-by-step walkthrough of all ten Celtic Cross positions, how to lay them, and how to read them as one coherent answer.",
    readingMinutes: 11,
    anchor: "celtic-cross-guide",
  },
  {
    to: "/guide/mulank-vs-bhagyank",
    icon: Scale,
    title: "Mulank vs Bhagyank",
    body: "The difference between your birth number and destiny number in Indian numerology, how each is calculated, and how to read them together.",
    readingMinutes: 11,
    anchor: "mulank-vs-bhagyank",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function GuideIndexPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-5xl px-4 pb-24 pt-36 sm:pt-40">
        <Breadcrumb items={[{ label: "Guides" }]} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-white/[0.03] px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[color-mix(in_oklab,var(--gold)_90%,white)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_90%,white)]">
              Free guides
            </span>
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-6xl">
            Learn tarot <span className="aurora-text">& numerology</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            These reference guides go deeper than any single reading — a plain-language explanation
            of what every tarot card means, how each spread is laid out, and the exact math behind
            Mulank numerology. Everything here is free to read, no signup required.
          </p>
        </motion.div>

        <nav
          aria-label="Guide sections"
          className="mt-10 rounded-2xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-white/[0.02] p-4 sm:p-5"
        >
          <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="mr-2 text-[color:var(--gold)]">Jump to</span>
            {guides.map((g) => (
              <a
                key={g.anchor}
                href={`#${g.anchor}`}
                className="rounded-full border border-white/10 px-3 py-1.5 transition-colors hover:border-[color-mix(in_oklab,var(--gold)_35%,transparent)] hover:text-[color:var(--gold)]"
              >
                {g.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <motion.div
              key={g.to}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              id={g.anchor}
            >
              <Link to={g.to} className="group block h-full">
                <GlassCard className="relative h-full overflow-hidden p-6 sm:p-7">
                  <div
                    aria-hidden
                    className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                    style={{ background: "color-mix(in oklab, var(--gold) 40%, transparent)" }}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-xl border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-white/[0.03]">
                        <g.icon
                          className="h-5 w-5 text-[color-mix(in_oklab,var(--gold)_85%,white)]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.03] opacity-60 transition-all duration-300 group-hover:border-[color-mix(in_oklab,var(--gold)_40%,transparent)] group-hover:bg-[color-mix(in_oklab,var(--gold)_8%,transparent)] group-hover:opacity-100">
                        <ArrowRight className="h-3.5 w-3.5 text-[color-mix(in_oklab,var(--gold)_90%,white)] transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      <span>Reading time</span>
                      <span className="text-[color:var(--gold)]">{g.readingMinutes} min</span>
                    </div>
                    <h2 className="mt-3 font-display text-xl sm:text-2xl text-foreground transition-colors duration-300 group-hover:text-[color-mix(in_oklab,var(--gold)_90%,white)]">
                      {g.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[color-mix(in_oklab,var(--gold)_80%,white)] opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                      <span>Read guide</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Related articles
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/numerology"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  Mulank calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/tarot/$slug"
                  params={{ slug: "the-fool" }}
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  The Fool card meaning
                </Link>
              </li>
              <li>
                <Link
                  to="/bhagyank-calculator"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  Bhagyank calculator
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Previous / Next
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Link
                to="/"
                className="rounded-full border border-white/10 px-3 py-1.5 text-muted-foreground hover:text-foreground"
              >
                Previous: Home
              </Link>
              <Link
                to="/numerology"
                className="rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] px-3 py-1.5 text-[color:var(--gold)]"
              >
                Next: Numerology
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline underline-offset-4 transition-colors duration-200 hover:text-foreground"
          >
            ← Back home
          </Link>
        </motion.div>
        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}
