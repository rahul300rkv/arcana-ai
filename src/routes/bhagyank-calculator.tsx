import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Briefcase,
  Calculator,
  Compass,
  Heart,
  HelpCircle,
  Route as RouteIcon,
  Sparkles,
} from "lucide-react";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { BhagyankCalculator } from "@/components/bhagyank/BhagyankCalculator";
import { BhagyankMeaningsAccordion } from "@/components/bhagyank/BhagyankMeaningsAccordion";
import { BHAGYANK_EXAMPLES, BHAGYANK_FAQS, BHAGYANK_UPDATED } from "@/data/bhagyank";
import { buildContentMeta, buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/bhagyank-calculator";
const META_TITLE = "Bhagyank Calculator: Find Your Destiny Number";
const H1 = "Bhagyank Calculator – Calculate Your Destiny Number";
const DESCRIPTION =
  "Calculate your Bhagyank (Destiny Number) from your date of birth. Get your number, calculation breakdown, meaning, personality traits, career insights and more.";

export const Route = createFileRoute("/bhagyank-calculator")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: META_TITLE,
      description: DESCRIPTION,
      keywords: [
        "bhagyank calculator",
        "destiny number calculator",
        "life path number",
        "bhagyank number",
        "bhagyank vs mulank",
        "numerology destiny number",
        "master numbers 11 22 33",
        "free numerology calculator",
      ],
    }),
    links: [{ rel: "canonical", href: `${SITE_URL}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPageJsonLd({
            path: PATH,
            title: META_TITLE,
            description: DESCRIPTION,
            crumbs: [{ name: "Bhagyank Calculator", path: PATH }],
            faqs: BHAGYANK_FAQS,
          }),
        ),
      },
    ],
  }),
  component: BhagyankCalculatorPage,
});

function BhagyankCalculatorPage() {
  const [openMeaning, setOpenMeaning] = useState<string | undefined>(undefined);

  function handleViewMeaning(value: number) {
    const target = `bhagyank-${value}`;
    setOpenMeaning(target);
    // Wait a tick for the accordion to open before scrolling to it.
    requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <ArticleLayout
      crumbs={[{ label: "Bhagyank Calculator" }]}
      eyebrow="Numerology Calculator"
      title={H1}
      intro="Bhagyank — also called your Destiny Number or Life Path Number — comes from your complete date of birth, not just the day. Enter your birthdate below for an instant calculation, a transparent breakdown of the maths, and a full guide to what your number means."
      url={`${SITE_URL}${PATH}`}
      updated={BHAGYANK_UPDATED}
      readingMinutes={11}
      wordCount={2600}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-5xl aurora-text">1–9</span>
        </GlassCard>
      }
    >
      {/* Calculator — kept prominent near the top, above the fold on most viewports */}
      <section aria-labelledby="calculator-heading" className="scroll-mt-24">
        <h2 id="calculator-heading" className="sr-only">
          Bhagyank Calculator
        </h2>
        <BhagyankCalculator onViewMeaning={handleViewMeaning} />
      </section>

      <ContentSection
        id="what-is-bhagyank"
        title="What is Bhagyank?"
        icon={BookOpen}
        paragraphs={[
          "Bhagyank, also known as the Destiny Number or Life Path Number, is a core figure in numerological tradition, calculated by reducing every digit of your complete date of birth — day, month and year together — to a single number. Where Mulank looks only at the day you were born, Bhagyank is read as a wider signature drawn from your whole birthdate.",
          "In classical Pythagorean numerology and in Vedic numerology alike, Bhagyank is generally treated as one of the most significant numbers in a person's chart, said to describe overall direction, the kind of lessons a life tends to circle back to, and the broad shape of opportunity and challenge a person will likely encounter.",
          "It's worth being clear about what this actually is: a traditional, belief-based framework for reflection, not a scientifically validated predictor of outcomes. AstroFree presents Bhagyank as a tool for self-exploration and conversation-starting, in the same spirit as its tarot readings.",
        ]}
      />

      <ContentSection
        id="how-calculated"
        title="How is Bhagyank Calculated?"
        icon={Calculator}
        paragraphs={[
          "The method is simple: write out your date of birth as day, month, and full four-digit year, then add together every individual digit. If the result is more than one digit, add those digits together again — and repeat — until you reach a single digit. The one exception is if an intermediate sum lands on 11, 22, or 33: tradition holds that these Master Numbers are preserved rather than reduced further.",
        ]}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {BHAGYANK_EXAMPLES.map((ex) => (
            <GlassCard key={ex.dob} className="p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{ex.label}</p>
              <p className="mt-2 font-display text-sm text-foreground/90">
                Date of Birth: {ex.dob}
              </p>
              <div className="mt-2 space-y-1 font-mono text-xs text-muted-foreground">
                <p>
                  {ex.digits} {ex.firstSum}
                </p>
                {ex.finalSum && <p>{ex.finalSum}</p>}
              </div>
              <p className="mt-3 font-display text-sm text-[var(--gold)]">Bhagyank = {ex.result}</p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="meanings" title="Bhagyank Number Meanings" icon={Sparkles}>
        <BhagyankMeaningsAccordion openValue={openMeaning} onOpenValueChange={setOpenMeaning} />
      </ContentSection>

      <ContentSection
        id="bhagyank-vs-mulank"
        title="Bhagyank vs Mulank: What's the Difference?"
        icon={Compass}
        paragraphs={[
          "Mulank and Bhagyank are the two numbers people most often confuse, and the difference comes down entirely to which part of your date of birth is used. Mulank — also called the birth, driver, or psychic number — is calculated from your day of birth alone. If you were born on the 23rd of any month, your Mulank is 5 (2 + 3), regardless of the month or year.",
          "Bhagyank uses your complete date of birth: day, month, and year, all reduced together. It's a slower calculation because there's more to add, but it's traditionally read as the broader of the two figures — less about your instinctive, day-to-day personality (Mulank's territory) and more about the overall arc of your life: the kind of path you're on and the lessons that tend to recur across it.",
          "Most practitioners treat the two as complementary rather than competing. Mulank is often described as how you show up; Bhagyank as where you're headed. Reading them together — rather than picking one — is the traditional approach.",
        ]}
      >
        <Link
          to="/numerology/mulank"
          className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-[var(--gold)] hover:border-[color-mix(in_oklab,var(--gold)_40%,transparent)]"
        >
          Explore the free Mulank Calculator →
        </Link>
      </ContentSection>

      <ContentSection
        id="bhagyank-career"
        title="Bhagyank and Career"
        icon={Briefcase}
        paragraphs={[
          "Numerological tradition associates each Bhagyank number with a broad set of career tendencies — 1s toward founding and leading, 8s toward business and finance, 6s toward caregiving and service professions, and so on, as detailed number-by-number above. These associations come from centuries of numerological practice, not from labour-market data or psychometric research, and should be read as prompts for reflection rather than a career test.",
          "Used thoughtfully, a Bhagyank reading can be a useful mirror: a way to ask whether your current work draws on the strengths your number describes, or asks you to consistently work against your grain. It isn't a substitute for genuine career guidance, aptitude assessment, or professional counselling.",
        ]}
      />

      <ContentSection
        id="bhagyank-relationships"
        title="Bhagyank and Relationships"
        icon={Heart}
        paragraphs={[
          "In numerological tradition, comparing two people's Bhagyank numbers is sometimes used as a lens on relationship dynamics — where two paths might naturally align, and where they might create friction that takes conscious effort to navigate. A 1 and a 2, for instance, are traditionally described as a study in contrasts: independence meeting a need for partnership.",
          "These readings are best treated as general and non-deterministic. No number combination is described in serious numerological practice as guaranteeing compatibility or incompatibility — real relationships are shaped by communication, shared values, and effort far more than by any single calculation.",
        ]}
      />

      <ContentSection
        id="bhagyank-life-path"
        title="Bhagyank and Life Path"
        icon={RouteIcon}
        paragraphs={[
          "'Life Path Number' is the term most Western numerologists use interchangeably with Bhagyank — both refer to the same calculation from a complete date of birth, and both are traditionally treated as the most significant single number in a person's numerological profile.",
          "The stated limitation, even within numerological tradition itself, is that a Life Path number describes broad tendencies, not fixed outcomes. It doesn't account for upbringing, circumstance, personal choice, or the countless other factors that shape an actual life. Most thoughtful practitioners treat it as one lens among many, worth holding loosely rather than as a script to follow.",
        ]}
      />

      <ContentSection id="faq" title="Frequently Asked Questions" icon={HelpCircle}>
        <FAQAccordion items={BHAGYANK_FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/numerology/mulank",
            label: "Mulank (Birth Number) Guide",
            blurb: "The other core numerology number — calculated from your day of birth alone.",
          },
          {
            to: "/numerology",
            label: "Free Mulank & Personal Year Calculator",
            blurb: "Enter your date of birth for your Mulank, Personal Year and Personal Month.",
          },
          {
            to: "/guide/numerology",
            label: "How numerology is calculated",
            blurb: "Digit reduction, master numbers and the maths behind every number here.",
          },
          {
            to: "/tarot",
            label: "All 78 tarot card meanings",
            blurb: "The tarot archetypes that mirror each numerology number.",
          },
        ]}
      />

      <CTASection
        title="Curious what Mulank adds to the picture?"
        body="Bhagyank shows the broader path. Pair it with your Mulank and Personal Year for a fuller, free numerology reading."
        ctaLabel="Open the Mulank calculator"
        to="/numerology"
      />
    </ArticleLayout>
  );
}
