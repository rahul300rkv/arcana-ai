import { getTarotPage, TAROT_PAGES, type TarotPage, type YesNo } from "@/data/tarot";

export interface TarotCombinationProfile {
  slug: string;
  cardASlug: string;
  cardBSlug: string;
  cardA: TarotPage;
  cardB: TarotPage;
  title: string;
  description: string;
  keywords: string[];
  themeBadge: string;
  headline: string;
  quickSummary: string;
  elementalDynamic: string;
  combinedMeaning: string[];
  loveMeaning: string[];
  careerMeaning: string[];
  cardOfTheDayNote: string;
  yesNoCombined: {
    verdict: YesNo;
    label: "Yes" | "No" | "Maybe";
    explanation: string;
  };
  advice: string[];
  faqs: { question: string; answer: string }[];
  featured: boolean;
  updated: string;
}

export const COMBINATIONS_UPDATED = "2026-11-19";

interface CuratedPairSeed {
  cardASlug: string;
  cardBSlug: string;
  themeBadge: string;
  quickSummary: string;
  loveAngle: string;
  careerAngle: string;
  dailyAngle: string;
}

const CURATED_SEEDS: CuratedPairSeed[] = [
  {
    cardASlug: "the-high-priestess",
    cardBSlug: "ten-of-swords",
    themeBadge: "Intuitive Closure",
    quickSummary:
      "The High Priestess paired with Ten of Swords signals that you already sensed a painful ending quietly before it became undeniable. Dawn has broken over the worst part; now keep silence, digest the truth privately, and refuse to resurrect what has finished.",
    loveAngle:
      "Hidden relationship doubts or an unspoken emotional stalemate reaches complete finality. Do not force a dramatic post-mortem when both hearts already know the truth.",
    careerAngle:
      "A draining project, contract, or outdated role reaches clean termination. Your quiet strategic radar prevents walking into the same trap twice.",
    dailyAngle:
      "Today asks for quiet discernment rather than loud explanations. Protect your mornings while an old mental weight dissolves.",
  },
  {
    cardASlug: "the-high-priestess",
    cardBSlug: "the-lovers",
    themeBadge: "Soul Alignment",
    quickSummary:
      "The High Priestess with The Lovers combines silent gut knowing with an authentic heart-level choice. Stop crowdsourcing approval from ten friends; the real answer is already quiet and steady inside your chest.",
    loveAngle:
      "Profound magnetic chemistry that goes beyond surface flirting. Unspoken mutual feelings ask for honest values alignment rather than guesswork.",
    careerAngle:
      "A crossroads between two tempting offers: let long-term integrity and deep intuition outweigh shiny short-term perks.",
    dailyAngle:
      "Pause noisy advice today. A choice made from genuine inner truth sticks effortlessly.",
  },
  {
    cardASlug: "the-high-priestess",
    cardBSlug: "justice",
    themeBadge: "Unvarnished Truth",
    quickSummary:
      "Private intuition meets cold objective ledger: secrets cannot stay buried long when The High Priestess stands beside Justice. Trust quiet instincts and back them up with clear written facts.",
    loveAngle:
      "Unspoken boundaries come into the daylight for fair repair. Honest accountability restores genuine respect.",
    careerAngle:
      "Strong omen for legal reviews, audits, contracts, or uncovering an overlooked clause before signing.",
    dailyAngle:
      "Notice subtle details others gloss over, then verify them calmly on paper.",
  },
  {
    cardASlug: "the-high-priestess",
    cardBSlug: "nine-of-swords",
    themeBadge: "Sleepless Intuition",
    quickSummary:
      "When The High Priestess appears alongside Nine of Swords, nighttime anxiety is trying to decode a subtle signal you picked up during the day. Separate real intuitive warnings from circular 3 a.m. catastrophizing.",
    loveAngle:
      "Silence from a partner is triggering worst-case scripts in your mind. Wait until morning calm before opening a direct check-in.",
    careerAngle:
      "Hidden workplace uncertainty fuels mental fatigue. Write down what you factually know versus what you are merely fearing.",
    dailyAngle:
      "Ground midnight worries in concrete daylight notes instead of spiraling in silence.",
  },
  {
    cardASlug: "the-high-priestess",
    cardBSlug: "the-moon",
    themeBadge: "Deep Subconscious",
    quickSummary:
      "Two lunar mystery cards side by side warn that visible surfaces tell less than half the story. Move patiently through fog, watch dreams closely, and avoid locking in major promises until hidden motives clear.",
    loveAngle:
      "Mixed signals and unspoken history tint the mood. Patience beats interrogation right now.",
    careerAngle:
      "Office politics or incomplete client briefs demand careful due diligence before committing resources.",
    dailyAngle:
      "Observe quietly rather than forcing clarity before the mist lifts.",
  },
  {
    cardASlug: "the-high-priestess",
    cardBSlug: "the-hermit",
    themeBadge: "Sacred Solitude",
    quickSummary:
      "Wisdom doubles in quiet: step out of social static so inner guidance can speak cleanly. Both cards reward deliberate retreat, reading, and private study over outward performance.",
    loveAngle:
      "Independent breathing room heals emotional clutter faster than forced talks.",
    careerAngle:
      "Deep solo research, writing, or coding yields your strongest breakthrough of the week.",
    dailyAngle:
      "Guard an unhurried quiet hour away from messages and feeds.",
  },
  {
    cardASlug: "the-high-priestess",
    cardBSlug: "the-magician",
    themeBadge: "Thought Into Form",
    quickSummary:
      "Passive receptivity (II) joins active craft (I): rare balance between knowing when to wait and knowing when to execute sharply. Once your inner voice gives the green light, act without hesitation.",
    loveAngle:
      "Subtle chemistry turns into deliberate, confident pursuit when timing feels crisp.",
    careerAngle:
      "Peak pairing for strategists, founders, and creators turning private insight into tangible launches.",
    dailyAngle:
      "Listen deeply first thing in the morning, then ship one decisive action before noon.",
  },
  {
    cardASlug: "nine-of-swords",
    cardBSlug: "ten-of-swords",
    themeBadge: "End of Mental Exhaustion",
    quickSummary:
      "Seeing Nine of Swords beside Ten of Swords marks the final crescendo of sleepless mental strain right before relief arrives. You have overthought this scenario to exhaustion; the chapter is actually closing so recovery can begin.",
    loveAngle:
      "A draining cycle of worry and repetitive argument has hit rock bottom, clearing space for truth and calm.",
    careerAngle:
      "Close out the thankless obligation or perfectionist loop draining your nights. Tomorrow looks cleaner on the horizon.",
    dailyAngle:
      "Drop the imaginary worst-case rehearsal today; the storm has already peaked.",
  },
  {
    cardASlug: "ten-of-swords",
    cardBSlug: "the-sun",
    themeBadge: "Darkest Before Dawn",
    quickSummary:
      "Literal dawn after the darkest night: Ten of Swords shows a painful ending already finished, while The Sun directly behind it promises rapid emotional warmth, clarity, and honest joy returning fast.",
    loveAngle:
      "Heartbreak or stale tension lifts cleanly, opening room for transparent affection or bright personal renewal.",
    careerAngle:
      "Leaving an exhausting role or failed pitch quickly clears space for your most visible win of the year.",
    dailyAngle:
      "Look at the golden sky behind the horizon cards, not the old swords on your back.",
  },
  {
    cardASlug: "ten-of-swords",
    cardBSlug: "the-star",
    themeBadge: "Quiet Regeneration",
    quickSummary:
      "Finality meets quiet healing water: once you stop struggling against what has ended, The Star restores calm breath, clean hope, and renewed faith in tomorrow.",
    loveAngle:
      "Allow grief or disappointment to drain peacefully; your heart softens again without bitterness.",
    careerAngle:
      "After a bruising setback, reconnect gently with the original purpose that drew you to your craft.",
    dailyAngle:
      "Rest deeply tonight and trust slow, steady replenishment.",
  },
  {
    cardASlug: "ten-of-swords",
    cardBSlug: "death",
    themeBadge: "Total Chapter Reset",
    quickSummary:
      "Two decisive ending cards leave zero ambiguity: an outdated structure, habit, or attachment is over for good. Resist nostalgia for what kept hurting you; clean closure unlocks real rebirth.",
    loveAngle:
      "Either an old dynamic ends cleanly or both partners bury past resentment permanently to start fresh.",
    careerAngle:
      "Complete career pivot or closing a tired business line cleanly frees energy for an entirely new chapter.",
    dailyAngle:
      "Burn the old script kindly and step into empty, honest ground.",
  },
  {
    cardASlug: "ten-of-swords",
    cardBSlug: "three-of-swords",
    themeBadge: "Unfiltered Heartache",
    quickSummary:
      "Double Swords pain names acute disappointment or betrayal without sugarcoating it. Acknowledge the sting honestly today instead of pretending everything is fine; healing accelerates once denial stops.",
    loveAngle:
      "Sharp truth hurts briefly yet spares you months of lingering ambiguity.",
    careerAngle:
      "A rejected deal or harsh critique closes a door so you stop pouring talent into the wrong room.",
    dailyAngle:
      "Be gentle with your nervous system and resist picking at old messages.",
  },
  {
    cardASlug: "nine-of-swords",
    cardBSlug: "the-hermit",
    themeBadge: "Midnight Counsel",
    quickSummary:
      "Anxious overthinking meets lantern-lit perspective. Stepping back from external noise lets The Hermit dismantle your midnight fears one rational step at a time.",
    loveAngle:
      "Take quiet reflection time to separate genuine intuition from past relationship trauma.",
    careerAngle:
      "Stop polling ten anxious voices; sit quietly with your own notes to spot the clean path forward.",
    dailyAngle:
      "Replace late-night scrolling with a calm ten-minute walk or handwritten plan.",
  },
  {
    cardASlug: "nine-of-swords",
    cardBSlug: "the-devil",
    themeBadge: "Breaking Worry Loops",
    quickSummary:
      "Mental insomnia collides with unhealthy attachment: notice which habit, person, or doom-scroll loop keeps rattling the chain around your ankle when the lock isn't even shut.",
    loveAngle:
      "Obsessive checking or fear of losing someone signals an unhealthy power dynamic needing boundaries.",
    careerAngle:
      "Golden handcuffs or fear-driven overwork keep you exhausted; test what happens when you reclaim one firm boundary.",
    dailyAngle:
      "Spot one worry habit feeding off your attention and starve it today.",
  },
  {
    cardASlug: "nine-of-swords",
    cardBSlug: "temperance",
    themeBadge: "Nervous System Reset",
    quickSummary:
      "High mental heat cooled gently by Temperance's alchemy: slow down rushed timelines, rebalance sleep and meals, and solve one practical issue at a moderate pace.",
    loveAngle:
      "Calm patience melts tense misunderstandings better than urgent midnight texts.",
    careerAngle:
      "Pace your workload deliberately; steady moderation beats panicked over-correction.",
    dailyAngle:
      "Trade urgency for steady rhythm today.",
  },
  {
    cardASlug: "the-lovers",
    cardBSlug: "justice",
    themeBadge: "Vows & Accountability",
    quickSummary:
      "Heartfelt union meets fair contractual truth: major relationship or partnership commitments require transparent terms, equal effort, and legal or ethical clarity.",
    loveAngle:
      "Strong indicator of official commitment, engagement, or settling past relationship imbalances fairly.",
    careerAngle:
      "Sign business partnerships only when equity splits and duties are written transparently on paper.",
    dailyAngle:
      "Make sure your actions match what you claim to value.",
  },
  {
    cardASlug: "the-lovers",
    cardBSlug: "two-of-cups",
    themeBadge: "Mutual Devotion",
    quickSummary:
      "One of Tarot's warmest relationship pairings: balanced chemistry, sincere mutual respect, and shared emotional values reinforce each other cleanly.",
    loveAngle:
      "Deep reciprocal romance, heartfelt reconciliation, or harmonious next steps together.",
    careerAngle:
      "Ideal alignment with a co-founder, client, or creative partner who genuinely matches your standards.",
    dailyAngle:
      "Invest time in your closest genuine bond today.",
  },
  {
    cardASlug: "the-lovers",
    cardBSlug: "the-devil",
    themeBadge: "Desire vs Freedom",
    quickSummary:
      "Intense attraction meets shadow attachment: distinguish genuine loving choice (The Lovers) from compulsion, jealousy, or settling purely for chemistry (The Devil).",
    loveAngle:
      "Undeniable magnetic pull, yet watch closely for control games or codependent loops.",
    careerAngle:
      "Beware lucrative contracts that secretly compromise your ethics or personal autonomy.",
    dailyAngle:
      "Ask honestly whether a desire expands your freedom or shrinks it.",
  },
  {
    cardASlug: "the-lovers",
    cardBSlug: "the-tower",
    themeBadge: "Shocking Clarity",
    quickSummary:
      "A sudden upheaval shakes a relationship or major choice awake, burning away polite illusions so only honest devotion remains standing.",
    loveAngle:
      "An abrupt revelation forces a clear decision: build on raw truth or walk away cleanly.",
    careerAngle:
      "Sudden restructuring makes clear which alliances are real and which were merely convenient.",
    dailyAngle:
      "Let fragile pretenses fall without panic; real alignment survives the shake.",
  },
  {
    cardASlug: "justice",
    cardBSlug: "wheel-of-fortune",
    themeBadge: "Karmic Turning",
    quickSummary:
      "Past effort meets shifting cosmic timing: impartial Justice delivers the exact outcome previous choices earned as the Wheel turns cleanly in your favor.",
    loveAngle:
      "A fair turning point balances old uneven effort; honest people get their long-overdue clarity.",
    careerAngle:
      "Favorable timing for verdicts, promotions, delayed settlements, and fair career recognition.",
    dailyAngle:
      "Stay scrupulously fair today while unexpected doors pivot open.",
  },
  {
    cardASlug: "justice",
    cardBSlug: "the-emperor",
    themeBadge: "Law & Authority",
    quickSummary:
      "Objective judgment backed by crisp executive structure: an authoritative pair favoring formal governance, clean contracts, disciplined habits, and decisive fairness.",
    loveAngle:
      "Commitment grounded in steady reliability, clear boundaries, and protective maturity.",
    careerAngle:
      "Excellent omen for leadership evaluations, compliance approvals, real estate closings, and board decisions.",
    dailyAngle:
      "Lead with clear facts, firm boundaries, and fair temperament.",
  },
  {
    cardASlug: "the-fool",
    cardBSlug: "the-magician",
    themeBadge: "Zero to Creation",
    quickSummary:
      "Open beginner's spirit meets focused mastery: the quintessential startup and manifestation pairing telling you that fresh courage already holds every tool needed to begin.",
    loveAngle:
      "Refreshing chemistry charged with playful initiative and sincere confidence.",
    careerAngle:
      "Green light to launch an original venture, pitch a fresh product, or step onto a bold new track.",
    dailyAngle:
      "Pair fearless curiosity with one crisp practical first step.",
  },
  {
    cardASlug: "the-fool",
    cardBSlug: "the-world",
    themeBadge: "Full Circle Leap",
    quickSummary:
      "Card 0 joins Card XXI: one major life chapter closes in hard-earned completeness right as an entirely fresh cycle opens wide before you.",
    loveAngle:
      "Graduating from old relationship lessons into wholesome, joyful new territory.",
    careerAngle:
      "Completing a degree, long contract, or international milestone right before a fresh adventure.",
    dailyAngle:
      "Celebrate how far you have come before stepping lightly into tomorrow.",
  },
  {
    cardASlug: "the-magician",
    cardBSlug: "the-sun",
    themeBadge: "Radiant Execution",
    quickSummary:
      "Skillful action flooded with clear solar confidence: zero hidden agendas, strong public visibility, and unmistakable momentum on personal goals.",
    loveAngle:
      "Warm, generous, confident attraction where intentions stay crystal clear.",
    careerAngle:
      "Standout card pair for public launches, interviews, creative showcases, and leadership wins.",
    dailyAngle:
      "Step forward visibly and share your best work openly.",
  },
  {
    cardASlug: "death",
    cardBSlug: "the-tower",
    themeBadge: "Radical Clearing",
    quickSummary:
      "Two powerhouse transformation cards clear away outdated foundations swiftly so authentic life can breathe again. Resistance hurts more than letting go.",
    loveAngle:
      "An unworkable dynamic breaks open honestly; make space for truth rather than clinging to ruins.",
    careerAngle:
      "Sudden industry or role disruption pushes you swiftly toward work that actually fits.",
    dailyAngle:
      "Release what has obviously ended with grace and practical footing.",
  },
  {
    cardASlug: "death",
    cardBSlug: "the-star",
    themeBadge: "Renewal After Closure",
    quickSummary:
      "Autumn pruning gives way cleanly to fresh spring water: grieve what ended, then open quietly to calm healing, purpose, and renewed optimism.",
    loveAngle:
      "Post-breakup recovery or deep relational renewal built on clean honesty.",
    careerAngle:
      "Ending a tired chapter opens clean creative inspiration and long-term vision.",
    dailyAngle:
      "Trust that closure makes real room for peace.",
  },
  {
    cardASlug: "death",
    cardBSlug: "the-sun",
    themeBadge: "Phoenix Rebirth",
    quickSummary:
      "Unmistakable turning point from ending into vitality: letting go of stale weight restores genuine warmth, energy, and clear optimism remarkably fast.",
    loveAngle:
      "Past heaviness drops away so playful warmth and honest affection return.",
    careerAngle:
      "Finishing an outdated transition brings swift visible clarity and confident success.",
    dailyAngle:
      "Step out of heavy memory into bright present action.",
  },
  {
    cardASlug: "the-tower",
    cardBSlug: "the-star",
    themeBadge: "Grace Through Storm",
    quickSummary:
      "Even when abrupt upheaval shakes rigid plans, The Star directly follows to prove you are protected, guided, and rebuilding on cleaner truth.",
    loveAngle:
      "Sudden honesty shakes a fragile status quo, yet opens space for genuine emotional safety.",
    careerAngle:
      "Unexpected disruption exposes a clearer, truer mission you had hesitated to pursue.",
    dailyAngle:
      "Breathe calmly through surprise changes; peace sits right behind the dust.",
  },
  {
    cardASlug: "the-empress",
    cardBSlug: "the-emperor",
    themeBadge: "Fertile Structure",
    quickSummary:
      "Abundant creative nurturing joins dependable architecture: balanced masculine and feminine leadership building thriving homes, teams, and enduring businesses.",
    loveAngle:
      "Warmth, sensual care, protective loyalty, and long-term domestic stability together.",
    careerAngle:
      "Creative vision backed by disciplined execution scales sustainably.",
    dailyAngle:
      "Balance nurturing care with firm daily structure.",
  },
  {
    cardASlug: "the-empress",
    cardBSlug: "ten-of-pentacles",
    themeBadge: "Generational Abundance",
    quickSummary:
      "One of Tarot's richest prosperity and family pairs: organic abundance matures into lasting home security, property stability, and shared wealth.",
    loveAngle:
      "Deeply supportive family roots, marriage harmony, and nurturing comfort.",
    careerAngle:
      "Long-term business equity, real estate gains, and flourishing creative enterprises.",
    dailyAngle:
      "Tend both home warmth and long-horizon financial roots.",
  },
  {
    cardASlug: "strength",
    cardBSlug: "the-chariot",
    themeBadge: "Graceful Victory",
    quickSummary:
      "Inner emotional poise guides unstoppable forward drive: you conquer complex challenges not by brute force, but by calm self-mastery on the reins.",
    loveAngle:
      "Patience and steady emotional courage overcome distance or stubborn hurdles.",
    careerAngle:
      "Top combination for competitive interviews, tough negotiations, and endurance milestones.",
    dailyAngle:
      "Hold steady confidence without raising your voice.",
  },
  {
    cardASlug: "wheel-of-fortune",
    cardBSlug: "ace-of-cups",
    themeBadge: "Fortunate Heart Opening",
    quickSummary:
      "Synchronistic timing delivers fresh emotional joy, unexpected affection, or creative inspiration just as cycles turn kindly in your favor.",
    loveAngle:
      "Serendipitous new romance or heartwarming renewal within an existing bond.",
    careerAngle:
      "An inspiring opportunity arrives unexpectedly through goodwill or passion projects.",
    dailyAngle:
      "Say yes to unexpected warmth and creative grace today.",
  },
  {
    cardASlug: "the-star",
    cardBSlug: "the-sun",
    themeBadge: "Pure Radiance",
    quickSummary:
      "Quiet spiritual hope blossoms into full daylight vitality: rare double reassurance that you are genuinely on track and healing cleanly.",
    loveAngle:
      "Open-hearted joy, gentle trust, and radiant affection.",
    careerAngle:
      "Inspired vision achieves joyful public recognition and clear success.",
    dailyAngle:
      "Celebrate progress openly and share generosity.",
  },
  {
    cardASlug: "three-of-swords",
    cardBSlug: "the-star",
    themeBadge: "Mending Heartbreak",
    quickSummary:
      "Painful truth does not get the final word: clean grief gives way to gentle recovery, self-respect, and restored quiet hope.",
    loveAngle:
      "Honest healing after sharp disappointment makes future love healthier and wiser.",
    careerAngle:
      "Shake off a stinging rejection cleanly; clear-eyed purpose guides your next move.",
    dailyAngle:
      "Treat tender feelings kindly without losing faith in tomorrow.",
  },
  {
    cardASlug: "five-of-pentacles",
    cardBSlug: "the-sun",
    themeBadge: "Out From Winter",
    quickSummary:
      "Scarcity anxiety or feeling left out in the cold ends as real practical warmth, support, and financial brightening step directly ahead.",
    loveAngle:
      "Emotional coldness thaws rapidly once honesty and mutual appreciation return.",
    careerAngle:
      "A lean dry spell gives way to tangible income improvement and helpful allies.",
    dailyAngle:
      "Ask openly for support rather than suffering in chilly silence.",
  },
  {
    cardASlug: "the-hermit",
    cardBSlug: "judgement",
    themeBadge: "Inner Calling",
    quickSummary:
      "Quiet solitary reflection culminates in an unmistakable spiritual and vocational wake-up call: you can no longer ignore the path you know is yours.",
    loveAngle:
      "Deep clarity brings either mature reconciliation or decisive closure on past chapters.",
    careerAngle:
      "Months of quiet preparation culminate in stepping up to your true calling.",
    dailyAngle:
      "Honor the clear realization asking for your bold response today.",
  },
];

