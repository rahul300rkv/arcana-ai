import { useMemo } from "react";
import { Link } from "@/components/LocalizedLink";
import { motion } from "framer-motion";
import { CalendarClock, Sparkles, Heart, Briefcase, Coins, Flame } from "@/components/icons";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { CardFront } from "@/components/tarot/CardFront";
import { DECK } from "@/lib/tarot/engine";
import type { TarotCard } from "@/lib/tarot/types";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { AuthorCard } from "@/components/AuthorCard";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { slugify } from "@/data/tarot";
import { getBcp47, useLanguage, useTranslate } from "@/lib/i18n";
import type { LocaleCode } from "@/locales";
import { BREADCRUMB_LABELS } from "@/locales/pages-seo";
import { GUIDE_COMMON, MEANINGS_GUIDE_I18N } from "@/locales/guides-tarot-i18n";
import {
  getLocalizedArcana,
  getLocalizedCardNameBySlug,
  getLocalizedElement,
  getLocalizedSuit,
} from "@/locales/card-terms";

const MEANINGS_FAQS_EN = [
  {
    question: "How many tarot cards are there?",
    answer:
      "A standard tarot deck has 78 cards: 22 Major Arcana trump cards tracing major life chapters from The Fool to The World, and 56 Minor Arcana cards split evenly across four elemental suits of 14 cards each.",
  },
  {
    question: "What does a reversed tarot card mean?",
    answer:
      "A reversed card usually softens, delays, blocks, or turns inward the upright archetype, signaling where energy feels internalized, resisted, or overdue for balanced adjustment rather than automatic doom.",
  },
  {
    question: "Which tarot deck are these meanings based on?",
    answer:
      "All meanings follow the classic 1909 Rider-Waite-Smith pictorial system illustrated by Pamela Colman Smith under Arthur Edward Waite, chosen for its clear narrative scenes across every pip card.",
  },
  {
    question: "How do the four Minor Arcana suits map to daily life?",
    answer:
      "Wands (Fire) track creativity, ambition, and courage; Cups (Water) trace relationships, intuition, and emotional depth; Swords (Air) dissect intellect, conflict, and candid truth; and Pentacles (Earth) anchor finances, physical health, craftsmanship, and steady security.",
  },
  {
    question: "Should beginners memorize keywords or read the card artwork first?",
    answer:
      "Always observe posture, color, gaze direction, and weather inside the illustration before consulting memorized keywords. Connecting visual cues directly to your spread question produces far sharper, less mechanical readings.",
  },
];

const SUIT_ORDER = ["wands", "cups", "swords", "pentacles"] as const;
const SUIT_ELEMENT_KEY: Record<(typeof SUIT_ORDER)[number], string> = {
  wands: "Fire",
  cups: "Water",
  swords: "Air",
  pentacles: "Earth",
};

function CardEntry({ card, language }: { card: TarotCard; language: LocaleCode }) {
  const t = useTranslate();
  const slug = slugify(card.name);
  const locName = getLocalizedCardNameBySlug(slug, card.name, language);
  const badgeText =
    card.arcana === "major"
      ? `${getLocalizedArcana("major", language)} · ${romanize(card.number)}`
      : `${getLocalizedSuit(card.suit, language)} · ${card.number}`;

  return (
    <div id={card.id} className="scroll-mt-28">
      <GlassCard className="group relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px 200px at var(--x,50%) 0%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 60%)",
          }}
        />
        <div className="relative grid gap-6 sm:grid-cols-[160px_1fr] sm:gap-7">
          <motion.div
            whileHover={{ y: -6, rotate: -1.5 }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
            className="mx-auto w-32 sm:mx-0 sm:w-40"
          >
            <div className="aspect-[2/3] w-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]">
              <CardFront card={card} />
            </div>
          </motion.div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl sm:text-2xl">
                <Link
                  to="/tarot/$slug"
                  params={{ slug }}
                  className="aurora-text hover:underline"
                >
                  {locName}
                </Link>
              </h3>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {badgeText}
              </span>
            </div>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {card.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-foreground/80"
                >
                  {k}
                </span>
              ))}
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[color-mix(in_oklab,var(--gold)_80%,white)]">
                  <Sparkles className="h-3 w-3" /> {t("tarotUi.upright")}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {card.uprightMeaning}.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[color-mix(in_oklab,var(--aurora-2)_75%,white)]">
                  <Sparkles className="h-3 w-3 rotate-180" /> {t("tarotUi.reversed")}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {card.reversedMeaning}.
                </p>
              </div>
            </div>

            <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              <MetaRow icon={Heart} label={t("tarotUi.loveHeading")} value={card.loveMeaning} />
              <MetaRow icon={Briefcase} label={t("tarotUi.careerHeading")} value={card.careerMeaning} />
              <MetaRow icon={Coins} label={t("tarotUi.moneyHeading")} value={card.financeMeaning} />
              <MetaRow icon={Flame} label={t("tarotUi.spiritualHeading")} value={card.spiritualityMeaning} />
            </dl>
            <div className="mt-3 pt-2 border-t border-white/10">
              <Link
                to="/tarot/$slug"
                params={{ slug }}
                className="text-xs font-semibold text-[var(--gold)] hover:underline"
              >
                {locName} — {t("tarotUi.uprightMeaning")} &amp; {t("tarotUi.reversedMeaning")} →
              </Link>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function MetaRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-2">
      <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color-mix(in_oklab,var(--gold)_75%,white)]" />
      <div className="min-w-0">
        <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</dt>
        <dd className="text-muted-foreground">{value}</dd>
      </div>
    </div>
  );
}

