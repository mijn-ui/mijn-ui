import { cn } from "@/utils";
import React from "react";

type SubTitleProps = {
  children?: string;
  className?: string;
};

const SubTitle = ({ children, className }: SubTitleProps) => {
  return (
    <h3
      className={cn(
        "bg-gradient-to-br from-black to-zinc-500 bg-clip-text text-center text-2xl/[1.2] font-bold tracking-tight text-transparent sm:text-4xl/[1.2] sm:font-extrabold",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default SubTitle;
