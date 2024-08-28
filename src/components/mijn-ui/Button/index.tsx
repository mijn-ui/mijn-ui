import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
  WithDisplayName,
} from "@/types";
import { cn } from "@/utils";

export const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-1 rounded-md text-sm disabled:bg-disabled disabled:text-disabled-foreground",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline: "border border-border text-foreground hover:bg-accent",
        danger: "bg-danger text-danger-foreground hover:bg-danger/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C>;

export type ButtonPropsWithVariant<C extends React.ElementType> =
  ButtonProps<C> & VariantProps<typeof buttonStyles>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonPropsWithVariant<C>,
) => React.ReactElement | null;

const Button: WithDisplayName<ButtonComponent> = forwardRef(
  <C extends React.ElementType = "button">(
    { renderAs, variant, size, className, ...props }: ButtonPropsWithVariant<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const Component = renderAs || "button";

    return (
      <Component
        ref={ref}
        className={cn(buttonStyles({ variant, size, className }))}
        {...props}
      />
    );
  },
) as ButtonComponent;

Button.displayName = "Button";

export default Button;
