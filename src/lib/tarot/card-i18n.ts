import type { Language } from "@/lib/i18n";
import { cardMeaningTranslations } from "@/data/cards/deck-i18n";
import type { TarotCard } from "./types";

/**
 * Per-card upright/reversed meanings are translated for Hindi and Hinglish
 * (src/data/cards/deck-i18n.ts). The other 10 supported languages (Bengali,
 * Telugu, Marathi, Tamil, Gujarati, Kannada, Malayalam, Punjabi, Odia,
 * Assamese) fall back to English for these two fields — translating all 78
 * cards accurately into 10 more scripts is a larger follow-on content
 * project. The surrounding sentence templates in interpret.ts (and the
 * free-form AI-generated readings from ai.server.ts) are fully localized
 * for all 13 languages, so most of the reading is still in the user's
 * chosen language regardless; only this specific meaning phrase falls back.
 */
export function getCardMeaning(card: TarotCard, reversed: boolean, lang: Language): string {
  if (lang === "hi" || lang === "hinglish") {
    const translation = cardMeaningTranslations[card.id]?.[lang];
    if (translation) return reversed ? translation.reversed : translation.upright;
  }
  return reversed ? card.reversedMeaning : card.uprightMeaning;
}
