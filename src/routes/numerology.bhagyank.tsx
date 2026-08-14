import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Calculator, Compass, HelpCircle, Sparkles } from "lucide-react";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { BHAGYANK_MEANINGS, BHAGYANK_HUB_FAQS, BHAGYANK_UPDATED } from "@/data/bhagyank";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/numerology/bhagyank";
const TITLE = "Bhagyank (Destiny Number) in Numerology: Complete Guide to Life Path 1–33";
const DESCRIPTION =
  "What Bhagyank means, how to calculate your Destiny Number from your complete date of birth, and detailed guides to Life Path numbers 1-9 and Master Numbers 11, 22, 33.";

export const Route = createFileRoute("/numerology/bhagyank")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "bhagyank",
        "destiny number",
        "life path number",
        "bhagyank calculator",
        "numerology life path",
        "master numbers",
        "bhagyank 1 to 9",
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
            updated: BHAGYANK_UPDATED,
            crumbs: [
              { name: "Numerology", path: "/numerology" },
              { name: "Bhagyank", path: PATH },
            ],
            faqs: BHAGYANK_HUB_FAQS,
          }),
        ),
      },
    ],
  }),
  component: BhagyankHub,
});

function BhagyankHub() {
  return (
    <ArticleLayout
      crumbs={[{ label: "Numerology", to: "/numerology" }, { label: "Bhagyank" }]}
      eyebrow="Numerology Guide"
      title="Bhagyank: your Life Path number, explained"
      intro="Bhagyank — also called the Destiny Number or Life Path Number — comes from your complete date of birth. It describes your broader life direction, natural talents, and the kinds of challenges you're likely to encounter. This guide covers how to calculate it and what each number 1–9 and Master Number represents."
      url={`${SITE_URL}${PATH}`}
      updated={BHAGYANK_UPDATED}
      readingMinutes={12}
      wordCount={1800}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-4xl aurora-text">1–33</span>
        </GlassCard>
      }
    >
      <ContentSection
        id="what-is-bhagyank"
        title="What is Bhagyank?"
        icon={BookOpen}
        paragraphs={[
          "Bhagyank is the single digit — or Master Number — you get by adding every digit of your complete date of birth together, repeatedly reducing until one digit remains, unless the intermediate sum is 11, 22, or 33, which numerological tradition preserves unreduced.",
          "Where Mulank (your birth number, derived only from the day) describes your instinctive, everyday personality, Bhagyank describes your broader life path — the longer arc of your development and the kinds of challenges and gifts you're likely to meet along the way. Most practitioners read the two together: Mulank is how you naturally act; Bhagyank is what life is asking of you.",
          "Each Bhagyank carries both gifts and shadow sides. A Bhagyank 1 person is naturally inclined toward leadership and independence, but must learn not to steamroll others. A Bhagyank 2 has natural empathy and diplomacy, but can struggle to speak their own needs. The work lies in developing the gifts while managing the shadows — and that's a lifelong process, not a fixed identity.",
        ]}
      />

      <ContentSection
        id="how-to-calculate"
        title="How to calculate your Bhagyank"
        icon={Calculator}
        paragraphs={[
          "Write your date of birth as day, month, and full four-digit year. Add every single digit together. If the total is more than one digit, add those digits together, and keep going until you reach a single digit — unless you land on 11, 22, or 33, in which case tradition says you stop there, as these are treated as Master Numbers with their own separate meanings.",
          "The process is the same whether you were born in 1975 or 2005. A person born 23 August 1995 would calculate: 2+3+0+8+1+9+9+5 = 37, then 3+7 = 10, then 1+0 = 1. That person's Bhagyank is 1.",
        ]}
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <GlassCard className="p-6">
            <p className="text-xs font-display uppercase tracking-[0.2em] text-[var(--gold)]">
              Example 1
            </p>
            <p className="mt-2 text-sm text-muted-foreground">15 August 1995</p>
            <p className="mt-3 font-display text-lg aurora-text">1+5+0+8+1+9+9+5 = 38</p>
            <p className="mt-2 text-sm text-muted-foreground">3 + 8 = 11 (Master Number)</p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs font-display uppercase tracking-[0.2em] text-[var(--gold)]">
              Example 2
            </p>
            <p className="mt-2 text-sm text-muted-foreground">1 January 2000</p>
            <p className="mt-3 font-display text-lg aurora-text">0+1+0+1+2+0+0+0 = 4</p>
            <p className="mt-2 text-sm text-muted-foreground">No further reduction</p>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-xs font-display uppercase tracking-[0.2em] text-[var(--gold)]">
              Example 3
            </p>
            <p className="mt-2 text-sm text-muted-foreground">31 December 1999</p>
            <p className="mt-3 font-display text-lg aurora-text">3+1+1+2+1+9+9+9 = 35</p>
            <p className="mt-2 text-sm text-muted-foreground">3 + 5 = 8</p>
          </GlassCard>
        </div>
        <Link
          to="/bhagyank-calculator"
          className="mt-6 inline-flex text-sm text-[var(--gold)] hover:underline"
        >
          Calculate your Bhagyank automatically →
        </Link>
      </ContentSection>

      <ContentSection id="all-numbers" title="All Bhagyank numbers 1–9 and Master Numbers" icon={Compass}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33].map((num) => {
            const meaning = BHAGYANK_MEANINGS[num];
            if (!meaning) return null;
            return (
              <li key={num}>
                <GlassCard className="flex h-full flex-col gap-3 p-5">
                  <span className="font-display text-3xl aurora-text">{num}</span>
                  <div className="min-w-0 flex-1">
                    <span className="block font-display text-base">{meaning.title}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {meaning.archetype}
                    </span>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {meaning.meaning.substring(0, 140)}...
                    </p>
                  </div>
                </GlassCard>
              </li>
            );
          })}
        </ul>
      </ContentSection>

      <ContentSection
        id="how-to-use"
        title="How to use your Life Path number"
        icon={Sparkles}
        paragraphs={[
          "Your Bhagyank is not a prediction of your future — it is a map of your natural tendencies and likely growth edges. The number describes both gifts and challenges. A Bhagyank 8 person naturally understands power and money, but needs to guard against losing themselves in ambition. A Bhagyank 7 naturally seeks depth and truth, but can isolate themselves through over-analysis.",
          "The practical use is recognising these patterns in yourself: if you know you're a Bhagyank 4, you can leverage your natural discipline and consistency, while deliberately building in flexibility. If you're a Bhagyank 5, you can plan for your restlessness rather than being blindsided by it repeatedly.",
          "Pair your Bhagyank with your Mulank (birth number) to see the fuller picture: Mulank is your everyday instinct; Bhagyank is your life's longer direction. You might have Mulank 1 drive with Bhagyank 2 empathy, which creates an interesting internal dynamic — you want to lead, but you naturally read people's feelings. Understanding both helps you use these gifts consciously rather than letting them conflict.",
        ]}
      />

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={BHAGYANK_HUB_FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/bhagyank-calculator",
            label: "Free Bhagyank calculator",
            blurb: "Enter your complete date of birth to get your Destiny Number instantly.",
          },
          {
            to: "/numerology/mulank",
            label: "Mulank (Birth Number) guide",
            blurb: "Learn how your day of birth shapes your everyday personality.",
          },
          {
            to: "/namank-calculator",
            label: "Free Namank calculator",
            blurb: "Calculate your Name Number and discover how your name's letters shape your identity.",
          },
          {
            to: "/guide/numerology",
            label: "How numerology is calculated",
            blurb: "Master numbers, digit reduction, and the philosophy behind the system.",
          },
          {
            to: "/tarot",
            label: "All 78 tarot card meanings",
            blurb: "The tarot archetypes that correspond to each Life Path number.",
          },
        ]}
      />

      <CTASection
        title="Discover your Life Path in seconds"
        body="Enter your complete date of birth to get your Bhagyank, Personal Year number, and the tarot archetype that mirrors your path."
        ctaLabel="Open the free calculator"
        to="/bhagyank-calculator"
      />
    </ArticleLayout>
  );
}
