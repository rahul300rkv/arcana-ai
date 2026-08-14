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
import { NamankCalculator } from "@/components/namank/NamankCalculator";
import { NamankMeaningsAccordion } from "@/components/namank/NamankMeaningsAccordion";
import { NAMANK_EXAMPLES, NAMANK_FAQS, NAMANK_UPDATED } from "@/data/namank";
import { buildContentMeta, buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/namank-calculator";
const META_TITLE = "Namank Calculator: Find Your Name Number";
const H1 = "Namank Calculator – Calculate Your Name Number";
const DESCRIPTION =
  "Calculate your Namank (Name Number) using Chaldean numerology. Enter your name for an instant calculation, a transparent letter-by-letter breakdown, and a full guide to what your number means.";

export const Route = createFileRoute("/namank-calculator")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: META_TITLE,
      description: DESCRIPTION,
      keywords: [
        "namank calculator",
        "name number calculator",
        "chaldean numerology",
        "namank number",
        "namank vs mulank",
        "name numerology",
        "master numbers 11 22",
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
            crumbs: [{ name: "Namank Calculator", path: PATH }],
            faqs: NAMANK_FAQS,
          }),
        ),
      },
    ],
  }),
  component: NamankCalculatorPage,
});

function NamankCalculatorPage() {
  const [openMeaning, setOpenMeaning] = useState<string | undefined>(undefined);

  function handleViewMeaning(value: number) {
    const target = `namank-${value}`;
    setOpenMeaning(target);
    // Wait a tick for the accordion to open before scrolling to it.
    requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <ArticleLayout
      crumbs={[{ label: "Namank Calculator" }]}
      eyebrow="Numerology Calculator"
      title={H1}
      intro="Namank — also called your Name Number — comes from the letters of your full name using the Chaldean numerology system, not your date of birth. Enter your name below for an instant calculation, a transparent breakdown of the maths, and a full guide to what your number means."
      url={`${SITE_URL}${PATH}`}
      updated={NAMANK_UPDATED}
      readingMinutes={10}
      wordCount={2400}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-5xl aurora-text">1–9</span>
        </GlassCard>
      }
    >
      {/* Calculator — kept prominent near the top, above the fold on most viewports */}
      <section aria-labelledby="calculator-heading" className="scroll-mt-24">
        <h2 id="calculator-heading" className="sr-only">
          Namank Calculator
        </h2>
        <NamankCalculator onViewMeaning={handleViewMeaning} />
      </section>

      <ContentSection
        id="what-is-namank"
        title="What is Namank?"
        icon={BookOpen}
        paragraphs={[
          "Namank, also known as the Name Number, is a core figure in numerological tradition, calculated by adding together the Chaldean numerical values of every letter in a person's name and reducing the total to a single digit (or Master Number). Where Mulank and Bhagyank are drawn from the date of birth, Namank comes entirely from the letters of the name.",
          "In Chaldean numerology — an older system widely used in Indian numerology practice — each letter of the alphabet carries a vibration between 1 and 8. Namank is traditionally read as the energy a name projects outward: how a person is perceived, the impression their name creates, and the traits associated with the sound and structure of the name itself.",
          "It's worth being clear about what this actually is: a traditional, belief-based framework for reflection, not a scientifically validated predictor of outcomes. AstroFree presents Namank as a tool for self-exploration and conversation-starting, in the same spirit as its tarot readings.",
        ]}
      />

      <ContentSection
        id="how-calculated"
        title="How is Namank Calculated?"
        icon={Calculator}
        paragraphs={[
          "The method: write out the full name, look up each letter's Chaldean value, and add every value together. If the result is more than one digit, add those digits together again — and repeat — until a single digit remains. The one exception is if an intermediate sum lands on 11 or 22: tradition holds that these Master Numbers are preserved rather than reduced further. Note that in the Chaldean system, no letter is assigned the value 9 — it can only appear as a reduced total.",
        ]}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {NAMANK_EXAMPLES.map((ex) => (
            <GlassCard key={ex.name} className="p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{ex.label}</p>
              <p className="mt-2 font-display text-sm text-foreground/90">Name: {ex.name}</p>
              <div className="mt-2 space-y-1 font-mono text-xs text-muted-foreground">
                <p>
                  {ex.digits} {ex.firstSum}
                </p>
                {ex.finalSum && <p>{ex.finalSum}</p>}
              </div>
              <p className="mt-3 font-display text-sm text-[var(--gold)]">Namank = {ex.result}</p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="meanings" title="Namank Number Meanings" icon={Sparkles}>
        <NamankMeaningsAccordion openValue={openMeaning} onOpenValueChange={setOpenMeaning} />
      </ContentSection>

      <ContentSection
        id="namank-vs-mulank-bhagyank"
        title="Namank vs Mulank vs Bhagyank: What's the Difference?"
        icon={Compass}
        paragraphs={[
          "These are the three numbers people most often mix up, and the difference comes down to what each is calculated from. Mulank — the birth, driver or psychic number — uses only the day of birth. Bhagyank — the destiny or life path number — uses the complete date of birth: day, month and year together.",
          "Namank is different in kind, not just in calculation: it is drawn entirely from the letters of the name using the Chaldean system, and has nothing to do with the date of birth at all. Because it depends on spelling, Namank can change if a name is spelled differently, shortened, or changed — something that can never happen to Mulank or Bhagyank.",
          "Most practitioners treat all three as complementary lenses rather than competing ones. Mulank is often described as how you show up day to day, Bhagyank as where your life is headed, and Namank as the impression your name itself projects. Reading them together is the traditional approach.",
        ]}
      >
        <Link
          to="/bhagyank-calculator"
          className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-[var(--gold)] hover:border-[color-mix(in_oklab,var(--gold)_40%,transparent)]"
        >
          Explore the free Bhagyank Calculator →
        </Link>
      </ContentSection>

      <ContentSection
        id="namank-career"
        title="Namank and Career"
        icon={Briefcase}
        paragraphs={[
          "Numerological tradition associates each Namank number with broad career tendencies — 1s toward founding and leading, 8s toward business and finance, 6s toward caregiving and service professions, and so on, as detailed number-by-number above. These associations come from centuries of numerological practice, not from labour-market data or psychometric research, and should be read as prompts for reflection rather than a career test.",
          "Used thoughtfully, a Namank reading can be a useful mirror: a way to ask whether the name you go by matches the impression you want to create, or whether a spelling change might shift how a name is perceived. It isn't a substitute for genuine career guidance, aptitude assessment, or professional counselling.",
        ]}
      />

      <ContentSection
        id="namank-relationships"
        title="Namank and Relationships"
        icon={Heart}
        paragraphs={[
          "In numerological tradition, comparing two people's Namank numbers is sometimes used as a lens on relationship dynamics — where two name vibrations might naturally align, and where they might create friction that takes conscious effort to navigate. A 1 and a 2, for instance, are traditionally described as a study in contrasts: independence meeting a need for partnership.",
          "These readings are best treated as general and non-deterministic. No number combination is described in serious numerological practice as guaranteeing compatibility or incompatibility — real relationships are shaped by communication, shared values, and effort far more than by any single calculation.",
        ]}
      />

      <ContentSection
        id="namank-name-changes"
        title="Namank and Name Changes"
        icon={RouteIcon}
        paragraphs={[
          "Because Namank depends entirely on spelling, it's the one of the three core numbers that can be deliberately adjusted — some numerology practitioners recommend small spelling changes to a name (adding or dropping a letter) to shift the resulting Namank toward a number believed to be more favourable.",
          "The stated limitation, even within numerological tradition itself, is that a Name Number describes broad tendencies, not fixed outcomes. It doesn't account for upbringing, circumstance, personal choice, or the countless other factors that shape an actual life. Most thoughtful practitioners treat it as one lens among many, worth holding loosely rather than as a script to follow.",
        ]}
      />

      <ContentSection id="faq" title="Frequently Asked Questions" icon={HelpCircle}>
        <FAQAccordion items={NAMANK_FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/bhagyank-calculator",
            label: "Bhagyank (Destiny Number) Calculator",
            blurb: "Uses your complete date of birth for a broader life-path reading.",
          },
          {
            to: "/numerology/mulank",
            label: "Mulank (Birth Number) Guide",
            blurb: "The core numerology number calculated from your day of birth alone.",
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
        title="Curious what your birth numbers add?"
        body="Namank shows what your name projects. Pair it with your Mulank and Bhagyank for a fuller, free numerology reading."
        ctaLabel="Open the Bhagyank calculator"
        to="/bhagyank-calculator"
      />
    </ArticleLayout>
  );
}
