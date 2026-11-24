import { Link } from "@/components/LocalizedLink";
import { AuroraBackground } from "@/components/arcana/AuroraBackground";
import { LandingNav } from "@/components/arcana/LandingNav";
import { Footer } from "@/components/landing/Footer";
import { GlassCard } from "@/components/arcana/GlassCard";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { getBcp47, useLanguage, useTranslate } from "@/lib/i18n";
import { localizePath } from "@/locales";

export function AboutScreen() {
  const t = useTranslate();
  const [language] = useLanguage();

  const bcp47 = getBcp47(language);
  const formatUtcDate = (iso: string) =>
    new Intl.DateTimeFormat(bcp47, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${iso}T00:00:00Z`));

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <AuroraBackground />
      <LandingNav />
      <main className="relative mx-auto max-w-3xl px-4 pb-24 pt-36">
        <Breadcrumb items={[{ label: t("about.crumb") }]} />
        <h1 className="font-display text-4xl sm:text-5xl">
          {t("about.title1")} <span className="aurora-text">{t("about.title2")}</span>
        </h1>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>
            {t("common.published")}:{" "}
            <time dateTime="2026-08-07">{formatUtcDate("2026-08-07")}</time>
          </span>
          <span>
            {t("common.lastUpdated")}:{" "}
            <time dateTime="2026-11-16">{formatUtcDate("2026-11-16")}</time>
          </span>
        </p>

        <GlassCard className="mt-8 space-y-7 text-base sm:text-[15px] leading-relaxed text-muted-foreground">
          <Section title={t("about.s1Title")}>{t("about.s1Body")}</Section>
          <Section title={t("about.s2Title")}>{t("about.s2Body")}</Section>
          <Section title={t("about.s3Title")}>{t("about.s3Body")}</Section>
          <Section title={t("about.s4Title")}>{t("about.s4Body")}</Section>
          <Section title={t("about.s5Title")}>{t("about.s5Body")}</Section>
          <Section title={t("about.s6Title")}>{t("about.s6Body")}</Section>
          <Section title={t("about.s7Title")}>{t("about.s7Body")}</Section>
          <Section title={t("about.s8Title")}>{t("about.s8Body")}</Section>
          <Section title={t("about.s9Title")}>{t("about.s9Body")}</Section>

          <Section title={t("about.s10Title")}>
            {t("about.s10Body")}{" "}
            <Link
              to={localizePath("/privacy", language) as any}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {t("about.policyLink")}
            </Link>
            ,{" "}
            <Link
              to={localizePath("/cookie-policy", language) as any}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {t("about.cookieLink")}
            </Link>
            ,{" "}
            <Link
              to={localizePath("/editorial-policy", language) as any}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {t("about.editorialLink")}
            </Link>
            ,{" "}
            <Link
              to={localizePath("/disclaimer", language) as any}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {t("about.disclaimerLink")}
            </Link>
            .
          </Section>

          <Section title={t("about.s11Title")}>
            {t("about.s11Body")}{" "}
            <Link
              to={localizePath("/contact", language) as any}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {t("about.contactLink")}
            </Link>
            .
          </Section>
        </GlassCard>

        <div className="mt-8">
          <Link
            to={localizePath("/", language)}
            className="inline-flex min-h-12 sm:min-h-0 items-center text-base sm:text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {t("privacy.back")}
          </Link>
        </div>
        <InArticleAd />
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-lg text-foreground">{title}</h2>
      <p className="mt-2">{children}</p>
    </div>
  );
}
