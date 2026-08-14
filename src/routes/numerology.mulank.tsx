import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Calculator, Compass, HelpCircle, Sparkles } from "lucide-react";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { MULANK_PAGES, MULANK_HUB_FAQS, MULANK_UPDATED } from "@/data/mulank";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/numerology/mulank";
const TITLE = "Mulank (Birth Number) in Numerology: Complete Guide to 1–9";
const DESCRIPTION =
  "What Mulank means, how to calculate your birth number from your date of birth, and detailed guides to Mulank 1 through 9 — planets, personality, career, compatibility and remedies.";

export const Route = createFileRoute("/numerology/mulank")({
  head: () => ({
    meta: buildContentMeta({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      keywords: [
        "mulank",
        "birth number numerology",
        "mulank calculator",
        "radical number",
        "psychic number",
        "mulank 1 to 9",
        "driver number",
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
            updated: MULANK_UPDATED,
            crumbs: [
              { name: "Numerology", path: "/numerology" },
              { name: "Mulank", path: PATH },
            ],
            faqs: MULANK_HUB_FAQS,
          }),
        ),
      },
    ],
  }),
  component: MulankHub,
});

function MulankHub() {
  return (
    <ArticleLayout
      crumbs={[{ label: "Numerology", to: "/numerology" }, { label: "Mulank" }]}
      eyebrow="Numerology Guide"
      title="Mulank: the birth number, explained"
      intro="Mulank — the birth, driver or psychic number — comes from the day of the month you were born. It describes the personality you lead with. This guide covers how it is calculated, what each planet rules, and links to full pages for Mulank 1 through 9."
      url={`${SITE_URL}${PATH}`}
      updated={MULANK_UPDATED}
      readingMinutes={9}
      wordCount={1400}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-5xl aurora-text">1–9</span>
        </GlassCard>
      }
    >
      <ContentSection
        id="what-is-mulank"
        title="What is Mulank?"
        icon={BookOpen}
        paragraphs={[
          "Mulank is the single digit you get by reducing the day of the month on which you were born. In Indian numerology it is also called the birth number, radical number, driver number or psychic number, and it is the fastest of all numerology numbers to calculate — you only need one piece of information, and it never changes.",
          "Because it comes from the day rather than the whole date, Mulank describes the self you lead with: the instinctive personality other people meet first, the way you make snap decisions, and the habits you fall back on under pressure. The Life Path number (Bhagyank), calculated from your complete date of birth, describes the longer road you walk. Most practitioners read the two together, and the tension between them often explains why someone feels like two different people at work and at home.",
          "Each Mulank is assigned a ruling planet — the Sun for 1, the Moon for 2, Jupiter for 3, Rahu for 4, Mercury for 5, Venus for 6, Ketu for 7, Saturn for 8 and Mars for 9. Those attributions are the bridge between numerology and classical Vedic astrology, and they are the reason each number carries a distinct temperament, a set of colours and days, a gemstone and a traditional remedy.",
        ]}
      />

      <ContentSection
        id="how-to-calculate"
        title="How to calculate your Mulank"
        icon={Calculator}
        paragraphs={[
          "Take only the day of your birth and add its digits until a single digit remains. Born on the 7th? Your Mulank is 7. Born on the 14th? 1 + 4 = 5. Born on the 29th? 2 + 9 = 11, then 1 + 1 = 2. The month and year are ignored completely.",
          "Unlike the Life Path calculation, Mulank is never left as a master number. Because the day of the month tops out at 31, every result reduces cleanly to a value between 1 and 9. If you have seen an 11 or 22 described as a Mulank, it is being used loosely — in classical practice those belong to the full-date calculation.",
        ]}
      >
        <GlassCard className="p-6">
          <p className="text-sm text-muted-foreground">Worked example — born 23 July 1998:</p>
          <p className="mt-3 font-display text-xl aurora-text">23 → 2 + 3 = 5</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Mulank 5, ruled by Mercury. The month and year only matter for the Life Path number.
          </p>
          <Link
            to="/numerology"
            className="mt-4 inline-flex text-sm text-[var(--gold)] hover:underline"
          >
            Calculate it automatically →
          </Link>
        </GlassCard>
      </ContentSection>

      <ContentSection id="all-numbers" title="Mulank 1 to 9" icon={Compass}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {MULANK_PAGES.map((p) => (
            <li key={p.slug}>
              <Link to="/numerology/$slug" params={{ slug: p.slug }} className="block h-full">
                <GlassCard className="flex h-full items-start gap-4 p-5">
                  <span className="font-display text-3xl aurora-text">{p.number}</span>
                  <span className="min-w-0">
                    <span className="block font-display text-base">
                      {p.label} — {p.archetype}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      Born on the {p.dates.join(", ")} · {p.planet}
                    </span>
                  </span>
                </GlassCard>
              </Link>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection
        id="how-to-use"
        title="How to use your birth number"
        icon={Sparkles}
        paragraphs={[
          "The practical value of a Mulank is not prediction — it is pattern recognition. Once you can name the drive behind your default behaviour, you can spend it deliberately instead of reactively. A Mulank 8 who knows Saturn rewards late stops quitting two years early; a Mulank 5 who knows restlessness is the risk builds finishing into the calendar rather than into willpower.",
          "Read your number's shadow section as carefully as its strengths. In practice, the shadow is simply the strength running without supervision, and every number's growth curve is the same shape: unfiltered in youth, expensive in midlife, deliberate afterwards.",
          "Finally, pair the birth number with your Personal Year to get timing. The Mulank tells you how you act; the Personal Year tells you what the current twelve months are asking for. The free calculator on this site produces both from a single date.",
        ]}
      />

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={MULANK_HUB_FAQS} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/numerology",
            label: "Free Mulank calculator",
            blurb: "Enter your date of birth for your Mulank, Personal Year and Personal Month.",
          },
          {
            to: "/bhagyank-calculator",
            label: "Free Bhagyank (Destiny Number) calculator",
            blurb:
              "Uses your complete date of birth for a broader life-path reading alongside Mulank.",
          },
          {
            to: "/guide/numerology",
            label: "How numerology is calculated",
            blurb: "Digit reduction, master numbers and the maths behind every number here.",
          },
          {
            to: "/tarot",
            label: "All 78 tarot card meanings",
            blurb: "The tarot archetypes that mirror each birth number.",
          },
          {
            to: "/guide",
            label: "The AstroFree guide library",
            blurb: "Spreads, card meanings and numerology fundamentals in one place.",
          },
        ]}
      />

      <CTASection
        title="Find your Mulank in seconds"
        body="Enter your date of birth to get your birth number, Personal Year and Personal Month, each mapped to a tarot archetype."
        ctaLabel="Open the free calculator"
        to="/numerology"
      />
    </ArticleLayout>
  );
}
