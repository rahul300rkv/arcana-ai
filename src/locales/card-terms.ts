import type { LocaleCode } from "./types";

type LocaleMap<T = string> = Record<LocaleCode, T>;

export const MAJOR_ARCANA_NAMES: Record<string, LocaleMap> = {
  "the-fool": {
    en: "The Fool",
    hi: "द फूल (अनाड़ी / नयी शुरुआत)",
    hinglish: "The Fool (Nayi Shuruat)",
    bn: "দ্য ফুল (নতুন সূচনা)",
    te: "ది ఫూల్ (కొత్త ఆరంభం)",
    mr: "द फूल (नवी सुरुवात)",
    ta: "தி ஃபூல் (புதிய தொடக்கம்)",
    gu: "ધ ફૂલ (નવી શરૂઆત)",
    kn: "ದಿ ಫೂಲ್ (ಹೊಸ ಆರಂಭ)",
    ml: "ദ ഫൂൾ (പുതിയ തുടക്കം)",
    pa: "ਦ ਫੂਲ (ਨਵੀਂ ਸ਼ੁਰੂਆਤ)",
    or: "ଦ ଫୁଲ୍ (ନୂଆ ଆରମ୍ଭ)",
    as: "দ্য ফুল (নতুন আৰম্ভণি)",
  },
  "the-magician": {
    en: "The Magician",
    hi: "द मैजिशियन (जादूगर)",
    hinglish: "The Magician (Ichha Shakti)",
    bn: "দ্য ম্যাজিশিয়ান (জাদুকর)",
    te: "ది మెజిషియన్ (మాంత్రికుడు)",
    mr: "द मॅजिशियन (जादूगार)",
    ta: "தி மெஜிஷியன் (மந்திரவாதி)",
    gu: "ધ મેજિશિયન (જાદુગર)",
    kn: "ದಿ ಮ್ಯಾಜಿಷಿಯನ್ (ಮಾಂತ್ರಿಕ)",
    ml: "ദ മജീഷ്യൻ (മാന്ത്രികൻ)",
    pa: "ਦ ਮੈਜੀਸ਼ੀਅਨ (ਜਾਦੂਗਰ)",
    or: "ଦ ମ୍ୟାଜିସିଆନ୍ (ଯାଦୁଗର)",
    as: "দ্য মেজিচিয়ান (যাদুকৰ)",
  },
  "the-high-priestess": {
    en: "The High Priestess",
    hi: "द हाई प्रीस्टेस (महापुरोहिता)",
    hinglish: "The High Priestess (Antargyan)",
    bn: "দ্য হাই প্রিস্টেস (অন্তর্জ্ঞান)",
    te: "ది హై ప్రీస్టెస్ (అంతర్దృష్టి)",
    mr: "द हाय प्रीस्टेस (अंतर्ज्ञान)",
    ta: "தி ஹை பிரீஸ்டஸ் (உள்ளுணர்வு)",
    gu: "ધ હાઈ પ્રિસ્ટેસ (અંતઃસ્ફુરણા)",
    kn: "ದಿ ಹೈ ಪ್ರೀಸ್ಟೆಸ್ (ಅಂತರ್ಜ್ಞಾನ)",
    ml: "ദ ഹൈ പ്രീസ്റ്റസ് (അന്തർജ്ഞാനം)",
    pa: "ਦ ਹਾਈ ਪ੍ਰੀਸਟੈੱਸ (ਅੰਤਰ-ਗਿਆਨ)",
    or: "ଦ ହାଇ ପ୍ରିଷ୍ଟେସ୍ (ଅନ୍ତର୍ଜ୍ଞାନ)",
    as: "দ্য হাই প্ৰিষ্টেছ (অন্তৰ্দৃষ্টি)",
  },
  "the-empress": {
    en: "The Empress",
    hi: "द एम्प्रेस (महारानी)",
    hinglish: "The Empress (Samriddhi)",
    bn: "দ্য এম্প্রেস (সম্রাজ্ঞী)",
    te: "ది ఎంప్రెస్ (సమృద్ధి)",
    mr: "द एम्प्रेस (सम्राज्ञी)",
    ta: "தி எம்பிரஸ் (பேரரசி)",
    gu: "ધ એમ્પ્રેસ (સમ્રાજ્ઞી)",
    kn: "ದಿ ಎಂಪ್ರೆಸ್ (ಸಾಮ್ರಾಜ್ಞಿ)",
    ml: "ദ എംപ്രസ് (ചക്രവർത്തിനി)",
    pa: "ਦ ਐਂਪਰੈੱਸ (ਮਹਾਰਾਣੀ)",
    or: "ଦ ଏମ୍ପ୍ରେସ୍ (ସମ୍ରାଜ୍ଞୀ)",
    as: "দ্য এম্প্ৰেছ (সম্ৰাজ্ঞী)",
  },
  "the-emperor": {
    en: "The Emperor",
    hi: "द एम्परर (सम्राट)",
    hinglish: "The Emperor (Anushasan)",
    bn: "দ্য এম্পারর (সম্রাট)",
    te: "ది ఎంపరర్ (చక్రవర్తి)",
    mr: "द एम्परर (सम्राट)",
    ta: "தி எம்பரர் (பேரரசன்)",
    gu: "ધ એમ્પરર (સમ્રાટ)",
    kn: "ದಿ ಎಂಪರರ್ (ಚಕ್ರವರ್ತಿ)",
    ml: "ദ എംപറർ (ചക്രവർത്തി)",
    pa: "ਦ ਐਂਪਰਰ (ਸਮਰਾਟ)",
    or: "ଦ ଏମ୍ପରର୍ (ସମ୍ରାଟ)",
    as: "দ্য এম্পেৰৰ (সম্ৰাট)",
  },
  "the-hierophant": {
    en: "The Hierophant",
    hi: "द हायरोफैंट (आचार्य / गुरु)",
    hinglish: "The Hierophant (Parampara & Guru)",
    bn: "দ্য হায়ারোফ্যান্ট (গুরু ও ঐতিহ্য)",
    te: "ది హైరోఫాంట్ (గురువు & సంప్రదాయం)",
    mr: "द हायरोफँट (गुरु व परंपरा)",
    ta: "தி ஹைரோபன்ட் (குரு & மரபு)",
    gu: "ધ હાયરોફેન્ટ (ગુરુ અને પરંપરા)",
    kn: "ದಿ ಹೈರೋಫ್ಯಾಂಟ್ (ಗುರು ಮತ್ತು ಸಂಪ್ರದಾಯ)",
    ml: "ദ ഹയറോഫന്റ് (ഗുരു & പാരമ്പര്യം)",
    pa: "ਦ ਹਾਇਰੋਫੈਂਟ (ਗੁਰੂ ਅਤੇ ਪਰੰਪਰਾ)",
    or: "ଦ ହାୟରୋଫ୍ୟାଣ୍ଟ୍ (ଗୁରୁ ଓ ପରମ୍ପରା)",
    as: "দ্য হায়াৰোফেণ্ট (গুৰু আৰু পৰম্পৰা)",
  },
  "the-lovers": {
    en: "The Lovers",
    hi: "द लवर्स (प्रेमी युगल)",
    hinglish: "The Lovers (Prem & Chayan)",
    bn: "দ্য লাভার্স (প্রেম ও নির্বাচন)",
    te: "ది లవర్స్ (ప్రేమ & ఎంపిక)",
    mr: "द लव्हर्स (प्रेम व निवड)",
    ta: "தி லவர்ஸ் (அன்பு & தேர்வு)",
    gu: "ધ લવર્સ (પ્રેમ અને પસંદગી)",
    kn: "ದಿ ಲವರ್ಸ್ (ಪ್ರೇಮ ಮತ್ತು ಆಯ್ಕೆ)",
    ml: "ദ ലവേഴ്‌സ് (പ്രണയവും തിരഞ്ഞെടുപ്പും)",
    pa: "ਦ ਲਵਰਜ਼ (ਪਿਆਰ ਅਤੇ ਚੋਣ)",
    or: "ଦ ଲଭର୍ସ (ପ୍ରେମ ଓ ଚୟନ)",
    as: "দ্য লাভাৰ্ছ (প্ৰেম আৰু নিৰ্বাচন)",
  },
  "the-chariot": {
    en: "The Chariot",
    hi: "द चैरियट (रथ / विजय)",
    hinglish: "The Chariot (Jeet & Sankalp)",
    bn: "দ্য চ্যারিয়ট (রথ ও বিজয়)",
    te: "ది చారియట్ (రథం & విజయం)",
    mr: "द चॅरियट (रथ व विजय)",
    ta: "தி சேரியட் (தேர் & வெற்றி)",
    gu: "ધ ચેરિયોટ (રથ અને વિજય)",
    kn: "ದಿ ಚಾರಿಯಟ್ (ರಥ ಮತ್ತು ವಿಜಯ)",
    ml: "ദ ചാരിയറ്റ് (രഥവും വിജയവും)",
    pa: "ਦ ਚੈਰੀਅਟ (ਰੱਥ ਅਤੇ ਜਿੱਤ)",
    or: "ଦ ଚାରିଅଟ୍ (ରଥ ଓ ବିଜୟ)",
    as: "দ্য চেৰিয়ট (ৰথ আৰু বিজয়)",
  },
  strength: {
    en: "Strength",
    hi: "स्ट्रेंथ (आंतरिक शक्ति)",
    hinglish: "Strength (Sanyam & Sahas)",
    bn: "স্ট্রেংথ (অন্তর্নিহিত শক্তি)",
    te: "స్ట్రెంత్ (అంతర్గత బలం)",
    mr: "स्ट्रेंथ (आंतरिक सामर्थ्य)",
    ta: "ஸ்ட்ரென்த் (உள் வலிமை)",
    gu: "સ્ટ્રેન્થ (આંતરિક શક્તિ)",
    kn: "ಸ್ಟ್ರೆಂತ್ (ಆಂತರಿಕ ಶಕ್ತಿ)",
    ml: "സ്ട്രെങ്ത് (ആന്തരിക ശക്തി)",
    pa: "ਸਟ੍ਰੈਂਥ (ਅੰਦਰੂਨੀ ਤਾਕਤ)",
    or: "ଷ୍ଟ୍ରେନ୍ଥ୍ (ଆନ୍ତରିକ ଶକ୍ତି)",
    as: "ষ্ট্ৰেংথ (আন্তৰিক শক্তি)",
  },
  "the-hermit": {
    en: "The Hermit",
    hi: "द हर्मिट (संन्यासी / आत्मचिंतन)",
    hinglish: "The Hermit (Ekant & Chintan)",
    bn: "দ্য হার্মিট (তপস্বী ও আত্মচিন্তা)",
    te: "ది హెర్మిట్ (తపస్వి & ఆత్మపరిశీలన)",
    mr: "द हर्मिट (तपस्वी व आत्मचिंतन)",
    ta: "தி ஹெர்மிட் (துறவி & தியானம்)",
    gu: "ધ હર્મિટ (તપસ્વી અને આત્મચિંતન)",
    kn: "ದಿ ಹರ್ಮಿಟ್ (ತಪಸ್ವಿ ಮತ್ತು ಆತ್ಮಚಿಂತನೆ)",
    ml: "ദ ഹെർമിറ്റ് (തപസ്വിയും ആത്മപരിശോധനയും)",
    pa: "ਦ ਹਰਮਿਟ (ਸੰਨਿਆਸੀ ਅਤੇ ਆਤਮ-ਚਿੰਤਨ)",
    or: "ଦ ହର୍ମିଟ୍ (ତପସ୍ୱୀ ଓ ଆତ୍ମଚିନ୍ତନ)",
    as: "দ্য হাৰ্মিট (তপস্বী আৰু আত্মচিন্তন)",
  },
  "wheel-of-fortune": {
    en: "Wheel of Fortune",
    hi: "व्हील ऑफ फॉर्च्यून (भाग्य चक्र)",
    hinglish: "Wheel of Fortune (Bhagya Chakra)",
    bn: "হুইল অব ফরচুন (ভাগ্যচক্র)",
    te: "వీల్ ఆఫ్ ఫార్చ్యూన్ (భాగ్య చక్రం)",
    mr: "व्हील ऑफ फॉर्च्यून (भाग्य चक्र)",
    ta: "வீல் ஆஃப் ஃபார்ச்சூன் (விதி சக்கரம்)",
    gu: "વ્હીલ ઓફ ફોર્ચ્યુન (ભાગ્ય ચક્ર)",
    kn: "ವೀಲ್ ಆಫ್ ಫಾರ್ಚ್ಯೂನ್ (ಭಾಗ್ಯ ಚಕ್ರ)",
    ml: "വീൽ ഓഫ് ഫോർച്യൂൺ (ഭാഗ്യചക്രം)",
    pa: "ਵ੍ਹੀਲ ਆਫ਼ ਫ਼ਾਰਚੂਨ (ਭਾਗ ਚੱਕਰ)",
    or: "ହ୍ୱିଲ୍ ଅଫ୍ ଫର୍ଚ୍ୟୁନ୍ (ଭାଗ୍ୟ ଚକ୍ର)",
    as: "হুইল অফ ফৰ্চুন (ভাগ্য চক্ৰ)",
  },
  justice: {
    en: "Justice",
    hi: "जस्टिस (न्याय)",
    hinglish: "Justice (Nyaya & Santulan)",
    bn: "জাস্টিস (ন্যায়বিচার)",
    te: "జస్టిస్ (న్యాయం)",
    mr: "जस्टिस (न्याय)",
    ta: "ஜஸ்டிஸ் (நீதி)",
    gu: "જસ્ટિસ (ન્યાય)",
    kn: "ಜಸ್ಟಿಸ್ (ನ್ಯಾಯ)",
    ml: "ജസ്റ്റിസ് (നീതി)",
    pa: "ਜਸਟਿਸ (ਨਿਆਂ)",
    or: "ଜଷ୍ଟିସ୍ (ନ୍ୟାୟ)",
    as: "জাষ্টিছ (ন্যায়)",
  },
  "the-hanged-man": {
    en: "The Hanged Man",
    hi: "द हैंग्ड मैन (ठहराव / नया दृष्टिकोण)",
    hinglish: "The Hanged Man (Thahrav & Nazar)",
    bn: "দ্য হ্যাংড ম্যান (বিরতি ও নতুন দৃষ্টি)",
    te: "ది హ్యాంగ్డ్ మ్యాన్ (విరామం & కొత్త కోణం)",
    mr: "द हँग्ड मॅन (विराम व नवा दृष्टिकोन)",
    ta: "தி ஹேங்க்ட் மேன் (இடைநிறுத்தம் & புதிய பார்வை)",
    gu: "ધ હેન્ગ્ડ મેન (વિરામ અને નવો દ્રષ્ટિકોણ)",
    kn: "ದಿ ಹ್ಯಾಂಗ್ಡ್ ಮ್ಯಾನ್ (ವಿರಾಮ ಮತ್ತು ಹೊಸ ದೃಷ್ಟಿ)",
    ml: "ദ ഹാംഗ്ഡ് മാൻ (നിശ്ചലതയും പുതിയ കാഴ്ചപ്പാടും)",
    pa: "ਦ ਹੈਂਗਡ ਮੈਨ (ਠਹਿਰਾਅ ਅਤੇ ਨਵਾਂ ਨਜ਼ਰੀਆ)",
    or: "ଦ ହ୍ୟାଙ୍ଗ୍ଡ ମ୍ୟାନ୍ (ବିରତି ଓ ନୂଆ ଦୃଷ୍ଟି)",
    as: "দ্য হেংড মেন (বিৰতি আৰু নতুন দৃষ্টিভংগী)",
  },
  death: {
    en: "Death",
    hi: "डेथ (रूपांतरण / नया अध्याय)",
    hinglish: "Death (Badlav & Naya Adhyay)",
    bn: "ডেথ (রূপান্তর ও সমাপ্তি)",
    te: "డెత్ (పరివర్తన & కొత్త ఆరంభం)",
    mr: "डेथ (परिवर्तन व नवा अध्याय)",
    ta: "டெத் (மாற்றம் & மறுபிறப்பு)",
    gu: "ડેથ (પરિવર્તન અને નવો અધ્યાય)",
    kn: "ಡೆತ್ (ಪರಿವರ್ತನೆ ಮತ್ತು ಹೊಸ ಅಧ್ಯಾಯ)",
    ml: "ഡെത്ത് (പരിവർത്തനവും പുതിയ അധ്യായവും)",
    pa: "ਡੈੱਥ (ਤਬਦੀਲੀ ਅਤੇ ਨਵਾਂ ਅਧਿਆਏ)",
    or: "ଡେଥ୍ (ପରିବର୍ତ୍ତନ ଓ ନୂଆ ଅଧ୍ୟାୟ)",
    as: "ডেথ (পৰিৱৰ্তন আৰু নতুন অধ্যায়)",
  },
  temperance: {
    en: "Temperance",
    hi: "टेम्परेंस (संयम और संतुलन)",
    hinglish: "Temperance (Sanyam & Santulan)",
    bn: "টেম্পারেন্স (সংযম ও ভারসাম্য)",
    te: "టెంపరెన్స్ (సంయమనం & సమతుల్యత)",
    mr: "टेम्परन्स (संयम व समतोल)",
    ta: "டெம்பரன்ஸ் (மிதவாதம் & சமநிலை)",
    gu: "ટેમ્પરન્સ (સંયમ અને સંતુલન)",
    kn: "ಟೆಂಪರೆನ್ಸ್ (ಸಂಯಮ ಮತ್ತು ಸಮತೋಲನ)",
    ml: "ടെമ്പറൻസ് (സംയമനവും സന്തുലിതാവസ്ഥയും)",
    pa: "ਟੈਂਪਰੈਂਸ (ਸੰਜਮ ਅਤੇ ਸੰਤੁਲਨ)",
    or: "ଟେମ୍ପରେନ୍ସ୍ (ସଂଯମ ଓ ସନ୍ତୁଳନ)",
    as: "টেম্পাৰেন্স (সংযম আৰু ভাৰসাম্য)",
  },
  "the-devil": {
    en: "The Devil",
    hi: "द डेविल (आसक्ति / बंधन)",
    hinglish: "The Devil (Bandhan & Moh)",
    bn: "দ্য ডেভিল (আসক্তি ও বন্ধন)",
    te: "ది డెవిల్ (బంధం & వ్యామోహం)",
    mr: "द डेव्हिल (बंधन व आसक्ती)",
    ta: "தி டெவில் (பற்று & கட்டு)",
    gu: "ધ ડેવિલ (આસક્તિ અને બંધન)",
    kn: "ದಿ ಡೆವಿಲ್ (ಬಂಧನ ಮತ್ತು ಮೋಹ)",
    ml: "ദ ഡെവിൾ (ബന്ധനവും ആസക്തിയും)",
    pa: "ਦ ਡੈਵਿਲ (ਮੋਹ ਅਤੇ ਬੰਧਨ)",
    or: "ଦ ଡେଭିଲ୍ (ଆସକ୍ତି ଓ ବନ୍ଧନ)",
    as: "দ্য ডেভিল (আসক্তি আৰু বন্ধন)",
  },
  "the-tower": {
    en: "The Tower",
    hi: "द टावर (अचानक परिवर्तन / सत्य)",
    hinglish: "The Tower (Achanak Badlav)",
    bn: "দ্য টাওয়ার (আকস্মিক পরিবর্তন)",
    te: "ది టవర్ (ఆకస్మిక మార్పు)",
    mr: "द टॉवर (अचानक बदल)",
    ta: "தி டவர் (திடீர் மாற்றம்)",
    gu: "ધ ટાવર (અચાનક પરિવર્તન)",
    kn: "ದಿ ಟವರ್ (ದಿಢೀರ್ ಬದಲಾವಣೆ)",
    ml: "ദ ടവർ (പെട്ടെന്നുള്ള മാറ്റം)",
    pa: "ਦ ਟਾਵਰ (ਅਚਾਨਕ ਤਬਦੀਲੀ)",
    or: "ଦ ଟାୱାର୍ (ଆକସ୍ମିକ ପରିବର୍ତ୍ତନ)",
    as: "দ্য টাৱাৰ (আকস্মিক পৰিৱৰ্তন)",
  },
  "the-star": {
    en: "The Star",
    hi: "द स्टार (आशा और उपचार)",
    hinglish: "The Star (Asha & Prerna)",
    bn: "দ্য স্টার (আশা ও আরোগ্য)",
    te: "ది స్టార్ (ఆశ & పునరుద్ధరణ)",
    mr: "द स्टार (आशा व उपचार)",
    ta: "தி ஸ்டார் (நம்பிக்கை & ஆறுதல்)",
    gu: "ધ સ્ટાર (આશા અને ઉપચાર)",
    kn: "ದಿ ಸ್ಟಾರ್ (ಭರವಸೆ ಮತ್ತು ಚೇತರಿಕೆ)",
    ml: "ദ സ്റ്റാർ (പ്രതീക്ഷയും സൗഖ്യവും)",
    pa: "ਦ ਸਟਾਰ (ਉਮੀਦ ਅਤੇ ਰਾਹਤ)",
    or: "ଦ ଷ୍ଟାର୍ (ଆଶା ଓ ସୁସ୍ଥତା)",
    as: "দ্য ষ্টাৰ (আশা আৰু আৰোগ্য)",
  },
  "the-moon": {
    en: "The Moon",
    hi: "द मून (भ्रम और अंतर्ज्ञान)",
    hinglish: "The Moon (Bhram & Antargyan)",
    bn: "দ্য মুন (ভ্রম ও অবচেতন)",
    te: "ది మూన్ (భ్రమ & అంతర్బుద్ధి)",
    mr: "द मून (भ्रम व अंतर्ज्ञान)",
    ta: "தி மூன் (மாயை & உள்ளுணர்வு)",
    gu: "ધ મૂન (ભ્રમ અને અંતઃસ્ફુરણા)",
    kn: "ದಿ ಮೂನ್ (ಭ್ರಮೆ ಮತ್ತು ಅಂತಃಪ್ರಜ್ಞೆ)",
    ml: "ദ മൂൺ (മായയും ഉൾക്കാഴ്ചയും)",
    pa: "ਦ ਮੂਨ (ਭਰਮ ਅਤੇ ਅੰਤਹਕਰਨ)",
    or: "ଦ ମୁନ୍ (ଭ୍ରମ ଓ ଅନ୍ତର୍ଜ୍ଞାନ)",
    as: "দ্য মুন (ভ্ৰম আৰু অন্তৰ্দৃষ্টি)",
  },
  "the-sun": {
    en: "The Sun",
    hi: "द सन (सूर्य / स्पष्टता और आनंद)",
    hinglish: "The Sun (Safalta & Roshni)",
    bn: "দ্য সান (সূর্য ও আনন্দ)",
    te: "ది సన్ (సూర్యుడు & స్పష్టత)",
    mr: "द सन (सूर्य व आनंद)",
    ta: "தி சன் (சூரியன் & வெற்றி)",
    gu: "ધ સન (સૂર્ય અને આનંદ)",
    kn: "ದಿ ಸನ್ (ಸೂರ್ಯ ಮತ್ತು ಸಂತೋಷ)",
    ml: "ദ സൺ (സൂര്യനും സന്തോഷവും)",
    pa: "ਦ ਸਨ (ਸੂਰਜ ਅਤੇ ਖੁਸ਼ੀ)",
    or: "ଦ ସନ୍ (ସୂର୍ଯ୍ୟ ଓ ଆନନ୍ଦ)",
    as: "দ্য ছান (সূৰ্য আৰু আনন্দ)",
  },
  judgement: {
    en: "Judgement",
    hi: "जजमेंट (आत्मजागरण / निर्णय)",
    hinglish: "Judgement (Punarjagran)",
    bn: "জাজমেন্ট (আত্মজাগরণ)",
    te: "జడ్జిమెంట్ (ఆత్మపరిశీలన & పిలుపు)",
    mr: "जजमेंट (आत्मजागरण)",
    ta: "ஜட்ஜ்மென்ட் (புத்துயிர் & அழைப்பு)",
    gu: "જજમેન્ટ (આત્મજાગરણ)",
    kn: "ಜಡ್ಜ್‌ಮೆಂಟ್ (ಆತ್ಮಜಾಗೃತಿ)",
    ml: "ജഡ്ജ്‌മെന്റ് (ആത്മീയ ഉണർവ്)",
    pa: "ਜੱਜਮੈਂਟ (ਆਤਮ-ਜਾਗ੍ਰਿਤੀ)",
    or: "ଜଜ୍‌ମେଣ୍ଟ୍ (ଆତ୍ମଜାଗରଣ)",
    as: "জাজমেণ্ট (আত্মজাগৰণ)",
  },
  "the-world": {
    en: "The World",
    hi: "द वर्ल्ड (पूर्णता / सिद्धि)",
    hinglish: "The World (Poornata & Safalta)",
    bn: "দ্য ওয়ার্ল্ড (পূর্ণতা ও সাফল্য)",
    te: "ది వరల్డ్ (సంపూర్ణత & విజయం)",
    mr: "द वर्ल्ड (पूर्णत्व व सिद्धी)",
    ta: "தி வேர்ல்ட் (முழுமை & நிறைவு)",
    gu: "ધ વર્લ્ડ (પૂર્ણતા અને સિદ્ધિ)",
    kn: "ದಿ ವರ್ಲ್ಡ್ (ಪೂರ್ಣತೆ ಮತ್ತು ಸಾಧನೆ)",
    ml: "ദ വേൾഡ് (പൂർണ്ണതയും വിജയവും)",
    pa: "ਦ ਵਰਲਡ (ਸੰਪੂਰਨਤਾ ਅਤੇ ਪ੍ਰਾਪਤੀ)",
    or: "ଦ ୱାର୍ଲ୍ଡ (ପୂର୍ଣ୍ଣତା ଓ ସିଦ୍ଧି)",
    as: "দ্য ৱৰ্ল্ড (পূৰ্ণতা আৰু সাফল্য)",
  },
};

