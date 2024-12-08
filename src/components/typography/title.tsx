import React from "react";

import { cn } from "@/utils";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={cn(
        "from-main-text to-muted-text/70 bg-gradient-to-br bg-clip-text text-3xl/[1.2] font-bold tracking-tight text-transparent xs:text-4xl/[1.2] sm:font-extrabold md:text-6xl/[1.2]",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
