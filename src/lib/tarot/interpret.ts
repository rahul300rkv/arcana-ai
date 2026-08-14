import { getCardById } from "./engine";
import { getSpread } from "./spreads";
import { getCardMeaning } from "./card-i18n";
import type { Language } from "@/lib/i18n";
import type {
  CardInterpretation,
  DrawnCard,
  ReadingInterpretation,
  SpreadId,
  TarotCard,
} from "./types";

type Focus = "love" | "career" | "finance" | "spirituality" | "general";

const FOCUS_KEYWORDS: Record<Exclude<Focus, "general">, string[]> = {
  love: ["love", "relationship", "partner", "romance", "dating", "marriage", "ex"],
  career: ["career", "job", "work", "business", "boss", "promotion", "interview"],
  finance: ["money", "finance", "financial", "debt", "invest", "income", "budget"],
  spirituality: ["spiritual", "soul", "purpose", "meaning", "growth", "path", "journey"],
};

function detectFocus(question: string): Focus {
  const q = question.toLowerCase();
  for (const [focus, words] of Object.entries(FOCUS_KEYWORDS) as [
    Exclude<Focus, "general">,
    string[],
  ][]) {
    if (words.some((w) => q.includes(w))) return focus;
  }
  return "general";
}

/**
 * Focus-specific meanings (love/career/finance/spirituality) are English-only
 * for now — only the general upright/reversed meaning is translated.
 */
function meaningFor(card: TarotCard, reversed: boolean, focus: Focus, lang: Language): string {
  if (focus === "love") return card.loveMeaning;
  if (focus === "career") return card.careerMeaning;
  if (focus === "finance") return card.financeMeaning;
  if (focus === "spirituality") return card.spiritualityMeaning;
  return getCardMeaning(card, reversed, lang);
}

interface Templates {
  cardLine: (positionName: string, cardName: string, reversed: boolean, positionMeaning: string, meaning: string) => string;
  energyAllUpright: string;
  energyAllReversed: string;
  energyMoreReversed: string;
  energyMixed: string;
  weightMajorHeavy: string;
  weightMinorHeavy: string;
  spreadOf: (spreadName: string, count: number) => string;
  questionPrefix: (question: string) => string;
  closing: (cardName: string, reversed: boolean, positionName: string, meaning: string) => string;
}

