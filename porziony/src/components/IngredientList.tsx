import { formatQty, scaleQty, type Ingredient } from "@/lib/scale";

interface Props { items: Ingredient[]; base: number; people: number }

export function IngredientList({ items, base, people }: Props) {
  return (
    <ul className="grid gap-2">
      {items.map((i) => (
        <li key={i.name} className="flex justify-between rounded-2xl bg-canvas px-4 py-3 text-[15px]">
          <span>{i.name}</span>
          <b className="tabular-nums text-accent-ink">{formatQty(scaleQty(i.qty, base, people), i.unit)}</b>
        </li>
      ))}
    </ul>
  );
}
