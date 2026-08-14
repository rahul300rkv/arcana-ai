/**
 * Structured content layer for the Mulank pages:
 * `/numerology/mulank` (hub) and `/numerology/mulank-1` … `/numerology/mulank-9`.
 *
 * Mulank (also called the birth number, driver or psychic number) is derived
 * ONLY from the day of the month you were born — this is deliberately different
 * content from the Life Path pages, which use the full date of birth.
 */

export interface MulankFaq {
  question: string;
  answer: string;
}

export interface MulankCompatibility {
  number: number;
  verdict: "friend" | "neutral" | "challenge";
  note: string;
}

export interface MulankPage {
  slug: string;
  number: number;
  label: string;
  archetype: string;
  title: string;
  description: string;
  keywords: string[];
  hero: string;
  dates: number[];
  planet: string;
  element: string;
  direction: string;
  gemstone: string;
  deity: string;
  tarotCard: string;
  tarotSlug: string;
  lifePathSlug: string;
  luckyColours: string[];
  luckyDays: string[];
  luckyNumbers: number[];
  meaning: string[];
  personality: string[];
  strengths: string[];
  weaknesses: string[];
  career: string[];
  careerPaths: string[];
  love: string[];
  health: string[];
  money: string[];
  remedies: string[];
  compatibility: MulankCompatibility[];
  famous: string[];
  affirmation: string;
  journalPrompts: string[];
  faqs: MulankFaq[];
  relatedSlugs: string[];
  wordCount: number;
  readingMinutes: number;
  updated: string;
}

export const MULANK_UPDATED = "2026-08-08";

interface Seed {
  number: number;
  archetype: string;
  planet: string;
  element: string;
  direction: string;
  gemstone: string;
  deity: string;
  tarotCard: string;
  tarotSlug: string;
  essence: string;
  drive: string;
  shadow: string;
  strengths: string[];
  weaknesses: string[];
  careerPaths: string[];
  careerNote: string;
  loveNote: string;
  healthNote: string;
  moneyNote: string;
  remedies: string[];
  colours: string[];
  days: string[];
  friends: number[];
  neutral: number[];
  challenge: number[];
  famous: string[];
  affirmation: string;
}

