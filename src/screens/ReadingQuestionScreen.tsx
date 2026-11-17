import { useNavigate, useSearch } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { QuestionForm } from "@/components/tarot/QuestionForm";
import { getSpread } from "@/lib/tarot/spreads";
import { readingStore, useReading } from "@/lib/tarot/store";
import type { SpreadId } from "@/lib/tarot/types";

export function ReadingQuestionScreen() {
  const { spread } = useSearch({ strict: false }) as { spread?: SpreadId };
  const reading = useReading();
  const navigate = useNavigate();
  const spreadId = (spread ?? reading.spreadId ?? "single") as SpreadId;
  const s = getSpread(spreadId);

  return (
    <AppShell>
      <header className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Step 2 of 4 · {s.name}
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          Set your <span className="aurora-text">intention</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          The clearer the question, the clearer the answer. Take a breath.
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
