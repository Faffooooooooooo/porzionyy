import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatBubble } from "@/components/ChatBubble";
import { IngredientList } from "@/components/IngredientList";
import { PortionStepper } from "@/components/PortionStepper";
import { lasagna } from "@/data/content";
import { usePortions } from "@/lib/scale";

export function Hero() {
  const p = usePortions();
  return (
    <section className="pb-24 pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl leading-[1.05] md:text-7xl">Save, scale and organize every recipe effortlessly.</h1>
          <p className="mt-6 max-w-xl text-lg text-ink/60">
            Porziony uses artificial intelligence to scan recipes, adjust portions automatically, generate shopping lists and help you discover new meals.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild><a href="/register">Start Free</a></Button>
            <Button asChild variant="secondary"><a href="#demo">Watch Demo</a></Button>
          </div>
          <p className="mt-5 text-sm text-ink/50">The smarter way to manage recipes. Free for up to 50 recipes.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <Card className="relative grid gap-4 p-6" aria-label="Interactive app preview">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl">Lasagna</h3>
              <span className="rounded-full bg-sage/30 px-3 py-1 text-xs">Scanned from photo</span>
            </div>
            <PortionStepper people={p.people} onDec={p.dec} onInc={p.inc} />
            <IngredientList items={lasagna} base={p.base} people={p.people} />
            <ChatBubble from="user">I have zucchini, eggs and parmesan.</ChatBubble>
            <ChatBubble from="ai">AI Chef: Try a zucchini frittata, ready in 20 minutes.</ChatBubble>
            <Card className="p-4 text-sm sm:absolute sm:-bottom-6 sm:-right-4 sm:w-52">
              <b>Shopping list</b><br />Flour, eggs, cheese and 2 more items, merged from 3 recipes.
            </Card>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
