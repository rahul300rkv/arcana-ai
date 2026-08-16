/**
 * Content layer for the Bhagyank (Destiny Number) calculator at
 * `/bhagyank-calculator`. Bhagyank is derived from the COMPLETE date of
 * birth (day + month + year) — deliberately different from Mulank, which
 * uses only the day. See `src/lib/numerology/bhagyank.ts` for the maths.
 */

export interface BhagyankMeaning {
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

export const BHAGYANK_MEANINGS: Record<number, BhagyankMeaning> = {
  1: {
    number: 1,
    title: "Bhagyank 1 — The Pioneer",
    archetype: "Independence and initiative",
    meaning:
      "Bhagyank 1 traditionally marks a life path built around leadership, self-reliance and starting things that didn't exist before. In classical Pythagorean and Vedic numerology alike, 1 is the number of origin — the first digit, ruled by the Sun — and people who carry it are described as being here to lead rather than follow, even when that role is thrust on them rather than chosen.",
    personality: [
      "Decisive and comfortable making the first move when a group is stuck",
      "Strong sense of personal identity; dislikes being told how to do things",
      "Naturally competitive, often measuring progress against their own past self",
      "Can come across as blunt because they value directness over diplomacy",
    ],
    strengths: [
      "Original thinking",
      "Self-motivation",
      "Courage under pressure",
      "Resilience after setbacks",
    ],
    challenges: [
      "A tendency toward stubbornness once a decision is made",
      "Difficulty delegating or trusting others with the details",
      "Impatience with slow-moving teams or bureaucratic process",
    ],
    career: [
      "Traditionally associated with entrepreneurship, founding roles, and positions with real autonomy",
      "Tends to do best where results are visible and directly attributable to their own effort",
      "Can struggle in rigid hierarchies that reward seniority over initiative",
    ],
    relationships:
      "In relationships, Bhagyank 1 people are said to need a partner who respects their independence rather than one who expects constant togetherness. They show love through action and provision more naturally than through verbal reassurance, which can be misread as distance by more emotionally expressive partners.",
    financial:
      "Numerological tradition links 1 to income earned through individual effort and risk-taking rather than steady salaried work — commissions, business ownership, or freelance income. The corresponding caution is a tendency to under-diversify because they trust their own judgment more than outside advice.",
    lifePurpose:
      "The traditional reading of a 1 life path is that the person is here to build something original — a venture, an idea, a body of work — rather than to maintain what already exists. Restlessness in unoriginal work is treated as a signal rather than a flaw.",
    guidance: [
      "Channel competitiveness into a defined goal rather than constant comparison with others",
      "Practice delegating one small task per week to build trust in a team",
      "Pair fast decisions with a short pause to consider who else the choice affects",
    ],
  },
  2: {
    number: 2,
    title: "Bhagyank 2 — The Diplomat",
    archetype: "Partnership and sensitivity",
    meaning:
      "Bhagyank 2 is traditionally read as the number of cooperation, ruled by the Moon. Where 1 initiates, 2 is described as completing — the path of people whose gift lies in reading a room, mediating between opposing views, and making others feel heard. It's considered one of the more emotionally attuned life paths in the system.",
    personality: [
      "Highly attuned to the moods and unspoken needs of people around them",
      "Prefers consensus to confrontation, sometimes at their own expense",
      "Detail-oriented and patient with slow, careful processes",
      "Deep need for harmony in their immediate environment",
    ],
    strengths: [
      "Empathy",
      "Tact and diplomacy",
      "Reliability",
      "Skill at collaborative problem-solving",
    ],
    challenges: [
      "Difficulty asserting personal needs in the face of others' preferences",
      "Oversensitivity to criticism, real or perceived",
      "A tendency to avoid necessary conflict until it becomes unavoidable",
    ],
    career: [
      "Traditionally suited to counselling, HR, diplomacy, partnership-based business, and any role built on trust between people",
      "Often thrives as the person who makes a team function, even without the loudest title",
    ],
    relationships:
      "This is considered one of the most naturally partnership-oriented numbers — 2s are said to invest deeply in a relationship's small rituals and are highly responsive to their partner's emotional state, sometimes to the point of losing track of their own.",
    financial:
      "Numerology associates 2 with steady, cooperative income — salaried work, partnerships, and joint ventures — rather than solo risk-taking. The caution is a reluctance to negotiate assertively on their own behalf.",
    lifePurpose:
      "The traditional interpretation is that a 2 life path exists to build bridges — between people, ideas, or factions — and that their long-term fulfilment comes from relationships and collaborative work rather than solo achievement.",
    guidance: [
      "Practice stating a preference directly at least once a day, even in low-stakes situations",
      "Set one boundary explicitly rather than hoping it will be inferred",
      "Remember that avoiding a disagreement often costs more than having it",
    ],
  },
  3: {
    number: 3,
    title: "Bhagyank 3 — The Communicator",
    archetype: "Expression and creativity",
    meaning:
      "Bhagyank 3 is traditionally linked to Jupiter and read as the number of self-expression — through words, performance, humour, or art. People on this path are described as natural communicators whose energy tends to lift the mood of a room, though the same expressiveness can scatter their focus across too many interests at once.",
    personality: [
      "Articulate, often the person others go to for a clear explanation",
      "Optimistic outlook, quick to find the upside in a setback",
      "Drawn to creative or social outlets — writing, performance, conversation",
      "Can be easily bored by repetitive or purely administrative work",
    ],
    strengths: [
      "Communication",
      "Creativity",
      "Charisma",
      "Ability to make complex ideas accessible",
    ],
    challenges: [
      "Difficulty finishing projects once the initial excitement fades",
      "A tendency to talk through problems rather than sit with them",
      "Scattered focus across too many simultaneous interests",
    ],
    career: [
      "Traditionally associated with writing, media, teaching, performance, marketing, and any client-facing communication role",
      "Does best where variety and self-expression are part of the job description",
    ],
    relationships:
      "3s are described as bringing lightness and humour into relationships, expressing affection openly and verbally. The corresponding challenge is emotional avoidance — using humour to deflect from harder conversations rather than working through them.",
    financial:
      "Numerological tradition ties 3 to income from creative or communicative work — writing, media, sales, teaching — with a caution around inconsistent follow-through on financial planning, since routine budgeting can feel tedious to this path.",
    lifePurpose:
      "The traditional reading is that a 3 life path exists to express and share ideas that might otherwise stay unspoken — through teaching, art, writing, or simply conversation that changes how someone else sees a problem.",
    guidance: [
      "Finish one small project fully before starting the next, even if a newer idea feels more exciting",
      "Schedule quiet, unstructured time — 3s recharge less from socialising than it appears",
      "Use writing or journalling to process difficult emotions instead of only talking them out loud",
    ],
  },
  4: {
    number: 4,
    title: "Bhagyank 4 — The Builder",
    archetype: "Structure and discipline",
    meaning:
      "Bhagyank 4 is traditionally ruled by Rahu/Uranus depending on the school of thought, and is read as the number of foundation-building. Where 3 expresses, 4 constructs — this path is associated with patience, methodical work, and a deep discomfort with shortcuts. It is often called the most reliable of the nine core numbers.",
    personality: [
      "Highly organised, often the person who keeps a group or project on track",
      "Values proof and process over intuition or improvisation",
      "Loyal and consistent, slow to change direction once committed",
      "Can be uncomfortable with sudden change or ambiguity",
    ],
    strengths: [
      "Discipline",
      "Reliability",
      "Practical problem-solving",
      "Long-term follow-through",
    ],
    challenges: [
      "Rigidity when circumstances call for flexibility",
      "A tendency toward overwork, treating rest as unproductive",
      "Difficulty improvising when a plan falls apart",
    ],
    career: [
      "Traditionally associated with engineering, accounting, project management, construction, and any field where precision and process matter",
      "Tends to earn trust through consistency rather than charisma",
    ],
    relationships:
      "4s are described as steady, dependable partners who show love through consistency and follow-through rather than grand gestures. The corresponding caution is a reluctance to express vulnerability, since it can feel like losing control.",
    financial:
      "Numerology links 4 to slow, disciplined wealth-building — saving, real assets, long-term investment — rather than speculative risk. This is generally read as a financial strength, with the caution being excessive caution that delays reasonable opportunities.",
    lifePurpose:
      "The traditional interpretation is that a 4 life path exists to build something durable — an institution, a body of expertise, a stable home — valuing what lasts over what is merely exciting in the moment.",
    guidance: [
      "Build in deliberate rest, since 4s under-recover more than most other paths",
      "Practice tolerating a small amount of disorder as a way of building flexibility",
      "When plans change, ask what's still true rather than treating the whole plan as failed",
    ],
  },
  5: {
    number: 5,
    title: "Bhagyank 5 — The Free Spirit",
    archetype: "Change and adaptability",
    meaning:
      "Bhagyank 5 is traditionally ruled by Mercury and read as the number of movement — change, variety, and adaptability. This is considered the most restless of the nine core paths: people on it are drawn to new experiences and tend to feel confined by routine, structure, or long-term commitment made too early.",
    personality: [
      "Curious and quick to adapt to new environments or information",
      "Values freedom and variety over stability and predictability",
      "Persuasive communicator, often good at sales or negotiation",
      "Can struggle to commit fully once novelty wears off",
    ],
    strengths: ["Adaptability", "Resourcefulness", "Quick learning", "Comfort with uncertainty"],
    challenges: [
      "Difficulty with routine, follow-through, and long commitments",
      "A tendency toward impulsiveness, especially under boredom",
      "Restlessness that can undermine otherwise promising long-term plans",
    ],
    career: [
      "Traditionally suited to travel-based work, sales, journalism, consulting, and roles with variety built in",
      "Tends to underperform in highly repetitive or tightly scripted jobs",
    ],
    relationships:
      "5s are described as exciting, spontaneous partners who bring energy and new experiences into a relationship. The corresponding caution is a fear of feeling trapped, which can surface as avoidance of commitment even in a relationship they value.",
    financial:
      "Numerological tradition associates 5 with variable income tied to changing circumstances — commission-based work, multiple income streams, travel-related earning. The caution is inconsistent saving habits driven by a present-focused mindset.",
    lifePurpose:
      "The traditional reading is that a 5 life path exists to experience breadth — many places, people, and forms of work — and to bring back what they learn, rather than to specialise deeply in one lane for life.",
    guidance: [
      "Build small, non-negotiable routines around health and finances even while keeping the rest of life flexible",
      "Before ending a commitment, distinguish boredom from a genuine mismatch",
      "Use travel or new projects as a planned outlet rather than an impulsive escape",
    ],
  },
  6: {
    number: 6,
    title: "Bhagyank 6 — The Caregiver",
    archetype: "Responsibility and harmony",
    meaning:
      "Bhagyank 6 is traditionally ruled by Venus and read as the number of responsibility, domestic life, and care for others. This path is associated with a strong pull toward family, community, and beauty — people on it are often the ones who hold a household or group together, sometimes at real cost to their own needs.",
    personality: [
      "Naturally nurturing, often the one others turn to in a crisis",
      "Strong aesthetic sense and appreciation for a harmonious environment",
      "Takes responsibility seriously, sometimes taking on more than asked",
      "Deep need to feel needed and appreciated",
    ],
    strengths: [
      "Compassion",
      "Reliability in caregiving roles",
      "Aesthetic sensibility",
      "Community-building",
    ],
    challenges: [
      "Difficulty saying no, leading to over-responsibility for others' problems",
      "A tendency toward self-neglect while caring for everyone else",
      "Perfectionism, especially around home and family standards",
    ],
    career: [
      "Traditionally associated with healthcare, teaching, counselling, hospitality, design, and community-facing roles",
      "Tends to find the most satisfaction in work that visibly helps or beautifies someone's life",
    ],
    relationships:
      "6s are described as deeply devoted partners and parents, often defining themselves through their caregiving role. The corresponding caution is enmeshment — losing a sense of separate identity within a relationship or family responsibility.",
    financial:
      "Numerology links 6 to spending on home, family, and beauty, sometimes at the expense of personal savings. The traditional advice is to treat their own financial security as a form of care for the people who depend on them, not a selfish concern.",
    lifePurpose:
      "The traditional interpretation is that a 6 life path exists to create harmony and care within a household or community, and that their long-term fulfilment depends on learning to receive care as readily as they give it.",
    guidance: [
      "Practice accepting help without immediately reciprocating",
      "Set at least one boundary around personal time each week and hold it",
      "Separate caring for someone from managing every detail of their life",
    ],
  },
  7: {
    number: 7,
    title: "Bhagyank 7 — The Seeker",
    archetype: "Introspection and analysis",
    meaning:
      "Bhagyank 7 is traditionally ruled by Ketu/Neptune depending on the tradition, and read as the number of introspection, analysis, and the search for deeper meaning. This path is associated with a strong inner life — people on it are often more comfortable with solitude and ideas than with small talk or crowds.",
    personality: [
      "Analytical, often needing to understand the 'why' before acting",
      "Comfortable with — and often needs — significant solitude",
      "Skeptical of surface explanations, drawn to research and depth",
      "Can appear reserved or hard to read to people who don't know them well",
    ],
    strengths: [
      "Deep analytical thinking",
      "Intuition sharpened by reflection",
      "Independence of thought",
      "Persistence in research",
    ],
    challenges: [
      "A tendency toward isolation, even when connection would help",
      "Overthinking that delays otherwise sound decisions",
      "Difficulty trusting others' conclusions without independently verifying them",
    ],
    career: [
      "Traditionally associated with research, science, analysis, spirituality, writing, and specialist technical work",
      "Tends to do poorly in roles that require constant surface-level small talk with little depth",
    ],
    relationships:
      "7s are described as loyal but private partners who need real intellectual or spiritual connection, not just companionship. The corresponding caution is emotional withdrawal under stress, retreating into solitude just when a partner most wants closeness.",
    financial:
      "Numerological tradition links 7 to careful, research-driven financial decisions rather than impulsive ones, with a caution around undervaluing their own expertise when it comes to charging for specialised knowledge.",
    lifePurpose:
      "The traditional reading is that a 7 life path exists to seek understanding beneath the surface of things, and that their contribution often comes through research, insight, or teaching what they've worked out alone.",
    guidance: [
      "Share half-formed thoughts with a trusted person instead of waiting until they're fully resolved",
      "Notice when solitude has shifted from restorative to avoidant",
      "Set a decision deadline to prevent analysis from running indefinitely",
    ],
  },
  8: {
    number: 8,
    title: "Bhagyank 8 — The Achiever",
    archetype: "Ambition and material mastery",
    meaning:
      "Bhagyank 8 is traditionally ruled by Saturn and read as the number of ambition, authority, and material achievement. This is considered one of the most outcome-driven life paths — people on it are described as having a natural grasp of how power, money, and organisations work, along with the discipline to build large things over time.",
    personality: [
      "Goal-oriented, often measuring progress in concrete, visible terms",
      "Comfortable with authority and responsibility",
      "Strong work ethic paired with a long time horizon",
      "Can come across as intense or overly focused on results",
    ],
    strengths: [
      "Strategic thinking",
      "Financial acumen",
      "Organisational skill",
      "Resilience under high-stakes pressure",
    ],
    challenges: [
      "A tendency to over-identify with achievement and status",
      "Workaholism, with personal relationships sometimes deprioritised",
      "Difficulty relaxing without a sense of guilt about lost productivity",
    ],
    career: [
      "Traditionally associated with business leadership, finance, law, and large-scale management roles",
      "Tends to gravitate naturally toward positions with real decision-making authority",
    ],
    relationships:
      "8s are described as generous, protective partners who express love partly through provision and security. The corresponding caution is letting work dominate the relationship's time and attention, requiring deliberate effort to stay emotionally present.",
    financial:
      "Numerology treats 8 as the number most naturally aligned with wealth-building, business acumen, and long-term financial strategy. The traditional caution is that material success can be pursued as an end in itself rather than a means to a fuller life.",
    lifePurpose:
      "The traditional interpretation is that an 8 life path exists to build material and organisational structures at scale — a business, an institution, significant wealth — and to use that influence responsibly rather than for its own sake.",
    guidance: [
      "Define what 'enough' looks like before chasing the next target",
      "Schedule personal relationships with the same seriousness as work commitments",
      "Practice measuring a day's success by more than output alone",
    ],
  },
  9: {
    number: 9,
    title: "Bhagyank 9 — The Humanitarian",
    archetype: "Compassion and completion",
    meaning:
      "Bhagyank 9 is traditionally ruled by Mars and read as the number of completion and universal compassion — the last of the single digits, said to carry something of every number before it. People on this path are often drawn to causes larger than their own immediate circumstances, and are described as natural givers with a strong sense of justice.",
    personality: [
      "Compassionate, often drawn to helping people outside their immediate circle",
      "Idealistic, with a strong internal sense of right and wrong",
      "Comfortable letting go of things others might cling to",
      "Can seem emotionally intense or larger-than-life to people who know them casually",
    ],
    strengths: [
      "Empathy at scale",
      "Generosity",
      "Ability to inspire others toward a cause",
      "Adaptability through endings and change",
    ],
    challenges: [
      "A tendency to give to others at the expense of their own needs",
      "Difficulty with practical boundaries around time and money",
      "Idealism that can lead to disappointment when reality falls short",
    ],
    career: [
      "Traditionally associated with humanitarian work, activism, healing professions, the arts, and any large-scale mission-driven field",
      "Tends to feel unfulfilled in narrowly self-interested or purely transactional work",
    ],
    relationships:
      "9s are described as generous, emotionally expansive partners who love broadly and deeply. The corresponding caution is a tendency to give more than is sustainable, and difficulty asking for reciprocal care in return.",
    financial:
      "Numerological tradition links 9 to generosity that can undercut personal financial stability — giving away resources faster than they're replenished. The traditional advice is to build a giving budget rather than giving without limit.",
    lifePurpose:
      "The traditional reading is that a 9 life path exists to serve something beyond the self — a cause, a community, humanity broadly — and that their fulfilment tends to come through completion and release rather than accumulation.",
    guidance: [
      "Set a defined limit on giving — of time or money — so generosity remains sustainable",
      "Practice receiving help as an act of trust, not a debt to be repaid",
      "Let go of outcomes that were never within your control to begin with",
    ],
  },
  11: {
    number: 11,
    title: "Bhagyank 11 — The Intuitive (Master Number)",
    archetype: "Illumination and heightened sensitivity",
    meaning:
      "11 is one of three Master Numbers that numerological tradition keeps unreduced, because it is believed to carry a more intense, less grounded version of its root number, 2 (1+1). Where a 2 seeks harmony, an 11 is described as carrying that same sensitivity turned up considerably — a strong intuitive or spiritual pull paired with real internal tension between idealism and the practical demands of daily life.",
    personality: [
      "Highly perceptive, often picking up on things others miss entirely",
      "Idealistic, with a strong pull toward meaning and purpose",
      "Emotionally intense; can feel things more sharply than the people around them",
      "Prone to self-doubt despite genuine ability",
    ],
    strengths: [
      "Intuition",
      "Inspirational communication",
      "Depth of insight",
      "Capacity to illuminate ideas for others",
    ],
    challenges: [
      "Nervous tension or anxiety from carrying more sensitivity than the nervous system easily manages",
      "A tendency toward self-doubt that undercuts real capability",
      "Difficulty with the mundane, practical side of daily life",
    ],
    career: [
      "Traditionally associated with counselling, spiritual or creative teaching, design, and any role that requires translating insight for other people",
      "Often benefits from grounding practices to stay functional under the number's intensity",
    ],
    relationships:
      "11s are described as deeply intuitive about a partner's unspoken feelings, sometimes to an almost unsettling degree. The corresponding caution is emotional overwhelm — absorbing a partner's moods so completely that their own needs get lost.",
    financial:
      "Because 11 carries 2's cooperative financial instincts at higher intensity, tradition suggests partnership-based income works well, paired with a deliberate practical routine, since the number's idealism can make routine budgeting feel uninspiring.",
    lifePurpose:
      "The traditional reading holds that an 11 life path exists to illuminate — to notice what others don't and to communicate it in a way that shifts how people see something. This is generally considered a demanding path that requires real grounding to sustain.",
    guidance: [
      "Build daily grounding habits — movement, routine, time outdoors — to manage heightened sensitivity",
      "Separate intuitive insight from anxiety by writing both down and reviewing later",
      "Work with a root-number-2 discipline: build partnerships that share the practical load",
    ],
  },
  22: {
    number: 22,
    title: "Bhagyank 22 — The Master Builder (Master Number)",
    archetype: "Vision realised at scale",
    meaning:
      "22 is traditionally called the Master Builder — the combination of 11's heightened vision with 4's grounded, structural discipline (2+2=4). Numerological tradition treats it as the number of turning a large idea into something concrete and lasting: not just dreaming big, but having the practical capability to build it.",
    personality: [
      "Ambitious on a large scale, thinking in systems rather than single steps",
      "Disciplined and practical despite an expansive vision",
      "Comfortable holding long-term complexity that would overwhelm most people",
      "Can feel significant internal pressure to live up to the number's potential",
    ],
    strengths: [
      "Strategic execution",
      "Ability to combine vision with practicality",
      "Leadership at scale",
      "Long-range planning",
    ],
    challenges: [
      "Pressure and self-imposed expectation that can tip into burnout",
      "Difficulty starting small when the vision is naturally large",
      "A tendency to take on more structural responsibility than one person can carry alone",
    ],
    career: [
      "Traditionally associated with large-scale entrepreneurship, architecture, engineering, institution-building, and systems-level leadership",
      "Tends to be most fulfilled building something with lasting, structural impact",
    ],
    relationships:
      "22s are described as committed, protective partners who bring the same long-range thinking to relationships as to their work. The corresponding caution is letting ambition crowd out present-moment connection with the people closest to them.",
    financial:
      "Tradition links 22 to significant wealth-building potential through large, well-structured ventures, paired with a caution against over-leverage — the number's confidence in its own vision can outpace prudent risk management.",
    lifePurpose:
      "The traditional reading holds that a 22 life path exists to build something of lasting, structural value — an institution, a movement, a body of work — that outlives the individual effort that created it.",
    guidance: [
      "Break the large vision into a concrete first step and start there rather than waiting to see the whole path",
      "Build a support team early — this number's scale is rarely meant to be carried alone",
      "Schedule deliberate rest as part of the plan, not an afterthought",
    ],
  },
  33: {
    number: 33,
    title: "Bhagyank 33 — The Master Teacher (Master Number)",
    archetype: "Selfless service and compassionate guidance",
    meaning:
      "33 is the rarest of the three Master Numbers — traditionally called the Master Teacher, combining 6's caregiving instinct with the elevated intensity of the Master Number series (3+3=6). It is read as a life path centred on guiding, healing, or uplifting others on a significant scale, often through teaching, healing work, or community leadership.",
    personality: [
      "Deeply compassionate, often extending care well beyond close family",
      "Naturally drawn to teaching, mentoring, or healing roles",
      "Carries strong ideals about service and responsibility to others",
      "Can struggle to separate their own identity from the role of caretaker",
    ],
    strengths: [
      "Compassionate leadership",
      "Ability to teach and heal at scale",
      "Emotional generosity",
      "Inspirational presence",
    ],
    challenges: [
      "Self-sacrifice to a degree that undermines their own wellbeing",
      "Difficulty setting limits on how much responsibility they take for others",
      "Burnout from consistently prioritising others' needs first",
    ],
    career: [
      "Traditionally associated with teaching, healing professions, spiritual guidance, and large-scale community or humanitarian leadership",
      "Tends to find deep meaning in roles where their care visibly changes someone's life",
    ],
    relationships:
      "33s are described as extraordinarily giving partners and parents, often extending the same nurturing energy from their family to their wider community. The corresponding caution is stretching that care so thin across so many people that closest relationships are underserved.",
    financial:
      "Tradition treats 33 similarly to 6, with an amplified pull toward giving — the traditional advice is to formalise generosity through structured giving rather than open-ended, unsustainable support of others.",
    lifePurpose:
      "The traditional reading holds that a 33 life path exists to serve as a teacher or healer at a broader scale than an individual family — carrying real responsibility to guide others, balanced against an equally real need to protect their own capacity to keep doing so.",
    guidance: [
      "Set explicit limits on caregiving so it remains sustainable over decades, not just years",
      "Invest in your own healing and growth as seriously as you invest in others'",
      "Delegate care where possible rather than carrying every responsibility personally",
    ],
  },
};

export interface BhagyankExample {
  label: string;
  dob: string; // DD/MM/YYYY, for display
  digits: string;
  firstSum: string;
  finalSum?: string;
  result: number;
}

export const BHAGYANK_EXAMPLES: BhagyankExample[] = [
  {
    label: "Example 1",
    dob: "15/08/1995",
    digits: "1 + 5 + 0 + 8 + 1 + 9 + 9 + 5",
    firstSum: "= 38",
    finalSum: "3 + 8 = 11",
    result: 11,
  },
  {
    label: "Example 2",
    dob: "01/01/2000",
    digits: "0 + 1 + 0 + 1 + 2 + 0 + 0 + 0",
    firstSum: "= 4",
    result: 4,
  },
  {
    label: "Example 3",
    dob: "31/12/1999",
    digits: "3 + 1 + 1 + 2 + 1 + 9 + 9 + 9",
    firstSum: "= 35",
    finalSum: "3 + 5 = 8",
    result: 8,
  },
  {
    label: "Example 4",
    dob: "29/02/2000",
    digits: "2 + 9 + 0 + 2 + 2 + 0 + 0 + 0",
    firstSum: "= 15",
    finalSum: "1 + 5 = 6",
    result: 6,
  },
];

export interface BhagyankFaq {
  question: string;
  answer: string;
}

export const BHAGYANK_FAQS: BhagyankFaq[] = [
  {
    question: "What is Bhagyank?",
    answer:
      "Bhagyank, commonly known as the Destiny Number in Indian numerology and often compared to the Western Life Path Number, is a single digit (or Master Number) derived by adding together every digit of your complete date of birth. In numerological tradition, it's read as an indicator of your broader life direction, natural strengths, and the kind of challenges you're likely to encounter along the way.",
  },
  {
    question: "How is Bhagyank calculated?",
    answer:
      "Write your date of birth as day, month, and full year, then add every individual digit together. If the total is more than one digit, add those digits together again, and repeat until you reach a single digit — unless that intermediate sum is 11, 22, or 33, in which case tradition holds you stop there, since these are treated as Master Numbers.",
  },
  {
    question: "Is Bhagyank the same as Mulank?",
    answer:
      "No. Mulank uses only your day of birth, so it's a much faster calculation that reflects your instinctive, everyday personality. Bhagyank uses your complete date of birth — day, month, and year — and is traditionally read as a broader indicator of your overall life path. Most practitioners consider the two complementary rather than interchangeable.",
  },
  {
    question: "Can Bhagyank be 11, 22, or 33?",
    answer:
      "Yes. These are called Master Numbers, and numerological tradition preserves them unreduced whenever they appear during calculation, rather than continuing to add their digits down to a single number. They're generally read as carrying a more intense version of their root digit — 11 relates to 2, 22 relates to 4, and 33 relates to 6.",
  },
  {
    question: "What does Bhagyank 1 mean?",
    answer:
      "Bhagyank 1 is traditionally associated with independence, leadership, and originality. People on this path are described as natural initiators who do well when given autonomy, though the same number is linked to stubbornness and difficulty delegating.",
  },
  {
    question: "What does Bhagyank 8 mean?",
    answer:
      "Bhagyank 8 is traditionally linked to ambition, authority, and material achievement — considered the most outcome- and business-oriented of the nine core numbers. The corresponding caution is a tendency toward workaholism and over-identifying personal worth with results.",
  },
  {
    question: "Can my Bhagyank change over time?",
    answer:
      "No. Because it's calculated from your complete, fixed date of birth, your Bhagyank never changes — unlike numbers such as your Personal Year, which are recalculated against the current calendar year and do shift annually.",
  },
  {
    question: "Which date should I use for the calculation?",
    answer:
      "Always use your actual date of birth as it appears on your birth certificate or official documents — day, month, and full four-digit year. Using an approximate or incorrectly recorded date will produce an inaccurate result.",
  },
  {
    question: "Is numerology scientifically proven?",
    answer:
      "No. Numerology is a traditional, belief-based practice with roots in Pythagorean and Vedic thought, not an empirically validated science. AstroFree presents Bhagyank as a tool for reflection and self-exploration, not as a factual prediction of your future or a substitute for professional advice.",
  },
];

export const BHAGYANK_UPDATED = "2026-08-09";

/** FAQs shown on the `/numerology/bhagyank` hub page. */
export const BHAGYANK_HUB_FAQS: BhagyankFaq[] = [
  {
    question: "What is Bhagyank in numerology?",
    answer:
      "Bhagyank — commonly known as the Destiny Number in Indian numerology, and often compared with the Western Life Path Number — is the single digit (or Master Number) derived from your complete date of birth: day + month + full year added together until one digit remains, unless the sum is 11, 22, or 33, which are preserved as Master Numbers. It describes your broader life direction and natural strengths.",
  },
  {
    question: "How do I calculate my Bhagyank?",
    answer:
      "Add every digit of your birth date together. Born 23 August 1995? Calculate: 2 + 3 + 0 + 8 + 1 + 9 + 9 + 5 = 37, then 3 + 7 = 10, then 1 + 0 = 1. Your Bhagyank is 1. Use the free calculator on this site to generate it automatically.",
  },
  {
    question: "What is the difference between Bhagyank and Mulank?",
    answer:
      "Mulank uses only your day of birth and reflects your everyday, instinctive personality. Bhagyank uses your complete date of birth and describes your longer life direction. Most practitioners read them together — your Mulank tells you how you naturally act; your Bhagyank tells you what your life path is asking of you.",
  },
  {
    question: "What is a Master Number (11, 22, 33)?",
    answer:
      "Master Numbers are intermediate sums that are preserved unreduced in numerological tradition. An 11 carries elevated sensitivity and intuition; a 22 combines vision with structural capability; a 33 carries heightened compassion and teaching energy. They're generally read as more intense versions of their root numbers (2, 4, and 6 respectively).",
  },
  {
    question: "Can two people born on the same date have different readings?",
    answer:
      "No — they would have the same Bhagyank. But they also have Personal Year numbers (recalculated each January 1st) and Personal Month numbers that shift with time. Additionally, Mulank (birth number) and Namank (name number) add other layers to the full numerology picture.",
  },
  {
    question: "Is Bhagyank astrology?",
    answer:
      "No, though they complement each other. Bhagyank is calculated arithmetically from your birth date. Astrology is based on planetary positions at the moment you were born. Some numerologists pair both systems — the numbers describe your inner nature, while astrology describes the cosmic timing you were born into.",
  },
  {
    question: "Does Bhagyank change if I change my name?",
    answer:
      "No. Bhagyank comes from your birth date, which never changes. Your Namank — derived from the letters of your name — would change if you legally changed your name, but your core birth numbers (Bhagyank and Mulank) stay the same for life.",
  },
  {
    question: "What should I do if Bhagyank describes me poorly?",
    answer:
      "Remember that every number contains both shadow and light. A Bhagyank 8 might lean toward workaholism, but can also build institutions that outlast a lifetime. The descriptions are frameworks for reflection, not boxes you're locked into. Use the insight to make deliberate choices rather than assuming the number predicts your fate.",
  },
];