export const MINOR_RANKS: Record<string, LocaleMap> = {
  ace: {
    en: "Ace", hi: "इक्का (Ace)", hinglish: "Ace (Ekka)", bn: "টেক্কা (Ace)", te: "ఏస్ (ఒకటి)",
    mr: "एक्का (Ace)", ta: "ஏஸ் (ஒன்று)", gu: "એક્કો (Ace)", kn: "ಏಸ್ (ಒಂದು)", ml: "ഏസ് (ഒന്ന്)",
    pa: "ਇੱਕਾ (Ace)", or: "ଏକ୍କା (Ace)", as: "টেক্কা (Ace)",
  },
  two: {
    en: "Two", hi: "दो (Two)", hinglish: "Two", bn: "দুই (Two)", te: "రెండు (Two)",
    mr: "दोन (Two)", ta: "இரண்டு (Two)", gu: "બે (Two)", kn: "ಎರಡು (Two)", ml: "രണ്ട് (Two)",
    pa: "ਦੋ (Two)", or: "ଦୁଇ (Two)", as: "দুই (Two)",
  },
  three: {
    en: "Three", hi: "तीन (Three)", hinglish: "Three", bn: "তিন (Three)", te: "మూడు (Three)",
    mr: "तीन (Three)", ta: "மூன்று (Three)", gu: "ત્રણ (Three)", kn: "ಮೂರು (Three)", ml: "മൂന്ന് (Three)",
    pa: "ਤਿੰਨ (Three)", or: "ତିନି (Three)", as: "তিনি (Three)",
  },
  four: {
    en: "Four", hi: "चार (Four)", hinglish: "Four", bn: "চার (Four)", te: "నాలుగు (Four)",
    mr: "चार (Four)", ta: "நான்கு (Four)", gu: "ચાર (Four)", kn: "ನಾಲ್ಕು (Four)", ml: "നാല് (Four)",
    pa: "ਚਾਰ (Four)", or: "ଚାରି (Four)", as: "চাৰি (Four)",
  },
  five: {
    en: "Five", hi: "पाँच (Five)", hinglish: "Five", bn: "পাঁচ (Five)", te: "ఐదు (Five)",
    mr: "पाच (Five)", ta: "ஐந்து (Five)", gu: "પાંચ (Five)", kn: "ಐದು (Five)", ml: "അഞ്ച് (Five)",
    pa: "ਪੰਜ (Five)", or: "ପାଞ୍ଚ (Five)", as: "পাঁচ (Five)",
  },
  six: {
    en: "Six", hi: "छह (Six)", hinglish: "Six", bn: "ছয় (Six)", te: "ఆరు (Six)",
    mr: "सहा (Six)", ta: "ஆறு (Six)", gu: "છ (Six)", kn: "ಆರು (Six)", ml: "ആറ് (Six)",
    pa: "ਛੇ (Six)", or: "ଛଅ (Six)", as: "ছয় (Six)",
  },
  seven: {
    en: "Seven", hi: "सात (Seven)", hinglish: "Seven", bn: "সাত (Seven)", te: "ఏడు (Seven)",
    mr: "सात (Seven)", ta: "ஏழு (Seven)", gu: "સાત (Seven)", kn: "ಏಳು (Seven)", ml: "ഏഴ് (Six/Seven)".replace("Six/Seven", "Seven"),
    pa: "ਸੱਤ (Seven)", or: "ସାତ (Seven)", as: "সাত (Seven)",
  },
  eight: {
    en: "Eight", hi: "आठ (Eight)", hinglish: "Eight", bn: "আট (Eight)", te: "ఎనిమిది (Eight)",
    mr: "आठ (Eight)", ta: "எட்டு (Eight)", gu: "આઠ (Eight)", kn: "ಎಂಟು (Eight)", ml: "എട്ട് (Eight)",
    pa: "ਅੱਠ (Eight)", or: "ଆଠ (Eight)", as: "আঠ (Eight)",
  },
  nine: {
    en: "Nine", hi: "नौ (Nine)", hinglish: "Nine", bn: "নয় (Nine)", te: "తొమ్మిది (Nine)",
    mr: "नऊ (Nine)", ta: "ஒன்பது (Nine)", gu: "નવ (Nine)", kn: "ಒಂಬತ್ತು (Nine)", ml: "ഒമ്പത് (Nine)",
    pa: "ਨੌਂ (Nine)", or: "ନଅ (Nine)", as: "ন (Nine)",
  },
  ten: {
    en: "Ten", hi: "दस (Ten)", hinglish: "Ten", bn: "দশ (Ten)", te: "పది (Ten)",
    mr: "दहा (Ten)", ta: "பத்து (Ten)", gu: "દસ (Ten)", kn: "ಹತ್ತು (Ten)", ml: "പത്ത് (Ten)",
    pa: "ਦਸ (Ten)", or: "ଦଶ (Ten)", as: "দহ (Ten)",
  },
  page: {
    en: "Page", hi: "पेज (संदेशवाहक)", hinglish: "Page", bn: "পেজ (বার্তাবাহক)", te: "పేజ్ (దూత)",
    mr: "पेज (दूत)", ta: "பேஜ் (தூதுவர்)", gu: "પેજ (સંદેશવાહક)", kn: "ಪೇಜ್ (ದೂತ)", ml: "പേജ് (ദൂതൻ)",
    pa: "ਪੇਜ (ਸੰਦੇਸ਼ਵਾਹਕ)", or: "ପେଜ୍ (ବାର୍ତ୍ତାବହ)", as: "পেজ (বাৰ্তাবাহক)",
  },
  knight: {
    en: "Knight", hi: "नाइट (योद्धा)", hinglish: "Knight", bn: "নাইট (যোদ্ধা)", te: "నైట్ (యోధుడు)",
    mr: "नाइट (योद्धा)", ta: "நைட் (வீரர்)", gu: "નાઇટ (યોદ્ધો)", kn: "ನೈಟ್ (ಯೋಧ)", ml: "നൈറ്റ് (യോദ്ധാവ്)",
    pa: "ਨਾਈਟ (ਯੋਧਾ)", or: "ନାଇଟ୍ (ଯୋଦ୍ଧା)", as: "নাইট (যোদ্ধা)",
  },
  queen: {
    en: "Queen", hi: "क्वीन (रानी)", hinglish: "Queen", bn: "কুইন (রানী)", te: "క్వీన్ (రాణి)",
    mr: "क्वीन (राणी)", ta: "குயின் (ராணி)", gu: "ક્વીન (રાણી)", kn: "ಕ್ವೀನ್ (ರಾಣಿ)", ml: "ക്വീൻ (രാജ്ഞി)",
    pa: "ਕੁਈਨ (ਰਾਣੀ)", or: "କୁଇନ୍ (ରାଣୀ)", as: "কুইন (ৰাণী)",
  },
  king: {
    en: "King", hi: "किंग (राजा)", hinglish: "King", bn: "কিং (রাজা)", te: "కింగ్ (రాజు)",
    mr: "किंग (राजा)", ta: "கிங் (அரசன்)", gu: "કિંગ (રાજા)", kn: "ಕಿಂಗ್ (ರಾಜ)", ml: "കിംഗ് (രാജാവ്)",
    pa: "ਕਿੰਗ (ਰਾਜਾ)", or: "କିଙ୍ଗ୍ (ରାଜା)", as: "কিং (ৰাজা)",
  },
};