function getElementalDynamic(a: TarotPage, b: TarotPage): string {
  if (a.element === b.element) {
    return `Both ${a.name} and ${b.name} carry the ${a.element} element, concentrating ${a.element.toLowerCase()} qualities strongly across your question.`;
  }
  const pair = [a.element, b.element].sort().join("+");
  switch (pair) {
    case "Air+Fire":
      return "Fire (ambition, action) fans Air (thought, clarity): ideas turn swiftly into spoken words and bold decisions.";
    case "Earth+Water":
      return "Water (feeling, intuition) nourishes Earth (practical reality): quiet emotions take durable, grounded shape.";
    case "Air+Water":
      return "Water (intuition, heart) meets Air (intellect, analysis): inner knowing asks to be verified with clear logic and clean boundaries.";
    case "Earth+Fire":
      return "Fire (spark, urgency) meets Earth (patience, structure): raw drive needs steady real-world pacing to build lasting results.";
    case "Air+Earth":
      return "Air (mental perspective) meets Earth (tangible facts): abstract plans must be tested against numbers, schedules, and concrete work.";
    case "Fire+Water":
      return "Fire (passion, will) meets Water (depth, emotion): intense steam can either drive creative transformation or create friction until feelings and impulses align.";
    default:
      return `${a.element} (${a.name}) interacts dynamically with ${b.element} (${b.name}), weaving outer circumstances with internal readiness.`;
  }
}

