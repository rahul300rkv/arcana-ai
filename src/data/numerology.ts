/**
 * Structured content layer for the 11 `/numerology/[slug]` pages —
 * Life Path 1–9 plus Master Numbers 11 and 22.
 *
 * As with the tarot library, the routes render entirely from these objects;
 * no page copy is hardcoded in JSX.
 */

export interface NumerologyFaq {
  question: string;
  answer: string;
}

export interface NumerologyCompatibility {
  number: string;
  verdict: "high" | "medium" | "growth";
  note: string;
}

export interface NumerologyPage {
  id: string;
  slug: string;
  number: number;
  isMaster: boolean;
  label: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
  archetype: string;
  tarotCard: string;
  tarotSlug: string;
  planet: string;
  element: string;
  hero: string;
  meaning: string[];
  personality: string[];
  strengths: string[];
  weaknesses: string[];
  career: string[];
  careerPaths: string[];
  relationships: string[];
  marriage: string[];
  money: string[];
  health: string[];
  spiritual: string[];
  luckyColours: string[];
  luckyDays: string[];
  luckyNumbers: number[];
  compatibility: NumerologyCompatibility[];
  famous: string[];
  lifeLessons: string[];
  affirmation: string;
  journalPrompts: string[];
  faqs: NumerologyFaq[];
  relatedSlugs: string[];
  wordCount: number;
  readingMinutes: number;
  updated: string;
}

const NUMEROLOGY_UPDATED = "2026-08-04";

interface Seed {
  number: number;
  isMaster?: boolean;
  archetype: string;
  tarotCard: string;
  tarotSlug: string;
  planet: string;
  element: string;
  essence: string;
  drive: string;
  shadow: string;
  strengths: string[];
  weaknesses: string[];
  careerPaths: string[];
  careerNote: string;
  loveNote: string;
  marriageNote: string;
  moneyNote: string;
  healthNote: string;
  spiritualNote: string;
  colours: string[];
  days: string[];
  numbers: number[];
  high: string[];
  medium: string[];
  growth: string[];
  famous: string[];
  lessons: string[];
  affirmation: string;
}

