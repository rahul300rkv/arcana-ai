import { ReadingLanding } from "@/components/tarot/ReadingLanding";
import {
  CELTIC_CROSS_CONFIG,
  LOVE_CONFIG,
  ONE_CARD_CONFIG,
  THREE_CARD_CONFIG,
} from "@/data/tarot-landings";
import { CareerTarotReadingScreen } from "./CareerTarotReadingScreen";
import { ThreeCardTarotScreen } from "./ThreeCardTarotScreen";
import { YesNoTarotScreen } from "./YesNoTarotScreen";

export function OneCardReadingScreen() {
  return <ReadingLanding config={ONE_CARD_CONFIG} />;
}

export function ThreeCardReadingScreen() {
  return <ThreeCardTarotScreen />;
}

export function LoveReadingScreen() {
  return <ReadingLanding config={LOVE_CONFIG} />;
}

export function YesNoReadingScreen() {
  return <YesNoTarotScreen />;
}

export function CareerReadingScreen() {
  return <CareerTarotReadingScreen />;
}

export function CelticCrossReadingScreen() {
  return <ReadingLanding config={CELTIC_CROSS_CONFIG} />;
}
