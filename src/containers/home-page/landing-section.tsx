import React from "react"
import { Button } from "@mijn-ui/react-button"

const LandingSection = () => {
  return (
    <section className="flex w-full justify-center px-5 pt-32 sm:px-8 sm:pt-44 md:px-10 md:pt-60 text-left sm:text-center">
      <div className="max-w-4xl w-full flex items-start sm:items-center flex-col">
        <h1 className="bg-gradient-to-br from-foreground to-muted-foreground/70 bg-clip-text text-3xl/[1.2] font-bold tracking-tight text-transparent xs:text-4xl/[1.2] sm:font-extrabold md:text-5xl/[1.2]">
          Reusable components for clean, <br />
          responsive interfaces.
        </h1>

        <div className="mt-6 text-medium font-medium text-muted-foreground sm:text-medium">
          <p className="hidden sm:block">
            A new and evolving library of reusable components—built with
            simplicity at its core and aiming <br /> to become flexible,
            high-performance solution for projects of all sizes.
          </p>

          <p className="block sm:hidden">
            A new and evolving library of reusable components—built with
            simplicity at its core and aiming to become flexible.
          </p>
        </div>

        <div className="relative flex items-center gap-2 mt-6">
          <Button color="primary" asChild>
            <a href="#get-started">Get Started</a>
          </Button>

          <Button variant={"outlined"} asChild>
            <a href="/tailwind">Blocks & Templates</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default LandingSection