const SEEDS: Seed[] = [
  {
    number: 1,
    archetype: "The Leader",
    planet: "Sun (Surya)",
    element: "Fire",
    direction: "East",
    gemstone: "Ruby",
    deity: "Surya",
    tarotCard: "The Magician",
    tarotSlug: "the-magician",
    essence: "authority, originality and self-belief",
    drive: "to be first, to be independent, and to be recognised for what you personally built",
    shadow: "ego, impatience and an inability to take instruction",
    strengths: ["Natural authority", "Decisive", "Original thinker", "Self-reliant", "Recovers fast from failure"],
    weaknesses: ["Domineering when stressed", "Poor at delegating", "Sensitive to criticism", "Impatient with process", "Stubborn about being wrong"],
    careerPaths: ["Entrepreneur", "Government or administration", "Politics and public life", "Team or department head", "Brand and creative direction", "Independent practice"],
    careerNote: "Mulank 1 people rise fastest where authority is visible and ownership is clear. You outperform in your own venture, in a leadership seat, or in any role where results are attributed to a name rather than a committee.",
    loveNote: "You court directly and expect the same honesty back. Partners feel adored when you make them your priority and dismissed when work becomes the only thing you lead.",
    healthNote: "Sun-ruled birth numbers watch the heart, blood pressure, eyes and bones. Overwork is your real diagnosis more often than illness is.",
    moneyNote: "Income rises when you back your own decisions and stalls in salaried roles with no upside. The recurring leak is spending on status before the earnings are stable.",
    remedies: ["Offer water to the rising sun on Sundays", "Keep Sunday partly free of other people's agendas", "Wear or keep gold or copper close", "Practise Surya Namaskar in the morning light"],
    colours: ["Gold", "Orange", "Deep red"],
    days: ["Sunday", "Monday"],
    friends: [1, 2, 3, 9],
    neutral: [5, 6, 7],
    challenge: [4, 8],
    famous: ["Narendra Modi", "Steve Jobs", "Sundar Pichai", "Lady Gaga"],
    affirmation: "I lead by building, not by proving.",
  },
  {
    number: 2,
    archetype: "The Peacemaker",
    planet: "Moon (Chandra)",
    element: "Water",
    direction: "North-west",
    gemstone: "Pearl",
    deity: "Chandra",
    tarotCard: "The High Priestess",
    tarotSlug: "the-high-priestess",
    essence: "sensitivity, intuition and partnership",
    drive: "to be close to people and to keep the emotional temperature of a room comfortable",
    shadow: "mood swings, over-dependence and unspoken resentment",
    strengths: ["Highly intuitive", "Gentle and diplomatic", "Loyal for decades", "Excellent listener", "Reads unspoken tension"],
    weaknesses: ["Emotionally reactive", "Avoids confrontation", "Over-thinks decisions", "Absorbs other people's stress", "Needs frequent reassurance"],
    careerPaths: ["Counselling and therapy", "Nursing and caregiving", "Hospitality", "Human resources", "Music and the arts", "Partnership and client roles"],
    careerNote: "Mulank 2 works best beside someone rather than above them. Deputy, co-founder, partner and client-facing roles suit you; cut-throat sales floors cost you more health than they pay in commission.",
    loveNote: "Relationship is the centre of your chart, not a side plot. You give constantly and quietly — and the one skill worth learning is asking clearly before the disappointment sets in.",
    healthNote: "Moon numbers are prone to sleep disruption, digestive sensitivity, anaemia and anxiety. A stable sleep routine does more for you than any supplement.",
    moneyNote: "You save carefully but spend emotionally, especially on family. Automating savings on payday removes the mood from the equation.",
    remedies: ["Keep a glass of water by your bedside and change it daily", "Honour Monday as a quiet day", "Wear white or silver on important days", "Spend time near water once a week"],
    colours: ["White", "Cream", "Silver"],
    days: ["Monday", "Friday"],
    friends: [1, 2, 4, 7],
    neutral: [3, 6, 9],
    challenge: [5, 8],
    famous: ["Shah Rukh Khan", "Mother Teresa", "Kim Kardashian", "Barack Obama"],
    affirmation: "I can be soft and still be certain.",
  },
  {
    number: 3,
    archetype: "The Teacher",
    planet: "Jupiter (Guru)",
    element: "Ether",
    direction: "North-east",
    gemstone: "Yellow sapphire",
    deity: "Brihaspati",
    tarotCard: "The Empress",
    tarotSlug: "the-empress",
    essence: "wisdom, expression and expansion",
    drive: "to learn something worth knowing and then to pass it on",
    shadow: "preachiness, scattered energy and over-promising",
    strengths: ["Naturally expressive", "Optimistic", "Quick learner", "Generous mentor", "Socially magnetic"],
    weaknesses: ["Starts more than it finishes", "Talks over the quiet", "Over-commits", "Impatient with detail", "Can moralise"],
    careerPaths: ["Teaching and training", "Law and advisory", "Writing and publishing", "Media and broadcast", "Finance and advisory", "Coaching"],
    careerNote: "Jupiter rewards Mulank 3 in any role where knowledge is the product: teaching, advising, writing, law, consulting. Repetitive execution work bores you into underperformance within a year.",
    loveNote: "You are warm, funny and generous in love, and you need a partner who can keep up with the conversation. Freedom to keep growing matters more to you than routine.",
    healthNote: "Jupiter governs the liver, fat metabolism and weight. Indulgence is your health risk far more than deficiency is; moderation is the whole prescription.",
    moneyNote: "Money comes through knowledge, advice and reputation. It leaves through generosity and optimistic commitments made before the money arrived.",
    remedies: ["Study or read something serious on Thursdays", "Feed or teach someone without charge each month", "Wear yellow on important days", "Keep promises small enough to honour"],
    colours: ["Yellow", "Saffron", "Gold"],
    days: ["Thursday", "Tuesday"],
    friends: [1, 3, 6, 9],
    neutral: [2, 5, 7],
    challenge: [4, 8],
    famous: ["Sachin Tendulkar", "J. K. Rowling", "Alia Bhatt", "Tom Cruise"],
    affirmation: "I finish what I start and I share what I learn.",
  },
  {
    number: 4,
    archetype: "The Builder",
    planet: "Rahu / Uranus",
    element: "Earth",
    direction: "South-west",
    gemstone: "Hessonite (gomed)",
    deity: "Rahu",
    tarotCard: "The Emperor",
    tarotSlug: "the-emperor",
    essence: "structure, unconventionality and endurance",
    drive: "to make something solid out of unstable material, usually against the odds",
    shadow: "rigidity, secrecy and a habit of expecting the worst",
    strengths: ["Extremely hard working", "Unconventional problem solver", "Reliable under pressure", "Practical", "Loyal to the few"],
    weaknesses: ["Resists change once decided", "Isolates when hurt", "Argumentative about principles", "Pessimistic streak", "Slow to trust"],
    careerPaths: ["Engineering and technology", "Real estate and construction", "Data and analytics", "Operations", "Research", "Reform and activism"],
    careerNote: "Mulank 4 is the systems mind: you see the flaw in the process before anyone else and you will fix it whether or not you were asked. Careers with clear structure and technical depth suit you best.",
    loveNote: "You love steadily rather than dramatically, and you show it through what you do rather than what you say. Partners need that translated occasionally — say the sentence out loud.",
    healthNote: "Nervous system, sleep, skin and unexplained chronic complaints are the classic Rahu pattern. Regularity in meals and sleep resolves more of it than medication does.",
    moneyNote: "Money arrives in irregular jumps rather than a smooth curve. Building a genuine buffer, rather than trusting the next jump, is the single best financial habit for this number.",
    remedies: ["Keep fixed sleeping and eating hours", "Donate black sesame or blankets on Saturdays", "Avoid signing anything major in a rush", "Declutter your workspace weekly"],
    colours: ["Grey", "Electric blue", "Khaki"],
    days: ["Saturday", "Sunday"],
    friends: [4, 5, 7, 8],
    neutral: [2, 6, 9],
    challenge: [1, 3],
    famous: ["Bill Gates", "Elon Musk", "Arnold Schwarzenegger", "Rajinikanth"],
    affirmation: "I build slowly and I let people in while I do it.",
  },
  {
    number: 5,
    archetype: "The Communicator",
    planet: "Mercury (Budh)",
    element: "Air",
    direction: "North",
    gemstone: "Emerald",
    deity: "Budh",
    tarotCard: "The Hierophant",
    tarotSlug: "the-hierophant",
    essence: "adaptability, intelligence and movement",
    drive: "to stay free, to keep learning, and to be in the middle of whatever is happening",
    shadow: "restlessness, over-commitment and nervous burnout",
    strengths: ["Quick-witted", "Adapts instantly", "Excellent negotiator", "Widely networked", "Learns any new tool fast"],
    weaknesses: ["Bores easily", "Changes direction too often", "Over-schedules", "Avoids emotional depth", "Impulsive with money"],
    careerPaths: ["Sales and business development", "Marketing and communications", "Trading and broking", "Travel and logistics", "Journalism", "Technology consulting"],
    careerNote: "Mulank 5 is the most commercially adaptable birth number. You do well anywhere speed, persuasion and variety are rewarded, and badly anywhere the same day repeats for years.",
    loveNote: "You need a partner who is also a friend and who does not treat independence as betrayal. Boredom, not conflict, is the real risk to your relationships.",
    healthNote: "Mercury governs the nervous system, skin and speech. Your health issues are almost always over-stimulation: too many screens, too little sleep, too much caffeine.",
    moneyNote: "You earn quickly and spend just as fast, often on travel and gadgets. A separate untouched account is worth more to you than a higher income.",
    remedies: ["Take one screen-free evening a week", "Wear green on Wednesdays", "Finish one thing before starting the next", "Practise ten minutes of stillness daily"],
    colours: ["Green", "Turquoise", "Light grey"],
    days: ["Wednesday", "Friday"],
    friends: [1, 4, 5, 6],
    neutral: [3, 7, 8],
    challenge: [2, 9],
    famous: ["Ratan Tata", "Angelina Jolie", "Steven Spielberg", "Virat Kohli"],
    affirmation: "I stay free by finishing what matters.",
  },
  {
    number: 6,
    archetype: "The Nurturer",
    planet: "Venus (Shukra)",
    element: "Water",
    direction: "South-east",
    gemstone: "Diamond or white sapphire",
    deity: "Shukra / Lakshmi",
    tarotCard: "The Lovers",
    tarotSlug: "the-lovers",
    essence: "beauty, love and responsibility",
    drive: "to create comfort and beauty around you and to be needed by the people you love",
    shadow: "over-involvement, jealousy and martyrdom",
    strengths: ["Deeply caring", "Aesthetic instinct", "Creates comfortable spaces", "Reliable to family", "Charming and well-liked"],
    weaknesses: ["Takes on other people's responsibilities", "Possessive when insecure", "Avoids hard truths", "Indulgent with comfort", "Struggles to say no"],
    careerPaths: ["Design and interiors", "Fashion and beauty", "Hospitality and food", "Healthcare", "Teaching young children", "Luxury and lifestyle brands"],
    careerNote: "Venus rewards Mulank 6 in anything involving beauty, care or hospitality. Your work is judged by how something looks and feels, and you are unusually good at both.",
    loveNote: "Home and relationship are the core of your life. You are devoted, romantic and generous — and the boundary between caring and controlling is the lesson.",
    healthNote: "Venus governs the reproductive system, kidneys, throat and sugar balance. Comfort eating is the habit that most often turns into a diagnosis for this number.",
    moneyNote: "Money flows toward you and out again into the home, the family and beautiful things. Budgeting a fixed pleasure allowance protects both the savings and the joy.",
    remedies: ["Keep your home clean and fragrant", "Give something beautiful away on Fridays", "Wear white or pastel on Friday", "Say one honest no each week"],
    colours: ["White", "Pastel pink", "Sky blue"],
    days: ["Friday", "Wednesday"],
    friends: [3, 5, 6, 9],
    neutral: [1, 2, 4],
    challenge: [7, 8],
    famous: ["A. R. Rahman", "Amitabh Bachchan", "Victoria Beckham", "John Lennon"],
    affirmation: "I care for others without disappearing into them.",
  },
  {
    number: 7,
    archetype: "The Seeker",
    planet: "Ketu / Neptune",
    element: "Water",
    direction: "South",
    gemstone: "Cat's eye",
    deity: "Ketu / Ganesha",
    tarotCard: "The Chariot",
    tarotSlug: "the-chariot",
    essence: "research, detachment and inner life",
    drive: "to understand what is actually true, underneath what everyone agrees is true",
    shadow: "withdrawal, cynicism and emotional distance",
    strengths: ["Analytical depth", "Naturally intuitive", "Independent thinker", "Comfortable alone", "Sees through pretence"],
    weaknesses: ["Withdraws instead of talking", "Overly critical", "Sceptical to a fault", "Delays decisions", "Struggles with small talk"],
    careerPaths: ["Research and academia", "Data science", "Spiritual teaching", "Psychology", "Writing", "Investigative work"],
    careerNote: "Mulank 7 needs depth, autonomy and quiet. You are the specialist rather than the generalist, and open-plan urgency culture erodes both your output and your mood.",
    loveNote: "You love privately and slowly, and you need a partner who does not read silence as rejection. When you do commit, it is unusually durable.",
    healthNote: "Ketu numbers report vague, hard-to-diagnose complaints, plus sleep and digestive issues driven by rumination. Time outdoors is genuinely medicinal here.",
    moneyNote: "You are cautious with money and often under-charge for expertise. Pricing your knowledge properly is the fastest financial upgrade available to you.",
    remedies: ["Spend twenty minutes daily in silence", "Keep Tuesdays simple and unscheduled", "Walk barefoot on grass when you can", "Say the difficult thing instead of retreating"],
    colours: ["Smoke grey", "Purple", "Sea green"],
    days: ["Monday", "Tuesday"],
    friends: [2, 4, 7, 9],
    neutral: [1, 3, 5],
    challenge: [6, 8],
    famous: ["Nikola Tesla", "Leonardo DiCaprio", "Priyanka Chopra", "Julia Roberts"],
    affirmation: "I share what I know instead of hiding inside it.",
  },
  {
    number: 8,
    archetype: "The Executive",
    planet: "Saturn (Shani)",
    element: "Earth",
    direction: "West",
    gemstone: "Blue sapphire",
    deity: "Shani",
    tarotCard: "Strength",
    tarotSlug: "strength",
    essence: "discipline, power and delayed reward",
    drive: "to build lasting authority through effort that other people were not willing to sustain",
    shadow: "hardness, workaholism and a scarcity mindset that survives success",
    strengths: ["Exceptional endurance", "Strong business instinct", "Fair and principled", "Handles responsibility young", "Rebuilds after loss"],
    weaknesses: ["Emotionally guarded", "Works past exhaustion", "Slow to forgive", "Fears scarcity", "Controls rather than trusts"],
    careerPaths: ["Business ownership", "Finance and banking", "Law and judiciary", "Mining, steel and heavy industry", "Real estate", "Executive management"],
    careerNote: "Saturn pays late but it pays well. Mulank 8 careers often stall until the early thirties and then compound steeply — the mistake is quitting the long path two years before it works.",
    loveNote: "You are serious about commitment and awkward about romance. Partners need warmth expressed in words, not only in provision and reliability.",
    healthNote: "Saturn governs bones, joints, teeth and chronic conditions. Stress here settles in the body long-term, so recovery has to be scheduled like work is.",
    moneyNote: "You are the natural accumulator of the nine numbers, but the fear of losing it can outlive the risk. Reviewing your actual balance sheet quarterly calms this more than earning more does.",
    remedies: ["Serve or donate on Saturdays", "Respect elders and workers under you", "Take one full rest day each week", "Wear black or dark blue on Saturday"],
    colours: ["Black", "Navy", "Dark grey"],
    days: ["Saturday", "Friday"],
    friends: [4, 5, 8],
    neutral: [2, 7, 9],
    challenge: [1, 3, 6],
    famous: ["Warren Buffett", "Narayana Murthy", "Sushmita Sen", "Pablo Picasso"],
    affirmation: "I am allowed to enjoy what I have already built.",
  },
  {
    number: 9,
    archetype: "The Warrior",
    planet: "Mars (Mangal)",
    element: "Fire",
    direction: "South",
    gemstone: "Red coral",
    deity: "Mangal / Hanuman",
    tarotCard: "The Hermit",
    tarotSlug: "the-hermit",
    essence: "courage, energy and protective loyalty",
    drive: "to fight for something or someone worth defending, and to finish what you start",
    shadow: "anger, impulsiveness and burning bridges permanently",
    strengths: ["Physically and mentally energetic", "Courageous", "Fiercely protective", "Direct and honest", "Recovers quickly"],
    weaknesses: ["Quick temper", "Impatient", "Argumentative", "Acts before thinking", "Holds grudges"],
    careerPaths: ["Defence and police", "Surgery and emergency medicine", "Sports and fitness", "Engineering", "Startup operations", "Social causes"],
    careerNote: "Mulank 9 excels where urgency and courage are required and stagnates in slow, political environments. High-pressure, high-clarity work is where this number becomes exceptional.",
    loveNote: "You love with intensity and defend your people without hesitation. The relationship work is entirely about how you handle anger in the first ten minutes.",
    healthNote: "Mars rules blood, inflammation, accidents and the head. Physical training is not optional for this number — unspent energy becomes irritation and then symptoms.",
    moneyNote: "You earn through effort and courage and lose through impulsive decisions taken while annoyed. A twenty-four hour rule before any large spend is worth real money to you.",
    remedies: ["Exercise hard at least four days a week", "Pause before replying when angry", "Serve or donate on Tuesdays", "Wear red sparingly on important days"],
    colours: ["Red", "Maroon", "Coral"],
    days: ["Tuesday", "Sunday"],
    friends: [1, 3, 6, 9],
    neutral: [2, 4, 7],
    challenge: [5, 8],
    famous: ["Mahatma Gandhi", "Bruce Lee", "Salman Khan", "Serena Williams"],
    affirmation: "My strength is most useful when it is calm.",
  },
];

