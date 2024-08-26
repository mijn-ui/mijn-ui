import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils";

const RadioButton = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-0"
          htmlFor="vertical-list-react"
        >
          <input
            type="radio"
            ref={ref}
            className={cn(
              "before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-foreground text-primary transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-0",
              className,
            )}
            {...props}
          />
          <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx={8} cy={8} r={8} />
            </svg>
          </span>
        </label>
      </div>
    );
  },
);

RadioButton.displayName = "RadioButton";

export default RadioButton;
