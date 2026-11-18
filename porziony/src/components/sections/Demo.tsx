import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { IngredientList } from "@/components/IngredientList";
import { PortionStepper } from "@/components/PortionStepper";
import { lasagna, sidebar } from "@/data/content";
import { formatQty, scaleQty, usePortions } from "@/lib/scale";

export function Demo() {
  const p = usePortions();
  const [checked, setChecked] = useState<string[]>(["Flour"]);
  const toggle = (n: string) => setChecked((c) => (c.includes(n) ? c.filter((x) => x !== n) : [...c, n]));
  return (
    <Section id="demo" title="One calm place for all your cooking." lead="Change the portions and watch the recipe and shopping list update.">
      <Card className="grid overflow-hidden md:grid-cols-[210px_1fr]">
        <nav aria-label="App" className="flex gap-1 overflow-x-auto bg-sand p-4 md:grid md:content-start">
          {sidebar.map((s, i) => (
            <a key={s} href="#demo" className={`whitespace-nowrap rounded-xl px-3.5 py-2.5 text-[15px] ${i === 0 ? "bg-white font-semibold shadow-soft" : "text-ink/60"}`}>{s}</a>
          ))}
        </nav>
        <div className="grid gap-7 p-7 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl">Lasagna</h3>
            <p className="mb-5 mt-1 text-sm text-ink/60">Family classic, scanned from Nonna’s notebook.</p>
            <div className="mb-4"><PortionStepper people={p.people} onDec={p.dec} onInc={p.inc} /></div>
            <IngredientList items={lasagna} base={p.base} people={p.people} />
          </div>
          <div className="rounded-3xl bg-canvas p-5">
            <h4 className="mb-3 font-semibold">Shopping list</h4>
            {lasagna.map((i) => (
              <label key={i.name} className="flex cursor-pointer gap-3 border-b border-ink/5 py-2 text-[15px]">
                <input type="checkbox" className="accent-accent" checked={checked.includes(i.name)} onChange={() => toggle(i.name)} />
                {i.name} {formatQty(scaleQty(i.qty, p.base, p.people), i.unit)}
              </label>
            ))}
            <label className="flex gap-3 py-2 text-[15px]"><input type="checkbox" className="accent-accent" /> Parmesan, 1 wedge</label>
          </div>
        </div>
      </Card>
    </Section>
  );
}
