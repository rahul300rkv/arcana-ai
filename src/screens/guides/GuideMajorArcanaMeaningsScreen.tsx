import { useMemo } from "react";
import { Link } from "@/components/LocalizedLink";
import { Star, Layers, Compass, HelpCircle, BookOpen } from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { SITE_URL } from "@/lib/site";
import { useLanguage, useTranslate } from "@/lib/i18n";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";
import { MAJOR_GUIDE_I18N } from "@/locales/guides-tarot-i18n";
import { getLocalizedCardNameBySlug } from "@/locales/card-terms";

const PATH = "/major-arcana-tarot-cards-meanings";
const UPDATED = "2026-11-18";

interface MajorCard {
  number: number;
  roman: string;
  name: string;
  slug: string;
  archetype: string;
  keywords: string;
  reversedKeywords: string;
  meaning: string;
  example: string;
}

const MAJOR_ARCANA: MajorCard[] = [
  {
    number: 0,
    roman: "0",
    name: "The Fool",
    slug: "the-fool",
    archetype: "The Innocent",
    keywords: "New beginnings, leap of faith, innocence, spontaneity",
    reversedKeywords: "Recklessness, naivety, hesitation, poor judgment",
    meaning:
      "A leap into the unknown, taken with trust rather than a full plan. It marks the start of a journey before experience has shaped it.",
    example:
      "Someone quitting a stable job to travel or start a business with no fixed roadmap often draws The Fool, not recklessness, but a willingness to begin before every detail is certain.",
  },
  {
    number: 1,
    roman: "I",
    name: "The Magician",
    slug: "the-magician",
    archetype: "The Creator",
    keywords: "Manifestation, resourcefulness, personal power, action",
    reversedKeywords: "Manipulation, untapped talent, scattered focus, self-doubt",
    meaning:
      "Having every tool you need already in hand, and the will to use them. It's the card of turning an idea into a first concrete step.",
    example:
      "A person launching a side project with the exact skills, contacts, and time they need, but who hasn't started yet, often pulls this card as a nudge to act.",
  },
  {
    number: 2,
    roman: "II",
    name: "The High Priestess",
    slug: "the-high-priestess",
    archetype: "The Oracle",
    keywords: "Intuition, sacred knowledge, mystery, inner stillness",
    reversedKeywords: "Hidden secrets, ignored intuition, withdrawal, surface noise",
    meaning:
      "Knowledge that hasn't surfaced into logic yet: a gut feeling worth trusting even without proof.",
    example:
      "Someone who \"just knows\" a business partner isn't being upfront, despite no hard evidence, is often being pointed toward this card's message: trust the quiet signal before it becomes obvious.",
  },
  {
    number: 3,
    roman: "III",
    name: "The Empress",
    slug: "the-empress",
    archetype: "The Mother",
    keywords: "Abundance, nurturing, creativity, sensory fertility",
    reversedKeywords: "Creative block, dependence, overprotectiveness, stagnation",
    meaning: "Growth through care rather than force: fertility in the literal or creative sense.",
    example:
      "A creative project that's finally gaining momentum after a long incubation period, or a pregnancy, frequently draws The Empress in a reading about growth.",
  },
  {
    number: 4,
    roman: "IV",
    name: "The Emperor",
    slug: "the-emperor",
    archetype: "The Ruler",
    keywords: "Authority, structure, discipline, protective order",
    reversedKeywords: "Domination, rigidity, excessive control, stubbornness",
    meaning: "Stability built through rules, boundaries, and consistent leadership.",
    example:
      "Someone setting a strict budget after years of financial chaos, or stepping into a management role for the first time, commonly draws The Emperor.",
  },
  {
    number: 5,
    roman: "V",
    name: "The Hierophant",
    slug: "the-hierophant",
    archetype: "The Teacher",
    keywords: "Tradition, mentorship, shared belief, formal counsel",
    reversedKeywords: "Rebellion, breaking convention, personal doctrine, dogma",
    meaning: "Guidance through established systems: mentorship, formal education, or convention.",
    example:
      "A person considering a traditional path, such as a formal degree or a family-expected career, often sees The Hierophant as confirmation to work within the existing structure.",
  },
  {
    number: 6,
    roman: "VI",
    name: "The Lovers",
    slug: "the-lovers",
    archetype: "The Union",
    keywords: "Union, aligned values, conscious choice, partnership",
    reversedKeywords: "Disharmony, misaligned values, indecision, imbalance",
    meaning: "A meaningful connection, or a decision that hinges on personal values.",
    example:
      "Someone weighing two job offers where one pays more and the other fits their values better usually draws The Lovers as a prompt to choose based on alignment, not just logic.",
  },
  {
    number: 7,
    roman: "VII",
    name: "The Chariot",
    slug: "the-chariot",
    archetype: "The Victor",
    keywords: "Willpower, focused drive, victory, self-mastery",
    reversedKeywords: "Lack of direction, scattered force, burnout, aggression",
    meaning: "Forward motion achieved by holding two opposing forces in disciplined balance.",
    example:
      "A student juggling a demanding degree and a part-time job, pushing through by sheer determination, is a classic Chariot scenario: success through willpower, not ease.",
  },
  {
    number: 8,
    roman: "VIII",
    name: "Strength",
    slug: "strength",
    archetype: "The Tamer",
    keywords: "Courage, quiet patience, compassion, inner resilience",
    reversedKeywords: "Self-doubt, raw impulse, suppressed anger, fatigue",
    meaning: "Power that persuades rather than dominates: inner resilience over brute force.",
    example:
      "Calmly working through a conflict with a difficult family member, without losing your temper, is textbook Strength energy: control exercised through patience, not confrontation.",
  },
  {
    number: 9,
    roman: "IX",
    name: "The Hermit",
    slug: "the-hermit",
    archetype: "The Sage",
    keywords: "Solitude, introspection, inner lamp, discernment",
    reversedKeywords: "Isolation, loneliness, avoiding reflection, withdrawal",
    meaning: "Stepping back from noise to find an answer that only quiet reflection can surface.",
    example:
      "Someone taking a solo trip or a deliberate break from socialising after a big life change, in order to think clearly, is commonly reflected by The Hermit.",
  },
  {
    number: 10,
    roman: "X",
    name: "Wheel of Fortune",
    slug: "wheel-of-fortune",
    archetype: "The Turning",
    keywords: "Cycles, turning point, destiny, timing shift",
    reversedKeywords: "Resisting change, unexpected delay, repeating patterns",
    meaning:
      "A shift set in motion by forces outside your control: luck turning, for better or worse.",
    example:
      "An unexpected job offer, a sudden diagnosis, or a chance encounter that reroutes someone's plans all point to the Wheel: a turning point you didn't engineer yourself.",
  },
  {
    number: 11,
    roman: "XI",
    name: "Justice",
    slug: "justice",
    archetype: "The Judge",
    keywords: "Fairness, truth, accountability, cause and effect",
    reversedKeywords: "Unfairness, bias, dodging accountability, legal delay",
    meaning:
      "A situation resolving according to what's actually true and earned, not what's convenient.",
    example:
      "A legal dispute, contract negotiation, or a moment of being held accountable for a past decision often draws Justice: consequences catching up with their cause.",
  },
  {
    number: 12,
    roman: "XII",
    name: "The Hanged Man",
    slug: "the-hanged-man",
    archetype: "The Surrender",
    keywords: "Pause, surrender, new perspective, intentional waiting",
    reversedKeywords: "Needless stalling, martyrdom, resisting perspective, limbo",
    meaning:
      "Willingly stalling forward motion in order to see a situation from a completely different angle.",
    example:
      "Someone stuck on a decision who finally stops forcing an answer and just waits, and gains clarity from the waiting itself, is living The Hanged Man.",
  },
  {
    number: 13,
    roman: "XIII",
    name: "Death",
    slug: "death",
    archetype: "The Transformer",
    keywords: "Transformation, clean ending, renewal, rebirth",
    reversedKeywords: "Resistance to change, stagnation, delayed closure, fear",
    meaning: "A necessary ending that clears space for something new: almost never literal.",
    example:
      "The end of a long relationship, a career pivot, or the close of a life chapter that had clearly run its course is the classic, and most misunderstood, Death draw.",
  },
  {
    number: 14,
    roman: "XIV",
    name: "Temperance",
    slug: "temperance",
    archetype: "The Alchemist",
    keywords: "Balance, moderation, alchemy, steady patience",
    reversedKeywords: "Imbalance, excess, impatience, clashing extremes",
    meaning: "Blending opposing forces slowly and carefully until they work together.",
    example:
      "Someone learning to balance a demanding job with family time, adjusting gradually rather than overhauling everything at once, reflects Temperance's patient middle path.",
  },
  {
    number: 15,
    roman: "XV",
    name: "The Devil",
    slug: "the-devil",
    archetype: "The Shadow",
    keywords: "Attachment, temptation, shadow self, control",
    reversedKeywords: "Breaking free, reclaiming power, awakening, detachment",
    meaning:
      "A pattern, habit, or relationship that feels binding, even though the way out usually exists.",
    example:
      "Staying in a draining job purely out of comfort, or a habit that's become hard to break, is the everyday face of The Devil: self-imposed limits mistaken for the only option.",
  },
  {
    number: 16,
    roman: "XVI",
    name: "The Tower",
    slug: "the-tower",
    archetype: "The Awakening",
    keywords: "Sudden upheaval, truth revealed, structural collapse",
    reversedKeywords: "Averted shock, delayed reckoning, resisting upheaval",
    meaning:
      "A fast, disruptive collapse of something built on a shaky foundation: jarring, but clarifying.",
    example:
      "A sudden layoff, a relationship ending abruptly, or a plan falling apart overnight all fit The Tower: disruptive in the moment, but usually removing something that wasn't stable to begin with.",
  },
  {
    number: 17,
    roman: "XVII",
    name: "The Star",
    slug: "the-star",
    archetype: "The Hope",
    keywords: "Hope, renewal, quiet faith, serene inspiration",
    reversedKeywords: "Self-doubt, discouragement, blocked optimism, fatigue",
    meaning:
      "Calm optimism returning after a hard period: healing that's gentle rather than dramatic.",
    example:
      "The first sense of relief after a difficult breakup or illness, when things finally start feeling manageable again, is the moment The Star describes.",
  },
  {
    number: 18,
    roman: "XVIII",
    name: "The Moon",
    slug: "the-moon",
    archetype: "The Dreamer",
    keywords: "Illusion, subconscious fear, unclear path, intuition",
    reversedKeywords: "Revealed confusion, releasing anxiety, truth surfacing",
    meaning:
      "Uncertainty and unclear information: things aren't fully visible yet, and anxiety can fill the gap.",
    example:
      "Waiting on test results, a decision from someone else, or any situation where key facts are still hidden, often produces The Moon's foggy, anxious energy.",
  },
  {
    number: 19,
    roman: "XIX",
    name: "The Sun",
    slug: "the-sun",
    archetype: "The Radiance",
    keywords: "Joy, clarity, vitality, unmistakable success",
    reversedKeywords: "Dimmed confidence, delayed happiness, temporary burnout",
    meaning:
      "Clarity, confidence, and genuine good fortune: one of the most straightforwardly positive cards.",
    example:
      "A wedding, a long-awaited achievement, or simply a stretch of life where things are finally going well is the plain, uncomplicated territory of The Sun.",
  },
  {
    number: 20,
    roman: "XX",
    name: "Judgement",
    slug: "judgement",
    archetype: "The Reckoning",
    keywords: "Rebirth, inner calling, honest reckoning, absolution",
    reversedKeywords: "Harsh self-criticism, avoiding the call, doubt",
    meaning: "A moment of honest self-assessment that leads to a decisive change in direction.",
    example:
      "Reflecting on years in a career and finally admitting it's not the right fit, then acting on that realisation, is Judgement in practice: a wake-up call answered.",
  },
  {
    number: 21,
    roman: "XXI",
    name: "The World",
    slug: "the-world",
    archetype: "The Completion",
    keywords: "Completion, wholeness, integration, achievement",
    reversedKeywords: "Unfinished closure, near completion, loose ends",
    meaning: "A cycle closing successfully: everything that was in motion coming together.",
    example:
      "Graduating, completing a major project, or reaching a long-term goal after years of effort is the natural home of The World: an ending that's also an arrival.",
  },
];

