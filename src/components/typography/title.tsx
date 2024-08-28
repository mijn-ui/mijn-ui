import { cn } from "@/utils";
import React from "react";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={cn("bg-gradient-to-br from-black to-zinc-500 bg-clip-text text-3xl/[1.2] xs:text-4xl/[1.2] font-bold sm:font-extrabold tracking-tight text-transparent md:text-6xl/[1.2]", className)}>
      {children}
    </h1>
  );
};

export default Title;
