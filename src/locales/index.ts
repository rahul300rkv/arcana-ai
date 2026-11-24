import { enLocale, type TranslationKey } from "./en";
import { hiLocale } from "./hi";
import { hinglishLocale } from "./hinglish";
import { bnLocale } from "./bn";
import { teLocale } from "./te";
import { mrLocale } from "./mr";
import { taLocale } from "./ta";
import { guLocale } from "./gu";
import { knLocale } from "./kn";
import { mlLocale } from "./ml";
import { paLocale } from "./pa";
import { orLocale } from "./or";
import { asLocale } from "./as";
import type { LocaleCode, LocaleMeta, PartialLocaleDefinition } from "./types";

export type { LocaleCode, LocaleMeta, PartialLocaleDefinition, TranslationKey };

export const ALL_LOCALES = [
  enLocale,
  hiLocale,
  hinglishLocale,
  bnLocale,
  teLocale,
  mrLocale,
  taLocale,
  guLocale,
  knLocale,
  mlLocale,
  paLocale,
  orLocale,
  asLocale,
] as const;

export type LocaleEntry = (typeof ALL_LOCALES)[number];

export const LOCALES_BY_CODE: Record<LocaleCode, LocaleEntry> = {
  en: enLocale,
  hi: hiLocale,
  hinglish: hinglishLocale,
  bn: bnLocale,
  te: teLocale,
  mr: mrLocale,
  ta: taLocale,
  gu: guLocale,
  kn: knLocale,
  ml: mlLocale,
  pa: paLocale,
  or: orLocale,
  as: asLocale,
};

export const SUPPORTED_LANGUAGES: readonly LocaleCode[] = ALL_LOCALES.map(
  (locale) => locale.meta.code,
);

/** Language selector options fed directly from each language's .ts module. */
export const LANGUAGE_OPTIONS: { value: LocaleCode; label: string }[] = ALL_LOCALES.map(
  (locale) => ({
    value: locale.meta.code,
    label: locale.meta.label,
  }),
);

export const NON_ENGLISH_LOCALES = ALL_LOCALES.filter(
  (locale) => locale.meta.routePrefix !== null,
);

export const LOCALES_BY_PREFIX: Record<string, LocaleEntry> = Object.fromEntries(
  NON_ENGLISH_LOCALES.map((locale) => [locale.meta.routePrefix as string, locale]),
);

/** Pillar routes mirrored across every localized /$lang prefix and sitemap.xml. */
export const LOCALIZED_PILLAR_PATHS = [
  "/",
  "/tarot",
  "/numerology",
  "/numerology/mulank",
  "/reading",
  "/guide",
  "/about",
] as const;

const MIRRORED_PATH_SET = new Set<string>(LOCALIZED_PILLAR_PATHS);

export function getLocale(code: LocaleCode): LocaleEntry {
  return LOCALES_BY_CODE[code] ?? enLocale;
}

export function getLocaleByPrefix(prefix: string | undefined | null): LocaleEntry | null {
  if (!prefix) return null;
  return LOCALES_BY_PREFIX[prefix] ?? null;
}

export function getLocaleFromPath(pathname: string): LocaleEntry {
  const clean = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const seg = clean.split("/")[1];
  return getLocaleByPrefix(seg) ?? enLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const clean = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const parts = clean.split("/");
  const first = parts[1];
  if (first && LOCALES_BY_PREFIX[first]) {
    const rest = "/" + parts.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/+$/, "") || "/";
  }
  return clean || "/";
}

export function isMirroredLocalizedPath(pathname: string): boolean {
  const stripped = stripLocalePrefix(pathname);
  return stripped !== "/hi" && !stripped.startsWith("/hi/") && stripped !== "/sitemap.xml";
}

export function localizePath(basePath: string, code: LocaleCode): string {
  const stripped = stripLocalePrefix(basePath);
  const locale = getLocale(code);
  if (!locale.meta.routePrefix) {
    return stripped === "" ? "/" : stripped;
  }
  const prefix = `/${locale.meta.routePrefix}`;
  if (stripped === "/") return prefix;
  return `${prefix}${stripped.startsWith("/") ? stripped : `/${stripped}`}`;
}

export function getAllHreflangLinks(
  basePath: string,
  siteUrl: string,
): Array<{ rel: "alternate"; hrefLang: string; href: string }> {
  const stripped = stripLocalePrefix(basePath);
  const links: Array<{ rel: "alternate"; hrefLang: string; href: string }> = ALL_LOCALES.map((locale) => {
    const localized = localizePath(stripped, locale.meta.code);
    const href = localized === "/" ? siteUrl : `${siteUrl}${localized}`;
    return {
      rel: "alternate" as const,
      hrefLang: locale.meta.bcp47 as string,
      href,
    };
  });
  const enHref = stripped === "/" ? siteUrl : `${siteUrl}${stripped}`;
  links.push({
    rel: "alternate" as const,
    hrefLang: "x-default",
    href: enHref,
  });
  return links;
}
