import { useState } from "react";

export interface Ingredient { name: string; qty: number; unit: string }

export const scaleQty = (qty: number, base: number, target: number) =>
  Math.round((qty * target) / base * 10) / 10;

export const formatQty = (qty: number, unit: string) => (unit ? `${qty} ${unit}` : `${qty}`);

/** Portion state shared by the hero preview and the dashboard demo. */
export function usePortions(base = 4, step = 4, min = 4, max = 24) {
  const [people, setPeople] = useState(base);
  const change = (dir: 1 | -1) => setPeople((p) => Math.min(max, Math.max(min, p + dir * step)));
  return { base, people, inc: () => change(1), dec: () => change(-1) };
}