function combineYesNo(a: TarotPage, b: TarotPage): {
  verdict: YesNo;
  label: "Yes" | "No" | "Maybe";
  explanation: string;
} {
  const scoreMap: Record<YesNo, number> = { yes: 1, maybe: 0, no: -1 };
  const total = scoreMap[a.yesNo] + scoreMap[b.yesNo];
  if (total >= 2) {
    return {
      verdict: "yes",
      label: "Yes",
      explanation: `Both ${a.name} and ${b.name} lean Yes upright, reinforcing forward confidence when you honor both cards' practical counsel.`,
    };
  }
  if (total <= -2) {
    return {
      verdict: "no",
      label: "No",
      explanation: `Both ${a.name} and ${b.name} lean No upright, advising closure, protection, or changing course before committing further.`,
    };
  }
  if (total === 1) {
    return {
      verdict: "yes",
      label: "Yes",
      explanation: `Taken together, this pair leans cautiously toward Yes (${a.name} is ${a.yesNo.toUpperCase()}, balanced by ${b.name}'s ${b.yesNo.toUpperCase()} nuance). Proceed once key conditions are respected.`,
    };
  }
  if (total === -1) {
    return {
      verdict: "no",
      label: "No",
      explanation: `Taken together, this pair leans toward No or Wait (${a.name} is ${a.yesNo.toUpperCase()}, paired with ${b.name}'s ${b.yesNo.toUpperCase()} tone), urging careful pause before acting.`,
    };
  }
  return {
    verdict: "maybe",
    label: "Maybe",
    explanation: `${a.name} and ${b.name} balance contrasting energies right now: your outcome hinges cleanly on timing and conscious choice rather than luck alone.`,
  };
}

