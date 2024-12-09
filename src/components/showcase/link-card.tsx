import React from "react";

import { cn } from "@/utils";

import { Card } from "../mijn-ui/Card";
import Link from "next/link";

type LinkCardProps = {
  href: string;
  label: string;
  inprogress?: boolean;
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
  inprogress,
}: LinkCardProps) => {
  return (
    <Link
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      className={cn(
        "relative col-span-1",
        inprogress && "pointer-events-none",
        containerClass,
      )}
    >
      <div
        className={
          "card_glow relative flex min-h-72 w-full items-center justify-center rounded-2xl border [mask:radial-gradient(75%_75%_at_50%,rgb(0,0,0)_60%,rgba(0,0,0,0)_100%)] sm:aspect-video sm:h-full sm:w-full"
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
      </div>
      <div className="absolute left-0 top-0 p-2.5 sm:p-4">
        <p className="bg-gradient-to-br from-main-text to-muted-text/70 bg-clip-text text-sm text-transparent sm:text-sm">
          {label}
        </p>
      </div>
      {inprogress && (
        <p className="absolute inset-0 flex items-center justify-center gap-1 rounded-lg bg-black/10 text-xs font-medium text-muted-text dark:bg-black/50 dark:text-muted-text">
          Under Development
        </p>
      )}
    </Link>
  );
};

export default LinkCard;