const SEEDS: Seed[] = [
  {
    number: 1,
    archetype: "The Pioneer",
    tarotCard: "The Magician",
    tarotSlug: "the-magician",
    planet: "Sun",
    element: "Fire",
    essence: "originality, leadership, and the will to begin",
    drive: "to lead rather than follow, and to leave something behind that carries your signature",
    shadow: "stubbornness, ego, and an allergy to being told what to do",
    strengths: ["Decisive under pressure", "Naturally original", "Self-motivated", "Comfortable taking responsibility", "Resilient after setbacks"],
    weaknesses: ["Impatient with slower people", "Struggles to delegate", "Takes criticism personally", "Can dominate a conversation", "Isolates when stressed"],
    careerPaths: ["Founder or business owner", "Team lead or department head", "Product or creative director", "Independent consultant", "Athlete or performer", "Sales leadership"],
    careerNote: "You do your best work when you own the outcome. Roles with a clear scoreboard and room to make calls suit you; layered approval chains drain you fast.",
    loveNote: "You love directly and dislike guessing games. Your partner needs enough independence not to feel steamrolled and enough steadiness to hold ground when you push.",
    marriageNote: "Marriage works when it is a partnership of equals with clearly divided territory. It struggles when one of you is expected to disappear into the other's plans.",
    moneyNote: "Money follows initiative for you — earnings tend to spike when you back yourself and flatten when you play safe. The risk is funding ideas faster than you validate them.",
    healthNote: "Sun-ruled numbers run hot: heart, blood pressure, eyes, and stress-driven inflammation. Your health depends less on training harder and more on genuinely stopping.",
    spiritualNote: "Your spiritual work is learning that leadership is service. The 1 grows the moment it stops proving and starts building something that outlasts its own name.",
    colours: ["Gold", "Deep red", "Amber"],
    days: ["Sunday", "Monday"],
    numbers: [1, 10, 19, 28],
    high: ["3", "5", "9"],
    medium: ["1", "2", "6"],
    growth: ["4", "8"],
    famous: ["Steve Jobs", "Martin Luther King Jr.", "Lady Gaga", "Sundar Pichai"],
    lessons: ["Independence is not the same as isolation", "Being right is worth less than being effective", "Delegation multiplies you; control divides you"],
    affirmation: "I lead from purpose, not from pride, and I allow others to walk beside me.",
  },
  {
    number: 2,
    archetype: "The Diplomat",
    tarotCard: "The High Priestess",
    tarotSlug: "the-high-priestess",
    planet: "Moon",
    element: "Water",
    essence: "sensitivity, partnership, and quiet influence",
    drive: "to create harmony and to be genuinely useful to the people you love",
    shadow: "self-erasure, indecision, and resentment you never voice",
    strengths: ["Reads a room instantly", "Exceptional listener", "Patient and diplomatic", "Loyal over decades", "Skilled at defusing conflict"],
    weaknesses: ["Avoids necessary confrontation", "Over-apologises", "Absorbs other people's moods", "Struggles to decide alone", "Keeps score silently"],
    careerPaths: ["Counsellor or therapist", "HR and people operations", "Diplomacy or mediation", "Nursing and care work", "Design and UX research", "Partnership or account management"],
    careerNote: "You thrive in the second seat with real influence: chief of staff, deputy, partner. Ruthlessly competitive environments cost you more than the salary is worth.",
    loveNote: "Love is your home territory. You give attentively and deeply — the work is asking for what you need before the resentment arrives.",
    marriageNote: "Yours is often a long, quietly happy marriage. The one risk is a slow disappearance: keep at least one part of life that is only yours.",
    moneyNote: "You are cautious and steady with money, which serves you well long term. Watch for lending to people who never repay and for underpricing your own work.",
    healthNote: "Moon-ruled numbers hold stress in the stomach and sleep. Emotional processing is not optional maintenance for you — it is your primary health practice.",
    spiritualNote: "The 2 is here to learn that peace built on silence is not peace. Real harmony includes your voice in it.",
    colours: ["Silver", "Pearl white", "Soft green"],
    days: ["Monday", "Friday"],
    numbers: [2, 11, 20, 29],
    high: ["6", "8", "9"],
    medium: ["1", "2", "3"],
    growth: ["5", "7"],
    famous: ["Barack Obama", "Emma Watson", "Kofi Annan", "Madonna"],
    lessons: ["Boundaries are an act of love, not a withdrawal of it", "Unspoken needs are unmet needs", "You can be kind and still say no"],
    affirmation: "My needs matter as much as the peace I create, and I speak them clearly.",
  },
  {
    number: 3,
    archetype: "The Communicator",
    tarotCard: "The Empress",
    tarotSlug: "the-empress",
    planet: "Jupiter",
    element: "Fire",
    essence: "expression, creativity, and social warmth",
    drive: "to be seen, understood, and delighted in — and to make other people feel that too",
    shadow: "scattered attention, avoidance through humour, and half-finished projects",
    strengths: ["Naturally expressive", "Quick and creative thinker", "Lifts the mood of a room", "Recovers from disappointment fast", "Connects unlikely people"],
    weaknesses: ["Starts more than it finishes", "Deflects hard feelings with jokes", "Sensitive to criticism", "Overcommits socially", "Spends impulsively"],
    careerPaths: ["Writer, presenter, or podcaster", "Marketing and brand", "Teaching and training", "Performing arts", "Design and content creation", "Community building"],
    careerNote: "Your career should have an audience. Work that never gets expressed or shared flattens you, however well it pays.",
    loveNote: "You fall in love with the conversation first. Longevity depends on choosing someone who is genuinely interesting to you, not just entertained by you.",
    marriageNote: "Marriage stays alive for you through play, novelty, and honest talk. Routine without delight is the thing to guard against.",
    moneyNote: "Income arrives in creative bursts. Building a boring monthly baseline — automated savings, one predictable income stream — turns talent into stability.",
    healthNote: "Jupiter expands what it touches: watch overindulgence, throat and respiratory strain, and the crash that follows sustained social output.",
    spiritualNote: "The 3 learns that depth and joy are not opposites. Finishing one meaningful thing teaches more than starting ten.",
    colours: ["Yellow", "Saffron", "Turquoise"],
    days: ["Thursday", "Tuesday"],
    numbers: [3, 12, 21, 30],
    high: ["1", "5", "9"],
    medium: ["2", "3", "6"],
    growth: ["4", "7"],
    famous: ["Amitabh Bachchan", "Jimmy Fallon", "Christina Aguilera", "Alfred Hitchcock"],
    lessons: ["Finishing is a creative skill, not a personality trait", "Being liked is not the same as being known", "Discipline protects your talent"],
    affirmation: "I finish what I begin, and my joy is deep as well as bright.",
  },
  {
    number: 4,
    archetype: "The Builder",
    tarotCard: "The Emperor",
    tarotSlug: "the-emperor",
    planet: "Saturn / Rahu",
    element: "Earth",
    essence: "structure, discipline, and reliability",
    drive: "to build something solid that does not fall over when you look away",
    shadow: "rigidity, over-work, and mistaking control for safety",
    strengths: ["Extremely dependable", "Systematic and organised", "Endures long projects", "Honest and direct", "Excellent under constraint"],
    weaknesses: ["Resists change", "Overworks by default", "Blunt when tired", "Struggles with ambiguity", "Slow to trust"],
    careerPaths: ["Engineering and architecture", "Operations and logistics", "Finance and audit", "Law and compliance", "Skilled trades", "Project management"],
    careerNote: "You are the person a company cannot replace with a process, because you are the process. Guard against becoming the bottleneck you built.",
    loveNote: "You show love in reliability rather than declarations. Say the words too — the people who love you need to hear them, not just observe them.",
    marriageNote: "Marriage is a long-term structure you take seriously. Keep it from becoming purely functional; schedule the romance if that's what it takes.",
    moneyNote: "You are the natural saver of the numbers. The risk is not overspending but under-living, and holding cash too long instead of investing it.",
    healthNote: "Saturnine numbers store tension in bones, joints, teeth, and the lower back. Mobility and rest days are not indulgence — they are maintenance.",
    spiritualNote: "The 4 learns that some things are held by trust rather than by grip. Surrender is a discipline too.",
    colours: ["Deep blue", "Grey", "Forest green"],
    days: ["Saturday", "Sunday"],
    numbers: [4, 13, 22, 31],
    high: ["2", "6", "8"],
    medium: ["4", "7", "9"],
    growth: ["3", "5"],
    famous: ["Bill Gates", "Oprah Winfrey", "Elton John", "Arnold Schwarzenegger"],
    lessons: ["Control and safety are different things", "Rest is part of the build", "Flexibility makes structures last longer"],
    affirmation: "I build with patience and I let go with trust.",
  },
  {
    number: 5,
    archetype: "The Explorer",
    tarotCard: "The Hierophant",
    tarotSlug: "the-hierophant",
    planet: "Mercury",
    element: "Air",
    essence: "freedom, change, and adaptability",
    drive: "to experience as much as possible and never to be trapped",
    shadow: "restlessness, escapism, and leaving just before things get good",
    strengths: ["Adapts to anything", "Persuasive communicator", "Fast learner", "Comfortable with risk", "Genuinely curious about people"],
    weaknesses: ["Bores quickly", "Avoids commitment", "Prone to excess", "Leaves projects mid-way", "Overloads the calendar"],
    careerPaths: ["Sales and business development", "Travel, hospitality, and events", "Journalism and media", "Trading and markets", "Tech and startups", "Consulting"],
    careerNote: "Variety is a requirement, not a preference. Roles with travel, changing problems, or performance-linked pay keep you engaged for years rather than months.",
    loveNote: "You need a partner who is a co-adventurer, not a supervisor. Freedom given freely is what makes you stay.",
    marriageNote: "Marriage works when it feels chosen again and again rather than settled once. Shared plans and new experiences keep the bond current.",
    moneyNote: "Money moves fast in both directions for you. Automating savings before the money reaches your spending account is the single highest-leverage habit.",
    healthNote: "Mercury numbers run on nervous energy: sleep, stimulants, and screen time matter more for you than for most. Movement resets you better than rest does.",
    spiritualNote: "The 5 learns that freedom without direction is just drift. Depth is the one adventure it habitually skips.",
    colours: ["Light green", "Silver-grey", "Sky blue"],
    days: ["Wednesday", "Friday"],
    numbers: [5, 14, 23],
    high: ["1", "3", "7"],
    medium: ["5", "6", "9"],
    growth: ["2", "4"],
    famous: ["Steven Spielberg", "Angelina Jolie", "Malcolm X", "Vincent van Gogh"],
    lessons: ["Commitment can expand freedom rather than shrink it", "Novelty is not the same as growth", "Staying is sometimes the braver choice"],
    affirmation: "I am free and I am committed; the two live together in me.",
  },
  {
    number: 6,
    archetype: "The Nurturer",
    tarotCard: "The Lovers",
    tarotSlug: "the-lovers",
    planet: "Venus",
    element: "Earth",
    essence: "responsibility, care, and beauty",
    drive: "to look after the people and places you love and to make them beautiful",
    shadow: "over-responsibility, martyrdom, and controlling through care",
    strengths: ["Deeply loyal", "Creates warmth wherever they are", "Strong aesthetic sense", "Reliable in a crisis", "Naturally counsels others"],
    weaknesses: ["Takes on other people's problems", "Struggles to receive help", "Perfectionist about home and family", "Guilt-driven", "Can be quietly controlling"],
    careerPaths: ["Healthcare and therapy", "Teaching and childcare", "Interior design and hospitality", "Food and wellness", "Non-profit and community work", "Customer experience leadership"],
    careerNote: "You need work that visibly helps someone. Meaningless output is genuinely harder for the 6 than long hours are.",
    loveNote: "You are the most naturally domestic number. The line to watch is care that quietly becomes management of another adult's life.",
    marriageNote: "Marriage and family are often the centre of the 6's chart. Keep the relationship a partnership rather than a caretaking arrangement.",
    moneyNote: "You spend generously on home and family and under-spend on yourself. A personal budget line — genuinely yours — corrects most of it.",
    healthNote: "Venus numbers hold stress in the throat, thyroid, and heart. Your health improves measurably when you stop carrying other people's emotional weight.",
    spiritualNote: "The 6 learns that love without boundaries becomes obligation. Service is only sustainable when it is chosen freshly.",
    colours: ["Rose pink", "Cream", "Emerald"],
    days: ["Friday", "Tuesday"],
    numbers: [6, 15, 24],
    high: ["2", "4", "9"],
    medium: ["3", "6", "8"],
    growth: ["1", "5"],
    famous: ["Mother Teresa", "John Lennon", "Meryl Streep", "Robert De Niro"],
    lessons: ["You cannot pour from an empty cup", "Care given for approval isn't care", "Letting others struggle is sometimes the kindest act"],
    affirmation: "I care deeply and I keep something back for myself, without guilt.",
  },
  {
    number: 7,
    archetype: "The Seeker",
    tarotCard: "The Chariot",
    tarotSlug: "the-chariot",
    planet: "Ketu / Neptune",
    element: "Water",
    essence: "analysis, introspection, and the search for truth",
    drive: "to understand what is really going on beneath the surface of everything",
    shadow: "withdrawal, cynicism, and overthinking instead of living",
    strengths: ["Formidable analytical mind", "Comfortable alone", "Sees through pretence", "Deep specialist knowledge", "Independent thinker"],
    weaknesses: ["Emotionally guarded", "Overthinks decisions", "Withdraws under stress", "Sceptical to the point of cynicism", "Perfectionism delays shipping"],
    careerPaths: ["Research and academia", "Data science and analytics", "Medicine and diagnostics", "Writing and philosophy", "Software engineering", "Investigation and forensics"],
    careerNote: "Depth beats breadth for you. Give the 7 one hard problem and real quiet, and the output is exceptional; give it constant meetings and it stalls.",
    loveNote: "You need space inside intimacy. The partner who works is the one who reads your silence as thought rather than rejection.",
    marriageNote: "Marriage requires you to say the inner monologue out loud. What feels obvious to you is invisible to everyone else.",
    moneyNote: "You research well and take fewer bad financial risks than most. The tendency is under-earning through reluctance to sell yourself.",
    healthNote: "Nervous-system and sleep issues dominate here, along with the physical effects of long isolation. Sunlight, company, and movement work faster than analysis.",
    spiritualNote: "The 7 is the most naturally spiritual number and the most likely to intellectualise it. Practice, not theory, is where it grows.",
    colours: ["Violet", "Indigo", "Sea green"],
    days: ["Monday", "Sunday"],
    numbers: [7, 16, 25],
    high: ["1", "5", "7"],
    medium: ["3", "4", "9"],
    growth: ["2", "8"],
    famous: ["Marie Curie", "Leonardo DiCaprio", "Stephen Hawking", "Natalie Portman"],
    lessons: ["Understanding is not the same as experiencing", "Trust requires exposure", "Solitude restores; isolation erodes"],
    affirmation: "I let people in without losing the quiet I need.",
  },
  {
    number: 8,
    archetype: "The Executive",
    tarotCard: "Strength / Justice",
    tarotSlug: "strength",
    planet: "Saturn",
    element: "Earth",
    essence: "power, ambition, and material mastery",
    drive: "to build real-world authority and to be judged on results",
    shadow: "workaholism, control, and measuring worth in outcomes only",
    strengths: ["Exceptional strategic thinking", "Endures pressure others can't", "Strong financial instinct", "Takes the hard decisions", "Rebuilds after loss"],
    weaknesses: ["Works past the point of usefulness", "Slow to show vulnerability", "Can be transactional", "Impatient with inefficiency", "Ties identity to achievement"],
    careerPaths: ["Executive leadership", "Finance, banking, and investment", "Real estate and construction", "Law and litigation", "Entrepreneurship at scale", "Operations at large organisations"],
    careerNote: "Karmic delay is the classic 8 story: slow early progress, then compounding authority from the mid-thirties. Persistence pays disproportionately for this number.",
    loveNote: "You show love through provision and protection. The relationship deepens the moment you let someone see the part of you that is tired.",
    marriageNote: "Marriage works when your partner is an equal stakeholder in the plan rather than a spectator to your career.",
    moneyNote: "Of all the numbers, the 8 has the strongest natural relationship with money — large cycles of gain and loss are common. Diversification and low leverage smooth the ride.",
    healthNote: "Saturn again: bones, knees, teeth, and chronic stress conditions. The 8's health risk is almost entirely the refusal to stop.",
    spiritualNote: "The 8 learns that power is a responsibility. Wealth used generously stops feeling like a scoreboard and starts feeling like meaning.",
    colours: ["Black", "Navy", "Deep bronze"],
    days: ["Saturday", "Friday"],
    numbers: [8, 17, 26],
    high: ["2", "4", "6"],
    medium: ["1", "8", "9"],
    growth: ["3", "7"],
    famous: ["Nelson Mandela", "Pablo Picasso", "Elizabeth Taylor", "Narendra Modi"],
    lessons: ["Worth is not output", "Power shared multiplies", "Loss is a cycle, not a verdict"],
    affirmation: "I am worthy beyond what I produce, and I use my power to lift others.",
  },
  {
    number: 9,
    archetype: "The Humanitarian",
    tarotCard: "The Hermit",
    tarotSlug: "the-hermit",
    planet: "Mars",
    element: "Fire",
    essence: "compassion, idealism, and completion",
    drive: "to leave the world better than you found it, at a scale bigger than your own life",
    shadow: "self-sacrifice, unresolved anger, and difficulty letting go",
    strengths: ["Genuinely compassionate", "Wide perspective", "Courageous about injustice", "Creative and expressive", "Forgiving over time"],
    weaknesses: ["Gives past the point of depletion", "Holds onto endings too long", "Suppressed anger", "Idealism collides with reality", "Neglects own needs"],
    careerPaths: ["Non-profit and humanitarian work", "Medicine and emergency services", "Teaching and social work", "Arts and film", "Environmental work", "Advocacy and public service"],
    careerNote: "The 9 needs to serve something larger than a balance sheet. Purpose-driven organisations retain you; purely commercial ones eventually hollow you out.",
    loveNote: "You love expansively and forgive a great deal. Watch for staying in a relationship out of compassion long after it has actually ended.",
    marriageNote: "Marriage deepens when you share a cause as well as a home. Endings, when they come, need proper mourning — the 9 does not do quick exits well.",
    moneyNote: "Money comes and goes, often given away faster than it is accumulated. Deciding in advance what percentage you give protects both generosity and stability.",
    healthNote: "Mars-ruled: inflammation, accidents, blood pressure, and the physical residue of suppressed anger. Vigorous exercise is genuinely therapeutic for this number.",
    spiritualNote: "The 9 completes the cycle. Its lesson is release — of grudges, of identities, of chapters that finished long before you agreed they had.",
    colours: ["Crimson", "Coral", "Gold"],
    days: ["Tuesday", "Thursday"],
    numbers: [9, 18, 27],
    high: ["1", "3", "6"],
    medium: ["2", "5", "9"],
    growth: ["4", "8"],
    famous: ["Mahatma Gandhi", "Jim Carrey", "Mother Jones", "Kurt Cobain"],
    lessons: ["Letting go is the whole curriculum", "Anger unspoken becomes illness", "You cannot save people who have not asked"],
    affirmation: "I release what is complete and I serve without losing myself.",
  },
  {
    number: 11,
    isMaster: true,
    archetype: "The Illuminator",
    tarotCard: "Justice",
    tarotSlug: "justice",
    planet: "Moon / Uranus",
    element: "Air",
    essence: "intuition, inspiration, and heightened sensitivity",
    drive: "to perceive what others miss and to put it into words that change how people see",
    shadow: "anxiety, self-doubt, and nervous overload",
    strengths: ["Unusually intuitive", "Inspires people effortlessly", "Sees patterns early", "Creative and visionary", "Deeply empathetic"],
    weaknesses: ["Anxiety and nervous tension", "Self-doubt disproportionate to ability", "Emotionally porous", "Extreme highs and lows", "Struggles with mundane logistics"],
    careerPaths: ["Teaching and mentoring", "Psychology and counselling", "Writing, film, and music", "Spiritual and wellness work", "Design and innovation", "Public speaking"],
    careerNote: "The 11 carries the 2's diplomacy at a higher voltage. Careers that use insight and expression fit; roles that are purely administrative cause real distress.",
    loveNote: "You feel your partner's state before they describe it. Grounded, steady partners suit you far better than equally volatile ones.",
    marriageNote: "Marriage gives the 11 the stability its nervous system needs. Shared routine is not boring for you — it is medicine.",
    moneyNote: "Income is uneven because the work is often creative or vocational. A conservative baseline budget removes the anxiety that otherwise dominates your finances.",
    healthNote: "The master numbers run at high frequency: anxiety, insomnia, and sensory overwhelm are the standard costs. Nervous-system care is the whole health strategy.",
    spiritualNote: "11 is the spiritual messenger. Its work is to trust the intuition it already has and to build a life stable enough to carry it.",
    colours: ["Silver", "White", "Pale violet"],
    days: ["Monday", "Sunday"],
    numbers: [11, 2, 20, 29],
    high: ["2", "6", "22"],
    medium: ["4", "9", "11"],
    growth: ["1", "8"],
    famous: ["Michelle Obama", "Wolfgang Amadeus Mozart", "Bill Clinton", "Jennifer Aniston"],
    lessons: ["Sensitivity is information, not weakness", "Ground first, then perceive", "Your doubt is not evidence"],
    affirmation: "I trust what I sense, and I build a steady life that can carry it.",
  },
  {
    number: 22,
    isMaster: true,
    archetype: "The Master Builder",
    tarotCard: "The Fool",
    tarotSlug: "the-fool",
    planet: "Saturn / Uranus",
    element: "Earth",
    essence: "vision made concrete at scale",
    drive: "to turn a large idea into something real that serves many people",
    shadow: "pressure, self-imposed impossibility, and paralysis before the size of the vision",
    strengths: ["Sees the whole system", "Practical and visionary at once", "Extraordinary stamina", "Inspires large teams", "Builds things that outlast them"],
    weaknesses: ["Crushing self-expectation", "Delays starting until conditions are perfect", "Difficulty resting", "Impatient with small thinking", "Can dismiss its own achievements"],
    careerPaths: ["Founding institutions or large organisations", "Architecture and infrastructure", "Public policy and reform", "Large-scale engineering", "Global non-profits", "Systems and platform design"],
    careerNote: "22 combines the 4's discipline with the 11's vision. The career risk is not lack of ability but never beginning, because the ambition intimidates its own owner.",
    loveNote: "Your partner needs to understand the scale of what you are building — and to insist you come home from it.",
    marriageNote: "Marriage grounds the 22 and keeps the mission human. Protect ordinary time together; it will always feel less urgent than the work, and it isn't.",
    moneyNote: "Large sums move through 22's hands, usually as project or organisational money rather than personal wealth. Clear separation between the two is essential.",
    healthNote: "Chronic overwork is the defining health risk, expressed as exhaustion, back and joint strain, and stress conditions. Scheduled rest is a structural requirement.",
    spiritualNote: "22 is here to prove that the practical and the visionary are one thing. Its spirituality shows up as built results, not as retreat.",
    colours: ["Deep blue", "Gold", "Earth brown"],
    days: ["Saturday", "Sunday"],
    numbers: [22, 4, 13, 31],
    high: ["4", "6", "11"],
    medium: ["2", "8", "22"],
    growth: ["3", "5"],
    famous: ["Nelson Mandela", "Bill Gates", "Dalai Lama", "Paul McCartney"],
    lessons: ["Start before it is perfect", "The vision needs a body that survives it", "Small consistent steps build large things"],
    affirmation: "I begin now, at the scale I can hold today, and I let it grow.",
  },
];

