import React, { ComponentProps } from "react";

import { cn } from "@/utils";

const BorderGradient = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "user-select-none center pointer-events-none h-px w-full transform-gpu bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(249,115,22,0.9)_50%,rgba(0,0,0,0)_100%)] dark:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(249,115,22,0.5)_50%,rgba(0,0,0,0)_100%)]",
        className,
      )}
      {...props}
    />
  );
};

export default BorderGradient;