function romanize(n: number): string {
  const m: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  if (n === 0) return "0";
  let out = "",
    x = n;
  for (const [v, s] of m)
    while (x >= v) {
      out += s;
      x -= v;
    }
  return out;
}

export function GuideTarotCardMeaningsScreen() {
  const [language] = useLanguage();
  const t = useTranslate();
  const ui = MEANINGS_GUIDE_I18N[language];
  const bcp47 = getBcp47(language);

  const formatUtcDate = (iso: string) =>
    new Intl.DateTimeFormat(bcp47, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${iso}T00:00:00Z`));

  const major = useMemo(
    () => DECK.filter((c) => c.arcana === "major").sort((a, b) => a.number - b.number),
    [],
  );
  const bySuit = useMemo(
    () =>
      Object.fromEntries(
        SUIT_ORDER.map((suit) => [
          suit,
          DECK.filter((c) => c.suit === suit).sort((a, b) => a.number - b.number),
        ]),
      ),
    [],
  );

  const faqs = useMemo(() => {
    if (language === "en") return MEANINGS_FAQS_EN;
    return [
      { question: ui.card1Title, answer: `${ui.majorBody} ${ui.suitIntro.wands}` },
      { question: t("guideHub.faq4Q"), answer: t("guideHub.faq4A") },
      { question: t("guideHub.faq2Q"), answer: t("guideHub.faq2A") },
      { question: t("tarotHub.faq4Q"), answer: t("tarotHub.faq4A") },
    ];
  }, [language, ui, t]);

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-5xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: BREADCRUMB_LABELS.guides[language], to: "/guide" }, { label: ui.crumb }]} />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {GUIDE_COMMON.freeReference[language]}
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">
            {ui.titlePrefix} <span className="aurora-text">{ui.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            {ui.intro}{" "}
            <Link to="/reading" className="underline underline-offset-4 hover:text-foreground">
              {t("tarotUi.freeAiReading")} →
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              {t("common.published")} <time dateTime="2026-08-07">{formatUtcDate("2026-08-07")}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              {t("common.lastUpdated")} <time dateTime="2026-11-16">{formatUtcDate("2026-11-16")}</time>
            </span>
          </div>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6 space-y-3">
            <h2 className="font-display text-xl text-foreground">
              {ui.card1Title}
            </h2>
            {language === "en" ? (
              <>
                <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                  Understanding deck architecture eliminates brute rote memorization. The 22{" "}
                  <strong className="text-foreground">Major Arcana</strong> trump cards trace sweeping
                  developmental chapters (courage, disillusionment, moral choice, loss, and renewal),
                  marking turning points that outlast any single busy week. When several Major cards
                  dominate one spread, pay close attention: you are standing at a pivotal crossroads
                  rather than navigating ordinary administrative chores.
                </p>
                <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                  By contrast, the 56 <strong className="text-foreground">Minor Arcana</strong> cards
                  mirror daily texture across four classical elements: fiery Wands fuel creative
                  initiative, watery Cups hold shifting relationships, airy Swords sharpen candid
                  analysis, and earthy Pentacles ground real budgets, craft, and physical wellbeing.
                </p>
              </>
            ) : (
              <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                {t("tarotHub.t2Body")}
              </p>
            )}
          </GlassCard>

          <GlassCard className="p-6 space-y-3">
            <h2 className="font-display text-xl text-foreground">
              {ui.card2Title}
            </h2>
            {language === "en" ? (
              <>
                <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                  Inside every Minor suit, pip cards numbered Ace through Ten tell a continuous ten-step
                  story: Aces offer pure unshaped potential; Twos negotiate balance; Fives test
                  resilience under sudden disruption; Sixes restore constructive reciprocity; Eights
                  accelerate craft or speed; and Tens close cycles completely before renewal starts.
                </p>
                <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                  Above the tens sit four <strong className="text-foreground">Court Cards</strong>.
                  Pages embody curious learners or unexpected news, Knights rush outward with focused
                  drive, Queens steward elemental wisdom intuitively from within, and Kings govern
                  mature outward order. When any card lands{" "}
                  <strong className="text-foreground">reversed</strong>, check whether the theme is
                  delayed, internalized silently, blocked by hesitation, or tipped slightly past healthy
                  moderation.
                </p>
              </>
            ) : (
              <p className="text-base sm:text-[15px] leading-relaxed text-muted-foreground">
                {t("reading.reversedNotice")}
              </p>
            )}
          </GlassCard>
        </section>

        <nav className="mt-8 flex flex-wrap gap-2 text-sm">
          <a
            href="#major-arcana"
            className="inline-flex min-h-11 sm:min-h-0 items-center gap-1.5 rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-white/[0.03] px-4 py-2 sm:px-3.5 sm:py-1.5 transition hover:bg-white/[0.08] hover:shadow-glow-gold"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" aria-hidden />
            {ui.majorTitle}
          </a>
          {SUIT_ORDER.map((suit) => (
            <a
              key={suit}
              href={`#${suit}`}
              className="inline-flex min-h-11 sm:min-h-0 items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 sm:px-3.5 sm:py-1.5 transition hover:border-[color-mix(in_oklab,var(--gold)_30%,transparent)] hover:bg-white/[0.08]"
            >
              {getLocalizedSuit(suit, language)} ({getLocalizedElement(SUIT_ELEMENT_KEY[suit], language)})
            </a>
          ))}
        </nav>

        <section id="major-arcana" className="mt-16 scroll-mt-24">
          <SectionHeader
            eyebrow={ui.majorEyebrow}
            title={ui.majorTitle}
            body={ui.majorBody}
          />
          <div className="mt-8 grid gap-5">
            {major.map((card) => (
              <CardEntry key={card.id} card={card} language={language} />
            ))}
          </div>
        </section>

        {SUIT_ORDER.map((suit) => (
          <section key={suit} id={suit} className="mt-16 scroll-mt-24">
            <SectionHeader
              eyebrow={`14 ${ui.cardsCountWord} · ${getLocalizedElement(SUIT_ELEMENT_KEY[suit], language)}`}
              title={getLocalizedSuit(suit, language)}
              body={ui.suitIntro[suit]}
            />
            <div className="mt-8 grid gap-5">
              {bySuit[suit].map((card) => (
                <CardEntry key={card.id} card={card} language={language} />
              ))}
            </div>
          </section>
        ))}

        <section className="mt-16 space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl">{ui.faqTitle}</h2>
          <FAQAccordion items={faqs} />
        </section>

        <div className="mt-12">
          <KeepExploring
            links={[
              {
                to: "/tarot",
                label: t("tarotHub.crumb"),
                blurb: t("tarotHub.intro"),
              },
              {
                to: "/tarot/combinations",
                label: t("calcUi.comboCrumb"),
                blurb: t("lfeat.combos"),
              },
              {
                to: "/major-arcana-tarot-cards-meanings",
                label: t("guideHub.g6Title"),
                blurb: t("guideHub.g6Body"),
              },
              {
                to: "/what-do-reversed-tarot-cards-mean",
                label: t("guideHub.g5Title"),
                blurb: t("guideHub.g5Body"),
              },
              {
                to: "/guide/tarot-spreads",
                label: t("guideHub.g2Title"),
                blurb: t("guideHub.g2Body"),
              },
            ]}
          />
        </div>

        <div className="mt-12">
          <AuthorCard
            published="2026-08-07"
            lastUpdated="2026-11-16"
            category={ui.category}
            readingTime={`16 ${t("common.minRead")}`}
          />
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex min-h-12 sm:min-h-0 items-center text-base sm:text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {GUIDE_COMMON.backHome[language]}
          </Link>
        </div>
        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--gold)_60%,transparent))]" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-[color-mix(in_oklab,var(--gold)_80%,white)]">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">
        <span className="gold-text">{title}</span>
      </h2>
      <p className="mt-2 max-w-2xl text-base sm:text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
