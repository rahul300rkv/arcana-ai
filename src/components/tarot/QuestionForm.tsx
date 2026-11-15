import { useState } from "react";
import { motion } from "framer-motion";
import { GoldButton } from "@/components/arcana/GoldButton";
import { cn } from "@/lib/utils";

const CHIPS = ["Love","Career","Money","Family","Health","Relationships","Spiritual Growth","Life Purpose"];

export function QuestionForm({
  initial = "",
  onSubmit,
}: {
  initial?: string;
  onSubmit: (question: string) => void;
}) {
  const [q, setQ] = useState(initial);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Your question
        </label>
        <textarea
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="What guidance are you seeking today?"
          rows={5}
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-5 text-base leading-relaxed placeholder:text-muted-foreground focus:border-[color-mix(in_oklab,var(--gold)_40%,transparent)] focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Suggested themes</p>
        <div className="flex flex-wrap gap-2">
          {CHIPS.map((c) => {
            const active = q.toLowerCase().includes(c.toLowerCase());
            return (
              <motion.button
                key={c}
                whileTap={{ scale: 0.96 }}
                onClick={() => setQ((prev) => (prev ? `${prev.trim()} ${c}` : c))}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-all",
                  active
                    ? "border-[color-mix(in_oklab,var(--gold)_50%,transparent)] bg-[color-mix(in_oklab,var(--gold)_15%,transparent)] text-foreground"
                    : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </motion.button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end pt-2">
        <GoldButton onClick={() => onSubmit(q.trim())} disabled={q.trim().length < 3}>
          Continue
        </GoldButton>
      </div>
    </div>
  );
}
