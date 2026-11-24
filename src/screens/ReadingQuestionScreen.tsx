import { useNavigate, useSearch } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { QuestionForm } from "@/components/tarot/QuestionForm";
import { getLocalizedSpread, getSpread } from "@/lib/tarot/spreads";
import { readingStore, useReading } from "@/lib/tarot/store";
import { useTranslate } from "@/lib/i18n";
import type { SpreadId } from "@/lib/tarot/types";

export function ReadingQuestionScreen() {
  const { spread } = useSearch({ strict: false }) as { spread?: SpreadId };
  const reading = useReading();
  const navigate = useNavigate();
  const t = useTranslate();
  const spreadId = (spread ?? reading.spreadId ?? "single") as SpreadId;
  const s = getLocalizedSpread(getSpread(spreadId), t);

  return (
    <AppShell>
      <header className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {t("reading.step2")} · {s.name}
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          {t("reading.questionTitle")} <span className="aurora-text">{t("reading.questionAccent")}</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          {t("reading.questionSub")}
        </p>
      </header>
      <QuestionForm
        initial={reading.question}
        onSubmit={(q) => {
          readingStore.setSpread(spreadId);
          readingStore.setQuestion(q);
          navigate({ to: "/reading/shuffle" });
        }}
      />
    </AppShell>
  );
}
