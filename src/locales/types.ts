export type LocaleCode =
  | "en"
  | "hi"
  | "hinglish"
  | "bn"
  | "te"
  | "mr"
  | "ta"
  | "gu"
  | "kn"
  | "ml"
  | "pa"
  | "or"
  | "as";

export type Language = LocaleCode;

export interface LocaleMeta {
  code: LocaleCode;
  /** URL path prefix for localized routes (null for English root "/"). */
  routePrefix: string | null;
  /** Valid BCP-47 tag for <html lang="...">, hreflang, and JSON-LD inLanguage. */
  bcp47: string;
  /** Open Graph og:locale value (e.g. "en_US", "hi_IN"). */
  ogLocale: string;
  /** Option label shown inside every language selector. */
  label: string;
  /** Native language name. */
  nativeName: string;
  /** English language name. */
  englishName: string;
}

export interface LocaleDefinition<K extends string = string> {
  meta: LocaleMeta;
  strings: Record<K, string>;
}

export interface PartialLocaleDefinition<K extends string = string> {
  meta: LocaleMeta;
  strings: Partial<Record<K, string>>;
}
