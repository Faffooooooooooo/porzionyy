import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { plans } from "@/data/content";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="pricing" title="Simple pricing that grows with your kitchen.">
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <Card key={p.name} className={cn("flex flex-col p-8", p.featured && "border-2 border-accent")}>
            <h3 className="text-xl">{p.name}</h3>
            <div className="my-3 font-serif text-5xl">{p.price}<small className="font-sans text-base text-ink/50">{p.period}</small></div>
            <ul className="mb-7 grid flex-1 gap-2.5 text-[15px]">
              {p.items.map((i) => (<li key={i}><span className="mr-2.5 font-bold text-sage" aria-hidden>✓</span>{i}</li>))}
            </ul>
            <Button asChild variant={p.featured ? "primary" : "secondary"}><a href="/register">{p.cta}</a></Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
