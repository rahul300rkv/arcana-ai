import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NAMANK_MEANINGS, type NamankMeaning } from "@/data/namank";

function MeaningBlock({ m }: { m: NamankMeaning }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">{m.archetype}</p>
      <p>{m.meaning}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="font-display text-sm text-foreground/90">Personality</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {m.personality.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm text-foreground/90">Strengths</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {m.strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm text-foreground/90">Challenges</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {m.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm text-foreground/90">Career tendencies</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {m.career.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h4 className="font-display text-sm text-foreground/90">Relationships</h4>
        <p className="mt-2">{m.relationships}</p>
      </div>
      <div>
        <h4 className="font-display text-sm text-foreground/90">Financial tendencies</h4>
        <p className="mt-2">{m.financial}</p>
      </div>
      <div>
        <h4 className="font-display text-sm text-foreground/90">Life purpose</h4>
        <p className="mt-2">{m.lifePurpose}</p>
      </div>
      <div>
        <h4 className="font-display text-sm text-foreground/90">Practical guidance</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {m.guidance.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CORE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const MASTER_NUMBERS = [11, 22];

interface Props {
  /** Currently-open item value (e.g. "namank-11"), controlled by the parent. */
  openValue?: string;
  onOpenValueChange?: (value: string) => void;
}

export function NamankMeaningsAccordion({ openValue, onOpenValueChange }: Props) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-lg text-foreground/90 sm:text-xl">Namank 1–9</h3>
        <Accordion
          type="single"
          collapsible
          className="mt-4 w-full"
          value={
            openValue && CORE_NUMBERS.includes(Number(openValue.split("-")[1]))
              ? openValue
              : undefined
          }
          onValueChange={onOpenValueChange}
        >
          {CORE_NUMBERS.map((n) => {
            const m = NAMANK_MEANINGS[n];
            return (
              <AccordionItem
                key={n}
                id={`namank-${n}`}
                value={`namank-${n}`}
                className="scroll-mt-24 border-white/10"
              >
                <AccordionTrigger className="text-left text-sm font-medium sm:text-base">
                  <span className="font-display text-base sm:text-lg">{m.title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <MeaningBlock m={m} />
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      <div>
        <h3 className="font-display text-lg text-foreground/90 sm:text-xl">
          Master Numbers: 11, 22
        </h3>
        <Accordion
          type="single"
          collapsible
          className="mt-4 w-full"
          value={
            openValue && MASTER_NUMBERS.includes(Number(openValue.split("-")[1]))
              ? openValue
              : undefined
          }
          onValueChange={onOpenValueChange}
        >
          {MASTER_NUMBERS.map((n) => {
            const m = NAMANK_MEANINGS[n];
            return (
              <AccordionItem
                key={n}
                id={`namank-${n}`}
                value={`namank-${n}`}
                className="scroll-mt-24 border-white/10"
              >
                <AccordionTrigger className="text-left text-sm font-medium sm:text-base">
                  <span className="font-display text-base sm:text-lg">{m.title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <MeaningBlock m={m} />
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