export const SUIT_NAMES: Record<string, LocaleMap> = {
  wands: {
    en: "Wands", hi: "छड़ी (Wands)", hinglish: "Wands", bn: "দণ্ড (Wands)", te: "దండాలు (Wands)",
    mr: "दंड (Wands)", ta: "கோல்கள் (Wands)", gu: "દંડ (Wands)", kn: "ದಂಡಗಳು (Wands)", ml: "വടികൾ (Wands)",
    pa: "ਡੰਡੇ (Wands)", or: "ଦଣ୍ଡ (Wands)", as: "দণ্ড (Wands)",
  },
  cups: {
    en: "Cups", hi: "कप (Cups)", hinglish: "Cups", bn: "পাত্র (Cups)", te: "కప్పులు (Cups)",
    mr: "कप (Cups)", ta: "கோப்பைகள் (Cups)", gu: "કપ (Cups)", kn: "ಪಾತ್ರೆಗಳು (Cups)", ml: "കപ്പുകൾ (Cups)",
    pa: "ਕੱਪ (Cups)", or: "ପାତ୍ର (Cups)", as: "কাপ (Cups)",
  },
  swords: {
    en: "Swords", hi: "तलवार (Swords)", hinglish: "Swords", bn: "তলোয়ার (Swords)", te: "కత్తులు (Swords)",
    mr: "तलवार (Swords)", ta: "வாள்கள் (Swords)", gu: "તલવાર (Swords)", kn: "ಖಡ್ಗಗಳು (Swords)", ml: "വാളുകൾ (Swords)",
    pa: "ਤਲਵਾਰਾਂ (Swords)", or: "ତରବାରୀ (Swords)", as: "তৰোৱাল (Swords)",
  },
  pentacles: {
    en: "Pentacles", hi: "पेंटाकल्स / सिक्के (Pentacles)", hinglish: "Pentacles", bn: "মুদ্রা (Pentacles)", te: "నాణేలు (Pentacles)",
    mr: "नाणी (Pentacles)", ta: "நாணயங்கள் (Pentacles)", gu: "સિક્કા (Pentacles)", kn: "ನಾಣ್ಯಗಳು (Pentacles)", ml: "നാണയങ്ങൾ (Pentacles)",
    pa: "ਸਿੱਕੇ (Pentacles)", or: "ମୁଦ୍ରା (Pentacles)", as: "মুদ্ৰা (Pentacles)",
  },
};

