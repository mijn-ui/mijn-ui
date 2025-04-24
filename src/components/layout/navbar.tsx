"use client"

import React from "react"
import Link from "next/link"
import { Badge } from "@mijn-ui/react-badge"
import { Button } from "@mijn-ui/react-button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@mijn-ui/react-dropdown-menu"
import Logo from "../icons/logo"
import ThemeToggler from "../theme-toggler"
import { useScrollActive } from "@/hooks/use-scroll-active"
import { cn } from "@/utils"
import { LuMenu } from "react-icons/lu"

const Navbar = () => {
  const active = useScrollActive()

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-14 w-full border-b border-b-transparent origin-left items-center justify-center",
        { "border-b-border bg-background/10 backdrop-blur": active },
        "max-sm:!border-b-border",
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
            v0.0.1
          </Badge>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={"#templates-and-blocks"}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Templates & Blocks
          </a>
          <a
            href={"#contributors"}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Contributors
          </a>
          <ThemeToggler variant="ghost" radius="full" size="sm" />
        </div>

        <div className="flex items-center md:hidden">
          <ThemeToggler variant="ghost" radius="full" size="xs" iconOnly />
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" iconOnly size="sm">
                <LuMenu size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="flex flex-col items-start p-1 gap-1"
            >
              <DropdownMenuItem asChild>
                <a href="#templates-and-blocks" className="w-full block">
                  Templates & Blocks
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#contributors" className="w-full block">
                  Contributors
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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

export default Navbar
