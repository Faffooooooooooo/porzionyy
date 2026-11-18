interface Props { people: number; onDec: () => void; onInc: () => void }

export function PortionStepper({ people, onDec, onInc }: Props) {
  const btn = "grid h-9 w-9 place-items-center rounded-full bg-white shadow-soft hover:bg-accent focus-visible:bg-accent";
  return (
    <div className="inline-flex items-center rounded-full bg-sand p-1">
      <button type="button" className={btn} onClick={onDec} aria-label="Fewer portions">−</button>
      <output className="min-w-24 text-center text-sm font-semibold" aria-live="polite">{people} people</output>
      <button type="button" className={btn} onClick={onInc} aria-label="More portions">+</button>
    </div>
  );
}
