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
          "w-full min-h-72 sm:aspect-video sm:w-full sm:h-full bg-background relative flex items-center justify-center card_glow [mask:radial-gradient(75%_75%_at_50%,rgb(0,0,0)_60%,rgba(0,0,0,0)_100%)]",
          className
        )}
        id="card">
        <div className="card_glow_content p-10">{children}</div>
      </Card>
      <div className="absolute top-0 left-0 p-2.5 sm:p-5">
        <p className="bg-gradient-to-br from-black to-zinc-700 bg-clip-text text-transparent text-sm sm:text-base">{label}</p>
      </div>
    </a>
  );
};

export default LinkCard;
