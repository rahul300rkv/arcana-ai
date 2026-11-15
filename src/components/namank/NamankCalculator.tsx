import { useId, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Calculator, RotateCcw, Sparkles, Star } from "lucide-react";
import { GlassCard } from "@/components/arcana/GlassCard";
import { GoldButton } from "@/components/arcana/GoldButton";
import { StepTrail } from "@/components/arcana/StepTrail";
import { DisplayAd } from "@/components/ads/DisplayAd";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { calculateNamank, parseNameInput, type NamankResult } from "@/lib/numerology/namank";
import { NAMANK_MEANINGS } from "@/data/namank";

interface Props {
  onViewMeaning?: (value: number) => void;
}

/** Live "your Namank would be…" preview shown the moment a valid name is typed. */
function LivePreview({ name }: { name: string }) {
  const preview = useMemo(() => {
    const trimmed = name.trim();
    if (!trimmed || !/[A-Za-z]/.test(trimmed)) return null;
    try {
      return calculateNamank(trimmed);
    } catch {
      return null;
    }
  }, [name]);

  return (
    <AnimatePresence>
      {preview && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          <div
            className="mt-3 rounded-xl border p-3"
            style={{
              borderColor: "color-mix(in oklab, var(--gold) 35%, transparent)",
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--gold) 10%, transparent), transparent 70%)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Your Namank
              </span>
              <motion.span
                key={preview.value}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="font-display text-xl text-[color:var(--gold)]"
              >
                {preview.value}
              </motion.span>
              {preview.isMasterNumber && (
                <span className="text-xs text-muted-foreground">· Master Number</span>
              )}
            </div>
            <StepTrail steps={preview.steps} className="mt-2" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function NamankCalculator({ onViewMeaning }: Props) {
  const inputId = useId();
  const [nameInput, setNameInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<NamankResult | null>(null);
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  function onCalculate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      const cleaned = parseNameInput(nameInput);
      const calc = calculateNamank(cleaned);
      setResult(calc);
      setSubmittedName(cleaned);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setResult(null);
    }
  }

  function onReset() {
    setNameInput("");
    setError(null);
    setResult(null);
    setSubmittedName(null);
  }

  const meaning = result ? NAMANK_MEANINGS[result.value] : null;

  return (
    <GlassCard className="relative overflow-hidden p-6 sm:p-8">
      {/* top accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)] to-transparent opacity-60" />

      <form onSubmit={onCalculate} className="grid gap-5" noValidate>
        <div>
          <Label htmlFor={inputId}>Your full name</Label>
          <Input
            id={inputId}
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="e.g. Rahul Kumar"
            autoComplete="name"
            className="mt-2 transition-all focus-visible:ring-[color:var(--gold)]"
            aria-describedby={error ? `${inputId}-error` : undefined}
            aria-invalid={error ? true : undefined}
          />
          <LivePreview name={nameInput} />
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              id={`${inputId}-error`}
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-xs text-red-400"
            >
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {error}
            </motion.p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <GoldButton type="submit" className="flex-1">
            <Calculator className="h-4 w-4" aria-hidden />
            Calculate Namank
          </GoldButton>
          <GoldButton type="button" variant="secondary" onClick={onReset} className="sm:w-auto">
            <RotateCcw className="h-4 w-4" aria-hidden />
            Reset
          </GoldButton>
        </div>
      </form>

      <AnimatePresence>
        {result && meaning && submittedName && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 border-t border-white/10 pt-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <Sparkles className="h-3 w-3 text-[var(--gold)]" aria-hidden />
                Your Namank
              </span>

              {/* glowing number reveal, same treatment as Mulank / Bhagyank */}
              <div className="relative mt-5">
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--gold) 55%, transparent), transparent 70%)",
                  }}
                  animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.9, 1.05, 0.9] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  key={result.value}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="relative grid h-28 w-28 place-items-center rounded-full border sm:h-32 sm:w-32"
                  style={{
                    borderColor: "color-mix(in oklab, var(--gold) 55%, transparent)",
                    background:
                      "linear-gradient(140deg, color-mix(in oklab, var(--gold) 14%, transparent), transparent 60%)",
                    boxShadow: "inset 0 0 32px color-mix(in oklab, var(--gold) 18%, transparent)",
                  }}
                >
                  <Star
                    aria-hidden
                    className="absolute right-2 top-2 h-3.5 w-3.5 text-[color:var(--gold)] opacity-70"
                  />
                  <span className="font-display text-6xl aurora-text sm:text-7xl">
                    {result.value}
                  </span>
                </motion.div>
              </div>

              <p className="mt-4 font-display text-lg text-foreground/90 sm:text-xl">
                {meaning.title}
              </p>
              {result.isMasterNumber && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-1 text-xs text-[var(--gold)]"
                >
                  This is a Master Number — read as carrying extra intensity in numerological
                  tradition.
                </motion.p>
              )}
            </motion.div>

            {/* Calculation breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-6 max-w-sm rounded-xl glass p-4 text-center"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Calculation breakdown
              </p>
              <p className="mt-2 font-display text-sm text-foreground/90">
                Name: {submittedName}
              </p>

              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {result.breakdown.map((item, index) => (
                  <div
                    key={`${item.letter}-${index}`}
                    className="flex h-9 w-9 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]"
                  >
                    <span className="text-xs font-medium">{item.letter}</span>
                    <span className="text-[10px] text-[color:var(--gold)]">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex justify-center">
                <StepTrail steps={result.steps} className="justify-center sm:text-xs" />
              </div>
              <p className="mt-3 font-display text-sm text-[var(--gold)]">
                Your Namank is {result.value}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="mx-auto mt-6 max-w-lg text-center text-sm leading-relaxed text-muted-foreground"
            >
              {meaning.meaning}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-6 flex justify-center"
            >
              <button
                type="button"
                onClick={() => onViewMeaning?.(result.value)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--gold)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                See the full Namank {result.value} meaning ↓
              </button>
            </motion.div>

            {/* Display ad — sits below the result, outside the reading flow */}
            <div className="mt-8">
              <DisplayAd />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
