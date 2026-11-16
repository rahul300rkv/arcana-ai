/**
 * Structured content layer for the Mulank pages:
 * `/numerology/mulank` (hub) and `/numerology/mulank-1` … `/numerology/mulank-9`.
 *
 * Every Mulank number carries dedicated essays rooted in Vedic birth-number
 * tradition (day-of-month driver personality), planetary rulership, remedies,
 * pairing dynamics, prompts, and distinct FAQs — zero shared boilerplate.
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

interface MulankSeed {
  number: number;
  dates: number[];
  archetype: string;
  planet: string;
  element: string;
  direction: string;
  gemstone: string;
  deity: string;
  tarotCard: string;
  tarotSlug: string;
  hero: string;
  description: string;
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
  colours: string[];
  days: string[];
  compatibility: MulankCompatibility[];
  famous: string[];
  affirmation: string;
  journalPrompts: string[];
  faqs: MulankFaq[];
}

const SEEDS: MulankSeed[] = [
  {
    number: 1,
    dates: [1, 10, 19, 28],
    archetype: "The Sovereign",
    planet: "Sun (Surya)",
    element: "Fire",
    direction: "East",
    gemstone: "Ruby",
    deity: "Surya",
    tarotCard: "The Magician",
    tarotSlug: "the-magician",
    hero: "First-day solar ignition — commanding immediate presence, crisp instinctive initiative, and pride earned through clear self-reliance.",
    description:
      "Mulank 1 (born on the 1, 10, 19, or 28): Surya driver traits, leadership vocations, pairing chemistry, Sunday remedies, health cues and FAQs.",
    meaning: [
      "Born on day 1, 10, 19, or 28 of any calendar month, your instinctive driver vibrates cleanly to single digit 1—ruled classically in Indian Ank Shastra by luminous Surya (the Sun).",
      "Unlike Life Path destiny unfolding slowly across decades, Mulank strikes instantaneously at first handshake: crisp eye contact, decisive posture, strong dislike of wishy-washy excuses, and urgent need to leave recognizable personal footprints on shared work.",
      "Subtle differences ripple across those four birth dates too: pure 1 acts directly; zero-backed 10 swings sharply between solitary brilliance and sudden cosmic elevation; 19 melts karmic ego pride through humble service; lunar-solar 28 pairs intuitive collaboration alongside quiet resolve.",
    ],
    personality: [
      "Childhood classmates usually remember Mulank 1 kids organizing playground captains automatically before teachers blew whistles—not to bully timid peers, simply because vacant steering wheels offend solar instinct.",
      "High standards inspire impressive integrity: promises kept cleanly at steep personal convenience earn fierce lifelong trust inside tight inner teams.",
      "Trouble stirs mostly inside impatient tempers: talking right across cautious slower colleagues or refusing timely advice silently until bruising avoidable errors force mid-course corrections.",
    ],
    strengths: [
      "Commands immediate natural authority",
      "Makes clear bold calls without flinching",
      "Stands dignified during fierce opposition",
      "Ignites stagnant dead rooms swiftly",
      "Maintains fierce transparent self-respect",
    ],
    weaknesses: [
      "Brittle hurt when efforts go uncredited",
      "Bullheaded inflexibility mid-dispute",
      "Struggles delegating critical deliverables",
      "Aggressive edge during hurried exhaustion",
      "Status splurging ahead of stable reserves",
    ],
    career: [
      "Visible accountability pulls dazzling sustained effort straight out of Mulank 1: medical surgical leads, founders scaling crisp service brands, senior administrative officers, independent legal counsel, or executive heads owning full scoreboards directly.",
      "Micromanaged assistant cubicles wither bright Surya drive fast—step briskly into niches valuing bold clear judgment.",
      "Schedule high-stakes interviews, decisive pitches, or launch dates carefully across crisp Sunday or Monday mornings whenever choice exists.",
    ],
    careerPaths: [
      "Founder & chief strategist",
      "Administrative service officer",
      "Corporate department director",
      "Surgical or specialist consultant",
      "Editorial & brand principal",
      "Public leadership & policy",
    ],
    love: [
      "Direct warm admiration wins Mulank 1 cleanly—subtle hot-cold teasing games exhaust solar patience swiftly rather than charming deeper loyalty.",
      "Notice hidden domestic tension: intense outside drive occasionally drags hard boardroom stiffness gently onto evening dinner tables unless partners playfully disarm ego pride with warmth.",
      "Honoring mutual space keeps devoted protection fiery across patient decades.",
    ],
    health: [
      "Surya sensitivity spotlights cardiovascular pressure, crisp ocular strain from continuous screens, upper-spine stiffness, and heat inflammation triggered straight by suppressed furious impatience.",
      "Early sunlit brisk walks alongside calm breathing rhythms regulate solar heat rapidly.",
    ],
    money: [
      "Direct self-directed income scales remarkably stronger for Mulank 1 than rigid incremental corporate rungs—reward climbs fast wherever initiative shapes direct outcomes.",
      "Watch quiet temptation toward flashy luxury watches, status gifts, or hurried premature office leases designed mainly to signal success prematurely.",
    ],
    remedies: [
      "Offer fresh clean copper-vessel water softly toward rising morning sunlight each Sunday",
      "Step outdoors into natural morning daylight fifteen unhurried minutes prior checking noisy phones",
      "Wear light crisp warm saffron, cream, or burnished gold accents cleanly during big pitches",
      "Practice thanking one junior teammate genuinely in public every Friday afternoon",
    ],
    colours: ["Sun gold", "Amber", "Crimson"],
    days: ["Sunday", "Monday"],
    compatibility: [
      { number: 1, verdict: "friend", note: "Crisp mutual respect blossoms once separate territories divide cleanly without petty throne tussles home." },
      { number: 2, verdict: "friend", note: "Tender lunar intuition softens sharp Sun fire gracefully—devoted supportive partnership built harmoniously on mutual strength." },
      { number: 3, verdict: "friend", note: "Bold leadership pairs brilliantly beside bright Jovian optimism and storytelling, generating joyful ambitious impact." },
      { number: 9, verdict: "friend", note: "Mars heat matches Surya courage seamlessly—protective fearless teammates moving bold righteous goals fast." },
      { number: 5, verdict: "neutral", note: "Clever flexible wit keeps intense solar focus entertained smoothly whenever restless distraction stays balanced responsibly." },
      { number: 6, verdict: "neutral", note: "Warm domestic Venus charm beautifies sharp driven weeks cleanly if appreciative words stay regularly spoken." },
      { number: 7, verdict: "neutral", note: "Observant quiet Ketu depth intrigues sharp Sun curiosity cleanly once moody isolated silences aren't taken personally." },
      { number: 4, verdict: "challenge", note: "Rahu skepticism questions bright leadership authority sharply—magnificent realistic strength whenever rigid stubbornness yields to listening." },
      { number: 8, verdict: "challenge", note: "Ancient myth pits Sun squarely beside stern Saturn—titanic resilient builders once mutual respect conquers stiff pride." },
    ],
    famous: ["Ratan Tata", "Mukesh Ambani", "Indira Gandhi", "Aishwarya Rai"],
    affirmation: "I step boldly into rightful visibility, leading cleanly through service rather than loud control.",
    journalPrompts: [
      "Which stubborn lone burden am I holding tightly out of quiet pride rather than practical sense?",
      "Who beside me deserves genuine honest recognition for quiet behind-the-scenes reliability?",
      "Did clear sunlit values steer this past week—or frantic anxiety to impress noisy spectators?",
    ],
    faqs: [
      {
        question: "Do people born on the 1st, 10th, 19th, and 28th act identically under Mulank 1?",
        answer:
          "They share bold solar initiative at the root, yet nuanced secondary digits modify texture noticeably: 10 amplifies sudden peaks, 19 blends karmic humility alongside Mars drive, and 28 injects softer lunar-Saturnine diplomacy.",
      },
      {
        question: "Why does classic Vedic numerology view Mulank 1 and Mulank 8 as challenging?",
        answer:
          "In Jyotish symbolism Sun (Surya) and Saturn (Shani) represent contrasting temperaments—instant assertive blaze versus slow exacting scrutiny—meaning couples thrive only when mature respect bridges divergent speeds.",
      },
      {
        question: "Is Mulank 1 luckier working solo than in corporate partnerships?",
        answer:
          "Mulank 1 thrives equally in salaried authority whenever true autonomy exists—such as division leadership, independent clinical mastery, or founder equity—floundering mainly inside powerless clerical oversight.",
      },
      {
        question: "Should every Mulank 1 automatically wear a red Ruby gemstone?",
        answer:
          "Never treat general web guides as gemstone prescriptions—classical Jyotish checks whole natal planetary dignity carefully first, whereas simple morning sunlight habits carry universal gentle benefit safely.",
      },
    ],
  },
  {
    number: 2,
    dates: [2, 11, 20, 29],
    archetype: "The Mirror",
    planet: "Moon (Chandra)",
    element: "Water",
    direction: "North-west",
    gemstone: "Pearl",
    deity: "Chandra",
    tarotCard: "The High Priestess",
    tarotSlug: "the-high-priestess",
    hero: "Lunar receptivity, uncanny intuitive radar, and graceful emotional tact disarming sharpest tensions quietly from within.",
    description:
      "Mulank 2 (born on the 2, 11, 20, or 29): Chandra driver traits, collaborative careers, romantic sensitivity, sleep hygiene, remedies and FAQs.",
    meaning: [
      "Born under day 2, 11, 20, or 29 of any calendar month, gentle Chandra (Moon) governs every immediate social instinct—gifting rare emotional intelligence that senses subtle mood tremors instantly across silent rooms.",
      "Where sunny 1 pushes firmly forward across clear angles, fluid Water 2 flows cleanly around jagged obstacles through diplomacy, empathy, aesthetic intuition, and calm unforced persuasion.",
      "Subtle date nuances enrich this group cleanly: gentle 2 anchors quiet peacemaking; rare 11 heightens nervous psychic sensitivity noticeably; 20 softens doubts behind patient teamwork; fiery-lunar 29 mixes brave moral passion swiftly beside tender vulnerability.",
    ],
    personality: [
      "Everyday life moves cleanly to gentle tidal rhythms—high inspired empathy rolling smoothly across bright days alternating occasionally alongside quiet introspective retreats demanding peaceful sanctuary.",
      "Deep poetic imagination and warm active listening forge trusted lifelong friendships fast, though bitter unvoiced hurt lingers quietly far longer than defensive small smiles reveal.",
      "Confidence stabilizes unmistakably the moment delicate intuition partners calmly alongside structured daily timelines rather than waiting passively for outside validation.",
    ],
    strengths: [
      "Senses genuine subtext behind polite masks",
      "Diffuses hostile arguments gracefully",
      "Cultivates tactile cozy aesthetic warmth",
      "Remains softly loyal across decades",
      "Adapts fluidly around sudden human shifts",
    ],
    weaknesses: [
      "Paralyzed second-guessing on solo moves",
      "Moods dip sharply beside critical crowds",
      "Nurses quiet silent resentment when hurt",
      "Over-invests emotional worth in one tie",
      "Struggles holding harsh blunt boundaries",
    ],
    career: [
      "Cutthroat screaming trading floors bruise Chandra nerves badly—let sharp relational discernment sparkle naturally inside counseling chambers, hospitality design, diplomatic mediation, integrative care, music composition, sensitive editorial publishing, or cohesive executive partnerships.",
      "Pair smartly beside confident crisp co-leads whenever fearless public negotiation or uncompromising termination calls require thicker outer skin.",
    ],
    careerPaths: [
      "Clinical therapist & counselor",
      "Artistic curation & textile design",
      "Hospitality & wellness studio host",
      "Corporate people & culture strategist",
      "Diplomatic liaison & client care",
      "Classical or ambient music craft",
    ],
    love: [
      "Deep affectionate romanticism yearns sincerely for cozy domestic peace, lingering quiet conversations, thoughtful handwritten warmth, and unwavering emotional faithfulness.",
      "Check gently against quiet anxious mind-reading—ask caring partners plainly when silent moods baffle rather than spiraling darkly across midnight guesses.",
    ],
    health: [
      "Lunar tides hit fluid retention, nervous digestion, fluctuating anemia reserves, allergy flare-ups, and light fragmented insomnia straight after emotional friction.",
      "Consistent wind-down sleep schedules plus unhurried evening tea near fresh calm spaces heal deeper than quick pill patches.",
    ],
    money: [
      "Careful frugal instincts guard core emergency cushions thoughtfully, rarely tempted easily by wild gambling frenzies.",
      "Watch subtle generosity leaks rescuing chronically disorganized friends quietly or undercharging warm appreciative clients out of bashful discomfort with money talks.",
    ],
    remedies: [
      "Keep clean fresh water calmly inside crystal bedside glasses and change daily mornings",
      "Carve gentle Monday evenings strictly free from heated contentious arguments",
      "Wear crisp clean pearl white, soft pale cream, or muted silver tones during crucial pitches",
      "Walk gently beside calm rivers, ocean shorelines, or still park ponds weekly",
    ],
    colours: ["Pearl white", "Soft cream", "Moon silver"],
    days: ["Monday", "Friday"],
    compatibility: [
      { number: 1, verdict: "friend", note: "Classic solar-lunar complementarity—1 sparks crisp decisive launch while 2 weaves soulful harmonious execution cleanly." },
      { number: 2, verdict: "friend", note: "Tender quiet gentleness overflowing with shared poetic care; build deliberate blunt decision habits smoothly together." },
      { number: 4, verdict: "friend", note: "Protective earthy anchor reassures anxious lunar tides safely cleanly, grounding shared dreams into solid steady bricks." },
      { number: 7, verdict: "friend", note: "Silent intuitive depths converse peacefully past idle noise—deep soulful rapport anchored thoughtfully on gentle patience." },
      { number: 3, verdict: "neutral", note: "Bright cheerful social warmth lifts quiet reflective spirits delightfully whenever overbooked calendars protect quiet sleep." },
      { number: 6, verdict: "neutral", note: "Aesthetic tenderness shares warm home beauty gracefully once minor passive sensitivity avoids bitter unspoken comparisons." },
      { number: 9, verdict: "neutral", note: "Warm compassionate hearts link swiftly around noble service if brusque Martian haste tempers gently beside tender feelings." },
      { number: 5, verdict: "challenge", note: "Quick restless breeze tests sensitive domestic tides sharply—thrilling lively chemistry when open clarity cures suspicious guessing." },
      { number: 8, verdict: "challenge", note: "Cold severe Saturnine pace bruises delicate sensitivity initially; formidable calm loyalty grows whenever bluntness softens with respect." },
    ],
    famous: ["Amitabh Bachchan", "Rajesh Khanna", "Dilip Kumar", "Madhuri Dixit"],
    affirmation: "I trust delicate calm perception cleanly, voicing honest personal boundaries beside steady grace.",
    journalPrompts: [
      "Which gentle personal preference stayed quietly swallowed this week merely to protect peace?",
      "Whose intense turbulent stress soaked unknowingly straight into my own calm mood?",
      "What tiny concrete clear decision can I lock cleanly alone before noon tomorrow?",
    ],
    faqs: [
      {
        question: "Does being born on the 11th or 29th under Mulank 2 carry extra nervous sensitivity?",
        answer:
          "Yes—both compound digits introduce heightened voltage before reducing to 2 (11 mirrors dual creative pillars; 29 adds fiery Martian intensity), making calm restorative sleep and crisp boundaries unusually valuable.",
      },
      {
        question: "Are Mulank 2 people suited to leading large organizations?",
        answer:
          "Excellently through consensus, empathetic trust, cultural cohesion, and intuitive diplomacy—particularly flourishing alongside crisp operational deputies managing cold structural logistics.",
      },
      {
        question: "Why do Mulank 2 natives experience stronger mood swings around Full or New Moons?",
        answer:
          "Classical Vedic tradition ties mental serenity directly to Chandra rhythms; consistent evening hydration, light dinners, and gentle walks noticeably dampen sharp monthly fluctuations.",
      },
      {
        question: "What careers exhaust Mulank 2 fastest?",
        answer:
          "Isolated cold cold-calling boiler rooms or relentless hostile litigation lacking warm collaborative camaraderie steadily erode lunar resilience.",
      },
    ],
  },
  {
    number: 3,
    dates: [3, 12, 21, 30],
    archetype: "The Counsel",
    planet: "Jupiter (Guru)",
    element: "Ether",
    direction: "North-east",
    gemstone: "Yellow sapphire",
    deity: "Brihaspati",
    tarotCard: "The Empress",
    tarotSlug: "the-empress",
    hero: "Expansive Jovian optimism, magnetic articulation, and wise mentorship turning tangled complexity cleanly into vibrant clarity.",
    description:
      "Mulank 3 (born on the 3, 12, 21, or 30): Guru driver traits, inspiring vocations, cheerful romance, metabolic steadiness, Thursday remedies and FAQs.",
    meaning: [
      "Anyone born cleanly upon the 3rd, 12th, 21st, or 30th walks right beneath benevolent Brihaspati (Jupiter)—traditional celestial preceptor ruling teaching, ethical ambition, joyful expansion, and silver-tongued clarity.",
      "Mulank 3 blends radiant sunny confidence seamlessly with cooperative 2 sensitivity, birthing natural raconteurs, patient educators, generous mentors, and inspiring moral counselors incapable of sitting quietly inside stagnant cynicism.",
      "Each compound calendar day adds subtle flavor: straightforward 3 charges optimistically ahead; 12 weaves diplomatic tact gracefully beneath clear wit; lively 21 magnetizes charismatic social charm; 30 filters pure bright vision through serene contemplative stillness.",
    ],
    personality: [
      "Bright warm laughter regularly enters noisy gatherings inches ahead of Mulank 3: generous praise, engaging vivid stories, and infectious contagious hope encourage hesitant companions effortlessly.",
      "Beneath sunny social glow lives strict principled spine—casual dishonesty, petty spite, and small-minded stinginess trigger crisp dignified exits rapidly.",
      "Beware classic Jovian overreach: pledging three simultaneous favors cheerfully on busy Tuesday afternoons before realistic weekly calendars snap neatly back.",
    ],
    strengths: [
      "Turns complex topics into simple crystal clarity",
      "Lifts gloomy rooms smoothly with resilient optimism",
      "Shares hard-won insight generously without hoarding",
      "Builds trusted lifelong scholarly networks",
      "Maintains clean dignified moral principles",
    ],
    weaknesses: [
      "Over-promises cheerful capacity past realistic hours",
      "Pompous lecturing tone when feeling cornered",
      "Jumps enthusiastically into shiny fresh starts mid-task",
      "Indulgent festive rich meals and generous tabs",
      "Impatient around cynical slow nitpicking",
    ],
    career: [
      "Anywhere persuasion, trusted wisdom, uplifting cultural voice, or generous teaching earns respect, Brihaspati rewards effortlessly: dynamic higher education, respected advisory law, inspiring curriculum startups, clear ethical wealth advising, engaging media publishing, or warm executive people leadership.",
      "Keep disciplined practical editors beside wild creative wings cleanly ensuring brisk brilliant drafts ship crisply across real finish lines.",
    ],
    careerPaths: [
      "University lecturing & educational design",
      "Editorial authorship & narrative media",
      "Legal counsel & ethical governance",
      "Executive coaching & cultural training",
      "Strategic advisory & consulting",
      "Publishing & knowledge platforms",
    ],
    love: [
      "Lively intellectual banter sparks genuine affection quickly—joyful partners eager to explore ideas, travel thoughtfully, host generous warm dinners, and laugh together effortlessly stay endlessly cherished.",
      "Resist subtle temptation toward lecturing stressed loved ones gently like classroom pupils when weary partners simply crave quiet silent hugs.",
    ],
    health: [
      "Expansive Jupiter connects sensitively to hepatic liver metabolism, festive blood sugar jumps, sluggish cholesterol after celebratory feasts, and tight strained vocal cords.",
      "Clean moderate portions paired steadily alongside brisk cheerful hikes keep abundant Jovian vitality clean.",
    ],
    money: [
      "Reputation, advisory mastery, and broad helpful networks invite healthy steady prosperity comfortably across life—rarely stuck dry indefinitely.",
      "Leak points emerge subtly via generous celebratory hospitality and over-optimistic handshake investments skipping boring spreadsheet skepticism.",
    ],
    remedies: [
      "Dedicate clean quiet Thursday mornings to deep serious reading or mentoring someone kindly free of charge",
      "Wear cheerful warm turmeric yellow, mustard saffron, or pale gold touches on key advisory mornings",
      "Finish one lingering stalled promise cleanly completely before joyfully pledging fresh commitments",
      "Keep small humble modest notes beside glowing ambition to protect open listening",
    ],
    colours: ["Turmeric yellow", "Saffron gold", "Warm amber"],
    days: ["Thursday", "Tuesday"],
    compatibility: [
      { number: 1, verdict: "friend", note: "Radiant fiery alignment—1 anchors bold decisive launches while 3 expands charismatic vision smoothly worldwide." },
      { number: 3, verdict: "friend", note: "Buoyant optimistic powerhouse buzzing with vivid plans; appoint clear tidy execution schedules keeping generous promises grounded." },
      { number: 6, verdict: "friend", note: "Warm cultured elegance delights both Venus and Jupiter effortlessly inside cozy thriving homes rich in arts and warmth." },
      { number: 9, verdict: "friend", note: "Inspiring noble purpose unites fearless courageous compassion cleanly beside persuasive wisdom—deep natural moral bond." },
      { number: 2, verdict: "neutral", note: "Gentle affectionate rapport blooms naturally whenever breezy playful optimism slows thoughtfully around quiet sensitive moods." },
      { number: 5, verdict: "neutral", note: "Sparkling restless curiosity makes thrilling lively weekends together; guard steady financial reserves past carefree shared tabs." },
      { number: 7, verdict: "neutral", note: "Fascinating teacher-seeker chemistry balances optimistic breadth smoothly against quiet focused investigative skepticism." },
      { number: 4, verdict: "challenge", note: "Expansive airy dreams challenge grim realistic limits daily—tremendous sturdy legacy whenever mutual respect replaces nagging impatience." },
      { number: 8, verdict: "challenge", note: "Benevolent enthusiastic generosity meets strict testing Saturn; deep lasting civic authority grows once joyful ease respects gritty budgets." },
    ],
    famous: ["Sachin Tendulkar", "Swami Vivekananda", "A. P. J. Abdul Kalam", "Kareena Kapoor"],
    affirmation: "I channel joyful expanding wisdom into disciplined completed craft serving people cleanly.",
    journalPrompts: [
      "What generous well-meaning promise deserves polite gentle trim before stretching stress tight?",
      "Which thrilling half-built dream waits patiently for unglamorous steady polish this week?",
      "Where did well-intended wise lecturing quietly crowd out patient loving listening lately?",
    ],
    faqs: [
      {
        question: "Why does Mulank 3 feel torn between creative arts and structured teaching?",
        answer:
          "Jupiter rules broad wisdom synthesis rather than narrow dry repetition—both expressive arts and advisory education satisfy the exact same instinct to illuminate truth persuasively.",
      },
      {
        question: "How can Mulank 3 finish more projects without feeling trapped?",
        answer:
          "Timebox focused finishing sprints aggressively short (twenty-five-minute bursts) with playful rewards afterward so creative excitement never dries into resentful drudgery.",
      },
      {
        question: "Is there any subtle conflict between Mulank 3 and Mulank 6?",
        answer:
          "Traditionally Jupiter and Venus hold differing values (spiritual wisdom versus sensory harmony), yet socially and romantically they frequently share abundant charm, cultured taste, and generous hospitality when financial boundaries remain mutually agreed.",
      },
      {
        question: "What makes Thursday especially auspicious for Mulank 3?",
        answer:
          "Thursday (Guruvar) aligns cleanly with Jupiter—making it traditionally ideal for starting structured study, consulting trusted mentors, publishing flagship essays, or settling big ethical plans calmly.",
      },
    ],
  },
  {
    number: 4,
    dates: [4, 13, 22, 31],
    archetype: "The Maverick",
    planet: "Rahu / Uranus",
    element: "Earth",
    direction: "South-west",
    gemstone: "Hessonite (Gomed)",
    deity: "Rahu",
    tarotCard: "The Emperor",
    tarotSlug: "the-emperor",
    hero: "Unconventional tectonic insight, rugged relentless endurance, and shattering stale brittle habits to build lasting rugged structures.",
    description:
      "Mulank 4 (born on the 4, 13, 22, or 31): Rahu/Uranus driver traits, tech & systems careers, loyal quiet love, routine stability and FAQs.",
    meaning: [
      "Born on day 4, 13, 22, or 31 places instant instinct cleanly beneath Rahu and disruptive Uranus—the classic shadow-node archetype smashing comfortable shiny illusions rapidly so deeper durable engineering emerges honestly from beneath.",
      "Unapologetically realistic and frequently misunderstood during youth, Mulank 4 spots structural rot, dishonest fluff, and fragile logical shortcuts months ahead of cheering mainstream crowds.",
      "Calendar roots distinguish nuances cleanly: grounded 4 builds patiently block by block; dramatic 13 breaks dead shells sharply through crisp reinvention; massive 22 blends towering humanitarian intuition inside granite grit; snappy 31 sparkles inventive independent design.",
    ],
    personality: [
      "Polite fluffy small talk rarely charms blunt authentic 4s—hand them messy broken infrastructure or unpopular honest debates and watch focused unshakeable determination roar silently to life.",
      "Sudden unexpected twists mark life timelines more vividly than sleepy predictable arcs: rapid breakthrough hops follow stubborn patient dry trenches abruptly overnight.",
      "Behind bristly defensive cynicism toward shiny authority sits surprising fiercely loyal warmth reserved purely for genuine unsentimental friends who stayed true during dusty silent years.",
    ],
    strengths: [
      "Detects structural fraud and flaws rapidly",
      "Relentless mechanical and coding stamina",
      "Thinks radically past herd-thinking dogma",
      "Shows rock-solid fidelity during grim crises",
      "Engineered from unflashy honest discipline",
    ],
    weaknesses: [
      "Argues contrarian points purely out of reflex",
      "Pessimistic guarded bracing expecting betrayal",
      "Retreats sharply into secretive icy walls",
      "Blunt uncompromising words wounding sensitive pals",
      "Disruptive erratic sleep & irregular routines",
    ],
    career: [
      "Precision technical software systems, heavy structural mechanics, quantitative cybersecurity audits, deep operational reform, forensic compliance, and frontier disruptive engineering welcome Mulank 4 brilliance enthusiastically.",
      "Rigid hierarchical flattery games trigger open friction rapidly—align smoothly toward crisp output-driven engineering cultures valuing plain verifiable bug-hunting truth over slick empty hype.",
    ],
    careerPaths: [
      "Systems & cybersecurity engineering",
      "Forensic data & quantitative audit",
      "Real estate construction & infrastructure",
      "Product operations & process turnaround",
      "Scientific instrumentation & research",
      "Disruptive technical founding",
    ],
    love: [
      "Steady silent acts—fixing jammed hinges, auditing risky apartment leases calmly, holding umbrellas silently through downpours—prove love vastly deeper than mushy greeting-card prose ever could.",
      "Watch quietly against brooding suspicion checking invisible traps: share plain unfiltered affection regularly aloud so tender partners clearly feel cherished inside tough calm presence.",
    ],
    health: [
      "Rahu unpredictability stirs erratic disrupted circadian sleep, gut nervous bloating, mysterious chronic dermatology flares, and jaw rigidity during solitary anxious late hours.",
      "Strict fixed meal hours paired comfortably beside brisk outdoor ground exercise calm electric nervous static noticeably within fourteen days.",
    ],
    money: [
      "Income frequently climbs via sharp stepped jumps rather than silky predictable lines—sudden windfall engineering contracts interspersed softly across frugal patient stretches.",
      "Guard generous six-month untouched reserve accounts steadfastly cleanly apart from volatile speculative tinkering.",
    ],
    remedies: [
      "Lock fixed reliable bedtime and clean morning meal clocks strictly seven days straight",
      "Clear dusty desk cables, forgotten paper stacks, and stagnant room clutter every Saturday afternoon",
      "Donate dark warm blankets, black sesame, or sturdy everyday meals modestly on Saturdays without display",
      "Read important legal or tax signatures coolly one full night quietly after initial excitement passes",
    ],
    colours: ["Electric blue", "Smoke grey", "Earthy khaki"],
    days: ["Saturday", "Sunday"],
    compatibility: [
      { number: 4, verdict: "friend", note: "Unflinching shared grit and refreshingly zero-BS honesty; protect lighthearted play outside shared fix-it lists together." },
      { number: 5, verdict: "friend", note: "Quick agile curiosity delights inventive structural insight smoothly—energetic modern duo cracking clever unconventional breakthroughs." },
      { number: 7, verdict: "friend", note: "Rahu and Ketu share mysterious ancient symmetry—private thinkers enjoying quiet intellectual clarity safely away from shallow crowds." },
      { number: 8, verdict: "friend", note: "Hardworking uncompromising endurance scales towering sturdy ventures reliably once blunt practical warmth keeps respect high." },
      { number: 2, verdict: "neutral", note: "Tender caring intuition softens sharp suspicious edges calmly once honest clear dialogue dissolves silent brooding fears." },
      { number: 6, verdict: "neutral", note: "Stylish cozy sanctuary grounds edgy restless nerves beautifully whenever stubborn critical perfection pauses graciously home." },
      { number: 9, verdict: "neutral", note: "Pragmatic technical discipline powers idealistic bold humanitarian changes once impatient idealism respects realistic constraints." },
      { number: 1, verdict: "challenge", note: "Headstrong innovator challenges radiant kingly pride cleanly—dynamic power pair if stubborn ego drops competitive sniping." },
      { number: 3, verdict: "challenge", note: "Grim realistic skeptic collides dramatically beside rosy buoyant optimism—priceless mutual balance once mutual teasing stays kind." },
    ],
    famous: ["Kishore Kumar", "Barack Obama", "Preity Zinta", "Javed Akhtar"],
    affirmation: "I pair bold unconventional insight calmly alongside patient routines and open trusting kindness.",
    journalPrompts: [
      "Where did protective cynical skepticism push caring genuine encouragement carelessly aside yesterday?",
      "Which stagnant cluttered drawer, inbox, or lingering promise drains calm background mental clarity?",
      "Who deserves clear simple gentle appreciation voiced openly out loud tonight?",
    ],
    faqs: [
      {
        question: "Why is Mulank 4 frequently linked to sudden surprises or career pivots?",
        answer:
          "Vedic tradition pairs 4 with Rahu (and modern numerology with Uranus)—both represent unconventional leaps, breaking obsolete conventions sharply, and non-linear breakthroughs after patient lonely groundwork.",
      },
      {
        question: "Are people born on the 13th or 22nd unlucky because they reduce to 4?",
        answer:
          "Not remotely—13 embodies fierce rebirth and relentless transformative work ethic, while 22 stands among the strongest master builder dates in the calendar when harnessed through patient discipline.",
      },
      {
        question: "How does Mulank 4 differ emotionally from Life Path 4?",
        answer:
          "Mulank 4 reflects immediate rebellious quirky sharpness right in everyday conversation, whereas Life Path 4 reflects slower structural Saturnine stamina shaping lifelong choices.",
      },
      {
        question: "What simple lifestyle shift calms Rahu stress fastest for Mulank 4?",
        answer:
          "Predictable grounding physical habits—eating real meals on reliable clocks, cutting erratic blue-light screen nights cleanly, and tidying cluttered workspaces steadily weekly.",
      },
    ],
  },
  {
    number: 5,
    dates: [5, 14, 23],
    archetype: "The Catalyst",
    planet: "Mercury (Budh)",
    element: "Air",
    direction: "North",
    gemstone: "Emerald",
    deity: "Budh",
    tarotCard: "The Hierophant",
    tarotSlug: "the-hierophant",
    hero: "Razor-quick commercial intellect, youthful curiosity, and effortless charm connecting diverse strangers gracefully overnight.",
    description:
      "Mulank 5 (born on the 5, 14, or 23): Budh driver traits, nimble deal-making careers, playful partnerships, digital detox wellness and FAQs.",
    meaning: [
      "Positioned cleanly right inside cosmic pivot point between 1 and 9, birth dates 5, 14, and 23 pulse continuously to lightning-fast Budh (Mercury)—classical messenger of trade, sharp humor, polyglot intelligence, and brisk agile change.",
      "Notice eternal youthful curiosity lighting mature Mulank 5 faces gracefully decades past forty: stale habits crack quickly wherever fresh technology, clever travel pitches, or lively witty debates sparkle softly nearby.",
      "Calendar digits paint clear tones: crisp 5 sparks instantaneous networking; active 14 injects disciplined structural drive (often testing excess impulsivity); dynamic 23 adds effortless poetic social charm unlocking welcoming doors globally.",
    ],
    personality: [
      "Drop Mulank 5 awkwardly inside tense silent elevator rides and light witty remarks loosen heavy shoulders straight away before ground floor doors chime smoothly open.",
      "Master communicators decode jargon crisply into clean profitable deals, spotting changing cultural moods months smoothly ahead of clunky bureaucratic planners.",
      "Fragile vulnerability waits closely underneath frantic busyness: avoiding heavy scary emotional grief smoothly by stacking three simultaneous trips, side hustles, and midnight group chats.",
    ],
    strengths: [
      "Reads complex audiences cleanly in seconds",
      "Learns fresh software and dialects swiftly",
      "Negotiates crisp win-win market deals",
      "Recovers cheerfulness swiftly past bumps",
      "Builds vast eclectic cross-border networks",
    ],
    weaknesses: [
      "Drops good ventures just before harvest",
      "Restless scattered multitasking past limits",
      "Evades heavy solemn emotional confrontations",
      "Over-spends carelessly on shiny travel/gear",
      "Jitters silently when silent evenings stretch long",
    ],
    career: [
      "Static silent filing cabinets extinguish lively Budh talent almost physically—plug brisk intellect smoothly straight toward energetic deal broking, sharp product marketing, strategic tech advisory, investigative multi-beat reporting, agile cross-border trade, or lively multi-stakeholder partnerships.",
      "Guard clearly focused morning work blocks fiercely away from noisy chat pings so brilliant broad contacts convert cleanly into finished high-value assets.",
    ],
    careerPaths: [
      "Tech consulting & agile product lead",
      "Global trade & strategic deal broking",
      "Editorial growth & persuasive copy",
      "Investigative broadcasting & media",
      "Aviation, logistics & travel ventures",
      "FinTech & market analysis",
    ],
    love: [
      "Shared playful teasing, unforced trust leaving healthy solo social wings wide intact, and brisk engaging conversations fire affectionate loyalty seamlessly.",
      "Suffocating jealous surveillance closes agile Mulank 5 emotionally overnight—staying effortlessly loyal comes naturally whenever companionship feels liberating rather than clipped.",
    ],
    health: [
      "Hyper-active Budh stirs shallow chest breath, buzzing caffeinated insomnia, dermatological stress hives, and erratic wrist/shoulder stiffness from relentless typing.",
      "Intentional tech-free walks alongside steady slow nasal breathing quiet jagged sensory spin fast.",
    ],
    money: [
      "Nimble commercial radar grabs swift clever opportunities easily across shifting markets—making generous agile cashflow look surprisingly effortless.",
      "Money slips fastest effortlessly right out via spontaneous gadgets, last-minute airline upgrades, and unbudgeted generous group treats; route automatic savings straight out first.",
    ],
    remedies: [
      "Reserve one full calm evening weekly completely free of phones, streaming noise, or frantic chatter",
      "Keep clean cool mint green, bright emerald accents, or crisp slate grey subtly on key Wednesday deals",
      "Finish one flagship lingering item cleanly all the way to polish before opening any fresh shiny project",
      "Sit calmly still ten silent minutes every dawn letting scattered chatter settle cleanly before emails launch",
    ],
    colours: ["Mint green", "Turquoise", "Silver slate"],
    days: ["Wednesday", "Friday"],
    compatibility: [
      { number: 1, verdict: "friend", note: "Fast agile intelligence meets crisp decisive ambition effortlessly—inventive unstoppable pioneers building dynamic modern momentum." },
      { number: 4, verdict: "friend", note: "Inventive maverick clicks brightly beside witty commercial speed—fresh smart engineering translated seamlessly to thriving crowds." },
      { number: 5, verdict: "friend", note: "Thrilling double-speed banter and carefree adventures; lock automated boring savings buffers early before wild weekend trips pile up." },
      { number: 6, verdict: "friend", note: "Venusian grace adds tactile home sanctuary beautifully around restless agile travel—delightful affectionate balance cleanly together." },
      { number: 3, verdict: "neutral", note: "Witty sparkling chatter runs endlessly brightly; pair kindly alongside clear realistic accountability calendars so promises finish whole." },
      { number: 7, verdict: "neutral", note: "Sharp curious minds intrigue calmly across wide philosophies whenever gentle patience lets quiet depths catch brisk light breezes." },
      { number: 8, verdict: "neutral", note: "Agile commerce meets formidable institutional scale neatly once quick clever pitches back up calmly with solid dry spreadsheets." },
      { number: 2, verdict: "challenge", note: "Flitting playful detachment unsettles tender anxious feelings smoothly—profound trust develops gently whenever steady honest check-ins anchor love." },
      { number: 9, verdict: "challenge", note: "Cool detached humor crosses intense passionate Mars depth—magnificent lively complementarity when playful wit stays gentle toward deep hurt." },
    ],
    famous: ["Virat Kohli", "Aamir Khan", "Kajol", "Deepika Padukone"],
    affirmation: "I anchor brisk agile brilliance peacefully inside quiet steady follow-through and calm presence.",
    journalPrompts: [
      "Which bright distracting distraction pulled clear focus casually right past finishing something vital?",
      "Where does nervous small talk silently delay one brave genuine calm heart-to-heart?",
      "What silent unplugged hour this Sunday afternoon restores sparkling clear perspective quickly?",
    ],
    faqs: [
      {
        question: "Why does number 5 attract friends across nearly every other Mulank?",
        answer:
          "Sitting centrally between 1 and 9, Mercury adapts conversational frequency rapidly—speaking practical trade with 4 and 8, lively curiosity with 3, and warm elegance smoothly alongside 6.",
      },
      {
        question: "Do people born on the 14th or 23rd share identical Mulank 5 fortune?",
        answer:
          "All share quick commercial adaptability, though 14 adds bold testing lessons around disciplined freedom while 23 traditionally earns particular reputation for charming social fluency and rapid networking ease.",
      },
      {
        question: "How can Mulank 5 beat mid-project boredom cleanly?",
        answer:
          "Build clear visual sprint milestones, invite sharp collaborative sprint reviews every Friday, and automate dull repetitive admin cleanly off manual desks.",
      },
      {
        question: "What simple wellness habit rescues overloaded Mercury nerves quickly?",
        answer:
          "Strict bedtime device dock rules keeping glowing alerts clean outside sleeping quarters paired calmly alongside physical rhythmic breath.",
      },
    ],
  },
  {
    number: 6,
    dates: [6, 15, 24],
    archetype: "The Magnet",
    planet: "Venus (Shukra)",
    element: "Water",
    direction: "South-east",
    gemstone: "Diamond or white sapphire",
    deity: "Shukra / Lakshmi",
    tarotCard: "The Lovers",
    tarotSlug: "the-lovers",
    hero: "Effortless magnetic grace, refined aesthetic harmony, and nurturing tactile warmth shaping ordinary houses cleanly into thriving havens.",
    description:
      "Mulank 6 (born on the 6, 15, or 24): Shukra driver traits, design & wellness careers, magnetic love, sugar/kidney care, Friday remedies and FAQs.",
    meaning: [
      "Celebrated cleanly across birth days 6, 15, and 24 under radiant Shukra (Venus), Mulank 6 wakes effortlessly noticing subtle proportions, warm lighting, inviting hospitality, and invisible emotional needs shaping everyday life.",
      "Natural magnetism pulls appreciative friends, flourishing businesses, artistic beauty, and cozy creature comforts steadily inward whenever generous poise stays cleanly rooted rather than desperately performing.",
      "Calendar shades tell clear nuances: refined pure 6 treasures home harmony naturally; magnetic 15 blends bold enterprising persuasion alongside irresistible artistic presence; warm affectionate 24 balances tender care solidly around practical familial loyalty.",
    ],
    personality: [
      "Step cleanly across any room stewarded affectionately by Mulank 6 and immediate tactile relief greets guests warmly: balanced colors, pleasant subtle fragrance, generous unhurried food, and genuine attentive presence.",
      "Beneath velvety gracious manners sits firm iron aesthetic spine—sloppy ugliness, coarse bullying, and loud grating stinginess sour joyful peace fast.",
      "Unhealed shadow turns quiet loving helpfulness subtly possessive or exhausted—expecting unspoken mind-reading gratitude back after endless self-sacrificing favors.",
    ],
    strengths: [
      "Effortless eye for visual and social harmony",
      "Radiates trustworthy calming warmth naturally",
      "Draws supportive prosperous relationships",
      "Nurtures flourishing comfortable team cultures",
      "Steadfast attentive loyalty toward inner family",
    ],
    weaknesses: [
      "Indulges sensory comforts dodging raw conflict",
      "Smothering anxious control over loved ones",
      "Struggles voicing blunt unpopular healthy 'no'",
      "Overspends quietly keeping spaces gorgeous",
      "Bruised quietly when generous favors look unseen",
    ],
    career: [
      "Graceful high-touch mastery lifts revenue fast whenever sensory quality defines client trust: architectural home styling, boutique hospitality brands, culinary elegance, mindful aesthetic health clinics, bespoke couture, thoughtful luxury branding, or compassionate family guidance.",
      "Price elevated refined taste crisply at genuine commercial worth instead of quietly discounting lovely work out of accommodating sweetness.",
    ],
    careerPaths: [
      "Interior architecture & boutique design",
      "Fine hospitality & culinary arts",
      "Fashion editorial & aesthetic direction",
      "Holistic care & integrative clinics",
      "Elevated consumer luxury branding",
      "Counseling & early creative education",
    ],
    love: [
      "Devoted deeply romantic tenderness makes home cozy sacred ground—candlelit unhurried dinners, reassuring gentle affection, and faithful supportive backing through hard climbs.",
      "Preserve real mutual breathing space warmly cleanly so protective closeness never slides softly into anxious silent jealousy or over-management.",
    ],
    health: [
      "Shukra rules clean renal water hydration, smooth hormonal grace, soft vocal throats, and sweet sugar balance easily tipped by stress pastry nibbling.",
      "Clean herbal hydration, joyful rhythmic dance/walks, and unhurried clear emotional talking heal sweet imbalances smoothly.",
    ],
    money: [
      "Prosperity flows cheerfully inward through trustworthy generous beauty—often turning refined personal taste seamlessly into comfortable enduring livelihoods.",
      "Define explicit stylish aesthetic caps calmly inside clean monthly budgets so spontaneous gorgeous home buys never pinch quiet investment compounding.",
    ],
    remedies: [
      "Keep clean fresh living rooms airy, fragrant, and calmly free of stagnant cracked clutter",
      "Wear crisp light pastel white, muted rose, or soft sky blue serenely on vital Friday reviews",
      "Offer small gracious anonymous kindnesses gently toward struggling artisans on calm Friday afternoons",
      "Practice voicing one clear courteous honest 'no' every single week without anxious apologizing",
    ],
    colours: ["Soft pastel white", "Muted rose", "Sky blue"],
    days: ["Friday", "Wednesday"],
    compatibility: [
      { number: 3, verdict: "friend", note: "Creative cultured flair celebrates lovely hospitality effortlessly; coordinate realistic festive budgets smoothly home." },
      { number: 5, verdict: "friend", note: "Playful breezy wit brings exhilarating fresh wind comfortably inside cozy sanctuary—charming buoyant harmony." },
      { number: 6, verdict: "friend", note: "Lush harmonious beauty and deep kind gentleness; share honest unvarnished disagreements early rather than burying silent hurt." },
      { number: 9, verdict: "friend", note: "Warm compassionate tenderness meets fearless fierce advocacy cleanly—heartwarming protective allies uplifting whole circles." },
      { number: 1, verdict: "neutral", note: "Radiant ambitious solar edge admires gracious warmth cleanly once gentle mutual credit balances bright busy spotlights." },
      { number: 2, verdict: "neutral", note: "Soft sensitive poetry clicks smoothly inside tranquil cozy rooms whenever frank polite clarity replaces sulky silences." },
      { number: 4, verdict: "neutral", note: "Sturdy solid building shelter preserves serene aesthetic comforts cleanly once relaxed play balances diligent serious plans." },
      { number: 7, verdict: "challenge", note: "Detached cool hermit inquiry baffles sensory open warmth—intriguing deep respect blooms gently once privacy isn't misread as cold rejection." },
      { number: 8, verdict: "challenge", note: "Austere stern Saturn tests playful luxury appetites firmly; prosperous resilient loyalty when soft warmth softens hard driven work." },
    ],
    famous: ["Sachin Pilgaonkar", "Madhubala", "Ranveer Singh", "Anil Kapoor"],
    affirmation: "I nurture beauty cleanly with poised joyful boundaries, loving warmly without sacrificing clear truth.",
    journalPrompts: [
      "Where did polite accommodating harmony hide an authentic honest boundary this week?",
      "Which generous lavish home upgrade genuinely nourishes peace versus chasing shallow compliments?",
      "Who close deserves quiet affectionate celebration completely apart from chores?",
    ],
    faqs: [
      {
        question: "Why does Mulank 6 enjoy strong reputation around material ease and aesthetic taste?",
        answer:
          "Vedic tradition associates Venus (Shukra) cleanly with refined comfort, artistic sensibility, gentle diplomacy, and magnetic mutual goodwill—turning welcoming beauty effortlessly into practical prosperity when grounded by disciplined habits.",
      },
      {
        question: "How do birth dates 6, 15, and 24 differ slightly under Mulank 6?",
        answer:
          "Day 6 acts purely serenely; day 15 carries extra active persuasive energy suited cleanly to enterprising art or commerce; day 24 grounds warm loyalty directly around durable practical family stewardship.",
      },
      {
        question: "Why can Mulank 6 feel unexpectedly drained inside toxic workplaces?",
        answer:
          "Harsh ugly hostility, manipulative backstabbing, or visually dismal dreary offices clash sharply against sensitive Shukra taste—relocating toward collaborative beauty-respecting roles shifts wellbeing fast.",
      },
      {
        question: "What simple daily shift breaks anxious martyrdom patterns for Mulank 6?",
        answer:
          "Wait quietly until competent loved ones actually ask clearly for aid instead of rushing reflexively in to fix mild preventable inconveniences.",
      },
    ],
  },
  {
    number: 7,
    dates: [7, 16, 25],
    archetype: "The Mystic",
    planet: "Ketu / Neptune",
    element: "Water",
    direction: "South",
    gemstone: "Cat's eye",
    deity: "Ketu / Ganesha",
    tarotCard: "The Chariot",
    tarotSlug: "the-chariot",
    hero: "Unblinking investigative depth, serene inward intuition, and detaching peacefully past noisy fashion toward verified quiet truth.",
    description:
      "Mulank 7 (born on the 7, 16, or 25): Ketu/Neptune driver traits, deep specialist work, unhurried intimacy, nature walks, remedies and FAQs.",
    meaning: [
      "Born on day 7, 16, or 25 places quiet analytical radar directly under mysterious Ketu and misty Neptune—an archetype stripped deliberately of hollow chatter so sharp penetrating intelligence isolates hidden root truth rapidly.",
      "Unfazed by glittering crowds cheering noisy empty trends, Mulank 7 frequently prefers solitary morning coffee, rigorous research rabbit holes, silent sunlit garden walks, and honest nuanced debates questioning lazy consensus assumptions.",
      "Birth compound notes vary softly: serene direct 7 seeks timeless quiet clarity; testing karmic 16 sheds brittle proud status sharply toward real humility; perceptive lunar-mercurial 25 fuses warm vivid storytelling subtly beside forensic private study.",
    ],
    personality: [
      "Walk beside any thoughtful Mulank 7 and brisk social facades fall silently off cleanly inside unhurried twenty-minute conversations—piercing sincere curiosity cuts straight past boring resume bragging toward what makes hearts genuinely ache or sparkle.",
      "Unconventional original hunches routinely strike sideways during quiet evening showers or sleepy dawn meditation long after brute spreadsheet grinding stalled cold.",
      "When wounded deeply by hollow betrayal, steel shutters drop quietly without theatrical screaming—learning softly how to voice mild raw hurt before quiet vanishing prevents lonely lifelong misunderstandings.",
    ],
    strengths: [
      "Penetrating non-conformist analytical insight",
      "Reads hidden motives effortlessly past spin",
      "Self-contained serene calm inside solitude",
      "Marries sharp skepticism smoothly with intuition",
      "Produces timeless refined specialist craft",
    ],
    weaknesses: [
      "Slips noiselessly into distant chilly retreat",
      "Over-scrutinizes warm genuine affection anxiously",
      "Stalls brave visible launches over minor flaws",
      "Blunt understated cynicism bruising tender pals",
      "Priceless specialized craft wildly under-billed",
    ],
    career: [
      "Open-plan frantic distraction offices fracture delicate Ketu focus violently—flourish powerfully wherever quiet rigorous concentration breeds rare mastery: diagnostic medicine, foundational software research, sharp investigative journalism, nuanced depth psychology, cryptographic analysis, or philosophical scholarly authorship.",
      "Share refined insights reliably through written essays and structured briefings so quiet brilliance translates unmistakably into respected compensation.",
    ],
    careerPaths: [
      "Machine learning & foundational research",
      "Forensic medicine & laboratory analysis",
      "Depth psychology & contemplative therapy",
      "Investigative narrative authorship",
      "Statistical risk & market intelligence",
      "Independent specialized technical advisory",
    ],
    love: [
      "Fast superficial flirting bounces awkwardly off quiet discernment—deep intriguing curiosity, shared peaceful silences, genuine unflinching honesty, and unhurried unpressured loyalty forge profoundly lasting devotion steadily.",
      "Voice gentle caring thoughts deliberately out loud weekly so warm affectionate partners never mistake quiet absorbed thinking for chilly indifference.",
    ],
    health: [
      "Ketu tension exhibits cleanly as subtle nervous digestive sensitivity, baffling vague exhaustion patterns, erratic disrupted dream cycles, and overactive rumination draining quiet restorative rest.",
      "Barefoot grass mornings, brisk unhurried natural water walks, and clear screenless evening windows restore crisp physical ease rapidly.",
    ],
    money: [
      "Immune cleanly to impulsive social shopping traps, cautious research generally steers Mulank 7 smoothly clear of hollow predatory market scams.",
      "Real recurring money bottleneck arrives strictly through bashful underpricing—benchmark market peers honestly quarterly and name assertive fair fees plainly without swallowing nervous apologies.",
    ],
    remedies: [
      "Hold twenty calm uncluttered minutes of pure outdoor quiet completely unplugged daily",
      "Wear subtle soothing dusty lilac, smoky pale grey, or quiet sea-green nuances comfortably",
      "Walk gently barefoot directly upon fresh clean green park turf during calm morning sun",
      "Speak one candid hesitant vulnerability openly clearly toward trusted allies rather than retreating silently",
    ],
    colours: ["Smoke grey", "Muted violet", "Sea green"],
    days: ["Monday", "Tuesday"],
    compatibility: [
      { number: 2, verdict: "friend", note: "Soft empathetic intuition sits soothingly inside quiet shared sanctuary—silent mutual understanding without noisy chatter." },
      { number: 4, verdict: "friend", note: "Sharp skeptical rigor loves clear unvarnished realism; steadfast private friendship built soundly past flashy crowd hype." },
      { number: 7, verdict: "friend", note: "Instant profound philosophical meeting respecting quiet separate workspaces seamlessly—keep small warm daily affection bridges intentionally open." },
      { number: 9, verdict: "friend", note: "Penetrating philosophical sight aligns cleanly alongside heroic altruistic impact whenever patience connects reflection into warm action." },
      { number: 1, verdict: "neutral", note: "Crisp confident action complements observant quiet planning whenever solar leadership invites thoughtful silent feedback patiently." },
      { number: 3, verdict: "neutral", note: "Radiant lively wit brings light laughter smoothly across serious study rooms once busy chatter leaves calm breathing pockets." },
      { number: 5, verdict: "neutral", note: "Restless open mind trades fascinating weird inquiries happily beside quiet observer if grounding steadies drifting schedules." },
      { number: 6, verdict: "challenge", note: "Warm bustling household harmony collides beside stark detached silence—deep respectful tenderness unfolds once unhurried kindness translates moods." },
      { number: 8, verdict: "challenge", note: "Invisible inward wisdom crosses fierce hard material scorekeeping; unforgettable deep mastery once spiritual insight meets earthly execution." },
    ],
    famous: ["M. S. Dhoni", "Katrina Kaif", "Saif Ali Khan", "Ekta Kapoor"],
    affirmation: "I share thoughtful clarity openly, balancing sacred quietude gracefully alongside warm human trust.",
    journalPrompts: [
      "Which honest vulnerability am I shielding gracefully behind cool detached intellectual analysis?",
      "What crisp rare expertise deserves clear confident market pricing right now?",
      "Where does solitary contemplative rest slip quietly past restoration into numb emotional isolation?",
    ],
    faqs: [
      {
        question: "Why does Mulank 7 often feel out of place in loud conventional social crowds?",
        answer:
          "Ketu naturally pulls perception inward beyond surface trends—creating genuine discomfort inside hollow status games while lighting up deeply alongside thoughtful one-on-one depth.",
      },
      {
        question: "How does birth date 16 differ gently from 7 or 25 under Mulank 7?",
        answer:
          "16 combines solar pride alongside Venus charm before reducing sharply to Ketu—frequently delivering sharp humbling career/ego pivots early that forge remarkable resilient spiritual depth afterward.",
      },
      {
        question: "Are Mulank 7 individuals actually colder or less loving in marriage?",
        answer:
          "Not at all—deep selective devotion runs fiercely faithful; partners simply flourish best understanding quiet solo decompression isn't angry withdrawal.",
      },
      {
        question: "What unlocks hidden material success fastest for Mulank 7?",
        answer:
          "Combining crisp specialist insight courageously alongside open clear visibility—publishing authoritative work cleanly and letting trusted allies handle sales polish.",
      },
    ],
  },
  {
    number: 8,
    dates: [8, 17, 26],
    archetype: "The Pillar",
    planet: "Saturn (Shani)",
    element: "Earth",
    direction: "West",
    gemstone: "Blue sapphire",
    deity: "Shani",
    tarotCard: "Strength",
    tarotSlug: "strength",
    hero: "Saturnine iron endurance, stern ethical gravity, and delayed unshakeable harvest forged cleanly out of patient honest resilience.",
    description:
      "Mulank 8 (born on the 8, 17, or 26): Shani driver traits, compounding career climbs, sober wealth stewardship, joint/bone care and FAQs.",
    meaning: [
      "Birth on the 8th, 17th, or 26th links everyday temperament straight beneath slow impartial Shani (Saturn)—cosmic examiner rewarding gritty patient ethics decisively while ruthlessly exposing lazy fraudulent shortcuts.",
      "Rarely handed breezy easy luck upfront during restless twenties, Mulank 8 frequently grows remarkably strong carrying serious early duties straight across long patient climbs until unmistakable authority crystallizes right around early-to-mid thirties.",
      "Calendar nuances shine cleanly: stark direct 8 confronts heavy grit eye to eye; crisp 17 fuses brilliant solar ambition alongside sharp analytical 7 turning late harvests bright globally; balanced 26 softens strict severity visibly with gentle domestic diplomacy.",
    ],
    personality: [
      "Walk past hollow trendy boasts cleanly—straight-backed Mulank 8 checks verifiable character quietly behind polite words, spotting phony bluffers instantly within two firm questions.",
      "Unmatched long-haul stamina outlasts flashy frantic sprinters year after steady unglamorous year until slow compounding quietly towers tall above volatile crowds.",
      "Hidden inner peril sits subtly inside grim unrelenting scarcity tension: relaxing joy feels strangely suspicious even straight atop abundant verified net worth unless deliberate lightness enters weekly schedules.",
    ],
    strengths: [
      "Ironclad follow-through through grueling stretches",
      "Fierce impartial fairness without sycophancy",
      "Natural operational and asset discipline",
      "Recovers calmly straight past brutal crashes",
      "Silent generous shelter supporting struggling teams",
    ],
    weaknesses: [
      "Severe unsmiling harshness under exhaustion",
      "Guards bruised vulnerability far too tightly",
      "Stubborn hoarding suspicion even past safety",
      "Equates gentle leisure nervously with laziness",
      "Slow forgiving sharp moral betrayals cleanly",
    ],
    career: [
      "Complex capital finance, heavy engineering enterprises, senior constitutional or commercial judiciary, gritty urban construction, rigorous industrial leadership, and dependable long-horizon enterprise stewardship turn patient Shani endurance steadily into lasting monuments.",
      "Keep clean ethical paperwork meticulously spotless—Saturn blesses unblemished steady rigor generously while auditing sloppy legal corners severely.",
    ],
    careerPaths: [
      "Heavy industry & clean infrastructure executive",
      "Institutional asset & banking stewardship",
      "Judiciary law & corporate governance",
      "Real estate development & land trusts",
      "Enterprise turnaround & risk management",
      "Public civic utility administration",
    ],
    love: [
      "Serious unflashy devotion proves loyal reliability effortlessly through rough scary emergencies—yet stoic calm reliability desperately craves occasional playful tenderness whispered gently right out loud.",
      "Resist bringing hard auditing scorecards delicately into tender bedroom arguments; soften protective shoulders smoothly around partners earning genuine trust.",
    ],
    health: [
      "Shani rules bone density, stiff joints, aching knees, stubborn tight dental clenching, and chronic low-grade inflammatory fatigue accumulated straight from zero vacation habits.",
      "Protect crisp non-negotiable weekly rest days alongside brisk low-impact joint lubrication movement carefully like priceless company stock.",
    ],
    money: [
      "Steadiest durable wealth accumulator across single digits once calm disciplined diversification replaces fearful obsessive gripping.",
      "Audit true comfortable solvency quietly quarterly against real numbers so phantom lingering childhood scarcity fears finally relax into generous balanced stewardship.",
    ],
    remedies: [
      "Serve humble elders, frontline maintenance crews, and hardworking laborers genuinely with calm quiet dignity",
      "Keep Saturdays peacefully free from heavy ruthless cutthroat work sprints whenever feasible",
      "Offer silent compassionate Saturday community charity completely free from loud social bragging",
      "Dress calmly inside serene deep navy, muted slate blue, or dark crisp obsidian during focused board reviews",
    ],
    colours: ["Obsidian black", "Midnight navy", "Charcoal grey"],
    days: ["Saturday", "Friday"],
    compatibility: [
      { number: 4, verdict: "friend", note: "Formidable grounded realism and unyielding word-keeping forge extraordinary tough durable institutions safely side by side." },
      { number: 5, verdict: "friend", note: "Nimble agile speed lubricates heavy enduring discipline cleanly—dynamic versatile enterprise when clear roles click easily." },
      { number: 8, verdict: "friend", note: "Uncanny deep respect for resilient work ethic; cultivate cozy playful home silliness gently outside intense shared schedules." },
      { number: 2, verdict: "neutral", note: "Tender quiet sensitivity melts rigid armor steadily whenever stern blunt honesty remembers soft loving kindness." },
      { number: 7, verdict: "neutral", note: "Serious private integrity shares crisp skeptical discernment comfortably once unhurried clear warmth stays openly tended." },
      { number: 9, verdict: "neutral", note: "Massive noble public legacy blooms cleanly whenever exacting stern discipline joins fiery brave humanitarian purpose." },
      { number: 1, verdict: "challenge", note: "Solar kingly speed clashes fiercely against slow grinding Shani authority—legendary unstoppable respect once proud stiffness relaxes calmly." },
      { number: 3, verdict: "challenge", note: "Grim practical sobriety resists bubbly spontaneous spending; vibrant lasting harmony arrives when cheerful optimism meets crisp structure." },
      { number: 6, verdict: "challenge", note: "Austere ascetic restraint collides carefully against sensual comfortable aesthetic ease—warm prosperous grace when tenderness leads mutual balance." },
    ],
    famous: ["Narendra Modi", "Manmohan Singh", "Sourav Ganguly", "Shilpa Shetty"],
    affirmation: "I trust patient steady endurance calmly while opening my heart freely to joyful ease today.",
    journalPrompts: [
      "Which outdated grim fear keeps exhausting relentless hustle racing cleanly past already-safe adequacy?",
      "Where did stern blunt criticism accidentally crush fragile emerging confidence around close allies?",
      "What restful zero-productivity Saturday joy genuinely honors hard-earned calm peace tonight?",
    ],
    faqs: [
      {
        question: "Why does Mulank 8 frequently inspire superstitious worry—and is it actually unlucky?",
        answer:
          "Anxiety springs mainly because Shani withholds fast easy shortcuts, testing patience rigorously early in life—yet mature honest 8 regularly builds unmatched enduring stability, authority, and charitable impact far surpassing flashier numbers.",
      },
      {
        question: "How do birth dates 8, 17, and 26 differ meaningfully under Mulank 8?",
        answer:
          "Pure 8 experiences unvarnished Saturnine grit; 17 blends fearless ambition with analytical depth frequently lifting international reach; 26 softens harsh rigidity visibly through warmer domestic diplomacy.",
      },
      {
        question: "Should Mulank 8 wear Blue Sapphire immediately for luck?",
        answer:
          "Caution strictly prevails in classical Jyotish around Blue Sapphire unless thoroughly vetted individually against complete natal charts—humble Saturday generosity, crisp honesty, and dedicated rest carry zero adverse side risk.",
      },
      {
        question: "What unlocks lighter personal happiness fastest for Mulank 8?",
        answer:
          "Sharing vulnerability transparently alongside close allies and treating joyful leisurely play as earned vital balance rather than frivolous weakness.",
      },
    ],
  },
  {
    number: 9,
    dates: [9, 18, 27],
    archetype: "The Champion",
    planet: "Mars (Mangal)",
    element: "Fire",
    direction: "South",
    gemstone: "Red coral",
    deity: "Mangal / Hanuman",
    tarotCard: "The Hermit",
    tarotSlug: "the-hermit",
    hero: "Unflinching Martian courage, fierce protective loyalty, and blazing ethical fire turning bold decisive action cleanly into shelter for vulnerable allies.",
    description:
      "Mulank 9 (born on the 9, 18, or 27): Mangal driver traits, emergency & leadership careers, passionate romance, intense exercise needs and FAQs.",
    meaning: [
      "Rounding cleanly across nine digits on day 9, 18, or 27 fuels instinctive response cleanly under bold fiery Mangal (Mars)—planet of fearless defense, surgical decisiveness, noble stamina, and clean unwavering protection.",
      "Unmoved completely by sly flattery or petty timid intimidation, Mulank 9 steps instinctually straight between bullies and cornered underdogs cleanly long before cautious bureaucrats draft cautious polite memos.",
      "Subtle compound chords tune daily intensity smoothly: straightforward 9 surges boldly headlong; karmic 18 matches visionary leadership gently alongside sobering resilience tests; swift intuition-fired 27 softens blazing heat creatively through humane strategic wisdom.",
    ],
    personality: [
      "Brisk clean candid directness marks every room touched warmly by Mulank 9—compliments come fiercely sincere while unfair petty cruelty triggers immediate scorching blunt pushback.",
      "Electric regenerative grit springs swiftly upward past bruises or harsh setbacks that keep brooding rivals grounded cleanly down for weeks.",
      "Primary emotional test? Cooling volatile ten-minute Martian tempers fast before sharp scorched-earth outbursts burn irreplaceable loyal bridges unnecessarily over minor missteps.",
    ],
    strengths: [
      "Fearless physical and moral nerve under fire",
      "Fiercely loyal protective guardian of kin",
      "Bounces aggressively upward out of setbacks",
      "Direct transparent honesty zero passive sneers",
      "Completes urgent demanding sprints fast",
    ],
    weaknesses: [
      "Explosive reactive temper inside first seconds",
      "Rushes clumsily ahead missing subtle nuances",
      "Holds proud bitter grudges after hurt",
      "Picks tiring optional battles out of pride",
      "Impulsive frustration spending mid-stress",
    ],
    career: [
      "Slow sluggish paper-shuffling politics suffocates fierce fiery Mangal vitality fast—aim bold courage straight toward emergency medicine, high-velocity startup operations, investigative defense systems, surgical athletics, engineering rescue turns, or courageous social advocacy delivering clear decisive rescue visibly.",
      "Pair smartly beside patient steady operational deputies calmly ironing messy tedious fine print peacefully behind fearless frontlines.",
    ],
    careerPaths: [
      "Emergency trauma & surgical care",
      "Defense, rescue & athletic leadership",
      "High-urgency operational founding",
      "Civil structural & mechanical engineering",
      "Protective advocacy & crisis management",
      "Bold competitive athletics & coaching",
    ],
    love: [
      "Fiercely passionate warm devotion spoils cherished partners luxuriously while shielding households protectively like lionhearted sentries.",
      "Train one simple unbreakable twenty-minute pause rule smoothly whenever heated arguments ignite cleanly—discussing bruised raw feelings once cooling breaths settle prevents hurtful lasting scars cleanly.",
    ],
    health: [
      "Active Mangal energy spikes inflammatory tension, crimson rush pressure, quick bruising athletic accidents, and heated headaches whenever vigorous daily sweat outlets sit ignored behind desks.",
      "Clean aggressive physical conditioning four mornings weekly clears explosive stress toxins cleanly faster than quiet passive talk therapy alone.",
    ],
    money: [
      "Relentless courageous hustle generates strong healthy inflows cleanly past rough hurdles—rarely trapped helpless indefinitely when active grit rolls sleeves up cleanly.",
      "Defend sturdy balances easily via an iron twenty-four-hour cooling delay before firing off reactive large emotional buys or hurried angry legal threats.",
    ],
    remedies: [
      "Log crisp strenuous vigorous cardio or resistance movement minimally four mornings weekly",
      "Walk silently outside ten slow minutes right before replying toward rude frustrating emails",
      "Channel courageous surplus strength cheerfully toward selfless physical volunteer aid every Tuesday",
      "Wear balanced muted terracotta coral accents discreetly rather than flaring jarring bright crimson constantly",
    ],
    colours: ["Warm coral", "Earthy maroon", "Clean terracotta"],
    days: ["Tuesday", "Sunday"],
    compatibility: [
      { number: 1, verdict: "friend", note: "Sun meets Mars seamlessly—unstoppable courageous pioneers inspiring fierce mutual dignity, direct speech, and bold noble victories." },
      { number: 3, verdict: "friend", note: "Generous hopeful wisdom softens blazing quick impatience effortlessly into charismatic broad transformative public reach." },
      { number: 6, verdict: "friend", note: "Tender cozy Venus warmth cools fierce warrior armor gracefully home while courageous loyalty shelters domestic beauty cleanly." },
      { number: 9, verdict: "friend", note: "Titanic passionate energy and fearless honesty; choose gentle patient listening proactively ahead of fiery two-way clashes." },
      { number: 2, verdict: "neutral", note: "Soft sensitive intuitive balance deepens protective empathy swiftly once fierce impatient tones slow quietly for gentle feelings." },
      { number: 4, verdict: "neutral", note: "Relentless physical drive pairs steadily alongside gritty unconventional systems engineering if blunt criticism stays respectful." },
      { number: 7, verdict: "neutral", note: "Keen quiet analyst balances brisk decisive action intelligently whenever bold speed listens quietly to strategic warnings." },
      { number: 5, verdict: "challenge", note: "Light agile teasing provokes hot serious pride rapidly; vivid electric romance thrives whenever playful humor softens ego." },
      { number: 8, verdict: "challenge", note: "Explosive hot pace clashes starkly beside slow immovable Saturn—awesome durable strength once patient timing cools hasty impulses." },
    ],
    famous: ["Akshay Kumar", "Salman Khan", "Priyanka Chopra", "Sonia Gandhi"],
    affirmation: "I channel fearless fiery courage calmly through patient wisdom, protecting peace as fiercely as truth.",
    journalPrompts: [
      "Where did hot reactive pride convert mild tiny annoyance into noisy avoidable combat lately?",
      "Which stagnant unresolved battle deserves mature honorable closure rather than simmering pride?",
      "How does energetic regular morning training noticeably transform sharp everyday focus?",
    ],
    faqs: [
      {
        question: "Why does Mulank 9 emphasize vigorous physical exercise so strongly?",
        answer:
          "Vedic Ank Shastra associates Mars (Mangal) cleanly with kinetic heat, sharp blood energy, and muscular action—unspent physical drive routinely sours straight into restless snappy irritability unless moved actively.",
      },
      {
        question: "How do birth dates 9, 18, and 27 vary slightly under Mulank 9?",
        answer:
          "Day 9 channels pure straightforward Martian nerve; 18 adds testing ambition alongside strong humanitarian integrity; 27 softens aggressive heat distinctly with intuitive perceptive diplomacy.",
      },
      {
        question: "Are Mulank 9 partners always argumentative?",
        answer:
          "Not coldly argumentative—bluntly transparent. Once trusted partners respect straightforward speech and learn simple ten-minute cooling pauses during tension, devotion runs astonishingly loyal and warm.",
      },
      {
        question: "Why does Tarot pair Hermit IX quietly alongside active Martian Mulank 9?",
        answer:
          "Because ultimate graduation beyond restless conflict uses seasoned noble strength strictly in calm thoughtful service—protecting wise lasting boundaries rather than chasing ego fights.",
      },
    ],
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

function buildPage(seed: MulankSeed): MulankPage {
  const n = seed.number;
  const label = `Mulank ${n}`;
  const dates = DATE_MAP[n];

  const base = {
    slug: `mulank-${n}`,
    number: n,
    label,
    archetype: seed.archetype,
    title: `Mulank ${n} — ${seed.archetype}: Personality, Career, Love & Remedies`,
    description: seed.description,
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
    hero: seed.hero,
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
    meaning: seed.meaning,
    personality: seed.personality,
    strengths: seed.strengths,
    weaknesses: seed.weaknesses,
    career: seed.career,
    careerPaths: seed.careerPaths,
    love: seed.love,
    health: seed.health,
    money: seed.money,
    remedies: seed.remedies,
    compatibility: seed.compatibility,
    famous: seed.famous,
    affirmation: seed.affirmation,
    journalPrompts: seed.journalPrompts,
    faqs: seed.faqs,
    relatedSlugs: [
      `mulank-${(n % 9) + 1}`,
      `mulank-${((n + 3) % 9) + 1}`,
      `mulank-${((n + 5) % 9) + 1}`,
    ],
    updated: MULANK_UPDATED,
  };

  const wordCount = [
    base.hero,
    ...base.meaning,
    ...base.personality,
    ...base.strengths,
    ...base.weaknesses,
    ...base.career,
    ...base.careerPaths,
    ...base.love,
    ...base.health,
    ...base.money,
    ...base.remedies,
    ...base.compatibility.map((c) => c.note),
    ...base.journalPrompts,
    base.affirmation,
    ...base.faqs.flatMap((f) => [f.question, f.answer]),
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