function slugFor(seed: Seed): string {
  return seed.isMaster ? `master-number-${seed.number}` : `life-path-${seed.number}`;
}

function labelFor(seed: Seed): string {
  return seed.isMaster ? `Master Number ${seed.number}` : `Life Path ${seed.number}`;
}

function buildPage(seed: Seed, all: Seed[]): NumerologyPage {
  const slug = slugFor(seed);
  const label = labelFor(seed);
  const name = `${label} — ${seed.archetype}`;

  const meaning = [
    `${label} is the number of ${seed.essence}. In numerology your Life Path is the sum of your full date of birth reduced to a single digit (or to a master number), and it describes the road you are walking rather than the person you were born as. For ${label}, that road is defined by one central drive: ${seed.drive}.`,
    seed.isMaster
      ? `Master numbers are not reduced further, because the doubled digit carries a higher charge than its reduced form. ${label} contains the raw material of ${seed.number === 11 ? "the 2" : "the 4"} but runs it at a much higher voltage — greater potential and, honestly, greater strain.`
      : `Every Life Path has a light and a shadow expression, and they are the same energy pointed in different directions. For the ${seed.number}, the light is ${seed.essence}; the shadow is ${seed.shadow}. Most people live somewhere between the two, moving closer to the light as they mature.`,
    `${label} is traditionally linked with ${seed.planet} and the element of ${seed.element}, and it maps to the tarot archetype of ${seed.tarotCard}. Those correspondences give you another way in: when you read the tarot card, you are reading the same story in pictures.`,
    `Nothing here is deterministic. A Life Path number is a description of tendencies and lessons, not a script. Its value is diagnostic — it names the pattern you keep meeting so that you can meet it deliberately instead of by accident.`,
  ];

  const personality = [
    `People with ${label} are usually recognised first for ${seed.strengths[0].toLowerCase()} and ${seed.strengths[1].toLowerCase()}. There is a consistency to how you show up: over years, the same qualities keep being the reason people call you.`,
    `Underneath the visible traits sits the engine — ${seed.drive}. When that drive has somewhere to go, this number is one of the most effective in numerology. When it is blocked, it turns into ${seed.shadow}, which is the version of the number people complain about.`,
    `The maturity curve for ${label} is fairly predictable. Early on, the number's strengths run unregulated and its shadow runs unnoticed. In the middle years, the shadow becomes costly enough to be visible. After that, the number tends to integrate: the same energy, deliberately aimed.`,
  ];

  const career = [
    seed.careerNote,
    `Fit matters more than title for ${label}. The question worth asking of any role is not "is this a good job" but "does this job let the ${seed.number} in me do what it does". When the answer is yes, performance and health both improve; when it is no, no amount of compensation fixes it for long.`,
    `If you are choosing between options right now, score each one against three things: how much of your day uses ${seed.strengths[0].toLowerCase()}, how much it triggers ${seed.weaknesses[0].toLowerCase()}, and whether the people around you will let you work the way this number works best.`,
  ];

  const relationships = [
    seed.loveNote,
    `In friendship and family the same pattern holds. ${label} gives ${seed.essence} generously and expects a specific thing in return — usually to be met at the same depth or the same pace. Mismatches there cause more of your relationship friction than personality clashes do.`,
    `The compatibility table further down is a starting point, not a rule. Two people with "difficult" numbers who communicate well outperform an "ideal" pairing that doesn't, every single time.`,
  ];

  const marriage = [
    seed.marriageNote,
    `Practically, marriages involving ${label} tend to be tested at the point where ${seed.shadow} appears. Naming that pattern out loud with your partner — before the argument, not during it — defuses most of its power.`,
    `The strongest long-term marriages for this number share three things: honest conflict, protected individual space, and something you are building together that neither of you would build alone.`,
  ];

  const money = [
    seed.moneyNote,
    `Numerology is not financial advice, and this page cannot see your circumstances. Treat the pattern above as a hypothesis about your habits and check it against your actual bank statements from the last three months — the numbers will tell you quickly whether it fits.`,
    `One practical rule works for almost every ${label}: automate the behaviour your number is worst at. If the shadow is impulse, automate saving. If the shadow is hoarding, automate giving and investing.`,
  ];

  const health = [
    seed.healthNote,
    `None of this is a medical claim. Numerology has no diagnostic power; what it can do is point at the lifestyle pattern your number tends to fall into and prompt you to check in with a professional when something feels off.`,
    `The most useful health habit for ${label} is the one that directly counteracts ${seed.weaknesses[0].toLowerCase()}. That is usually unglamorous, small, and daily.`,
  ];

  const spiritual = [
    seed.spiritualNote,
    `A simple practice: once a week, write one sentence about where ${seed.essence} showed up in your life and one about where ${seed.shadow} did. Over a few months that record teaches you more about your number than any interpretation can.`,
  ];

  const compatibility: NumerologyCompatibility[] = [
    ...seed.high.map((n) => ({
      number: n,
      verdict: "high" as const,
      note: `Natural ease. ${label} and ${n} tend to want compatible things at compatible speeds, so less energy goes into translation.`,
    })),
    ...seed.medium.map((n) => ({
      number: n,
      verdict: "medium" as const,
      note: `Workable with awareness. There is real common ground here, plus one recurring friction point worth naming early.`,
    })),
    ...seed.growth.map((n) => ({
      number: n,
      verdict: "growth" as const,
      note: `A growth pairing. The differences are genuine and they are also the lesson — this combination matures both people when both are willing.`,
    })),
  ];

  const faqs: NumerologyFaq[] = [
    {
      question: `What does ${label} mean in numerology?`,
      answer: `${label} is the number of ${seed.essence}. Its core drive is ${seed.drive}, and its main shadow is ${seed.shadow}. It corresponds to ${seed.planet}, the element of ${seed.element}, and the tarot archetype ${seed.tarotCard}.`,
    },
    {
      question: `How do I calculate my Life Path number?`,
      answer: `Add every digit of your full date of birth and reduce the total to a single digit — for example 22-07-1998 becomes 2+2+0+7+1+9+9+8 = 38, then 3+8 = 11, then 1+1 = 2. Totals of 11 and 22 are kept as master numbers rather than reduced. You can do this automatically with the free AstroFree calculator.`,
    },
    {
      question: `What careers suit ${label}?`,
      answer: `${seed.careerPaths.slice(0, 4).join(", ")} and similar roles suit ${label}. ${seed.careerNote}`,
    },
    {
      question: `Which numbers is ${label} most compatible with?`,
      answer: `${label} generally flows most easily with ${seed.high.join(", ")}; ${seed.medium.join(", ")} work with awareness; and ${seed.growth.join(" and ")} are growth pairings that challenge and mature both people.`,
    },
    {
      question: `What are the lucky colours, days, and numbers for ${label}?`,
      answer: `Lucky colours are ${seed.colours.join(", ")}. Favourable days are ${seed.days.join(" and ")}. Supportive numbers are ${seed.numbers.join(", ")}.`,
    },
    {
      question: seed.isMaster
        ? `Is ${seed.number} always treated as a master number?`
        : `Is a Life Path number the same as a Mulank?`,
      answer: seed.isMaster
        ? `Most modern numerologists keep 11 and 22 unreduced when they appear as a Life Path total, because the doubled digit carries a distinct, higher-intensity meaning. Some traditions reduce them to ${seed.number === 11 ? "2" : "4"} — reading both interpretations usually gives the fullest picture.`
        : `No. Your Mulank (or birth number) comes from the day of the month you were born, reduced to one digit. Your Life Path uses the entire date of birth. They describe different layers, and AstroFree's calculator returns both.`,
    },
  ];

  const journalPrompts = [
    `Where did ${seed.essence} show up in my life this week, and where did I block it?`,
    `What does ${seed.shadow} cost me, in specific and measurable terms?`,
    `If I fully lived the light side of ${label} for one month, what would visibly change?`,
    `Which of my life lessons — ${seed.lessons[0].toLowerCase()} — am I currently avoiding?`,
  ];

  const relatedSlugs = all
    .filter((s) => s.number !== seed.number)
    .slice(0, 4)
    .map(slugFor);

  const base = {
    id: slug,
    slug,
    number: seed.number,
    isMaster: Boolean(seed.isMaster),
    label,
    name,
    title: `${label}: ${seed.archetype} — Meaning, Career, Love & Compatibility`,
    description: `${label} in numerology means ${seed.essence}. Full guide to personality, strengths, weaknesses, career, marriage, money, health, lucky colours and compatibility.`,
    keywords: [
      `${label.toLowerCase()}`,
      `${label.toLowerCase()} meaning`,
      `${label.toLowerCase()} personality`,
      `${label.toLowerCase()} career`,
      `${label.toLowerCase()} compatibility`,
      `numerology ${seed.number}`,
      `${seed.archetype.toLowerCase()} numerology`,
    ],
    archetype: seed.archetype,
    tarotCard: seed.tarotCard,
    tarotSlug: seed.tarotSlug,
    planet: seed.planet,
    element: seed.element,
    hero: `${label} is the numerology of ${seed.essence} — driven ${seed.drive}, and challenged by ${seed.shadow}.`,
    meaning,
    personality,
    strengths: seed.strengths,
    weaknesses: seed.weaknesses,
    career,
    careerPaths: seed.careerPaths,
    relationships,
    marriage,
    money,
    health,
    spiritual,
    luckyColours: seed.colours,
    luckyDays: seed.days,
    luckyNumbers: seed.numbers,
    compatibility,
    famous: seed.famous,
    lifeLessons: seed.lessons,
    affirmation: seed.affirmation,
    journalPrompts,
    faqs,
    relatedSlugs,
    updated: NUMEROLOGY_UPDATED,
  };

  const wordCount = [
    base.hero,
    ...meaning,
    ...personality,
    ...seed.strengths,
    ...seed.weaknesses,
    ...career,
    ...seed.careerPaths,
    ...relationships,
    ...marriage,
    ...money,
    ...health,
    ...spiritual,
    ...compatibility.map((c) => c.note),
    ...seed.lessons,
    ...journalPrompts,
    base.affirmation,
    ...faqs.flatMap((f) => [f.question, f.answer]),
  ]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return { ...base, wordCount, readingMinutes: Math.max(5, Math.round(wordCount / 200)) };
}

export const NUMEROLOGY_PAGES: NumerologyPage[] = SEEDS.map((s) => buildPage(s, SEEDS));

const bySlug = new Map(NUMEROLOGY_PAGES.map((p) => [p.slug, p]));
export const getNumerologyPage = (slug: string): NumerologyPage | undefined => bySlug.get(slug);
export const NUMEROLOGY_SLUGS = NUMEROLOGY_PAGES.map((p) => p.slug);
