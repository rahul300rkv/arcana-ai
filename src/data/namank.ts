/**
 * Content layer for the Namank (Name Number) calculator at
 * `/namank-calculator`. Namank is derived from the letters of the full
 * name using the Chaldean system — deliberately different from Mulank
 * (day of birth) and Bhagyank (full date of birth).
 * See `src/lib/numerology/namank.ts` for the maths.
 */

export interface NamankMeaning {
  number: number;
  title: string;
  archetype: string;
  meaning: string;
  personality: string[];
  strengths: string[];
  challenges: string[];
  career: string[];
  relationships: string;
  financial: string;
  lifePurpose: string;
  guidance: string[];
}

export const NAMANK_MEANINGS: Record<number, NamankMeaning> = {
  1: {
    number: 1,
    title: "Namank 1 — The Leader",
    archetype: "Independence and initiative",
    meaning:
      "Namank 1 is traditionally read as a name vibration built around leadership, originality and self-reliance. In Chaldean tradition, 1 carries solar energy — it is the number of a strong personal identity and a natural instinct to lead rather than follow, whatever the name's owner's day-to-day role may be.",
    personality: [
      "Confident and quick to take charge when a situation calls for direction",
      "Strong individuality; resists being lumped in with the crowd",
      "Driven by ambition and a need to stand out through original work",
      "Can be direct to the point of bluntness under pressure",
    ],
    strengths: ["Originality", "Self-motivation", "Decisiveness", "Resilience"],
    challenges: [
      "A tendency toward stubbornness once a course is set",
      "Difficulty sharing credit or delegating meaningfully",
      "Impatience with slower-moving people or processes",
    ],
    career: [
      "Traditionally favours entrepreneurial, founding or highly autonomous roles",
      "Performs best where effort and outcome are directly linked",
      "Can chafe inside rigid hierarchies that reward tenure over initiative",
    ],
    relationships:
      "Namank 1 names are said to carry an independent streak in relationships — needing a partner who respects autonomy rather than expecting constant closeness. Affection tends to be shown through action rather than words.",
    financial:
      "Chaldean tradition links this vibration to income earned through individual effort — business, commission or self-directed work — with a caution against under-diversifying due to strong self-belief.",
    lifePurpose:
      "The traditional reading is of a name built to originate rather than maintain — to start ventures, ideas or bodies of work that did not exist before.",
    guidance: [
      "Aim competitiveness at a clear goal instead of constant comparison with others",
      "Practice sharing ownership of small tasks to build trust in a team",
      "Pair bold decisions with a habit of checking in on the people they affect",
    ],
  },
  2: {
    number: 2,
    title: "Namank 2 — The Diplomat",
    archetype: "Balance and cooperation",
    meaning:
      "Namank 2 is associated with the Moon in Chaldean tradition — sensitivity, intuition and a gift for bringing people together. Names carrying this vibration are read as naturally attuned to the feelings of others and inclined toward partnership over solo pursuit.",
    personality: [
      "Empathetic and quick to sense tension in a room",
      "Prefers collaboration to going it alone",
      "Diplomatic; often the one who smooths disagreements",
      "Can be indecisive when asked to choose a side",
    ],
    strengths: ["Intuition", "Tact", "Patience", "Emotional intelligence"],
    challenges: [
      "Over-sensitivity to criticism, real or perceived",
      "A tendency to avoid necessary confrontation",
      "Self-doubt when working without external validation",
    ],
    career: [
      "Suits mediation, counselling, HR, hospitality and partnership-based work",
      "Thrives in team settings more than solitary, competitive ones",
      "Can be undervalued in cultures that reward loud self-promotion",
    ],
    relationships:
      "Namank 2 is traditionally read as deeply relational — seeking harmony, closeness and mutual give-and-take. The risk is over-accommodating a partner at the cost of one's own needs.",
    financial:
      "Steadier, partnership-based income (joint ventures, salaried teamwork) is favoured over solo risk-taking, according to tradition.",
    lifePurpose:
      "Read as being here to bring people together — to mediate, connect and build bridges between differing views.",
    guidance: [
      "Practice stating a preference clearly before defaulting to compromise",
      "Set boundaries even when it risks short-term friction",
      "Use intuition as a starting point for decisions, not the entire basis",
    ],
  },
  3: {
    number: 3,
    title: "Namank 3 — The Communicator",
    archetype: "Creativity and expression",
    meaning:
      "Namank 3 is linked to Jupiter in Chaldean tradition — expansion, optimism and expressive talent. Names carrying this vibration are traditionally read as naturally creative, sociable and drawn to communication in some form.",
    personality: [
      "Expressive and comfortable in front of an audience, large or small",
      "Optimistic outlook, quick to find the silver lining",
      "Drawn to creative or communicative outlets — writing, speech, performance",
      "Can scatter energy across too many projects at once",
    ],
    strengths: ["Creativity", "Charisma", "Optimism", "Verbal fluency"],
    challenges: [
      "Difficulty finishing what gets started",
      "A tendency to exaggerate or oversell",
      "Restlessness with routine or repetitive work",
    ],
    career: [
      "Favours writing, media, marketing, teaching, performance and public-facing roles",
      "Does best where variety and self-expression are part of the job",
      "Can underperform in narrowly procedural or isolated roles",
    ],
    relationships:
      "Namank 3 is read as bringing warmth, humour and social energy to relationships, with the caution that partners may want more emotional depth than surface charm alone provides.",
    financial:
      "Tradition associates 3 with income drawn from creative or communicative skill, though it warns against inconsistent follow-through with money as with projects.",
    lifePurpose:
      "Read as being here to express and uplift — through words, art or performance that lifts the mood of a room.",
    guidance: [
      "Finish one project before starting the next, even briefly",
      "Balance sociability with dedicated quiet time to recharge",
      "Put a simple budget in place to offset a scattered relationship with money",
    ],
  },
  4: {
    number: 4,
    title: "Namank 4 — The Builder",
    archetype: "Discipline and stability",
    meaning:
      "Namank 4 is linked to Rahu (the Lunar North Node) in Chaldean tradition and is read as the most grounded, structure-seeking of the core numbers. Names with this vibration are traditionally associated with discipline, practicality and a preference for solid foundations over shortcuts.",
    personality: [
      "Methodical, dependable and detail-oriented",
      "Prefers proven processes over untested ideas",
      "Values order, routine and clear rules",
      "Can be rigid or resistant to sudden change",
    ],
    strengths: ["Discipline", "Reliability", "Practical planning", "Persistence"],
    challenges: [
      "Difficulty adapting quickly when plans change",
      "A tendency toward overwork or excessive caution",
      "Can come across as inflexible to more spontaneous personalities",
    ],
    career: [
      "Favours engineering, finance, project management, administration and skilled trades",
      "Excels where consistency and precision are rewarded",
      "Can struggle in fast-pivoting, ambiguous environments",
    ],
    relationships:
      "Namank 4 is read as loyal and steady in relationships, showing love through consistency and reliability rather than grand gestures.",
    financial:
      "Tradition favours slow, methodical wealth-building — savings and steady work — over speculative risk for this vibration.",
    lifePurpose:
      "Read as being here to build lasting structures — institutions, systems or foundations that outlast the person who built them.",
    guidance: [
      "Schedule deliberate flexibility into otherwise rigid plans",
      "Delegate occasionally rather than controlling every detail",
      "Balance long-term saving with allowing some room for spontaneity",
    ],
  },
  5: {
    number: 5,
    title: "Namank 5 — The Explorer",
    archetype: "Freedom and adaptability",
    meaning:
      "Namank 5 is linked to Mercury in Chaldean tradition — versatility, curiosity and a love of movement. Names carrying this vibration are traditionally read as quick-thinking, adaptable and drawn to variety over routine.",
    personality: [
      "Curious, quick-witted and easily bored by repetition",
      "Comfortable with change; often the first to embrace something new",
      "Naturally persuasive and communicative",
      "Can struggle with follow-through or commitment",
    ],
    strengths: ["Adaptability", "Wit", "Resourcefulness", "Versatility"],
    challenges: [
      "Restlessness that undercuts long-term projects",
      "A tendency toward impulsive decisions",
      "Difficulty with routines that feel confining",
    ],
    career: [
      "Favours sales, travel, journalism, consulting and roles with built-in variety",
      "Does poorly in highly repetitive or tightly scripted work",
      "Thrives where quick thinking is rewarded over slow deliberation",
    ],
    relationships:
      "Namank 5 is read as needing room to breathe in relationships — a partner who doesn't mistake independence for disinterest.",
    financial:
      "Tradition associates 5 with variable, opportunity-driven income, with a caution against impulsive spending during high-energy periods.",
    lifePurpose:
      "Read as being here to explore, adapt and bring fresh perspective wherever routine has settled in too comfortably.",
    guidance: [
      "Build finishing into the calendar rather than relying on willpower alone",
      "Pause before big decisions made in a burst of enthusiasm",
      "Anchor at least one steady routine to offset constant change",
    ],
  },
  6: {
    number: 6,
    title: "Namank 6 — The Nurturer",
    archetype: "Harmony and responsibility",
    meaning:
      "Namank 6 is linked to Venus in Chaldean tradition — harmony, beauty and care for others. Names with this vibration are traditionally read as naturally responsible, aesthetically minded and oriented toward home and community.",
    personality: [
      "Caring and quick to take on responsibility for others",
      "Appreciates beauty, comfort and harmonious surroundings",
      "Strong sense of duty toward family and close relationships",
      "Can overextend by taking on too much of others' burdens",
    ],
    strengths: ["Compassion", "Reliability", "Aesthetic sense", "Fairness"],
    challenges: [
      "Difficulty saying no, leading to over-commitment",
      "A tendency toward self-sacrifice at personal cost",
      "Can become controlling when trying to 'fix' others' problems",
    ],
    career: [
      "Favours healthcare, education, design, hospitality and community-facing roles",
      "Thrives where care for others is a core part of the work",
      "Should watch for burnout in caregiving-heavy roles",
    ],
    relationships:
      "Namank 6 is read as deeply devoted in relationships and family life, with the caution that devotion can tip into over-involvement in others' choices.",
    financial:
      "Tradition links 6 to comfortable, home-oriented spending, with a caution against overspending on others at the expense of personal savings.",
    lifePurpose:
      "Read as being here to nurture — building homes, communities and relationships that others can rely on.",
    guidance: [
      "Practice saying no without guilt when already stretched thin",
      "Set clear boundaries between helping and controlling",
      "Reserve some care and resources for personal needs, not only others'",
    ],
  },
  7: {
    number: 7,
    title: "Namank 7 — The Seeker",
    archetype: "Wisdom and introspection",
    meaning:
      "Namank 7 is linked to Ketu (the Lunar South Node) in Chaldean tradition — introspection, analysis and a pull toward deeper understanding. Names carrying this vibration are traditionally read as thoughtful, private and drawn to knowledge over surface appearances.",
    personality: [
      "Analytical and inclined to research before acting",
      "Values privacy and can seem reserved to new acquaintances",
      "Drawn to philosophy, spirituality or specialised expertise",
      "Can overthink decisions that call for quicker action",
    ],
    strengths: ["Analytical depth", "Intuition", "Independence of thought", "Focus"],
    challenges: [
      "A tendency toward isolation or overthinking",
      "Can appear aloof or hard to read to others",
      "Perfectionism that delays action",
    ],
    career: [
      "Favours research, analysis, science, spirituality-adjacent and specialist technical work",
      "Does best with autonomy and depth over constant social interaction",
      "Can struggle in highly extroverted, fast-paced team environments",
    ],
    relationships:
      "Namank 7 is read as needing solitude to recharge, which can be misread as distance by partners who equate closeness with constant togetherness.",
    financial:
      "Tradition favours careful, research-driven financial decisions for this vibration, with a caution against isolating from trusted advice.",
    lifePurpose:
      "Read as being here to seek and share deeper understanding — through study, reflection or specialised knowledge.",
    guidance: [
      "Set a decision deadline to prevent analysis from stalling action",
      "Share more of the internal process with people who care, even briefly",
      "Schedule social time deliberately rather than waiting for the mood to strike",
    ],
  },
  8: {
    number: 8,
    title: "Namank 8 — The Achiever",
    archetype: "Power and material success",
    meaning:
      "Namank 8 is linked to Saturn in Chaldean tradition — discipline, ambition and long-term achievement. Names carrying this vibration are traditionally read as the most outcome- and authority-oriented of the core numbers, associated with sustained effort toward material success.",
    personality: [
      "Ambitious and comfortable with responsibility and authority",
      "Organised, results-driven and persistent through setbacks",
      "Strong sense of justice and fairness in dealings",
      "Can become overly focused on status or outcomes",
    ],
    strengths: ["Ambition", "Organisation", "Resilience", "Business acumen"],
    challenges: [
      "A tendency toward workaholism",
      "Over-identifying self-worth with achievement",
      "Can be perceived as controlling or overly authoritative",
    ],
    career: [
      "Favours business, finance, law, management and other authority-based roles",
      "Suited to long-haul goals that reward patience and discipline",
      "Should guard against letting work fully crowd out personal life",
    ],
    relationships:
      "Namank 8 is read as loyal and providing in relationships, with the caution that ambition can leave little bandwidth for emotional presence.",
    financial:
      "Chaldean tradition treats 8 as the strongest vibration for material and business success, paired with a caution against equating net worth with self-worth.",
    lifePurpose:
      "Read as being here to build lasting authority and material achievement through sustained, disciplined effort.",
    guidance: [
      "Schedule deliberate downtime that isn't treated as wasted time",
      "Separate self-worth from quarterly or annual results",
      "Practice delegating authority instead of controlling every outcome",
    ],
  },
  9: {
    number: 9,
    title: "Namank 9 — The Humanitarian",
    archetype: "Compassion and service",
    meaning:
      "Namank 9 is traditionally treated as the number of completion and universal compassion in Chaldean numerology — notably, no letter maps directly to 9, so it typically appears only as a reduced total. Names that resolve to 9 are read as carrying broad concern for others and a pull toward service beyond the self.",
    personality: [
      "Compassionate and drawn to causes bigger than personal gain",
      "Comfortable letting go of what no longer serves them",
      "Idealistic, sometimes to the point of being impractical",
      "Can struggle with boundaries when helping others",
    ],
    strengths: ["Compassion", "Broad-mindedness", "Courage", "Generosity"],
    challenges: [
      "A tendency toward martyrdom or self-neglect",
      "Difficulty with the practical, day-to-day details of a plan",
      "Can be disappointed when reality falls short of ideals",
    ],
    career: [
      "Favours nonprofit work, activism, healthcare, teaching and creative fields with a message",
      "Does best where the work serves something larger than individual gain",
      "Should pair idealism with practical support to see plans through",
    ],
    relationships:
      "Namank 9 is read as generous and broad-hearted in relationships, with the caution that generosity extended everywhere can leave a partner feeling like one of many causes.",
    financial:
      "Tradition associates 9 with generosity that can undercut personal financial stability, and recommends structured giving over impulsive giving.",
    lifePurpose:
      "Read as being here to serve a cause larger than the individual self — humanitarian work, art with a message, or broad compassion in action.",
    guidance: [
      "Set clear limits on giving — time, money and energy — to sustain it long-term",
      "Pair big ideals with a concrete, practical next step",
      "Make space for close, individual relationships alongside broader causes",
    ],
  },
  11: {
    number: 11,
    title: "Namank 11 — The Illuminator (Master Number)",
    archetype: "Intuition and inspiration, intensified",
    meaning:
      "Namank 11 is a Master Number, traditionally read as an intensified version of 2 — heightened intuition, sensitivity and the potential to inspire others, carried with greater pressure and higher stakes than the base number.",
    personality: [
      "Highly intuitive, sometimes to the point of feeling overwhelmed by others' emotions",
      "Idealistic and drawn to meaningful, inspiring work",
      "Charismatic in a quiet, magnetic rather than loud way",
      "Prone to nervous energy or self-doubt under pressure",
    ],
    strengths: ["Heightened intuition", "Inspirational presence", "Sensitivity", "Vision"],
    challenges: [
      "Susceptible to anxiety and overwhelm from high sensitivity",
      "Can struggle to ground big ideas in practical steps",
      "May feel pressure to live up to the number's intensity",
    ],
    career: [
      "Favours counselling, teaching, the arts, spiritual guidance and inspirational leadership",
      "Benefits from a grounded 4-style partner or process to execute on vision",
      "Can burn out without adequate rest and boundaries",
    ],
    relationships:
      "Namank 11 is read as deeply intuitive about a partner's needs, with the caution of absorbing too much of their emotional weight.",
    financial:
      "Tradition suggests pairing intuitive opportunity-spotting with a practical plan, since 11's instincts are strong but follow-through needs structure.",
    lifePurpose:
      "Read as being here to inspire and illuminate — carrying insight that, when grounded, can genuinely uplift others.",
    guidance: [
      "Build a practical support system to turn intuition into action",
      "Protect personal energy with deliberate rest and boundaries",
      "Ground big visions in small, concrete first steps",
    ],
  },
  22: {
    number: 22,
    title: "Namank 22 — The Master Builder (Master Number)",
    archetype: "Large-scale achievement, intensified",
    meaning:
      "Namank 22 is a Master Number, traditionally read as an intensified version of 4 — the discipline and structure of the Builder combined with the ambition to create on a much larger scale, often described as the most powerful of the Master Numbers.",
    personality: [
      "Highly disciplined with an unusually large-scale vision",
      "Practical and idealistic at once — wants to build something that lasts and matters",
      "Comfortable with long timelines and complex undertakings",
      "Can feel intense pressure to deliver on big potential",
    ],
    strengths: ["Visionary planning", "Discipline at scale", "Practical execution", "Leadership"],
    challenges: [
      "Risk of burnout from consistently high self-expectations",
      "Can become rigid when a large plan meets real-world friction",
      "May struggle to start small when the vision is this big",
    ],
    career: [
      "Favours large-scale entrepreneurship, architecture, engineering, institution-building",
      "Excels turning big ideas into durable, functioning systems",
      "Benefits from delegating operational detail rather than controlling everything alone",
    ],
    relationships:
      "Namank 22 is read as deeply committed in relationships, with the caution that ambition on this scale needs a partner who understands the demands of big undertakings.",
    financial:
      "Tradition treats 22 as capable of building substantial, lasting wealth through structured, large-scale effort, with a caution against overextending resources too early.",
    lifePurpose:
      "Read as being here to build something of lasting, large-scale significance — an institution, movement or body of work that benefits many.",
    guidance: [
      "Break big visions into staged, achievable milestones",
      "Delegate operational detail to focus energy on the larger structure",
      "Build in recovery time to match the scale of ambition",
    ],
  },
};

