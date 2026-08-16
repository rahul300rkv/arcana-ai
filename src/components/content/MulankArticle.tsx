import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Briefcase,
  CalendarDays,
  Coins,
  Compass,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  NotebookPen,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { InfoGrid } from "@/components/content/InfoGrid";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { MULANK_PAGES, getMulankPage, type MulankPage } from "@/data/mulank";
import { SITE_URL } from "@/lib/site";

const VERDICT_LABEL = {
  friend: "Friendly",
  neutral: "Neutral",
  challenge: "Growth",
} as const;

/** Full article body for a single `/numerology/mulank-N` page. */
export function MulankArticle({ page }: { page: MulankPage }) {
  const path = `/numerology/${page.slug}`;
  const index = MULANK_PAGES.findIndex((p) => p.slug === page.slug);
  const prev = index > 0 ? MULANK_PAGES[index - 1] : undefined;
  const next = index < MULANK_PAGES.length - 1 ? MULANK_PAGES[index + 1] : undefined;
  const related = page.relatedSlugs
    .map((s) => getMulankPage(s))
    .filter((p): p is MulankPage => Boolean(p) && p!.slug !== page.slug);

  return (
    <ArticleLayout
      crumbs={[
        { label: "Numerology", to: "/numerology" },
        { label: "Mulank", to: "/numerology/mulank" },
        { label: page.label },
      ]}
      eyebrow="Mulank · Birth Number"
      title={`${page.label}: ${page.archetype}`}
      intro={page.hero}
      url={`${SITE_URL}${path}`}
      updated={page.updated}
      readingMinutes={page.readingMinutes}
      wordCount={page.wordCount}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-6xl aurora-text">{page.number}</span>
        </GlassCard>
      }
    >
      <ContentSection id="dates" title="Who has this Mulank" icon={CalendarDays}>
        <div className="flex flex-wrap gap-2">
          {page.dates.map((d) => (
            <span key={d} className="rounded-full glass px-4 py-1.5 text-sm text-[var(--gold)]">
              Born on the {d}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Your Mulank uses only the day of the month. Add its digits until one digit remains — the
          month and year belong to your{" "}
          <Link
            to="/numerology/$slug"
            params={{ slug: page.lifePathSlug }}
            className="text-[var(--gold)] hover:underline"
          >
            Life Path {page.number}
          </Link>{" "}
          calculation instead.
        </p>
      </ContentSection>

      <ContentSection id="correspondences" title="Mulank at a glance" icon={Compass}>
        <InfoGrid
          items={[
            { label: "Mulank", value: String(page.number) },
            { label: "Archetype", value: page.archetype },
            { label: "Ruling planet", value: page.planet },
            { label: "Deity", value: page.deity },
            { label: "Element", value: page.element },
            { label: "Direction", value: page.direction },
            { label: "Gemstone", value: page.gemstone },
            { label: "Tarot archetype", value: page.tarotCard },
            { label: "Birth dates", value: page.dates.join(", ") },
            { label: "Lucky colours", value: page.luckyColours.join(", ") },
            { label: "Lucky days", value: page.luckyDays.join(", ") },
          ]}
        />
      </ContentSection>

      <ContentSection
        id="meaning"
        title={`${page.label} meaning`}
        icon={BookOpen}
        paragraphs={page.meaning}
      />

      <ContentSection
        id="personality"
        title="Personality traits"
        icon={Sparkles}
        paragraphs={page.personality}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">Strengths</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {page.strengths.map((s) => (
                <li key={s}>— {s}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="font-display text-lg">Challenges</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {page.weaknesses.map((s) => (
                <li key={s}>— {s}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection
        id="career"
        title="Career and business"
        icon={Briefcase}
        paragraphs={page.career}
      >
        <div className="flex flex-wrap gap-2">
          {page.careerPaths.map((c) => (
            <span key={c} className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="love"
        title="Love and compatibility"
        icon={HeartHandshake}
        paragraphs={page.love}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {page.compatibility.map((c) => (
            <GlassCard key={`${c.verdict}-${c.number}`} className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-base">Mulank {c.number}</h3>
                <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]">
                  {VERDICT_LABEL[c.verdict]}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="health"
        title="Health and wellbeing"
        icon={HeartPulse}
        paragraphs={page.health}
      />
      <ContentSection id="money" title="Money and finances" icon={Coins} paragraphs={page.money} />

      <ContentSection id="remedies" title="Remedies and practices" icon={Wand2}>
        <ul className="space-y-3">
          {page.remedies.map((r) => (
            <li key={r} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
              />
              {r}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Remedies are traditional practices for reflection and discipline, not medical, financial
          or legal advice. Consult a qualified professional before wearing gemstones.
        </p>
      </ContentSection>

      <ContentSection id="famous" title="Famous people with this Mulank" icon={Users}>
        <div className="flex flex-wrap gap-2">
          {page.famous.map((f) => (
            <span key={f} className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              {f}
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="practice" title="Journal and affirmation" icon={NotebookPen}>
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg">Journal prompts</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {page.journalPrompts.map((p, i) => (
                <li key={i}>— {p}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="font-display text-lg">Affirmation</h3>
            <p className="mt-3 text-sm italic leading-relaxed text-foreground/90">
              “{page.affirmation}”
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Tarot archetype:{" "}
              <Link
                to="/tarot/$slug"
                params={{ slug: page.tarotSlug }}
                className="text-[var(--gold)] hover:underline"
              >
                {page.tarotCard}
              </Link>
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      <section aria-labelledby="related-mulank-heading" className="scroll-mt-24">
        <h2 id="related-mulank-heading" className="font-display text-2xl aurora-text sm:text-3xl">
          Related birth numbers
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link to="/numerology/$slug" params={{ slug: r.slug }} className="block h-full">
                <GlassCard className="h-full p-4">
                  <span className="block font-display text-base">{r.label}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{r.archetype}</span>
                </GlassCard>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={page.faqs} />
      </ContentSection>

      <nav aria-label="More Mulank numbers" className="grid gap-4 sm:grid-cols-2">
        <Link
          to={prev ? "/numerology/$slug" : "/numerology/mulank"}
          {...(prev ? { params: { slug: prev.slug } } : {})}
          className="block"
        >
          <GlassCard className="h-full p-4">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {prev ? "Previous" : "Back to"}
            </span>
            <span className="mt-1 block font-display text-sm">
              {prev ? prev.label : "The complete Mulank guide"}
            </span>
          </GlassCard>
        </Link>
        <Link
          to={next ? "/numerology/$slug" : "/numerology/mulank"}
          {...(next ? { params: { slug: next.slug } } : {})}
          className="block"
        >
          <GlassCard className="h-full p-4 text-right">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {next ? "Next" : "Back to"}
            </span>
            <span className="mt-1 block font-display text-sm">
              {next ? next.label : "The complete Mulank guide"}
            </span>
          </GlassCard>
        </Link>
      </nav>

      <KeepExploring
        links={[
          {
            to: "/numerology/mulank",
            label: "The complete Mulank guide",
            blurb:
              "How the birth number is calculated, what it rules, and all nine numbers side by side.",
          },
          {
            to: "/numerology",
            label: "Free Mulank calculator",
            blurb: "Get your Mulank, Personal Year and Personal Month in seconds.",
          },
          {
            to: "/guide/numerology",
            label: "How numerology is calculated",
            blurb: "The digit-reduction method behind every number on this site.",
          },
          {
            to: "/tarot",
            label: "All 78 tarot card meanings",
            blurb: "Explore the tarot archetypes that mirror each birth number.",
          },
        ]}
      />

      <CTASection
        title="Calculate your full numerology profile"
        body="Get your Mulank, Personal Year and Personal Month mapped to tarot archetypes — free, instant, and no signup required."
        ctaLabel="Open the free calculator"
        to="/numerology"
      />
    </ArticleLayout>
  );
}
