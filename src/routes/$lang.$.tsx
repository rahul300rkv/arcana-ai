import type { ComponentType } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { t } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/language";
import { buildContentJsonLd, buildContentMeta, buildPageJsonLd } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getAllHreflangLinks, getLocaleByPrefix, localizePath } from "@/locales";
import type { SpreadId } from "@/lib/tarot/types";

const VALID_SPREADS = new Set<string>([
  "single",
  "three-card",
  "love",
  "career",
  "money",
  "decision",
  "celtic-cross",
  "year-ahead",
]);

const STATIC_SCREEN_SEO: Record<
  string,
  { title: string; description: string; keywords: string[]; section?: string }
> = {
  privacy: {
    title: "Privacy Policy | AstroFree",
    description:
      "How AstroFree collects, uses, and protects your data, including our use of cookies and advertising.",
    keywords: ["astrofree privacy policy", "tarot app data privacy", "local storage tarot journal"],
    section: "Legal",
  },
  terms: {
    title: "Terms of Use | AstroFree",
    description:
      "Terms governing the use of AstroFree's tarot readings, numerology calculators, and interpretive guides.",
    keywords: ["astrofree terms of service", "tarot reading terms of use"],
    section: "Legal",
  },
  disclaimer: {
    title: "Disclaimer | AstroFree",
    description:
      "AstroFree offers reflective tarot and Vedic numerology readings for self-discovery, not professional medical, legal, or financial advice.",
    keywords: ["astrofree disclaimer", "tarot reading reflective guidance disclaimer"],
    section: "Legal",
  },
  "editorial-policy": {
    title: "Editorial Policy & Interpretive Methodology | AstroFree",
    description:
      "How AstroFree researches, writes, and maintains 78 tarot card meanings, spreads, and Vedic numerology (Ank Shastra) guides.",
    keywords: ["astrofree editorial policy", "tarot research methodology", "ank shastra sources"],
    section: "Editorial",
  },
  "cookie-policy": {
    title: "Cookie Policy | AstroFree",
    description:
      "Details about browser storage, cookies, and ad preferences used on AstroFree.",
    keywords: ["astrofree cookie policy", "tarot app browser storage"],
    section: "Legal",
  },
  contact: {
    title: "Contact AstroFree",
    description:
      "Get in touch with the AstroFree team for feedback, partnerships, corrections, or privacy inquiries.",
    keywords: ["contact astrofree", "astrofree support"],
  },
  dashboard: {
    title: "Dashboard | AstroFree",
    description: "Your personal AstroFree tarot reading dashboard, daily card, and reading streaks.",
    keywords: ["astrofree dashboard", "daily tarot card draw"],
  },
  journal: {
    title: "Tarot Journal | AstroFree",
    description: "Review your saved tarot readings and personal card reflections in one private journal.",
    keywords: ["tarot journal", "saved tarot readings"],
  },
  profile: {
    title: "Profile | AstroFree",
    description: "Manage your AstroFree profile and reading history.",
    keywords: ["astrofree profile"],
  },
  settings: {
    title: "Settings | AstroFree",
    description: "Customize your language, theme, and privacy preferences on AstroFree.",
    keywords: ["astrofree settings", "tarot language selector"],
  },
  "bhagyank-calculator": {
    title: "Bhagyank Calculator: Destiny Number & Life Path | AstroFree",
    description:
      "Calculate your Bhagyank (Destiny Number) from your full date of birth and discover your ruling planet, strengths, and career path.",
    keywords: ["bhagyank calculator", "destiny number calculator", "life path number vedic", "ank shastra"],
    section: "Numerology",
  },
  "namank-calculator": {
    title: "Namank Calculator: Chaldean Name Number | AstroFree",
    description:
      "Calculate your Namank (Name Number) using Vedic & Chaldean numerology to check letter vibrations and compatibility with Mulank.",
    keywords: ["namank calculator", "chaldean name numerology calculator", "name number compatibility"],
    section: "Numerology",
  },
  "yes-no-tarot": {
    title: "Yes or No Tarot Reading: Free Instant Oracle | AstroFree",
    description:
      "Draw a free Yes or No tarot card for instant upright or reversed clarity on love, career, and life decisions.",
    keywords: ["yes or no tarot", "yes no tarot reading", "free yes or no tarot oracle"],
    section: "Tarot Spreads",
  },
  "tarot/yes-no": {
    title: "Yes or No Tarot Reading: Free Instant Oracle | AstroFree",
    description:
      "Draw a free Yes or No tarot card for instant upright or reversed clarity on love, career, and life decisions.",
    keywords: ["yes or no tarot", "yes no tarot reading", "free yes or no tarot oracle"],
    section: "Tarot Spreads",
  },
  "career-tarot-reading": {
    title: "Free Career Tarot Reading & Work Guidance | AstroFree",
    description:
      "Draw a 3-card Career Tarot spread for guidance on job changes, promotions, finances, and vocational purpose.",
    keywords: ["career tarot reading", "job tarot spread", "free career tarot"],
    section: "Tarot Spreads",
  },
  "tarot/career": {
    title: "Free Career Tarot Reading & Work Guidance | AstroFree",
    description:
      "Draw a 3-card Career Tarot spread for guidance on job changes, promotions, finances, and vocational purpose.",
    keywords: ["career tarot reading", "job tarot spread", "free career tarot"],
    section: "Tarot Spreads",
  },
  "major-arcana-tarot-cards-meanings": {
    title: "Major Arcana Tarot Cards Meanings (0–XXI) | AstroFree",
    description:
      "Complete guide to all 22 Major Arcana tarot cards from The Fool to The World, including upright and reversed interpretations.",
    keywords: ["major arcana tarot cards meanings", "22 major arcana cards", "fools journey tarot"],
    section: "Tarot Guides",
  },
  "guide/major-arcana-meanings": {
    title: "Major Arcana Tarot Cards Meanings (0–XXI) | AstroFree",
    description:
      "Complete guide to all 22 Major Arcana tarot cards from The Fool to The World, including upright and reversed interpretations.",
    keywords: ["major arcana tarot cards meanings", "22 major arcana cards", "fools journey tarot"],
    section: "Tarot Guides",
  },
  "what-do-reversed-tarot-cards-mean": {
    title: "What Do Reversed Tarot Cards Mean? Complete Guide | AstroFree",
    description:
      "Learn how to interpret reversed tarot cards clearly across love, career, and yes/no readings without fear.",
    keywords: ["reversed tarot cards meaning", "upside down tarot card meanings", "how to read reversals"],
    section: "Tarot Guides",
  },
  "guide/reversed-tarot-cards": {
    title: "What Do Reversed Tarot Cards Mean? Complete Guide | AstroFree",
    description:
      "Learn how to interpret reversed tarot cards clearly across love, career, and yes/no readings without fear.",
    keywords: ["reversed tarot cards meaning", "upside down tarot card meanings", "how to read reversals"],
    section: "Tarot Guides",
  },
  "tarot/one-card": {
    title: "One Card Tarot Reading: Free Daily Card Pull | AstroFree",
    description:
      "Draw one tarot card for a focused, free AI-guided reading for daily check-ins, yes/no clarity, or reflection.",
    keywords: ["one card tarot reading", "single card tarot pull", "card of the day reading"],
    section: "Tarot Spreads",
  },
  "tarot/three-card": {
    title: "Three Card Tarot Reading: Past, Present & Future | AstroFree",
    description:
      "Draw a free 3-card tarot spread for Past, Present, Future or Situation, Challenge, Advice.",
    keywords: ["three card tarot reading", "past present future tarot spread", "3 card tarot"],
    section: "Tarot Spreads",
  },
  "tarot/love": {
    title: "Free Love Tarot Reading: Relationships & Clarity | AstroFree",
    description:
      "Pull a free love tarot spread to explore relationship dynamics, mutual feelings, and emotional clarity.",
    keywords: ["love tarot reading", "relationship tarot spread", "free love tarot"],
    section: "Tarot Spreads",
  },
  "tarot/celtic-cross": {
    title: "Free Celtic Cross Tarot Reading (10-Card Spread) | AstroFree",
    description:
      "Draw a complete 10-card Celtic Cross tarot reading with upright and reversed interpretations.",
    keywords: ["celtic cross tarot reading", "10 card tarot spread", "free celtic cross reading"],
    section: "Tarot Spreads",
  },
  "tarot/combinations": {
    title: "Tarot Card Combinations Meanings Library | AstroFree",
    description:
      "Explore powerful 2-card tarot combinations and interactive card pairing synthesis for love, career, and decisions.",
    keywords: ["tarot card combinations", "tarot pair meanings", "two card tarot synthesis"],
    section: "Tarot",
  },
  "numerology/compatibility": {
    title: "Mulank & Bhagyank Compatibility Matrix (81 Pairs) | AstroFree",
    description:
      "Check how your Mulank (Birth Number) and Bhagyank (Destiny Number) interact across all 81 Vedic numerology combinations.",
    keywords: ["mulank bhagyank compatibility", "81 numerology combinations", "vedic compatibility chart"],
    section: "Numerology",
  },
  "numerology/bhagyank": {
    title: "Bhagyank (Destiny Number) Guide 1–9 | AstroFree",
    description:
      "Complete Vedic numerology guide to Bhagyank numbers 1 through 9, calculation formula, and life path meanings.",
    keywords: ["bhagyank guide", "destiny number 1 to 9 meanings", "vedic bhagyank"],
    section: "Numerology",
  },
  "numerology/namank": {
    title: "Namank (Name Number) Guide & Chaldean Chart | AstroFree",
    description:
      "Learn how Namank works in Chaldean and Vedic numerology, letter values, and name-number harmony.",
    keywords: ["namank guide", "chaldean alphabet numerology chart", "name number meaning"],
    section: "Numerology",
  },
  "reading/question": {
    title: "Ask Your Question | Free Tarot Reading | AstroFree",
    description: "Set your intention and choose a spread for your free AI-guided tarot reading.",
    keywords: ["ask tarot question", "ai tarot reading"],
  },
  "reading/shuffle": {
    title: "Shuffle & Draw Cards | AstroFree",
    description: "Shuffle the 78-card deck and draw your cards intuitively.",
    keywords: ["shuffle tarot cards", "draw tarot cards"],
  },
  "reading/reveal": {
    title: "Reveal Your Tarot Cards | AstroFree",
    description: "Flip your drawn tarot cards and uncover upright or reversed insights.",
    keywords: ["reveal tarot cards"],
  },
  "reading/result": {
    title: "Your Tarot Reading Interpretation | AstroFree",
    description: "Read your full AI-guided tarot reading synthesis and save it to your journal.",
    keywords: ["tarot reading interpretation"],
  },
  "guide/celtic-cross-guide": {
    title: "Celtic Cross Tarot Spread Guide (All 10 Positions) | AstroFree",
    description:
      "Step-by-step guide to reading every position in the classic 10-card Celtic Cross tarot spread.",
    keywords: ["celtic cross guide", "10 card tarot positions", "how to read celtic cross"],
    section: "Tarot Guides",
  },
  "guide/mulank-vs-bhagyank": {
    title: "Mulank vs Bhagyank: Key Differences Explained | AstroFree",
    description:
      "Understand the difference between Mulank (Birth Number) and Bhagyank (Destiny Number) in Vedic Ank Shastra.",
    keywords: ["mulank vs bhagyank", "birth number vs destiny number", "ank shastra comparison"],
    section: "Numerology Guides",
  },
  "guide/numerology": {
    title: "Vedic Numerology (Ank Shastra) Complete Guide | AstroFree",
    description:
      "Learn Mulank, Bhagyank, Namank, Personal Year cycles, and how Vedic numbers map to tarot archetypes.",
    keywords: ["vedic numerology guide", "ank shastra complete guide", "mulank bhagyank namank"],
    section: "Numerology Guides",
  },
  "guide/tarot-card-meanings": {
    title: "Tarot Card Meanings Quick Reference Guide | AstroFree",
    description:
      "Fast reference guide to all 78 Major and Minor Arcana tarot cards, upright and reversed.",
    keywords: ["tarot card meanings cheat sheet", "78 tarot cards quick reference"],
    section: "Tarot Guides",
  },
  "guide/tarot-for-beginners": {
    title: "Tarot for Beginners: How to Read Tarot Cards | AstroFree",
    description:
      "A clear, practical beginner's guide to tarot structure, suits, reversals, and reading for yourself.",
    keywords: ["tarot for beginners", "how to read tarot cards", "beginner tarot guide"],
    section: "Tarot Guides",
  },
  "guide/tarot-spreads": {
    title: "Best Tarot Spreads & Layouts Guide | AstroFree",
    description:
      "Compare 1-card, 3-card, love, career, and 10-card Celtic Cross tarot spreads and when to use each.",
    keywords: ["best tarot spreads", "tarot card layouts guide", "how to choose a tarot spread"],
    section: "Tarot Guides",
  },
};

