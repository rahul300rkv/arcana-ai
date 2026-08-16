import { createFileRoute, notFound } from "@tanstack/react-router";
import {
  BookOpen,
  Briefcase,
  Coins,
  Compass,
  HeartHandshake,
  HelpCircle,
  HeartPulse,
  Lightbulb,
  MoonStar,
  NotebookPen,
  RefreshCw,
  Sparkles,
  Timer,
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
import { CardFront } from "@/components/tarot/CardFront";
import { getCardById } from "@/lib/tarot/engine";
import { getTarotPage, TAROT_PAGES, type TarotPage } from "@/data/tarot";
import { buildContentJsonLd, buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/tarot/$slug")({
  loader: ({ params }) => {
    const page = getTarotPage(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ params, loaderData }) => {
    const page = loaderData?.page;
    if (!page) {
      return { meta: [{ title: "Card not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/tarot/${params.slug}`;
    return {
      meta: buildContentMeta({
        path,
        title: page.title,
        description: page.description,
        keywords: page.keywords,
        image: page.image,
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
              image: page.image,
              updated: page.updated,
              crumbs: [
                { name: "Tarot Card Meanings", path: "/tarot" },
                { name: page.name, path },
              ],
              faqs: page.faqs,
            }),
          ),
        },
      ],
    };
  },
  component: TarotCardPage,
});

const VERDICT_LABEL = { yes: "Yes", no: "No", maybe: "Conditional" } as const;

function TarotCardPage() {
  const { page } = Route.useLoaderData() as { page: TarotPage };
  const card = getCardById(page.id);
  const path = `/tarot/${page.slug}`;
  const index = TAROT_PAGES.findIndex((p) => p.slug === page.slug);
  const prev = index > 0 ? TAROT_PAGES[index - 1] : undefined;
  const next = index >= 0 && index < TAROT_PAGES.length - 1 ? TAROT_PAGES[index + 1] : undefined;

  return (
    <ArticleLayout
      crumbs={[{ label: "Tarot Card Meanings", to: "/tarot" }, { label: page.name }]}
      eyebrow={`${page.arcanaLabel}${page.suit ? ` · ${page.suitLabel}` : ""}`}
      title={`${page.name} Tarot Card Meaning`}
      intro={page.overview[0]}
      url={`${SITE_URL}${path}`}
      updated={page.updated}
      readingMinutes={page.readingMinutes}
      wordCount={page.wordCount}
      aside={
        card ? (
          <div className="aspect-[2/3] w-full">
            <CardFront card={card} eager />
          </div>
        ) : null
      }
    >
      <ContentSection id="correspondences" title="Card at a glance" icon={Compass}>
        <InfoGrid
          items={[
            { label: "Card number", value: page.numberLabel },
            { label: "Arcana", value: page.arcanaLabel },
            { label: "Suit", value: page.suit ? page.suitLabel : "None (Major Arcana)" },
            { label: "Element", value: page.element },
            { label: "Planet", value: page.planet },
            { label: "Zodiac", value: page.zodiac },
            { label: "Archetype", value: page.archetype },
            { label: "Yes / No", value: VERDICT_LABEL[page.yesNo] },
            { label: "Keywords", value: page.cardKeywords.join(", ") },
          ]}
        />
      </ContentSection>

      <ContentSection id="overview" title="Overview" icon={BookOpen} paragraphs={page.overview} />

      <ContentSection id="meaning" title={`${page.name} meaning`} icon={Sparkles}>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">Upright meaning</h3>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {page.upright.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="flex items-center gap-2 font-display text-lg">
              <RefreshCw className="h-4 w-4" aria-hidden />
              Reversed meaning
            </h3>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {page.reversed.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection
        id="love"
        title="Love and relationships"
        icon={HeartHandshake}
        paragraphs={page.love}
      />
      <ContentSection
        id="career"
        title="Career and work"
        icon={Briefcase}
        paragraphs={page.career}
      />
      <ContentSection
        id="finance"
        title="Money and finances"
        icon={Coins}
        paragraphs={page.finance}
      />
      <ContentSection
        id="health"
        title="Health and wellbeing"
        icon={HeartPulse}
        paragraphs={page.health}
      />
      <ContentSection
        id="spiritual"
        title="Spiritual meaning"
        icon={MoonStar}
        paragraphs={page.spiritual}
      />

      <ContentSection id="yes-no" title="Yes or no?" icon={HelpCircle}>
        <GlassCard className="p-6">
          <p className="font-display text-3xl aurora-text">{VERDICT_LABEL[page.yesNo]}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{page.yesNoText}</p>
        </GlassCard>
      </ContentSection>

      <ContentSection id="timeline" title="Past, present and future positions" icon={Timer}>
        <div className="grid gap-4 sm:grid-cols-3">
          {page.timeline.map((t) => (
            <GlassCard key={t.label} className="p-5">
              <h3 className="font-display text-base text-[var(--gold)]">{t.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="advice" title="Advice from this card" icon={Lightbulb}>
        <ul className="space-y-3">
          {page.advice.map((a, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
              />
              {a}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection id="practice" title="Journal, meditation and affirmation" icon={NotebookPen}>
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg">Journal prompts</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {page.journalPrompts.map((p, i) => (
                <li key={i}>— {p}</li>
              ))}
            </ul>
          </GlassCard>
          <div className="space-y-4">
            <GlassCard className="p-6">
              <h3 className="font-display text-lg">Meditation</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {page.meditation}
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-display text-lg">Affirmation</h3>
              <p className="mt-3 text-sm italic leading-relaxed text-foreground/90">
                “{page.affirmation}”
              </p>
            </GlassCard>
          </div>
        </div>
      </ContentSection>

      <RelatedCards
        title="Related cards"
        items={page.relatedSlugs
          .map((slug) => getTarotPage(slug))
          .filter((p): p is NonNullable<typeof p> => Boolean(p))
          .map((p) => ({
            slug: p.slug,
            name: p.name,
            subtitle: p.cardKeywords.join(", "),
            image: p.image,
            base: "/tarot/$slug" as const,
          }))}
      />

      <ContentSection id="faq" title="Frequently asked questions" icon={HelpCircle}>
        <FAQAccordion items={page.faqs} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/tarot",
            label: "All 78 tarot card meanings",
            blurb: "Browse the complete Rider–Waite–Smith library with search and suit filters.",
          },
          {
            to: "/guide/tarot-spreads",
            label: "Tarot spreads explained",
            blurb: `See which spread places ${page.name} in the most useful position.`,
          },
          {
            to: "/guide/tarot-card-meanings",
            label: "Quick meanings cheat sheet",
            blurb: "Upright and reversed keywords for the whole deck on one page.",
          },
          {
            to: "/numerology",
            label: "Mulank numerology calculator",
            blurb: "Pair this card's archetype with your Personal Year and Month numbers.",
          },
        ]}
      />

      <PrevNextNav
        base="/tarot/$slug"
        hubTo="/tarot"
        hubLabel="All 78 tarot cards"
        prev={prev ? { slug: prev.slug, label: prev.name } : undefined}
        next={next ? { slug: next.slug, label: next.name } : undefined}
      />

      <CTASection
        title="Try a free AI tarot reading"
        body={`Pull ${page.name} in a real spread and get a personalised interpretation for your own question — no signup, no card details, in under a minute.`}
        ctaLabel="Start your free reading"
        to="/reading"
      />
    </ArticleLayout>
  );
}
