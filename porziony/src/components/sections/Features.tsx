import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Section, toneBg } from "@/components/Section";
import { features } from "@/data/content";

export function Features() {
  return (
    <Section id="features" alt title="Transform every recipe into an intelligent recipe." lead="Everything you need to cook with less planning and more pleasure.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <motion.article key={f.title} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
            <Card className="h-full p-8 transition-shadow hover:shadow-lift">
              <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl text-2xl ${toneBg[f.tone]}`} aria-hidden>{f.icon}</div>
              <h3 className="text-xl">{f.title}</h3>
              <p className="mt-2.5 text-[15px] text-ink/60">{f.text}</p>
              {f.note && <p className="mt-3.5 text-sm">{f.note}</p>}
            </Card>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
