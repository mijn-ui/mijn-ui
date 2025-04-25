import React from "react"
import { Button } from "@mijn-ui/react-button"
import { Title } from "@/components/ui/typography"

const LandingSection = () => {
  return (
    <section className="max-w-4xl w-full flex items-start sm:items-center flex-col text-left sm:text-center">
      <Title>Reusable components for clean, responsive interfaces.</Title>

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
          <a href="/templates">Browse Templates</a>
        </Button>
      </div>
    </section>
  )
}

export default LandingSection
