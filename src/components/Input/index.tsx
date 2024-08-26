import React, { ComponentProps, forwardRef } from "react";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
  WithDisplayName,
} from "@/types";
import { cn, generateId } from "@/utils";

type InputProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C> & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };

type InputComponent = <C extends React.ElementType = "input">(
  props: InputProps<C>,
) => React.ReactElement | null;

const Input: WithDisplayName<InputComponent> = forwardRef(
  <C extends React.ElementType = "input">(
    {
      renderAs,
      startIcon,
      endIcon,
      className,
      disabled,
      id,
      ...props
    }: InputProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const Component = renderAs || "input";
    const inputId = id || generateId();

    return (
      <div
        className={cn(
          "relative flex w-full items-center gap-1 rounded-md border border-border bg-card p-2.5 text-sm text-card-foreground focus-within:border-black focus-within:ring-1 focus-within:ring-black",
          { "cursor-not-allowed text-card-description": disabled },
          className,
        )}
      >
        {startIcon && (
          <label
            htmlFor={inputId}
            className={cn(disabled ? "cursor-not-allowed" : "cursor-text")}
          >
            {startIcon}
          </label>
        )}

        <Component
          ref={ref}
          className={cn(
            "h-full w-full border-none bg-transparent outline-none",
            {
              "cursor-not-allowed": disabled,
            },
          )}
          disabled={disabled}
          id={inputId}
          {...props}
        />

        {endIcon && <span>{endIcon}</span>}
      </div>
    );
  },
) as InputComponent;

Input.displayName = "Input";

type StrengthIndicatorProps = ComponentProps<"div"> & {
  strength?: number;
  levels?: number;
};

const InputStrengthIndicator = ({
  strength = 0,
  levels = 4,
  className,
  ...props
}: StrengthIndicatorProps) => {
  const getColor = (index: number) => {
    if (strength >= index + 1) {
      if (strength === 1) return "bg-danger";
      if (strength === 2) return "bg-warning";
      if (strength >= 3) return "bg-success";
    }
    return "bg-muted";
  };

  return (
    <div
      className={cn(
        "flex h-1 w-full min-w-40 max-w-xs items-center gap-1",
        className,
      )}
      {...props}
    >
      {Array.from({ length: levels }, (_, index) => (
        <div
          key={index}
          className={cn("size-full rounded-full", getColor(index))}
        />
      ))}
    </div>
  );
};

export { Input, InputStrengthIndicator };
