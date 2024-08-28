import React from "react";

import { FaHtml5, FaLaravel, FaReact } from "react-icons/fa";

import BackgroundGradient from "@/components/decorators/background-gradient";
import BorderGradient from "@/components/decorators/border-gradient";
import GridGradient from "@/components/decorators/grid-gradient";
import Footer from "@/components/footer";

import CONTRIBUTORS from "../contributors/data.json";
import ContributorSection from "./sections/contributor-section";
import LandingSection from "./sections/landing-section";
import ShowcaseSection from "./sections/showcase-section";

const Home = () => {
  return (
    <div>
      <BackgroundGradient />
      <GridGradient />

      <main className="w-full flex-col flex items-center justify-center">
        <LandingSection
          title="Reusable components that fit right into your projects."
          description="A new and evolving library of reusable components—built with simplicity at its core and aiming to become flexible, high-performance solution for projects of all sizes."
          mobileDescription="A new and evolving library of reusable components—built with simplicity at its core and aiming to become flexible."
          builtFor={[
            {
              icon: <FaHtml5 size={18} className="text-[#e34c26]" />,
              name: "HTML",
            },
            {
              icon: <FaReact size={18} className="text-[#0058cc]" />,
              name: "React",
            },
            {
              icon: <FaLaravel className="text-[#F05340]" size={18} />,
              name: "Laravel",
            },
          ]}
        />

        <div className="p-4 sm:p-8 mt-[clamp(120px,15vw,200px)] w-full flex items-center justify-center">
          <ShowcaseSection />
        </div>

        <div className="relative w-full max-w-screen-xl flex items-center justify-center flex-col mt-[clamp(80px,12vw,80px)]">
          <BorderGradient className="max-w-md" />
          <div className="w-full my-14">
            <ContributorSection contributors={CONTRIBUTORS} />
          </div>
          <BorderGradient className="max-w-md" />
        </div>
      </main>

      <Footer
        className="mt-20"
        text="All Right Reserved By PicoInnovation."
        companyInfo={[
          {
            name: "Pico Innovation",
            logoURL: "/assets/picoinno.png",
          },
          {
            name: "Pico SBS",
            logoURL: "/assets/picosbs.png",
          },
        ]}
      />
    </div>
  );
};

export default Home;