export function synthesizeTarotCombination(
  cardA: TarotPage,
  cardB: TarotPage,
  seed?: CuratedPairSeed,
): TarotCombinationProfile {
  const slug = `${cardA.slug}-and-${cardB.slug}`;
  const headline = `${cardA.name} and ${cardB.name} Tarot Combination`;
  const title = `${cardA.name} + ${cardB.name} Meaning: Love, Career & Yes/No`;
  const description =
    seed?.quickSummary ??
    `Discover what ${cardA.name} and ${cardB.name} mean together in Tarot: combined symbolism, love and relationship cues, career guidance, and Yes or No answer.`;

  const elementalDynamic = getElementalDynamic(cardA, cardB);
  const yesNoCombined = combineYesNo(cardA, cardB);

  const quickSummary =
    seed?.quickSummary ??
    `Drawing ${cardA.name} (${cardA.cardKeywords.slice(0, 2).join(", ").toLowerCase()}) beside ${cardB.name} (${cardB.cardKeywords.slice(0, 2).join(", ").toLowerCase()}) merges ${cardA.archetype.toLowerCase()} with ${cardB.archetype.toLowerCase()}. Read ${cardA.name} as the opening mood or root tension, and ${cardB.name} as how that energy unfolds next.`;

  const combinedMeaning = [
    quickSummary,
    `${cardA.name} brings ${cardA.uprightKeywords.slice(0, 3).join(", ").toLowerCase()}, while ${cardB.name} shifts the focus toward ${cardB.uprightKeywords.slice(0, 3).join(", ").toLowerCase()}. Together, notice where the first card asks for internal honesty or preparation so the second card can land cleanly.`,
    elementalDynamic,
  ];

  const loveMeaning = [
    seed?.loveAngle ??
      `In love readings, ${cardA.name} highlights ${cardA.cardOfTheDay.energy.toLowerCase()} while ${cardB.name} points toward ${cardB.cardOfTheDay.leanInto.toLowerCase()}.`,
    cardA.love[0] ?? `${cardA.name} shapes emotional tone first, followed by ${cardB.name}'s practical relational lesson.`,
  ];

  const careerMeaning = [
    seed?.careerAngle ??
      `In career and money spreads, ${cardA.name} reflects your current leverage (${cardA.uprightKeywords[0].toLowerCase()}), and ${cardB.name} indicates the immediate outcome (${cardB.uprightKeywords[0].toLowerCase()}).`,
    cardB.career[0] ?? `Apply ${cardB.name}'s disciplined advice before locking in contracts or major transitions.`,
  ];

  const cardOfTheDayNote =
    seed?.dailyAngle ??
    `As a two-card daily pull, lead your morning with ${cardA.cardOfTheDay.leanInto} while using ${cardB.name} to anchor your afternoon choices.`;

  const advice = [
    cardA.advice[0] ?? `Honor the core truth highlighted by ${cardA.name}.`,
    cardB.advice[0] ?? `Follow the constructive step pointed out by ${cardB.name}.`,
    `Notice ${elementalDynamic.split(":")[0]} in your real-world decisions over the next 72 hours.`,
  ];

  const faqs = [
    {
      question: `What do ${cardA.name} and ${cardB.name} mean together?`,
      answer: quickSummary,
    },
    {
      question: `Are ${cardA.name} and ${cardB.name} a good sign for love?`,
      answer: loveMeaning[0],
    },
    {
      question: `What does ${cardA.name} + ${cardB.name} mean for Yes or No?`,
      answer: yesNoCombined.explanation,
    },
  ];

  return {
    slug,
    cardASlug: cardA.slug,
    cardBSlug: cardB.slug,
    cardA,
    cardB,
    title,
    description,
    keywords: [
      `${cardA.name.toLowerCase()} and ${cardB.name.toLowerCase()}`,
      `${cardA.name.toLowerCase()} ${cardB.name.toLowerCase()} tarot combination`,
      `${cardA.name.toLowerCase()} + ${cardB.name.toLowerCase()} love`,
      `${cardA.name.toLowerCase()} and ${cardB.name.toLowerCase()} yes or no`,
    ],
    themeBadge: seed?.themeBadge ?? `${cardA.element} × ${cardB.element} Synthesis`,
    headline,
    quickSummary,
    elementalDynamic,
    combinedMeaning,
    loveMeaning,
    careerMeaning,
    cardOfTheDayNote,
    yesNoCombined,
    advice,
    faqs,
    featured: Boolean(seed),
    updated: COMBINATIONS_UPDATED,
  };
}

