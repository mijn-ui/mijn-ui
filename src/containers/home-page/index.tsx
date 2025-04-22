import React from "react"
import BackgroundGradient from "@/components/decorators/background-gradient"
import GridGradient from "@/components/decorators/grid-gradient"
import Footer from "@/components/layout/footer"
import ContributorSection from "./contributor-section"
import LandingSection from "./landing-section"
import TemplateSection from "./template-section"
import ComponentSection from "@/containers/home-page/component-section"

const Homepage = () => {
  return (
    <div>
      <BackgroundGradient />
      <GridGradient className="stroke-foreground/10" />

      <main>
        <LandingSection />

        <div className="mt-[clamp(120px,15vw,240px)] flex w-full items-center justify-center">
          <ComponentSection />
        </div>

        <div className="w-full flex flex-col items-center mt-[clamp(80px,12vw,80px)]">
          <div className="my-8 mb-14 w-full max-w-screen-xl">
            <TemplateSection />
          </div>
          <div className="relative flex w-full max-w-screen-xl mt-[clamp(80px,12vw,80px)] flex-col items-center justify-center">
            <div className="my-8 mb-14 w-full">
              <ContributorSection />
            </div>
          </div>
        </div>
      </main>

      <Footer className="mt-20" />
    </div>
  )
}

export default Homepage
