import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Layers, Compass, HelpCircle, BookOpen } from "lucide-react";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";

const PATH = "/guide/major-arcana-meanings";
const TITLE = "22 Major Arcana Explained with Real Examples";
const DESCRIPTION =
  "Every Major Arcana card from The Fool to The World, explained with a real-life example of how each one tends to show up in a reading — upright meaning, core theme, and a worked scenario.";
const UPDATED = "2026-08-14";

interface MajorCard {
  number: number;
  name: string;
  slug: string;
  keywords: string;
  meaning: string;
  example: string;
}

const MAJOR_ARCANA: MajorCard[] = [
  {
    number: 0,
    name: "The Fool",
    slug: "the-fool",
    keywords: "New beginnings, innocence, spontaneity",
    meaning:
      "A leap into the unknown, taken with trust rather than a full plan. It marks the start of a journey before experience has shaped it.",
    example:
      "Someone quitting a stable job to travel or start a business with no fixed roadmap often draws The Fool — not recklessness, but a willingness to begin before every detail is certain.",
  },
  {
    number: 1,
    name: "The Magician",
    slug: "the-magician",
    keywords: "Manifestation, resourcefulness, inspired action",
    meaning:
      "Having every tool you need already in hand, and the will to use them. It's the card of turning an idea into a first concrete step.",
    example:
      "A person launching a side project with the exact skills, contacts, and time they need — but who hasn't started yet — often pulls this card as a nudge to act.",
  },
  {
    number: 2,
    name: "The High Priestess",
    slug: "the-high-priestess",
    keywords: "Intuition, sacred knowledge, the subconscious",
    meaning:
      "Knowledge that hasn't surfaced into logic yet — a gut feeling worth trusting even without proof.",
    example:
      "Someone who \"just knows\" a business partner isn't being upfront, despite no hard evidence, is often being pointed toward this card's message: trust the quiet signal before it becomes obvious.",
  },
  {
    number: 3,
    name: "The Empress",
    slug: "the-empress",
    keywords: "Abundance, nurturing, creativity",
    meaning: "Growth through care rather than force — fertility in the literal or creative sense.",
    example:
      "A creative project that's finally gaining momentum after a long incubation period, or a pregnancy, frequently draws The Empress in a reading about growth.",
  },
  {
    number: 4,
    name: "The Emperor",
    slug: "the-emperor",
    keywords: "Authority, structure, discipline",
    meaning: "Stability built through rules, boundaries, and consistent leadership.",
    example:
      "Someone setting a strict budget after years of financial chaos, or stepping into a management role for the first time, commonly draws The Emperor.",
  },
  {
    number: 5,
    name: "The Hierophant",
    slug: "the-hierophant",
    keywords: "Tradition, institutions, shared belief",
    meaning: "Guidance through established systems — mentorship, formal education, or convention.",
    example:
      "A person considering a traditional path, such as a formal degree or a family-expected career, often sees The Hierophant as confirmation to work within the existing structure.",
  },
  {
    number: 6,
    name: "The Lovers",
    slug: "the-lovers",
    keywords: "Union, values alignment, choice",
    meaning: "A meaningful connection, or a decision that hinges on personal values.",
    example:
      "Someone weighing two job offers where one pays more and the other fits their values better usually draws The Lovers as a prompt to choose based on alignment, not just logic.",
  },
  {
    number: 7,
    name: "The Chariot",
    slug: "the-chariot",
    keywords: "Willpower, drive, victory through control",
    meaning: "Forward motion achieved by holding two opposing forces in disciplined balance.",
    example:
      "A student juggling a demanding degree and a part-time job, pushing through by sheer determination, is a classic Chariot scenario — success through willpower, not ease.",
  },
  {
    number: 8,
    name: "Strength",
    slug: "strength",
    keywords: "Courage, patience, gentle influence",
    meaning: "Power that persuades rather than dominates — inner resilience over brute force.",
    example:
      "Calmly working through a conflict with a difficult family member, without losing your temper, is textbook Strength energy: control exercised through patience, not confrontation.",
  },
  {
    number: 9,
    name: "The Hermit",
    slug: "the-hermit",
    keywords: "Solitude, introspection, inner guidance",
    meaning: "Stepping back from noise to find an answer that only quiet reflection can surface.",
    example:
      "Someone taking a solo trip or a deliberate break from socialising after a big life change, in order to think clearly, is commonly reflected by The Hermit.",
  },
  {
    number: 10,
    name: "Wheel of Fortune",
    slug: "wheel-of-fortune",
    keywords: "Cycles, turning points, fate",
    meaning:
      "A shift set in motion by forces outside your control — luck turning, for better or worse.",
    example:
      "An unexpected job offer, a sudden diagnosis, or a chance encounter that reroutes someone's plans all point to the Wheel — a turning point you didn't engineer yourself.",
  },
  {
    number: 11,
    name: "Justice",
    slug: "justice",
    keywords: "Fairness, truth, cause and effect",
    meaning:
      "A situation resolving according to what's actually true and earned, not what's convenient.",
    example:
      "A legal dispute, contract negotiation, or a moment of being held accountable for a past decision often draws Justice — consequences catching up with their cause.",
  },
  {
    number: 12,
    name: "The Hanged Man",
    slug: "the-hanged-man",
    keywords: "Pause, surrender, new perspective",
    meaning:
      "Willingly stalling forward motion in order to see a situation from a completely different angle.",
    example:
      "Someone stuck on a decision who finally stops forcing an answer and just waits — and gains clarity from the waiting itself — is living The Hanged Man.",
  },
  {
    number: 13,
    name: "Death",
    slug: "death",
    keywords: "Endings, transformation, transition",
    meaning: "A necessary ending that clears space for something new — almost never literal.",
    example:
      "The end of a long relationship, a career pivot, or the close of a life chapter that had clearly run its course is the classic — and most misunderstood — Death draw.",
  },
  {
    number: 14,
    name: "Temperance",
    slug: "temperance",
    keywords: "Balance, moderation, patience",
    meaning: "Blending opposing forces slowly and carefully until they work together.",
    example:
      "Someone learning to balance a demanding job with family time, adjusting gradually rather than overhauling everything at once, reflects Temperance's patient middle path.",
  },
  {
    number: 15,
    name: "The Devil",
    slug: "the-devil",
    keywords: "Attachment, restriction, the shadow self",
    meaning:
      "A pattern, habit, or relationship that feels binding, even though the way out usually exists.",
    example:
      "Staying in a draining job purely out of comfort, or a habit that's become hard to break, is the everyday face of The Devil — self-imposed limits mistaken for the only option.",
  },
  {
    number: 16,
    name: "The Tower",
    slug: "the-tower",
    keywords: "Sudden upheaval, revelation, awakening",
    meaning:
      "A fast, disruptive collapse of something built on a shaky foundation — jarring, but clarifying.",
    example:
      "A sudden layoff, a relationship ending abruptly, or a plan falling apart overnight all fit The Tower — disruptive in the moment, but usually removing something that wasn't stable to begin with.",
  },
  {
    number: 17,
    name: "The Star",
    slug: "the-star",
    keywords: "Hope, renewal, quiet faith",
    meaning:
      "Calm optimism returning after a hard period — healing that's gentle rather than dramatic.",
    example:
      "The first sense of relief after a difficult breakup or illness, when things finally start feeling manageable again, is the moment The Star describes.",
  },
  {
    number: 18,
    name: "The Moon",
    slug: "the-moon",
    keywords: "Illusion, fear, the subconscious",
    meaning:
      "Uncertainty and unclear information — things aren't fully visible yet, and anxiety can fill the gap.",
    example:
      "Waiting on test results, a decision from someone else, or any situation where key facts are still hidden, often produces The Moon's foggy, anxious energy.",
  },
  {
    number: 19,
    name: "The Sun",
    slug: "the-sun",
    keywords: "Joy, vitality, success",
    meaning:
      "Clarity, confidence, and genuine good fortune — one of the most straightforwardly positive cards.",
    example:
      "A wedding, a long-awaited achievement, or simply a stretch of life where things are finally going well is the plain, uncomplicated territory of The Sun.",
  },
  {
    number: 20,
    name: "Judgement",
    slug: "judgement",
    keywords: "Rebirth, reckoning, inner calling",
    meaning: "A moment of honest self-assessment that leads to a decisive change in direction.",
    example:
      "Reflecting on years in a career and finally admitting it's not the right fit, then acting on that realisation, is Judgement in practice — a wake-up call answered.",
  },
  {
    number: 21,
    name: "The World",
    slug: "the-world",
    keywords: "Completion, integration, accomplishment",
    meaning: "A cycle closing successfully — everything that was in motion coming together.",
    example:
      "Graduating, completing a major project, or reaching a long-term goal after years of effort is the natural home of The World — an ending that's also an arrival.",
  },
];