export const ARCANA_NAMES: Record<"major" | "minor", LocaleMap> = {
  major: {
    en: "Major Arcana", hi: "मेजर आर्काना", hinglish: "Major Arcana", bn: "মেজর আর্কানা", te: "మేజర్ ఆర్కానా",
    mr: "मेजर आर्काना", ta: "மேஜர் ஆர்கானா", gu: "મેજર આર્કાના", kn: "ಮೇಜರ್ ಆರ್ಕಾನಾ", ml: "മേജർ അർക്കാന",
    pa: "ਮੇਜਰ ਆਰਕਾਨਾ", or: "ମେଜର୍ ଆର୍କାନା", as: "মেজৰ আৰ্কানা",
  },
  minor: {
    en: "Minor Arcana", hi: "माइनर आर्काना", hinglish: "Minor Arcana", bn: "মাইনর আর্কানা", te: "మైనర్ ఆర్కానా",
    mr: "मायनर आर्काना", ta: "மைனர் ஆர்கானா", gu: "માઇનર આર્કાના", kn: "ಮೈನರ್ ಆರ್ಕಾನಾ", ml: "മൈനർ അർക്കാന",
    pa: "ਮਾਈਨਰ ਆਰਕਾਨਾ", or: "ମାଇନର୍ ଆର୍କାନା", as: "মাইনৰ আৰ্কানা",
  },
};

export const ELEMENT_NAMES: Record<string, LocaleMap> = {
  Fire: {
    en: "Fire", hi: "अग्नि (Fire)", hinglish: "Fire (Agni)", bn: "অগ্নি (Fire)", te: "అగ్ని (Fire)",
    mr: "अग्नी (Fire)", ta: "நெருப்பு (Fire)", gu: "અગ્નિ (Fire)", kn: "ಅಗ್ನಿ (Fire)", ml: "അഗ്നി (Fire)",
    pa: "ਅੱਗ (Fire)", or: "ଅଗ୍ନି (Fire)", as: "অগ্নি (Fire)",
  },
  Water: {
    en: "Water", hi: "जल (Water)", hinglish: "Water (Jal)", bn: "জল (Water)", te: "జలం (Water)",
    mr: "जल (Water)", ta: "நீர் (Water)", gu: "જળ (Water)", kn: "ಜಲ (Water)", ml: "ജലം (Water)",
    pa: "ਪਾਣੀ (Water)", or: "ଜଳ (Water)", as: "জল (Water)",
  },
  Air: {
    en: "Air", hi: "वायु (Air)", hinglish: "Air (Vayu)", bn: "বায়ু (Air)", te: "వాయువు (Air)",
    mr: "वायू (Air)", ta: "காற்று (Air)", gu: "વાયુ (Air)", kn: "ವಾಯು (Air)", ml: "വായു (Air)",
    pa: "ਹਵਾ (Air)", or: "ବାୟୁ (Air)", as: "বায়ু (Air)",
  },
  Earth: {
    en: "Earth", hi: "पृथ्वी (Earth)", hinglish: "Earth (Prithvi)", bn: "পৃথিবী (Earth)", te: "భూమి (Earth)",
    mr: "पृथ्वी (Earth)", ta: "நிலம் (Earth)", gu: "પૃથ્વી (Earth)", kn: "ಭೂಮಿ (Earth)", ml: "ഭൂമി (Earth)",
    pa: "ਧਰਤੀ (Earth)", or: "ପୃଥିବୀ (Earth)", as: "পৃথিৱী (Earth)",
  },
};

export const PLANET_NAMES: Record<string, LocaleMap> = {
  Sun: {
    en: "Sun", hi: "सूर्य (Sun)", hinglish: "Surya (Sun)", bn: "সূর্য (Sun)", te: "సూర్యుడు (Sun)",
    mr: "सूर्य (Sun)", ta: "சூரியன் (Sun)", gu: "સૂર્ય (Sun)", kn: "ಸೂರ್ಯ (Sun)", ml: "സൂര്യൻ (Sun)",
    pa: "ਸੂਰਜ (Sun)", or: "ସୂର୍ଯ୍ୟ (Sun)", as: "সূৰ্য (Sun)",
  },
  Moon: {
    en: "Moon", hi: "चंद्रमा (Moon)", hinglish: "Chandra (Moon)", bn: "চন্দ্র (Moon)", te: "చంద్రుడు (Moon)",
    mr: "चंद्र (Moon)", ta: "சந்திரன் (Moon)", gu: "ચંદ્ર (Moon)", kn: "ಚಂದ್ರ (Moon)", ml: "ചന്ദ്രൻ (Moon)",
    pa: "ਚੰਦਰਮਾ (Moon)", or: "ଚନ୍ଦ୍ର (Moon)", as: "চন্দ্ৰ (Moon)",
  },
  Mercury: {
    en: "Mercury", hi: "बुध (Mercury)", hinglish: "Budha (Mercury)", bn: "বুধ (Mercury)", te: "బుధుడు (Mercury)",
    mr: "बुध (Mercury)", ta: "புதன் (Mercury)", gu: "બુધ (Mercury)", kn: "ಬುಧ (Mercury)", ml: "ബുധൻ (Mercury)",
    pa: "ਬੁੱਧ (Mercury)", or: "ବୁଧ (Mercury)", as: "বুধ (Mercury)",
  },
  Venus: {
    en: "Venus", hi: "शुक्र (Venus)", hinglish: "Shukra (Venus)", bn: "শুক্র (Venus)", te: "శుక్రుడు (Venus)",
    mr: "शुक्र (Venus)", ta: "சுக்கிரன் (Venus)", gu: "શુક્ર (Venus)", kn: "ಶುಕ್ರ (Venus)", ml: "ശുക്രൻ (Venus)",
    pa: "ਸ਼ੁੱਕਰ (Venus)", or: "ଶୁକ୍ର (Venus)", as: "শুক্ৰ (Venus)",
  },
  Mars: {
    en: "Mars", hi: "मंगल (Mars)", hinglish: "Mangal (Mars)", bn: "মঙ্গল (Mars)", te: "కుజుడు (Mars)",
    mr: "मंगळ (Mars)", ta: "செவ்வாய் (Mars)", gu: "મંગળ (Mars)", kn: "ಮಂಗಳ (Mars)", ml: "ചൊവ്വ (Mars)",
    pa: "ਮੰਗਲ (Mars)", or: "ମଙ୍ଗଳ (Mars)", as: "মঙ্গল (Mars)",
  },
  Jupiter: {
    en: "Jupiter", hi: "बृहस्पति / गुरु (Jupiter)", hinglish: "Guru (Jupiter)", bn: "বৃহস্পতি (Jupiter)", te: "గురుడు (Jupiter)",
    mr: "गुरू (Jupiter)", ta: "வியாழன் (Jupiter)", gu: "ગુરુ (Jupiter)", kn: "ಗುರು (Jupiter)", ml: "വ്യാഴം (Jupiter)",
    pa: "ਬ੍ਰਹਿਸਪਤੀ (Jupiter)", or: "ବୃହସ୍ପତି (Jupiter)", as: "বৃহস্পতি (Jupiter)",
  },
  Saturn: {
    en: "Saturn", hi: "शनि (Saturn)", hinglish: "Shani (Saturn)", bn: "শনি (Saturn)", te: "శని (Saturn)",
    mr: "शनी (Saturn)", ta: "சனி (Saturn)", gu: "શનિ (Saturn)", kn: "ಶನಿ (Saturn)", ml: "ശനി (Saturn)",
    pa: "ਸ਼ਨੀ (Saturn)", or: "ଶନି (Saturn)", as: "শনি (Saturn)",
  },
  Uranus: {
    en: "Uranus", hi: "अरुण (Uranus)", hinglish: "Uranus", bn: "ইউরেনাস (Uranus)", te: "యురేనస్ (Uranus)",
    mr: "युरेनस (Uranus)", ta: "யுரேனஸ் (Uranus)", gu: "યુરેનસ (Uranus)", kn: "ಯುರೇನಸ್ (Uranus)", ml: "യുറാനസ് (Uranus)",
    pa: "ਯੂਰੇਨਸ (Uranus)", or: "ୟୁରେନସ୍ (Uranus)", as: "ইউৰেনাছ (Uranus)",
  },
  Neptune: {
    en: "Neptune", hi: "वरुण (Neptune)", hinglish: "Neptune", bn: "নেপচুন (Neptune)", te: "నెప్ట్యూన్ (Neptune)",
    mr: "नेपच्यून (Neptune)", ta: "நெப்டியூன் (Neptune)", gu: "નેપ્ચ્યુન (Neptune)", kn: "ನೆಪ್ಚೂನ್ (Neptune)", ml: "നെപ്റ്റ്യൂൺ (Neptune)",
    pa: "ਨੈਪਚੂਨ (Neptune)", or: "ନେପ୍ଚୁନ୍ (Neptune)", as: "নেপচুন (Neptune)",
  },
  Pluto: {
    en: "Pluto", hi: "यम (Pluto)", hinglish: "Pluto", bn: "প্লুটো (Pluto)", te: "ప్లూటో (Pluto)",
    mr: "प्लुटो (Pluto)", ta: "புளூட்டோ (Pluto)", gu: "પ્લુટો (Pluto)", kn: "ಪ್ಲುಟೋ (Pluto)", ml: "പ്ലൂട്ടോ (Pluto)",
    pa: "ਪਲੂਟੋ (Pluto)", or: "ପ୍ଲୁଟୋ (Pluto)", as: "প্লুটো (Pluto)",
  },
  "Elemental root": {
    en: "Elemental root", hi: "तत्व मूल (Elemental root)", hinglish: "Elemental root", bn: "মৌলিক মূল (Elemental root)", te: "మూలక శక్తి (Elemental root)",
    mr: "मूलतत्त्व (Elemental root)", ta: "பூத மூலம் (Elemental root)", gu: "તત્વ મૂળ (Elemental root)", kn: "ತತ್ವ ಮೂಲ (Elemental root)", ml: "ഭൂത മൂലം (Elemental root)",
    pa: "ਤੱਤ ਮੂਲ (Elemental root)", or: "ତତ୍ତ୍ୱ ମୂଳ (Elemental root)", as: "তত্ত্ব মূল (Elemental root)",
  },
  "Elemental (earth of the suit)": {
    en: "Elemental (earth of the suit)", hi: "पृथ्वी तत्व अनुभाव", hinglish: "Elemental (Earth of suit)", bn: "পার্থিব প্রকাশ", te: "పార్థివ అంశం",
    mr: "पार्थिव रूप", ta: "பூத வடிவம்", gu: "પાર્થિવ સ્વરૂપ", kn: "ಪಾರ್ಥಿವ ರೂಪ", ml: "ഭൗമിക രൂപം",
    pa: "ਧਰਤੀ ਤੱਤ (Court)", or: "ପାର୍ଥିବ ରୂପ", as: "পাৰ্থিৱ ৰূপ",
  },
  "Elemental court": {
    en: "Elemental court", hi: "तत्व राजदरबार (Court)", hinglish: "Elemental court", bn: "মৌলিক রাজদরবার", te: "మూలక దర్బార్",
    mr: "तत्त्व दरबार", ta: "பூத அரசவை", gu: "તત્વ દરબાર", kn: "ತತ್ವ ದರ್ಬಾರ್", ml: "ഭൂത ദർബാർ",
    pa: "ਤੱਤ ਦਰਬਾਰ", or: "ତତ୍ତ୍ୱ ଦରବାର", as: "তত্ত্ব দৰবাৰ",
  },
};