const STAGE_RANGES: readonly [number, number][] = [
  [0, 7],
  [8, 14],
  [15, 21],
];

const FAQS_EN = [
  {
    question: "What makes a card part of the Major Arcana rather than the Minor Arcana?",
    answer:
      "The 22 Major Arcana are numbered 0 (The Fool) through 21 (The World) and represent significant, archetypal life themes rather than everyday events. The 56 Minor Arcana, split into four suits, describe more immediate, situational influences.",
  },
  {
    question: "Does drawing a lot of Major Arcana cards in one spread mean something?",
    answer:
      "Many readers treat a spread dominated by Major Arcana as a sign the question touches something significant (a real turning point rather than routine day-to-day matters) while a Minor-Arcana-heavy spread points to more immediate, practical circumstances.",
  },
  {
    question: "Are Death and The Tower always bad cards?",
    answer:
      "No. Both describe necessary, often overdue change rather than literal disaster. Death marks an ending that clears space for growth, and The Tower marks the fast collapse of something unstable: disruptive, but usually clarifying rather than purely negative.",
  },
  {
    question: "Is there a correct order to learn the Major Arcana in?",
    answer:
      "The numbered sequence (0 to 21) is often read as a symbolic journey (The Fool's Journey) where each card represents a stage of growth across three acts (0–7, 8–14, and 15–21). Learning them in that order builds intuitive structure.",
  },
  {
    question: "Do Major Arcana meanings change much when reversed?",
    answer:
      "The core theme stays the same, but reversed Major Arcana cards typically describe that theme as blocked, delayed, or turned inward rather than reversed outright: see AstroFree's dedicated guide to reversed tarot cards for the full method.",
  },
];

export function GuideMajorArcanaMeaningsScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const loc = MAJOR_GUIDE_I18N[language];

  const faqs = useMemo(() => {
    if (language === "en") return FAQS_EN;
    return [
      { question: loc.secWhatIs, answer: loc.whatIsParas.join(" ") },
      {
        question: loc.secJourney,
        answer: loc.stages.map((s) => `${s.stage} (${s.title}): ${s.summary}`).join(" "),
      },
      { question: loc.secUsing, answer: loc.usingPara },
    ];
  }, [language, loc]);

  return (
    <ArticleLayout
      crumbs={[{ label: BREADCRUMB_LABELS.guides[language], to: "/guide" }, { label: loc.crumb }]}
      eyebrow={loc.eyebrow}
      title={loc.title}
      intro={loc.intro}
      url={`${SITE_URL}${PATH}`}
      updated={UPDATED}
      readingMinutes={18}
      wordCount={4100}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <Star className="h-16 w-16 text-[var(--gold)]" strokeWidth={1.2} />
        </GlassCard>
      }
    >
      <ContentSection
        id="reference-table"
        title={loc.secTable}
        icon={Layers}
      >
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {loc.tableIntro}
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-xs uppercase tracking-[0.16em] text-[color:var(--gold)]">
                <th className="px-4 py-3.5">{loc.colNum}</th>
                <th className="px-4 py-3.5">{loc.colName}</th>
                <th className="px-4 py-3.5">{loc.colArchetype}</th>
                <th className="px-4 py-3.5">{loc.colUpright}</th>
                <th className="px-4 py-3.5">{loc.colReversed}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {MAJOR_ARCANA.map((c) => {
                const locName = getLocalizedCardNameBySlug(c.slug, c.name, language);
                return (
                  <tr key={c.slug} className="hover:bg-white/[0.02]">
                    <td className="whitespace-nowrap px-4 py-3 font-display text-[color:var(--gold)]">
                      {c.roman} ({c.number})
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-display text-base">
                      <Link
                        to="/tarot/$slug"
                        params={{ slug: c.slug }}
                        className="text-foreground underline underline-offset-4 hover:text-[color:var(--gold)]"
                      >
                        {locName}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                      {c.archetype}
                    </td>
                    <td className="px-4 py-3 text-foreground/90">{c.keywords}</td>
                    <td className="px-4 py-3 text-muted-foreground">{c.reversedKeywords}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <ContentSection
        id="fools-journey"
        title={loc.secJourney}
        icon={Compass}
      >
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {loc.journeyIntro}
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {loc.stages.map((stage, idx) => {
            const range = STAGE_RANGES[idx] ?? [0, 21];
            const groupCards = MAJOR_ARCANA.filter(
              (c) => c.number >= range[0] && c.number <= range[1],
            );
            return (
              <GlassCard key={stage.stage} className="flex flex-col p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
                  {stage.stage}
                </p>
                <h3 className="mt-1.5 font-display text-lg text-foreground">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-3">
                  {groupCards.map((c) => {
                    const locName = getLocalizedCardNameBySlug(c.slug, c.name, language);
                    return (
                      <li key={c.slug}>
                        <Link
                          to="/tarot/$slug"
                          params={{ slug: c.slug }}
                          className="inline-block rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/90 transition-colors hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold)]"
                        >
                          {c.roman}. {locName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </ContentSection>

      <ContentSection
        id="what-is-major-arcana"
        title={loc.secWhatIs}
        icon={BookOpen}
      >
        {loc.whatIsParas.map((para, i) => (
          <p
            key={para}
            className={`${i > 0 ? "mt-4 " : ""}text-sm leading-relaxed text-muted-foreground sm:text-base`}
          >
            {para}
          </p>
        ))}
      </ContentSection>

      <ContentSection id="cards" title={loc.secAll22} icon={Layers}>
        <div className="grid gap-4 sm:grid-cols-2">
          {MAJOR_ARCANA.map((c) => {
            const locName = getLocalizedCardNameBySlug(c.slug, c.name, language);
            return (
              <GlassCard key={c.slug} id={c.slug} className="scroll-mt-24 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg">
                    <Link
                      to="/tarot/$slug"
                      params={{ slug: c.slug }}
                      className="hover:text-[var(--gold)]"
                    >
                      {c.roman} ({c.number}). {locName}
                    </Link>
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {c.archetype}
                  </span>
                </div>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[var(--gold)]">
                  {c.keywords}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.meaning}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    {loc.realExampleLabel}{" "}
                  </span>
                  {c.example}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </ContentSection>

      <ContentSection id="using-examples" title={loc.secUsing} icon={Compass}>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {loc.usingPara}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <Link to="/guide/tarot-spreads" className="text-[var(--gold)] hover:underline">
            {t("guideHub.g2Title")} →
          </Link>
        </p>
      </ContentSection>

      <ContentSection id="faq" title={t("common.faqHeading")} icon={HelpCircle}>
        <FAQAccordion items={faqs} />
      </ContentSection>

      <KeepExploring
        links={[
          {
            to: "/what-do-reversed-tarot-cards-mean",
            label: t("guideHub.g5Title"),
            blurb: t("guideHub.g5Body"),
          },
          {
            to: "/career-tarot-reading",
            label: t("tarotHub.rt5Title"),
            blurb: t("tarotHub.rt5Body"),
          },
          {
            to: "/yes-no-tarot",
            label: t("tarotHub.rt4Title"),
            blurb: t("tarotHub.rt4Body"),
          },
          {
            to: "/tarot",
            label: t("tarotUi.all78Cards"),
            blurb: t("tarotHub.intro"),
          },
        ]}
      />

      <CTASection
        title={loc.ctaTitle}
        body={loc.ctaBody}
        ctaLabel={loc.ctaLabel}
        to="/reading"
      />
    </ArticleLayout>
  );
}
