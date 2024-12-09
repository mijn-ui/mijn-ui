import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils";

const Card = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("bg-surface w-full space-y-2 rounded-lg p-4", className)}
        {...props}
      />
    );
  },
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return <div className={cn("space-y-2", className)} ref={ref} {...props} />;
  },
);

CardHeader.displayName = "CardHeader";

const CardFooter = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("flex items-center justify-between gap-2", className)}
        ref={ref}
        {...props}
      />
    );
  },
);

CardFooter.displayName = "CardFooter";

const CardContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return <div className={cn("space-y-1", className)} ref={ref} {...props} />;
  },
);

CardContent.displayName = "CardContent";

const CardTitle = forwardRef<HTMLDivElement, ComponentProps<"h3">>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        className={cn("text-2xl font-semibold", className)}
        ref={ref}
        {...props}
      />
    );
  },
);

CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLDivElement, ComponentProps<"p">>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn("text-muted-text text-sm font-medium", className)}
        ref={ref}
        {...props}
      />
    );
  },
);

CardDescription.displayName = "CardDescription";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