export const CURATED_TAROT_COMBINATIONS: TarotCombinationProfile[] = CURATED_SEEDS.map((seed) => {
  const cardA = getTarotPage(seed.cardASlug);
  const cardB = getTarotPage(seed.cardBSlug);
  if (!cardA || !cardB) {
    throw new Error(`Invalid tarot combination slug: ${seed.cardASlug} + ${seed.cardBSlug}`);
  }
  return synthesizeTarotCombination(cardA, cardB, seed);
});

const curatedBySlug = new Map(CURATED_TAROT_COMBINATIONS.map((c) => [c.slug, c]));

export function getTarotCombination(slug: string): TarotCombinationProfile | undefined {
  const exact = curatedBySlug.get(slug);
  if (exact) return exact;

  // Support dynamic resolution for any "<slugA>-and-<slugB>" pair cleanly in-app
  const splitIdx = slug.indexOf("-and-");
  if (splitIdx > 0) {
    const slugA = slug.slice(0, splitIdx);
    const slugB = slug.slice(splitIdx + 5);
    const cardA = getTarotPage(slugA);
    const cardB = getTarotPage(slugB);
    if (cardA && cardB && cardA.slug !== cardB.slug) {
      return synthesizeTarotCombination(cardA, cardB);
    }
    // Check reversed order in curated map
    const reversed = curatedBySlug.get(`${slugB}-and-${slugA}`);
    if (reversed) return reversed;
  }
  return undefined;
}

export function getCombinationsForCard(cardSlug: string): TarotCombinationProfile[] {
  return CURATED_TAROT_COMBINATIONS.filter(
    (c) => c.cardASlug === cardSlug || c.cardBSlug === cardSlug,
  );
}

export { TAROT_PAGES };
