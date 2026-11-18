import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <Section id="about" alt title="Loved in home kitchens and professional ones.">
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="flex flex-col justify-between gap-6 p-8">
            <blockquote className="font-serif text-xl leading-snug">“{t.quote}”</blockquote>
            <figcaption className="text-sm text-ink/60"><b className="text-ink">{t.name}</b><br />{t.role}</figcaption>
          </Card>
        ))}
      </div>
    </Section>
  );
}
