export type PairHarmony = "synergy" | "balanced" | "dynamic";

export interface MulankBhagyankProfile {
  slug: string;
  mulank: number;
  bhagyank: number;
  title: string;
  description: string;
  keywords: string[];
  headline: string;
  archetypeTitle: string;
  mulankPlanet: string;
  bhagyankPlanet: string;
  harmony: PairHarmony;
  harmonyLabel: string;
  score: number;
  summary: string;
  innerVsOuter: string[];
  careerAlignment: string[];
  careerRoles: string[];
  loveDynamics: string[];
  moneyAndTiming: string[];
  remedies: string[];
  luckyColours: string[];
  luckyDays: string[];
  tarotBridge: {
    mulankCard: string;
    mulankTarotSlug: string;
    bhagyankCard: string;
    bhagyankTarotSlug: string;
    synthesis: string;
  };
  faqs: { question: string; answer: string }[];
  updated: string;
}

export const PAIRS_UPDATED = "2026-11-19";

interface NumberEssence {
  number: number;
  planet: string;
  shortPlanet: string;
  dates: string;
  innerDrive: string;
  destinyPull: string;
  element: string;
  gift: string;
  blindSpot: string;
  careers: string[];
  loveNeed: string;
  remedy: string;
  colours: string[];
  days: string[];
  tarotName: string;
  tarotSlug: string;
  friends: number[];
  challenges: number[];
}

