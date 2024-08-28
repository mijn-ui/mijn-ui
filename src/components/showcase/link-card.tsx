import React from "react";

import { cn } from "@/utils";

import { Card } from "../mijn-ui/Card";

type LinkCardProps = {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
};

const LinkCard = ({ href, label, children, className }: LinkCardProps) => {
  return (
    <a href={href} target="_blank" className="relative col-span-1">
      <Card
        className={cn(
          "card_glow relative flex min-h-72 w-full items-center justify-center bg-background [mask:radial-gradient(75%_75%_at_50%,rgb(0,0,0)_60%,rgba(0,0,0,0)_100%)] sm:aspect-video sm:h-full sm:w-full",
          className,
        )}
        id="card"
      >
        <div className="card_glow_content p-10">{children}</div>
      </Card>
      <div className="absolute left-0 top-0 p-2.5 sm:p-5">
        <p className="bg-gradient-to-br from-black to-zinc-700 bg-clip-text text-sm text-transparent sm:text-base">
          {label}
        </p>
      </div>
    </a>
  );
};

export default LinkCard;
