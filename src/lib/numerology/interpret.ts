import type { Language } from "@/lib/i18n";
import type { RootNumber } from "./types";
import { PACING, type NumerologyCalculationSet } from "./engine";

type NumMap<T> = Record<RootNumber, T>;

interface ContentSet {
  baseMindset: NumMap<string>;
  yearlyTheme: NumMap<string>;
  monthlyFocus: NumMap<string>;
  actions: NumMap<[string, string, string]>;
  cautions: NumMap<[string, string]>;
}

const en: ContentSet = {
  baseMindset: {
    1: "At your core you're a starter — driven to initiate, lead, and stand on your own. You do your best thinking in motion, not in committee.",
    2: "At your core you're a sensor — attuned to undercurrents others miss. Patience and quiet observation are your real instruments of power.",
    3: "At your core you're a creator — expressive, sociable, and happiest when making something out of nothing.",
    4: "At your core you're a builder — you trust structure, discipline, and the slow accumulation of solid ground.",
    5: "At your core you're a teacher-seeker — restless for meaning, drawn to systems, philosophies, and the freedom to question them.",
    6: "At your core you're a connector — relationships, harmony, and shared responsibility are where you find your footing.",
    7: "At your core you're an investigator — you need solitude to think clearly and distrust conclusions you haven't tested yourself.",
    8: "At your core you're a balancer — sharply aware of fairness, consequence, and the weight of your own choices.",
    9: "At your core you're a closer — instinctively drawn to finishing cycles, releasing what's outgrown, and making sense of what's passed.",
  },
  yearlyTheme: {
    1: "This is a year of fresh starts. Old chapters close quietly and new ones ask to be initiated — the momentum is yours to create.",
    2: "This is a year of patience and partnership. Big moves aren't rewarded; quiet listening, collaboration, and timing are.",
    3: "This is a year of expression and growth. Creative and social energy expands — visibility and connection accelerate what you're building.",
    4: "This is a year of structure. Discipline, groundwork, and unglamorous consistency pay off more than any single bold move.",
    5: "This is a year of change and discovery. Plans shift, routines get disrupted, and the disruption itself is the lesson.",
    6: "This is a year of relationships and responsibility. Family, partnership, and commitments move to the center of the picture.",
    7: "This is a year of reflection. Progress happens inward — through study, rest, and honest reassessment — more than through outward action.",
    8: "This is a year of consequence and reward. Effort from past years comes due — for better or worse — around money, status, and authority.",
    9: "This is a year of completion. Something long-running is meant to end here, making room for a new cycle to begin next year.",
  },
  monthlyFocus: {
    1: "a short window to start something you've been putting off — the first move matters more than the perfect plan.",
    2: "a month to listen before acting; the right answer likely comes from someone else, not from pushing harder yourself.",
    3: "a socially and creatively active stretch — good timing for anything that needs visibility or self-expression.",
    4: "a month for practical, unglamorous follow-through — tidy up systems, finances, or routines that have gone loose.",
    5: "an active, opportunity-seeking stretch — good timing for bold moves, new ventures, and networking, even if the path shifts along the way.",
    6: "a month centered on people close to you — conversations, commitments, or repairs in key relationships take priority.",
    7: "a quieter month better spent thinking, resting, or researching than launching anything new.",
    8: "a high-leverage month for action — good timing for bold financial moves, negotiations, and claiming what past effort has earned you.",
    9: "a wrapping-up month — better for finishing, letting go, and tying loose ends than for starting something new.",
  },
  actions: {
    1: [
      "Start the one thing you've been overthinking instead of planning it further.",
      "Make decisions solo where you can — this month rewards initiative over consensus.",
      "Set one clear, visible goal rather than several vague ones.",
    ],
    2: [
      "Bring a partner or collaborator into anything important — don't go it alone.",
      "Slow down before responding; the first reaction usually isn't the wisest one.",
      "Trust a hunch about a person or situation rather than dismissing it.",
    ],
    3: [
      "Put your work, ideas, or self in front of more people than usual.",
      "Say yes to a social or creative opportunity even if timing feels inconvenient.",
      "Give yourself permission to enjoy the process, not just the outcome.",
    ],
    4: [
      "Tackle one boring-but-important task (paperwork, budget, routine) you've delayed.",
      "Build a simple system now that will save you effort later.",
      "Choose the reliable option over the exciting one this stretch.",
    ],
    5: [
      "Keep your calendar loose — leave room for last-minute change.",
      "Treat one disruption as information rather than a setback.",
      "Try something genuinely new instead of repeating last year's pattern.",
    ],
    6: [
      "Have the conversation you've been postponing with someone close to you.",
      "Take on one shared responsibility fully rather than half-doing several.",
      "Prioritize a relationship over a solo ambition this stretch.",
    ],
    7: [
      "Protect time alone to think before committing to anything big.",
      "Research or study before acting — this isn't the season for guessing.",
      "Say no to noise that pulls you away from something you're genuinely working through.",
    ],
    8: [
      "Review money, contracts, or commitments carefully before signing on to more.",
      "Ask for what you're actually worth — this period rewards fair claims.",
      "Take responsibility early for a past shortcut, before it compounds.",
    ],
    9: [
      "Finish or formally close something that's been left open too long.",
      "Let go of one commitment, relationship, or habit that's run its course.",
      "Reflect on the cycle that's ending before jumping into the next one.",
    ],
  },
  cautions: {
    1: [
      "Steamrolling others' input in your hurry to move.",
      "Starting five things and finishing none.",
    ],
    2: [
      "Over-accommodating others until your own needs disappear.",
      "Reading too much into silence or ambiguity.",
    ],
    3: [
      "Scattering energy across too many ideas at once.",
      "Prioritizing being liked over being honest.",
    ],
    4: [
      "Getting so rigid that you miss a needed change.",
      "Overworking at the cost of rest or relationships.",
    ],
    5: [
      "Chasing change for its own sake, without a real reason.",
      "Burning a stable thing out of restlessness.",
    ],
    6: [
      "Over-giving in a relationship until resentment builds.",
      "Avoiding a hard conversation to keep the peace.",
    ],
    7: [
      "Isolating so much that you lose useful outside input.",
      "Overthinking a decision instead of testing it in practice.",
    ],
    8: [
      "Chasing status or money at the cost of integrity.",
      "Ignoring a consequence you already saw coming.",
    ],
    9: [
      "Holding on to something that's already over.",
      "Rushing an ending before it's actually resolved.",
    ],
  },
};