const ESSENCE: Record<number, NumberEssence> = {
  1: {
    number: 1,
    planet: "Sun (Surya)",
    shortPlanet: "Surya",
    dates: "1, 10, 19, 28",
    innerDrive: "autonomy, decisive initiative, and visible personal ownership",
    destinyPull: "stepping into independent leadership and pioneering unfamiliar territory",
    element: "Fire",
    gift: "crisp executive courage and unwillingness to drift passively",
    blindSpot: "impatience with slower collaborators and brittle pride when uncredited",
    careers: ["Founder & Managing Director", "Administrative Leadership", "Surgical & Clinical Lead"],
    loveNeed: "direct respect, loyal warmth, and clear personal boundaries without games",
    remedy: "Offer clean water from a copper vessel to the morning sun on Sundays and share credit generously with juniors.",
    colours: ["Sun gold", "Amber"],
    days: ["Sunday", "Monday"],
    tarotName: "The Magician",
    tarotSlug: "the-magician",
    friends: [1, 2, 3, 9],
    challenges: [4, 8],
  },
  2: {
    number: 2,
    planet: "Moon (Chandra)",
    shortPlanet: "Chandra",
    dates: "2, 11, 20, 29",
    innerDrive: "emotional attunement, diplomacy, and thoughtful mediation",
    destinyPull: "building trust-centered alliances, healing environments, and intuitive craft",
    element: "Water",
    gift: "reading unspoken room dynamics and sustaining calm dialogue",
    blindSpot: "second-guessing clear instincts to keep fragile peace",
    careers: ["Psychology & Counseling", "Editorial & Design Direction", "People Operations & Diplomacy"],
    loveNeed: "emotional transparency, gentle reassurance, and a calm home atmosphere",
    remedy: "Keep a consistent sleep window, drink from a silver or clean glass vessel on Mondays, and speak boundaries early.",
    colours: ["Pearl white", "Silver"],
    days: ["Monday", "Sunday"],
    tarotName: "The High Priestess",
    tarotSlug: "the-high-priestess",
    friends: [1, 2, 4, 7],
    challenges: [5, 8],
  },
  3: {
    number: 3,
    planet: "Jupiter (Guru)",
    shortPlanet: "Guru",
    dates: "3, 12, 21, 30",
    innerDrive: "optimism, teaching, moral clarity, and expressive expansion",
    destinyPull: "mentorship, institutional growth, publishing, and advisory authority",
    element: "Ether / Fire",
    gift: "articulating complex truths cleanly while lifting room morale",
    blindSpot: "scattering focus across too many promising projects at once",
    careers: ["Advisory & Wealth Strategy", "Higher Education & Publishing", "Legal & Policy Counsel"],
    loveNeed: "shared intellectual curiosity, humor, and ethical respect",
    remedy: "Honor mentors and teachers every Thursday, finish one flagship commitment before adding the next, and favor clean yellow or cream tones.",
    colours: ["Saffron yellow", "Warm cream"],
    days: ["Thursday", "Tuesday"],
    tarotName: "The Empress",
    tarotSlug: "the-empress",
    friends: [1, 3, 6, 9],
    challenges: [4, 8],
  },
  4: {
    number: 4,
    planet: "Rahu (North Node)",
    shortPlanet: "Rahu",
    dates: "4, 13, 22, 31",
    innerDrive: "systematic analysis, skepticism of hype, and unconventional problem-solving",
    destinyPull: "architecting resilient infrastructure, technical mastery, and disruptive reform",
    element: "Earth / Air",
    gift: "spotting structural flaws before they collapse and outlasting surface trends",
    blindSpot: "over-rigidness in debate and lingering distrust during transitions",
    careers: ["Systems Architecture & Engineering", "Quantitative Research", "Industrial Operations"],
    loveNeed: "steadfast reliability, honest speech, and room to decompress mentally",
    remedy: "Keep workspaces tidy, honor Wednesday planning rituals, and soften blunt feedback with calm context.",
    colours: ["Electric blue", "Slate grey"],
    days: ["Saturday", "Wednesday"],
    tarotName: "The Emperor",
    tarotSlug: "the-emperor",
    friends: [4, 5, 7, 8],
    challenges: [1, 3],
  },
  5: {
    number: 5,
    planet: "Mercury (Budha)",
    shortPlanet: "Budha",
    dates: "5, 14, 23",
    innerDrive: "curiosity, quick commercial wit, adaptability, and freedom of movement",
    destinyPull: "connecting markets, media, technology, and diverse networks at pace",
    element: "Air / Earth",
    gift: "translating ideas rapidly across audiences and pivoting smoothly under pressure",
    blindSpot: "restless distraction that abandons projects right before compounding payoff",
    careers: ["Product Strategy & Growth", "Venture & Equity Trading", "Communications & Media"],
    loveNeed: "playful banter, novelty, and personal breathing room without jealousy",
    remedy: "Write three non-negotiable weekly priorities every Wednesday and spend time outdoors away from screens.",
    colours: ["Emerald green", "Ivory"],
    days: ["Wednesday", "Friday"],
    tarotName: "The Hierophant",
    tarotSlug: "the-hierophant",
    friends: [1, 4, 5, 6],
    challenges: [2, 9],
  },
  6: {
    number: 6,
    planet: "Venus (Shukra)",
    shortPlanet: "Shukra",
    dates: "6, 15, 24",
    innerDrive: "aesthetic harmony, relational care, warmth, and sensory quality",
    destinyPull: "stewardship of home, creative commerce, hospitality, and community beauty",
    element: "Earth / Water",
    gift: "turning ordinary environments into welcoming, high-trust spaces",
    blindSpot: "over-extending to please everyone until quiet resentment builds",
    careers: ["Design & Architecture", "Hospitality & Luxury Brand Building", "Healthcare & Wellness"],
    loveNeed: "affectionate consistency, shared beauty at home, and mutual appreciation",
    remedy: "Keep Friday evening rituals sacred for beauty and gratitude, and track luxury spending against long-term savings.",
    colours: ["Rose ivory", "Pastel blue"],
    days: ["Friday", "Wednesday"],
    tarotName: "The Lovers",
    tarotSlug: "the-lovers",
    friends: [3, 5, 6, 9],
    challenges: [7, 8],
  },
  7: {
    number: 7,
    planet: "Ketu (South Node)",
    shortPlanet: "Ketu",
    dates: "7, 16, 25",
    innerDrive: "deep inquiry, solitude, intuitive verification, and distaste for noise",
    destinyPull: "original research, spiritual discernment, and specialized mastery",
    element: "Water / Ether",
    gift: "piercing through superficial spin to find root truth",
    blindSpot: "withdrawing into isolation instead of explaining what you actually need",
    careers: ["Deep Research & Data Science", "Cybersecurity & Forensics", "Philosophy & Holistic Practice"],
    loveNeed: "quiet respect for private recharge time paired with sincere mental depth",
    remedy: "Journal weekly insights without self-judgment, care for stray animals, and schedule grounded social check-ins.",
    colours: ["Soft gold", "Misty green"],
    days: ["Monday", "Wednesday"],
    tarotName: "The Chariot",
    tarotSlug: "the-chariot",
    friends: [2, 4, 7, 9],
    challenges: [6, 8],
  },
  8: {
    number: 8,
    planet: "Saturn (Shani)",
    shortPlanet: "Shani",
    dates: "8, 17, 26",
    innerDrive: "endurance, accountability, institutional discipline, and long-horizon focus",
    destinyPull: "stewarding scale, law, finance, and enduring structures that mature after age 32",
    element: "Earth",
    gift: "composure during long setbacks that break faster, flashier peers",
    blindSpot: "emotional austerity and mistaking heavy struggle for the only honest path",
    careers: ["Corporate Finance & Law", "Real Estate & Infrastructure", "Operations & Governance"],
    loveNeed: "loyal partnership anchored in shared responsibility and unhurried presence",
    remedy: "Serve elders and working staff respectfully on Saturdays, guard rest strictly, and let warmth show at home.",
    colours: ["Midnight navy", "Charcoal"],
    days: ["Saturday", "Friday"],
    tarotName: "Justice",
    tarotSlug: "justice",
    friends: [4, 5, 8],
    challenges: [1, 3, 6],
  },
  9: {
    number: 9,
    planet: "Mars (Mangal)",
    shortPlanet: "Mangal",
    dates: "9, 18, 27",
    innerDrive: "protective courage, physical stamina, idealism, and decisive action",
    destinyPull: "championing humanitarian causes, bold turnarounds, and resilient service",
    element: "Fire",
    gift: "stepping into crisis rooms calmly and finishing hard chapters cleanly",
    blindSpot: "sharp temper when ideals meet bureaucratic delay",
    careers: ["Emergency Medicine & Surgery", "Defense, Policy & Civic Action", "Construction & Athletics"],
    loveNeed: "fierce mutual loyalty, physical vitality, and non-defensive repair after arguments",
    remedy: "Channel excess Martian heat through vigorous morning exercise on Tuesdays and pause 24 hours before sharp replies.",
    colours: ["Crimson", "Coral saffron"],
    days: ["Tuesday", "Thursday"],
    tarotName: "The Hermit",
    tarotSlug: "the-hermit",
    friends: [1, 3, 6, 9],
    challenges: [5, 8],
  },
};