const STATIC_SCREEN_LOADERS: Record<string, () => Promise<ComponentType<any>>> = {
  privacy: () => import("@/screens/PrivacyScreen").then((m) => m.PrivacyScreen),
  terms: () => import("@/screens/TermsScreen").then((m) => m.TermsScreen),
  disclaimer: () => import("@/screens/DisclaimerScreen").then((m) => m.DisclaimerScreen),
  "editorial-policy": () =>
    import("@/screens/EditorialPolicyScreen").then((m) => m.EditorialPolicyScreen),
  "cookie-policy": () =>
    import("@/screens/CookiePolicyScreen").then((m) => m.CookiePolicyScreen),
  contact: () => import("@/screens/ContactScreen").then((m) => m.ContactScreen),
  dashboard: () => import("@/screens/DashboardScreen").then((m) => m.DashboardScreen),
  journal: () => import("@/screens/JournalScreen").then((m) => m.JournalScreen),
  profile: () => import("@/screens/ProfileScreen").then((m) => m.ProfileScreen),
  settings: () => import("@/screens/SettingsScreen").then((m) => m.SettingsScreen),
  "bhagyank-calculator": () =>
    import("@/screens/BhagyankCalculatorScreen").then((m) => m.BhagyankCalculatorScreen),
  "namank-calculator": () =>
    import("@/screens/NamankCalculatorScreen").then((m) => m.NamankCalculatorScreen),
  "yes-no-tarot": () =>
    import("@/screens/TarotLandingScreens").then((m) => m.YesNoReadingScreen),
  "tarot/yes-no": () =>
    import("@/screens/TarotLandingScreens").then((m) => m.YesNoReadingScreen),
  "career-tarot-reading": () =>
    import("@/screens/TarotLandingScreens").then((m) => m.CareerReadingScreen),
  "tarot/career": () =>
    import("@/screens/TarotLandingScreens").then((m) => m.CareerReadingScreen),
  "major-arcana-tarot-cards-meanings": () =>
    import("@/screens/guides/GuideMajorArcanaMeaningsScreen").then(
      (m) => m.GuideMajorArcanaMeaningsScreen,
    ),
  "guide/major-arcana-meanings": () =>
    import("@/screens/guides/GuideMajorArcanaMeaningsScreen").then(
      (m) => m.GuideMajorArcanaMeaningsScreen,
    ),
  "what-do-reversed-tarot-cards-mean": () =>
    import("@/screens/guides/GuideReversedTarotCardsScreen").then(
      (m) => m.GuideReversedTarotCardsScreen,
    ),
  "guide/reversed-tarot-cards": () =>
    import("@/screens/guides/GuideReversedTarotCardsScreen").then(
      (m) => m.GuideReversedTarotCardsScreen,
    ),
  "tarot/one-card": () =>
    import("@/screens/TarotLandingScreens").then((m) => m.OneCardReadingScreen),
  "tarot/three-card": () =>
    import("@/screens/TarotLandingScreens").then((m) => m.ThreeCardReadingScreen),
  "tarot/love": () =>
    import("@/screens/TarotLandingScreens").then((m) => m.LoveReadingScreen),
  "tarot/celtic-cross": () =>
    import("@/screens/TarotLandingScreens").then((m) => m.CelticCrossReadingScreen),
  "tarot/combinations": () =>
    import("@/screens/TarotCombinationsHubScreen").then((m) => m.TarotCombinationsHubScreen),
  "numerology/compatibility": () =>
    import("@/screens/MulankCompatibilityHubScreen").then(
      (m) => m.MulankCompatibilityHubScreen,
    ),
  "numerology/bhagyank": () =>
    import("@/screens/BhagyankHubScreen").then((m) => m.BhagyankHubScreen),
  "numerology/namank": () =>
    import("@/screens/NamankHubScreen").then((m) => m.NamankHubScreen),
  "reading/question": () =>
    import("@/screens/ReadingQuestionScreen").then((m) => m.ReadingQuestionScreen),
  "reading/shuffle": () =>
    import("@/screens/ReadingShuffleScreen").then((m) => m.ReadingShuffleScreen),
  "reading/reveal": () =>
    import("@/screens/ReadingRevealScreen").then((m) => m.ReadingRevealScreen),
  "reading/result": () =>
    import("@/screens/ReadingResultScreen").then((m) => m.ReadingResultScreen),
  "guide/celtic-cross-guide": () =>
    import("@/screens/guides/GuideCelticCrossScreen").then((m) => m.GuideCelticCrossScreen),
  "guide/mulank-vs-bhagyank": () =>
    import("@/screens/guides/GuideMulankVsBhagyankScreen").then(
      (m) => m.GuideMulankVsBhagyankScreen,
    ),
  "guide/numerology": () =>
    import("@/screens/guides/GuideNumerologyScreen").then((m) => m.GuideNumerologyScreen),
  "guide/tarot-card-meanings": () =>
    import("@/screens/guides/GuideTarotCardMeaningsScreen").then(
      (m) => m.GuideTarotCardMeaningsScreen,
    ),
  "guide/tarot-for-beginners": () =>
    import("@/screens/guides/GuideTarotForBeginnersScreen").then(
      (m) => m.GuideTarotForBeginnersScreen,
    ),
  "guide/tarot-spreads": () =>
    import("@/screens/guides/GuideTarotSpreadsScreen").then((m) => m.GuideTarotSpreadsScreen),
};

