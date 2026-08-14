/**
 * Hindi + Hinglish translations for each card's upright/reversed meaning.
 * Layered on top of deck.json rather than restructuring it, so the English
 * data stays the single source of truth for card identity (name, image, etc).
 *
 * Scope note: this covers Hindi and Hinglish only. The other 10 supported
 * languages (Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, Malayalam,
 * Punjabi, Odia, Assamese) fall back to English for these two fields via
 * card-i18n.ts — translating all 78 cards accurately into 10 more scripts
 * is a substantial follow-on content project. Love/career/finance/
 * spirituality meanings remain English-only in every language for now.
 */

export interface CardMeaningTranslation {
  upright: string;
  reversed: string;
}

export const cardMeaningTranslations: Record<
  string,
  { hi: CardMeaningTranslation; hinglish: CardMeaningTranslation }
> = {
  "major-00": {
    hi: {
      upright: "नई शुरुआत, मासूमियत, सहजता, एक स्वतंत्र आत्मा",
      reversed: "लापरवाही, फायदा उठाया जाना, अविवेक",
    },
    hinglish: {
      upright: "Nayi shuruaat, innocence, spontaneity, ek free spirit",
      reversed: "Recklessness, kisi ne fayda uthaya, thoughtless approach",
    },
  },
  "major-01": {
    hi: {
      upright: "अभिव्यक्ति, संसाधनशीलता, शक्ति, प्रेरित कार्य",
      reversed: "छल-कपट, कमज़ोर योजना, अनछुई प्रतिभाएं",
    },
    hinglish: {
      upright: "Manifestation, resourcefulness, power, inspired action",
      reversed: "Manipulation, weak planning, talent jo abhi tak use nahi hua",
    },
  },
  "major-02": {
    hi: {
      upright: "अंतर्ज्ञान, पवित्र ज्ञान, दिव्य स्त्रीत्व, अवचेतन मन",
      reversed: "रहस्य, अंतर्ज्ञान से कटाव, पीछे हटना",
    },
    hinglish: {
      upright: "Intuition, sacred knowledge, divine feminine energy, subconscious mind",
      reversed: "Secrets, apne intuition se disconnect, peeche hatna",
    },
  },
  "major-03": {
    hi: {
      upright: "स्त्रीत्व, सुंदरता, प्रकृति, पोषण, प्रचुरता",
      reversed: "रचनात्मक अवरोध, निर्भरता, अत्यधिक नियंत्रण",
    },
    hinglish: {
      upright: "Femininity, beauty, nature, nurturing, abundance",
      reversed: "Creative block, dependence, zyada overprotective hona",
    },
  },
  "major-04": {
    hi: {
      upright: "अधिकार, संरचना, नियंत्रण, पितृत्व",
      reversed: "प्रभुत्व, अत्यधिक नियंत्रण, कठोरता",
    },
    hinglish: {
      upright: "Authority, structure, control, fatherhood",
      reversed: "Domination, zaroorat se zyada control, rigidity",
    },
  },
  "major-05": {
    hi: {
      upright: "परंपरा, अनुरूपता, नैतिकता, सिद्धांत, आध्यात्मिकता",
      reversed: "विद्रोह, तोड़-फोड़ की प्रवृत्ति, नए दृष्टिकोण",
    },
    hinglish: {
      upright: "Tradition, conformity, morality, ethics, spirituality",
      reversed: "Rebellion, purani soch todna, naye approaches",
    },
  },
  "major-06": {
    hi: {
      upright: "प्रेम, सामंजस्य, रिश्ते, मूल्यों का मेल",
      reversed: "असामंजस्य, असंतुलन, मूल्यों में बेमेल",
    },
    hinglish: {
      upright: "Love, harmony, relationships, values ka alignment",
      reversed: "Disharmony, imbalance, values match nahi karna",
    },
  },
  "major-07": {
    hi: {
      upright: "नियंत्रण, इच्छाशक्ति, सफलता, कार्य, दृढ़ संकल्प",
      reversed: "नियंत्रण की कमी, दिशा की कमी, आक्रामकता",
    },
    hinglish: {
      upright: "Control, willpower, success, action, determination",
      reversed: "Control ki kami, direction na hona, aggression",
    },
  },
  "major-08": {
    hi: { upright: "साहस, अनुनय, प्रभाव, करुणा", reversed: "आत्म-संदेह, कमजोरी, असुरक्षा" },
    hinglish: {
      upright: "Courage, persuasion, influence, compassion",
      reversed: "Self-doubt, weakness, insecurity",
    },
  },
  "major-09": {
    hi: {
      upright: "आत्म-खोज, आत्मनिरीक्षण, अकेले रहना, आंतरिक मार्गदर्शन",
      reversed: "अलगाव, अकेलापन, पीछे हटना",
    },
    hinglish: {
      upright: "Soul-searching, introspection, akele rehna, inner guidance",
      reversed: "Isolation, loneliness, peeche hatna",
    },
  },
  "major-10": {
    hi: {
      upright: "सौभाग्य, कर्म, जीवन-चक्र, नियति, निर्णायक मोड़",
      reversed: "दुर्भाग्य, बदलाव का विरोध, चक्र टूटना",
    },
    hinglish: {
      upright: "Good luck, karma, life cycles, destiny, ek turning point",
      reversed: "Bad luck, change ka resistance, cycles todna",
    },
  },
  "major-11": {
    hi: {
      upright: "न्याय, निष्पक्षता, सत्य, कारण और प्रभाव, कानून",
      reversed: "अन्याय, जवाबदेही की कमी, बेईमानी",
    },
    hinglish: {
      upright: "Justice, fairness, truth, cause and effect, law",
      reversed: "Unfairness, accountability ki kami, dishonesty",
    },
  },
  "major-12": {
    hi: {
      upright: "विराम, समर्पण, छोड़ देना, नए दृष्टिकोण",
      reversed: "देरी, प्रतिरोध, रुकावट, अनिर्णय",
    },
    hinglish: {
      upright: "Ek pause, surrender, chhod dena, naye perspectives",
      reversed: "Delays, resistance, ruk jaana, indecision",
    },
  },
  "major-13": {
    hi: {
      upright: "अंत, परिवर्तन, रूपांतरण, संक्रमण",
      reversed: "बदलाव का प्रतिरोध, व्यक्तिगत रूपांतरण, आंतरिक शुद्धि",
    },
    hinglish: {
      upright: "Endings, change, transformation, ek transition",
      reversed: "Change ka resistance, personal transformation, andar se cleanse hona",
    },
  },
  "major-14": {
    hi: {
      upright: "संतुलन, संयम, धैर्य, उद्देश्य",
      reversed: "असंतुलन, अति, आत्म-उपचार, पुनर्संरेखण",
    },
    hinglish: {
      upright: "Balance, moderation, patience, ek purpose",
      reversed: "Imbalance, excess, self-healing, phir se align hona",
    },
  },
  "major-15": {
    hi: {
      upright: "छाया स्वरूप, मोह, लत, प्रतिबंध",
      reversed: "सीमित मान्यताओं को छोड़ना, अंधकारमय विचारों की खोज",
    },
    hinglish: {
      upright: "Shadow self, attachment, addiction, restriction",
      reversed: "Limiting beliefs ko chhodna, dark thoughts explore karna",
    },
  },
  "major-16": {
    hi: {
      upright: "अचानक बदलाव, उथल-पुथल, अराजकता, रहस्योद्घाटन, जागृति",
      reversed: "व्यक्तिगत रूपांतरण, बदलाव का डर, आपदा को टालना",
    },
    hinglish: {
      upright: "Sudden change, upheaval, chaos, ek revelation, awakening",
      reversed: "Personal transformation, change ka dar, disaster ko avoid karna",
    },
  },
  "major-17": {
    hi: {
      upright: "आशा, विश्वास, उद्देश्य, नवीनीकरण, आध्यात्मिकता",
      reversed: "विश्वास की कमी, निराशा, वियोग",
    },
    hinglish: {
      upright: "Hope, faith, purpose, renewal, spirituality",
      reversed: "Faith ki kami, despair, disconnection",
    },
  },
  "major-18": {
    hi: {
      upright: "भ्रम, भय, चिंता, अवचेतन, अंतर्ज्ञान",
      reversed: "भय से मुक्ति, दबी हुई भावनाएं, आंतरिक उलझन",
    },
    hinglish: {
      upright: "Illusion, fear, anxiety, subconscious, intuition",
      reversed: "Fear se release, dabi hui emotions, andar ki confusion",
    },
  },
  "major-19": {
    hi: {
      upright: "सकारात्मकता, मस्ती, गर्मजोशी, सफलता, जीवंतता",
      reversed: "आंतरिक बच्चा, उदासी, अत्यधिक आशावादी",
    },
    hinglish: {
      upright: "Positivity, fun, warmth, success, vitality",
      reversed: "Inner child, thoda down feel karna, zyada hi optimistic hona",
    },
  },
  "major-20": {
    hi: {
      upright: "निर्णय, पुनर्जन्म, आंतरिक पुकार, मुक्ति",
      reversed: "आत्म-संदेह, आंतरिक आलोचक, पुकार को नज़रअंदाज़ करना",
    },
    hinglish: {
      upright: "Judgement, rebirth, ek inner calling, absolution",
      reversed: "Self-doubt, apna hi critic banna, apni calling ignore karna",
    },
  },
  "major-21": {
    hi: { upright: "पूर्णता, एकीकरण, उपलब्धि, यात्रा", reversed: "समापन की तलाश, शॉर्टकट, देरी" },
    hinglish: {
      upright: "Completion, integration, ek accomplishment, travel",
      reversed: "Closure dhoondhna, shortcuts, delays",
    },
  },

  "wands-ace": {
    hi: { upright: "नया जुनून, प्रेरणा, संभावना", reversed: "देरी, कमज़ोर शुरुआत, झूठी शुरुआतें" },
    hinglish: {
      upright: "Naya passion, inspiration, potential",
      reversed: "Delays, weak creation, false starts",
    },
  },
  "wands-two": {
    hi: { upright: "योजना, खोज, व्यक्तिगत शक्ति", reversed: "बदलाव का डर, सुरक्षित रहना" },
    hinglish: {
      upright: "Planning, discovery, personal power",
      reversed: "Change ka dar, safe khelna",
    },
  },
  "wands-three": {
    hi: { upright: "विस्तार, दूरदर्शिता, विदेशी अवसर", reversed: "देरी, बाधाएं, छोटा सोचना" },
    hinglish: {
      upright: "Expansion, foresight, videsh ke opportunities",
      reversed: "Delays, obstacles, chhota sochna",
    },
  },
  "wands-four": {
    hi: { upright: "उत्सव, सामंजस्य, घर, समुदाय", reversed: "व्यक्तिगत उत्सव, घर में कलह" },
    hinglish: {
      upright: "Celebration, harmony, ghar, community",
      reversed: "Personal celebration, ghar mein conflict",
    },
  },
  "wands-five": {
    hi: { upright: "संघर्ष, असहमति, प्रतिस्पर्धा", reversed: "संघर्ष से बचना, मतभेदों का सम्मान" },
    hinglish: {
      upright: "Conflict, disagreements, competition",
      reversed: "Conflict avoid karna, differences ko respect karna",
    },
  },
  "wands-six": {
    hi: { upright: "सफलता, सार्वजनिक पहचान, प्रगति", reversed: "पतन, अहंकार" },
    hinglish: {
      upright: "Success, public recognition, progress",
      reversed: "Neeche girna, egotism",
    },
  },
  "wands-seven": {
    hi: { upright: "चुनौती, प्रतिस्पर्धा, सुरक्षा", reversed: "थकावट, हार मान लेना, अभिभूत होना" },
    hinglish: {
      upright: "Challenge, competition, protection",
      reversed: "Exhaustion, haar maan lena, overwhelmed feel karna",
    },
  },
  "wands-eight": {
    hi: { upright: "गति, कार्य, संरेखण, हवाई यात्रा", reversed: "देरी, निराशा, बदलाव का विरोध" },
    hinglish: {
      upright: "Movement, action, alignment, air travel",
      reversed: "Delays, frustration, change ka resistance",
    },
  },
  "wands-nine": {
    hi: { upright: "लचीलापन, साहस, दृढ़ता", reversed: "थकावट, हार मान लेना, अभिभूत होना" },
    hinglish: {
      upright: "Resilience, courage, persistence",
      reversed: "Exhaustion, haar maan lena, overwhelmed feel karna",
    },
  },
  "wands-ten": {
    hi: {
      upright: "बोझ, अतिरिक्त ज़िम्मेदारी, कड़ी मेहनत",
      reversed: "सब कुछ खुद करना, तनाव, बर्नआउट",
    },
    hinglish: {
      upright: "Burden, extra responsibility, hard work",
      reversed: "Sab kuch khud karna, stress, burnout",
    },
  },
  "wands-page": {
    hi: { upright: "प्रेरणा, विचार, खोज, स्वतंत्र आत्मा", reversed: "नए बने विचार, दिशा की कमी" },
    hinglish: {
      upright: "Inspiration, ideas, discovery, ek free spirit",
      reversed: "Nayi bani ideas, direction ki kami",
    },
  },
  "wands-knight": {
    hi: {
      upright: "ऊर्जा, जुनून, साहसिक कार्य, आवेग",
      reversed: "जुनूनी परियोजना, जल्दबाज़ी, बिखरी ऊर्जा",
    },
    hinglish: {
      upright: "Energy, passion, adventure, impulsivity",
      reversed: "Passion project, jaldbaazi, energy bikhri hui",
    },
  },
  "wands-queen": {
    hi: { upright: "साहस, आत्मविश्वास, दृढ़ संकल्प", reversed: "स्वार्थ, ईर्ष्या, असुरक्षा" },
    hinglish: {
      upright: "Courage, confidence, determination",
      reversed: "Selfishness, jealousy, insecurity",
    },
  },
  "wands-king": {
    hi: { upright: "दृष्टि, उद्यमी, सम्मान, नेतृत्व", reversed: "आवेग, जल्दबाज़ी, निर्ममता" },
    hinglish: {
      upright: "Vision, entrepreneur, honour, leadership",
      reversed: "Impulsiveness, jaldbaazi, ruthlessness",
    },
  },

  "cups-ace": {
    hi: { upright: "नई भावनाएं, अंतर्ज्ञान, प्रेम", reversed: "अवरुद्ध भावनाएं, खालीपन" },
    hinglish: {
      upright: "Nayi feelings, intuition, love",
      reversed: "Emotions block hona, khaalipan",
    },
  },
  "cups-two": {
    hi: { upright: "एकता, साझेदारी, जुड़ाव", reversed: "ब्रेकअप, असंतुलन" },
    hinglish: { upright: "Unity, partnership, connection", reversed: "Break-ups, imbalance" },
  },
  "cups-three": {
    hi: { upright: "उत्सव, दोस्ती, समुदाय", reversed: "अति-भोग, गपशप" },
    hinglish: { upright: "Celebration, dosti, community", reversed: "Overindulgence, gossip" },
  },
  "cups-four": {
    hi: { upright: "चिंतन, उदासीनता, पुनर्मूल्यांकन", reversed: "पीछे हटना, जागरूकता" },
    hinglish: {
      upright: "Contemplation, apathy, reevaluation",
      reversed: "Peeche hatna, awareness",
    },
  },
  "cups-five": {
    hi: { upright: "हानि, शोक, पछतावा", reversed: "स्वीकृति, आगे बढ़ना" },
    hinglish: { upright: "Loss, grief, regret", reversed: "Acceptance, aage badhna" },
  },
  "cups-six": {
    hi: { upright: "पुरानी यादें, बचपन, मासूमियत", reversed: "अतीत में जीना, अवास्तविक" },
    hinglish: {
      upright: "Nostalgia, bachpan, innocence",
      reversed: "Past mein jeena, unrealistic",
    },
  },
  "cups-seven": {
    hi: { upright: "विकल्प, कल्पना, भ्रम", reversed: "संरेखण, स्पष्टता" },
    hinglish: { upright: "Choices, fantasy, illusion", reversed: "Alignment, clarity" },
  },
  "cups-eight": {
    hi: { upright: "दूर जाना, मोहभंग, खोज", reversed: "एक और कोशिश, अनिर्णय" },
    hinglish: {
      upright: "Door jaana, disillusionment, khoj",
      reversed: "Ek aur try karna, indecision",
    },
  },
  "cups-nine": {
    hi: { upright: "संतोष, संतुष्टि, इच्छाएं", reversed: "आंतरिक खुशी, भौतिकवाद" },
    hinglish: {
      upright: "Contentment, satisfaction, wishes",
      reversed: "Andar ki khushi, materialism",
    },
  },
  "cups-ten": {
    hi: { upright: "दिव्य प्रेम, सामंजस्य, परिवार", reversed: "टूटा हुआ परिवार, बेमेल" },
    hinglish: {
      upright: "Divine love, harmony, family",
      reversed: "Toota hua family, misalignment",
    },
  },
  "cups-page": {
    hi: { upright: "रचनात्मक अवसर, जिज्ञासा", reversed: "भावनात्मक अपरिपक्वता, पलायनवाद" },
    hinglish: {
      upright: "Creative opportunity, curiosity",
      reversed: "Emotionally immature hona, escapism",
    },
  },
  "cups-knight": {
    hi: { upright: "रोमांस, आकर्षण, कल्पनाशीलता", reversed: "उदासी, ईर्ष्या" },
    hinglish: { upright: "Romance, charm, imagination", reversed: "Moodiness, jealousy" },
  },
  "cups-queen": {
    hi: { upright: "करुणा, शांति, आराम", reversed: "असुरक्षा, निर्भरता" },
    hinglish: { upright: "Compassion, calm, comfort", reversed: "Insecurity, dependence" },
  },
  "cups-king": {
    hi: { upright: "भावनात्मक संतुलन, उदारता, कूटनीति", reversed: "उदासी, भावनात्मक हेरफेर" },
    hinglish: {
      upright: "Emotional balance, generosity, diplomacy",
      reversed: "Moodiness, emotional manipulation",
    },
  },

  "swords-ace": {
    hi: { upright: "बड़ी सफलता, स्पष्टता, मानसिक शक्ति", reversed: "उलझन, क्रूरता, अराजकता" },
    hinglish: {
      upright: "Ek breakthrough, clarity, mental force",
      reversed: "Confusion, brutality, chaos",
    },
  },
  "swords-two": {
    hi: { upright: "कठिन विकल्प, गतिरोध, टालमटोल", reversed: "उलझन, सूचना का अतिभार" },
    hinglish: {
      upright: "Difficult choices, ek stalemate, avoidance",
      reversed: "Confusion, information overload",
    },
  },
  "swords-three": {
    hi: { upright: "दिल टूटना, दुख, शोक", reversed: "स्वस्थ होना, क्षमा" },
    hinglish: { upright: "Heartbreak, sorrow, grief", reversed: "Recovery, forgiveness" },
  },
  "swords-four": {
    hi: { upright: "आराम, पुनर्स्थापन, चिंतन", reversed: "बेचैनी, बर्नआउट, थकावट" },
    hinglish: {
      upright: "Rest, restoration, contemplation",
      reversed: "Restlessness, burnout, exhaustion",
    },
  },
  "swords-five": {
    hi: { upright: "संघर्ष, हार, हर कीमत पर जीतना", reversed: "सुलह, गलती सुधारना" },
    hinglish: {
      upright: "Conflict, defeat, har keemat pe jeetna",
      reversed: "Reconciliation, galti sudharna",
    },
  },
  "swords-six": {
    hi: { upright: "संक्रमण, आगे बढ़ना, शांत जल", reversed: "भावनात्मक बोझ, अनसुलझे मुद्दे" },
    hinglish: {
      upright: "Ek transition, aage badhna, shaant waters",
      reversed: "Emotional baggage, unresolved issues",
    },
  },
  "swords-seven": {
    hi: { upright: "छल, रणनीति, बच निकलना", reversed: "सच बताना, उचित आलोचना स्वीकारना" },
    hinglish: {
      upright: "Deception, strategy, bach nikalna",
      reversed: "Sach batana, deserved criticism accept karna",
    },
  },
  "swords-eight": {
    hi: {
      upright: "प्रतिबंध, स्वयं लगाई सीमा, पीड़ित मानसिकता",
      reversed: "आत्म-स्वीकृति, नया दृष्टिकोण",
    },
    hinglish: {
      upright: "Restriction, khud ki lagayi limitation, victim mindset",
      reversed: "Self-acceptance, naya perspective",
    },
  },
  "swords-nine": {
    hi: { upright: "चिंता, फ़िक्र, भय, दुःस्वप्न", reversed: "आंतरिक उथल-पुथल, चिंता से मुक्ति" },
    hinglish: {
      upright: "Anxiety, worry, fear, nightmares",
      reversed: "Andar ki halchal, worry ko release karna",
    },
  },
  "swords-ten": {
    hi: { upright: "दर्दनाक अंत, गहरे घाव, संकट", reversed: "स्वस्थ होना, पुनर्जनन, अंत का विरोध" },
    hinglish: {
      upright: "Painful endings, gehre wounds, crisis",
      reversed: "Recovery, regeneration, end ka resistance",
    },
  },
  "swords-page": {
    hi: { upright: "जिज्ञासा, मानसिक ऊर्जा, नए विचार", reversed: "छल, हेरफेर, गपशप" },
    hinglish: {
      upright: "Curiosity, mental energy, nayi ideas",
      reversed: "Deception, manipulation, gossip",
    },
  },
  "swords-knight": {
    hi: { upright: "महत्वाकांक्षी, कार्य-उन्मुख, प्रेरित", reversed: "आवेग, बेचैनी" },
    hinglish: {
      upright: "Ambitious, action-oriented, driven",
      reversed: "Impulsiveness, restlessness",
    },
  },
  "swords-queen": {
    hi: {
      upright: "स्वतंत्र, निष्पक्ष निर्णय, स्पष्ट सीमाएं",
      reversed: "कठोर-हृदय, क्रूर, कड़वाहट",
    },
    hinglish: {
      upright: "Independent, unbiased judgment, clear boundaries",
      reversed: "Cold-hearted, cruel, bitterness",
    },
  },
  "swords-king": {
    hi: {
      upright: "अधिकार, सत्य, बौद्धिक शक्ति",
      reversed: "हेरफेर करने वाला, अत्याचारी, सत्ता का दुरुपयोग",
    },
    hinglish: {
      upright: "Authority, truth, intellectual power",
      reversed: "Manipulative, tyrannical, power ka abuse",
    },
  },

  "pentacles-ace": {
    hi: { upright: "नया अवसर, समृद्धि, अभिव्यक्ति", reversed: "खोया अवसर, योजना की कमी" },
    hinglish: {
      upright: "Naya opportunity, prosperity, manifestation",
      reversed: "Opportunity kho jaana, planning ki kami",
    },
  },
  "pentacles-two": {
    hi: { upright: "संतुलन, अनुकूलनशीलता, समय प्रबंधन", reversed: "संतुलन की हानि, अभिभूत होना" },
    hinglish: {
      upright: "Balance, adaptability, time management",
      reversed: "Balance kho jaana, overwhelmed feel karna",
    },
  },
  "pentacles-three": {
    hi: { upright: "टीम वर्क, सहयोग, सीखना", reversed: "असामंजस्य, टीम वर्क की कमी" },
    hinglish: {
      upright: "Teamwork, collaboration, seekhna",
      reversed: "Disharmony, teamwork ki kami",
    },
  },
  "pentacles-four": {
    hi: { upright: "सुरक्षा, नियंत्रण, संरक्षण", reversed: "लालच, भौतिकवाद, आत्म-सुरक्षा" },
    hinglish: {
      upright: "Security, control, conservation",
      reversed: "Greed, materialism, khud ko protect karna",
    },
  },
  "pentacles-five": {
    hi: { upright: "कठिनाई, गरीबी, अलगाव", reversed: "स्वस्थ होना, आध्यात्मिक गरीबी" },
    hinglish: { upright: "Hardship, poverty, isolation", reversed: "Recovery, spiritual poverty" },
  },
  "pentacles-six": {
    hi: { upright: "उदारता, दान, साझा करना", reversed: "कर्ज़, एकतरफा दान" },
    hinglish: { upright: "Generosity, charity, sharing", reversed: "Debt, ek-tarfa charity" },
  },
  "pentacles-seven": {
    hi: {
      upright: "मूल्यांकन, धैर्य, दीर्घकालिक दृष्टिकोण",
      reversed: "अधीरता, दीर्घकालिक दृष्टि की कमी",
    },
    hinglish: {
      upright: "Assessment, patience, long-term view",
      reversed: "Impatience, long-term vision ki kami",
    },
  },
  "pentacles-eight": {
    hi: { upright: "निपुणता, कौशल विकास, परिश्रम", reversed: "पूर्णतावाद, ध्यान की कमी" },
    hinglish: {
      upright: "Mastery, skill development, diligence",
      reversed: "Perfectionism, focus ki kami",
    },
  },
  "pentacles-nine": {
    hi: {
      upright: "प्रचुरता, विलासिता, आत्मनिर्भरता",
      reversed: "आत्म-मूल्य के मुद्दे, काम में अति-निवेश",
    },
    hinglish: {
      upright: "Abundance, luxury, self-sufficiency",
      reversed: "Self-worth issues, kaam mein zyada invest karna",
    },
  },
  "pentacles-ten": {
    hi: {
      upright: "धन, विरासत, परिवार, सेवानिवृत्ति",
      reversed: "पारिवारिक विवाद, वित्तीय विफलता",
    },
    hinglish: {
      upright: "Wealth, legacy, family, retirement",
      reversed: "Family disputes, financial failure",
    },
  },
  "pentacles-page": {
    hi: { upright: "अभिव्यक्ति, वित्तीय अवसर", reversed: "प्रगति की कमी, टालमटोल" },
    hinglish: {
      upright: "Manifestation, financial opportunity",
      reversed: "Progress na hona, procrastination",
    },
  },
  "pentacles-knight": {
    hi: { upright: "दक्षता, कड़ी मेहनत, ज़िम्मेदारी", reversed: "आलस्य, जुनूनीपन" },
    hinglish: {
      upright: "Efficiency, hard work, responsibility",
      reversed: "Laziness, obsessiveness",
    },
  },
  "pentacles-queen": {
    hi: {
      upright: "व्यावहारिक, घरेलू, वित्तीय रूप से स्वतंत्र",
      reversed: "वित्तीय निर्भरता, आत्म-देखभाल की उपेक्षा",
    },
    hinglish: {
      upright: "Practical, homely, financially independent",
      reversed: "Financial dependence, khud ka khayal na rakhna",
    },
  },
  "pentacles-king": {
    hi: {
      upright: "धन, व्यवसाय, नेतृत्व, सुरक्षा",
      reversed: "वित्तीय रूप से अक्षम, धन के प्रति जुनूनी",
    },
    hinglish: {
      upright: "Wealth, business, leadership, security",
      reversed: "Financially weak, wealth ke peeche obsessed",
    },
  },
};