function getHarmony(m: number, b: number): { harmony: PairHarmony; label: string; score: number } {
  if (m === b) {
    return {
      harmony: "synergy",
      label: "Pure Amplification (Same Planet)",
      score: 88,
    };
  }
  const mEss = ESSENCE[m];
  const bEss = ESSENCE[b];
  const mLikesB = mEss.friends.includes(b);
  const bLikesM = bEss.friends.includes(m);
  const mChallengesB = mEss.challenges.includes(b);
  const bChallengesM = bEss.challenges.includes(m);

  if (mLikesB && bLikesM) {
    return { harmony: "synergy", label: "High Planetary Synergy", score: 92 };
  }
  if ((mLikesB && !bChallengesM) || (bLikesM && !mChallengesB)) {
    return { harmony: "synergy", label: "Supportive Alignment", score: 84 };
  }
  if (mChallengesB && bChallengesM) {
    return { harmony: "dynamic", label: "High-Contrast Mastery", score: 66 };
  }
  if (mChallengesB || bChallengesM) {
    return { harmony: "dynamic", label: "Creative Tension (Growth)", score: 71 };
  }
  return { harmony: "balanced", label: "Balanced Neutrality", score: 78 };
}

export function buildMulankBhagyankPair(mulank: number, bhagyank: number): MulankBhagyankProfile {
  const m = ESSENCE[mulank];
  const b = ESSENCE[bhagyank];
  const { harmony, label, score } = getHarmony(mulank, bhagyank);
  const slug = `mulank-${mulank}-bhagyank-${bhagyank}`;

  const isSame = mulank === bhagyank;
  const archetypeTitle = isSame
    ? `Double ${m.shortPlanet} Concentration`
    : `${m.shortPlanet} Driver on ${b.shortPlanet} Path`;

  const title = `Mulank ${mulank} and Bhagyank ${bhagyank} Combination: Meaning, Career & Love`;
  const description = `Complete Vedic analysis of Mulank ${mulank} (${m.shortPlanet}) with Bhagyank ${bhagyank} (${b.shortPlanet}): personality interplay, career fit, marriage harmony, Tarot link and remedies.`;

  const summary = isSame
    ? `When both your Mulank (${mulank}) and Bhagyank (${bhagyank}) carry the vibration of ${m.planet}, your inner temperament and outer destiny march in the same direction. Strengths double quickly, so managing ${m.blindSpot} becomes the single biggest lever for lasting peace.`
    : harmony === "synergy"
      ? `Mulank ${mulank} (${m.planet}) and Bhagyank ${bhagyank} (${b.planet}) form a natural Vedic friendship (${label}). Your instinctive daily habits (${m.innerDrive}) steadily reinforce your long-term destiny (${b.destinyPull}), creating smooth momentum once focus stays anchored.`
      : harmony === "balanced"
        ? `Mulank ${mulank} (${m.planet}) paired with Bhagyank ${bhagyank} (${b.planet}) offers a grounded middle path. Because ${m.shortPlanet} and ${b.shortPlanet} neither clash nor spoil one another, consistent effort shapes your results cleanly without dramatic swings.`
        : `Mulank ${mulank} (${m.planet}) with Bhagyank ${bhagyank} (${b.planet}) pairs two distinct planetary teachers. Your native instinct favors ${m.innerDrive}, yet life repeatedly asks you to mature into ${b.destinyPull}. Once you integrate both without resisting the contrast, this combination builds rare resilience.`;

  const innerVsOuter = isSame
    ? [
        `Born on the ${m.dates} of the month with a full birth-date sum reducing to ${bhagyank}, you experience an unbroken channel of ${m.planet}. Other people sense consistency immediately: what they meet in the first five minutes matches what you sustain across years.`,
        `The flip side of double ${mulank} focus is echo-chamber amplification. Your core asset, ${m.gift}, shines effortlessly, yet unchecked ${m.blindSpot} can intensify when stressed. Cultivating feedback from contrasting temperaments keeps your judgment sharp.`,
      ]
    : [
        `Your Mulank ${mulank} (dates ${m.dates}) governs how you react in the first thirty seconds under pressure: ruled by ${m.planet}, your reflex leans toward ${m.innerDrive}. That natural posture explains why close friends describe your instinctive presence around ${m.element} energy.`,
        `Around ages 28 to 34, Bhagyank ${bhagyank} (${b.planet}) takes increasing weight over life milestones, steering your trajectory toward ${b.destinyPull}. Integrating ${m.shortPlanet}'s ${m.gift} with ${b.shortPlanet}'s steady demand unlocks the mature promise of this chart.`,
      ];

  const careerAlignment = isSame
    ? [
        `Career clarity arrives earlier than average for ${mulank}/${bhagyank} natives because inner drive and external opportunities value the same currency: ${m.gift}. Roles where you can specialize deeply without diluted committees pay best.`,
        `Guard against burnout caused by doubling down on familiar habits when a pivot is needed. Partnering occasionally with complementary numbers widens your commercial reach.`,
      ]
    : [
        `Professionally, you perform strongest at the intersection where ${m.shortPlanet}'s instinct for ${m.innerDrive} supports ${b.shortPlanet}'s mandate of ${b.destinyPull}.`,
        harmony === "dynamic"
          ? `Early career friction often comes from taking roles suited only to Mulank ${mulank} while ignoring the broader growth demanded by Bhagyank ${bhagyank}. Bridges that combine ${m.careers[0].toLowerCase()} with ${b.careers[0].toLowerCase()} turn that tension into rare competitive advantage.`
          : `Because both numbers cooperate naturally, promotions and independent ventures gain traction cleanly when you schedule launches on ${b.days[0]} or ${m.days[0]}.`,
      ];

  const careerRoles = Array.from(new Set([...m.careers, ...b.careers]));

  const loveDynamics = [
    `Inside relationships, your Mulank ${mulank} side craves ${m.loveNeed}. Meanwhile, your longer Destiny arc (${bhagyank}) matures when you practice ${b.loveNeed}.`,
    harmony === "dynamic"
      ? `At times partners notice a dual rhythm: crisp ${m.shortPlanet} moods at work transitioning slowly into ${b.shortPlanet} responsibilities at home. Naming expectations openly prevents small misunderstandings from hardening into distance.`
      : `Your planetary alignment supports warm companionship when both mutual space and shared long-term goals are respected cleanly.`,
  ];

  const moneyAndTiming = [
    `Wealth grows steadier after your late twenties as Bhagyank ${bhagyank} settles into stride. Use ${m.shortPlanet}'s discipline against ${m.blindSpot} so short-term wins compound cleanly.`,
    `Favorable days across this pairing center on ${m.days[0]} and ${b.days[0]}, supported by palette accents of ${m.colours[0]} and ${b.colours[0]}.`,
  ];

  const remedies = Array.from(
    new Set([
      m.remedy,
      ...(isSame ? [] : [b.remedy]),
      harmony === "dynamic"
        ? `Bridge ${m.shortPlanet} and ${b.shortPlanet} energy intentionally by writing weekly reflections comparing what felt instinctive (${mulank}) versus what moved your larger goal (${bhagyank}) forward.`
        : `Honor both ${m.days[0]} and ${b.days[0]} as calm planning anchors rather than rushed reaction days.`,
    ]),
  );

  const tarotSynthesis = isSame
    ? `${m.tarotName} stands twice over this chart, highlighting undivided focus on mastering its core archetype without splitting your energy.`
    : `${m.tarotName} (Mulank ${mulank}) describes the immediate doorway you step through, while ${b.tarotName} (Bhagyank ${bhagyank}) reveals the enduring lesson that matures across your decades.`;

  return {
    slug,
    mulank,
    bhagyank,
    title,
    description,
    keywords: [
      `mulank ${mulank} bhagyank ${bhagyank}`,
      `mulank ${mulank} and bhagyank ${bhagyank} combination`,
      `driver ${mulank} conductor ${bhagyank}`,
      `mulank ${mulank} compatibility with bhagyank ${bhagyank}`,
      `${m.shortPlanet.toLowerCase()} ${b.shortPlanet.toLowerCase()} numerology`,
    ],
    headline: `Mulank ${mulank} with Bhagyank ${bhagyank}: ${archetypeTitle}`,
    archetypeTitle,
    mulankPlanet: m.planet,
    bhagyankPlanet: b.planet,
    harmony,
    harmonyLabel: label,
    score,
    summary,
    innerVsOuter,
    careerAlignment,
    careerRoles,
    loveDynamics,
    moneyAndTiming,
    remedies,
    luckyColours: Array.from(new Set([...m.colours, ...b.colours])),
    luckyDays: Array.from(new Set([...m.days, ...b.days])),
    tarotBridge: {
      mulankCard: m.tarotName,
      mulankTarotSlug: m.tarotSlug,
      bhagyankCard: b.tarotName,
      bhagyankTarotSlug: b.tarotSlug,
      synthesis: tarotSynthesis,
    },
    faqs: [
      {
        question: `Is Mulank ${mulank} and Bhagyank ${bhagyank} a good combination?`,
        answer:
          harmony === "synergy"
            ? `Yes. In Vedic Ank Shastra, ${m.planet} (Mulank ${mulank}) and ${b.planet} (Bhagyank ${bhagyank}) share a ${label.toLowerCase()} bond (compatibility index ${score}/100), allowing daily habits and long-term destiny to support each other.`
            : harmony === "balanced"
              ? `Yes, it is a balanced ${score}/100 combination. ${m.planet} and ${b.planet} work neutrally together, meaning steady discipline yields clean results without extreme volatility.`
              : `It is a high-growth ${score}/100 combination. Because ${m.planet} and ${b.planet} carry contrasting lessons, early patience pays off hugely once you blend ${m.shortPlanet}'s drive with ${b.shortPlanet}'s long view.`,
      },
      {
        question: `Which career suits Mulank ${mulank} and Bhagyank ${bhagyank} best?`,
        answer: `Top paths combine Mulank ${mulank}'s ${m.gift} with Bhagyank ${bhagyank}'s destiny pull toward ${b.destinyPull}, including ${careerRoles.slice(0, 4).join(", ")}.`,
      },
      {
        question: `What are the lucky colours and days for Mulank ${mulank} + Bhagyank ${bhagyank}?`,
        answer: `The most supportive days are ${Array.from(new Set([...m.days, ...b.days])).join(" and ")}, paired with ${Array.from(new Set([...m.colours, ...b.colours])).join(", ")}.`,
      },
    ],
    updated: PAIRS_UPDATED,
  };
}

export const ALL_MULANK_BHAGYANK_SLUGS: string[] = [];
for (let m = 1; m <= 9; m++) {
  for (let b = 1; b <= 9; b++) {
    ALL_MULANK_BHAGYANK_SLUGS.push(`mulank-${m}-bhagyank-${b}`);
  }
}

export function parseMulankBhagyankSlug(slug: string): { mulank: number; bhagyank: number } | null {
  const match = /^mulank-([1-9])-bhagyank-([1-9])$/.exec(slug);
  if (!match) return null;
  return { mulank: Number(match[1]), bhagyank: Number(match[2]) };
}

export function getMulankBhagyankPair(slug: string): MulankBhagyankProfile | undefined {
  const parsed = parseMulankBhagyankSlug(slug);
  if (!parsed) return undefined;
  return buildMulankBhagyankPair(parsed.mulank, parsed.bhagyank);
}
