import React from "react"
import { Button } from "@mijn-ui/react-button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@mijn-ui/react-dropdown-menu"
import TopBackgroundGradient from "@/components/decorators/background-gradient"
import BorderGradient from "@/components/decorators/border-gradient"
import TopGridGradient from "@/components/decorators/grid-gradient"
import Footer from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import ThemeToggler from "@/components/theme-toggler"
import ContributorSection from "./contributor-section"
import LandingSection from "./landing-section"
import TemplateSection from "./template-section"
import ComponentSection from "@/containers/home-page/component-section"
import { LuMenu } from "react-icons/lu"

const Homepage = () => {
  return (
    <>
      <Navbar>
        <div className="hidden md:flex items-center gap-4">
          <a
            href={"#templates"}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Templates
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
                <a href="#templates" className="w-full block">
                  Templates
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
      </Navbar>

      <TopBackgroundGradient />
      <TopGridGradient className="stroke-foreground/10" />

      <main>
        <div
          id="hero"
          className="px-5 flex w-full justify-center pt-32 sm:px-8 sm:pt-44 md:px-10 md:pt-60"
        >
          <LandingSection />
        </div>

        <div id="get-started" className="mt-[clamp(120px,15vw,240px)]">
          <ComponentSection />
        </div>

        <div
          id="templates"
          className="w-full flex items-center justify-center px-8"
        >
          <TemplateSection />
        </div>

        <div
          id="contributors"
          className="w-full relative py-20 flex items-center justify-center flex-col gap-12"
        >
          <BorderGradient className="max-w-2xl" />
          <ContributorSection />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Homepage