const FAQS = [
  {
    question: "What makes a card part of the Major Arcana rather than the Minor Arcana?",
    answer:
      "The 22 Major Arcana are numbered 0 (The Fool) through 21 (The World) and represent significant, archetypal life themes rather than everyday events. The 56 Minor Arcana, split into four suits, describe more immediate, situational influences.",
  },
  {
    question: "Does drawing a lot of Major Arcana cards in one spread mean something?",
    answer:
      "Many readers treat a spread dominated by Major Arcana as a sign the question touches something significant — a real turning point rather than routine day-to-day matters — while a Minor-Arcana-heavy spread points to more immediate, practical circumstances.",
  },
  {
    question: "Are Death and The Tower always bad cards?",
    answer:
      "No. Both describe necessary, often overdue change rather than literal disaster. Death marks an ending that clears space for growth, and The Tower marks the fast collapse of something unstable — disruptive, but usually clarifying rather than purely negative.",
  },
  {
    question: "Is there a correct order to learn the Major Arcana in?",
    answer:
      "The numbered sequence (0 to 21) is often read as a symbolic journey — The Fool's Journey — where each card represents a stage of growth. Learning them in that order can help the meanings build on each other logically.",
  },
  {
    question: "Do Major Arcana meanings change much when reversed?",
    answer:
      "The core theme stays the same, but reversed Major Arcana cards typically describe that theme as blocked, delayed, or turned inward rather than reversed outright — see AstroFree's dedicated guide to reversed tarot cards for the full method.",
  },
];