export interface NamankExample {
  label: string;
  name: string;
  digits: string;
  firstSum: string;
  finalSum?: string;
  result: number;
}

export const NAMANK_EXAMPLES: NamankExample[] = [
  {
    label: "Example 1",
    name: "RAHUL",
    digits: "2 + 1 + 5 + 6 + 3",
    firstSum: "= 17",
    finalSum: "1 + 7 = 8",
    result: 8,
  },
  {
    label: "Example 2",
    name: "PRIYA",
    digits: "8 + 2 + 1 + 1 + 1",
    firstSum: "= 13",
    finalSum: "1 + 3 = 4",
    result: 4,
  },
  {
    label: "Example 3",
    name: "AMIT KUMAR",
    digits: "1 + 4 + 1 + 4 + 2 + 6 + 4 + 1 + 2",
    firstSum: "= 25",
    finalSum: "2 + 5 = 7",
    result: 7,
  },
  {
    label: "Example 4",
    name: "SARA",
    digits: "3 + 1 + 2 + 1",
    firstSum: "= 7",
    result: 7,
  },
];

export interface NamankFaq {
  question: string;
  answer: string;
}

export const NAMANK_FAQS: NamankFaq[] = [
  {
    question: "What is Namank?",
    answer:
      "Namank, or the Name Number, is a single digit (or Master Number) derived by adding together the Chaldean numerical values of every letter in a person's name. In numerological tradition, it's read as an indicator of the personality and energy a name projects into the world, separate from the birth-based numbers.",
  },
  {
    question: "How is Namank calculated?",
    answer:
      "Every letter in the name is assigned a value from 1–8 using the Chaldean system, those values are added together, and the total is reduced by adding its digits until a single digit remains — unless the intermediate sum is 11 or 22, in which case tradition holds these Master Numbers are preserved unreduced.",
  },
  {
    question: "Why does Chaldean numerology skip the number 9?",
    answer:
      "In the Chaldean system, no letter is assigned the value 9. Tradition treats 9 as a sacred or complete number reserved for the universe rather than assigned directly to letters, so it can only appear as a reduced sum of other values.",
  },
  {
    question: "Is Namank the same as Mulank or Bhagyank?",
    answer:
      "No. Mulank and Bhagyank are both calculated from the date of birth — the day alone, or the complete date respectively. Namank is calculated entirely from the letters of the name. Many practitioners read all three together for a fuller picture, since Namank reflects the name's energy while the other two reflect the birth date's.",
  },
  {
    question: "Which name should I use — full legal name or the name I go by?",
    answer:
      "Traditional practice most commonly uses the full name as given at birth, though some practitioners also calculate the Namank for a commonly used name or nickname to compare the two. There's no single universally agreed rule, so it can be useful to try both and see which resonates.",
  },
  {
    question: "Can Namank be 11 or 22?",
    answer:
      "Yes. These are Master Numbers, and Chaldean tradition preserves them unreduced whenever the running total lands on 11 or 22, rather than continuing to add digits down to a single number. They're read as intensified versions of 2 and 4 respectively.",
  },
  {
    question: "Does changing my name change my Namank?",
    answer:
      "Yes — because Namank is calculated purely from the letters used, any change to spelling, a name change after marriage, or the addition of a middle name will change the resulting number. This is one reason some numerologists suggest reviewing name spellings as part of a reading.",
  },
  {
    question: "Is Namank numerology scientifically proven?",
    answer:
      "No. Like Mulank and Bhagyank, Namank is a traditional, belief-based practice with roots in Chaldean numerology, not an empirically validated science. AstroFree presents it as a tool for reflection and self-exploration, not as a factual prediction or a substitute for professional advice.",
  },
];

