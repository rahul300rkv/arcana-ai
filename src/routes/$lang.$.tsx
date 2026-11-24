import type { ComponentType } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { t } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/language";
import { buildContentMeta } from "@/lib/content-seo";
import { SITE_URL } from "@/lib/site";
import { getLocaleByPrefix, localizePath } from "@/locales";
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
      return {
        locale,
        kind: "static" as const,
        sub,
        screenKey: sub,
        title: t("seo.home.title", locale.meta.code),
        description: t("seo.home.desc", locale.meta.code),
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
            title: combo.title,
            description: combo.description,
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
            title: page.title,
            description: page.description,
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
            title: pair.title,
            description: pair.description,
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
            title: mulank.title,
            description: mulank.description,
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
            title: page.title,
            description: page.description,
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
    loaderData?: { locale: any; sub: string; title: string; description: string };
    params: { lang: string; _splat?: string };
  }) => {
    const locale = loaderData?.locale ?? getLocaleByPrefix(params.lang);
    const sub = loaderData?.sub ?? normalizeSplat(params._splat);
    if (!locale || !sub) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    const basePath = `/${sub}`;
    const path = localizePath(basePath, locale.meta.code);
    return {
      meta: buildContentMeta({
        path,
        title: loaderData?.title ?? "AstroFree",
        description: loaderData?.description ?? t("seo.home.desc", locale.meta.code),
        exactTitle: true,
        locale: locale.meta.ogLocale,
        keywords: ["astrofree", locale.meta.englishName, sub],
      }),
      links: [{ rel: "canonical", href: `${SITE_URL}${basePath}` }],
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
