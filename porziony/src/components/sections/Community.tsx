import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, toneBg } from "@/components/Section";
import { posts } from "@/data/content";

export function Community() {
  return (
    <Section id="community" title="Cook together with the Porziony community." lead="Share recipes, save favorites and follow the creators you love.">
      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} className="p-6">
            <div className="flex items-center gap-3">
              <span className={`grid h-10 w-10 place-items-center rounded-full font-semibold ${toneBg[p.tone]}`}>{p.initial}</span>
              <div><b>{p.name}</b><br /><span className="rounded-full bg-sand px-2.5 py-0.5 text-xs">{p.badge}</span></div>
            </div>
            <div className={`my-4 h-28 rounded-2xl ${toneBg[p.tone]}`} role="img" aria-label={`${p.title} photo placeholder`} />
            <b>{p.title}</b>
            <p className="mt-1.5 flex gap-4 text-sm text-ink/60"><span>♥ {p.likes}</span><span>💬 {p.comments}</span><span>★ Saved</span></p>
          </Card>
        ))}
      </div>
      <Button asChild variant="secondary" className="mt-9"><a href="/community">Explore Community</a></Button>
    </Section>
  );
}
