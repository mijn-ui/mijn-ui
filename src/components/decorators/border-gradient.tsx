import { cn } from "@/utils";
import React from "react";

type BorderGradientProps = {
  color?: string;
  className?: string;
};

const BorderGradient = ({ color = "rgba(249,115,22,0.9)", className }: BorderGradientProps) => {
  return (
    <div
      className={cn("user-select-none center pointer-events-none h-px w-full transform-gpu", className)}
      style={{ background: `linear-gradient(90deg,rgba(0,0,0,0) 0%,${color} 50%,rgba(0,0,0,0) 100%)` }}></div>
  );
};

export default BorderGradient;
