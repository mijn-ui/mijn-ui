"use client"

import React from "react"
import Link from "next/link"
import { Badge } from "@mijn-ui/react-badge"
import Logo from "../icons/logo"
import { useScrollActive } from "@/hooks/use-scroll-active"
import { cn } from "@/utils"

const Navbar = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  const active = useScrollActive()

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-14 w-full border-b border-b-transparent origin-left items-center justify-center",
        { "border-b-border bg-background/10 backdrop-blur": active },
        "max-sm:!border-b-border",
        className,
      )}
    >
      <nav className="flex w-full max-w-screen-2xl items-center justify-between px-5 py-2">
        <div className="flex items-center gap-4">
          <Link
            href={"/"}
            className="flex items-center gap-2 text-lg font-bold"
          >
            <Logo className="fill-fd-foreground size-5 items-center" />
            MijnUI
          </Link>
          <Badge
            size="xs"
            className="bg-primary/20 text-primary hover:bg-primary/20"
          >
            v0.1.0
          </Badge>
        </div>

        {children}
      </nav>
      <TopRightRadialGradient />
    </header>
  )
}

const TopRightRadialGradient = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("absolute inset-0 -z-10", className)}
      style={{
        ...style,
        backgroundImage:
          "radial-gradient(60% 100% at 100% 10%, rgba(239, 138, 94, 0.1), rgba(255, 255, 255, 0))",
      }}
      {...props}
    />
  )
}

export { Navbar }
