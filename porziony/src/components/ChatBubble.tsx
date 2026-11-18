import { cn } from "@/lib/utils";

export function ChatBubble({ from, children }: { from: "user" | "ai"; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "max-w-[88%] rounded-3xl px-4 py-3 text-sm",
        from === "user" ? "justify-self-end rounded-br-md bg-sand" : "rounded-bl-md bg-slate/15"
      )}
    >
      {children}
    </div>
  );
}
