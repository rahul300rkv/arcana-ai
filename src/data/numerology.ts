/**
 * Structured content layer for the 11 `/numerology/[slug]` pages:
 * Life Path 1–9 plus Master Numbers 11 and 22.
 *
 * Every number carries uniquely written essays across core meaning,
 * personality, career, relationships, marriage, money, health, spiritual path,
 * pairwise compatibility commentary, prompts, and FAQs: zero shared boilerplate.
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
  quickAnswer: string;
  calculationNote: string;
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

const NUMEROLOGY_UPDATED = "2026-11-18";

interface NumberSeed {
  number: number;
  isMaster?: boolean;
  archetype: string;
  quickAnswer: string;
  calculationNote: string;
  tarotCard: string;
  tarotSlug: string;
  planet: string;
  element: string;
  hero: string;
  description: string;
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
  colours: string[];
  days: string[];
  numbers: number[];
  compatibility: NumerologyCompatibility[];
  famous: string[];
  lessons: string[];
  affirmation: string;
  journalPrompts: string[];
  faqs: NumerologyFaq[];
}

const SEEDS: NumberSeed[] = [
  {
    number: 1,
    archetype: "The Pioneer",
    tarotCard: "The Magician",
    tarotSlug: "the-magician",
    planet: "Sun",
    element: "Fire",
    hero: "Trailblazing autonomy, self-directed invention, and the courage to cast the very first stone across untested water.",
    quickAnswer:
      "Life Path Number 1 (The Pioneer) signifies independence, leadership, and original initiative. Ruled by the Sun and aligned with Fire energy, people with life number 1 thrive when starting ventures from scratch, taking clear ownership, and pairing bold confidence with collaborative delegation.",
    calculationNote:
      "Add every digit of your full birth date (DD-MM-YYYY) and reduce to 1, for example, 19-03-1995 reduces as 1+9+0+3+1+9+9+5 = 37 -> 3+7 = 10 -> 1.",
    description:
      "Life Path Number 1 meaning (The Pioneer): independent psychology, leadership careers, love dynamics, money habits, calculation formula, and compatibility.",
    meaning: [
      "Unit 1 sits right at origin zero-to-one: unbroken line before geometry splits into angles or compromise. When full birth dates reduce to 1, your overarching life curriculum revolves repeatedly around initiating fresh ground nobody cleared before you arrived.",
      "Sun governs 1 like noon spotlight: warm, generative, impossible to ignore smoothly yet unforgiving when swollen pride blocks honest feedback from competent teammates.",
      "Its shadow plays out symmetrically: either tyrannical micro-management shouting down quieter allies, or paralyzed imposter timidity hoarding half-baked ventures permanently inside secret notebooks out of dread of looking foolish.",
    ],
    personality: [
      "Walk beside any mature Life Path 1 for five minutes and three hallmarks surface effortlessly: brisk decisive tempo, allergy toward needless bureaucracy, and instinctual urge to steer stuck rooms straight toward ownership.",
      "Young 1s routinely confuse self-reliance with lonely heroism: refusing practical help cleanly out of stubborn pride until exhaustion forces painful delegation lessons during midlife transitions.",
      "Once seasoned through setbacks, this pioneer drops brittle defensiveness completely: calm confidence attracts fiercely loyal builders excited to follow transparent bold clarity.",
    ],
    strengths: [
      "Decisive under sharp ambiguity",
      "Invents uncopied original frameworks",
      "Bounces rapidly back from public setbacks",
      "Accepts ultimate clear accountability",
      "Energizes stalled indecisive rooms",
    ],
    weaknesses: [
      "Impatient around deliberate cautious teammates",
      "Reluctant delegator when quality slips slightly",
      "Prone to defensive pride during honest critique",
      "Confuses brisk loudness with genuine authority",
      "Drifts into workaholic solo isolation",
    ],
    career: [
      "Autonomy fuels crisp peak output far above gilded titles. Roles holding clear P&L accountability, founding launches, solo consulting practices, or decisive product ownership unlock sustained brilliance quickly.",
      "Corporate hierarchies stuffed with four permission layers extinguish Life Path 1 vitality within eighteen months: either hand this pioneer crisp sandbox freedom or watch them launch a rival studio quietly over weekends.",
      "Keep one candid non-political advisor beside key strategic sprints so rapid bold conviction doesn't gallop right over subtle operational blindspots.",
    ],
    careerPaths: [
      "Startup founder",
      "Managing director",
      "Independent surgeon or specialist",
      "Product architect",
      "Creative agency lead",
      "Championship solo athletics",
    ],
    relationships: [
      "Direct warm courtship marks 1 in love: subtle passive hints fly straight overhead, whereas playful confidence and transparent honesty light instant sparks.",
      "Because independence tastes non-negotiable, suffocating jealousy or needy scoreboard policing drives Life Path 1 sharply toward emotional exit doors overnight.",
      "Best relational harmony grows beside self-assured equals building meaningful projects of their own cleanly alongside shared evenings.",
    ],
    marriage: [
      "Long-lasting vows survive brightly whenever two distinct sovereign domains stay clearly respected: shared dreams in the living room, uninterrupted studio autonomy behind separate desks.",
      "Watch closely around competitive power tugs during busy career peaks: choosing who bends patiently first over minor domestic logistics protects massive lifelong warmth.",
    ],
    money: [
      "Earning leaps steeply whenever income links transparently to personal initiative, intellectual equity, or direct client results rather than slow seniority escalators.",
      "Primary financial trap? Funding glossy brand concepts ahead of verified buyer demand: test lean cash-flowing prototypes steadily before risking emergency buffers.",
    ],
    health: [
      "High solar drive runs hot physiologically: elevated blood pressure, temple tension headaches, eye strain from midnight screens, and inflammatory flare-ups from skipped recovery weeks.",
      "Competitive solo cardio (trail running, brisk swimming, martial arts) burns surplus restless heat far faster than passive couch scrolling.",
    ],
    spiritual: [
      "Sacred stewardship shifts 1 cleanly beyond noisy personal trophy cases: true solar radiance warms surrounding saplings instead of scorching dry soil underneath.",
      "Serve causes bigger cleanly than personal ego applause.",
    ],
    colours: ["Gold", "Deep red", "Amber"],
    days: ["Sunday", "Monday"],
    numbers: [1, 10, 19, 28],
    compatibility: [
      { number: "3", verdict: "high", note: "1 supplies bold crisp ignition while 3 brings infectious storytelling, charm, and lively social lift: energetic co-creators." },
      { number: "5", verdict: "high", note: "Both crave brisk independence, adventure, and rapid adaptation without smothering domestic guilt trips." },
      { number: "9", verdict: "high", note: "Dynamic start meets humanitarian scale: 1 pioneers cleanly where 9 helps widen compassionate collective impact." },
      { number: "1", verdict: "medium", note: "Mutual mutual respect runs high once shared territory splits cleanly; otherwise expect noisy ego clashes over steering wheel control." },
      { number: "2", verdict: "medium", note: "Warm yin-yang complement when 1 honors tender subtle listening instead of bulldozing quiet diplomacy." },
      { number: "6", verdict: "medium", note: "6 brings nurturing sanctuary home while 1 charges outward; balance career ambition thoughtfully against domestic appreciation." },
      { number: "4", verdict: "growth", note: "Visionary sprint meets cautious structural brakes: immense mutual building power whenever impatient hurry respects meticulous checklists." },
      { number: "8", verdict: "growth", note: "Two formidable alpha drives test negotiation humility constantly; united calmly, they forge historic empires." },
    ],
    famous: ["Walt Disney", "Charlie Chaplin", "Tom Hanks", "Miley Cyrus"],
    lessons: [
      "Delegation multiplies enduring reach while micromanagement caps it",
      "True confidence welcomes blunt smart critique effortlessly",
      "Standing alone initially differs sharply from shutting allies out permanently",
    ],
    affirmation: "I initiate courageously with humble clarity, welcoming worthy equals beside bold strides.",
    journalPrompts: [
      "Where am I insisting on doing unglamorous solo work purely to protect perfectionist control?",
      "Which daring unlaunched project keeps waiting for imaginary external permission?",
      "Who around me holds grounded wisdom I casually talked right past yesterday?",
    ],
    faqs: [
      {
        question: "How rare is Life Path 1 compared to other root numbers?",
        answer:
          "Because calendar digit sums cluster symmetrically around mid-single digits after reduction, pure un-mastered Life Path 1 totals occur at normal statistical rates (~11%), appearing sharply distinct whenever combined with strong fiery Mulank placements.",
      },
      {
        question: "Do Life Path 1 people struggle working under managers?",
        answer:
          "They do remarkably well under outcome-oriented leaders who define clear goals and grant wide operational latitude, yet chafe sharply inside micromanaged checklists lacking creative ownership.",
      },
      {
        question: "What differentiates Sun-ruled 1 in love versus career?",
        answer:
          "At work 1 pushes ceaselessly toward mastery and visibility; inside healthy love the same person craves safe playful vulnerability where nobody keeps score.",
      },
      {
        question: "Which tarot archetype pairs closest with Life Path 1?",
        answer:
          "The Magician (Card I): channeling clean unified willpower and focused craftsmanship straight from concept into tangible world reality.",
      },
    ],
  },
  {
    number: 2,
    archetype: "The Diplomat",
    tarotCard: "The High Priestess",
    tarotSlug: "the-high-priestess",
    planet: "Moon",
    element: "Water",
    hero: "Emotional radar, subtle bridge-building, and quiet patient endurance shaping lasting alliances beneath noisy rooms.",
    quickAnswer:
      "Life Path Number 2 (The Diplomat) represents cooperation, emotional intelligence, and quiet intuitive mediation. Ruled by the Moon, people with life number 2 excel at harmonizing teams, reading subtle social dynamics, and building lasting trust once they protect clear personal boundaries.",
    calculationNote:
      "Sum every digit of your full birth date until reaching 2 (without stopping at 11), for example, 02-02-1960 equals 0+2+0+2+1+9+6+0 = 20 -> 2+0 = 2.",
    description:
      "Life Path Number 2 meaning (The Diplomat): intuitive empathy, collaborative careers, love dynamics, money habits, calculation formula, and compatibility.",
    meaning: [
      "Number 2 opens duality cleanly: once solitary 1 speaks, 2 listens closely between every word for harmony, nuance, and hidden unspoken emotion.",
      "Ruled cleanly by shifting lunar tides, Life Path 2 notices subtle body posture drops across quiet conference rooms effortlessly long before loud teammates catch friction brewing.",
      "Its defining lifetime tension? Trading silent self-erasure smoothly for candid kindness: discovering authentic peace includes stating personal boundaries plainly out loud instead of swallowing quiet resentments for decades.",
    ],
    personality: [
      "Friends consistently call 2 first during tangled heartbreak or delicate family transitions because warm unhurried attention creates instantaneous emotional safety.",
      "Notice subtle detail orientation: crisp interior comfort, remembered birthday details, smooth verbal mediation turning defensive ego camps back toward rational calm.",
      "Whenever pushed hastily under blunt hostility, ungrounded 2s retreat sideways into passive silence or torturous second-guessing: clean direct solitude restores lunar compass alignment smoothly.",
    ],
    strengths: [
      "Piercing emotional and somatic radar",
      "Patient steady diplomatic mediation",
      "Fiercely faithful long-term loyalty",
      "Notices crucial unspoken human nuance",
      "Harmonizes clashing temperaments gracefully",
    ],
    weaknesses: [
      "Absorbs tense moods from whole rooms",
      "Avoids timely hard conversations",
      "Over-apologizes just to restore calm",
      "Wavers indefinitely on crisp solo calls",
      "Nurses hurt quietly behind helpful smiles",
    ],
    career: [
      "Behind great visible founders routinely sits an indispensable Life Path 2 chief of staff, creative producer, clinical therapist, or strategic partnership lead holding complex relationships seamlessly tight.",
      "Avoid sterile cold transactional sales boiler-rooms prioritizing cutthroat internal rankings: your genuine empathy becomes competitive gold wherever deep client trust drives retention across years.",
      "Name deliverables and fee raises proactively on paper rather than waiting quietly hoping generous fairness notices extra unpaid overtime.",
    ],
    careerPaths: [
      "Psychotherapist or mediator",
      "People operations director",
      "Pediatric or patient-care nursing",
      "Musical or ensemble performance",
      "Key client partnerships",
      "UX ethnographic research",
    ],
    relationships: [
      "Deep attentive devotion anchors romance effortlessly: tender memory, thoughtful tactile care, and genuine curiosity regarding a partner's emotional landscape.",
      "Danger waits gently in subtle codependency: rescuing fragile partners tirelessly while hiding authentic unmet desires quietly beneath smiling accommodation.",
      "Thriving bonds invite clear mutual emotional fluency where asking plainly directly replaces hopeful telepathic guessing games.",
    ],
    marriage: [
      "Devoted domestic sanctuary blooms naturally across committed homes filled thoughtfully with calm warmth, shared routines, and enduring mutual patience.",
      "Keep at least one independent creative friendship lane thriving strictly outside marriage duties so intimate empathy stays fresh rather than anxious.",
    ],
    money: [
      "Steady risk-averse saving accumulates reassuring quiet buffers over patient decades: rarely swept easily into flashy reckless casino hype.",
      "Primary financial leak arrives via soft-hearted sympathy: lending tricky sums cleanly to unreliable acquaintances or discounting skilled fees nervously up front.",
    ],
    health: [
      "Moon governs fluid cycles, digestive gut nerves, hormonal balance, and nocturnal sleep restoration: emotional stress hits stomachs cleanly inside twenty-four hours.",
      "Water immersion, evening herbal decompression, and firm screen curfews rebuild quiet resilience rapidly.",
    ],
    spiritual: [
      "True intuitive sensitivity hears deep cosmic currents clearly only once anxious people-pleasing chatter settles silent.",
      "Honest gentle clarity stands sacred.",
    ],
    colours: ["Silver", "Pearl white", "Soft green"],
    days: ["Monday", "Friday"],
    numbers: [2, 11, 20, 29],
    compatibility: [
      { number: "6", verdict: "high", note: "Tender lunar intuition hugs warm Venusian hospitality: cozy caring homes rich in mutual loyalty and beauty." },
      { number: "8", verdict: "high", note: "Diplomatic grace stabilizes heavy executive ambition effortlessly while 8 provides steady sturdy material shelter." },
      { number: "9", verdict: "high", note: "Deeply compassionate alliance uniting quiet emotional listening smoothly beside grand humanitarian service." },
      { number: "2", verdict: "medium", note: "Uncanny comforting telepathy that shines gracefully once both consciously practice initiating blunt decisive honesty." },
      { number: "1", verdict: "medium", note: "Vibrant polarity flourishes whenever bold independence appreciates sensitive rhythmic subtlety rather than rushing fast." },
      { number: "3", verdict: "medium", note: "3 sparkles warmly across social dinners while 2 anchors thoughtful intimacy; check mutual attention balance gently." },
      { number: "5", verdict: "growth", note: "Homebody depth crosses restless open horizons: teaches thrilling spacious independence alongside safe warm mooring." },
      { number: "7", verdict: "growth", note: "Feeling-first radar meets detached analytical solitude; rich mutual wisdom blossoms patiently once neither hides silently." },
    ],
    famous: ["Jennifer Aniston", "Tony Blair", "Diana Ross", "Keanu Reeves"],
    lessons: [
      "Saying kind clear 'no' protects authentic warmth far better than resentful 'yes'",
      "Intuition sharpens cleanly once verified politely against concrete facts",
      "Real partnership needs two visible voices rather than quiet martyrdom",
    ],
    affirmation: "I honor sensitive wisdom openly, trusting clear boundaries to deepen lasting peace.",
    journalPrompts: [
      "Where did I swallow an honest preference politely yesterday purely to protect fragile harmony?",
      "Whose intense stress am I silently carrying around inside my own tight shoulders right now?",
      "What plain candid request would deepen real closeness immediately this week?",
    ],
    faqs: [
      {
        question: "How is Life Path 2 different from Master Number 11?",
        answer:
          "Both share diplomatic sensitivity and reduce to 2, yet unreduced 11 totals carry sharper nervous-system intensity, visionary leadership pull, and steep public creative visibility.",
      },
      {
        question: "Are Life Path 2 individuals naturally shy?",
        answer:
          "Not always shy (many speak gracefully across stages) yet nearly all prioritize social atmosphere, harmony, and quiet observation ahead of brash solo posturing.",
      },
      {
        question: "Why does career progress sometimes feel slower for Life Path 2?",
        answer:
          "Because collaborative behind-the-scenes glue frequently passes quietly uncredited unless 2 learns confidently documenting tangible team wins aloud during performance reviews.",
      },
      {
        question: "What meditation style suits Life Path 2 best?",
        answer:
          "Gentle breath awareness beside quiet natural water or somatic body scans releasing absorbed emotional tension before sleep.",
      },
    ],
  },
  {
    number: 3,
    archetype: "The Communicator",
    tarotCard: "The Empress",
    tarotSlug: "the-empress",
    planet: "Jupiter",
    element: "Fire",
    hero: "Sparkling creative imagination, buoyant emotional warmth, and rare gifts turning dense truth effortlessly into living story.",
    quickAnswer:
      "Life Path Number 3 (The Communicator) embodies creative expression, optimism, and persuasive storytelling. Ruled by Jupiter, life number 3 thrives in writing, design, speaking, and people-centered roles, turning natural charisma into lasting achievement when paired with focused follow-through.",
    calculationNote:
      "Add all digits of your full date of birth and reduce to 3, for example, 12-03-1995 calculates as 1+2+0+3+1+9+9+5 = 30 -> 3+0 = 3.",
    description:
      "Life Path Number 3 meaning (The Communicator): creative artistry, Jupiterian optimism, communication careers, love compatibility, and financial focus.",
    meaning: [
      "When assertive 1 initiates and receptive 2 collaborates, 3 bursts cleanly upward like vibrant spring blossom: synthesis expressed vividly through language, color, humor, music, and unmistakable human charm.",
      "Jupiter amplifies everything touching Life Path 3: exuberant contagious wit, bold artistic reach, lightning pattern-sparking across diverse disciplines, and irrepressible emotional resilience lifting discouraged allies quickly.",
      "Core developmental pivot? Choosing depth deliberately over dazzling distraction: learning patiently that shipping one polished masterpiece cleanly fulfills brilliance endlessly deeper than flirting endlessly across nine half-written notebooks.",
    ],
    personality: [
      "Lifelong conversational magnetism radiates smoothly around playful 3s: effortless icebreakers turn stiff networking receptions warm inside three crisp sentences.",
      "Look gently underneath comedic buoyancy, however, and acute thin-skinned sensitivity often hides nervously: a casual sarcastic dismissal bruises self-trust far deeper than breezy jokes let show.",
      "Mature 3 harnesses lively verbal brilliance responsibly beside crisp daily checklists, transforming charming chatter into genuine cultural leadership.",
    ],
    strengths: [
      "Electric verbal and visual storytelling",
      "Contagious uplifting warmth under gloom",
      "Connects wildly unrelated ideas swiftly",
      "Charismatic intuitive public presence",
      "Resilient playful emotional bounceback",
    ],
    weaknesses: [
      "Leaves thrilling starts perpetually unfinished",
      "Uses clever humor to dodge messy feelings",
      "Bruises easily over blunt harsh critiques",
      "Impulsive comfort or social splurging",
      "Gossipy chatter when bored restlessly",
    ],
    career: [
      "Invisible cubicles divorced from live human reaction crush buoyant 3 spirit swiftly: thrive across creative agencies, narrative journalism, standup/film craft, crisp educational design, vibrant brand strategy, or persuasive keynote outreach.",
      "Pair cheerfully alongside methodical operational executors or structured co-producers who handle tedious shipping calendars while you focus brilliantly on voice, story, and big concept architecture.",
      "Guard creative mornings zealously against fragmented chatter so core flagship outputs finish cleanly.",
    ],
    careerPaths: [
      "Author or screenwriter",
      "Brand & creative strategist",
      "Stage host or broadcast voice",
      "Visual art & creative direction",
      "Youth educator & curriculum creator",
      "Event & community architect",
    ],
    relationships: [
      "Mental sparkle drives genuine attraction straight away: playful banter, spontaneous daytrips, hilarious inside jokes, and expressive affection light fires fast.",
      "Danger waits quietly when heavy mundane conflict arrives: dodging difficult vulnerability smoothly beneath distracting jokes erodes deep intimacy gradually.",
      "Enduring chemistry anchors playfully whenever joyful curiosity coexists comfortably beside unhurried honest stillness.",
    ],
    marriage: [
      "Lively affectionate households thrive brightly around shared artistic tastes, vibrant dinner tables, witty travel stories, and playful lighthearted rituals breaking stale routines effortlessly.",
      "Make regular honest room smoothly for unglamorous serious budget and sorrow check-ins alongside bright laughter.",
    ],
    money: [
      "Creative inspiration produces exhilarating feast spikes followed by distracted dry troughs whenever bookkeeping sits silently ignored across corners.",
      "Automate boring monthly retirement drafts and reserve cash vaults cleanly away from instant debit access so impulsive celebratory splurges stay completely harmless.",
    ],
    health: [
      "Jupiter rules vocal cords, liver processing, vibrant social excess, and erratic rollercoaster energy crashes trailing giant emotional output sprints.",
      "Protect quiet tech-free walks, moderate cheerful indulgences wisely, and honor genuine deep voice/nervous rest.",
    ],
    spiritual: [
      "True joy blooms authentically inside honest disciplined creation: refining beauty carefully cleanly outlasts fleeting clever applause.",
      "Playful wonder illuminates steady serious craft.",
    ],
    colours: ["Yellow", "Saffron", "Turquoise"],
    days: ["Thursday", "Tuesday"],
    numbers: [3, 12, 21, 30],
    compatibility: [
      { number: "1", verdict: "high", note: "Electric creative chemistry: 1 anchors brave original starts while 3 magnifies compelling public story and momentum." },
      { number: "5", verdict: "high", note: "Sparkling social synergy fueled endlessly by lively adventure, clever wit, and buoyant open flexibility." },
      { number: "9", verdict: "high", note: "Expressive 3 creativity merges seamlessly beside generous compassionate vision, touching wide audiences deeply." },
      { number: "3", verdict: "medium", note: "Joyful dazzling social sparkle; pair gently with shared calendars so practical bills never drop between fun bursts." },
      { number: "2", verdict: "medium", note: "Charming lighthearted contrast: warm dialogue deepens smoothly once lively 3 slows calmly to hear quiet feelings." },
      { number: "6", verdict: "medium", note: "Creative expression harmonizes gracefully alongside beautiful homes, provided serious duties balance generous hospitality cleanly." },
      { number: "4", verdict: "growth", note: "Spontaneous imagination challenges rigid structure daily: magnificent lasting output arrives whenever mutual sarcasm yields to respect." },
      { number: "7", verdict: "growth", note: "Bright extroverted storytelling crosses quiet solitary truth-seeking; fascinating intellectual depth whenever silence feels unthreatening." },
    ],
    famous: ["David Bowie", "Snoop Dogg", "Katy Perry", "Hillary Clinton"],
    lessons: [
      "Polished completion earns ten times more creative respect than brilliant beginnings",
      "Authentic vulnerability deepens warmth faster than entertaining humor ever could",
      "Simple structural habits liberate creative flow rather than trapping it",
    ],
    affirmation: "I honor playful gifts with focused execution, completing meaningful work cleanly and joyfully.",
    journalPrompts: [
      "Which bright half-finished passion draft deserves five quiet focused completion hours this week?",
      "When did quick funny jokes help me dodge honest uncomfortable tenderness lately?",
      "What boring tiny financial safeguard quietly funds my boldest creative freedom?",
    ],
    faqs: [
      {
        question: "Are all Life Path 3 people extroverted performers?",
        answer:
          "No. Many write quietly, paint indoors, or design systems away from bright stages; their unifying trait is needing genuine creative expression and engaging communication rather than cold isolation.",
      },
      {
        question: "Why does consistency feel challenging for Life Path 3?",
        answer:
          "Rapid divergent thinking throws fresh thrilling sparks every hour, tempting attention away just when routine polishing work turns unglamorous.",
      },
      {
        question: "How does Life Path 3 connect to Tarot's Empress?",
        answer:
          "Both embody vibrant fertility, sensory delight, creative overflow, and turning raw ideas gracefully into lush welcoming beauty.",
      },
      {
        question: "What kind of partner grounds Life Path 3 gently without stifling spark?",
        answer:
          "Someone witty and curious enough to delight in conversation while holding relaxed steady practical rhythms that leave room for spontaneous play.",
      },
    ],
  },
  {
    number: 4,
    archetype: "The Builder",
    tarotCard: "The Emperor",
    tarotSlug: "the-emperor",
    planet: "Saturn / Rahu",
    element: "Earth",
    hero: "Unshakeable foundation engineering, steady disciplined grit, and turning lofty ambitious sketches cleanly into durable reality.",
    quickAnswer:
      "Life Path Number 4 (The Builder) stands for structure, dependability, and methodical mastery. Guided by Saturn and Rahu, life number 4 builds lasting wealth, reliable systems, and deeply loyal homes: reaching peak strength when practical discipline welcomes healthy flexibility.",
    calculationNote:
      "Sum all birth-date digits down to 4 (unless your subtotal hits Master Number 22), for example, 13-04-1994 gives 1+3+0+4+1+9+9+4 = 31 -> 3+1 = 4.",
    description:
      "Life Path Number 4 meaning (The Builder): systematic stamina, architectural reliability, career mastery, love compatibility, and steady wealth growth.",
    meaning: [
      "Square four corners plant four crisp stakes permanently deep inside solid rock, where creative 3 improvises lively stories, Life Path 4 pulls measuring tape tight and builds bridges strong enough to survive harsh earthquakes.",
      "Governed rigorously by disciplined Saturnine gravity alongside inventive Rahu realism, 4 instinctively demands proof, structural integrity, transparent fairness, and sweat earned cleanly ahead of flashy status.",
      "Core maturation test? Discovering that soft emotional flexibility fortifies durable engineering cleanly like seismic steel dampening: crisp control alone snaps painfully whenever unpredictable seasons blow past tidy charts.",
    ],
    personality: [
      "Show up beside a Life Path 4 during urgent technical breakdown and calm practical reassurance spreads rapidly: nobody panics noisily while clear orderly triage executes systematically line by line.",
      "Dry deadpan humor, unyielding personal ethics, fierce word-keeping, and deep discomfort with sloppy dishonest hype earn immense silent trust quickly.",
      "When exhausted under relentless unappreciated loads, brittle rigid stubbornness clamps jaws closed: remembering planned gentle playtime sits strictly beside vital engineering duties keeps hearts alive.",
    ],
    strengths: [
      "Architectural methodical execution",
      "Unshakeable crisis dependability",
      "Patient focus across long multi-year arcs",
      "Clean transparent integrity without shortcuts",
      "Masters dense technical systems thoroughly",
    ],
    weaknesses: [
      "Defensive stubbornness around unfamiliar pivots",
      "Chronic overwork hiding behind 'duty'",
      "Blunt harsh delivery when patience frays",
      "Anxious need for guaranteed predictability",
      "Self-denying joy postponement until later",
    ],
    career: [
      "Engineering architecture, institutional compliance, civil development, supply logistics, intricate financial systems, medical surgery, and precision craftsmanship showcase Life Path 4 mastery seamlessly.",
      "You consistently become the indispensable backbone leadership refuses losing, yet step deliberately upward into strategic systems ownership cleanly rather than quietly absorbing everyone's messy manual chores indefinitely.",
      "Document clear promotion milestones objectively rather than expecting silent loyalty alone to trigger raises.",
    ],
    careerPaths: [
      "Structural or systems engineering",
      "Operations & logistics leadership",
      "Quantitative finance & audit",
      "Architecture & urban planning",
      "Constitutional or corporate law",
      "Master craftsmanship & design-build",
    ],
    relationships: [
      "Practical caring acts speak volumes: fixed brakes, sorted taxes, calm steady attendance through messy family crises long after poetic flirters vanish quietly.",
      "Silent devotion still thrives infinitely richer once voiced gently out loud: let loving words soften predictable reliable routines visibly every single week.",
      "Avoid vetting exciting fresh dates smoothly solely against twenty-item risk spreadsheets.",
    ],
    marriage: [
      "Rock-solid committed alliances blossom into calm generational homes funded securely, protected fiercely, and built cleanly on mutual dependability.",
      "Carve spontaneous carefree Saturdays deliberately free from weekend repair chores so tender play doesn't slowly turn sterile.",
    ],
    money: [
      "Natural patient stewardship treats reckless speculative manias with crisp healthy suspicion: compound steady savings, low-leverage real assets, and clean cash buffers accumulate quietly across decades.",
      "Guard gently against fearful miserliness postponing deserved joyful experiences permanently into blurry retirement.",
    ],
    health: [
      "Saturnine tension locks predictably straight into stiff lower backs, knees, jaws, dental grinding, and stubborn fatigue after endless overtime weeks.",
      "Consistent mobility stretching, mineral hydration, and deliberate unplugged rest protect strong durable stamina cleanly.",
    ],
    spiritual: [
      "Sacred trust arrives peacefully once sturdy disciplined builders accept mystery smoothly: surrendering uncontrollable outcomes doesn't erase painstaking honest workmanship.",
      "Patience anchors silent quiet strength.",
    ],
    colours: ["Deep blue", "Slate grey", "Forest green"],
    days: ["Saturday", "Sunday"],
    numbers: [4, 13, 22, 31],
    compatibility: [
      { number: "2", verdict: "high", note: "Tender empathetic warmth softens solid practical discipline smoothly: calm affectionate sanctuary built securely together." },
      { number: "6", verdict: "high", note: "Shared devotion toward family shelter, beauty, loyalty, and steady enduring domestic commitment." },
      { number: "8", verdict: "high", note: "Respects hard work, tangible equity, and unflashy high integrity: formidable focused builders side by side." },
      { number: "4", verdict: "medium", note: "Unbreakable clean reliability; agree gracefully up front on vacation play before practical chores consume every weekend." },
      { number: "7", verdict: "medium", note: "Thoughtful privacy and solid depth click calmly whenever mutual respect welcomes occasional quiet emotional sharing." },
      { number: "9", verdict: "medium", note: "Grounded practical logistics empowers grand idealistic humanitarian impact once rigid pace loosens modestly." },
      { number: "3", verdict: "growth", note: "Delightful spontaneous expression shakes stale rigid checklists free: magic ignites whenever mutual teasing drops harsh judgment." },
      { number: "5", verdict: "growth", note: "Security collides cheerfully against nomadic surprise: powerful shared growth once flexible guardrails leave clean breathing room." },
    ],
    famous: ["Margaret Thatcher", "Clint Eastwood", "Bill Belichick", "Usher"],
    lessons: [
      "Flexible shock-absorbers outlast rigid iron walls through rough unexpected earthquakes",
      "Scheduled carefree rest maintains elite craftsmanship cleanly rather than wasting it",
      "Verbal tender appreciation heals partners far deeper than silent loyal errands alone",
    ],
    affirmation: "I build enduring foundations patiently while remaining fluid, open-hearted, and alive to grace.",
    journalPrompts: [
      "Which outdated rigid process am I defending stubbornly purely because familiarity feels safe?",
      "What gentle joy keeps sitting perpetually deferred until some mythical spotless milestone arrives?",
      "Who deserves warm unhurried spoken appreciation alongside quiet practical help today?",
    ],
    faqs: [
      {
        question: "Why does Life Path 4 carry a reputation for hard work?",
        answer:
          "Number 4 mirrors four solid square walls: nothing lasting stands straight without deep patient footing, so life repeatedly invites 4 to earn mastery tangibly rather than gliding through lucky shortcuts.",
      },
      {
        question: "How is 4 related to Master Number 22?",
        answer:
          "22 reduces mathematically to 4 (2+2=4) and inherits all architectural durability at expanded institutional scale, blending visionary ambition alongside practical building stamina.",
      },
      {
        question: "Can Life Path 4 thrive in creative professions?",
        answer:
          "Exceptionally: consider film editing, precision architecture, typography, classical orchestration, engineering design, or technical illustration where rigorous craft elevates artistic imagination.",
      },
      {
        question: "What unlocks emotional ease fastest for Life Path 4?",
        answer:
          "Recognizing that trustworthy uncertainty will not flatten careful preparation, and giving yourself guilt-free permission for effortless playful downtime.",
      },
    ],
  },
  {
    number: 5,
    archetype: "The Explorer",
    tarotCard: "The Hierophant",
    tarotSlug: "the-hierophant",
    planet: "Mercury",
    element: "Air",
    hero: "Mercurial speed, fearless sensory curiosity, and agile pivot mastery turning volatile rapid change straight into exhilarating freedom.",
    quickAnswer:
      "Life Path Number 5 (The Explorer) represents freedom, rapid adaptability, and versatile curiosity. Ruled by Mercury, life number 5 flourishes in dynamic careers involving travel, media, growth, and negotiation: unlocking deep satisfaction when open exploration is anchored by intentional focus.",
    calculationNote:
      "Add every digit of your full birth date and reduce to 5, for example, 14-05-1993 reduces as 1+4+0+5+1+9+9+3 = 32 -> 3+2 = 5.",
    description:
      "Life Path Number 5 meaning (The Explorer): adaptability, Mercury curiosity, dynamic careers, love dynamics, automated finance, and grounding.",
    meaning: [
      "Squeezed strictly past square 4 symmetry, radiant 5 bursts directly outside boxed boundaries into open vibrant curiosity: representing five crisp human senses drinking lived experience firsthand without stuffy second-hand dogma.",
      "Quick-footed Mercury electrifies Life Path 5: sharp improvisational wit, fluent adaptability across unfamiliar cities, magnetic persuasive instincts, and irrepressible appetite for vivid living.",
      "Lifetime mastery edge? Choosing intentional meaningful focus cleanly over anxious restless escape: learning deeply that authentic loyalty to a worthy craft or beloved ally expands true freedom infinitely wider than endless shallow flitting.",
    ],
    personality: [
      "Drop a poised Life Path 5 smoothly onto unfamiliar airports, dynamic crisis desks, or eclectic social gatherings and watch instant rapport unfold effortlessly within quiet minutes.",
      "Predictable stagnant stagnation acts straight like subtle poison: repeat dull checklists verbatim for twelve straight months and spark fades rapidly into restless scrolling, sharp cynicism, or abrupt drastic quits.",
      "Integrated mature 5 pairs exhilarating intellectual speed comfortably beside crisp commitment habits: creating thrilling varied days rooted securely upon rock-steady core anchors.",
    ],
    strengths: [
      "Electric adaptability across sudden shifts",
      "Magnetic persuasive communication",
      "Fearless explorer across fresh cultures/tools",
      "Quick resourceful crisis improvisation",
      "Keeps rooms buoyant, fresh, and alive",
    ],
    weaknesses: [
      "Restless bailouts when novelty fades",
      "Overbooked frantic sensory overload",
      "Impulsive indulgent spending or stimulants",
      "Skims wide surface missing deep roots",
      "Skittish dread around heavy long promises",
    ],
    career: [
      "Monotonous static routine drains bright mercurial minds terribly fast: soar freely inside investigative media, strategic travel partnerships, nimble enterprise sales, dynamic product growth, bustling hospitality ventures, or live coaching circuits.",
      "Design portfolio careers blending dynamic varied client challenges calmly atop stable baseline retainers rather than choosing endlessly between crushing boredom and unstable chaos.",
      "Finish high-impact flagship sprints before snapping smoothly toward fresh shiny horizons.",
    ],
    careerPaths: [
      "Strategic sales & deal partnerships",
      "Investigative travel & documentary media",
      "Agile growth & marketing lead",
      "High-stakes communications & PR",
      "Experiential hospitality entrepreneur",
      "Cross-cultural technical consulting",
    ],
    relationships: [
      "Electrifying intellectual chemistry ignites love fast: witty late debates, unplanned road trips, refreshing honesty, and spacious room protecting each partner's vivid independent friendships.",
      "Suffocating suspicious interrogation kills tender loyalty straight away; trust breathed naturally keeps agile 5 remarkably devoted by deliberate choice.",
      "Watch quietly for phantom exits whenever ordinary cozy intimacy deepens past breathless initial chase.",
    ],
    marriage: [
      "Thriving lifelong marriages replace stale automatic scripts cleanly with fresh shared quests: creative travel rhythms, evolving shared hobbies, and candid lively curiosity sustaining playful spark cleanly across decades.",
      "Protect reliable quiet anchor traditions carefully so thrilling freedom never morphs gently into emotional drift.",
    ],
    money: [
      "Agile sales instinct and opportunity spotting pull crisp dynamic earnings effortlessly, yet shiny convenience splurges, travel upgrades, and impulsive treats drain loose cash just as rapidly.",
      "Automate blind payday transfers squarely into locked boring index vaults cleanly out of immediate tap reach.",
    ],
    health: [
      "Mercury governs crisp nervous pathways, busy racing sleep cycles, restless lungs, and burnout hiding beneath high caffeine tolerance.",
      "Outdoor playful athletics, digital sunset boundaries, and steady breath anchors stabilize jagged anxious energy quickly.",
    ],
    spiritual: [
      "Highest vibrant liberty breathes effortlessly inside deep loving presence: stopping still calmly opens endless universes richer than rushing across fifty stamped passports.",
      "Depth reveals true wide sky.",
    ],
    colours: ["Emerald teal", "Silver-grey", "Sky blue"],
    days: ["Wednesday", "Friday"],
    numbers: [5, 14, 23],
    compatibility: [
      { number: "1", verdict: "high", note: "Fearless mutual initiative plus agile vibrant speed create daring independent allies thriving past stale conventions." },
      { number: "3", verdict: "high", note: "Witty sparkling banter, playful travel dreams, and effortless expressive warmth fuel buoyant exciting life together." },
      { number: "7", verdict: "high", note: "Vivid outer traveler exchanges brilliant questions smoothly alongside quiet solitary thinker: spacious mutual independence." },
      { number: "5", verdict: "medium", note: "Exhilarating adventures abound; agree early calmly on shared fixed financial cushions and anchored quality time home." },
      { number: "6", verdict: "medium", note: "Warm domestic shelter welcomes agile exploration cleanly whenever affectionate reassurance honors restless solo hobbies." },
      { number: "9", verdict: "medium", note: "Broad open worldview unites inspiring curiosity gently beside deep compassionate humanitarian purpose." },
      { number: "2", verdict: "growth", note: "Tender quiet sensitivity stabilizes wild impulsive pace cleanly once clear steady communication replaces vanishing acts." },
      { number: "4", verdict: "growth", note: "Freedom tests structured safety constantly; marvelous synergy arrives whenever mutual respect bridges tidy schedules beside spontaneous joy." },
    ],
    famous: ["Abraham Lincoln", "Beyoncé", "Mark Zuckerberg", "Tina Turner"],
    lessons: [
      "Wise chosen commitments safeguard wide meaningful freedom rather than shrinking it",
      "Real lasting depth often waits quietly right past restless initial novelty",
      "Finishing one worthy cycle transforms scattered curiosity cleanly into mastery",
    ],
    affirmation: "I explore vividly with grounded calm presence, balancing open freedom cleanly beside faithful follow-through.",
    journalPrompts: [
      "Where am I chasing bright novel distractions purely to dodge unglamorous worthwhile finishing work?",
      "Which healthy relationship boundary actually expands playful trust rather than feeling stifling?",
      "What quiet unplugged afternoon ritual slows frantic nervous chatter down naturally?",
    ],
    faqs: [
      {
        question: "Do Life Path 5 individuals struggle settling down?",
        answer:
          "Only when settling feels confused with emotional stagnation or rigid control; beside partners honoring curiosity, dialogue, and autonomy, 5 commits deeply and warmly.",
      },
      {
        question: "Why is Hierophant linked numerologically with flexible Life Path 5?",
        answer:
          "Major Arcana Card V explores teaching systems and lived truth: 5 discovers lasting timeless wisdom actively by testing conventions against vivid real life rather than blind obedience.",
      },
      {
        question: "How can Life Path 5 avoid career hopping prematurely?",
        answer:
          "Choose versatile evolving roles containing continuous novel problem sets or built-in client rotation instead of repetitive assembly routines.",
      },
      {
        question: "What stabilizes money best for Life Path 5?",
        answer:
          "Zero-effort automated wealth splits executing every payday before discretionary thrill spending touches checking balances.",
      },
    ],
  },
  {
    number: 6,
    archetype: "The Nurturer",
    tarotCard: "The Lovers",
    tarotSlug: "the-lovers",
    planet: "Venus",
    element: "Earth",
    hero: "Fierce protective devotion, exquisite aesthetic sanctuary building, and ethical community stewardship uniting warmth with clean balance.",
    quickAnswer:
      "Life Path Number 6 (The Nurturer) symbolizes responsibility, harmony, family devotion, and protective leadership. Ruled by Venus, people with life path number 6 shine in healthcare, design, teaching, and advisory roles: experiencing deepest joy when caring for others stays balanced with healthy self-care.",
    calculationNote:
      "Add all digits of your full birth date and reduce to 6, for example, 15-09-1998 calculates as 1+5+0+9+1+9+9+8 = 42 -> 4+2 = 6.",
    description:
      "Life Path Number 6 meaning (The Nurturer): caring leadership, Venusian harmony, love and marriage compatibility, service careers, and healthy boundaries.",
    meaning: [
      "Symmetrical 6 curves gracefully around welcoming center: marking numerology's most consciously responsible family builder, fierce neighborhood guardian, and dedicated aesthetic harmonizer.",
      "Venus imbues Life Path 6 deeply with sharp artistic discernment and undeniable emotional loyalty: stepping calmly inside cold disorganized spaces triggers irresistible natural instincts to warm rooms, feed weary friends, and stitch torn communities whole.",
      "Essential lifetime threshold? Separating healthy chosen love cleanly from exhausting anxious rescuing: discovering gracefully that letting competent adults resolve their own messy mistakes respects human dignity infinitely deeper than quiet martyrdom.",
    ],
    personality: [
      "Count cleanly on a seasoned 6 when unexpected emergencies strike: comforting warm broth arrives beside steady clear emotional triage before frantic bystanders organize guesses.",
      "Keen visual refinement shines effortlessly across curated clothing, inviting living rooms, generous unhurried hosting, and principled moral fairness standing gently beside vulnerable allies.",
      "Watch gently whenever selfless helping tips subtly into controlling perfectionism: guilt-tripping loved ones quietly for failing unspoken standards strains closest ties gently down.",
    ],
    strengths: [
      "Rock-steady dependable devotion",
      "Curates warm harmonious visual spaces",
      "Natural ethical family/community anchor",
      "Empathetic calming listener under grief",
      "Sustained loyal care through dark winters",
    ],
    weaknesses: [
      "Rescues unasked past personal burnout",
      "Masking sharp judgment beneath gentle 'help'",
      "Perfectionist domestic weight on self",
      "Guilty anxiety around resting selfishly",
      "Struggles graciously receiving generous support",
    ],
    career: [
      "Meaningless manipulative output drains 6 sharply regardless of shiny paycheck cushions: flourish vibrantly across integrative healthcare, compassionate counseling, architectural interior design, elevated hospitality, soulful culinary arts, progressive education, or principled civic community design.",
      "Notice natural executive warmth frequently promotes diligent 6s straight toward cherished management seats: negotiate clear compensation boldly instead of donating endless unpaid care labor cleanly out of tender duty.",
    ],
    careerPaths: [
      "Healthcare & integrative wellness",
      "Interior architecture & residential design",
      "Educational & therapeutic leadership",
      "Culinary craft & boutique hospitality",
      "Community philanthropy & nonprofit lead",
      "Client care & trusted advisory",
    ],
    relationships: [
      "Warm sensual steady devotion turns dating straight into cozy sanctuary: attentive affection, tasteful intimate gestures, loyal mutual backing, and zero flaky hot-cold mind games.",
      "Core vulnerability hides inside unbalanced caretaking: silently adopting needy broken partners as secret rescue projects instead of demanding equal respectful adult partnerships.",
      "Flourish deeply beside balanced partners joyfully spoiling you gently right back without defensive deflection.",
    ],
    marriage: [
      "Committed marriage frequently sits right at radiant heart of Life Path 6's meaning: nurturing joyful thriving households anchored lovingly on genuine comfort, aesthetic beauty, and mutual respect.",
      "Protect crisp equal chores cleanly alongside unhurried couples nights strictly shielded away from extended family crises.",
    ],
    money: [
      "Steady generous care channels money effortlessly toward warm home improvements, quality comforting furnishings, healthy groceries, and generous loving family gifts.",
      "Protect sustainable joy easily via an explicit personal no-guilt enjoyment fund clearly balanced alongside firm boundaries against chronic dependent handouts.",
    ],
    health: [
      "Venusian sensitivity flags tense vocal throats, thyroid balance, metabolic sugar swings from emotional comforting snacks, and chest tightness carried politely for struggling neighbors.",
      "Delightful sensory restoration (unhurried soaking baths, botanical walks, uplifting choir/music, and gentle firm boundaries) heals smoothly.",
    ],
    spiritual: [
      "Unconditional warm grace welcomes healthy limits seamlessly: tending your own serene spirit honestly keeps compassionate sanctuary genuinely joyful rather than bitter.",
      "Love freely without rescuing endlessly.",
    ],
    colours: ["Rose pink", "Warm cream", "Emerald"],
    days: ["Friday", "Tuesday"],
    numbers: [6, 15, 24],
    compatibility: [
      { number: "2", verdict: "high", note: "Shared gentle tenderness, soothing domestic loyalty, and intuitive care nourish serene loving homes together." },
      { number: "4", verdict: "high", note: "4 supplies unshakeable protective foundation while 6 paints warm harmonious life cleanly through shared dependable grit." },
      { number: "9", verdict: "high", note: "Heart-driven service unites cozy household sanctuary warmly beside broad compassionate care uplifting whole communities." },
      { number: "3", verdict: "medium", note: "Joyful playful spark delights warm Venusian hearts whenever creative flair shares practical family responsibilities evenly." },
      { number: "6", verdict: "medium", note: "Deep comfortable beauty and mutual kindness thrive gracefully once gentle honest communication replaces silent martyrdom." },
      { number: "8", verdict: "medium", note: "8 builds strong material protection around lush warm home life once mutual respect tunes tender time beside career hustle." },
      { number: "1", verdict: "growth", note: "Fierce solo initiative crosses tight domestic loyalty: strong vibrant alignment blooms when autonomy feels treasured rather than threatening." },
      { number: "5", verdict: "growth", note: "Nurturing anchor meets nomadic wind; exciting lively evolution whenever trust skips jealous micromanagement completely." },
    ],
    famous: ["Albert Einstein", "Stevie Wonder", "Gal Gadot", "Michael Jackson"],
    lessons: [
      "Allowing capable adults natural struggle builds genuine trust faster than rescuing",
      "Self-care preserves sustainable love rather than selfishly stealing from loved ones",
      "Receiving tender help gracefully deepens shared connection evenly",
    ],
    affirmation: "I care with clean loving discernment, honoring my own gentle limits equally with those I cherish.",
    journalPrompts: [
      "Whose heavy manageable problem am I silently fixing out of habit rather than honest necessity?",
      "Where did unspoken domestic expectations build quiet quiet resentment instead of candid dialogue?",
      "What pure unhurried aesthetic comfort feeds my own quiet peace happily today?",
    ],
    faqs: [
      {
        question: "Why is Life Path 6 linked to Tarot's Lovers card?",
        answer:
          "Major Arcana Card VI centers conscious harmony, values alignment, and deliberate devotion: mirroring 6's core vocation around choosing loving integrity over hollow convenience.",
      },
      {
        question: "Do Life Path 6 people always prioritize parenting or marriage?",
        answer:
          "Care and responsibility anchor 6 strongly, yet that creative stewardship expresses equally powerfully through running nurturing companies, classrooms, clinics, or close-knit chosen communities.",
      },
      {
        question: "How can Life Path 6 overcome anxious perfectionism?",
        answer:
          "Practicing 'good enough warm ease' deliberately around minor domestic details and asking plainly when support helps rather than carrying everything silently.",
      },
      {
        question: "Why does financial generosity sometimes strain Life Path 6?",
        answer:
          "Genuine tenderness occasionally clouds firm limits around chronic family bailouts: setting clear charitable percentages keeps giving joyful and sustainable.",
      },
      {
        question: "What does Life Path Number 6 mean in love and personality?",
        answer:
          "Life Path Number 6 blends Venusian warmth, artistic taste, and fierce protective loyalty. In personality and relationships, 6s naturally anchor family and community, thriving best alongside mutual partners who reciprocate care rather than taking silent support for granted.",
      },
    ],
  },
  {
    number: 7,
    archetype: "The Seeker",
    tarotCard: "The Chariot",
    tarotSlug: "the-chariot",
    planet: "Ketu / Neptune",
    element: "Water",
    hero: "Unflinching truth investigation, quiet analytical solitude, and penetrating past hollow social illusions toward durable inner wisdom.",
    quickAnswer:
      "Life Path Number 7 (The Seeker) signifies deep analytical intellect, spiritual inquiry, and quiet truth-seeking. Linked to Ketu and Neptune, people with life number 7 excel in research, diagnostics, strategy, and specialist craft: blending scientific skepticism with sharp inner intuition.",
    calculationNote:
      "Sum all digits of your full date of birth and reduce to 7, for example, 16-07-1991 equals 1+6+0+7+1+9+9+1 = 34 -> 3+4 = 7.",
    description:
      "Life Path Number 7 meaning (The Seeker): piercing intellect, contemplative stillness, specialist careers, love depth, and spiritual insight.",
    meaning: [
      "Standing apart subtly past practical sixfold harmony, sacred 7 climbs cool silent summits demanding direct authentic verification rather than swallowing cozy polite platitudes handed passively down by crowds.",
      "Influenced cleanly by penetrating Ketu insight alongside misty Neptune mystery, Life Path 7 fuses razor-sharp scientific skepticism comfortably beside startling intuitive foresight: spot-checking surface claims naturally against underlying structure.",
      "Defining evolutionary pivot? Stepping bravely outward from cool safe observatory towers straight back onto muddy human life: discovering gracefully that direct vulnerable experience teaches truths pure reading alone never reaches.",
    ],
    personality: [
      "Watch sharp observant 7s silently assessing crowded conference calls before dropping one understated penetrating question that cleanly collapses thirty vague buzzword slides.",
      "Rich private internal worlds keep solitude joyfully alive: quiet library corners, focused deep engineering puzzles, solo forest trails, and unhurried contemplative tea restore batteries depleted by frantic small-talk chatter.",
      "Under sharp burnout, distant aloof cynicism settles tightly across defensive faces: dropping protective emotional walls slowly around carefully vetted equals reveals astonishing dry humor and fierce tender loyalty.",
    ],
    strengths: [
      "Surgical analytical pattern mastery",
      "Refuses hollow performative hype cleanly",
      "Unshakeable comfortable inner solitude",
      "Combines rational rigor smoothly with intuition",
      "Produces rare benchmark specialist craft",
    ],
    weaknesses: [
      "Pulls coolly distant during tender vulnerability",
      "Cycles obsessively over edge-case flaws",
      "Cynical suspicion blocking warm open trust",
      "Stalls public launches chasing unreachable perfection",
      "Forgets basic spoken reassurance toward partners",
    ],
    career: [
      "Depth decisively crushes shallow speed here: give Life Path 7 uninterrupted quiet focus tackling gnarly complex problems and expect category-leading breakthroughs across medical diagnostics, quantitative science, deep systems coding, philosophical writing, investigative analysis, or niche specialized advising.",
      "Avoid high-churn noisy boiler-rooms celebrating superficial extrovert politicking over verified technical substance.",
      "Practice marketing refined hard-won mastery confidently instead of hiding quietly hoping pure quality markets itself automatically.",
    ],
    careerPaths: [
      "Systems research & machine intelligence",
      "Diagnostic medicine & biotechnology",
      "Philosophical & investigative authorship",
      "Forensic finance or technical audit",
      "Psychology & cognitive analysis",
      "Precision scientific engineering",
    ],
    relationships: [
      "Shallow predictable charm bores observant 7 instantaneously: authentic curious depth, intelligent quiet humor, and profound respect for personal solitude magnetize slow genuine trust.",
      "Crucial emotional blindspot? Assuming attentive loving partners automatically read loving devotion straight out of quiet unspoken gazes without verbal warmth or affectionate presence.",
      "Slow intentional openings frequently evolve gracefully into remarkably faithful, unshakeable lifelong bonds.",
    ],
    marriage: [
      "Thriving marriages build peaceful shared quiet sanctuaries comfortably side by side: respecting sacred personal study corners fiercely while carving honest vulnerable dinner conversations cleanly out of busy silent routines.",
      "Share anxious inner doubts candidly right before icy silent retreat turns puzzling to caring partners.",
    ],
    money: [
      "Methodical research shields savings steadily away from flashy consumer herd traps or hollow get-rich traps: disciplined long-term rationality generally protects solid solvency cleanly.",
      "Primary income leakage hides cleanly underneath bashful undercharging: reluctant expert 7s routinely bill half true market value out of awkward discomfort with bold commercial pitching.",
    ],
    health: [
      "Intense continuous cerebral output fuels disrupted erratic sleep, nervous stomach sensitivity, posture eye strain, and dark melancholic loops when winter indoor isolation lasts too long.",
      "Daily sunlit brisk movement outdoors plus tactile physical crafts anchor bright scattered intellect smoothly back inside healthy bodies.",
    ],
    spiritual: [
      "Genuine contemplative revelation blossoms cleanly inside calm lived kindness rather than hoarding esoteric library trivia safely away from messy real neighbors.",
      "Direct humility opens clear quiet truth.",
    ],
    colours: ["Violet", "Indigo", "Sea green"],
    days: ["Monday", "Sunday"],
    numbers: [7, 16, 25],
    compatibility: [
      { number: "1", verdict: "high", note: "Clean mutual autonomy and crisp original intelligence spark bright independent respect free of clingy emotional drama." },
      { number: "5", verdict: "high", note: "Curiosity unites seamlessly: agile lively traveler trades wide stories smoothly beside thoughtful deep thinker honoring quiet personal freedom." },
      { number: "7", verdict: "high", note: "Instant profound quiet recognition honoring private sanctuaries effortlessly; keep open tender verbal bridges lovingly lit daily." },
      { number: "3", verdict: "medium", note: "Buoyant storytelling brings light into thoughtful solitude whenever mutual humor respects alternating social vs. silent appetites." },
      { number: "4", verdict: "medium", note: "Unflashy grounded sincerity clicks smoothly across quiet orderly homes once unspoken affection warms practical steadiness." },
      { number: "9", verdict: "medium", note: "Wide thoughtful philosophical breadth connects easily whenever detached skepticism stays appreciative of passionate idealism." },
      { number: "2", verdict: "growth", note: "Open emotional tenderness invites cool guarded analysis steadily downward into warm vulnerability: rewarding mutual growth with patience." },
      { number: "8", verdict: "growth", note: "Solitary seeker crosses hard tangible material power; remarkable balanced synthesis once contemplative wisdom values real-world impact." },
    ],
    famous: ["Stephen Hawking", "Julia Roberts", "Muhammad Ali", "Bruce Lee"],
    lessons: [
      "Shared lived intimacy teaches wisdom clinical detachment can never calculate",
      "Shipping flawed authentic work bravely beats polishing invisible perfection forever",
      "Gentle silence restores spirit cleanly whereas resentful withdrawal isolates needlessly",
    ],
    affirmation: "I trust quiet inner clarity while welcoming honest human closeness warmly and openly.",
    journalPrompts: [
      "Which heartfelt feeling am I over-analyzing intellectually to avoid messy vulnerability right now?",
      "What genuine expert value do I shyly underprice out of awkward discomfort with bold visibility?",
      "Where did solitary reflection drift subtly sideways into protective cold isolation lately?",
    ],
    faqs: [
      {
        question: "Are Life Path 7 individuals inherently religious?",
        answer:
          "Often spiritual seekers rather than rigid conformists: 7 relentlessly questions dogma to uncover firsthand genuine inner truth, whether framed scientifically, philosophically, or mystically.",
      },
      {
        question: "Why is Life Path 7 associated with Tarot's Chariot?",
        answer:
          "Major Arcana VII embodies directed internal willpower guiding opposing drives cleanly forward through disciplined clear mastery of mind over scattered emotion.",
      },
      {
        question: "Do Life Path 7 partners need extra alone time inside marriage?",
        answer:
          "Consistently yes: decompression silence doesn't mean falling out of love; uninterrupted mental recovery restores patient warmth and presence effortlessly.",
      },
      {
        question: "What unlocks career momentum swiftly for Life Path 7?",
        answer:
          "Publishing concise sharp technical or editorial work consistently instead of endlessly waiting inside quiet private study.",
      },
    ],
  },
  {
    number: 8,
    archetype: "The Executive",
    tarotCard: "Strength / Justice",
    tarotSlug: "strength",
    planet: "Saturn",
    element: "Earth",
    hero: "Unflinching institutional stamina, sharp strategic leverage, and forging enduring ethical power out of tough material trials.",
    quickAnswer:
      "Life Path Number 8 (The Executive) governs material mastery, executive leadership, financial leverage, and karmic resilience. Ruled by Saturn, the 8 life path number rewards disciplined integrity, long-range strategy, and fair stewardship, turning early tests into enduring authority and abundance.",
    calculationNote:
      "Add all digits of your full birth date and reduce to 8, for example, 17-08-1990 calculates as 1+7+0+8+1+9+9+0 = 35 -> 3+5 = 8.",
    description:
      "Life Path Number 8 meaning (The Executive): 8 life path number personality, wealth and Saturn resilience, executive careers, love, and compatibility.",
    meaning: [
      "Stacked gracefully above double fourfold balance, infinite twin loops of 8 link upper invisible purpose cleanly down onto concrete marketplace results: declaring boldly that ideals mean little until balanced cleanly across spreadsheets, payrolls, and real human impact.",
      "Steered unflinchingly by testing Saturn, Life Path 8 routinely shoulders daunting early burdens forcing rare strategic spine long before peers take adult responsibility seriously.",
      "Core spiritual edge? Measuring clean dignity straight from principled generous stewardship rather than hoarding defensive bank scores purely to feel safe against old hidden vulnerability.",
    ],
    personality: [
      "Enter a sharp negotiating room alongside seasoned Life Path 8 leaders and immediate tactical gravity hits unmistakably: razor clear priorities, crisp intolerance of whining excuses, and magnetic poise under massive commercial stakes.",
      "Beneath intimidating tough armor, authentic 8s show astonishing fierce quiet protection toward trusted inner circles: fixing terrifying external problems silently without bragging noisily.",
      "When unbalanced, workaholic tunnel vision mistakes productive output strictly for loveable human worth, crushing soft rest ruthlessly beside harsh emotional walls.",
    ],
    strengths: [
      "Commanding organizational and fiscal radar",
      "Extraordinary endurance through multi-year pressure",
      "Makes agonizing high-stakes calls cleanly",
      "Rebounds tenaciously out of brutal losses",
      "Protects teams and families fiercely",
    ],
    weaknesses: [
      "Equates human worth rigidly with productivity",
      "Slow revealing vulnerable exhausted emotions",
      "Hard intimidating bluntness during hurry",
      "Transactional bargaining slipping softly into love",
      "Refuses slowing down until health breaks cleanly",
    ],
    career: [
      "Built naturally to run sizable engines rather than tidy tiny cogs: institutional finance, executive governance, complex M&A law, commercial real estate development, large-scale entrepreneurship, or formidable industrial turnarounds elevate 8 steadily right toward influential apex seats.",
      "Early career friction frequently humbles impatient pride cleanly: compounding giant rewards reliably land past mid-thirties once resilient grit marries tactical diplomacy.",
    ],
    careerPaths: [
      "Chief executive & board governor",
      "Private equity & institutional banking",
      "Commercial real estate architect",
      "Trial & corporate governance law",
      "Large-scale enterprise turnaround lead",
      "Philanthropic endowment director",
    ],
    relationships: [
      "Loyal generous provision anchors romance tangibly: creating protected sanctuary safely through calm dependable crisis stewardship.",
      "Intimacy drops brittle transactional armor the exact evening you confess weary personal doubts cleanly to trustworthy partners rather than retreating coldly behind office monitors.",
      "Strong peers admiring genuine resilience cleanly outlast meek passive sycophants swiftly.",
    ],
    marriage: [
      "Powerhouse loyal alliances flourish brilliantly whenever both spouses operate transparently like deeply respected equal life governors rather than neglected home dependents.",
      "Shield sacred unhurried weekend vacations zealously away from urgent client emergencies.",
    ],
    money: [
      "No root number carries sharper visceral intuition around capital dynamics, valuation risk, leverage cycles, and durable asset compounding than 8.",
      "Massive energetic swings reward boring conservative liquidity buffers paired cleanly against ethical clear risk controls: never confuse risky leveraged ego flexing with sturdy sovereign security.",
    ],
    health: [
      "Saturnine endurance quietly buries exhaustion inside rigid joints, strained knees, stiff lumbar discs, clenched jawlines, and silent cardiovascular stress until mandatory stops land suddenly.",
      "Treat deliberate restorative sleep and light joyful outdoor strength play as non-negotiable executive asset protection.",
    ],
    spiritual: [
      "Clean sovereign power heals broken ecosystems smoothly: true enduring prosperity empowers thriving communities comfortably alongside generous personal abundance.",
      "Strength shines purest blended gently beside mercy.",
    ],
    colours: ["Obsidian black", "Deep navy", "Warm bronze"],
    days: ["Saturday", "Friday"],
    numbers: [8, 17, 26],
    compatibility: [
      { number: "2", verdict: "high", note: "Tender empathetic warmth dissolves tough corporate stress effortlessly while steady 8 provides safe grounded material shelter." },
      { number: "4", verdict: "high", note: "Unstoppable mutual integrity, shared work ethic, and durable realistic building creating impressive stable empires safely." },
      { number: "6", verdict: "high", note: "Protective material mastery crowns cozy warm family hospitality beautifully once quality relaxed time wins clear priority." },
      { number: "1", verdict: "medium", note: "Brilliant high-velocity ambition shines brightly once territory boundaries divide cleanly without constant turf battles." },
      { number: "8", verdict: "medium", note: "Formidable powerhouse duo sharing ruthless ambition; cultivate gentle vulnerable humor home so intimacy never mimics crisp boardrooms." },
      { number: "9", verdict: "medium", note: "Executive execution joins noble humanitarian vision seamlessly: immense civic legacy once impatient profit meets deeper soul purpose." },
      { number: "3", verdict: "growth", note: "Playful expressive warmth shakes dour workaholic seriousness wonderfully loose whenever mutual patience curbs harsh bluntness." },
      { number: "7", verdict: "growth", note: "External tangible impact confronts detached contemplative solitude; balanced mutual insight whenever slow patience bridges different rhythms." },
    ],
    famous: ["Sandra Bullock", "Matt Damon", "Giorgio Armani", "50 Cent"],
    lessons: [
      "Human intrinsic worth shines undiminished completely outside quarterly outputs",
      "Power stewarded openly uplifts people cleanly whereas fear tightening hoards isolates",
      "Financial cycles turn cleanly; wise resilient balance protects steady comeback capacity",
    ],
    affirmation: "I steward enduring power calmly with clean integrity, balancing proud ambition peacefully beside joyful rest.",
    journalPrompts: [
      "Where am I chasing extra external achievements quietly to quiet nagging inner insecurity?",
      "Who close genuinely misses unhurried warm presence completely unattached from office deals?",
      "What courageous fair ethical boundary creates healthier leverage immediately this week?",
    ],
    faqs: [
      {
        question: "Why are Life Path 8 careers linked with delayed compounding rewards?",
        answer:
          "Saturn demands durable foundational proof before unlocking authoritative leverage: teaching resilient ethics and crisis composure across bumpy twenties so thirties and forties expand smoothly.",
      },
      {
        question: "Does Life Path 8 guarantee effortless wealth?",
        answer:
          "Not automatically: 8 amplifies financial lessons steeply in both directions, rewarding disciplined integrity and diversified prudence while testing greed or impulsive risk ruthlessly.",
      },
      {
        question: "How does Tarot relate both Strength and Justice to Life Path 8?",
        answer:
          "Different classic decks place Strength and Justice interchangeably at VIII and XI: together they express 8's dual test: mastering fierce personal stamina cleanly inside fair karmic accountability.",
      },
      {
        question: "What relaxes high-achieving Life Path 8 people effectively?",
        answer:
          "Scheduled screen-free retreats, physical strength sports, mentoring emerging builders transparently, and trusting competent lieutenants completely with delegated authority.",
      },
      {
        question: "What does the 8 Life Path Number mean in numerology?",
        answer:
          "The 8 Life Path Number symbolizes executive power, financial stewardship, and balance between material ambition and personal ethics. Ruled by Saturn, 8s learn through real-world responsibility and often reach their strongest career and wealth stride from their mid-thirties onward.",
      },
    ],
  },
  {
    number: 9,
    archetype: "The Humanitarian",
    tarotCard: "The Hermit",
    tarotSlug: "the-hermit",
    planet: "Mars",
    element: "Fire",
    hero: "Compassionate universal perspective, fearless moral advocacy, and graceful completion freeing space for meaningful collective renewal.",
    quickAnswer:
      "Life Path Number 9 (The Humanitarian) represents completion, universal compassion, creative depth, and purposeful service. Ruled by Mars and carrying lessons from numbers 1 through 8, life number 9 thrives in advocacy, healing, arts, and leadership: flourishing when generosity stays paired with clear boundaries.",
    calculationNote:
      "Sum all digits of your full birth date until reaching 9, for example, 18-09-1998 equals 1+8+0+9+1+9+9+8 = 45 -> 4+5 = 9.",
    description:
      "Life Path Number 9 meaning (The Humanitarian): life number 9 traits, Mars empathy, career purpose, love compatibility, finances, and spiritual lessons.",
    meaning: [
      "Sitting gracefully right atop single-digit closure, generous 9 contains subtle traces from every preceding number 1 through 8: producing expansive compassionate elders able instinctively to spot shared human longing past surface borders, accents, or partisan walls.",
      "Guided paradoxically by fiery Mars alongside contemplative Hermit wisdom, Life Path 9 merges tender poetic empathy effortlessly beside fierce courage challenging systemic cruelty cleanly when pushed far enough.",
      "Primary spiritual graduation test? Graceful clean release: dropping bitter dead grudges, expired relationships, or guilty savior overextension gently once chapters naturally conclude.",
    ],
    personality: [
      "Strangers unexpectedly share heartbreaking life stories effortlessly beside unhurried Life Path 9 listeners across noisy trains within ten gentle minutes: old soul breadth invites honest disarmament instantly.",
      "Creative theatrical flair, broad cultural hunger, quiet generosity, and fierce allergic reaction to petty narrow cruelty characterize mature 9 effortlessly.",
      "Hidden shadow creeps subtly inside suppressed martyr resentment: rescuing needy causes quietly without crisp boundaries until sudden explosive Mars anger or melancholic burnout breaks cleanly through.",
    ],
    strengths: [
      "Wide compassionate non-judgmental empathy",
      "Fierce principled defense of fairness",
      "Expressive moving artistic and public voice",
      "Natural mentorship crossing diverse generations",
      "Resilient soulful perspective past crisis",
    ],
    weaknesses: [
      "Gives tirelessly far past empty tanks",
      "Clings nostalgically inside finished chapters",
      "Swallows justifiable anger into heavy melancholy",
      "Disillusioned cynically when ideals bruise reality",
      "Avoids boring small daily personal bookkeeping",
    ],
    career: [
      "Purely cynical extraction roles hollow vibrant Life Path 9 spirits visibly fast: pour bold fiery stamina squarely into public health breakthroughs, inspiring documentary arts, restorative legal advocacy, transformative philanthropy, ecological engineering, or empathetic large-scale teaching where real human relief shows visibly.",
      "Remember respectfully that charging clean sustainable business margins funds expanded generosity endlessly longer than broke burnout martyrdom.",
    ],
    careerPaths: [
      "Global NGO & impact leadership",
      "Emergency trauma medicine & public health",
      "Documentary film, theater & moving prose",
      "Human rights & restorative legal counsel",
      "Environmental science & conservation",
      "Philanthropic grant & curriculum architect",
    ],
    relationships: [
      "Expansive romantic generosity sees luminous beauty softly inside flawed real humans, forgiving honest clumsy mistakes cleanly far longer than skeptical numbers dare.",
      "Danger shadows kindly loving patterns when deep empathy turns subtly into nursing hopeless unmotivated partners hoping noble devotion alone heals active dysfunction.",
      "Heal gently past finished exes completely before inviting vibrant fresh chapters clearly onward.",
    ],
    marriage: [
      "Remarkable durable marriages thrive vibrantly around shared noble purpose: hosting warm eclectic communities gracefully while prioritizing quiet restful retreats defending private tender energy.",
      "Air mild small irritations honestly on warm Tuesday afternoons rather than stuffing years quietly underground.",
    ],
    money: [
      "Abundance circulates curiously fast through open generous 9 hands: unexpected large inflows arrive seamlessly right alongside sudden impulsive donations or forgotten generous tabs.",
      "Choose clear explicit fixed percentages for charitable tithing up front right beside automated personal reserve security so generosity stays joyful without anxiety.",
    ],
    health: [
      "Mars fuels simmering inflammation, acute stress headaches, accidental fast-motion clumsiness, and heavy adrenal fatigue when repressed grief sits quietly unvoiced.",
      "Vigorous honest physical training paired steadily beside expressive emotional release heals body and spirit rapidly.",
    ],
    spiritual: [
      "Every honorable ending clears rich fertile compost gracefully underneath budding spring mornings: honest mourning opens fearless wise detachment effortlessly.",
      "Release old baggage gracefully outward into quiet peace.",
    ],
    colours: ["Crimson", "Coral", "Warm gold"],
    days: ["Tuesday", "Thursday"],
    numbers: [9, 18, 27],
    compatibility: [
      { number: "1", verdict: "high", note: "Bold focused ignition unites inspiringly beside wide compassionate scale: dynamic champions creating meaningful lasting movements." },
      { number: "2", verdict: "high", note: "Tender deep emotional care merges cleanly alongside selfless global empathy: gentlest compassionate sanctuary built carefully together." },
      { number: "6", verdict: "high", note: "Cozy local nurturing anchors broad humanitarian dreams solidly cleanly: shared loyalty, beauty, and purposeful stewardship." },
      { number: "3", verdict: "high", note: "Captivating expressive creative spark reaches wide diverse audiences effortlessly alongside soulful heartfelt conviction." },
      { number: "5", verdict: "medium", note: "Open broad curiosity shares refreshing worldly perspective whenever playful freedom honors clear emotional presence." },
      { number: "9", verdict: "medium", note: "Profound soulful empathy; keep solid boring practical routines cleanly prioritized alongside saving the wide outside world." },
      { number: "4", verdict: "growth", note: "Idealistic panoramic scale meets meticulous realistic budgets: powerful grounded impact whenever gentle patience softens mutual impatience." },
      { number: "8", verdict: "growth", note: "Soulful purpose tests hard strategic commerce constantly; magnificent transformative legacy when shared respect unites heart with leverage." },
    ],
    famous: ["Morgan Freeman", "Kurt Russell", "Adele", "Bob Marley"],
    lessons: [
      "Graceful timely release completes natural cycles infinitely cleaner than anxious clinging",
      "Honest spoken anger sets healthy clear limits before bitter exhaustion sets in",
      "Rescuing unwilling adults disrespects their agency cleanly while depleting yours",
    ],
    affirmation: "I release finished chapters gracefully, serving with healthy boundaries and fearless compassionate joy.",
    journalPrompts: [
      "What finished painful identity, grudge, or draining obligation deserves warm clean goodbye today?",
      "Where does hidden martyr guilt keep pushing me into saying 'yes' with heavy dry resentment?",
      "How could vigorous daily movement release pent-up unspoken frustration swiftly tonight?",
    ],
    faqs: [
      {
        question: "Why does Life Path 9 experience frequent major chapter endings?",
        answer:
          "Because 9 stands at completion of the nine-number arc: repeatedly shedding stale habits, roles, and unequal ties keeps life open cleanly for wide meaningful service.",
      },
      {
        question: "Is Life Path 9 always suited exclusively to nonprofit charities?",
        answer:
          "No. Purpose thrives powerfully across principled architecture, honest sustainable commerce, transformative art, or mindful corporate mentoring whenever outcomes genuinely uplift real human dignity.",
      },
      {
        question: "Why does Mars rule compassionate Life Path 9 alongside Tarot's Hermit?",
        answer:
          "Compassion without spine quickly collapses under cynicism; healthy Martian fire fuels brave moral action guided wisely by quiet contemplative Hermit discernment.",
      },
      {
        question: "How can Life Path 9 keep personal finances strong despite generous instincts?",
        answer:
          "Lock crisp fixed percentages automatically into savings and investments first, freeing deliberate intentional charitable impact guilt-free out of true overflow.",
      },
      {
        question: "What does Life Path Number 9 mean in numerology?",
        answer:
          "Life Path Number 9 (the Humanitarian) signifies completion, broad empathy, and impact-driven leadership. People with life number 9 absorb qualities from numbers 1–8, making them natural mentors, artists, and advocates who grow strongest once they let go of expired chapters and avoid over-giving.",
      },
      {
        question: "Is Life Path 9 rare or lucky in love and money?",
        answer:
          "Life Path 9 occurs at a steady ~11% distribution across birth dates and attracts serendipitous opportunities when work serves a real human need. In love, 9s pair best with supportive, grounded partners like Life Path 1, 2, 3, or 6 who respect emotional depth.",
      },
    ],
  },
  {
    number: 11,
    isMaster: true,
    archetype: "The Illuminator",
    tarotCard: "Justice",
    tarotSlug: "justice",
    planet: "Moon / Uranus",
    element: "Air",
    hero: "High-voltage intuitive lightning, visionary artistic synthesis, and channeling subtle unspoken insight crisply into clear inspiring light.",
    quickAnswer:
      "Master Number 11 (The Illuminator) signifies heightened intuition, spiritual sensitivity, and visionary inspiration. Carrying the diplomacy of root 2 at double voltage under Moon and Uranus influences, Master 11 shines in creative, psychological, and mentoring paths when grounded in steady physical routines.",
    calculationNote:
      "When adding your full birth-date digits totals 11 or 29 (2+9 = 11), keep 11 unreduced rather than reducing further to 2, for example, 10-10-1989 sums to 1+0+1+0+1+9+8+9 = 29 -> 2+9 = 11.",
    description:
      "Master Number 11 meaning (The Illuminator): heightened intuition, nervous-system grounding, visionary careers, love compatibility, and FAQs.",
    meaning: [
      "Two parallel pillars stand upright side by side without collapsing flat down into soft 2: marking numerology's purest intuitive tuning fork catching subtle collective shifts cleanly years ahead of mainstream headlines.",
      "Combining receptive lunar 2 sensitivity cleanly beneath sudden electric Uranian flashes, Master Number 11 routinely feels like carrying high-definition antennae right inside noisy ordinary supermarkets.",
      "Central lifelong discipline? Grounding electric inspiration securely inside sturdy ordinary physical habits: because extraordinary vision burns brilliantly out inside anxious exhaustion unless anchored calmly into sleep, nutrition, and honest earthy boundaries.",
    ],
    personality: [
      "Conversations beside balanced 11s shimmer effortlessly with uncanny accuracy: pinpointing hidden root emotional truths cleanly within three gentle sentences before speakers even organize conscious thoughts.",
      "Yet early twenties frequently wobble wildly across extreme confidence waves: breathtaking visionary clarity Monday mornings crashing sharply toward paralyzing self-doubt by quiet lonely Thursday evenings.",
      "Seasoned mature Master 11s learn dialing back safely onto grounded root-2 calm whenever nervous channels spike hot: letting sustained luminous artistry speak quietly louder than frantic crisis brilliance.",
    ],
    strengths: [
      "Uncanny early pattern & intuitive insight",
      "Electrifying inspiring cultural or spiritual voice",
      "Feels unspoken emotional nuances cleanly",
      "Original unconventional creative illumination",
      "Deep magnetic empathy lifting lost rooms",
    ],
    weaknesses: [
      "Acute sensory & nervous-system overload",
      "Harsh crippling imposter doubt crashes",
      "Dramatic emotional peak-valley whiplash",
      "Dodges boring mundane practical logistics",
      "Absorbs collective despair painfully fast",
    ],
    career: [
      "Sterile soul-deadening spreadsheet processing exhausts radiant Master 11 channels quickly: align vocations cleanly where clear visionary synthesis moves real people: incisive psychotherapy, visionary cinematography/music, pioneering systems ethics, charismatic inspiring education, or intuitive architectural leadership.",
      "Notice pragmatic reliable administrative partners multiply output dramatically: let detailed coordinators schedule routine flights while you focus sharply on luminous conceptual breakthroughs.",
    ],
    careerPaths: [
      "Visionary mentorship & speaking",
      "Clinical depth psychology & healing arts",
      "Inspired film, music & literary authorship",
      "Ethical frontier tech & human design",
      "Philosophical & spiritual research",
      "Diplomatic cultural mediation",
    ],
    relationships: [
      "Electrifying soulful resonance draws fascinating intense connections quickly, yet volatile equally high-strung drama companions trigger exhausting nervous storms quickly over exciting months.",
      "Quiet grounded steady partners anchored comfortably inside ordinary warmth create pure gold: trusting steady safe arms unlocks breathtaking vulnerability cleanly.",
      "Explain quiet sensory decompression needs transparently rather than disappearing mysteriously mid-week.",
    ],
    marriage: [
      "Shared soothing rituals (unhurried morning tea, screen-free evenings, safe steady communication) act straight like priceless nervous medicine keeping luminous love remarkably secure across decades.",
      "Protect calm ordinary weekends gently right away from heavy public spotlight pressures.",
    ],
    money: [
      "Because creative and intuitive brilliance peaks unevenly across inspired seasons rather than flat salaried clocks, lean conservative living baselines plus six-month liquid cushions calm background financial panic decisively.",
      "Charge confidently cleanly up front for rare transformative insight rather than slipping awkwardly into under-valued barter favors.",
    ],
    health: [
      "Running constant dual-voltage awareness heats nervous wiring directly: restless midnight insomnia, sharp environmental sensitivities, gut flutter anxiety, and sudden immune dips after packed social weekends.",
      "Earth-touching nature hours, clean magnesium nutrition, quiet silent breaks, and firm caffeine boundaries steady brilliant focus fast.",
    ],
    spiritual: [
      "Master 11 illuminates ordinary rooms quietly cleanly by trusting grounded inner clarity right amid confusing noisy times.",
      "Stay firmly rooted before channeling wide skies.",
    ],
    colours: ["Moon silver", "Pure white", "Pale violet"],
    days: ["Monday", "Sunday"],
    numbers: [11, 2, 20, 29],
    compatibility: [
      { number: "2", verdict: "high", note: "Tender quiet diplomatic warmth buffers high-voltage insight effortlessly without competitive ego clash or noisy drama." },
      { number: "6", verdict: "high", note: "Safe grounded nurturing home life settles overstimulated electric nerves smoothly back into serene comfortable rest." },
      { number: "22", verdict: "high", note: "Rare electric master synergy: 11 illuminates clear inspiring purpose while 22 engineers towering real-world infrastructure." },
      { number: "4", verdict: "medium", note: "Solid practical scaffolding anchors sparkling ethereal blueprints cleanly whenever gentle mutual patience honors opposite paces." },
      { number: "9", verdict: "medium", note: "Soulful visionary depth clicks quickly around humanitarian missions; protect quiet restful private recovery borders consistently." },
      { number: "11", verdict: "medium", note: "Extraordinary psychic resonance that dazzles brightly whenever grounded ordinary habits anchor two intense creative channels." },
      { number: "1", verdict: "growth", note: "Charging solar independence speeds straight past delicate intuitive signals: mutual awe deepens smoothly once active listening settles calm." },
      { number: "8", verdict: "growth", note: "Material corporate urgency challenges delicate visionary timing constantly; extraordinary shared success once trust respects quiet calibration." },
    ],
    famous: ["Wolfgang Amadeus Mozart", "Edgar Allan Poe", "Prince", "Jacqueline Kennedy"],
    lessons: [
      "Extreme sensitivity serves cleanly as crisp high-definition radar rather than broken fragility",
      "Sturdy ordinary physical grounding stabilizes visionary light effortlessly",
      "Imposter self-doubt shouts loudest right before genuine creative breakthroughs",
    ],
    affirmation: "I stay calmly grounded inside sturdy everyday rhythms, trusting clear intuitive light cleanly.",
    journalPrompts: [
      "Which mundane steady physical habit anchors radiant creative clarity fastest during hectic weeks?",
      "Where did intense outside noise silently drown calm quiet knowing out yesterday?",
      "What bold inspiring draft waits timidly behind quiet anxious self-doubt right now?",
    ],
    faqs: [
      {
        question: "Does having Master Number 11 mean you never experience ordinary root-2 traits?",
        answer:
          "Every Master 11 still integrates foundational diplomatic Life Path 2 qualities: frequently oscillating smoothly between quiet supportive root-2 stretches and heightened creative visionary surges.",
      },
      {
        question: "Why is Master Number 11 linked with anxiety or sleep fragility?",
        answer:
          "Constant rapid sensory intake processes subtle social, emotional, and creative data simultaneously; disciplined rest, clear boundaries, and calm physical grounding turn raw intensity straight into poised strength.",
      },
      {
        question: "How is 11 linked to Tarot's Justice card?",
        answer:
          "Card XI holds balanced impartial scales alongside sharp upright clarity: reflecting 11's mandate to align subtle intuitive truth cleanly with balanced ethical reality.",
      },
      {
        question: "What partner balance works best alongside Master Number 11?",
        answer:
          "Calm emotionally steady allies who enjoy deep meaningful inquiry yet appreciate unhurried ordinary routines cleanly rather than fueling endless dramatic highs and lows.",
      },
    ],
  },
  {
    number: 22,
    isMaster: true,
    archetype: "The Master Builder",
    tarotCard: "The Fool",
    tarotSlug: "the-fool",
    planet: "Saturn / Uranus",
    element: "Earth",
    hero: "Architectural vision scaled safely across whole institutions, turning daring civic daydreams tangibly into durable brick-and-mortar reality.",
    quickAnswer:
      "Master Number 22 (The Master Builder) combines the visionary intuition of 11 with the practical discipline of root 4 to build lasting real-world institutions. Guided by Saturn and Uranus, Master 22 excels in large-scale architecture, engineering, policy, and entrepreneurship taken step by concrete step.",
    calculationNote:
      "Keep totals of 22 unreduced when summing your full birth date (DD-MM-YYYY), for example, 04-01-1970 adds up to 0+4+0+1+1+9+7+0 = 22.",
    description:
      "Master Number 22 meaning (The Master Builder): systemic vision, Saturnine execution, institutional careers, love grounding, and compatibility.",
    meaning: [
      "Doubling receptive intuition (11) cleanly down onto four-cornered practical foundation (4), Master Number 22 anchors numerology's most ambitious worldly synthesis: bold transformative imagination executing relentlessly through disciplined brick, code, policy, and capital.",
      "Saturnine weight meets disruptive Uranian innovation smoothly inside 22: spotting flawed civic institutions effortlessly and sketching realistic fifty-year systems strong enough to shelter millions cleanly.",
      "Crucial lifetime hazard? Crushing internal intimidation freezing brilliant young builders entirely still because towering early blueprints look terrifyingly impossible compared beside modest humble Step One.",
    ],
    personality: [
      "Balanced Master 22 minds scan vast messy landscapes calmly like seasoned urban planners: grasping microscopic budget seams cleanly at identical speed alongside thirty-year geopolitical consequences.",
      "Remarkable durable resilience pulls massive multi-stakeholder coalitions smoothly along behind transparent calm integrity when flashy trend-chasers scatter rapidly.",
      "Watch quietly whenever immense towering standards sour inwards into punishing self-criticism: celebrating humble concrete milestones cleanly keeps sustainable joy alive through long patient builds.",
    ],
    strengths: [
      "Synthesizes sweeping vision beside gritty nuts-and-bolts",
      "Organizes vast teams around durable purpose",
      "Extraordinary physical/mental multi-decade stamina",
      "Spots systemic bottlenecks decades early",
      "Builds enduring public-good structures",
    ],
    weaknesses: [
      "Paralyzing dread staring down giant self-expectations",
      "Drops down harshly into uninspired root-4 grind under fear",
      "Dismisses genuine huge wins chasing next Everest",
      "Reluctant stepping off office ladders toward warm rest",
      "Impatient brusque disdain around timid half-measures",
    ],
    career: [
      "Tiny insular roles chafe restlessly against expansive 22 wings: step steadily forward into structural architecture, transformative healthcare/education system building, sustainable global infrastructure, platform engineering leadership, civic policy overhaul, or scaled social entrepreneurship leaving lasting institutions cleanly standing decades beyond retirement.",
      "Start honestly modestly today: vast enduring empires invariably lay brick one neatly before noon.",
    ],
    careerPaths: [
      "Institutional founder & civic builder",
      "Urban architecture & climate infrastructure",
      "Platform engineering & systems lead",
      "Public policy & systemic reform director",
      "Global philanthropy & health systems",
      "Scaled multi-market operations leadership",
    ],
    relationships: [
      "Loyal trustworthy steadiness proves devotion tangibly across decades, yet grand tireless building pulls attention subtly past intimate small joys unless beloved companions gently claim grounded shared presence cleanly.",
      "Unfazed supportive partners celebrating ambitious purpose while cheerfully shutting down stressful laptops every Sunday night become priceless stabilizing anchors.",
      "Share vulnerable doubts honestly rather than staging fearless monumental invincibility alone.",
    ],
    marriage: [
      "Committed lifelong homes safeguard sanity wonderfully whenever ordinary affectionate tenderness (messy family pancakes, quiet dog walks, sincere lighthearted jokes) holds strict equal rank beside massive public missions.",
      "Protect spontaneous small warmth fiercely from endless heavy logistics chatter.",
    ],
    money: [
      "Vast capital streams (project endowments, enterprise operating budgets, multi-partner real holdings) routinely move through skilled 22 hands across mature decades.",
      "Separate personal family security conservatively cleanly apart from aggressive mission capital right up front using sober independent fiduciary governance.",
    ],
    health: [
      "Carrying giant institutional weight hits chronic spinal fatigue, stiff neck strain, depleted adrenal reserves, and stubborn insomnia straight down through neglected self-care.",
      "Scheduled mandatory restorative downtime builds architectural durability: never sacrifice sturdy biological scaffolding carelessly for urgent tight milestones.",
    ],
    spiritual: [
      "Master 22 demonstrates gracefully that sacred reverence dwells smoothly inside honest concrete engineering: building clean safe roads, healthy clinics, and enduring honest tools embodies love tangibly.",
      "Begin modestly precisely wherever sturdy ground waits today.",
    ],
    colours: ["Cobalt blue", "Burnished gold", "Earth ochre"],
    days: ["Saturday", "Sunday"],
    numbers: [22, 4, 13, 31],
    compatibility: [
      { number: "4", verdict: "high", note: "Shared uncompromising work ethic, mutual steady integrity, and quiet reliability anchoring vast lasting foundations safely together." },
      { number: "6", verdict: "high", note: "Warm domestic shelter cushions mammoth institutional pressures cleanly, reminding ambitious visionaries daily why loving ordinary people matters." },
      { number: "11", verdict: "high", note: "Sublime visionary duo blending high luminous inspired meaning smoothly straight into enduring durable public infrastructure." },
      { number: "2", verdict: "medium", note: "Gentle empathetic intuition smooths bruised high-stakes executive weariness effortlessly whenever attentive presence meets shared listening cleanly." },
      { number: "8", verdict: "medium", note: "Colossal financial and executive drive; define clear humane rest rhythms home so tender affection survives high-pressure sprints intact." },
      { number: "22", verdict: "medium", note: "Breathtaking architectural reach when aligned around shared ethical service; guard against mutual workaholic fatigue home." },
      { number: "3", verdict: "growth", note: "Lighthearted playful storytelling eases stiff crushing mission seriousness wonderfully whenever mutual sarcasm yields smoothly to admiration." },
      { number: "5", verdict: "growth", note: "Restless agile improvisation challenges monumental fixed timelines daily; inventive agility whenever clear trust keeps steady mutual pace." },
    ],
    famous: ["Dalai Lama", "Paul McCartney", "Richard Branson", "Bryan Cranston"],
    lessons: [
      "Monolithic durable achievements rise strictly cleanly one humble imperfect brick per afternoon",
      "Personal physical health sustains enduring public impact cleanly across decades",
      "Savor present steady progress gracefully rather than postponing pride onto impossible horizons",
    ],
    affirmation: "I start bravely at real human scale today, building durable work that survives calmly beside warm rest.",
    journalPrompts: [
      "What monumental intimidating ambition keeps sitting delayed waiting for flawless impossible perfection?",
      "Which humble small Step One finishes cleanly inside forty focused minutes tomorrow morning?",
      "Where did silent workaholic pressure squeeze playful light gently out of close home bonds?",
    ],
    faqs: [
      {
        question: "Do all Master Number 22 people run giant global corporations?",
        answer:
          "No. Master builder energy shows equally powerfully transforming local school systems, pioneering accessible medical clinics, coding critical open tools, or raising resilient grounded extended communities.",
      },
      {
        question: "Why does Master Number 22 feel such intense pressure early in life?",
        answer:
          "Because sensing vast latent capacity long before acquiring patient step-by-step operational maturity creates painful impatience: pressure eases dramatically once consistent incremental building starts cleanly.",
      },
      {
        question: "How is Master Number 22 connected to Tarot's Fool card?",
        answer:
          "In esoteric numbering Card 0 (or 22 at full cycle completion) marks fearless cosmic leap straight out into vast uncharted creation: reminding practical builders every giant monument starts with pure trust.",
      },
      {
        question: "What distinguishes Master Number 22 from Life Path 4?",
        answer:
          "Both share unshakeable discipline and engineering grit, yet 22 habitually pulls wide visionary collective transformation smoothly down into structural reality beyond personal stability alone.",
      },
    ],
  },
];

function slugFor(seed: NumberSeed): string {
  return seed.isMaster ? `master-number-${seed.number}` : `life-path-${seed.number}`;
}

function labelFor(seed: NumberSeed): string {
  return seed.isMaster ? `Master Number ${seed.number}` : `Life Path ${seed.number}`;
}

function buildPage(seed: NumberSeed, all: NumberSeed[]): NumerologyPage {
  const slug = slugFor(seed);
  const label = labelFor(seed);
  const name = `${label}: ${seed.archetype}`;

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
    title: seed.isMaster
      ? `Master Number ${seed.number} Meaning (${seed.archetype}): Personality, Career & Love`
      : `Life Path Number ${seed.number} Meaning (${seed.archetype}): Personality, Career & Love`,
    description: seed.description,
    keywords: [
      `${label.toLowerCase()}`,
      `${label.toLowerCase()} meaning`,
      ...(seed.isMaster
        ? [`master ${seed.number} numerology`, `life path ${seed.number} meaning`]
        : [
            `life path number ${seed.number}`,
            `${seed.number} life path number`,
            `life number ${seed.number}`,
          ]),
      `${label.toLowerCase()} personality`,
      `${label.toLowerCase()} career`,
      `${label.toLowerCase()} compatibility`,
      `numerology ${seed.number}`,
      `${seed.archetype.toLowerCase()} numerology`,
    ],
    archetype: seed.archetype,
    quickAnswer: seed.quickAnswer,
    calculationNote: seed.calculationNote,
    tarotCard: seed.tarotCard,
    tarotSlug: seed.tarotSlug,
    planet: seed.planet,
    element: seed.element,
    hero: seed.hero,
    meaning: seed.meaning,
    personality: seed.personality,
    strengths: seed.strengths,
    weaknesses: seed.weaknesses,
    career: seed.career,
    careerPaths: seed.careerPaths,
    relationships: seed.relationships,
    marriage: seed.marriage,
    money: seed.money,
    health: seed.health,
    spiritual: seed.spiritual,
    luckyColours: seed.colours,
    luckyDays: seed.days,
    luckyNumbers: seed.numbers,
    compatibility: seed.compatibility,
    famous: seed.famous,
    lifeLessons: seed.lessons,
    affirmation: seed.affirmation,
    journalPrompts: seed.journalPrompts,
    faqs: seed.faqs,
    relatedSlugs,
    updated: NUMEROLOGY_UPDATED,
  };

  const wordCount = [
    base.hero,
    base.quickAnswer,
    base.calculationNote,
    ...base.meaning,
    ...base.personality,
    ...base.strengths,
    ...base.weaknesses,
    ...base.career,
    ...base.careerPaths,
    ...base.relationships,
    ...base.marriage,
    ...base.money,
    ...base.health,
    ...base.spiritual,
    ...base.compatibility.map((c) => c.note),
    ...base.lifeLessons,
    base.affirmation,
    ...base.journalPrompts,
    ...base.faqs.flatMap((f) => [f.question, f.answer]),
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