const TEMPLATES: Record<Language, Templates> = {
  en: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `In the ${position.toLowerCase()} position, ${card}${reversed ? " (reversed)" : ""} speaks to ${positionMeaning.toLowerCase()}. Drawn ${reversed ? "reversed" : "upright"}, it points to ${meaning.toLowerCase()}`,
    energyAllUpright:
      "Every card fell upright — the energy around this question is flowing freely, with little standing in your way.",
    energyAllReversed:
      "The whole spread turned reversed, suggesting real resistance or a need to look inward before acting outward.",
    energyMoreReversed:
      "More cards are reversed than not, hinting at some internal blocks worth naming honestly.",
    energyMixed:
      "A mix of upright and reversed cards shows both momentum and friction — the picture is nuanced, not one-sided.",
    weightMajorHeavy:
      "With so much Major Arcana present, this reading touches on a significant, life-shaping theme rather than a small day-to-day matter.",
    weightMinorHeavy:
      "The Minor Arcana dominates here, so this is likely about the practical, everyday texture of the situation rather than a grand turning point.",
    spreadOf: (spreadName, count) => `${spreadName} spread of ${count} card${count === 1 ? "" : "s"}.`,
    questionPrefix: (question) => `On the question of "${question}," `,
    closing: (card, reversed, position, meaning) =>
      `The reading closes with ${card}${reversed ? " reversed" : ""} in the ${position.toLowerCase()} position — ${meaning.toLowerCase()}`,
  },
  hi: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" स्थिति में, ${card}${reversed ? " (उल्टा)" : ""} यह दर्शाता है: ${positionMeaning}। ${reversed ? "उल्टा" : "सीधा"} आने पर, यह संकेत करता है: ${meaning}`,
    energyAllUpright:
      "सभी कार्ड सीधे आए हैं — इस सवाल के आस-पास ऊर्जा स्वतंत्र रूप से बह रही है, रास्ते में कोई बड़ी रुकावट नहीं है।",
    energyAllReversed:
      "पूरा स्प्रेड उल्टा आया है, जो दर्शाता है कि कोई वास्तविक प्रतिरोध है या बाहर कदम बढ़ाने से पहले अंदर झांकने की ज़रूरत है।",
    energyMoreReversed:
      "सीधे कार्डों से ज़्यादा उल्टे कार्ड आए हैं, जो कुछ आंतरिक रुकावटों की ओर इशारा करते हैं जिन्हें ईमानदारी से पहचानना ज़रूरी है।",
    energyMixed:
      "सीधे और उल्टे कार्डों का मिश्रण गति और घर्षण दोनों दिखाता है — तस्वीर बहुआयामी है, एकतरफा नहीं।",
    weightMajorHeavy:
      "इतने सारे Major Arcana कार्ड होने से, यह रीडिंग एक महत्वपूर्ण, जीवन बदलने वाले विषय को छूती है, न कि किसी छोटी रोज़मर्रा की बात को।",
    weightMinorHeavy:
      "यहां Minor Arcana हावी है, इसलिए यह संभवतः स्थिति के व्यावहारिक, रोज़मर्रा के पहलू के बारे में है, न कि किसी बड़े मोड़ के बारे में।",
    spreadOf: (spreadName, count) => `${spreadName} स्प्रेड, ${count} कार्ड${count === 1 ? "" : "ों"} का।`,
    questionPrefix: (question) => `"${question}" के सवाल पर, `,
    closing: (card, reversed, position, meaning) =>
      `रीडिंग "${position}" स्थिति में ${card}${reversed ? " (उल्टा)" : ""} के साथ समाप्त होती है — ${meaning}`,
  },
  hinglish: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" position mein, ${card}${reversed ? " (reversed)" : ""} yeh dikhata hai: ${positionMeaning}. ${reversed ? "Reversed" : "Upright"} aaya hai, toh iska ishara hai: ${meaning}`,
    energyAllUpright:
      "Saare cards upright aaye hain — is sawaal ke around energy freely flow kar rahi hai, raaste mein koi badi rukawat nahi hai.",
    energyAllReversed:
      "Poora spread reversed aaya hai, jo batata hai ki koi real resistance hai ya bahar kadam badhane se pehle andar dekhne ki zaroorat hai.",
    energyMoreReversed:
      "Upright se zyada reversed cards aaye hain, jo kuch internal blocks ki taraf ishara karte hain jinhe honestly accept karna zaroori hai.",
    energyMixed:
      "Upright aur reversed cards ka mix momentum aur friction dono dikhata hai — picture nuanced hai, ek-tarfa nahi.",
    weightMajorHeavy:
      "Itne saare Major Arcana cards hone se, yeh reading ek significant, life-shaping theme ko touch karti hai, na ki kisi chhoti everyday baat ko.",
    weightMinorHeavy:
      "Yahan Minor Arcana dominate karta hai, isliye yeh shayad situation ke practical, everyday pehlu ke baare mein hai, na ki kisi bade turning point ke baare mein.",
    spreadOf: (spreadName, count) => `${spreadName} spread, ${count} card${count === 1 ? "" : "s"} ka.`,
    questionPrefix: (question) => `"${question}" wale sawaal pe, `,
    closing: (card, reversed, position, meaning) =>
      `Reading "${position}" position mein ${card}${reversed ? " (reversed)" : ""} ke saath khatam hoti hai — ${meaning}`,
  },
  bn: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" অবস্থানে, ${card}${reversed ? " (উল্টানো)" : ""} এটি দেখায়: ${positionMeaning}। ${reversed ? "উল্টানো" : "সোজা"} আসায়, এটি ইঙ্গিত করে: ${meaning}`,
    energyAllUpright:
      "সব কার্ড সোজা এসেছে — এই প্রশ্নের চারপাশে শক্তি অবাধে প্রবাহিত হচ্ছে, পথে তেমন কোনো বাধা নেই।",
    energyAllReversed:
      "পুরো স্প্রেড উল্টানো এসেছে, যা বোঝায় যে কোনো প্রকৃত প্রতিরোধ আছে অথবা বাইরে পদক্ষেপ নেওয়ার আগে ভেতরে তাকানো দরকার।",
    energyMoreReversed:
      "সোজা কার্ডের চেয়ে বেশি উল্টানো কার্ড এসেছে, যা কিছু অভ্যন্তরীণ বাধার ইঙ্গিত দেয় যা সততার সাথে চিহ্নিত করা দরকার।",
    energyMixed:
      "সোজা ও উল্টানো কার্ডের মিশ্রণ গতি এবং ঘর্ষণ উভয়ই দেখায় — ছবিটি জটিল, একতরফা নয়।",
    weightMajorHeavy:
      "এত বেশি Major Arcana কার্ড থাকায়, এই রিডিং একটি গুরুত্বপূর্ণ, জীবন পরিবর্তনকারী বিষয় স্পর্শ করে, কোনো ছোট দৈনন্দিন বিষয় নয়।",
    weightMinorHeavy:
      "এখানে Minor Arcana প্রাধান্য পাচ্ছে, তাই এটি সম্ভবত পরিস্থিতির ব্যবহারিক, দৈনন্দিন দিক সম্পর্কে, কোনো বড় মোড় সম্পর্কে নয়।",
    spreadOf: (spreadName, count) => `${spreadName} স্প্রেড, ${count}টি কার্ডের।`,
    questionPrefix: (question) => `"${question}" প্রশ্নের ক্ষেত্রে, `,
    closing: (card, reversed, position, meaning) =>
      `রিডিং শেষ হয় "${position}" অবস্থানে ${card}${reversed ? " (উল্টানো)" : ""} দিয়ে — ${meaning}`,
  },
  te: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" స్థానంలో, ${card}${reversed ? " (రివర్స్డ్)" : ""} ఇది సూచిస్తుంది: ${positionMeaning}. ${reversed ? "రివర్స్డ్‌గా" : "నిటారుగా"} వచ్చినప్పుడు, ఇది సూచిస్తుంది: ${meaning}`,
    energyAllUpright:
      "అన్ని కార్డులు నిటారుగా వచ్చాయి — ఈ ప్రశ్న చుట్టూ శక్తి స్వేచ్ఛగా ప్రవహిస్తోంది, దారిలో పెద్ద అడ్డంకులు లేవు.",
    energyAllReversed:
      "మొత్తం స్ప్రెడ్ రివర్స్డ్‌గా వచ్చింది, ఇది నిజమైన ప్రతిఘటన ఉందని లేదా బయటకు అడుగు వేయడానికి ముందు లోపలికి చూడాల్సిన అవసరం ఉందని సూచిస్తుంది.",
    energyMoreReversed:
      "నిటారుగా ఉన్న వాటి కంటే ఎక్కువ రివర్స్డ్ కార్డులు వచ్చాయి, ఇది నిజాయితీగా గుర్తించాల్సిన కొన్ని అంతర్గత అడ్డంకులను సూచిస్తుంది.",
    energyMixed:
      "నిటారుగా మరియు రివర్స్డ్ కార్డుల మిశ్రమం వేగం మరియు ఘర్షణ రెండింటినీ చూపిస్తుంది — చిత్రం సూక్ష్మమైనది, ఏకపక్షం కాదు.",
    weightMajorHeavy:
      "ఇంత ఎక్కువ Major Arcana ఉండటంతో, ఈ రీడింగ్ ఒక చిన్న రోజువారీ విషయం కాకుండా ఒక ముఖ్యమైన, జీవితాన్ని మార్చే అంశాన్ని తాకుతుంది.",
    weightMinorHeavy:
      "ఇక్కడ Minor Arcana ఆధిపత్యం చెలాయిస్తుంది, కాబట్టి ఇది బహుశా పెద్ద మలుపు గురించి కాకుండా పరిస్థితి యొక్క ఆచరణాత్మక, రోజువారీ కోణం గురించి ఉంటుంది.",
    spreadOf: (spreadName, count) => `${spreadName} స్ప్రెడ్, ${count} కార్డుల.`,
    questionPrefix: (question) => `"${question}" అనే ప్రశ్నపై, `,
    closing: (card, reversed, position, meaning) =>
      `రీడింగ్ "${position}" స్థానంలో ${card}${reversed ? " (రివర్స్డ్)" : ""} తో ముగుస్తుంది — ${meaning}`,
  },
  mr: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" स्थितीत, ${card}${reversed ? " (उलटं)" : ""} हे दर्शवतं: ${positionMeaning}. ${reversed ? "उलटं" : "सरळ"} आल्यावर, हे सुचवतं: ${meaning}`,
    energyAllUpright:
      "सर्व कार्ड सरळ आली आहेत — या प्रश्नाभोवतीची ऊर्जा मुक्तपणे वाहत आहे, वाटेत फारशी अडचण नाही.",
    energyAllReversed:
      "संपूर्ण स्प्रेड उलटं आलं आहे, जे खरा विरोध किंवा बाहेर पाऊल टाकण्याआधी आतमध्ये पाहण्याची गरज दर्शवतं.",
    energyMoreReversed:
      "सरळ कार्डांपेक्षा जास्त उलटी कार्डं आली आहेत, जी काही आंतरिक अडथळ्यांकडे इशारा करतात जे प्रामाणिकपणे ओळखणं गरजेचं आहे.",
    energyMixed:
      "सरळ आणि उलट्या कार्डांचं मिश्रण गती आणि घर्षण दोन्ही दाखवतं — चित्र गुंतागुंतीचं आहे, एकतर्फी नाही.",
    weightMajorHeavy:
      "इतकी सगळी Major Arcana कार्डं असल्याने, ही रीडिंग एका छोट्या रोजच्या गोष्टीऐवजी एका महत्त्वाच्या, आयुष्य बदलणाऱ्या विषयाला स्पर्श करते.",
    weightMinorHeavy:
      "इथे Minor Arcana चं प्राबल्य आहे, त्यामुळे हे कदाचित एखाद्या मोठ्या वळणाऐवजी परिस्थितीच्या व्यावहारिक, रोजच्या पैलूबद्दल आहे.",
    spreadOf: (spreadName, count) => `${spreadName} स्प्रेड, ${count} कार्डांचा.`,
    questionPrefix: (question) => `"${question}" या प्रश्नावर, `,
    closing: (card, reversed, position, meaning) =>
      `रीडिंग "${position}" स्थितीत ${card}${reversed ? " (उलटं)" : ""} सह संपते — ${meaning}`,
  },
  ta: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" நிலையில், ${card}${reversed ? " (தலைகீழ்)" : ""} இது காட்டுகிறது: ${positionMeaning}. ${reversed ? "தலைகீழாக" : "நேராக"} வந்தால், இது சுட்டிக்காட்டுகிறது: ${meaning}`,
    energyAllUpright:
      "எல்லா அட்டைகளும் நேராக வந்துள்ளன — இந்த கேள்வியைச் சுற்றியுள்ள ஆற்றல் சுதந்திரமாக பாய்கிறது, வழியில் பெரிய தடை இல்லை.",
    energyAllReversed:
      "முழு ஸ்ப்ரெட்டும் தலைகீழாக வந்துள்ளது, இது உண்மையான எதிர்ப்பு அல்லது வெளியே அடி எடுப்பதற்கு முன் உள்ளே பார்க்க வேண்டியதைக் குறிக்கிறது.",
    energyMoreReversed:
      "நேராக இருப்பதை விட அதிக தலைகீழ் அட்டைகள் வந்துள்ளன, இது நேர்மையாக அடையாளம் காண வேண்டிய சில உள் தடைகளைக் குறிக்கிறது.",
    energyMixed:
      "நேரான மற்றும் தலைகீழ் அட்டைகளின் கலவை வேகத்தையும் உராய்வையும் காட்டுகிறது — படம் நுணுக்கமானது, ஒருதலைப்பட்சமானது அல்ல.",
    weightMajorHeavy:
      "இவ்வளவு Major Arcana இருப்பதால், இந்த ரீடிங் ஒரு சிறிய அன்றாட விஷயத்தை விட ஒரு முக்கியமான, வாழ்க்கையை மாற்றும் தலைப்பைத் தொடுகிறது.",
    weightMinorHeavy:
      "இங்கே Minor Arcana ஆதிக்கம் செலுத்துகிறது, எனவே இது ஒரு பெரிய திருப்புமுனையை விட சூழ்நிலையின் நடைமுறை, அன்றாட அம்சத்தைப் பற்றியதாக இருக்கலாம்.",
    spreadOf: (spreadName, count) => `${spreadName} ஸ்ப்ரெட், ${count} அட்டைகள்.`,
    questionPrefix: (question) => `"${question}" என்ற கேள்விக்கு, `,
    closing: (card, reversed, position, meaning) =>
      `ரீடிங் "${position}" நிலையில் ${card}${reversed ? " (தலைகீழ்)" : ""} உடன் முடிகிறது — ${meaning}`,
  },
  gu: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" સ્થિતિમાં, ${card}${reversed ? " (ઊલટું)" : ""} આ દર્શાવે છે: ${positionMeaning}. ${reversed ? "ઊલટું" : "સીધું"} આવવા પર, આ સૂચવે છે: ${meaning}`,
    energyAllUpright:
      "બધા કાર્ડ સીધા આવ્યા છે — આ પ્રશ્નની આસપાસની ઊર્જા મુક્તપણે વહી રહી છે, રસ્તામાં કોઈ મોટો અવરોધ નથી.",
    energyAllReversed:
      "આખો સ્પ્રેડ ઊલટો આવ્યો છે, જે વાસ્તવિક પ્રતિકાર અથવા બહાર પગલું ભરતાં પહેલાં અંદર જોવાની જરૂરિયાત દર્શાવે છે.",
    energyMoreReversed:
      "સીધા કરતાં વધુ ઊલટા કાર્ડ આવ્યા છે, જે કેટલાક આંતરિક અવરોધો તરફ ઈશારો કરે છે જેને પ્રામાણિકપણે ઓળખવા જરૂરી છે.",
    energyMixed:
      "સીધા અને ઊલટા કાર્ડનું મિશ્રણ ગતિ અને ઘર્ષણ બંને દર્શાવે છે — ચિત્ર જટિલ છે, એકતરફી નથી.",
    weightMajorHeavy:
      "આટલા બધા Major Arcana કાર્ડ હોવાથી, આ રીડિંગ કોઈ નાની રોજિંદી બાબતને બદલે એક મહત્વપૂર્ણ, જીવન બદલનારા વિષયને સ્પર્શે છે.",
    weightMinorHeavy:
      "અહીં Minor Arcana નું પ્રભુત્વ છે, તેથી આ કદાચ કોઈ મોટા વળાંક વિશે નહીં પણ પરિસ્થિતિના વ્યવહારુ, રોજિંદા પાસા વિશે છે.",
    spreadOf: (spreadName, count) => `${spreadName} સ્પ્રેડ, ${count} કાર્ડનો.`,
    questionPrefix: (question) => `"${question}" પ્રશ્ન પર, `,
    closing: (card, reversed, position, meaning) =>
      `રીડિંગ "${position}" સ્થિતિમાં ${card}${reversed ? " (ઊલટું)" : ""} સાથે સમાપ્ત થાય છે — ${meaning}`,
  },
  kn: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" ಸ್ಥಾನದಲ್ಲಿ, ${card}${reversed ? " (ವಿಲೋಮ)" : ""} ಇದು ಸೂಚಿಸುತ್ತದೆ: ${positionMeaning}. ${reversed ? "ವಿಲೋಮವಾಗಿ" : "ನೇರವಾಗಿ"} ಬಂದಾಗ, ಇದು ಸೂಚಿಸುತ್ತದೆ: ${meaning}`,
    energyAllUpright:
      "ಎಲ್ಲಾ ಕಾರ್ಡ್‌ಗಳು ನೇರವಾಗಿ ಬಂದಿವೆ — ಈ ಪ್ರಶ್ನೆಯ ಸುತ್ತಲಿನ ಶಕ್ತಿ ಮುಕ್ತವಾಗಿ ಹರಿಯುತ್ತಿದೆ, ದಾರಿಯಲ್ಲಿ ಹೆಚ್ಚಿನ ಅಡೆತಡೆ ಇಲ್ಲ.",
    energyAllReversed:
      "ಇಡೀ ಸ್ಪ್ರೆಡ್ ವಿಲೋಮವಾಗಿ ಬಂದಿದೆ, ಇದು ನಿಜವಾದ ಪ್ರತಿರೋಧ ಅಥವಾ ಹೊರಗೆ ಹೆಜ್ಜೆ ಇಡುವ ಮೊದಲು ಒಳಗೆ ನೋಡುವ ಅಗತ್ಯವನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
    energyMoreReversed:
      "ನೇರವಾಗಿರುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ವಿಲೋಮ ಕಾರ್ಡ್‌ಗಳು ಬಂದಿವೆ, ಇದು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಗುರುತಿಸಬೇಕಾದ ಕೆಲವು ಆಂತರಿಕ ಅಡೆತಡೆಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
    energyMixed:
      "ನೇರ ಮತ್ತು ವಿಲೋಮ ಕಾರ್ಡ್‌ಗಳ ಮಿಶ್ರಣವು ವೇಗ ಮತ್ತು ಘರ್ಷಣೆ ಎರಡನ್ನೂ ತೋರಿಸುತ್ತದೆ — ಚಿತ್ರ ಸೂಕ್ಷ್ಮವಾಗಿದೆ, ಏಕಪಕ್ಷೀಯವಲ್ಲ.",
    weightMajorHeavy:
      "ಇಷ್ಟೊಂದು Major Arcana ಇರುವುದರಿಂದ, ಈ ರೀಡಿಂಗ್ ಒಂದು ಸಣ್ಣ ದೈನಂದಿನ ವಿಷಯಕ್ಕಿಂತ ಒಂದು ಮಹತ್ವದ, ಜೀವನ ಬದಲಾಯಿಸುವ ವಿಷಯವನ್ನು ಸ್ಪರ್ಶಿಸುತ್ತದೆ.",
    weightMinorHeavy:
      "ಇಲ್ಲಿ Minor Arcana ಪ್ರಾಬಲ್ಯ ಹೊಂದಿದೆ, ಆದ್ದರಿಂದ ಇದು ಬಹುಶಃ ಒಂದು ದೊಡ್ಡ ತಿರುವಿನ ಬದಲು ಪರಿಸ್ಥಿತಿಯ ಪ್ರಾಯೋಗಿಕ, ದೈನಂದಿನ ಅಂಶದ ಬಗ್ಗೆ ಆಗಿದೆ.",
    spreadOf: (spreadName, count) => `${spreadName} ಸ್ಪ್ರೆಡ್, ${count} ಕಾರ್ಡ್‌ಗಳ.`,
    questionPrefix: (question) => `"${question}" ಎಂಬ ಪ್ರಶ್ನೆಯ ಮೇಲೆ, `,
    closing: (card, reversed, position, meaning) =>
      `ರೀಡಿಂಗ್ "${position}" ಸ್ಥಾನದಲ್ಲಿ ${card}${reversed ? " (ವಿಲೋಮ)" : ""} ಜೊತೆ ಮುಗಿಯುತ್ತದೆ — ${meaning}`,
  },
  ml: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" സ്ഥാനത്ത്, ${card}${reversed ? " (വിപരീതം)" : ""} ഇത് സൂചിപ്പിക്കുന്നു: ${positionMeaning}. ${reversed ? "വിപരീതമായി" : "നേരെ"} വന്നപ്പോൾ, ഇത് ചൂണ്ടിക്കാണിക്കുന്നു: ${meaning}`,
    energyAllUpright:
      "എല്ലാ കാർഡുകളും നേരെ വന്നു — ഈ ചോദ്യത്തിന് ചുറ്റുമുള്ള ഊർജ്ജം സ്വതന്ത്രമായി ഒഴുകുന്നു, വഴിയിൽ വലിയ തടസ്സമില്ല.",
    energyAllReversed:
      "മുഴുവൻ സ്‌പ്രെഡും വിപരീതമായി വന്നു, ഇത് യഥാർത്ഥ പ്രതിരോധത്തെയോ പുറത്തേക്ക് ചുവടുവെക്കുന്നതിന് മുമ്പ് അകത്തേക്ക് നോക്കേണ്ടതിന്റെ ആവശ്യകതയെയോ സൂചിപ്പിക്കുന്നു.",
    energyMoreReversed:
      "നേരെയുള്ളതിനേക്കാൾ കൂടുതൽ വിപരീത കാർഡുകൾ വന്നു, ഇത് സത്യസന്ധമായി തിരിച്ചറിയേണ്ട ചില ആന്തരിക തടസ്സങ്ങളെ സൂചിപ്പിക്കുന്നു.",
    energyMixed:
      "നേരെയും വിപരീതവുമായ കാർഡുകളുടെ മിശ്രിതം ചലനവും ഘർഷണവും കാണിക്കുന്നു — ചിത്രം സൂക്ഷ്മമാണ്, ഏകപക്ഷീയമല്ല.",
    weightMajorHeavy:
      "ഇത്രയധികം Major Arcana ഉള്ളതിനാൽ, ഈ റീഡിംഗ് ഒരു ചെറിയ ദൈനംദിന കാര്യത്തേക്കാൾ ഒരു പ്രധാനപ്പെട്ട, ജീവിതത്തെ മാറ്റുന്ന വിഷയത്തെ സ്പർശിക്കുന്നു.",
    weightMinorHeavy:
      "ഇവിടെ Minor Arcana ആധിപത്യം പുലർത്തുന്നു, അതിനാൽ ഇത് ഒരു വലിയ വഴിത്തിരിവിനെക്കാൾ സാഹചര്യത്തിന്റെ പ്രായോഗികവും ദൈനംദിനവുമായ വശത്തെക്കുറിച്ചാകാം.",
    spreadOf: (spreadName, count) => `${spreadName} സ്‌പ്രെഡ്, ${count} കാർഡുകൾ.`,
    questionPrefix: (question) => `"${question}" എന്ന ചോദ്യത്തിൽ, `,
    closing: (card, reversed, position, meaning) =>
      `റീഡിംഗ് "${position}" സ്ഥാനത്ത് ${card}${reversed ? " (വിപരീതം)" : ""} കൊണ്ട് അവസാനിക്കുന്നു — ${meaning}`,
  },
  pa: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" ਸਥਿਤੀ ਵਿੱਚ, ${card}${reversed ? " (ਉਲਟਾ)" : ""} ਇਹ ਦਰਸਾਉਂਦਾ ਹੈ: ${positionMeaning}। ${reversed ? "ਉਲਟਾ" : "ਸਿੱਧਾ"} ਆਉਣ 'ਤੇ, ਇਹ ਸੰਕੇਤ ਦਿੰਦਾ ਹੈ: ${meaning}`,
    energyAllUpright:
      "ਸਾਰੇ ਕਾਰਡ ਸਿੱਧੇ ਆਏ ਹਨ — ਇਸ ਸਵਾਲ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਊਰਜਾ ਖੁੱਲ੍ਹ ਕੇ ਵਹਿ ਰਹੀ ਹੈ, ਰਾਹ ਵਿੱਚ ਕੋਈ ਵੱਡੀ ਰੁਕਾਵਟ ਨਹੀਂ।",
    energyAllReversed:
      "ਪੂਰਾ ਸਪ੍ਰੈਡ ਉਲਟਾ ਆਇਆ ਹੈ, ਜੋ ਅਸਲ ਵਿਰੋਧ ਜਾਂ ਬਾਹਰ ਕਦਮ ਵਧਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਅੰਦਰ ਵੇਖਣ ਦੀ ਲੋੜ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।",
    energyMoreReversed:
      "ਸਿੱਧੇ ਨਾਲੋਂ ਵੱਧ ਉਲਟੇ ਕਾਰਡ ਆਏ ਹਨ, ਜੋ ਕੁਝ ਅੰਦਰੂਨੀ ਰੁਕਾਵਟਾਂ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਨੂੰ ਇਮਾਨਦਾਰੀ ਨਾਲ ਪਛਾਣਨਾ ਜ਼ਰੂਰੀ ਹੈ।",
    energyMixed:
      "ਸਿੱਧੇ ਅਤੇ ਉਲਟੇ ਕਾਰਡਾਂ ਦਾ ਮਿਸ਼ਰਣ ਗਤੀ ਅਤੇ ਟਕਰਾਅ ਦੋਵੇਂ ਦਿਖਾਉਂਦਾ ਹੈ — ਤਸਵੀਰ ਗੁੰਝਲਦਾਰ ਹੈ, ਇੱਕਪਾਸੜ ਨਹੀਂ।",
    weightMajorHeavy:
      "ਇੰਨੇ ਸਾਰੇ Major Arcana ਕਾਰਡ ਹੋਣ ਕਰਕੇ, ਇਹ ਰੀਡਿੰਗ ਕਿਸੇ ਛੋਟੀ ਰੋਜ਼ਾਨਾ ਗੱਲ ਦੀ ਬਜਾਏ ਇੱਕ ਮਹੱਤਵਪੂਰਨ, ਜ਼ਿੰਦਗੀ ਬਦਲਣ ਵਾਲੇ ਵਿਸ਼ੇ ਨੂੰ ਛੂੰਹਦੀ ਹੈ।",
    weightMinorHeavy:
      "ਇੱਥੇ Minor Arcana ਦਾ ਗਲਬਾ ਹੈ, ਇਸ ਲਈ ਇਹ ਸ਼ਾਇਦ ਕਿਸੇ ਵੱਡੇ ਮੋੜ ਦੀ ਬਜਾਏ ਸਥਿਤੀ ਦੇ ਵਿਹਾਰਕ, ਰੋਜ਼ਾਨਾ ਪਹਿਲੂ ਬਾਰੇ ਹੈ।",
    spreadOf: (spreadName, count) => `${spreadName} ਸਪ੍ਰੈਡ, ${count} ਕਾਰਡਾਂ ਦਾ।`,
    questionPrefix: (question) => `"${question}" ਸਵਾਲ 'ਤੇ, `,
    closing: (card, reversed, position, meaning) =>
      `ਰੀਡਿੰਗ "${position}" ਸਥਿਤੀ ਵਿੱਚ ${card}${reversed ? " (ਉਲਟਾ)" : ""} ਨਾਲ ਖਤਮ ਹੁੰਦੀ ਹੈ — ${meaning}`,
  },
  or: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" ସ୍ଥିତିରେ, ${card}${reversed ? " (ଓଲଟା)" : ""} ଏହା ଦର୍ଶାଏ: ${positionMeaning}। ${reversed ? "ଓଲଟା" : "ସିଧା"} ଆସିଲେ, ଏହା ସୂଚାଏ: ${meaning}`,
    energyAllUpright:
      "ସବୁ କାର୍ଡ ସିଧା ଆସିଛି — ଏହି ପ୍ରଶ୍ନ ଚାରିପାଖରେ ଶକ୍ତି ମୁକ୍ତ ଭାବରେ ପ୍ରବାହିତ ହେଉଛି, ପଥରେ ବଡ଼ ବାଧା ନାହିଁ।",
    energyAllReversed:
      "ସମଗ୍ର ସ୍ପ୍ରେଡ ଓଲଟା ଆସିଛି, ଯାହା ପ୍ରକୃତ ପ୍ରତିରୋଧ କିମ୍ବା ବାହାରକୁ ପାଦ ବଢାଇବା ପୂର୍ବରୁ ଭିତରକୁ ଦେଖିବାର ଆବଶ୍ୟକତାକୁ ସୂଚାଏ।",
    energyMoreReversed:
      "ସିଧା ଠାରୁ ଅଧିକ ଓଲଟା କାର୍ଡ ଆସିଛି, ଯାହା କିଛି ଆଭ୍ୟନ୍ତରୀଣ ବାଧାକୁ ସୂଚାଏ ଯାହାକୁ ସାଚ୍ଚୋଟତାର ସହିତ ଚିହ୍ନଟ କରିବା ଆବଶ୍ୟକ।",
    energyMixed:
      "ସିଧା ଏବଂ ଓଲଟା କାର୍ଡର ମିଶ୍ରଣ ଗତି ଏବଂ ଘର୍ଷଣ ଉଭୟ ଦେଖାଏ — ଚିତ୍ର ସୂକ୍ଷ୍ମ, ଏକପାକ୍ଷିକ ନୁହେଁ।",
    weightMajorHeavy:
      "ଏତେ ଅଧିକ Major Arcana ଥିବାରୁ, ଏହି ରିଡିଂ ଏକ ଛୋଟ ଦୈନନ୍ଦିନ ବିଷୟ ପରିବର୍ତ୍ତେ ଏକ ମହତ୍ୱପୂର୍ଣ୍ଣ, ଜୀବନ ପରିବର୍ତ୍ତନକାରୀ ବିଷୟକୁ ସ୍ପର୍ଶ କରେ।",
    weightMinorHeavy:
      "ଏଠାରେ Minor Arcana ପ୍ରାଧାନ୍ୟ ପାଉଛି, ତେଣୁ ଏହା ବୋଧହୁଏ ଏକ ବଡ଼ ମୋଡ଼ ପରିବର୍ତ୍ତେ ପରିସ୍ଥିତିର ବ୍ୟବହାରିକ, ଦୈନନ୍ଦିନ ଦିଗ ବିଷୟରେ।",
    spreadOf: (spreadName, count) => `${spreadName} ସ୍ପ୍ରେଡ, ${count} କାର୍ଡର।`,
    questionPrefix: (question) => `"${question}" ପ୍ରଶ୍ନ ଉପରେ, `,
    closing: (card, reversed, position, meaning) =>
      `ରିଡିଂ "${position}" ସ୍ଥିତିରେ ${card}${reversed ? " (ଓଲଟା)" : ""} ସହିତ ସମାପ୍ତ ହୁଏ — ${meaning}`,
  },
  as: {
    cardLine: (position, card, reversed, positionMeaning, meaning) =>
      `"${position}" স্থিতিত, ${card}${reversed ? " (বিপৰীত)" : ""} ই দেখুৱায়: ${positionMeaning}। ${reversed ? "বিপৰীত" : "পোন"} হৈ অহাত, ই ইংগিত দিয়ে: ${meaning}`,
    energyAllUpright:
      "সকলো কাৰ্ড পোনে আহিছে — এই প্ৰশ্নটোৰ চাৰিওফালে শক্তি মুক্তভাৱে বৈ আছে, বাটত বেছি বাধা নাই।",
    energyAllReversed:
      "গোটেই স্প্ৰেডটো বিপৰীতভাৱে আহিছে, যিয়ে প্ৰকৃত প্ৰতিৰোধ বা বাহিৰলৈ খোজ কঢ়াৰ আগতে ভিতৰলৈ চাবলগীয়া প্ৰয়োজনীয়তাক সূচায়।",
    energyMoreReversed:
      "পোনতকৈ বেছি বিপৰীত কাৰ্ড আহিছে, যিয়ে সততাৰে চিনাক্ত কৰিবলগীয়া কিছুমান আভ্যন্তৰীণ বাধাক সূচায়।",
    energyMixed:
      "পোন আৰু বিপৰীত কাৰ্ডৰ মিশ্ৰণে গতি আৰু ঘৰ্ষণ দুয়োটা দেখুৱায় — ছবিখন সূক্ষ্ম, একপাক্ষিক নহয়।",
    weightMajorHeavy:
      "ইমান বেছি Major Arcana থকাৰ বাবে, এই ৰিডিংটোৱে এটা সৰু দৈনন্দিন কথাৰ পৰিবৰ্তে এটা গুৰুত্বপূৰ্ণ, জীৱন সলনি কৰা বিষয় স্পৰ্শ কৰে।",
    weightMinorHeavy:
      "ইয়াত Minor Arcana ৰ প্ৰাধান্য আছে, সেয়ে ই সম্ভৱতঃ এটা ডাঙৰ মোৰৰ পৰিবৰ্তে পৰিস্থিতিৰ ব্যৱহাৰিক, দৈনন্দিন দিশৰ বিষয়ে।",
    spreadOf: (spreadName, count) => `${spreadName} স্প্ৰেড, ${count}টা কাৰ্ডৰ।`,
    questionPrefix: (question) => `"${question}" প্ৰশ্নত, `,
    closing: (card, reversed, position, meaning) =>
      `ৰিডিং "${position}" স্থিতিত ${card}${reversed ? " (বিপৰীত)" : ""} ৰ সৈতে সমাপ্ত হয় — ${meaning}`,
  },
};

