import { ReadingLanding } from "@/components/tarot/ReadingLanding";
import {
  CAREER_CONFIG,
  CELTIC_CROSS_CONFIG,
  LOVE_CONFIG,
  ONE_CARD_CONFIG,
  THREE_CARD_CONFIG,
  YES_NO_CONFIG,
} from "@/data/tarot-landings";

export function OneCardReadingScreen() {
  return <ReadingLanding config={ONE_CARD_CONFIG} />;
}

export function ThreeCardReadingScreen() {
  return <ReadingLanding config={THREE_CARD_CONFIG} />;
}

export function LoveReadingScreen() {
  return <ReadingLanding config={LOVE_CONFIG} />;
}

export function YesNoReadingScreen() {
  return <ReadingLanding config={YES_NO_CONFIG} />;
}

export function CareerReadingScreen() {
  return <ReadingLanding config={CAREER_CONFIG} />;
}

export function CelticCrossReadingScreen() {
  return <ReadingLanding config={CELTIC_CROSS_CONFIG} />;
}
