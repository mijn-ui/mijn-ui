import React from "react";
import Navbar from "@/components/navbar";
import useMediaQuery from "@/hooks/use-media-query";
import ShowcaseSection from "./sections/showcase-section";
import LandingSection from "./sections/landing-section";
import ContributorSection from "./sections/contributor-section";

const Home = () => {
  return (
    <div>
      {/* background decoration */}
      <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(80%_60%_at_50%_-20%,hsl(18,81.9%,65.3%,0.5),rgba(255,255,255,0))]"></div>
      <GridSvg />

      <Navbar />

      <main className="w-full flex-col flex items-center justify-center">
        <LandingSection />
        <div className="p-4 sm:p-8 mt-[clamp(120px,15vw,120px)]">
          <ShowcaseSection />
        </div>

        <div className="relative w-full max-w-screen-xl flex items-center justify-center flex-col mt-[clamp(80px,12vw,80px)]">
          <div className="user-select-none center max-w-[500px] pointer-events-none h-px w-full transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(249,115,22,0.9)_50%,rgba(0,0,0,0)_100%)]"></div>
          <div className="w-full my-14">
            <ContributorSection />
          </div>
          <div className="user-select-none center max-w-[500px] pointer-events-none h-px w-full transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(249,115,22,0.9)_50%,rgba(0,0,0,0)_100%)]"></div>
        </div>
      </main>

      <footer className="mt-20 bg-black py-4 w-full">
        <div className="w-full px-5 py-2 flex items-center justify-center max-w-screen-xl">
          <h1 className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-sm font-medium tracking-tight text-transparent sm:text-base/[1.2]">All Right Reserved By PicoInnovation.</h1>
        </div>
      </footer>
    </div>
  );
};

export default Home;

const GridSvg = () => (
  <svg className="absolute inset-0 -z-10 h-full w-full stroke-black/10 [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]" aria-hidden="true">
    <defs>
      <pattern id="hero" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none"></path>
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero)"></rect>
  </svg>
);
