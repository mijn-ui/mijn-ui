import React from "react";

import { cn } from "@/utils";

type FooterProps = {
  text: string;
  className?: string;
};

const Footer = ({ className, text }: FooterProps) => {
  return (
    <footer
      className={cn(
        "flex w-full items-center justify-center bg-black py-4",
        className,
      )}
    >
      <div className="flex w-full max-w-screen-lg flex-col items-center justify-between gap-2 px-5 py-2 sm:flex-row">
        <p className="bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-xs font-medium tracking-tight text-transparent sm:text-sm">
          {text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