const hi: ContentSet = {
  baseMindset: {
    1: "आपके स्वभाव में एक शुरुआत करने वाला व्यक्ति है — नेतृत्व और स्वतंत्र निर्णय आपकी असली ताकत है।",
    2: "आपके स्वभाव में एक संवेदनशील पर्यवेक्षक है — जो दूसरों की अनकही बातें भी समझ लेता है। धैर्य ही आपकी असली शक्ति है।",
    3: "आपके स्वभाव में एक रचनाकार है — अभिव्यक्ति और सामाजिकता में आपको सबसे ज़्यादा खुशी मिलती है।",
    4: "आपके स्वभाव में एक निर्माता है — अनुशासन और मज़बूत नींव पर आपका भरोसा है।",
    5: "आपके स्वभाव में एक जिज्ञासु शिक्षक है — अर्थ की तलाश और विचारों को परखने की आज़ादी आपको खींचती है।",
    6: "आपके स्वभाव में एक जोड़ने वाला व्यक्ति है — रिश्ते और साझा ज़िम्मेदारी में आपको स्थिरता मिलती है।",
    7: "आपके स्वभाव में एक शोधकर्ता है — स्पष्ट सोचने के लिए आपको एकांत चाहिए, बिना जांचे नतीजों पर भरोसा नहीं करते।",
    8: "आपके स्वभाव में एक संतुलनकर्ता है — निष्पक्षता, परिणाम और अपने फैसलों के वज़न को लेकर आप सजग रहते हैं।",
    9: "आपके स्वभाव में एक समापनकर्ता है — चक्र पूरा करना, जो बीत गया उसे छोड़ना आपको सहज लगता है।",
  },
  yearlyTheme: {
    1: "यह साल नई शुरुआत का है। पुराने अध्याय शांति से बंद होते हैं और नए अध्याय शुरू करने का समय है — गति आपके हाथ में है।",
    2: "यह साल धैर्य और साझेदारी का है। बड़े कदम नहीं, बल्कि सुनना, सहयोग और सही समय ही फल देंगे।",
    3: "यह साल अभिव्यक्ति और विकास का है। रचनात्मक और सामाजिक ऊर्जा बढ़ती है — दिखना और जुड़ना आपकी मदद करेगा।",
    4: "यह साल ढांचे का है। अनुशासन और लगातार मेहनत किसी एक बड़े कदम से ज़्यादा फल देगी।",
    5: "यह साल बदलाव और खोज का है। योजनाएं बदलेंगी, दिनचर्या टूटेगी — और यही बदलाव ही सबक है।",
    6: "यह साल रिश्तों और ज़िम्मेदारी का है। परिवार, साझेदारी और वचनबद्धता केंद्र में आते हैं।",
    7: "यह साल चिंतन का है। प्रगति बाहर से नहीं, अंदर से — अध्ययन, आराम और ईमानदार पुनर्मूल्यांकन से आएगी।",
    8: "यह साल परिणाम और फल का है। पिछले वर्षों की मेहनत का हिसाब — पैसे, पद और अधिकार को लेकर — अब सामने आता है।",
    9: "यह साल पूर्णता का है। कोई लंबा चलने वाला अध्याय यहां खत्म होना है, ताकि अगले साल नया चक्र शुरू हो सके।",
  },
  monthlyFocus: {
    1: "कुछ शुरू करने की छोटी सी खिड़की — पूरी योजना से ज़्यादा पहला कदम मायने रखता है।",
    2: "पहले सुनने और फिर काम करने का महीना; सही जवाब शायद किसी और से मिलेगा।",
    3: "सामाजिक और रचनात्मक रूप से सक्रिय समय — दिखने और अभिव्यक्ति के लिए अच्छा समय।",
    4: "व्यावहारिक, बिना चमक-दमक वाले कामों को पूरा करने का महीना — सिस्टम या हिसाब-किताब को व्यवस्थित करें।",
    5: "सक्रिय, अवसर तलाशने का समय — बड़े कदम, नए उपक्रम और नेटवर्किंग के लिए अच्छा मौका, भले ही रास्ता बीच में बदल जाए।",
    6: "करीबी लोगों पर केंद्रित महीना — ज़रूरी बातचीत और रिश्तों की मरम्मत को प्राथमिकता दें।",
    7: "शांत महीना — नई शुरुआत से ज़्यादा सोचने, आराम करने और शोध करने के लिए बेहतर।",
    8: "कार्रवाई के लिए ज़बरदस्त महीना — बड़े वित्तीय कदम, बातचीत, और पिछली मेहनत का हक मांगने के लिए अच्छा समय।",
    9: "समेटने का महीना — नई शुरुआत से ज़्यादा चीज़ों को पूरा करने और छोड़ने के लिए बेहतर।",
  },
  actions: {
    1: [
      "जिस काम को लेकर बहुत सोच रहे हैं, उसे और योजना बनाने की बजाय शुरू कर दें।",
      "जहां हो सके, अकेले फैसले लें — यह समय पहल को इनाम देता है।",
      "कई अस्पष्ट लक्ष्यों की बजाय एक स्पष्ट लक्ष्य तय करें।",
    ],
    2: [
      "किसी भी ज़रूरी काम में एक साथी या सहयोगी को शामिल करें।",
      "जवाब देने से पहले धीमे हो जाएं; पहली प्रतिक्रिया अक्सर सबसे समझदार नहीं होती।",
      "किसी व्यक्ति या स्थिति के बारे में अपने अंदाज़े पर भरोसा करें।",
    ],
    3: [
      "अपने काम, विचारों या खुद को सामान्य से ज़्यादा लोगों के सामने रखें।",
      "किसी सामाजिक या रचनात्मक मौके को हां कहें, भले ही समय असुविधाजनक लगे।",
      "नतीजे के साथ-साथ प्रक्रिया का आनंद लेने की खुद को इजाज़त दें।",
    ],
    4: [
      "जो उबाऊ पर ज़रूरी काम (कागज़ी कार्रवाई, बजट, दिनचर्या) टाल रहे हैं, उसे निपटाएं।",
      "अभी एक आसान सिस्टम बनाएं जो बाद में मेहनत बचाएगा।",
      "इस दौर में रोमांचक विकल्प की बजाय भरोसेमंद विकल्प चुनें।",
    ],
    5: [
      "अपना कैलेंडर खुला रखें — आखिरी वक्त के बदलाव के लिए जगह छोड़ें।",
      "किसी बदलाव को झटके की बजाय जानकारी के रूप में देखें।",
      "पिछले साल के पैटर्न को दोहराने की बजाय कुछ वाकई नया आज़माएं।",
    ],
    6: [
      "जिस बातचीत को टाल रहे हैं, उसे किसी करीबी व्यक्ति से करें।",
      "कई कामों को आधा-अधूरा करने की बजाय एक साझा ज़िम्मेदारी पूरी तरह निभाएं।",
      "इस दौर में अकेले महत्वाकांक्षा से ज़्यादा रिश्ते को प्राथमिकता दें।",
    ],
    7: [
      "किसी बड़े फैसले से पहले सोचने के लिए अकेला समय बचाएं।",
      "काम करने से पहले शोध या अध्ययन करें — यह अंदाज़ा लगाने का समय नहीं है।",
      "उस शोर को ना कहें जो आपको किसी ज़रूरी काम से भटकाता है।",
    ],
    8: [
      "और प्रतिबद्ध होने से पहले पैसे, अनुबंध या वचनों की सावधानी से समीक्षा करें।",
      "जो आपका वाजिब हक है वह मांगें — यह समय निष्पक्ष दावों को इनाम देता है।",
      "किसी पुरानी शॉर्टकट की ज़िम्मेदारी जल्दी लें, इससे पहले कि वह बढ़ जाए।",
    ],
    9: [
      "जो बहुत लंबे समय से अधूरा है उसे पूरा करें या औपचारिक रूप से बंद करें।",
      "किसी वचनबद्धता, रिश्ते या आदत को छोड़ें जिसका समय पूरा हो चुका है।",
      "अगले चक्र में कूदने से पहले खत्म हो रहे चक्र पर चिंतन करें।",
    ],
  },
  cautions: {
    1: [
      "जल्दबाज़ी में दूसरों की राय को नज़रअंदाज़ करना।",
      "पांच काम शुरू करना और एक भी पूरा न करना।",
    ],
    2: [
      "दूसरों को इतना समायोजित करना कि अपनी ज़रूरतें गायब हो जाएं।",
      "चुप्पी या अस्पष्टता का बहुत ज़्यादा मतलब निकालना।",
    ],
    3: [
      "एक साथ बहुत सारे विचारों में ऊर्जा बिखेरना।",
      "ईमानदारी से ज़्यादा पसंद किए जाने को प्राथमिकता देना।",
    ],
    4: [
      "इतना कठोर हो जाना कि ज़रूरी बदलाव छूट जाए।",
      "आराम या रिश्तों की कीमत पर ज़्यादा काम करना।",
    ],
    5: [
      "बिना असली वजह के सिर्फ बदलाव के लिए बदलाव चाहना।",
      "बेचैनी में किसी स्थिर चीज़ को खत्म कर देना।",
    ],
    6: [
      "रिश्ते में इतना देना कि नाराज़गी बन जाए।",
      "शांति बनाए रखने के लिए किसी ज़रूरी बातचीत से बचना।",
    ],
    7: [
      "इतना अकेले रहना कि बाहरी उपयोगी राय छूट जाए।",
      "फैसले को व्यवहार में परखने की बजाय बहुत ज़्यादा सोचना।",
    ],
    8: [
      "ईमानदारी की कीमत पर पद या पैसे के पीछे भागना।",
      "किसी पहले से दिख रहे नतीजे को नज़रअंदाज़ करना।",
    ],
    9: [
      "किसी ऐसी चीज़ को पकड़े रहना जो पहले ही खत्म हो चुकी है।",
      "किसी अंत को असल में सुलझने से पहले जल्दबाज़ी में करना।",
    ],
  },
};

