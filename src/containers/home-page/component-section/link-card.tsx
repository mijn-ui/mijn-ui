import React from "react"
import Link from "next/link"
import { cn } from "@/utils"

type LinkCardProps = {
  href: string
  label: string
  inprogress?: boolean
  cardContentClass?: string
  containerClass?: string
  children: React.ReactNode
}

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
        "relative col-span-1 outline-none focus-visible:ring-2 ring-offset-2 ring-offset-background ring-ring",
        inprogress && "pointer-events-none",
        containerClass,
      )}
      draggable="false"
    >
      <div
        className={
          "card_glow relative flex min-h-72 w-full items-center justify-center border [mask:radial-gradient(75%_75%_at_50%,rgb(0,0,0)_60%,rgba(0,0,0,0)_100%)] aspect-video h-full"
        }
        id="card"
      >
        <div
          tabIndex={-1}
          className={cn(
            "card_glow_content pointer-events-none",
            cardContentClass,
          )}
        >
          {children}
        </div>
      </div>
      <div className="absolute left-0 top-0 p-2.5 sm:p-4">
        <p className="bg-gradient-to-br from-foreground to-muted-foreground/70 bg-clip-text text-sm text-transparent sm:text-sm">
          {label}
        </p>
      </div>
      {inprogress && (
        <p className="absolute inset-0 flex items-center justify-center gap-1 bg-black/10 text-xs font-medium text-muted-foreground dark:bg-black/50 dark:text-muted-foreground">
          Under Development
        </p>
      )}
    </Link>
  )
}

export default LinkCard