function MajorArcanaPage() {
  return (
    <ArticleLayout
      crumbs={[{ label: "Guides", to: "/guide" }, { label: "22 Major Arcana Explained" }]}
      eyebrow="Tarot · Major Arcana"
      title={TITLE}
      intro="The 22 Major Arcana carry the biggest themes in the deck — here's what each one means, and a real-world example of how it tends to show up in an actual reading."
      url={`${SITE_URL}${PATH}`}
      updated={UPDATED}
      readingMinutes={16}
      wordCount={3520}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <Star className="h-16 w-16 text-[var(--gold)]" strokeWidth={1.2} />
        </GlassCard>
      }
    >
      <ContentSection
        id="what-is-major-arcana"
        title="What the Major Arcana represent"
        icon={BookOpen}
      >
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Of the 78 cards in a tarot deck, 22 belong to the Major Arcana — numbered 0 through 21,
          from The Fool to The World. Where the 56 Minor Arcana cards describe the practical texture
          of everyday life, the Major Arcana describe archetypal forces: the kind of turning points,
          lessons, and life-shaping events that come along a handful of times, not every week.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Many readers treat the sequence 0 to 21 as a symbolic story — often called{" "}
          <em>The Fool's Journey</em> — where an innocent, unformed Fool moves through experience,
          structure, crisis, and reflection before arriving at The World, a card of completion. You
          don't need to memorise the story to read the cards well, but knowing it helps explain why
          the numbers matter: a low-numbered Major Arcana tends to describe something just
          beginning, while a high-numbered one tends to describe something reaching resolution.
        </p>
      </ContentSection>

      <ContentSection id="cards" title="All 22 cards, with real examples" icon={Layers}>
        <div className="grid gap-4 sm:grid-cols-2">
          {MAJOR_ARCANA.map((c) => (
            <GlassCard key={c.slug} id={c.slug} className="scroll-mt-24 p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg">
                  <Link
                    to="/tarot/$slug"
                    params={{ slug: c.slug }}
                    className="hover:text-[var(--gold)]"
                  >
                    {c.number}. {c.name}
                  </Link>
                </h3>
              </div>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[var(--gold)]">
                {c.keywords}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.meaning}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                <span className="text-xs uppercase tracking-wide text-muted-foreground">
                  Real example:{" "}
                </span>
                {c.example}
              </p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="using-examples" title="How to use these examples" icon={Compass}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          The scenarios above are illustrations, not the only valid reading — the same card can
          describe many different situations that share its underlying theme. When a Major Arcana
          card appears in your own spread, use the example as a starting point, then ask how that
          same theme (a beginning, a collapse, a pause, a resolution) might be showing up in the
          specific area your question was about.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          It also helps to check the card against its position in the spread. The same Tower card
          means something different landing in a "past" slot (a disruption that already happened and
          shaped where you are now) than in an "outcome" slot (a warning about what's coming if the
          current path continues). For a full breakdown of spread positions, see AstroFree's{" "}
          <Link to="/guide/tarot-spreads" className="text-[var(--gold)] hover:underline">
            tarot spreads guide
          </Link>
          .
        </p>
      </ContentSection>

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/guide/tarot-for-beginners",
            label: "Complete guide to tarot for beginners",
            blurb: "Deck structure, first spreads, and a repeatable interpretation method.",
          },
          {
            to: "/guide/reversed-tarot-cards",
            label: "How to interpret reversed tarot cards",
            blurb: "The four common ways a reversed card changes its upright meaning.",
          },
          {
            to: "/guide/tarot-card-meanings",
            label: "All 78 tarot card meanings",
            blurb: "Major and Minor Arcana, upright and reversed, in one reference.",
          },
          {
            to: "/tarot",
            label: "Browse the full tarot deck",
            blurb: "Every card's dedicated page with love, career, and health meanings.",
          },
        ]}
      />

      <CTASection
        title="See these cards in a live reading"
        body="Draw a free spread and get an instant, plain-language interpretation of every Major Arcana card that appears."
        ctaLabel="Start a free reading"
        to="/reading"
      />
    </ArticleLayout>
  );
}

export const Route = createFileRoute("/guide/major-arcana-meanings")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "major arcana meanings",
        "22 major arcana explained",
        "major arcana tarot cards",
        "the fool's journey",
        "major arcana card list",
      ],
    }),
    links: [{ rel: "canonical", href: `${SITE_URL}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildContentJsonLd({
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
            updated: UPDATED,
            crumbs: [
              { name: "Guides", path: "/guide" },
              { name: "22 Major Arcana Explained", path: PATH },
            ],
            faqs: FAQS,
          }),
        ),
      },
    ],
  }),
  component: MajorArcanaPage,
});
