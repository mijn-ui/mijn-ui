import React from "react"
import TopBackgroundGradient from "@/components/decorators/background-gradient"
import BorderGradient from "@/components/decorators/border-gradient"
import TopGridGradient from "@/components/decorators/grid-gradient"
import Footer from "@/components/layout/footer"
import ContributorSection from "./contributor-section"
import LandingSection from "./landing-section"
import TemplateSection from "./template-section"
import ComponentSection from "@/containers/home-page/component-section"

const Homepage = () => {
  return (
    <>
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
          id="templates-and-blocks"
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

      <div>
        <Footer />
      </div>
    </>
  )
}

export default Homepage
