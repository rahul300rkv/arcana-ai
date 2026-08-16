import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Briefcase,
  Coins,
  Compass,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  Lightbulb,
  MoonStar,
  NotebookPen,
  Sparkles,
  Users,
} from "lucide-react";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { InfoGrid } from "@/components/content/InfoGrid";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { RelatedCards } from "@/components/content/RelatedCards";
import { PrevNextNav } from "@/components/content/PrevNextNav";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { getNumerologyPage, NUMEROLOGY_PAGES, type NumerologyPage } from "@/data/numerology";
import { getMulankPage, type MulankPage } from "@/data/mulank";
import { MulankArticle } from "@/components/content/MulankArticle";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/numerology/$slug")({
  loader: ({ params }) => {
    const mulank = getMulankPage(params.slug);
    if (mulank) return { page: undefined, mulank };
    const page = getNumerologyPage(params.slug);
    if (!page) throw notFound();
    return { page, mulank: undefined };
  },
  head: ({ params, loaderData }) => {
    const page = loaderData?.page;
    const mulank = loaderData?.mulank;
    if (mulank) {
      const mPath = `/numerology/${params.slug}`;
      return {
        meta: buildContentMeta({
          path: mPath,
          title: mulank.title,
          description: mulank.description,
          keywords: mulank.keywords,
        }),
        links: [{ rel: "canonical", href: `${SITE_URL}${mPath}` }],
        scripts: [
          {
            type: "application/ld+json",
            children: JSON.stringify(
              buildContentJsonLd({
                path: mPath,
                title: mulank.title,
                description: mulank.description,
                updated: mulank.updated,
                crumbs: [
                  { name: "Numerology", path: "/numerology" },
                  { name: "Mulank", path: "/numerology/mulank" },
                  { name: mulank.label, path: mPath },
                ],
                faqs: mulank.faqs,
              }),
            ),
          },
        ],
      };
    }
    if (!page) {
      return { meta: [{ title: "Number not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/numerology/${params.slug}`;
    return {
      meta: buildContentMeta({
        path,
        title: page.title,
        description: page.description,
        keywords: page.keywords,
      }),
      links: [{ rel: "canonical", href: `${SITE_URL}${path}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildContentJsonLd({
              path,
              title: page.title,
              description: page.description,
              updated: page.updated,
              crumbs: [
                { name: "Numerology", path: "/numerology" },
                { name: page.label, path },
              ],
              faqs: page.faqs,
            }),
          ),
        },
      ],
    };
  },
  component: NumerologyNumberPage,
});

const VERDICT_LABEL = {
  high: "Highly compatible",
  medium: "Workable",
  growth: "Growth pairing",
} as const;

function NumerologyNumberPage() {
  const data = Route.useLoaderData() as {
    page?: NumerologyPage;
    mulank?: MulankPage;
  };
  if (data.mulank) return <MulankArticle page={data.mulank} />;
  const page = data.page as NumerologyPage;
  const path = `/numerology/${page.slug}`;
  const index = NUMEROLOGY_PAGES.findIndex((p) => p.slug === page.slug);
  const prev = index > 0 ? NUMEROLOGY_PAGES[index - 1] : undefined;
  const next =
    index >= 0 && index < NUMEROLOGY_PAGES.length - 1 ? NUMEROLOGY_PAGES[index + 1] : undefined;

  return (
    <ArticleLayout
      crumbs={[{ label: "Numerology", to: "/numerology" }, { label: page.label }]}
      eyebrow={page.isMaster ? "Master Number" : "Life Path Number"}
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
      <ContentSection id="correspondences" title="Number at a glance" icon={Compass}>
        <InfoGrid
          items={[
            { label: "Number", value: String(page.number) },
            { label: "Archetype", value: page.archetype },
            { label: "Ruling planet", value: page.planet },
            { label: "Element", value: page.element },
            { label: "Tarot archetype", value: page.tarotCard },
            { label: "Lucky colours", value: page.luckyColours.join(", ") },
            { label: "Lucky days", value: page.luckyDays.join(", ") },
            { label: "Lucky numbers", value: page.luckyNumbers.join(", ") },
            { label: "Type", value: page.isMaster ? "Master Number" : "Root Number" },
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

      <ContentSection id="career" title="Career and work" icon={Briefcase} paragraphs={page.career}>
        <div className="flex flex-wrap gap-2">
          {page.careerPaths.map((c) => (
            <span key={c} className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection
        id="relationships"
        title="Love and relationships"
        icon={HeartHandshake}
        paragraphs={page.relationships}
      />
      <ContentSection
        id="marriage"
        title="Marriage and family"
        icon={Users}
        paragraphs={page.marriage}
      />
      <ContentSection id="money" title="Money and finances" icon={Coins} paragraphs={page.money} />
      <ContentSection
        id="health"
        title="Health and wellbeing"
        icon={HeartPulse}
        paragraphs={page.health}
      />
      <ContentSection
        id="spiritual"
        title="Spiritual path"
        icon={MoonStar}
        paragraphs={page.spiritual}
      />

      <ContentSection
        id="compatibility"
        title="Compatibility with other numbers"
        icon={HeartHandshake}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {page.compatibility.map((c) => (
            <GlassCard key={c.number} className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-base">Number {c.number}</h3>
                <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]">
                  {VERDICT_LABEL[c.verdict]}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="lessons" title="Life lessons" icon={Lightbulb}>
        <ul className="space-y-3">
          {page.lifeLessons.map((l, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
              />
              {l}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection id="famous" title="Famous people with this number" icon={Users}>
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

      <RelatedCards
        title="Related numbers"
        items={page.relatedSlugs
          .map((slug) => getNumerologyPage(slug))
          .filter((p): p is NumerologyPage => Boolean(p))
          .map((p) => ({
            slug: p.slug,
            name: p.label,
            subtitle: p.archetype,
            base: "/numerology/$slug" as const,
          }))}
      />

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={page.faqs} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/numerology",
            label: "Free Mulank calculator",
            blurb: "Get your root number, Personal Year and Personal Month in seconds.",
          },
          {
            to: "/guide/numerology",
            label: "How numerology is calculated",
            blurb:
              "The digit-reduction method behind every number on this site, worked through step by step.",
          },
          {
            to: "/tarot",
            label: "All 78 tarot card meanings",
            blurb: "Explore the tarot archetypes that mirror each life path number.",
          },
          {
            to: "/guide",
            label: "The AstroFree guide library",
            blurb: "Spreads, card meanings and numerology fundamentals in one place.",
          },
        ]}
      />

      <PrevNextNav
        base="/numerology/$slug"
        hubTo="/numerology"
        hubLabel="All numerology numbers"
        prev={prev ? { slug: prev.slug, label: prev.label } : undefined}
        next={next ? { slug: next.slug, label: next.label } : undefined}
      />

      <CTASection
        title="Calculate your own numerology forecast"
        body={`Get your Mulank, Personal Year and Personal Month mapped to tarot archetypes — free, instant, and no signup required.`}
        ctaLabel="Open the free calculator"
        to="/numerology"
      />
    </ArticleLayout>
  );
}
