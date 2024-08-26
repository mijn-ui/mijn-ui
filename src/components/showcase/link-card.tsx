import React from "react";
import { Card } from "../mijn-ui/Card";
import { cn } from "@/utils";

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
          "pointer-events-none aspect-video bg-background relative w-full h-full flex items-center justify-center p-10 [mask:radial-gradient(75%_75%_at_50%,rgb(0,0,0)_60%,rgba(0,0,0,0)_100%)]",
          className
        )}>
        {children}
      </Card>
      <div className="absolute top-0 left-0 p-2.5 sm:p-5">
        <p className="bg-gradient-to-br from-black to-zinc-700 bg-clip-text text-transparent text-sm sm:text-base">{label}</p>
      </div>
    </a>
  );
};

export default LinkCard;