export const ZODIAC_NAMES: Record<string, LocaleMap> = {
  Aries: {
    en: "Aries", hi: "मेष (Aries)", hinglish: "Mesha / Aries", bn: "মেষ (Aries)", te: "మేషం (Aries)",
    mr: "मेष (Aries)", ta: "மேஷம் (Aries)", gu: "મેષ (Aries)", kn: "ಮೇಷ (Aries)", ml: "മേടം (Aries)",
    pa: "ਮੇਖ (Aries)", or: "ମେଷ (Aries)", as: "মেষ (Aries)",
  },
  Taurus: {
    en: "Taurus", hi: "वृषभ (Taurus)", hinglish: "Vrishabha / Taurus", bn: "বৃষ (Taurus)", te: "వృషభం (Taurus)",
    mr: "वृषभ (Taurus)", ta: "ரிஷபம் (Taurus)", gu: "વૃષભ (Taurus)", kn: "ವೃಷಭ (Taurus)", ml: "ഇടവം (Taurus)",
    pa: "ਬ੍ਰਿਖ (Taurus)", or: "ବୃଷ (Taurus)", as: "বৃষ (Taurus)",
  },
  Gemini: {
    en: "Gemini", hi: "मिथुन (Gemini)", hinglish: "Mithun / Gemini", bn: "মিথুন (Gemini)", te: "మిథునం (Gemini)",
    mr: "मिथुन (Gemini)", ta: "மிதுனம் (Gemini)", gu: "મિથુન (Gemini)", kn: "ಮಿಥುನ (Gemini)", ml: "മിഥുനം (Gemini)",
    pa: "ਮਿਥੁਨ (Gemini)", or: "ମିଥୁନ (Gemini)", as: "মিথুন (Gemini)",
  },
  Cancer: {
    en: "Cancer", hi: "कर्क (Cancer)", hinglish: "Kark / Cancer", bn: "কর্কট (Cancer)", te: "కర్కాటకం (Cancer)",
    mr: "कर्क (Cancer)", ta: "கடகம் (Cancer)", gu: "કર્ક (Cancer)", kn: "ಕರ್ಕಾಟಕ (Cancer)", ml: "കർക്കടകം (Cancer)",
    pa: "ਕਰਕ (Cancer)", or: "କର୍କଟ (Cancer)", as: "কৰ্কট (Cancer)",
  },
  Leo: {
    en: "Leo", hi: "सिंह (Leo)", hinglish: "Simha / Leo", bn: "সিংহ (Leo)", te: "సింహం (Leo)",
    mr: "सिंह (Leo)", ta: "சிம்மம் (Leo)", gu: "સિંહ (Leo)", kn: "ಸಿಂಹ (Leo)", ml: "ചിങ്ങം (Leo)",
    pa: "ਸਿੰਘ (Leo)", or: "ସିଂହ (Leo)", as: "সিংহ (Leo)",
  },
  Virgo: {
    en: "Virgo", hi: "कन्या (Virgo)", hinglish: "Kanya / Virgo", bn: "কন্যা (Virgo)", te: "కన్య (Virgo)",
    mr: "कन्या (Virgo)", ta: "கன்னி (Virgo)", gu: "કન્યા (Virgo)", kn: "ಕನ್ಯಾ (Virgo)", ml: "കന്നി (Virgo)",
    pa: "ਕੰਨਿਆ (Virgo)", or: "କନ୍ୟା (Virgo)", as: "কন্যা (Virgo)",
  },
  Libra: {
    en: "Libra", hi: "तुला (Libra)", hinglish: "Tula / Libra", bn: "তুলা (Libra)", te: "తుల (Libra)",
    mr: "तूळ (Libra)", ta: "துலாம் (Libra)", gu: "તુલા (Libra)", kn: "ತುಲಾ (Libra)", ml: "തുലാം (Libra)",
    pa: "ਤੁਲਾ (Libra)", or: "ତୁଳା (Libra)", as: "তুলা (Libra)",
  },
  Scorpio: {
    en: "Scorpio", hi: "वृश्चिक (Scorpio)", hinglish: "Vrishchik / Scorpio", bn: "বৃশ্চিক (Scorpio)", te: "వృశ్చికం (Scorpio)",
    mr: "वृश्चिक (Scorpio)", ta: "விருச்சிகம் (Scorpio)", gu: "વૃશ્ચિક (Scorpio)", kn: "ವೃಶ್ಚಿಕ (Scorpio)", ml: "വൃശ്ചികം (Scorpio)",
    pa: "ਬ੍ਰਿਸ਼ਚਕ (Scorpio)", or: "ବିଛା (Scorpio)", as: "বৃশ্চিক (Scorpio)",
  },
  Sagittarius: {
    en: "Sagittarius", hi: "धनु (Sagittarius)", hinglish: "Dhanu / Sagittarius", bn: "ধনু (Sagittarius)", te: "ధనస్సు (Sagittarius)",
    mr: "धनु (Sagittarius)", ta: "தனுசு (Sagittarius)", gu: "ધન (Sagittarius)", kn: "ಧನು (Sagittarius)", ml: "ധനു (Sagittarius)",
    pa: "ਧਨੁ (Sagittarius)", or: "ଧନୁ (Sagittarius)", as: "ধনু (Sagittarius)",
  },
  Capricorn: {
    en: "Capricorn", hi: "मकर (Capricorn)", hinglish: "Makar / Capricorn", bn: "মকর (Capricorn)", te: "మకరం (Capricorn)",
    mr: "मकर (Capricorn)", ta: "மகரம் (Capricorn)", gu: "મકર (Capricorn)", kn: "ಮಕರ (Capricorn)", ml: "മകരം (Capricorn)",
    pa: "ਮਕਰ (Capricorn)", or: "ମକର (Capricorn)", as: "মকৰ (Capricorn)",
  },
  Aquarius: {
    en: "Aquarius", hi: "कुंभ (Aquarius)", hinglish: "Kumbha / Aquarius", bn: "কুম্ভ (Aquarius)", te: "కుంభం (Aquarius)",
    mr: "कुंभ (Aquarius)", ta: "கும்பம் (Aquarius)", gu: "કુંભ (Aquarius)", kn: "ಕುಂಭ (Aquarius)", ml: "കുംഭം (Aquarius)",
    pa: "ਕੁੰਭ (Aquarius)", or: "କୁମ୍ଭ (Aquarius)", as: "কুম্ভ (Aquarius)",
  },
  Pisces: {
    en: "Pisces", hi: "मीन (Pisces)", hinglish: "Meen / Pisces", bn: "মীন (Pisces)", te: "మీనం (Pisces)",
    mr: "मीन (Pisces)", ta: "மீனம் (Pisces)", gu: "મીન (Pisces)", kn: "ಮೀನ (Pisces)", ml: "മീനം (Pisces)",
    pa: "ਮੀਨ (Pisces)", or: "ମୀନ (Pisces)", as: "মীন (Pisces)",
  },
};

export const TIMELINE_NAMES: Record<string, LocaleMap> = {
  Past: {
    en: "Past", hi: "भूतकाल (Past)", hinglish: "Past", bn: "অতীত (Past)", te: "భూతకాలం (Past)",
    mr: "भूतकाळ (Past)", ta: "கடந்த காலம் (Past)", gu: "ભૂતકાળ (Past)", kn: "ಭೂತಕಾಲ (Past)", ml: "ഭൂതകാലം (Past)",
    pa: "ਭੂਤਕਾਲ (Past)", or: "ଅତୀତ (Past)", as: "অতীত (Past)",
  },
  Present: {
    en: "Present", hi: "वर्तमान (Present)", hinglish: "Present", bn: "বর্তমান (Present)", te: "వర్తమానం (Present)",
    mr: "वर्तमानकाळ (Present)", ta: "நிகழ்காலம் (Present)", gu: "વર્તમાન (Present)", kn: "ವರ್ತಮಾನ (Present)", ml: "വർത്തമാനം (Present)",
    pa: "ਵਰਤਮਾਨ (Present)", or: "ବର୍ତ୍ତମାନ (Present)", as: "বৰ্তমান (Present)",
  },
  Future: {
    en: "Future", hi: "भविष्य (Future)", hinglish: "Future", bn: "ভবিষ্যৎ (Future)", te: "భవిష్యత్తు (Future)",
    mr: "भविष्यकाळ (Future)", ta: "எதிர்காலம் (Future)", gu: "ભવિષ્ય (Future)", kn: "ಭವಿಷ್ಯ (Future)", ml: "ഭാവി (Future)",
    pa: "ਭਵਿੱਖ (Future)", or: "ଭବିଷ୍ୟତ (Future)", as: "ভৱିষ্যত (Future)",
  },
};

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getLocalizedCardNameBySlug(slug: string, fallbackName: string, lang: LocaleCode): string {
  if (lang === "en") return fallbackName;
  const major = MAJOR_ARCANA_NAMES[slug];
  if (major) return major[lang] ?? fallbackName;

  const match = /^(ace|two|three|four|five|six|seven|eight|nine|ten|page|knight|queen|king)-of-(wands|cups|swords|pentacles)$/.exec(slug);
  if (match) {
    const [, rankKey, suitKey] = match;
    const rank = MINOR_RANKS[rankKey]?.[lang] ?? rankKey;
    const suit = SUIT_NAMES[suitKey]?.[lang] ?? suitKey;
    if (lang === "hinglish") return `${rank} of ${suit}`;
    if (lang === "hi") return `${suit} का ${rank}`;
    if (lang === "mr") return `${suit} चा ${rank}`;
    if (lang === "gu") return `${suit} નો ${rank}`;
    return `${suit} — ${rank}`;
  }
  return fallbackName;
}

export function getLocalizedCardName(name: string, lang: LocaleCode): string {
  return getLocalizedCardNameBySlug(toSlug(name), name, lang);
}

export function getLocalizedArcana(arcana: "major" | "minor", lang: LocaleCode): string {
  return ARCANA_NAMES[arcana]?.[lang] ?? ARCANA_NAMES[arcana].en;
}

export function getLocalizedSuit(suit: string | null | undefined, lang: LocaleCode): string {
  if (!suit) return "";
  return SUIT_NAMES[suit.toLowerCase()]?.[lang] ?? suit;
}

export function getLocalizedElement(element: string, lang: LocaleCode): string {
  return ELEMENT_NAMES[element]?.[lang] ?? element;
}

export function getLocalizedPlanet(planet: string, lang: LocaleCode): string {
  return PLANET_NAMES[planet]?.[lang] ?? planet;
}

export function getLocalizedZodiac(zodiac: string, lang: LocaleCode): string {
  if (ZODIAC_NAMES[zodiac]) return ZODIAC_NAMES[zodiac][lang];
  if (zodiac.includes(",")) {
    return zodiac
      .split(",")
      .map((part) => ZODIAC_NAMES[part.trim()]?.[lang] ?? part.trim())
      .join(", ");
  }
  return zodiac;
}

export function getLocalizedTimeline(label: string, lang: LocaleCode): string {
  return TIMELINE_NAMES[label]?.[lang] ?? label;
}