/** Deterministic-ish rule-based synthesis of a reading — no external AI call required. */
export function interpretReading(
  spreadId: SpreadId,
  question: string,
  cards: DrawnCard[],
  lang: Language = "en",
): ReadingInterpretation {
  const spread = getSpread(spreadId);
  const focus = detectFocus(question);
  const tpl = TEMPLATES[lang];

  const perCard: CardInterpretation[] = cards.map((drawn, i) => {
    const card = getCardById(drawn.cardId);
    const position = spread.positions[i];
    if (!card || !position) {
      return {
        positionName: position?.name ?? `Card ${i + 1}`,
        cardId: drawn.cardId,
        reversed: drawn.reversed,
        text: "",
      };
    }
    const meaning = meaningFor(card, drawn.reversed, focus, lang);
    const text = tpl.cardLine(position.name, card.name, drawn.reversed, position.meaning, meaning);
    return { positionName: position.name, cardId: card.id, reversed: drawn.reversed, text };
  });

  const resolvedCards = cards
    .map((d) => getCardById(d.cardId))
    .filter((c): c is TarotCard => Boolean(c));

  const reversedCount = cards.filter((c) => c.reversed).length;
  const majorCount = resolvedCards.filter((c) => c.arcana === "major").length;

  const energyLine =
    reversedCount === 0
      ? tpl.energyAllUpright
      : reversedCount === cards.length
        ? tpl.energyAllReversed
        : reversedCount > cards.length / 2
          ? tpl.energyMoreReversed
          : tpl.energyMixed;

  const weightLine =
    majorCount >= Math.ceil(cards.length / 2) && cards.length > 1
      ? tpl.weightMajorHeavy
      : majorCount === 0 && cards.length > 1
        ? tpl.weightMinorHeavy
        : "";

  const lastCard = resolvedCards[resolvedCards.length - 1];
  const lastPosition = spread.positions[spread.positions.length - 1];
  const lastReversed = cards[cards.length - 1]?.reversed ?? false;
  const closingLine = lastCard
    ? tpl.closing(
        lastCard.name,
        lastReversed,
        lastPosition.name,
        meaningFor(lastCard, lastReversed, focus, lang).toLowerCase(),
      )
    : "";

  const questionLine = question ? tpl.questionPrefix(question) : "";

  const summary = [
    `${questionLine}${tpl.spreadOf(spread.name, cards.length)}`,
    energyLine,
    weightLine,
    closingLine,
  ]
    .filter(Boolean)
    .join(" ");

  return { perCard, summary };
}
