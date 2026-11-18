import { Button } from "@/components/ui/button";
import { nav } from "@/data/content";

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 font-serif text-2xl" aria-label="Porziony home">
      <span className="h-7 w-7 rounded-full border-2 border-accent" style={{ background: "conic-gradient(#FF8A3D 0 75%, #F5F1EA 0)" }} />
      Porziony
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/5 bg-canvas/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8 text-[15px] text-ink/60">
            {nav.map((n) => (
              <li key={n.label}><a className="hover:text-ink" href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2">
          <Button asChild variant="ghost" size="sm"><a href="/login">Login</a></Button>
          <Button asChild size="sm"><a href="/register">Get Started</a></Button>
        </div>
      </div>
    </header>
  );
}
