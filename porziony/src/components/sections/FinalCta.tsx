import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";

export function FinalCta() {
  return (
    <Section alt className="text-center">
      <h2 className="mb-8 text-4xl md:text-5xl">Start cooking smarter today.</h2>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild><a href="/register">Create Free Account</a></Button>
        <Button asChild variant="secondary"><a href="#features">Explore Features</a></Button>
      </div>
    </Section>
  );
}
