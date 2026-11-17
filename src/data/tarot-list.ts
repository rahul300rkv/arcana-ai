import deckJson from "@/data/cards/deck.json";
import type { TarotCard } from "@/lib/tarot/types";

function slugifyName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const TAROT_CARD_LIST = (deckJson as TarotCard[]).map((c) => ({
  id: c.id,
  name: c.name,
  slug: slugifyName(c.name),
}));
