import React from "react"
import BackgroundGradient from "@/components/decorators/background-gradient"
import BorderGradient from "@/components/decorators/border-gradient"
import GridGradient from "@/components/decorators/grid-gradient"
import Footer from "@/components/layout/footer"
import ContributorSection from "./contributor-section"
import Contributors from "./data.json"
import LandingSection from "./landing-section"
import ShowcaseSection from "@/containers/home-page/showcase-section"

const Homepage = () => {
  return (
    <div>
      <BackgroundGradient />
      <GridGradient className="stroke-foreground/10" />

      <main>
        <LandingSection />

        <div className="mt-[clamp(120px,15vw,240px)] flex w-full items-center justify-center">
          <ShowcaseSection />
        </div>

        <div className="w-full flex justify-center">
          <div className="relative mt-[clamp(80px,12vw,80px)] flex w-full max-w-screen-xl flex-col items-center justify-center">
            <BorderGradient className="max-w-md" />
            <div className="my-8 mb-14 w-full">
              <ContributorSection contributors={Contributors} />
            </div>
            <BorderGradient className="max-w-md" />
          </div>
        </div>
      </main>

      <Footer className="mt-20" />
    </div>
  )
}

export default Homepage