export const NAMANK_UPDATED = "2026-08-12";

/** FAQs shown on the `/numerology/namank` hub page. */
export const NAMANK_HUB_FAQS: NamankFaq[] = [
  {
    question: "What is Namank in numerology?",
    answer:
      "Namank — also called the Name Number — is a single digit derived from the letters of your full name using the Chaldean numerology system. Each letter has a value (A=1, B=2, etc.), and adding them together until one digit remains gives your Namank. It describes the energy your name carries and how it shapes how others perceive you.",
  },
  {
    question: "How is Namank calculated?",
    answer:
      "Assign each letter a value: A-I=1-9, J-R=1-9, S-Z=1-8. Add all letters in your full name together. If the sum has more than one digit, add those digits together until one digit remains. Example: 'JANE' = 1+1+5+5 = 12, then 1+2 = 3. Use the free calculator on this site to generate yours automatically.",
  },
  {
    question: "What is the difference between Namank, Mulank, and Bhagyank?",
    answer:
      "Mulank (day of birth) describes your instinctive personality. Bhagyank (full birth date) describes your life direction. Namank (your name) describes how your identity shapes how others see you. All three add layers to a complete numerology reading.",
  },
  {
    question: "Can I change my Namank?",
    answer:
      "Yes. If you legally change your name, your Namank recalculates based on your new name. Some people use numerology to choose names — for a child, a business, or a pen name — that align with the energy they want to cultivate.",
  },
  {
    question: "Is Namank the same as Chaldean numerology?",
    answer:
      "Chaldean is the system used to calculate Namank — it's the most common method for name number calculation. Pythagorean numerology assigns different values and is sometimes used for Namank instead, though Chaldean is more traditional for name-based calculations.",
  },
  {
    question: "Does Namank affect my personality or just how others see me?",
    answer:
      "Tradition holds that your name carries a vibration that both reflects and shapes your personality — there's a feedback loop. Some people report that their Namank resonates with how they naturally express themselves, while others find their Namank describes how they're typically perceived, even if it differs from their inner nature.",
  },
  {
    question: "What if my Namank is different from my Mulank and Bhagyank?",
    answer:
      "This is common and is often considered interesting: you might carry a public presentation (Namank) that differs from your core nature (Mulank) or your broader life direction (Bhagyank). This tension between outer and inner identity can explain why some people feel like different versions of themselves in different contexts.",
  },
  {
    question: "Can I use numerology to choose a baby name?",
    answer:
      "Yes. Some parents research the Namank of prospective names and choose ones that align with their intentions for their child. You can also calculate what Namank you'd want and work backward to find names that add up to that number. The free Namank calculator on this site helps explore different options.",
  },
];
