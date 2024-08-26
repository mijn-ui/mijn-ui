import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const alertStyles = cva(
  "relative rounded-lg py-4 px-3 [&>span~*]:pl-8 border-border border [&>svg]:text-foreground w-96 [&>div]:translate-y-[-3px]",
  {
    variants: {
      variant: {
        default: "text-foreground",
        danger:
          "border-danger/50 text-danger dark:border-danger [&>svg]:text-danger",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type AlertProps = ComponentProps<"div"> & VariantProps<typeof alertStyles>;

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(alertStyles({ variant, className }))}
      />
    );
  },
);

Alert.displayName = "Alert";

const AlertIcon = forwardRef<HTMLSpanElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        {...props}
        className={cn(
          "translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:h-5 [&>svg]:w-5",
          className,
        )}
      />
    );
  },
);

AlertIcon.displayName = "AlertIcon";

const AlertTitle = forwardRef<HTMLHeadingElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <h5
        ref={ref}
        {...props}
        className={cn("w-full text-base font-semibold leading-none", className)}
      />
    );
  },
);

AlertTitle.displayName = "AlertTitle";

const AlertDescription = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-1 text-sm", className)} {...props} />
  ),
);

AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertIcon, AlertTitle };
