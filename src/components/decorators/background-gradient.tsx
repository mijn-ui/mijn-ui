import React from "react";

import { cn } from "@/utils";

type BackgroundGradient = {
  color?: string;
  className?: string;
};

const PRIMARY_COLOR = "hsl(18,81.9%,65.3%,0.5)";

const BackgroundGradient = ({
  color = PRIMARY_COLOR,
  className,
}: BackgroundGradient) => {
  return (
    <div
      className={cn("absolute inset-0 -z-10", className)}
      style={{
        backgroundImage: `radial-gradient(80% 60% at 50% -20%,${color},rgba(255,255,255,0))`,
      }}
    ></div>
  );
};

export default BackgroundGradient;
