import { useCallback } from "react";
import { getLocale } from "@/locales";
import { enLocale, type TranslationKey } from "@/locales/en";
import { getStoredLanguage, setLanguage, useLanguage, type Language } from "./language";

export { getStoredLanguage, setLanguage, useLanguage, getBcp47, type Language, type TranslationKey };
import { getBcp47 } from "./language";

export function t(key: TranslationKey, lang: Language): string {
  const locale = getLocale(lang);
  const val = (locale.strings as Partial<Record<TranslationKey, string>>)[key];
  return val ?? enLocale.strings[key] ?? String(key);
}

export function useTranslate() {
  const [lang] = useLanguage();
  return useCallback((key: TranslationKey) => t(key, lang), [lang]);
}
