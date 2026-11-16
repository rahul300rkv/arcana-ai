import type { UniqueCardCopy } from "./types";
import { MAJOR_UNIQUE } from "./major";
import { WANDS_UNIQUE } from "./wands";
import { CUPS_UNIQUE } from "./cups";
import { SWORDS_UNIQUE } from "./swords";
import { PENTACLES_UNIQUE } from "./pentacles";

export const UNIQUE_CARD_COPY: Record<string, UniqueCardCopy> = {
  ...MAJOR_UNIQUE,
  ...WANDS_UNIQUE,
  ...CUPS_UNIQUE,
  ...SWORDS_UNIQUE,
  ...PENTACLES_UNIQUE,
};