const CARD_H1_TEMPLATES: LocaleMap<(cardName: string) => string> = {
  en: (n) => `${n} Tarot Card Meaning & Card of the Day`,
  hi: (n) => `${n} टैरो कार्ड का अर्थ और आज का कार्ड`,
  hinglish: (n) => `${n} Tarot Card Meaning & Card of the Day`,
  bn: (n) => `${n} ট্যারো কার্ডের অর্থ ও আজকের কার্ড`,
  te: (n) => `${n} టారో కార్డ్ అర్థం & నేటి కార్డు`,
  mr: (n) => `${n} टॅरो कार्डचा अर्थ आणि आजचे कार्ड`,
  ta: (n) => `${n} டாரோட் கார்டு அர்த்தம் & இன்றைய அட்டை`,
  gu: (n) => `${n} ટેરો કાર્ડનો અર્થ અને આજનું કાર્ડ`,
  kn: (n) => `${n} ಟ್ಯಾರೋ ಕಾರ್ಡ್ ಅರ್ಥ ಮತ್ತು ಇಂದಿನ ಕಾರ್ಡ್`,
  ml: (n) => `${n} ടാരോ കാർഡ് അർത്ഥവും ഇന്നത്തെ കാർഡും`,
  pa: (n) => `${n} ਟੈਰੋ ਕਾਰਡ ਦਾ ਅਰਥ ਅਤੇ ਅੱਜ ਦਾ ਕਾਰਡ`,
  or: (n) => `${n} ଟ୍ୟାରୋ କାର୍ଡ ଅର୍ଥ ଏବଂ ଆଜିର କାର୍ଡ`,
  as: (n) => `${n} টেৰো কাৰ্ডৰ অৰ্থ আৰু আজিৰ কাৰ্ড`,
};

export function getLocalizedCardH1(slug: string, name: string, lang: LocaleCode): string {
  const localName = getLocalizedCardNameBySlug(slug, name, lang);
  if (lang === "en") return `${localName} Tarot Card Meaning & Card of the Day`;
  return CARD_H1_TEMPLATES[lang](localName);
}

const CARD_SUMMARY_TEMPLATES: LocaleMap<
  (p: { cardName: string; arcana: string; element: string; planet: string; yesNoUpright: string; yesNoRev: string }) => string
> = {
  en: (p) =>
    `${p.cardName} belongs to the ${p.arcana}, linked with the ${p.element} element and ${p.planet}. Upright Yes/No leans ${p.yesNoUpright}; reversed leans ${p.yesNoRev}.`,
  hi: (p) =>
    `${p.cardName} (${p.arcana}) ${p.element} तत्व और ${p.planet} ग्रह से जुड़ा कार्ड है। सीधा आने पर हां/ना उत्तर "${p.yesNoUpright}" और उल्टा आने पर "${p.yesNoRev}" संकेत देता है।`,
  hinglish: (p) =>
    `${p.cardName} (${p.arcana}) ${p.element} element aur ${p.planet} se juda tarot card hai. Seedha (Upright) Yes/No verdict "${p.yesNoUpright}" aur ulta (Reversed) "${p.yesNoRev}" hota hai.`,
  bn: (p) =>
    `${p.cardName} (${p.arcana}) ${p.element} তত্ত্ব এবং ${p.planet} গ্রহের সাথে যুক্ত। সোজা অবস্থায় হ্যাঁ/না উত্তর "${p.yesNoUpright}" এবং উল্টো অবস্থায় "${p.yesNoRev}" নির্দেশ করে।`,
  te: (p) =>
    `${p.cardName} (${p.arcana}) ${p.element} తత్వం మరియు ${p.planet} గ్రహంతో ముడిపడి ఉంటుంది. నిలువుగా Yes/No సమాధానం "${p.yesNoUpright}", తలకిందులుగా "${p.yesNoRev}" సూచిస్తుంది.`,
  mr: (p) =>
    `${p.cardName} (${p.arcana}) हे ${p.element} तत्त्व आणि ${p.planet} ग्रहाशी संबंधित कार्ड आहे. सरळ कार्डसाठी होय/नाही उत्तर "${p.yesNoUpright}" आणि उलट्यासाठी "${p.yesNoRev}" आहे.`,
  ta: (p) =>
    `${p.cardName} (${p.arcana}) ${p.element} பூதம் மற்றும் ${p.planet} கிரகத்துடன் தொடர்புடையது. நேரான நிலையில் ஆம்/இல்லை பதில் "${p.yesNoUpright}", தலைகீழாக "${p.yesNoRev}" ஆகும்.`,
  gu: (p) =>
    `${p.cardName} (${p.arcana}) ${p.element} તત્વ અને ${p.planet} ગ્રહ સાથે જોડાયેલું છે. સીધા કાર્ડ માટે હા/ના જવાબ "${p.yesNoUpright}" અને ઉલટા માટે "${p.yesNoRev}" છે.`,
  kn: (p) =>
    `${p.cardName} (${p.arcana}) ${p.element} ತತ್ವ ಮತ್ತು ${p.planet} ಗ್ರಹಕ್ಕೆ ಸಂಬಂಧಿಸಿದೆ. ನೇರ ಕಾರ್ಡ್‌ಗೆ ಹೌದು/ಇಲ್ಲ ಉತ್ತರ "${p.yesNoUpright}", ತಲೆಕೆಳಗಾಗಿ "${p.yesNoRev}" ಆಗಿದೆ.`,
  ml: (p) =>
    `${p.cardName} (${p.arcana}) ${p.element} തത്വവുമായും ${p.planet} ഗ്രഹവുമായും ബന്ധപ്പെട്ടിരിക്കുന്നു. നേരെയുള്ള ഉത്തരം "${p.yesNoUpright}", തലതിരിഞ്ഞത് "${p.yesNoRev}" ആണ്.`,
  pa: (p) =>
    `${p.cardName} (${p.arcana}) ${p.element} ਤੱਤ ਅਤੇ ${p.planet} ਗ੍ਰਹਿ ਨਾਲ ਜੁੜਿਆ ਹੋਇਆ ਹੈ। ਸਿੱਧੇ ਕਾਰਡ ਲਈ ਹਾਂ/ਨਾਂਹ ਜਵਾਬ "${p.yesNoUpright}" ਅਤੇ ਉਲਟੇ ਲਈ "${p.yesNoRev}" ਹੈ।`,
  or: (p) =>
    `${p.cardName} (${p.arcana}) ${p.element} ତତ୍ତ୍ୱ ଏବଂ ${p.planet} ଗ୍ରହ ସହିତ ଜଡ଼ିତ। ସିଧା କାର୍ଡ ପାଇଁ ହଁ/ନା ଉତ୍ତର "${p.yesNoUpright}" ଏବଂ ଓଲଟା ପାଇଁ "${p.yesNoRev}" ଅଟେ।`,
  as: (p) =>
    `${p.cardName} (${p.arcana}) ${p.element} তত্ত্ব আৰু ${p.planet} গ্ৰহৰ সৈতে জড়িত। পোনে পোনে ওলালে হয়/নহয় উত্তৰ "${p.yesNoUpright}" আৰু ওলোটাকৈ "${p.yesNoRev}" হয়।`,
};

export function getLocalizedCardSummaryLead(
  args: {
    slug: string;
    name: string;
    arcana: "major" | "minor";
    element: string;
    planet: string;
    yesNoUpright: string;
    yesNoRev: string;
  },
  lang: LocaleCode,
): string {
  const cardName = getLocalizedCardNameBySlug(args.slug, args.name, lang);
  const arcana = getLocalizedArcana(args.arcana, lang);
  const element = getLocalizedElement(args.element, lang);
  const planet = getLocalizedPlanet(args.planet, lang);
  return CARD_SUMMARY_TEMPLATES[lang]({
    cardName,
    arcana,
    element,
    planet,
    yesNoUpright: args.yesNoUpright,
    yesNoRev: args.yesNoRev,
  });
}

