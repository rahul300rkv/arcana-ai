import type { ReadingLandingConfig } from "@/components/tarot/ReadingLanding";

export type TarotLandingKey =
  | "one-card"
  | "three-card"
  | "love"
  | "yes-no"
  | "career"
  | "celtic-cross";

export const ONE_CARD_CONFIG: ReadingLandingConfig = {
  path: "/tarot/one-card",
  spreadId: "single",
  eyebrow: "One Card Reading",
  h1: "One Card Tarot Reading",
  intro:
    "The One Card Tarot Reading is the simplest, fastest way to draw on tarot for clarity: a single card drawn against a single question or moment, interpreted upright or reversed. It's the spread most people reach for as a daily ritual, and the one we'd suggest if you're new to reading cards.",
  published: "2026-08-16",
  updated: "2026-11-16",
  readingTime: "6 min read",
  sections: [
    {
      id: "how-it-works",
      title: "How a one card tarot reading works",
      paragraphs: [
        'You focus on a question or simply hold a general intention — "what do I need to know today?" is a common one — then draw a single card from the full 78-card deck. AstroFree shuffles the deck, deals the card upright or reversed, and generates a reflective interpretation that connects the card\'s traditional meaning to your question.',
        "Because there's only one position to read, there's no layout to memorise and no competing card meanings to reconcile. The card's symbolism is the entire message, which makes this spread easy to interpret even on your very first reading. Yet simplicity does not mean shallowness: focusing all your attention on one archetype often uncovers nuances that get lost inside larger ten-card layouts.",
        "Each of the 78 cards in a traditional Rider-Waite-Smith deck carries multiple layers of meaning — elemental energy (Fire, Water, Air, Earth), numerological momentum (from Aces of raw potential to Tens of culmination), and visual symbolism. With a single card pull, you have room to sit with those details rather than rushing past them to the next card.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a single card tarot reading",
      paragraphs: [
        "Reach for a single card pull when you want a quick check-in rather than a deep dive: a daily card ritual, a simple yes/no lean, or a fast read on how to approach the next few hours. It's also the right choice when your question is narrow and specific rather than sprawling across a relationship, career, or long time span — for those, a Three Card or Celtic Cross spread will usually serve you better.",
        "Many experienced readers actually prefer single-card draws for emotionally charged moments. When your mind is spinning on a single dilemma, pulling five or ten cards can multiply your anxiety instead of settling it. Drawing one clear card acts like a focal point, giving you one concrete lens through which to examine your reaction and your next small step.",
      ],
    },
    {
      id: "upright-vs-reversed",
      title: "Reading upright vs. reversed cards in a one card pull",
      paragraphs: [
        "When you draw only one card, orientation carries immediate weight. An upright card typically expresses its theme openly and externally: energy flows forward, obstacles are visible, and the card's qualities are readily available to you right now. For example, drawing The Sun upright highlights clarity, warmth, and visible progress.",
        "A reversed card in a single-card reading does not automatically mean 'bad news.' More often, it signals inward energy, a temporary delay, resistance, or an aspect of the card's lesson that needs quiet attention before it can move forward externally. A reversed Eight of Swords might point to realizing you are ready to release a self-imposed limit; a reversed Ace of Pentacles might ask you to check the practical foundations of a new plan before investing further.",
      ],
    },
    {
      id: "suit-and-rank-cues",
      title: "Reading suit & numerology cues in one card",
      paragraphs: [
        "Even before recalling a card's dictionary textbook paragraph, two quick observations unlock an accurate single-card interpretation: which suit landed (or whether it belongs to the Major Arcana), and what number from Ace to Ten it carries. Wands invite initiative, movement, and courage; Cups point toward emotional honesty or pacing your heart; Swords ask for clear thinking and boundaries; and Pentacles ground your focus in money, routines, sleep, and tangible craftsmanship.",
        "Numerologically, Aces signal a raw seed waiting to be planted, Fives bring productive disruption that forces adaptation, Sixes restore temporary harmony, and Tens mark exhaustion or completion right before a cycle resets. Reading suit + rank gives even first-time visitors immediate fluency.",
      ],
    },
    {
      id: "daily-ritual",
      title: "Building a mindful daily one-card ritual",
      paragraphs: [
        "The most rewarding way to learn tarot is consistency rather than complexity. Pulling a single card each morning over tea or coffee — and spending just two minutes noticing how its imagery mirrors what is on your mind — builds intuition far faster than memorizing flashcards. Over weeks, you begin recognizing your own recurring cards and personal patterns.",
        "Try pairing your morning pull with a single sentence in a journal: 'Today's card is [Card Name], and the theme I notice is...' At the end of the evening, glance back at the card for thirty seconds. Often a detail you overlooked at 8:00 AM — a figure's posture, a cup held out, or a stormy sky behind a calm foreground — turns out to describe the turning point of your day.",
      ],
    },
    {
      id: "sample-questions",
      title: "Best questions for a one card tarot reading",
      paragraphs: [
        "Open, grounded questions consistently yield richer single-card insights than anxious, predictive ones. Instead of asking 'Will everything go wrong this week?', try asking 'What mindset will serve me best in today's meeting?', 'What am I overlooking in this conversation?', or 'Where should I direct my energy before the day ends?'",
        "If you want to explore a yes-or-no dilemma, frame it clearly without hedging ('Should I send this message today?'), and pay attention not just to the lean of the card, but to the reasoning behind it. Even a single Minor Arcana card can point directly to timing, communication, or boundaries.",
      ],
    },
  ],
  samplePull: {
    question: "What posture will help me navigate a difficult conversation with my teammate today?",
    positions: [
      {
        position: "Position 1 · Core Message",
        card: "Queen of Cups (Upright)",
        reading:
          "Queen of Cups combines emotional steadiness with clear inner boundaries. Rather than reacting defensively or absorbing someone else's urgency as your own panic, the card advises listening deeply first while staying anchored in your own calm center. Notice what is left unsaid in their tone without rushing to fix discomfort prematurely.",
      },
    ],
    synthesis:
      "Lead with empathy, not urgency: pause two seconds before replying in today's discussion, validate what you actually hear, and state your boundary gently in one clear sentence.",
  },
  faqs: [
    {
      question: "How is a one card tarot reading different from a daily card?",
      answer:
        'They\'re the same mechanic — a single card drawn and interpreted. "Daily card" usually refers to doing this once a day as a ritual, while a one card reading can be drawn any time you have a specific question.',
    },
    {
      question: "Can I ask a yes or no question with one card?",
      answer:
        "Yes — a single card is commonly used for yes/no questions, reading upright cards as generally favourable and reversed cards as cautionary, alongside the card's specific meaning. For a reading framed explicitly around a yes/no question, see our Yes or No Tarot Reading.",
    },
    {
      question: "Is the interpretation the same every time I draw the same card?",
      answer:
        "The card's core meaning stays consistent, but AstroFree's AI interpretation weaves in the specific question you ask, so the guidance adapts even when the card repeats.",
    },
    {
      question: "Should I draw a second clarifier card if I don't understand the first?",
      answer:
        "Before pulling another card, sit with the first card for a minute and read both its keywords and its visual imagery. Often an unfamiliar card feels confusing simply because it challenges what we hoped to hear. If you genuinely want more context around timelines or influences, switch to a Three Card spread rather than stacking random clarifiers.",
    },
    {
      question: "What does it mean if the same single card follows me across multiple days?",
      answer:
        "Repeating cards are common in reflective practice and usually point to an unresolved theme or persistent mindset that deserves closer attention. Rather than treating repetition as fate, view it as an invitation to revisit what that archetype asks of you right now.",
    },
  ],
  relatedCards: [
    {
      slug: "the-fool",
      name: "The Fool",
      subtitle: "New beginnings, a leap of faith",
      base: "/tarot/$slug",
    },
    {
      slug: "the-sun",
      name: "The Sun",
      subtitle: "Clarity, joy, positive outcomes",
      base: "/tarot/$slug",
    },
    {
      slug: "the-star",
      name: "The Star",
      subtitle: "Hope, renewal, quiet optimism",
      base: "/tarot/$slug",
    },
    {
      slug: "the-moon",
      name: "The Moon",
      subtitle: "Uncertainty, intuition, illusion",
      base: "/tarot/$slug",
    },
  ],
  relatedLinks: [
    {
      to: "/tarot",
      label: "All 78 tarot card meanings",
      blurb: "Browse the full major and minor arcana library.",
    },
    {
      to: "/tarot/three-card",
      label: "Three Card Reading",
      blurb: "See how a situation moves from past to future.",
    },
    {
      to: "/guide/tarot-for-beginners",
      label: "Tarot for beginners",
      blurb: "Start with the foundations of reading cards.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
  ],
  ctaLabel: "Draw your card",
};

export const THREE_CARD_CONFIG: ReadingLandingConfig = {
  path: "/tarot/three-card",
  spreadId: "three-card",
  eyebrow: "Three Card Reading",
  h1: "Three Card Tarot Reading",
  intro:
    "The Three Card Tarot Reading is the classic next step up from a single card pull: three cards drawn into Past, Present, and Future positions, giving you the arc of a situation rather than just a snapshot of it.",
  published: "2026-08-16",
  updated: "2026-11-16",
  readingTime: "6 min read",
  sections: [
    {
      id: "how-it-works",
      title: "How the three card spread works",
      paragraphs: [
        "Three cards are drawn in sequence and placed into three positions: what has shaped the situation (Past), where you stand right now (Present), and where things are heading if the current pattern continues (Future). Each card is read both on its own and in relation to the others, since the real narrative lives in how the three cards transition from one to the next.",
        "AstroFree's AI interpretation writes one dedicated paragraph per card, connecting both its upright or reversed orientation and its position in the timeline, then finishes with a closing synthesis that weaves all three into a single, coherent read rather than three disconnected fragments.",
        "Notice the momentum across the row. Does the energy accelerate from passive Minor Arcana cards into a decisive Major Arcana card? Or does a grounded Earth card (Pentacles) in the Past shift into turbulent mental energy (Swords) in the Present? Watching how the energy moves left to right gives you far more insight than reading three isolated definitions.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a three card tarot spread",
      paragraphs: [
        "This spread suits situations that are unfolding rather than static — a relationship shifting, a project in motion, a personal transition, or a decision that's been building for a while. It's more revealing than a single card without the depth (and time) required by something like the Celtic Cross, which makes it the most popular general-purpose spread for everyday questions.",
        "If you feel stuck inside the middle of a story and cannot tell whether your current tension is old baggage or an incoming turning point, a three-card layout gives you immediate perspective. Seeing what belongs to the Past position helps you separate historical habits from what is actually happening in the Present.",
      ],
    },
    {
      id: "alternative-layouts",
      title: "Alternative ways readers frame three cards",
      paragraphs: [
        "Although Past / Present / Future is the classic default used here, experienced tarot readers love the three-card structure because the same three slots can adapt to almost any inner question. Common variations include Situation / Challenge / Advice (great for practical troubleshooting), Mind / Body / Spirit (ideal for wellness and emotional check-ins), and What Helps / What Hinders / What Unfolds.",
        "Even when using Past, Present, and Future, remember that the 'Future' card is never locked in stone. In reflective tarot practice, the third card shows the probable trajectory if nothing changes in your mindset or actions — meaning an uncomfortable third card acts as an early warning system you still have full agency to redirect.",
      ],
    },
    {
      id: "elemental-balance",
      title: "Reading elemental and Major Arcana patterns across three cards",
      paragraphs: [
        "Once you read each position individually, step back and scan the suit balance across all three cards. Three cards heavy in Cups signal emotional processing, empathy, or creative intuition; Swords highlight communication, analysis, or mental stress; Wands bring urgency, ambition, and creative fire; and Pentacles ground the question in finances, habits, health, or tangible work.",
        "Pay special attention when one or more Major Arcana cards appear in a three-card spread. While Minor Arcana cards typically describe day-to-day choices and passing moods, Major Arcana cards mark deeper turning points, life lessons, or archetypal shifts that carry longer-lasting significance.",
      ],
    },
    {
      id: "journaling-prompts",
      title: "Questions and journaling prompts for three-card spreads",
      paragraphs: [
        "To get the sharpest reading, frame your prompt around movement or evolution: 'How is my approach to this project shifting right now?', 'What have I carried into this chapter from the past, and where can I grow next?', or 'What is the arc of my creative momentum over the coming month?'",
        "After reading your synthesis, write down one sentence linking the Past card to the Present card — for example, 'Because I felt overextended (Ten of Wands) earlier, I am now pausing to re-evaluate (The Hermit).' Naming that bridge turns symbolic insight into genuine self-awareness.",
      ],
    },
  ],
  samplePull: {
    question: "How is my energy around launching an independent side project unfolding right now?",
    positions: [
      {
        position: "1 · Past",
        card: "Eight of Swords (Upright)",
        reading:
          "Over recent months, mental self-doubt and fear of choosing imperfectly kept you boxed in. Even when practical opportunities existed, internal hesitation made every option feel risky.",
      },
      {
        position: "2 · Present",
        card: "Two of Wands (Upright)",
        reading:
          "Today you have stepped back onto a higher vantage point and are actively weighing concrete plans. Instead of spinning in worry, you are comparing two tangible scopes and deciding where to commit.",
      },
      {
        position: "3 · Future",
        card: "Three of Pentacles (Upright)",
        reading:
          "If you stay grounded and execute step by step, the project moves naturally into collaborative craftsmanship — inviting feedback from a peer, mentor, or early client who strengthens the work.",
      },
    ],
    synthesis:
      "Notice the elemental arc from Swords (mental gridlock) through Wands (decisive planning) into Pentacles (real-world building). Stop rehearsing worst-case scenarios in private and share an early draft with someone whose craft you trust.",
  },
  faqs: [
    {
      question: "Is the three card spread good for beginners?",
      answer:
        "Yes — it's one of the two spreads we'd recommend starting with, alongside the One Card Reading. The fixed Past/Present/Future structure gives you a clear framework without the complexity of a ten-card layout.",
    },
    {
      question: "Can I use the three card spread for love or career questions?",
      answer:
        "You can, but AstroFree also offers dedicated Love and Career readings with positions built specifically for those topics, which usually give more targeted guidance than the general-purpose three card spread.",
    },
    {
      question: "What if two of my three cards seem to contradict each other?",
      answer:
        "That's common and meaningful rather than a sign of error — it often reflects genuine tension in the situation. The synthesis paragraph in your reading is written to address exactly that kind of contrast.",
    },
    {
      question: "Is the Future card in a three card reading permanent?",
      answer:
        "No. The Future position reflects the natural direction of your current momentum if patterns remain unchanged. You always retain free will to adjust your response based on what the Present card reveals.",
    },
    {
      question: "How far back and ahead do Past and Future reach?",
      answer:
        "Timeframes in tarot depend on the scope of your question. If you ask about this week, Past and Future usually span days; if you ask about a career transition, they may reflect months of buildup and upcoming change.",
    },
  ],
  relatedCards: [
    {
      slug: "wheel-of-fortune",
      name: "Wheel of Fortune",
      subtitle: "Cycles, change, turning points",
      base: "/tarot/$slug",
    },
    {
      slug: "the-hanged-man",
      name: "The Hanged Man",
      subtitle: "Pause, new perspective, surrender",
      base: "/tarot/$slug",
    },
    {
      slug: "the-world",
      name: "The World",
      subtitle: "Completion, arrival, wholeness",
      base: "/tarot/$slug",
    },
    {
      slug: "judgement",
      name: "Judgement",
      subtitle: "Reflection, reckoning, renewal",
      base: "/tarot/$slug",
    },
  ],
  relatedLinks: [
    {
      to: "/tarot",
      label: "All 78 tarot card meanings",
      blurb: "Browse the full major and minor arcana library.",
    },
    {
      to: "/tarot/celtic-cross",
      label: "Celtic Cross Reading",
      blurb: "Go deeper with the classic ten-card spread.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
    {
      to: "/guide/tarot-for-beginners",
      label: "Tarot for beginners",
      blurb: "Start with the foundations of reading cards.",
    },
  ],
  ctaLabel: "Start your reading",
};

export const LOVE_CONFIG: ReadingLandingConfig = {
  path: "/tarot/love",
  spreadId: "love",
  eyebrow: "Love Reading",
  h1: "Love Tarot Reading",
  intro:
    "The Love Tarot Reading lays out four cards — You, Partner, The Relationship, and Future — to illuminate the dynamics between you and another person, whether that's an existing relationship, a situationship, or someone you're still figuring out.",
  published: "2026-08-16",
  updated: "2026-11-16",
  readingTime: "6 min read",
  sections: [
    {
      id: "how-it-works",
      title: "How the love reading works",
      paragraphs: [
        "Four cards are drawn into four distinct positions: your own energy in the connection (You), the other person's energy as reflected through the cards (Partner), the shared dynamic between you (The Relationship), and where the bond appears to be heading (Future). Reading both people's positions side by side — rather than focusing solely on one person — is what makes this spread genuinely clarifying for interpersonal questions.",
        "AstroFree's AI interpretation reads each position against your stated question, notes whether cards appear upright or reversed, and then closes with a synthesis that names the relational pattern running through all four cards together.",
        "Sometimes the contrast between Position 1 (You) and Position 2 (Partner) explains everything. One person might draw an open, emotional Cups card while the other draws a cautious, defensive Swords card — revealing a mismatch in communication style or pacing rather than a lack of feeling.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a relationship tarot reading",
      paragraphs: [
        "This spread fits any question involving another person's energy alongside your own — a new connection you're unsure about, a long-term partnership moving through a quiet or strained chapter, or a question about whether to initiate an honest conversation. It's less suited to purely individual career or personal habit questions, where our Career Reading or Three Card spread reads more accurately.",
        "A love reading reflects emotional patterns and relational dynamics, never a guaranteed fate. Tarot cannot override another person's choices or promise what someone else will decide tomorrow; instead, it offers a calm mirror so you can see your own expectations, boundaries, and needs clearly.",
      ],
    },
    {
      id: "four-positions",
      title: "Understanding each of the four relationship positions",
      paragraphs: [
        "Position 1 (You) shows what you are actively bringing into the bond — your hopes, emotional bandwidth, or unspoken fears. Position 2 (Partner) highlights the energy or posture the other person is displaying from your vantage point, whether that is enthusiasm, hesitation, distraction, or quiet care.",
        "Position 3 (The Relationship) captures the 'third entity' you create together: the tone of your communication, shared values, or recurring friction. Finally, Position 4 (Future) maps the likely evolution of that shared dynamic if both people continue showing up in the same way.",
      ],
    },
    {
      id: "suits-in-love",
      title: "How the four tarot suits speak in love readings",
      paragraphs: [
        "While everyone watches for iconic romance cards like The Lovers or Two of Cups, every suit reveals something vital about connection. Cups reflect emotional openness, tenderness, and vulnerability; Wands show chemistry, passion, and shared excitement; Pentacles point toward reliability, long-term commitment, and day-to-day stability; and Swords highlight honest dialogue, mental clarity, or unresolved doubts.",
        "Notice too that traditionally 'challenging' cards like Five of Cups or Three of Swords do not automatically doom a relationship. In reflective readings, they frequently mark grief that needs acknowledgment or an old pattern of guarding your heart that is finally ready to heal.",
      ],
    },
    {
      id: "healthy-questions",
      title: "Asking grounded, empowering relationship questions",
      paragraphs: [
        "The most transformative love readings focus on clarity and agency rather than mind-reading. Questions such as 'What does this connection need from me right now?', 'Where are we misunderstanding each other?', or 'How can I approach this conversation honestly?' give you insights you can act on immediately.",
        "Try to avoid pulling repeated spreads out of anxiety every few hours about the same text message or silence. Give a relationship spread room to breathe, reflect on what Position 1 and Position 3 showed you, and let real-world communication do the rest.",
      ],
    },
  ],
  samplePull: {
    question: "Why does communication feel guarded between us lately, and how can we soften it?",
    positions: [
      {
        position: "1 · You",
        card: "Page of Cups (Upright)",
        reading:
          "You are genuinely open to tenderness, heartfelt conversation, and restarting on a softer note, even if you feel slightly vulnerable initiating it first.",
      },
      {
        position: "2 · Partner",
        card: "Four of Pentacles (Reversed)",
        reading:
          "The other person appears to be releasing an old habit of holding feelings tightly behind defensive control, though doing so still feels unfamiliar and awkward.",
      },
      {
        position: "3 · The Relationship",
        card: "Two of Swords (Upright)",
        reading:
          "Between you sits an unspoken stalemate — both sides avoiding a direct question for fear of saying the wrong thing and tipping the delicate balance.",
      },
      {
        position: "4 · Future",
        card: "Temperance (Upright)",
        reading:
          "Patient, low-stakes dialogue restores steady emotional reciprocity over time once neither person demands an instant all-or-nothing resolution.",
      },
    ],
    synthesis:
      "No lack of care is visible here — the stalemate in Position 3 stems from mutual caution rather than coldness. Open one calm, low-pressure conversation focused on listening rather than fixing everything in one sitting.",
  },
  faqs: [
    {
      question: "Can a love tarot reading tell me if someone likes me?",
      answer:
        "It can offer a reflective read on the energy between you, but tarot describes patterns and possibilities, not certainties — it isn't a substitute for an honest conversation with the person.",
    },
    {
      question: "What if I'm not currently in a relationship?",
      answer:
        "The spread still works for a situationship, a crush, or someone you're considering reconnecting with — just set your intention around that specific connection before drawing.",
    },
    {
      question: "Is this reading appropriate for a breakup or divorce question?",
      answer:
        "Yes, many people use it that way — set your question around the relationship's current state or path forward rather than framing it as You vs Partner in conflict.",
    },
    {
      question: "Does drawing The Tower or Death in a love reading mean a breakup?",
      answer:
        "Not necessarily. In relationship spreads, Death almost always symbolizes a necessary transformation — leaving behind an outdated dynamic so a more honest chapter can begin — while The Tower often marks a sudden breakthrough conversation that clears stagnant air.",
    },
    {
      question: "Can I use the Love spread for friendships or family dynamics?",
      answer:
        "Yes. Any close interpersonal bond — a close friend, sibling, or creative collaborator — maps cleanly onto You, Them, The Bond, and Future.",
    },
  ],
  relatedCards: [
    {
      slug: "the-lovers",
      name: "The Lovers",
      subtitle: "Connection, choice, union",
      base: "/tarot/$slug",
    },
    {
      slug: "two-of-cups",
      name: "Two of Cups",
      subtitle: "Mutual attraction, partnership",
      base: "/tarot/$slug",
    },
    {
      slug: "ten-of-cups",
      name: "Ten of Cups",
      subtitle: "Lasting happiness, harmony",
      base: "/tarot/$slug",
    },
    {
      slug: "the-tower",
      name: "The Tower",
      subtitle: "Sudden change, upheaval, truth",
      base: "/tarot/$slug",
    },
  ],
  relatedLinks: [
    {
      to: "/tarot",
      label: "All 78 tarot card meanings",
      blurb: "Browse the full major and minor arcana library.",
    },
    {
      to: "/career-tarot-reading",
      label: "Career Reading",
      blurb: "Get clarity on work and direction with the same 4-card structure.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
    {
      to: "/guide/tarot-card-meanings",
      label: "Tarot card meanings guide",
      blurb: "Quick-reference every card's upright and reversed meaning.",
    },
  ],
  ctaLabel: "Start your love reading",
};

export const YES_NO_CONFIG: ReadingLandingConfig = {
  path: "/yes-no-tarot",
  spreadId: "single",
  eyebrow: "Yes or No Reading",
  h1: "Yes or No Tarot Reading",
  intro:
    "The Yes or No Tarot Reading uses a single card, drawn upright or reversed, to give a clear lean on a direct question. It's the same single-card mechanic as our One Card Reading, framed specifically around questions that have a yes/no shape rather than an open-ended one.",
  published: "2026-08-16",
  updated: "2026-11-16",
  readingTime: "6 min read",
  sections: [
    {
      id: "how-it-works",
      title: "How a yes or no tarot reading works",
      paragraphs: [
        'Phrase your question so it genuinely has a yes/no shape — "should I take this role?" reads much more cleanly than "what should I do about my career?" — then draw a single card from the 78-card deck. Traditionally, upright cards lean toward yes and reversed cards lean toward no or "not yet," though the card\'s actual archetype always outweighs orientation alone.',
        "For instance, The Tower upright is still a signal to pause and examine unstable foundations, while The Star reversed may simply mean yes, provided you rebuild confidence first rather than rushing ahead.",
        'AstroFree\'s interpretation does not flatten tarot into a sterile coin flip. Instead of outputting a bare "yes" or "no," the reading explains the reasoning behind the directional lean using the card\'s symbolism, element, and timing cues so you understand the condition underneath the answer.',
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a yes/no tarot pull",
      paragraphs: [
        'This spread works best for direct, timely questions where you want a quick directional read rather than a sweeping analysis — "is this week a good moment to pitch my idea?" or "should I attend this event?" For decisions involving two competing choices or deep emotional history, the Three Card Reading or Celtic Cross spread gives you the context a binary answer leaves out.',
        "A yes/no pull is also surprisingly helpful as a gut-check mirror: notice your instant emotional reaction the moment the card flips. If you draw a cautious 'no' and feel quietly relieved, your intuition already knew your true answer before you shuffled.",
      ],
    },
    {
      id: "yes-no-maybe-spectrum",
      title: "Understanding Yes, No, and Conditional 'Maybe' cards",
      paragraphs: [
        "Experienced readers view yes/no tarot across a three-part spectrum rather than strict absolutes. Cards of expansion, clarity, and fruition — such as The Sun, Ace of Wands, Six of Wands, Nine of Cups, or Ten of Pentacles — naturally carry an enthusiastic 'Yes' lean when upright.",
        "Cards associated with illusion, inner conflict, or suspension — like The Moon, Two of Swords, Seven of Cups, or The Hanged Man — commonly signal 'Maybe' or 'Wait for clearer facts.' Meanwhile, cards of sharp friction or depletion (Three of Swords, Five of Pentacles, Ten of Swords) or reversed momentum typically urge a protective 'No' or suggest changing your timing before acting.",
      ],
    },
    {
      id: "major-vs-minor-weight",
      title: "Major Arcana gravity vs. Minor Arcana timing",
      paragraphs: [
        "Pay close attention to whether your yes/no pull lands on a Major Arcana card or a Minor Arcana card. Major Arcana cards carry long-range archetypal weight: drawing Judgement or The Wheel of Fortune suggests the question touches a significant turning point or deeper personal lesson.",
        "Minor Arcana cards speak to everyday practicality and faster-moving circumstances. An upright Knight of Wands says 'move swiftly while enthusiasm is high,' whereas an upright Four of Pentacles suggests holding your resources steady rather than spending or committing impulsively.",
      ],
    },
    {
      id: "framing-questions",
      title: "How to phrase clear yes or no questions",
      paragraphs: [
        "Avoid double-barreled or negative questions like 'Should I quit my job or stay until December?' — a single card cannot answer two different paths at once. Split compound questions into one clear proposition, such as 'Is leaving this role in the next month aligned with my growth?'",
        "Equally important: avoid health diagnoses, legal outcomes, or high-stakes financial wagers. Treat a yes or no tarot draw as a thoughtful sounding board that clarifies your own priorities rather than a substitute for real-world verification.",
      ],
    },
  ],
  samplePull: {
    question: "Is this month the right time to propose my new workflow idea at work?",
    positions: [
      {
        position: "Single Card · Directional Lean",
        card: "Seven of Pentacles (Upright) — Conditional Yes",
        reading:
          "Seven of Pentacles leans yes, but with a patient, measured tempo. The groundwork you already invested is bearing quiet fruit; however, rushing a half-finished pitch tomorrow could undersell the value. Take one more week to gather concrete metrics before presenting.",
      },
    ],
    synthesis:
      "Directional answer: Conditional Yes — prepare your supporting data carefully, then pitch from a position of calm patience rather than urgency.",
  },
  faqs: [
    {
      question: "How accurate is a yes or no tarot reading?",
      answer:
        "Tarot doesn't predict outcomes with certainty — it reflects patterns and energy connected to your question. Treat the yes/no lean as a prompt for your own judgement, not a guaranteed forecast.",
    },
    {
      question: "What if I get a card that doesn't clearly mean yes or no?",
      answer:
        'Some cards are genuinely ambiguous by design — that\'s often the most useful answer, pointing to a "maybe, depending on X" rather than a clean binary. The written interpretation will explain the nuance.',
    },
    {
      question: "Can I ask the same yes/no question twice?",
      answer:
        "You can, but re-asking the same question repeatedly until you get the answer you want defeats the purpose of the reflection. If the question still feels unresolved, try reframing it instead.",
    },
    {
      question: "Do reversed cards always mean 'No' in a yes or no reading?",
      answer:
        "Not always. While reversals often indicate delay, blockage, or a cautionary 'no,' positive cards like The Sun or The Empress reversed may instead point to a quiet 'yes, once you slow down or address an internal block.'",
    },
    {
      question: "Why not just flip a coin instead of drawing a tarot card?",
      answer:
        "A coin only gives heads or tails without context. A tarot card pairs directional momentum with rich symbolism — showing you why a path feels aligned or what hidden obstacle deserves attention before you decide.",
    },
  ],
  relatedCards: [
    { slug: "the-sun", name: "The Sun", subtitle: "A strong, clear yes", base: "/tarot/$slug" },
    {
      slug: "the-tower",
      name: "The Tower",
      subtitle: "A caution, often a no",
      base: "/tarot/$slug",
    },
    {
      slug: "the-moon",
      name: "The Moon",
      subtitle: "Unclear — more information needed",
      base: "/tarot/$slug",
    },
    { slug: "the-star", name: "The Star", subtitle: "A hopeful, gentle yes", base: "/tarot/$slug" },
  ],
  relatedLinks: [
    {
      to: "/tarot",
      label: "All 78 tarot card meanings",
      blurb: "Browse the full major and minor arcana library.",
    },
    {
      to: "/tarot/one-card",
      label: "One Card Reading",
      blurb: "The same single-card pull, framed for open-ended questions.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
    {
      to: "/guide/tarot-card-meanings",
      label: "Tarot card meanings guide",
      blurb: "Check every card's yes/no leaning at a glance.",
    },
  ],
  ctaLabel: "Get your yes or no",
};

export const CAREER_CONFIG: ReadingLandingConfig = {
  path: "/career-tarot-reading",
  spreadId: "career",
  eyebrow: "Career Reading",
  h1: "Career Tarot Reading",
  intro:
    "The Career Tarot Reading lays out four cards — Where You Are, Challenge, Advice, and Outcome — to bring clarity to work decisions: a stuck project, a job change you're weighing, or a general sense that your current path doesn't quite fit anymore.",
  published: "2026-08-16",
  updated: "2026-11-16",
  readingTime: "6 min read",
  sections: [
    {
      id: "how-it-works",
      title: "How the career reading works",
      paragraphs: [
        "Four cards are drawn into four structured positions: Where You Are (your current professional stance), Challenge (what is creating friction or holding momentum back), Advice (the practical posture or mindset most likely to unlock progress), and Outcome (where the trajectory leads if you apply that guidance).",
        "Because the layout moves deliberately from diagnosis to strategy, the reading concludes with something constructive you can act on rather than leaving you with vague observations about workplace stress.",
        "AstroFree's AI interpretation connects each card directly to your stated work context — whether you are preparing for an interview, considering an industry pivot, negotiating responsibilities, or deciding whether to launch an independent venture.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use a career tarot reading",
      paragraphs: [
        "This spread fits any work, study, or vocational question: weighing a job offer, navigating tension with a manager or co-founder, diagnosing creative burnout, or checking whether a side project is ready to scale. For broader questions about personal growth or identity outside work, the Three Card or Celtic Cross spread may give you a wider frame.",
        "As with every reading on AstroFree, career tarot is a strategic reflection tool, not financial or legal counsel. Treat the Advice and Outcome cards as structured prompts to challenge blind spots alongside real market research and trusted mentors.",
      ],
    },
    {
      id: "four-positions-career",
      title: "Breaking down the four career positions",
      paragraphs: [
        "Position 1 (Where You Are) often reveals an inner reality you haven't admitted yet — perhaps you look successful on paper (Nine of Pentacles) while feeling quietly restless (Four of Cups). Naming your starting point honestly makes every decision afterward clearer.",
        "Position 2 (Challenge) distinguishes external obstacles (budget freezes, rigid hierarchy) from internal blockers (imposter syndrome, perfectionism, fear of visibility). Position 3 (Advice) then offers a direct counterweight, and Position 4 (Outcome) previews the realistic direction of that adjusted path.",
      ],
    },
    {
      id: "suits-at-work",
      title: "What the four tarot suits mean in a career spread",
      paragraphs: [
        "Every suit maps cleanly onto real workplace dynamics. Pentacles govern income, craft, steady skill-building, and long-term security — cards like Eight of Pentacles or Three of Pentacles celebrate mastery and reliable teamwork. Wands represent ambition, entrepreneurship, leadership energy, and creative drive.",
        "Swords highlight strategy, contracts, intellectual problem-solving, and clear communication — though reversed Swords can warn against burnout from overthinking. Cups reflect workplace culture, purpose, fulfillment, and how emotionally nourished you feel by what you build every day.",
      ],
    },
    {
      id: "practical-next-steps",
      title: "Turning tarot insight into concrete work action",
      paragraphs: [
        "Once you finish reading your spread, translate the Advice card into one small action within 48 hours. If The Magician appears in Advice, update your portfolio or pitch the idea you've been sitting on; if Four of Swords shows up, protect an uninterrupted evening of rest before making any major resignation or contract call.",
        "Pairing your Career Tarot Reading with your Personal Year number in our Numerology Calculator can also illuminate timing — showing whether this year favors bold expansion (Personal Year 1 or 5) or patient consolidation (Personal Year 4 or 7).",
      ],
    },
  ],
  samplePull: {
    question: "Should I apply for the senior product lead opening or focus on deepening my current specialist role?",
    positions: [
      {
        position: "1 · Where You Are",
        card: "Eight of Pentacles (Upright)",
        reading:
          "You have built rock-solid technical credibility through disciplined daily craft. Colleagues already rely on your thoroughness, which gives you strong leverage no matter which route you choose.",
      },
      {
        position: "2 · Challenge",
        card: "Six of Swords (Reversed)",
        reading:
          "The friction comes from hesitation about leaving familiar territory — lingering comfort and fear of unfamiliar stakeholder politics make transition feel heavier than it actually is.",
      },
      {
        position: "3 · Advice",
        card: "Knight of Wands (Upright)",
        reading:
          "Step forward with bold curiosity and showcase your vision publicly instead of waiting passively for someone to tap you on the shoulder.",
      },
      {
        position: "4 · Outcome",
        card: "Six of Wands (Upright)",
        reading:
          "Putting your hat in the ring brings visible recognition and restored confidence in your trajectory, reinforcing that your growth depends on embracing larger visibility.",
      },
    ],
    synthesis:
      "Your skills (Eight of Pentacles) are already ready; the real bottleneck is hesitation around transitioning (Six of Swords Reversed). Prepare a concise case study of three wins and submit the application this week.",
  },
  faqs: [
    {
      question: "Can a career tarot reading tell me if I'll get a job or promotion?",
      answer:
        "No — it reflects the energy and patterns around your current path, not a guaranteed outcome. Use the Outcome card as a likely direction if things continue as they are, not a certainty.",
    },
    {
      question: "Is this reading suitable for business or entrepreneurship questions?",
      answer:
        'Yes, the same four positions work well for business decisions — treat "Where you are" as your business\'s current state and "Outcome" as where that path is heading.',
    },
    {
      question: "How specific should my career question be?",
      answer:
        'More specific tends to give a more useful reading. "Should I leave my current job for the offer I received?" will read more clearly than a broad "what should I do with my career?"',
    },
    {
      question: "What if I draw Ten of Wands or Five of Pentacles in a career spread?",
      answer:
        "Those cards rarely predict permanent failure — instead, they highlight overcommitment, under-compensation, or carrying responsibilities that belong elsewhere. In Advice or Challenge, they nudge you to delegate, renegotiate boundaries, or ask for support.",
    },
    {
      question: "Can students or job-seekers use the career tarot spread?",
      answer:
        "Yes. Whether you are choosing an academic track, returning to work after a break, or interviewing after a layoff, the four positions adapt naturally to learning, preparation, and next steps.",
    },
  ],
  relatedCards: [
    {
      slug: "the-emperor",
      name: "The Emperor",
      subtitle: "Structure, authority, discipline",
      base: "/tarot/$slug",
    },
    {
      slug: "eight-of-pentacles",
      name: "Eight of Pentacles",
      subtitle: "Skill-building, diligence",
      base: "/tarot/$slug",
    },
    {
      slug: "ten-of-wands",
      name: "Ten of Wands",
      subtitle: "Overload, burnout, burden",
      base: "/tarot/$slug",
    },
    {
      slug: "the-magician",
      name: "The Magician",
      subtitle: "Resourcefulness, new ventures",
      base: "/tarot/$slug",
    },
  ],
  relatedLinks: [
    {
      to: "/tarot",
      label: "All 78 tarot card meanings",
      blurb: "Browse the full major and minor arcana library.",
    },
    {
      to: "/tarot/three-card",
      label: "Three Card Reading",
      blurb: "See a broader arc across past, present, and future.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
    {
      to: "/numerology",
      label: "Numerology Calculator",
      blurb: "Pair your reading with your Personal Year forecast.",
    },
  ],
  ctaLabel: "Start your career reading",
};

export const CELTIC_CROSS_CONFIG: ReadingLandingConfig = {
  path: "/tarot/celtic-cross",
  spreadId: "celtic-cross",
  eyebrow: "Celtic Cross Reading",
  h1: "Celtic Cross Tarot Reading",
  intro:
    "The Celtic Cross is the most well-known tarot spread in the world: ten cards covering the present situation, the challenge crossing it, its past roots, near future, conscious aims, subconscious drivers, advice, external influences, hopes and fears, and the likely outcome. It's the spread to reach for when a question is layered, high-stakes, or hard to untangle in a quick pull.",
  published: "2026-08-16",
  updated: "2026-11-18",
  readingTime: "8 min read",
  positionsBreakdown: [
    {
      number: 1,
      label: "Present",
      focus: "Heart of the matter",
      description: "Where you stand right now — the immediate atmosphere, core tension, or primary theme surrounding your question.",
    },
    {
      number: 2,
      label: "Challenge",
      focus: "Crossing influence",
      description: "What intersects or complicates the Present card — an obstacle, competing priority, or lesson asking to be integrated.",
    },
    {
      number: 3,
      label: "Past",
      focus: "Root pattern",
      description: "Earlier events, beliefs, or habits that built the foundation beneath today's situation and continue shaping it.",
    },
    {
      number: 4,
      label: "Future",
      focus: "Approaching shift",
      description: "Where energy is leaning next over the coming weeks if current momentum stays on its present track.",
    },
    {
      number: 5,
      label: "Conscious",
      focus: "Stated goal",
      description: "Your conscious hopes, logical plan, and the best outcome you are openly aiming toward.",
    },
    {
      number: 6,
      label: "Subconscious",
      focus: "Hidden driver",
      description: "Unspoken instincts, gut feelings, or deeper emotional motivations operating below conscious awareness.",
    },
    {
      number: 7,
      label: "Advice",
      focus: "Recommended posture",
      description: "The constructive attitude, boundary, or action most likely to move the situation forward cleanly.",
    },
    {
      number: 8,
      label: "External Influences",
      focus: "Environment & others",
      description: "Other people, timing, workplace conditions, or outside factors influencing the path around you.",
    },
    {
      number: 9,
      label: "Hopes / Fears",
      focus: "Inner expectations",
      description: "What you quietly desire — or secretly dread — happening as this chapter unfolds.",
    },
    {
      number: 10,
      label: "Outcome",
      focus: "Culminating trajectory",
      description: "The likely synthesis and direction of all nine preceding positions if you follow the guidance shown in Position 7.",
    },
  ],
  sections: [
    {
      id: "how-it-works",
      title: "How the Celtic Cross spread works",
      paragraphs: [
        "Ten cards are dealt into ten fixed positions, each illuminating a distinct layer of the situation: the heart of the matter (1), what crosses or challenges you (2), the hidden foundation beneath it (3), what is passing away (4), the highest potential or conscious goal (5), what is approaching next (6), how you see yourself (7), outside influences around you (8), your hopes and fears (9), and finally the likely outcome (10).",
        "Because ten cards carry dramatically more nuance than a quick pull, AstroFree writes a dedicated paragraph for every position and then weaves all ten into a comprehensive closing synthesis — giving you a structured, readable narrative rather than ten disconnected dictionary entries.",
        "For a full position-by-position reference with worked reading tips, see our companion step-by-step Celtic Cross guide.",
      ],
    },
    {
      id: "when-to-use",
      title: "When to use the Celtic Cross",
      paragraphs: [
        "Reach for the Celtic Cross when your question is complex, multi-layered, or carries real emotional stakes — a major career pivot, a long-term relationship crossroads, moving to a new city, or a chapter where shorter spreads have only scratched the surface.",
        "It is intentionally unhurried. If you only need a fast morning check-in or a single directional lean, the One Card or Three Card reading is lighter and easier to digest. Save the Celtic Cross for moments when you have ten or fifteen quiet minutes to reflect.",
      ],
    },
    {
      id: "cross-and-staff",
      title: "Anatomy of the Cross (1–6) and the Staff (7–10)",
      paragraphs: [
        "Most readers mentally divide the Celtic Cross into two halves. Positions 1 through 6 form the Cross: they examine the situation itself — the core tension between Positions 1 and 2, the timeline flowing horizontally from Position 4 (Recent Past) to Position 6 (Near Future), and the vertical axis connecting subconscious roots (Position 3) with conscious aspirations (Position 5).",
        "Positions 7 through 10 form the Staff on the right side, shifting the lens toward psychology and context. Position 7 mirrors your inner attitude, Position 8 reflects people or external circumstances shaping the arena, Position 9 exposes what you secretly wish for or dread, and Position 10 integrates everything into the culminating trajectory.",
      ],
    },
    {
      id: "pattern-spotting",
      title: "Spotting dominant suits, court cards, and Major Arcana",
      paragraphs: [
        "After reading the ten positions in order, step back and look for repetition. If four or more cards belong to the same suit — say, Swords or Pentacles — that element names the true centerpiece of the issue, even if your question sounded like it belonged to another area of life.",
        "Similarly, three or more Court Cards (Pages, Knights, Queens, Kings) often indicate that multiple personalities, mentors, or competing roles are influencing the outcome. Multiple Major Arcana cards signal a milestone chapter where deeper personal growth matters just as much as immediate logistics.",
      ],
    },
    {
      id: "preparing-your-reading",
      title: "Getting the most out of a ten-card reading",
      paragraphs: [
        "Before drawing, write down or state your question in plain, honest language. Broad, open framing such as 'Help me understand what is unfolding in my creative life and career over the next six months' works far better across ten cards than a narrow yes/no question.",
        "Once your synthesis appears, pay attention to the relationship between Position 3 (Foundation), Position 9 (Hopes & Fears), and Position 10 (Outcome). Very often, shifting an unspoken fear revealed in Position 9 directly unlocks a healthier outcome.",
      ],
    },
  ],
  samplePull: {
    question: "How can I navigate the next six months of relocating to a new city and restarting my work?",
    positions: [
      {
        position: "1 · Present & 2 · Challenge",
        card: "The Fool (Upright) crossed by Four of Pentacles (Upright)",
        reading:
          "A genuine willingness to start fresh (The Fool) sits directly in tension with clinging tightly to security, old routines, and financial caution (Four of Pentacles). Growth requires smart budgeting without letting fear freeze movement.",
      },
      {
        position: "3 · Foundation & 5 · Crown",
        card: "Nine of Wands (Upright) beneath The Star (Upright)",
        reading:
          "Your resilience comes from hard-earned endurance through past setbacks (Nine of Wands), while your conscious aspiration (The Star) seeks calmer purpose, community healing, and creative renewal.",
      },
      {
        position: "7 · Self, 9 · Hopes & Fears, 10 · Outcome",
        card: "Queen of Pentacles · Two of Cups · The World (Upright)",
        reading:
          "Seeing yourself as capable and practical (Queen of Pentacles) while craving genuine belonging (Two of Cups) points toward The World in Outcome: closing an older chapter cleanly and establishing rooted wholeness in the new setting.",
      },
    ],
    synthesis:
      "When reading the full ten-card arc, practical grounding pairs with major life integration (The Fool in 1 moving into The World in 10). Build a transparent cash runway to satisfy Position 2, then give new local friendships room to take root.",
  },
  faqs: [
    {
      question: "How long does a Celtic Cross reading take?",
      answer:
        "Around 15 minutes to read through properly, given there are ten positions to work through plus a closing synthesis. It's the most involved spread AstroFree offers.",
    },
    {
      question: "Do I need tarot experience to read a Celtic Cross spread?",
      answer:
        "No — AstroFree's AI interpretation writes out the meaning of every position in plain language, so you don't need to already know the traditional layout to follow the reading.",
    },
    {
      question: "What's the difference between the Celtic Cross and a Three Card Reading?",
      answer:
        "Both use a Past/Present/Future-style logic, but the Celtic Cross adds seven more positions — challenge, foundation, hopes and fears, outside influences, and more — for a far more detailed picture. Use the Three Card Reading for lighter questions and the Celtic Cross when you want the full depth.",
    },
    {
      question: "Why does Position 2 'cross' Position 1 — is it always negative?",
      answer:
        "No. Although Position 2 is often called the Challenge or Crossing card, it represents whatever intersects with the main situation. Sometimes a positive card there shows an opportunity you aren't sure how to integrate yet, or an asset you are overlooking.",
    },
    {
      question: "Can I revisit a Celtic Cross reading weeks later?",
      answer:
        "Yes — in fact, the Celtic Cross rewards revisiting. Saving your reading to your local journal and re-reading Positions 6, 8, and 10 a month later is one of the best ways to notice how subtle symbols played out in real life.",
    },
  ],
  relatedCards: [
    {
      slug: "wheel-of-fortune",
      name: "Wheel of Fortune",
      subtitle: "Cycles, fate, turning points",
      base: "/tarot/$slug",
    },
    {
      slug: "the-hermit",
      name: "The Hermit",
      subtitle: "Introspection, seeking answers within",
      base: "/tarot/$slug",
    },
    {
      slug: "the-world",
      name: "The World",
      subtitle: "Completion, integration, arrival",
      base: "/tarot/$slug",
    },
    {
      slug: "strength",
      name: "Strength",
      subtitle: "Quiet courage, resilience",
      base: "/tarot/$slug",
    },
  ],
  relatedLinks: [
    {
      to: "/guide/celtic-cross-guide",
      label: "Celtic Cross step-by-step guide",
      blurb: "A full walkthrough of all ten positions.",
    },
    {
      to: "/tarot",
      label: "All 78 tarot card meanings",
      blurb: "Browse the full major and minor arcana library.",
    },
    {
      to: "/tarot/three-card",
      label: "Three Card Reading",
      blurb: "A lighter spread for quicker questions.",
    },
    {
      to: "/guide/tarot-spreads",
      label: "All tarot spreads",
      blurb: "Compare every spread AstroFree offers.",
    },
  ],
  ctaLabel: "Begin the Celtic Cross",
};

export const TAROT_LANDINGS: Record<TarotLandingKey, ReadingLandingConfig> = {
  "one-card": ONE_CARD_CONFIG,
  "three-card": THREE_CARD_CONFIG,
  love: LOVE_CONFIG,
  "yes-no": YES_NO_CONFIG,
  career: CAREER_CONFIG,
  "celtic-cross": CELTIC_CROSS_CONFIG,
};
