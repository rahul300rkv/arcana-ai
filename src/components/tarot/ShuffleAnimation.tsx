import { TarotDeck } from "./TarotDeck";

export function ShuffleAnimation({ shuffling }: { shuffling: boolean }) {
  return (
    <div className="relative grid place-items-center py-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_35%,transparent),transparent_70%)] blur-2xl" />
      </div>
      <TarotDeck shuffling={shuffling} />
    </div>
  );
}