export const CARD_SCREEN_EXTRA: LocaleMap<{
  meaningHeadingSuffix: string;
  outcomeHeadingSuffix: string;
  loveHeadingSuffix: string;
  careerFinHeadingSuffix: string;
  yesNoHeadingSuffix: string;
  positionSuffix: string;
  clusterMajor: string;
  clusterSuffix: string;
  bridgeTitle: string;
  reversedNotePrefix: string;
  reversedNoteLink: string;
  careerNotePrefix: string;
  careerNoteLink: string;
  comboReadMore: string;
  comboComparePrefix: string;
  comboCompareLink: string;
  drawLivePrefix: string;
  drawLiveCta: string;
  lifePathWord: string;
  masterWord: string;
  rootNumWord: string;
}> = {
  en: {
    meaningHeadingSuffix: "meaning: upright & reversed",
    outcomeHeadingSuffix: "in the Future / Outcome Position",
    loveHeadingSuffix: "in Love, Feelings & Relationships",
    careerFinHeadingSuffix: "in Career & Finances",
    yesNoHeadingSuffix: "Yes or No verdict",
    positionSuffix: "position",
    clusterMajor: "Major Arcana",
    clusterSuffix: "cluster & numerology bridge",
    bridgeTitle: "Tarot × Vedic Numerology Bridge",
    reversedNotePrefix: "New to upside-down draws? Read our",
    reversedNoteLink: "complete guide to reversed tarot card meanings",
    careerNotePrefix: "Asking about a role change, promotion, or financial timing? Pull a free 3-card",
    careerNoteLink: "Career Tarot Reading",
    comboReadMore: "Read combination meaning →",
    comboComparePrefix: "Compare more two-card pairings in the",
    comboCompareLink: "Tarot Card Combinations Explorer",
    drawLivePrefix: "Draw this card in a live spread",
    drawLiveCta: "Start your free reading",
    lifePathWord: "Life Path",
    masterWord: "Master Number",
    rootNumWord: "Root Number",
  },
  hi: {
    meaningHeadingSuffix: "अर्थ: सीधा और उल्टा (Upright & Reversed)",
    outcomeHeadingSuffix: "भविष्य और परिणाम स्थान में",
    loveHeadingSuffix: "प्रेम, भावनाएं और रिश्ते",
    careerFinHeadingSuffix: "करियर और आर्थिक स्थिति",
    yesNoHeadingSuffix: "हां या ना (Yes/No) उत्तर",
    positionSuffix: "स्थान",
    clusterMajor: "मेजर आर्काना",
    clusterSuffix: "समूह और वैदिक अंक ज्योतिष संबंध",
    bridgeTitle: "टैरो × वैदिक अंक ज्योतिष सेतु",
    reversedNotePrefix: "उल्टे (Reversed) कार्ड पढ़ने में नए हैं? पढ़ें हमारी",
    reversedNoteLink: "उल्टे टैरो कार्ड अर्थ की पूरी मार्गदर्शिका",
    careerNotePrefix: "नौकरी बदलाव, प्रमोशन या धन के समय पर सवाल है? निकालें मुफ्त 3-कार्ड",
    careerNoteLink: "करियर टैरो रीडिंग",
    comboReadMore: "संयोजन का अर्थ पढ़ें →",
    comboComparePrefix: "दो कार्ड के अन्य संयोजनों की तुलना करें:",
    comboCompareLink: "टैरो कार्ड कॉम्बिनेशन एक्सप्लोरर",
    drawLivePrefix: "लाइव स्प्रेड में यह कार्ड निकालें",
    drawLiveCta: "अपनी मुफ्त रीडिंग शुरू करें",
    lifePathWord: "भाग्यांक / लाइफ पाथ",
    masterWord: "मास्टर नंबर",
    rootNumWord: "मूलांक संख्या",
  },
  hinglish: {
    meaningHeadingSuffix: "Meaning: Upright & Reversed",
    outcomeHeadingSuffix: "Future / Outcome Position Mein",
    loveHeadingSuffix: "Love, Feelings & Relationships Mein",
    careerFinHeadingSuffix: "Career & Finance Mein",
    yesNoHeadingSuffix: "Yes ya No Verdict",
    positionSuffix: "position",
    clusterMajor: "Major Arcana",
    clusterSuffix: "Cluster & Vedic Numerology Bridge",
    bridgeTitle: "Tarot × Vedic Numerology Bridge",
    reversedNotePrefix: "Ulte (Reversed) cards samajhne ke liye padhein humara",
    reversedNoteLink: "Reversed Tarot Cards Guide",
    careerNotePrefix: "Job switch, promotion ya paison par sawal hai? Try karein free 3-card",
    careerNoteLink: "Career Tarot Reading",
    comboReadMore: "Combination meaning padhein →",
    comboComparePrefix: "Aur two-card pairings dekhein",
    comboCompareLink: "Tarot Card Combinations Explorer",
    drawLivePrefix: "Live spread mein is card ko draw karein",
    drawLiveCta: "Apni free reading shuru karein",
    lifePathWord: "Life Path",
    masterWord: "Master Number",
    rootNumWord: "Root Number",
  },
  bn: {
    meaningHeadingSuffix: "অর্থ: সোজা ও উল্টো (Upright & Reversed)",
    outcomeHeadingSuffix: "ভবিষ্যৎ ও ফলাফল অবস্থানে",
    loveHeadingSuffix: "প্রেম, অনুভূতি ও সম্পর্ক",
    careerFinHeadingSuffix: "ক্যারিয়ার ও অর্থনীতি",
    yesNoHeadingSuffix: "হ্যাঁ বা না (Yes/No) উত্তর",
    positionSuffix: "অবস্থান",
    clusterMajor: "মেজর আর্কানা",
    clusterSuffix: "গুচ্ছ ও বৈদিক সংখ্যাতত্ত্ব সেতু",
    bridgeTitle: "ট্যারো × বৈদিক সংখ্যাতত্ত্ব সেতু",
    reversedNotePrefix: "উল্টো কার্ড বোঝার জন্য পড়ুন আমাদের",
    reversedNoteLink: "রিভার্সড ট্যারো কার্ড নির্দেশিকা",
    careerNotePrefix: "চাকরি পরিবর্তন বা অর্থ নিয়ে প্রশ্ন আছে? দেখুন ফ্রি ৩-কার্ড",
    careerNoteLink: "ক্যারিয়ার ট্যারো রিডিং",
    comboReadMore: "যুগ্ম অর্থ পড়ুন →",
    comboComparePrefix: "আরও দুটি কার্ডের মিল দেখুন",
    comboCompareLink: "ট্যারো কম্বিনেশন এক্সপ্লোরার",
    drawLivePrefix: "লাইভ স্প্রেডে এই কার্ড তুলুন",
    drawLiveCta: "আপনার ফ্রি রিডিং শুরু করুন",
    lifePathWord: "লাইফ পাথ / ভাগ্যাঙ্ক",
    masterWord: "মাস্টার নম্বর",
    rootNumWord: "মূলাঙ্ক",
  },
  te: {
    meaningHeadingSuffix: "అర్థం: నిలువు & తలకిందులు",
    outcomeHeadingSuffix: "భవిష్యత్తు / ఫలిత స్థానంలో",
    loveHeadingSuffix: "ప్రేమ, భావాలు & సంబంధాలు",
    careerFinHeadingSuffix: "కెరీర్ & ఆర్థిక పరిస్థితి",
    yesNoHeadingSuffix: "అవును లేదా కాదు (Yes/No) సమాధానం",
    positionSuffix: "స్థానం",
    clusterMajor: "మేజర్ ఆర్కానా",
    clusterSuffix: "సమూహం & వేద సంఖ్యాశాస్త్రం",
    bridgeTitle: "టారో × వేద సంఖ్యాశాస్త్ర అనుసంధానం",
    reversedNotePrefix: "తలకిందులైన కార్డులను అర్థం చేసుకోవడానికి చదవండి",
    reversedNoteLink: "రివర్స్డ్ టారో కార్డుల పూర్తి గైడ్",
    careerNotePrefix: "ఉద్యోగ మార్పు లేదా ఆర్థిక విషయాలపై ప్రశ్న ఉందా? ఉచిత 3-కార్డ్ తీయండి",
    careerNoteLink: "కెరీర్ టారో రీడింగ్",
    comboReadMore: "జత అర్థం చదవండి →",
    comboComparePrefix: "మరిన్ని రెండు కార్డుల జతలను పోల్చండి",
    comboCompareLink: "టారో కాంబినేషన్స్ ఎక్స్‌ప్లోరర్",
    drawLivePrefix: "లైవ్ స్ప్రెడ్‌లో ఈ కార్డును తీయండి",
    drawLiveCta: "ఉచిత రీడింగ్ ప్రారంభించండి",
    lifePathWord: "లైఫ్ పాత్ / భాగ్యాంకం",
    masterWord: "మాస్టర్ నంబర్",
    rootNumWord: "మూల సంఖ్య",
  },
  mr: {
    meaningHeadingSuffix: "अर्थ: सरळ आणि उलटे",
    outcomeHeadingSuffix: "भविष्य आणि परिणाम स्थानामध्ये",
    loveHeadingSuffix: "प्रेम, भावना आणि नातेसंबंध",
    careerFinHeadingSuffix: "करिअर आणि आर्थिक स्थिती",
    yesNoHeadingSuffix: "होय किंवा नाही (Yes/No) उत्तर",
    positionSuffix: "स्थान",
    clusterMajor: "मेजर आर्काना",
    clusterSuffix: "गट आणि वैदिक अंकशास्त्र सेतू",
    bridgeTitle: "टॅरो × वैदिक अंकशास्त्र सेतू",
    reversedNotePrefix: "उलटी कार्डे समजून घेण्यासाठी वाचा आमचे",
    reversedNoteLink: "उलट्या टॅरो कार्ड्सचे संपूर्ण मार्गदर्शन",
    careerNotePrefix: "नोकरीतील बदल किंवा आर्थिक वेळेबद्दल प्रश्न आहे का? मोफत ३-कार्ड काढा",
    careerNoteLink: "करिअर टॅरो वाचन",
    comboReadMore: "संयोजन अर्थ वाचा →",
    comboComparePrefix: "इतर दोन कार्डांच्या जोड्या पहा",
    comboCompareLink: "टॅरो कॉम्बिनेशन्स एक्सप्लोरर",
    drawLivePrefix: "थेट स्प्रेडमध्ये हे कार्ड काढा",
    drawLiveCta: "तुमचे मोफत वाचन सुरू करा",
    lifePathWord: "लाइफ पाथ / भाग्यांक",
    masterWord: "मास्टर नंबर",
    rootNumWord: "मूळ अंक",
  },
  ta: {
    meaningHeadingSuffix: "பொருள்: நேரான & தலைகீழ்",
    outcomeHeadingSuffix: "எதிர்காலம் / முடிவு நிலையில்",
    loveHeadingSuffix: "காதல், உணர்வுகள் & உறவுகள்",
    careerFinHeadingSuffix: "தொழில் & நிதி நிலை",
    yesNoHeadingSuffix: "ஆம் அல்லது இல்லை (Yes/No) தீர்ப்பு",
    positionSuffix: "நிலை",
    clusterMajor: "மேஜர் ஆர்கானா",
    clusterSuffix: "தொகுப்பு & வேத எண் கணித இணைப்பு",
    bridgeTitle: "டாரோட் × வேத எண் கணித இணைப்பு",
    reversedNotePrefix: "தலைகீழ் அட்டைகளைப் படிக்க உதவும் எங்கள்",
    reversedNoteLink: "தலைகீழ் டாரோட் அட்டைகள் வழிகாட்டி",
    careerNotePrefix: "வேலை மாற்றம் அல்லது நிதி குறித்து கேள்வி உள்ளதா? இலவச 3-அட்டை",
    careerNoteLink: "தொழில் டாரோட் வாசிப்பு",
    comboReadMore: "இணைப்புப் பொருளைப் படிக்கவும் →",
    comboComparePrefix: "மேலும் இரு அட்டை இணைப்புகளை ஒப்பிடவும்:",
    comboCompareLink: "டாரோட் இணைப்புகள் கருவி",
    drawLivePrefix: "நேரடி வாசிப்பில் இந்த அட்டையை எடுக்கவும்",
    drawLiveCta: "இலவச வாசிப்பைத் தொடங்குங்கள்",
    lifePathWord: "வாழ்க்கைப் பாதை எண்",
    masterWord: "மாஸ்டர் எண்",
    rootNumWord: "மூல எண்",
  },
  gu: {
    meaningHeadingSuffix: "અર્થ: સીધું અને ઊંધું",
    outcomeHeadingSuffix: "ભવિષ્ય / પરિણામ સ્થાનમાં",
    loveHeadingSuffix: "પ્રેમ, લાગણીઓ અને સંબંધો",
    careerFinHeadingSuffix: "કારકિર્દી અને નાણાં",
    yesNoHeadingSuffix: "હા કે ના (Yes/No) ઉત્તર",
    positionSuffix: "સ્થાન",
    clusterMajor: "મેજર આર્કાના",
    clusterSuffix: "સમૂહ અને વૈદિક અંકશાસ્ત્ર સેતુ",
    bridgeTitle: "ટેરો × વૈદિક અંકશાસ્ત્ર સેતુ",
    reversedNotePrefix: "ઊંધા કાર્ડ સમજવા માટે વાંચો અમારું",
    reversedNoteLink: "રિવર્સ્ડ ટેરો કાર્ડ્સ માર્ગદર્શન",
    careerNotePrefix: "નોકરી કે નાણાં અંગે સવાલ છે? મફત ૩-કાર્ડ કાઢો",
    careerNoteLink: "કરિયર ટેરો રીડિંગ",
    comboReadMore: "જોડીનો અર્થ વાંચો →",
    comboComparePrefix: "વધુ બે-કાર્ડ જોડીઓની સરખામણી કરો:",
    comboCompareLink: "ટેરો કોમ્બિનેશન એક્સપ્લોરર",
    drawLivePrefix: "લાઇવ સ્પ્રેડમાં આ કાર્ડ ખેંચો",
    drawLiveCta: "તમારું મફત રીડિંગ શરૂ કરો",
    lifePathWord: "લાઇફ પાથ / ભાગ્યાંક",
    masterWord: "માસ્ટર નંબર",
    rootNumWord: "મૂળ અંક",
  },
  kn: {
    meaningHeadingSuffix: "ಅರ್ಥ: ನೇರ ಮತ್ತು ತಲೆಕೆಳಗಾದ",
    outcomeHeadingSuffix: "ಭವಿಷ್ಯ / ಫಲಿತಾಂಶದ ಸ್ಥಾನದಲ್ಲಿ",
    loveHeadingSuffix: "ಪ್ರೀತಿ, ಭಾವನೆಗಳು ಮತ್ತು ಸಂಬಂಧಗಳು",
    careerFinHeadingSuffix: "ವೃತ್ತಿ ಮತ್ತು ಹಣಕಾಸು",
    yesNoHeadingSuffix: "ಹೌದು ಅಥವಾ ಇಲ್ಲ (Yes/No) ಉತ್ತರ",
    positionSuffix: "ಸ್ಥಾನ",
    clusterMajor: "ಮೇಜರ್ ಆರ್ಕಾನಾ",
    clusterSuffix: "ಗುಂಪು ಮತ್ತು ವೈದಿಕ ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ಸೇತುವೆ",
    bridgeTitle: "ಟ್ಯಾರೋ × ವೈದಿಕ ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ಸೇತುವೆ",
    reversedNotePrefix: "ತಲೆಕೆಳಗಾದ ಕಾರ್ಡ್‌ಗಳನ್ನು ಓದಲು ತಿಳಿಯಿರಿ:",
    reversedNoteLink: "ರಿವರ್ಸ್ಡ್ ಟ್ಯಾರೋ ಕಾರ್ಡ್‌ಗಳ ಮಾರ್ಗದರ್ಶಿ",
    careerNotePrefix: "ಕೆಲಸ ಬದಲಾವಣೆ ಅಥವಾ ಹಣಕಾಸಿನ ಪ್ರಶ್ನೆ ಇದೆಯೇ? ಉಚಿತ 3-ಕಾರ್ಡ್ ಪಡೆಯಿರಿ",
    careerNoteLink: "ವೃತ್ತಿ ಟ್ಯಾರೋ ಓದುವಿಕೆ",
    comboReadMore: "ಜೋಡಿ ಅರ್ಥ ಓದಿ →",
    comboComparePrefix: "ಹೆಚ್ಚಿನ ಎರಡು-ಕಾರ್ಡ್ ಜೋಡಿಗಳನ್ನು ನೋಡಿ:",
    comboCompareLink: "ಟ್ಯಾರೋ ಕಾಂಬಿನೇಷನ್ಸ್ ಎಕ್ಸ್‌ಪ್ಲೋರರ್",
    drawLivePrefix: "ಲೈವ್ ಸ್ಪ್ರೆಡ್‌ನಲ್ಲಿ ಈ ಕಾರ್ಡ್ ಎಳೆಯಿರಿ",
    drawLiveCta: "ಉಚಿತ ಓದುವಿಕೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ",
    lifePathWord: "ಲೈಫ್ ಪಾತ್ / ಭಾಗ್ಯಾಂಕ",
    masterWord: "ಮಾಸ್ಟರ್ ಸಂಖ್ಯೆ",
    rootNumWord: "ಮೂಲ ಸಂಖ್ಯೆ",
  },
  ml: {
    meaningHeadingSuffix: "അർത്ഥം: നേരെയും തലതിരിഞ്ഞും",
    outcomeHeadingSuffix: "ഭാവി / ഫല സ്ഥാനത്ത്",
    loveHeadingSuffix: "പ്രണയം, വികാരങ്ങൾ, ബന്ധങ്ങൾ",
    careerFinHeadingSuffix: "തൊഴിലും സാമ്പത്തികവും",
    yesNoHeadingSuffix: "അതെ അല്ലെങ്കിൽ ഇല്ല (Yes/No) ഉത്തരം",
    positionSuffix: "സ്ഥാനം",
    clusterMajor: "മേജർ അർക്കാന",
    clusterSuffix: "വിഭാഗവും വേദ സംഖ്യാശാസ്ത്ര ബന്ധവും",
    bridgeTitle: "ടാരോ × വേദ സംഖ്യാശാസ്ത്ര ബന്ധം",
    reversedNotePrefix: "തലതിരിഞ്ഞ കാർഡുകൾ മനസ്സിലാക്കാൻ വായിക്കുക:",
    reversedNoteLink: "റിവേഴ്‌സ്ഡ് ടാരോ കാർഡ് ഗൈഡ്",
    careerNotePrefix: "ജോലി മാറ്റത്തെയോ സാമ്പത്തികത്തെയോ കുറിച്ച് ചോദ്യമുണ്ടോ? സൗജന്യ 3-കാർഡ് എടുക്കുക:",
    careerNoteLink: "കരിയർ ടാരോ റീഡിംഗ്",
    comboReadMore: "ജോഡി അർത്ഥം വായിക്കുക →",
    comboComparePrefix: "കൂടുതൽ കാർഡ് ജോഡികൾ താരതമ്യം ചെയ്യുക:",
    comboCompareLink: "ടാരോ കോമ്പിനേഷൻ എക്സ്പ്ലോറർ",
    drawLivePrefix: "തത്സമയ സ്പ്രെഡിൽ ഈ കാർഡ് എടുക്കുക",
    drawLiveCta: "സൗജന്യ റീഡിംഗ് ആരംഭിക്കുക",
    lifePathWord: "ലൈഫ് പാത്ത് / ഭാഗ്യാങ്കം",
    masterWord: "മാസ്റ്റർ നമ്പർ",
    rootNumWord: "മൂല സംഖ്യ",
  },
  pa: {
    meaningHeadingSuffix: "ਅਰਥ: ਸਿੱਧਾ ਅਤੇ ਉਲਟਾ",
    outcomeHeadingSuffix: "ਭਵਿੱਖ / ਨਤੀਜਾ ਸਥਾਨ ਵਿੱਚ",
    loveHeadingSuffix: "ਪਿਆਰ, ਭਾਵਨਾਵਾਂ ਅਤੇ ਰਿਸ਼ਤੇ",
    careerFinHeadingSuffix: "ਕਰੀਅਰ ਅਤੇ ਵਿੱਤ",
    yesNoHeadingSuffix: "ਹਾਂ ਜਾਂ ਨਾਂਹ (Yes/No) ਫੈਸਲਾ",
    positionSuffix: "ਸਥਾਨ",
    clusterMajor: "ਮੇਜਰ ਆਰਕਾਨਾ",
    clusterSuffix: "ਸਮੂਹ ਅਤੇ ਵੈਦਿਕ ਅੰਕ ਵਿਗਿਆਨ ਸਬੰਧ",
    bridgeTitle: "ਟੈਰੋ × ਵੈਦਿਕ ਅੰਕ ਵਿਗਿਆਨ ਸਬੰਧ",
    reversedNotePrefix: "ਉਲਟੇ ਕਾਰਡ ਪੜ੍ਹਨ ਵਿੱਚ ਨਵੇਂ ਹੋ? ਪੜ੍ਹੋ ਸਾਡੀ",
    reversedNoteLink: "ਰਿਵਰਸਡ ਟੈਰੋ ਕਾਰਡਜ਼ ਗਾਈਡ",
    careerNotePrefix: "ਨੌਕਰੀ ਬਦਲਣ ਜਾਂ ਤਰੱਕੀ ਬਾਰੇ ਸਵਾਲ ਹੈ? ਮੁਫ਼ਤ 3-ਕਾਰਡ ਕੱਢੋ",
    careerNoteLink: "ਕਰੀਅਰ ਟੈਰੋ ਰੀਡਿੰਗ",
    comboReadMore: "ਜੋੜੀ ਦਾ ਅਰਥ ਪੜ੍ਹੋ →",
    comboComparePrefix: "ਹੋਰ ਦੋ-ਕਾਰਡ ਜੋੜੀਆਂ ਦੇਖੋ:",
    comboCompareLink: "ਟੈਰੋ ਕਾਰਡ ਕੰਬੀਨੇਸ਼ਨ ਐਕਸਪਲੋਰਰ",
    drawLivePrefix: "ਲਾਈਵ ਸਪਰੈੱਡ ਵਿੱਚ ਇਹ ਕਾਰਡ ਕੱਢੋ",
    drawLiveCta: "ਆਪਣੀ ਮੁਫ਼ਤ ਰੀਡਿੰਗ ਸ਼ੁਰੂ ਕਰੋ",
    lifePathWord: "ਲਾਈਫ ਪਾਥ / ਭਾਗਾਂਕ",
    masterWord: "ਮਾਸਟਰ ਨੰਬਰ",
    rootNumWord: "ਮੂਲ ਅੰਕ",
  },
  or: {
    meaningHeadingSuffix: "ଅର୍ଥ: ସିଧା ଏବଂ ଓଲଟା",
    outcomeHeadingSuffix: "ଭବିଷ୍ୟତ / ଫଳାଫଳ ସ୍ଥାନରେ",
    loveHeadingSuffix: "ପ୍ରେਮ, ଭାବନା ଏବଂ ସମ୍ପର୍କ",
    careerFinHeadingSuffix: "କ୍ୟାରିଅର ଏବଂ ଅର୍ଥନୀତି",
    yesNoHeadingSuffix: "ହଁ କିମ୍ବା ନା (Yes/No) ଉତ୍ତର",
    positionSuffix: "ସ୍ଥାନ",
    clusterMajor: "ମେଜର୍ ଆର୍କାନା",
    clusterSuffix: "ସମୂହ ଏବଂ ବୈଦିକ ଅଙ୍କଶାସ୍ତ୍ର ସମ୍ପର୍କ",
    bridgeTitle: "ଟ୍ୟାରୋ × ବୈଦିକ ଅଙ୍କଶାସ୍ତ୍ର ସେତୁ",
    reversedNotePrefix: "ଓଲଟା କାର୍ଡ ବୁଝିବା ପାଇଁ ପଢ଼ନ୍ତୁ ଆମର",
    reversedNoteLink: "ରିଭର୍ସଡ୍ ଟ୍ୟାରୋ କାର୍ଡ ଗାଇଡ୍",
    careerNotePrefix: "ଚାକିରି କିମ୍ବା ଅର୍ଥ ସମ୍ବନ୍ଧୀୟ ପ୍ରଶ୍ନ ଅଛି କି? ମାଗଣା ୩-କାର୍ଡ ଦେଖନ୍ତୁ",
    careerNoteLink: "କ୍ୟାରିଅର ଟ୍ୟାରୋ ରିଡିଂ",
    comboReadMore: "ଯୋଡ଼ି ଅର୍ଥ ପଢ଼ନ୍ତୁ →",
    comboComparePrefix: "ଅନ୍ୟ ଦୁଇ-କାର୍ଡ ଯୋଡ଼ି ତୁଳନା କରନ୍ତୁ:",
    comboCompareLink: "ଟ୍ୟାରୋ କମ୍ବିନେସନ୍ ଏକ୍ସପ୍ଲୋରର୍",
    drawLivePrefix: "ଲାଇଭ୍ ସ୍ପ୍ରେଡ୍‌ରେ ଏହି କାର୍ଡ ବାହାର କରନ୍ତୁ",
    drawLiveCta: "ଆପଣଙ୍କ ମାଗଣା ରିଡିଂ ଆରମ୍ଭ করুন".replace("করুন", "କରନ୍ତୁ"),
    lifePathWord: "ଲାଇଫ୍ ପାଥ୍ / ଭାଗ୍ୟାଙ୍କ",
    masterWord: "ମାଷ୍ଟର ନମ୍ବର",
    rootNumWord: "ମୂଳ ସଂଖ୍ୟା",
  },
  as: {
    meaningHeadingSuffix: "অৰ্থ: পোনে পোনে আৰু ওলোটাকৈ",
    outcomeHeadingSuffix: "ভৱিষ্যত / ফলাফলৰ স্থানত",
    loveHeadingSuffix: "প্ৰেম, অনুভূতি আৰু সম্পৰ্ক",
    careerFinHeadingSuffix: "কেৰিয়াৰ আৰু অৰ্থ",
    yesNoHeadingSuffix: "হয় নে নহয় (Yes/No) উত্তৰ",
    positionSuffix: "স্থান",
    clusterMajor: "মেজৰ আৰ্কানা",
    clusterSuffix: "গোট আৰু বৈদিক সংখ্যাশাস্ত্ৰৰ সংযোগ",
    bridgeTitle: "টেৰো × বৈদিক সংখ্যাশাস্ত্ৰ সংযোগ",
    reversedNotePrefix: "ওলোটা কাৰ্ড বুজিবলৈ পঢ়ক আমাৰ",
    reversedNoteLink: "ৰিভাৰ্ছড টেৰো কাৰ্ড গাইড",
    careerNotePrefix: "চাকৰি সলনি বা অৰ্থৰ বিষয়ে প্ৰশ্ন আছেনে? বিনামূলীয়া ৩-কাৰ্ড টানক",
    careerNoteLink: "কেৰিয়াৰ টেৰো ৰিডিং",
    comboReadMore: "যোৰা অৰ্থ পঢ়ক →",
    comboComparePrefix: "আন দুখন কাৰ্ডৰ যোৰা চাওক:",
    comboCompareLink: "টেৰো কম্বিনেশ্যন এক্সপ্ল’ৰাৰ",
    drawLivePrefix: "লাইভ স্প্ৰেডত এই কাৰ্ডখন টানক",
    drawLiveCta: "আপোনাৰ বিনামূলীয়া ৰিডিং আৰম্ভ কৰক",
    lifePathWord: "লাইফ পাথ / ভাগ্যাংক",
    masterWord: "মাষ্টাৰ নম্বৰ",
    rootNumWord: "মূল সংখ্যা",
  },
};