const screenCache = new Map<string, ComponentType<any>>();

async function loadScreen(key: string, loaderFn: () => Promise<ComponentType<any>>) {
  if (!screenCache.has(key)) {
    const Comp = await loaderFn();
    screenCache.set(key, Comp);
  }
}

function normalizeSplat(raw: string | undefined): string {
  return (raw ?? "").replace(/^\/+|\/+$/g, "");
}

export const Route = createFileRoute("/$lang/$" as any)({
  validateSearch: (s: Record<string, unknown>) => ({
    spread:
      typeof s.spread === "string" && VALID_SPREADS.has(s.spread)
        ? (s.spread as SpreadId)
        : undefined,
    id: typeof s.id === "string" ? s.id : undefined,
    dob:
      typeof s.dob === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s.dob) ? s.dob : undefined,
    period:
      typeof s.period === "string" || typeof s.period === "number" ? s.period : undefined,
  }),
  loader: async ({ params }: { params: { lang: string; _splat?: string } }) => {
    const locale = getLocaleByPrefix(params.lang);
    if (!locale) throw notFound();

    const sub = normalizeSplat(params._splat);
    if (!sub) throw notFound();

    const staticLoader = STATIC_SCREEN_LOADERS[sub];
    if (staticLoader) {
      await loadScreen(sub, staticLoader);
      const seo = STATIC_SCREEN_SEO[sub];
      const titleSuffix = ` (${locale.meta.nativeName})`;
      return {
        locale,
        kind: "static" as const,
        sub,
        screenKey: sub,
        title: seo ? `${seo.title}${titleSuffix}` : t("seo.home.title", locale.meta.code),
        description: seo ? seo.description : t("seo.home.desc", locale.meta.code),
        keywords: seo?.keywords ?? ["astrofree", locale.meta.englishName, sub],
        section: seo?.section,
      };
    }

    if (sub.startsWith("tarot/combinations/")) {
      const slug = sub.slice("tarot/combinations/".length);
      if (slug && !slug.includes("/")) {
        const [{ getTarotCombination }] = await Promise.all([
          import("@/data/tarot-combinations"),
          loadScreen("__tarot_combo__", () =>
            import("@/screens/TarotCombinationScreen").then((m) => m.TarotCombinationScreen),
          ),
        ]);
        const combo = getTarotCombination(slug);
        if (combo) {
          return {
            locale,
            kind: "tarot-combo" as const,
            sub,
            screenKey: "__tarot_combo__",
            combo,
            title: `${combo.title} (${locale.meta.nativeName})`,
            description: combo.description,
            keywords: [...combo.keywords, locale.meta.englishName],
          };
        }
      }
    }

    if (sub.startsWith("tarot/")) {
      const slug = sub.slice("tarot/".length);
      if (slug && !slug.includes("/")) {
        const [{ getTarotPage }] = await Promise.all([
          import("@/data/tarot"),
          loadScreen("__tarot_card__", () =>
            import("@/screens/TarotCardScreen").then((m) => m.TarotCardScreen),
          ),
        ]);
        const page = getTarotPage(slug);
        if (page) {
          return {
            locale,
            kind: "tarot-card" as const,
            sub,
            screenKey: "__tarot_card__",
            page,
            title: `${page.title} (${locale.meta.nativeName})`,
            description: page.description,
            keywords: [...page.keywords, locale.meta.englishName],
          };
        }
      }
    }

    if (sub.startsWith("numerology/")) {
      const slug = sub.slice("numerology/".length);
      if (slug && !slug.includes("/")) {
        const [{ getMulankBhagyankPair }, { getMulankPage }, { getNumerologyPage }] =
          await Promise.all([
            import("@/data/mulank-bhagyank-pairs"),
            import("@/data/mulank"),
            import("@/data/numerology"),
            loadScreen("__numerology_num__", () =>
              import("@/screens/NumerologyNumberScreen").then((m) => m.NumerologyNumberScreen),
            ),
          ]);
        const pair = getMulankBhagyankPair(slug);
        if (pair) {
          return {
            locale,
            kind: "numerology" as const,
            sub,
            screenKey: "__numerology_num__",
            pair,
            mulank: undefined,
            page: undefined,
            title: `${pair.title} (${locale.meta.nativeName})`,
            description: pair.description,
            keywords: [...pair.keywords, locale.meta.englishName],
          };
        }
        const mulank = getMulankPage(slug);
        if (mulank) {
          return {
            locale,
            kind: "numerology" as const,
            sub,
            screenKey: "__numerology_num__",
            pair: undefined,
            mulank,
            page: undefined,
            title: `${mulank.title} (${locale.meta.nativeName})`,
            description: mulank.description,
            keywords: [...mulank.keywords, locale.meta.englishName],
          };
        }
        const page = getNumerologyPage(slug);
        if (page) {
          return {
            locale,
            kind: "numerology" as const,
            sub,
            screenKey: "__numerology_num__",
            pair: undefined,
            mulank: undefined,
            page,
            title: `${page.title} (${locale.meta.nativeName})`,
            description: page.description,
            keywords: [...page.keywords, locale.meta.englishName],
          };
        }
      }
    }

    throw notFound();
  },
  head: ({
    loaderData,
    params,
  }: {
    loaderData?: any;
    params: { lang: string; _splat?: string };
  }) => {
    const locale = loaderData?.locale ?? getLocaleByPrefix(params.lang);
    const sub = loaderData?.sub ?? normalizeSplat(params._splat);
    if (!locale || !sub) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    const code = locale.meta.code;
    const basePath = `/${sub}`;
    const path = localizePath(basePath, code);
    const title = loaderData?.title ?? "AstroFree";
    const description = loaderData?.description ?? t("seo.home.desc", code);
    const homeLabel = t("nav.home", code);

    let jsonLd: Record<string, unknown>;
    let image: string | undefined;

    if (loaderData?.kind === "tarot-card" && loaderData.page) {
      const p = loaderData.page;
      image = p.image;
      jsonLd = buildContentJsonLd({
        path,
        title,
        description,
        image: p.image,
        updated: p.updated,
        inLanguage: locale.meta.bcp47,
        homeLabel,
        section: p.arcanaLabel,
        keywords: p.keywords,
        about: [
          p.name,
          p.arcanaLabel,
          ...(p.suit ? [p.suitLabel] : []),
          p.element,
          p.planet,
          "Rider-Waite-Smith Tarot",
        ],
        crumbs: [
          { name: t("nav.tarot", code), path: localizePath("/tarot", code) },
          { name: p.name, path },
        ],
        faqs: p.faqs,
      });
    } else if (loaderData?.kind === "tarot-combo" && loaderData.combo) {
      const c = loaderData.combo;
      image = c.cardA.image;
      jsonLd = buildContentJsonLd({
        path,
        title,
        description,
        image: c.cardA.image,
        updated: c.updated,
        inLanguage: locale.meta.bcp47,
        homeLabel,
        section: "Tarot Combinations",
        keywords: c.keywords,
        about: [c.cardA.name, c.cardB.name, "Tarot Card Combinations"],
        crumbs: [
          { name: t("nav.tarot", code), path: localizePath("/tarot", code) },
          { name: "Combinations", path: localizePath("/tarot/combinations", code) },
          { name: `${c.cardA.name} + ${c.cardB.name}`, path },
        ],
        faqs: c.faqs,
      });
    } else if (loaderData?.kind === "numerology") {
      const item = loaderData.pair ?? loaderData.mulank ?? loaderData.page;
      const itemName = loaderData.pair
        ? `Mulank ${loaderData.pair.mulank} × Bhagyank ${loaderData.pair.bhagyank}`
        : (item?.label ?? sub);
      jsonLd = buildContentJsonLd({
        path,
        title,
        description,
        updated: item?.updated ?? "2026-11-19",
        inLanguage: locale.meta.bcp47,
        homeLabel,
        section: "Vedic Numerology (Ank Shastra)",
        keywords: item?.keywords,
        about: [itemName, "Vedic Numerology (Ank Shastra)", "Mulank", "Bhagyank"],
        crumbs: [
          { name: t("numerology.navLabel", code), path: localizePath("/numerology", code) },
          { name: itemName, path },
        ],
        faqs: item?.faqs ?? [],
      });
    } else {
      jsonLd = buildPageJsonLd({
        path,
        title,
        description,
        inLanguage: locale.meta.bcp47,
        homeLabel,
        keywords: loaderData?.keywords,
        about: loaderData?.section ? [loaderData.section, "AstroFree"] : undefined,
        crumbs: [{ name: title.replace(/\s*\|.*$/, ""), path }],
        article: loaderData?.section
          ? { updated: "2026-11-24", section: loaderData.section }
          : undefined,
      });
    }

    return {
      meta: buildContentMeta({
        path,
        title,
        description,
        image,
        exactTitle: true,
        locale: locale.meta.ogLocale,
        keywords: loaderData?.keywords ?? ["astrofree", locale.meta.englishName, sub],
      }),
      links: [
        { rel: "canonical", href: `${SITE_URL}${path}` },
        ...getAllHreflangLinks(basePath, SITE_URL),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonLd),
        },
      ],
    };
  },
  component: LangSplatComponent,
});

function LangSplatComponent() {
  const data = Route.useLoaderData();
  const Screen = screenCache.get(data.screenKey);
  if (!Screen) return null;

  return (
    <LocaleProvider lang={data.locale.meta.code}>
      <Screen />
    </LocaleProvider>
  );
}
