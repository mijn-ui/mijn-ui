import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const BadgeStyles = cva(
  ["inline-flex justify-center items-center rounded-full text-xs"],
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline: "border hover:bg-accent border-border text-foreground",
        danger: "bg-danger text-danger-foreground hover:bg-danger/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "py-0.5 px-2.5",
        md: "py-1 px-3",
        lg: "py-1.5 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof BadgeStyles>;

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <span
        className={cn(BadgeStyles({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
