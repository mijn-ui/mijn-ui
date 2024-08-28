import React from "react";

import { cn } from "@/utils";

type BorderGradientProps = {
  color?: string;
  className?: string;
};

const PRIMARY_COLOR = "rgba(249,115,22,0.9)";

const BorderGradient = ({
  color = PRIMARY_COLOR,
  className,
}: BorderGradientProps) => {
  return (
    <div
      className={cn(
        "user-select-none center pointer-events-none h-px w-full transform-gpu",
        className,
      )}
      style={{
        background: `linear-gradient(90deg,rgba(0,0,0,0) 0%,${color} 50%,rgba(0,0,0,0) 100%)`,
      }}
    ></div>
  );
};

export default BorderGradient;
