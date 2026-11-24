import { useLoaderData } from "@tanstack/react-router";
import { Link } from "@/components/LocalizedLink";
import {
  BookOpen,
  Briefcase,
  CalendarDays,
  Coins,
  Compass,
  Globe,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  Sparkles,
  Wand2,
} from "@/components/icons";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { ContentSection } from "@/components/content/ContentSection";
import { InfoGrid } from "@/components/content/InfoGrid";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { KeepExploring } from "@/components/content/KeepExploring";
import { CTASection } from "@/components/content/CTASection";
import { GlassCard } from "@/components/arcana/GlassCard";
import { HI_MULANK_PAGES, type HindiMulankPage } from "@/data/hi-mulank";
import { LocaleProvider, setLanguage } from "@/lib/language";
import { SITE_URL } from "@/lib/site";

const VERDICT_LABEL = {
  friend: "मित्र (शुभ)",
  neutral: "सम (संतुलित)",
  challenge: "धैर्य आवश्यक",
} as const;

export function HindiMulankNumberScreen() {
  const { page } = useLoaderData({ strict: false }) as { page: HindiMulankPage };
  const path = `/hi/numerology/${page.slug}`;
  const index = HI_MULANK_PAGES.findIndex((p) => p.slug === page.slug);
  const prev = index > 0 ? HI_MULANK_PAGES[index - 1] : undefined;
  const next = index >= 0 && index < HI_MULANK_PAGES.length - 1 ? HI_MULANK_PAGES[index + 1] : undefined;

  return (
    <LocaleProvider lang="hi">
      <ArticleLayout
      crumbs={[
        { label: "हिंदी केंद्र", to: "/hi" },
        { label: "मूलांक", to: "/hi/numerology/mulank" },
        { label: page.label },
      ]}
      eyebrow={`अंक ज्योतिष · ${page.planet}`}
      title={`${page.label}: ${page.archetype}`}
      intro={page.hero}
      url={`${SITE_URL}${path}`}
      updated={page.updated}
      readingMinutes={page.readingMinutes}
      wordCount={page.wordCount}
      aside={
        <GlassCard className="grid aspect-square place-items-center p-6">
          <span className="font-display text-6xl aurora-text">{page.number}</span>
        </GlassCard>
      }
      afterHeader={
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3.5 text-xs">
          <span className="text-muted-foreground">
            जन्म तिथि: <strong className="text-foreground">{page.dates.join(", ")}</strong> · स्वामी ग्रह:{" "}
            <strong className="text-[var(--gold)]">{page.planet}</strong>
          </span>
          <Link
            to="/numerology/$slug"
            params={{ slug: page.enSlug }}
            onClick={() => setLanguage("en")}
            className="inline-flex items-center gap-1.5 font-semibold text-[var(--gold)] hover:underline"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden />
            English: Mulank {page.number} Guide
          </Link>
        </div>
      }
    >
      <ContentSection id="dates" title="किन तारीखों वालों का होता है यह मूलांक" icon={CalendarDays}>
        <div className="flex flex-wrap gap-2">
          {page.dates.map((d) => (
            <span key={d} className="rounded-full glass px-4 py-1.5 text-sm text-[var(--gold)]">
              जन्म तारीख {d}
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="glance" title="मूलांक की मुख्य पहचान" icon={Compass}>
        <InfoGrid
          items={[
            { label: "मूलांक", value: String(page.number) },
            { label: "स्वामी ग्रह", value: page.planet },
            { label: "आराध्य देव", value: page.deity },
            { label: "तत्व", value: page.element },
            { label: "शुभ दिशा", value: page.direction },
            { label: "रत्न (सलाह से)", value: page.gemstone },
            { label: "शुभ रंग", value: page.luckyColours.join(", ") },
            { label: "शुभ दिन", value: page.luckyDays.join(", ") },
            { label: "मित्र अंक", value: page.luckyNumbers.join(", ") },
          ]}
        />
      </ContentSection>

      <ContentSection id="meaning" title={`${page.label} का अर्थ और महत्व`} icon={BookOpen} paragraphs={page.meaning} />

      <ContentSection id="personality" title="स्वभाव और व्यक्तित्व" icon={Sparkles} paragraphs={page.personality}>
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard className="p-6">
            <h3 className="font-display text-lg text-[var(--gold)]">सकारात्मक पक्ष</h3>
            <ul className="mt-3 space-y-2 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.strengths.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden className="text-[var(--gold)]">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="font-display text-lg">सावधानियां और सुधार</h3>
            <ul className="mt-3 space-y-2 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              {page.weaknesses.map((w) => (
                <li key={w} className="flex gap-2">
                  <span aria-hidden className="text-muted-foreground/70">•</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </ContentSection>

      <ContentSection id="career" title="करियर और व्यापार" icon={Briefcase} paragraphs={page.career}>
        <div className="flex flex-wrap gap-2">
          {page.careerPaths.map((c) => (
            <span key={c} className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="love" title="प्रेम, विवाह और पारिवारिक संबंध" icon={HeartHandshake} paragraphs={page.love}>
        <div className="grid gap-4 sm:grid-cols-2">
          {page.compatibility.map((c) => (
            <GlassCard key={`${c.verdict}-${c.number}`} className="p-5">
              <div className="flex items-center justify-between gap-3">
                <Link
                  to="/numerology/$slug"
                  params={{ slug: `mulank-${page.number}-bhagyank-${c.number}` }}
                  className="font-display text-base text-foreground hover:text-[var(--gold)]"
                >
                  मूलांक {page.number} व भाग्यांक {c.number}
                </Link>
                <span className="rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--gold)]">
                  {VERDICT_LABEL[c.verdict]}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="health" title="स्वास्थ्य और दिनचर्या" icon={HeartPulse} paragraphs={page.health} />
      <ContentSection id="money" title="आर्थिक स्थिति और धन" icon={Coins} paragraphs={page.money} />

      <ContentSection id="remedies" title="सरल और प्रभावी उपाय" icon={Wand2}>
        <ul className="space-y-3">
          {page.remedies.map((r) => (
            <li key={r} className="flex gap-3 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
              {r}
            </li>
          ))}
        </ul>
        <GlassCard className="mt-5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">सकारात्मक संकल्प</p>
          <p className="mt-2 text-base italic text-foreground">“{page.affirmation}”</p>
          <p className="mt-3 text-xs text-muted-foreground">
            टैरो संबंध:{" "}
            <Link to="/tarot/$slug" params={{ slug: page.tarotSlug }} className="text-[var(--gold)] hover:underline">
              {page.tarotCard}
            </Link>
          </p>
        </GlassCard>
      </ContentSection>

      <ContentSection id="faq" title="अक्सर पूछे जाने वाले प्रश्न" icon={HelpCircle}>
        <FAQAccordion items={page.faqs} />
      </ContentSection>

      <nav aria-label="अन्य मूलांक" className="grid gap-4 sm:grid-cols-2">
        <Link
          to={prev ? "/hi/numerology/$slug" : "/hi/numerology/mulank"}
          {...(prev ? { params: { slug: prev.slug } } : {})}
          className="block"
        >
          <GlassCard className="h-full p-4">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {prev ? "पिछला अंक" : "वापस जाएं"}
            </span>
            <span className="mt-1 block font-display text-sm">
              {prev ? prev.label : "मूलांक मुख्य पृष्ठ"}
            </span>
          </GlassCard>
        </Link>
        <Link
          to={next ? "/hi/numerology/$slug" : "/hi/numerology/mulank"}
          {...(next ? { params: { slug: next.slug } } : {})}
          className="block"
        >
          <GlassCard className="h-full p-4 text-right">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {next ? "अगला अंक" : "वापस जाएं"}
            </span>
            <span className="mt-1 block font-display text-sm">
              {next ? next.label : "मूलांक मुख्य पृष्ठ"}
            </span>
          </GlassCard>
        </Link>
      </nav>

      <KeepExploring
        links={
          [
            {
              to: "/hi/numerology/mulank",
              label: "सभी मूलांक 1 से 9 देखें",
              blurb: "हर जन्म तारीख का मूलांक और उसके स्वामी ग्रह की तुलना करें।",
            },
            {
              to: "/numerology/compatibility",
              label: "मूलांक × भाग्यांक 81 जोड़ी मैट्रिक्स",
              blurb: `देखें कि ${page.label} किस भाग्यांक के साथ सबसे अच्छा फल देता है।`,
            },
            {
              to: "/hi/numerology",
              label: "फ्री मूलांक व भाग्यांक कैलकुलेटर",
              blurb: "जन्मतिथि डालकर अपना पूरा अंक ज्योतिष चार्ट प्राप्त करें।",
            },
            {
              to: "/hi/reading",
              label: "फ्री AI टैरो रीडिंग",
              blurb: "हिंदी में अपना सवाल पूछें और तुरंत टैरो कार्ड मार्गदर्शन पाएं।",
            },
          ] as Array<{ to: any; label: string; blurb: string }>
        }
      />

      <CTASection
        title={`अपना ${page.label} और भाग्यांक चार्ट देखें`}
        body="जन्मतिथि दर्ज करके जानें आपका वर्तमान पर्सनल ईयर और आने वाले महीनों की ऊर्जा।"
        ctaLabel="फ्री कैलकुलेटर खोलें"
        to={"/hi/numerology" as any}
      />
      </ArticleLayout>
    </LocaleProvider>
  );
}
