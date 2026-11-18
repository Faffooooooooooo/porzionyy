import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-[#2B1300] shadow-[0_8px_24px_-8px_rgba(255,138,61,.7)]",
        secondary: "border border-ink/10 bg-white text-ink shadow-soft",
        ghost: "text-ink/70 hover:text-ink",
      },
      size: { md: "px-6 py-3.5 text-base", sm: "px-5 py-2.5 text-sm" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  }
);
Button.displayName = "Button";