const DATE_MAP: Record<number, number[]> = {
  1: [1, 10, 19, 28],
  2: [2, 11, 20, 29],
  3: [3, 12, 21, 30],
  4: [4, 13, 22, 31],
  5: [5, 14, 23],
  6: [6, 15, 24],
  7: [7, 16, 25],
  8: [8, 17, 26],
  9: [9, 18, 27],
};

function buildPage(seed: Seed): MulankPage {
  const n = seed.number;
  const label = `Mulank ${n}`;
  const dates = DATE_MAP[n];
  const datesText = dates.join(", ");

  const meaning = [
    `${label} belongs to everyone born on the ${datesText} of any month. In Indian numerology the Mulank — also called the birth number, driver number or psychic number — is calculated from the day of the month alone, reduced to a single digit. Someone born on the ${dates[dates.length - 1]}th, for example, reduces to ${n}, which is why all of these dates share one number.`,
    `${label} is the number of ${seed.essence}. It is ruled by ${seed.planet} and carries the ${seed.element} element. Where your Life Path (calculated from the complete date of birth) describes the journey you are walking, your Mulank describes the personality you use to walk it — the instinctive, everyday self that shows up before you have had time to think.`,
    `The central drive of ${label} is ${seed.drive}. Because that drive runs automatically, most of the good and most of the trouble in a ${n}'s life traces back to it. Its shadow expression is ${seed.shadow}, and the two are not different energies — they are the same energy with and without self-awareness.`,
    `Traditional correspondences for ${label} are the planet ${seed.planet}, the deity ${seed.deity}, the gemstone ${seed.gemstone}, the direction ${seed.direction}, and the tarot archetype ${seed.tarotCard}. These are interpretive tools rather than rules: they give you several angles on the same pattern, so that if one framing doesn't land, another might.`,
    `Nothing about a Mulank is fixed or fated. It is a description of tendencies that show up strongly enough, often enough, to be worth naming. Read it as a mirror rather than a verdict.`,
  ];

  const personality = [
    `People usually notice two things about ${label} immediately: ${seed.strengths[0].toLowerCase()} and ${seed.strengths[1].toLowerCase()}. Because the Mulank governs your outer personality more than your inner journey, these traits appear early in life and stay consistent — friends from school and colleagues from last year will describe you in similar words.`,
    `In good conditions, ${n} expresses as ${seed.essence}: ${seed.strengths.slice(2).join(", ").toLowerCase()}. Under pressure, the same wiring shows up as ${seed.weaknesses[0].toLowerCase()} and ${seed.weaknesses[1].toLowerCase()}. Learning to recognise the switch — usually a physical feeling before it is a thought — is the most practical use of knowing your birth number.`,
    `Mulank ${n} personalities tend to mature in a recognisable arc. In the first three decades the number runs unfiltered and the shadow feels like personality. Somewhere in the thirties the cost becomes visible. After that, most ${n}s learn to keep the strength and spend the shadow deliberately rather than reactively.`,
  ];

  const career = [
    seed.careerNote,
    `When you assess a job offer as a Mulank ${n}, three questions matter more than salary: how much of the week uses ${seed.strengths[0].toLowerCase()}, how often the role triggers ${seed.weaknesses[0].toLowerCase()}, and whether the people around you will let you work the way ${seed.planet} energy naturally works. When those line up, this number performs far above average.`,
    `Timing helps too. Days that suit ${label} are ${seed.days.join(" and ")} — useful for launches, interviews, negotiations and difficult conversations. It is not superstition so much as scheduling: choosing a day you associate with confidence measurably changes how you show up.`,
  ];

  const love = [
    seed.loveNote,
    `In numerology, birth-number compatibility describes friction, not fate. ${label} finds natural ease with ${seed.friends.join(", ")}, has workable chemistry with ${seed.neutral.join(", ")}, and meets the most growth — and the most conflict — with ${seed.challenge.join(" and ")}. A well-communicating "challenging" pair still outperforms a silent "ideal" one.`,
    `The most useful relationship practice for a ${n} is naming the shadow out loud with your partner in a calm moment: "when I am stressed I become ${seed.shadow.split(",")[0]}." Doing that before the argument gives both of you a shared vocabulary during it.`,
  ];

  const health = [
    seed.healthNote,
    `This is not medical advice and numerology has no diagnostic power. What it does reliably is point at the lifestyle pattern a number tends to fall into, which makes it a decent prompt for a real check-up. The single most useful habit for Mulank ${n} is the one that directly counteracts ${seed.weaknesses[0].toLowerCase()} — usually small, unglamorous and daily.`,
  ];

  const money = [
    seed.moneyNote,
    `A rule that works for almost every ${label}: automate the behaviour your number is worst at. Willpower is a poor match for a planetary habit that has been running since childhood; a standing instruction is not.`,
  ];

  const compatibility: MulankCompatibility[] = [
    ...seed.friends.map((m) => ({
      number: m,
      verdict: "friend" as const,
      note: `Friendly. ${label} and ${m} want similar things at similar speeds, so less energy is lost in translation.`,
    })),
    ...seed.neutral.map((m) => ({
      number: m,
      verdict: "neutral" as const,
      note: `Neutral. Real common ground with one recurring friction point that is worth naming early rather than discovering late.`,
    })),
    ...seed.challenge.map((m) => ({
      number: m,
      verdict: "challenge" as const,
      note: `Challenging, and therefore instructive. The differences are genuine; handled honestly, this pairing matures both people faster than an easy one would.`,
    })),
  ];

  const faqs: MulankFaq[] = [
    {
      question: `Who has Mulank ${n}?`,
      answer: `Anyone born on the ${datesText} of any month has Mulank ${n}, because the day of birth reduces to ${n}. The month and year do not affect the Mulank — they affect your Life Path number instead.`,
    },
    {
      question: `What does Mulank ${n} mean?`,
      answer: `${label} is the number of ${seed.essence}, ruled by ${seed.planet}. Its core drive is ${seed.drive}, and its shadow is ${seed.shadow}.`,
    },
    {
      question: `What careers are best for Mulank ${n}?`,
      answer: `${seed.careerPaths.slice(0, 4).join(", ")} and similar fields suit ${label}. ${seed.careerNote}`,
    },
    {
      question: `Which numbers are compatible with Mulank ${n}?`,
      answer: `${label} is friendly with ${seed.friends.join(", ")}, neutral with ${seed.neutral.join(", ")}, and challenged by ${seed.challenge.join(" and ")}. Compatibility describes friction, not destiny.`,
    },
    {
      question: `What are the lucky colours, days and gemstone for Mulank ${n}?`,
      answer: `Lucky colours are ${seed.colours.join(", ")}, favourable days are ${seed.days.join(" and ")}, the traditional gemstone is ${seed.gemstone}, and supportive dates are the ${datesText}. Consult a qualified astrologer before wearing any gemstone.`,
    },
    {
      question: `Is Mulank the same as the Life Path number?`,
      answer: `No. Mulank uses only the day of the month, while the Life Path number uses the full date of birth. Mulank describes your visible, everyday personality; the Life Path describes the longer road. Most people read both together.`,
    },
  ];

  const journalPrompts = [
    `Where did ${seed.essence} show up in my week, and what did it make possible?`,
    `When did ${seed.shadow.split(",")[0]} take over, and what triggered it?`,
    `Which of my current commitments actually uses ${seed.strengths[0].toLowerCase()}?`,
    `What would change if I acted on the affirmation "${seed.affirmation}" for thirty days?`,
  ];

  const description = `Mulank ${n} (born on the ${datesText}): ${seed.archetype} personality ruled by ${seed.planet}. Traits, career, love compatibility, health, lucky colours, remedies and FAQs.`;

  const base = {
    slug: `mulank-${n}`,
    number: n,
    label,
    archetype: seed.archetype,
    title: `Mulank ${n} — ${seed.archetype}: Personality, Career, Love & Remedies`,
    description,
    keywords: [
      `mulank ${n}`,
      `birth number ${n}`,
      `radical number ${n}`,
      `mulank ${n} personality`,
      `mulank ${n} career`,
      `mulank ${n} compatibility`,
      `born on ${dates[0]} numerology`,
      `psychic number ${n}`,
    ],
    hero: `${label} belongs to everyone born on the ${datesText}. Ruled by ${seed.planet}, it is the number of ${seed.essence} — driven ${seed.drive}, and tested by ${seed.shadow}.`,
    dates,
    planet: seed.planet,
    element: seed.element,
    direction: seed.direction,
    gemstone: seed.gemstone,
    deity: seed.deity,
    tarotCard: seed.tarotCard,
    tarotSlug: seed.tarotSlug,
    lifePathSlug: `life-path-${n}`,
    luckyColours: seed.colours,
    luckyDays: seed.days,
    luckyNumbers: dates,
    meaning,
    personality,
    strengths: seed.strengths,
    weaknesses: seed.weaknesses,
    career,
    careerPaths: seed.careerPaths,
    love,
    health,
    money,
    remedies: seed.remedies,
    compatibility,
    famous: seed.famous,
    affirmation: seed.affirmation,
    journalPrompts,
    faqs,
    relatedSlugs: [
      `mulank-${(n % 9) + 1}`,
      `mulank-${((n + 3) % 9) + 1}`,
      `mulank-${((n + 5) % 9) + 1}`,
    ],
    updated: MULANK_UPDATED,
  };

  const wordCount = [
    base.hero,
    ...meaning,
    ...personality,
    ...seed.strengths,
    ...seed.weaknesses,
    ...career,
    ...seed.careerPaths,
    ...love,
    ...health,
    ...money,
    ...seed.remedies,
    ...compatibility.map((c) => c.note),
    ...journalPrompts,
    base.affirmation,
    ...faqs.flatMap((f) => [f.question, f.answer]),
  ]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return { ...base, wordCount, readingMinutes: Math.max(5, Math.round(wordCount / 200)) };
}

