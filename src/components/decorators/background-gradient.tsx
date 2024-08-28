import { cn } from "@/utils";
import React from "react";

type BackgroundGradient = {
  color?: string;
  className?: string;
};

const BackgroundGradient = ({ color = "hsl(18,81.9%,65.3%,0.5)", className }: BackgroundGradient) => {
  return (
    <div
      className={cn("absolute inset-0 -z-10", className)}
      style={{
        backgroundImage: `radial-gradient(80% 60% at 50% -20%,${color},rgba(255,255,255,0))`,
      }}></div>
  );
};

export default BackgroundGradient;
