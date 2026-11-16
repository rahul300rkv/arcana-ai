export interface UniqueCardCopy {
  /** Two original paragraphs describing Rider-Waite-Smith visual imagery & core archetype. */
  overview: [string, string];
  /** Two original paragraphs unpacking upright expression and practical conditions. */
  upright: [string, string];
  /** Two original paragraphs unpacking reversed expression without generic templates. */
  reversed: [string, string];
  /** Two original paragraphs covering romantic partnerships, singles, and emotional bonds. */
  love: [string, string];
  /** Two original paragraphs covering work, projects, leadership, and study. */
  career: [string, string];
  /** Two original paragraphs covering spending, earning, risk, and financial habits. */
  finance: [string, string];
  /** Two original paragraphs covering vitality, stress signals, and grounded wellbeing. */
  health: [string, string];
  /** Two original paragraphs covering inner lesson, values, and contemplative practice. */
  spiritual: [string, string];
  /** Card-specific explanation for Yes / No / Conditional draws. */
  yesNoText: string;
  /** Unique past, present, and future reading angles. */
  timeline: [string, string, string];
  /** Three card-specific practical steps. */
  advice: [string, string, string];
  /** Three unique reflective journal prompts. */
  journalPrompts: [string, string, string];
  /** Card-specific meditation or visualization practice. */
  meditation: string;
  /** Distinct affirmation anchored in this card's voice. */
  affirmation: string;
  /** Four card-specific FAQs exploring imagery, combinations, or common questions. */
  faqs: Array<{ question: string; answer: string }>;
}
