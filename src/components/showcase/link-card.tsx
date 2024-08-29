import React from "react";

import { cn } from "@/utils";

import { Card } from "../mijn-ui/Card";

type LinkCardProps = {
  href: string;
  label: string;
  cardContentClass?: string;
  containerClass?: string;
  children: React.ReactNode;
};

const LinkCard = ({
  href,
  label,
  children,
  cardContentClass,
  containerClass,
}: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn("relative col-span-1", containerClass)}
    >
      <Card
        className={
          "card_glow relative flex min-h-72 w-full items-center justify-center bg-background [mask:radial-gradient(75%_75%_at_50%,rgb(0,0,0)_60%,rgba(0,0,0,0)_100%)] sm:aspect-video sm:h-full sm:w-full"
        }
        id="card"
      >
        <div
          className={cn(
            "card_glow_content pointer-events-none p-10",
            cardContentClass,
          )}
        >
          {children}
        </div>
      </Card>
      <div className="absolute left-0 top-0 p-2.5 sm:p-4">
        <p className="bg-gradient-to-br from-black to-zinc-700 bg-clip-text text-sm text-transparent sm:text-sm">
          {label}
        </p>
      </div>
    </a>
  );
};

export default LinkCard;