export const MULANK_PAGES: MulankPage[] = SEEDS.map(buildPage);

const bySlug = new Map(MULANK_PAGES.map((p) => [p.slug, p]));
export const getMulankPage = (slug: string): MulankPage | undefined => bySlug.get(slug);
export const MULANK_SLUGS = MULANK_PAGES.map((p) => p.slug);

/** FAQs shown on the `/numerology/mulank` hub page. */
export const MULANK_HUB_FAQS: MulankFaq[] = [
  {
    question: "What is Mulank in numerology?",
    answer:
      "Mulank — also called the birth number, driver number, radical number or psychic number — is the single digit obtained by reducing the day of the month you were born. Someone born on the 23rd has Mulank 5 (2+3), and someone born on the 28th has Mulank 1 (2+8=10, 1+0=1).",
  },
  {
    question: "How do I calculate my Mulank?",
    answer:
      "Take only the day of birth and add its digits until one digit remains. 7 stays 7; 14 becomes 1+4=5; 29 becomes 2+9=11, then 1+1=2. The month and year are ignored — those belong to the Life Path calculation.",
  },
  {
    question: "Is Mulank reduced to 11 or 22 as a master number?",
    answer:
      "No. Unlike the Life Path number, Mulank is always reduced to a single digit from 1 to 9, because the day of the month can only produce values from 1 to 31. Master numbers apply to the full-date calculation, not the birth number.",
  },
  {
    question: "What is the difference between Mulank and Bhagyank?",
    answer:
      "Mulank comes from the day of birth and describes your visible personality. Bhagyank — the destiny or Life Path number — comes from the full date of birth and describes your longer life direction. Reading them together is more accurate than reading either alone.",
  },
  {
    question: "Can two people with the same Mulank be very different?",
    answer:
      "Yes. Mulank is one layer of a numerology chart. Your Bhagyank, Personal Year, name number and lived circumstances all modify how the birth number expresses itself, which is why two people born on the 9th can look nothing alike.",
  },
  {
    question: "Is Mulank the same as astrology?",
    answer:
      "No, though they overlap. Mulank assigns a ruling planet to each number — Sun to 1, Moon to 2, Jupiter to 3 and so on — but it is calculated from your birth date arithmetic rather than from planetary positions at birth.",
  },
];
