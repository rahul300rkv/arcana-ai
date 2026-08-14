import type { Spread, SpreadId } from "./types";

const pos = (index: number, name: string, meaning: string) => ({ index, name, meaning });

export const SPREADS: Record<SpreadId, Spread> = {
  single: {
    id: "single",
    name: "Single Card",
    description: "A focused message for this moment. Perfect for a quick check-in.",
    icon: "sparkle",
    count: 1,
    minutes: 3,
    positions: [pos(0, "Your Card", "The guidance meant for you now")],
  },
  "three-card": {
    id: "three-card",
    name: "Three Card",
    description: "See the arc of your situation across time.",
    icon: "hourglass",
    count: 3,
    minutes: 5,
    positions: [
      pos(0, "Past", "What has shaped you"),
      pos(1, "Present", "Where you stand now"),
      pos(2, "Future", "Where this is heading"),
    ],
  },
  love: {
    id: "love",
    name: "Love Reading",
    description: "Illuminate the dynamics between you and another.",
    icon: "heart",
    count: 4,
    minutes: 7,
    positions: [
      pos(0, "You", "Your energy in the relationship"),
      pos(1, "Partner", "Their energy in the relationship"),
      pos(2, "The Relationship", "The bond you share"),
      pos(3, "Future", "Where the connection is heading"),
    ],
  },
  career: {
    id: "career",
    name: "Career Reading",
    description: "Clarity on your work, path, and calling.",
    icon: "briefcase",
    count: 4,
    minutes: 7,
    positions: [
      pos(0, "Where you are", "Your current position"),
      pos(1, "Challenge", "What is holding you back"),
      pos(2, "Advice", "How to move forward"),
      pos(3, "Outcome", "Where this leads"),
    ],
  },
  money: {
    id: "money",
    name: "Money Reading",
    description: "Insight into finances, abundance, and flow.",
    icon: "coin",
    count: 4,
    minutes: 7,
    positions: [
      pos(0, "Current Flow", "Your money now"),
      pos(1, "Blockage", "What is restricting it"),
      pos(2, "Opportunity", "What is opening"),
      pos(3, "Outcome", "Where this leads"),
    ],
  },
  decision: {
    id: "decision",
    name: "Decision Making",
    description: "Weigh two paths and see beyond the choice.",
    icon: "scale",
    count: 5,
    minutes: 8,
    positions: [
      pos(0, "Situation", "The heart of the matter"),
      pos(1, "Option A", "The first path"),
      pos(2, "Option B", "The second path"),
      pos(3, "Hidden Factor", "What you are not seeing"),
      pos(4, "Guidance", "What the cards advise"),
    ],
  },
  "celtic-cross": {
    id: "celtic-cross",
    name: "Celtic Cross",
    description: "The classic ten-card spread for deep exploration.",
    icon: "cross",
    count: 10,
    minutes: 15,
    positions: [
      pos(0, "Present", "The heart of the matter"),
      pos(1, "Challenge", "What crosses you"),
      pos(2, "Foundation", "The root beneath"),
      pos(3, "Recent Past", "What is passing away"),
      pos(4, "Crown", "What is possible"),
      pos(5, "Near Future", "What is approaching"),
      pos(6, "Self", "How you see yourself"),
      pos(7, "Environment", "Outside influences"),
      pos(8, "Hopes & Fears", "What you hope for and fear"),
      pos(9, "Outcome", "The final direction"),
    ],
  },
  "year-ahead": {
    id: "year-ahead",
    name: "Year Ahead",
    description: "A card for each month of the coming year.",
    icon: "calendar",
    count: 12,
    minutes: 18,
    positions: Array.from({ length: 12 }, (_, i) =>
      pos(
        i,
        ["January","February","March","April","May","June","July","August","September","October","November","December"][i],
        `Guidance for month ${i + 1}`,
      ),
    ),
  },
};

export const SPREAD_LIST: Spread[] = Object.values(SPREADS);
export const getSpread = (id: SpreadId): Spread => SPREADS[id];
