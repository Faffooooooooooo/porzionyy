import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props { id?: string; alt?: boolean; title?: string; lead?: string; children: ReactNode; className?: string }

export function Section({ id, alt, title, lead, children, className }: Props) {
  return (
    <section id={id} className={cn("py-24", alt && "bg-sand", className)}>
      <div className="mx-auto max-w-6xl px-6">
        {title && (
          <div className="mb-14 max-w-2xl">
            <h2 className="text-4xl md:text-5xl leading-[1.08]">{title}</h2>
            {lead && <p className="mt-4 text-lg text-ink/60">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export const toneBg = { accent: "bg-accent/15", slate: "bg-slate/15", sage: "bg-sage/30" } as const;
