import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils";

const Switch = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={cn("inline-flex cursor-pointer items-center", className)}
      >
        <input
          type="checkbox"
          className={cn("peer sr-only")}
          {...props}
          ref={ref}
        />
        <div className="peer relative h-6 w-11 rounded-full bg-muted shadow-sm after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-primary-foreground after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-disabled:cursor-not-allowed peer-disabled:opacity-80 peer-disabled:after:opacity-80 rtl:peer-checked:after:-translate-x-full"></div>
      </label>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
