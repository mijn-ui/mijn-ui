"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Badge } from "@mijn-ui/react-badge"
import Logo from "../icons/logo"
import ThemeToggler from "../theme-toggler"
import { cn } from "@/utils"

const Navbar = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY
      setActive(scrollHeight > 5)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-14 w-full origin-left items-center justify-center transition-all duration-300 ease-in-out",
        { "border-b bg-main/10 backdrop-blur": active },
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
          <Badge className="bg-primary/20 text-primary hover:bg-primary/20">
            v0.0.1
          </Badge>
        </div>

        <ThemeToggler
          variant={"text"}
          color="accent"
          radius={"full"}
          className="text-lg hover:bg-primary/20 hover:text-primary"
        />
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
