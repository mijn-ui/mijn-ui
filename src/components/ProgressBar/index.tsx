import { ComponentProps, forwardRef, useEffect, useState } from "react";

import { cn } from "@/utils";

const MIN = 0;

type ProgressBarProps = ComponentProps<"div"> & {
  value?: number;
  onComplete?: () => void;
  max?: number;
};

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    { value = 0, onComplete = () => {}, max = 100, className, ...props },
    ref,
  ) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
      setPercent(Math.min(Math.max(value, MIN), max));

      if (value >= max) {
        onComplete();
      }
    }, [value]);

    return (
      <div
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-muted",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div
          className="h-full bg-primary"
          style={{
            transform: `scaleX(${percent / max})`,
            transformOrigin: "left",
          }}
          aria-valuemin={MIN}
          aria-valuemax={max}
          aria-valuenow={percent}
          role="progressbar"
        />
      </div>
    );
  },
);

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