const hinglish: ContentSet = {
  baseMindset: {
    1: "Aapke andar ek starter hai — initiate karna, lead karna, aur apne dum pe khada hona hi aapki asli taaqat hai.",
    2: "Aapke andar ek sensitive observer hai — jo dusron ki unkahi baatein bhi samajh leta hai. Patience hi aapka real power hai.",
    3: "Aapke andar ek creator hai — expression aur social energy mein aapko sabse zyada khushi milti hai.",
    4: "Aapke andar ek builder hai — structure, discipline, aur solid foundation pe aapka bharosa hai.",
    5: "Aapke andar ek restless seeker hai — meaning ki talaash aur ideas ko question karne ki azaadi aapko kheenchti hai.",
    6: "Aapke andar ek connector hai — relationships aur shared responsibility mein aapko stability milti hai.",
    7: "Aapke andar ek investigator hai — clearly sochne ke liye aapko solitude chahiye, bina test kiye conclusions pe bharosa nahi hota.",
    8: "Aapke andar ek balancer hai — fairness, consequence, aur apne decisions ke weight ko lekar aap kaafi aware rehte hain.",
    9: "Aapke andar ek closer hai — cycles complete karna aur jo outgrow ho chuka hai use chhod dena aapko naturally aata hai.",
  },
  yearlyTheme: {
    1: "Yeh saal fresh starts ka hai. Purane chapters quietly close hote hain aur naye chapters shuru karne ka time hai — momentum aapke haath mein hai.",
    2: "Yeh saal patience aur partnership ka hai. Bade moves nahi, balki sunna, collaboration, aur sahi timing hi reward denge.",
    3: "Yeh saal expression aur growth ka hai. Creative aur social energy expand hoti hai — visibility aur connection help karenge.",
    4: "Yeh saal structure ka hai. Discipline aur consistent groundwork kisi bhi ek bold move se zyada fal denge.",
    5: "Yeh saal change aur discovery ka hai. Plans shift honge, routine disrupt hogi — aur yehi disruption hi lesson hai.",
    6: "Yeh saal relationships aur responsibility ka hai. Family, partnership, aur commitments center mein aa jaate hain.",
    7: "Yeh saal reflection ka hai. Progress bahar se nahi, andar se — study, rest, aur honest reassessment se aayegi.",
    8: "Yeh saal consequence aur reward ka hai. Pichhle saalon ki mehnat ka hisaab — money, status, aur authority ko lekar — ab saamne aata hai.",
    9: "Yeh saal completion ka hai. Koi lambe time se chal raha chapter yahan khatam hona hai, taaki agle saal naya cycle shuru ho sake.",
  },
  monthlyFocus: {
    1: "kuch shuru karne ki ek chhoti si window — perfect plan se zyada pehla kadam matter karta hai.",
    2: "pehle sunne aur phir act karne ka mahina; sahi answer shayad kisi aur se milega, khud push karne se nahi.",
    3: "socially aur creatively active stretch — visibility ya self-expression ke liye achha time.",
    4: "practical, unglamorous follow-through ka mahina — systems ya finances ko tidy karo jo loose ho gaye hain.",
    5: "active, opportunity-seeking stretch — bold moves, naye ventures, aur networking ke liye achha time, chahe raasta beech mein shift ho jaaye.",
    6: "close logon pe centered mahina — zaroori conversations aur relationships ki repair priority lein.",
    7: "quieter mahina — kuch naya launch karne se zyada sochne, rest karne, ya research karne ke liye behtar.",
    8: "action ke liye high-leverage mahina — bold financial moves, negotiations, aur past effort ka haq maangne ke liye achha time.",
    9: "wrapping-up mahina — kuch naya start karne se zyada finish karne aur loose ends tie karne ke liye behtar.",
  },
  actions: {
    1: [
      "Jis cheez ko lekar overthink kar rahe hain, usse aur plan karne ki bajay shuru kar dein.",
      "Jahan possible ho, akele decisions lein — yeh mahina initiative ko reward karta hai.",
      "Kai vague goals ki bajay ek clear, visible goal set karein.",
    ],
    2: [
      "Kisi bhi important cheez mein ek partner ya collaborator ko involve karein.",
      "Respond karne se pehle slow down karein; pehli reaction usually sabse wise nahi hoti.",
      "Kisi person ya situation ke baare mein apne hunch pe trust karein.",
    ],
    3: [
      "Apne kaam, ideas, ya khud ko usual se zyada logon ke saamne rakhein.",
      "Kisi social ya creative opportunity ko haan bolein, chahe timing inconvenient lage.",
      "Result ke saath-saath process ko enjoy karne ki khud ko permission dein.",
    ],
    4: [
      "Ek boring-but-important task (paperwork, budget, routine) nipta dein jo delay kar rahe hain.",
      "Abhi ek simple system banayein jo baad mein effort bachayega.",
      "Is stretch mein exciting option ki bajay reliable option choose karein.",
    ],
    5: [
      "Apna calendar loose rakhein — last-minute change ke liye room chhodein.",
      "Kisi disruption ko setback ki bajay information ki tarah treat karein.",
      "Pichhle saal ka pattern repeat karne ki bajay genuinely kuch naya try karein.",
    ],
    6: [
      "Jo conversation postpone kar rahe hain, wo kisi close person se karein.",
      "Kai cheezein half-doing karne ki bajay ek shared responsibility fully le lein.",
      "Is stretch mein solo ambition se zyada relationship ko priority dein.",
    ],
    7: [
      "Kisi bade commitment se pehle sochne ke liye akela time protect karein.",
      "Act karne se pehle research ya study karein — yeh guess karne ka season nahi hai.",
      "Us noise ko na bolein jo aapko kisi genuine kaam se door kar deta hai.",
    ],
    8: [
      "Aur commit karne se pehle money, contracts, ya commitments carefully review karein.",
      "Jo aapka actual worth hai wo maangein — yeh period fair claims ko reward karta hai.",
      "Kisi purani shortcut ki responsibility jaldi le lein, isse pehle ki wo compound ho jaaye.",
    ],
    9: [
      "Jo bahut lambe time se open hai use finish ya formally close karein.",
      "Kisi commitment, relationship, ya habit ko chhod dein jiska time pura ho chuka hai.",
      "Agle cycle mein jump karne se pehle khatam ho rahe cycle pe reflect karein.",
    ],
  },
  cautions: {
    1: [
      "Jaldbaazi mein dusron ka input steamroll karna.",
      "Paanch cheezein start karna aur ek bhi finish na karna.",
    ],
    2: [
      "Dusron ko itna accommodate karna ki apni needs gayab ho jaayein.",
      "Silence ya ambiguity ka bahut zyada matlab nikaalna.",
    ],
    3: [
      "Bahut saare ideas mein energy scatter karna.",
      "Honest hone se zyada liked hone ko priority dena.",
    ],
    4: [
      "Itna rigid ho jaana ki zaroori change miss ho jaaye.",
      "Rest ya relationships ki cost pe overwork karna.",
    ],
    5: [
      "Bina real reason ke sirf change ke liye change chahna.",
      "Restlessness mein kisi stable cheez ko burn kar dena.",
    ],
    6: [
      "Relationship mein itna dena ki resentment build ho jaaye.",
      "Peace maintain karne ke liye ek hard conversation avoid karna.",
    ],
    7: [
      "Itna isolate ho jaana ki useful outside input miss ho jaaye.",
      "Decision ko practice mein test karne ki bajay bahut zyada overthink karna.",
    ],
    8: [
      "Integrity ki cost pe status ya money ke peeche bhaagna.",
      "Kisi already-visible consequence ko ignore karna.",
    ],
    9: [
      "Kisi aisi cheez ko pakde rehna jo already khatam ho chuki hai.",
      "Kisi ending ko actually resolve hone se pehle rush karna.",
    ],
  },
};

const CONTENT: Partial<Record<Language, ContentSet>> = { en, hi, hinglish };

function pick(lang: Language): ContentSet {
  return CONTENT[lang] ?? en;
}

/**
 * Builds a complete numerology reading locally (no AI / network call).
 * Used both as the offline default and as the fallback if the AI call
 * fails or isn't configured — same pattern as `interpretReading` for tarot.
 */
export function interpretNumerology(calc: NumerologyCalculationSet, lang: Language) {
  const c = pick(lang);
  const { mulank, personalYear, personalMonth } = calc;

  return {
    energetic_layers: {
      base_mindset: c.baseMindset[mulank],
      yearly_theme: c.yearlyTheme[personalYear],
      monthly_focus: personalMonth === null ? "" : c.monthlyFocus[personalMonth],
      pacing: personalMonth === null ? null : PACING[personalMonth],
    },
    guidance: {
      recommended_actions: [...c.actions[personalYear]],
      caution_areas: [...c.cautions[personalYear]],
    },
  };
}
