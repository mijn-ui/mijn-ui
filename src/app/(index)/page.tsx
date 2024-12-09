import React from "react";

import { FaHtml5, FaLaravel, FaReact } from "react-icons/fa";

import BackgroundGradient from "@/components/decorators/background-gradient";
import BorderGradient from "@/components/decorators/border-gradient";
import GridGradient from "@/components/decorators/grid-gradient";
import Footer from "@/components/layout/footer";

import CONTRIBUTORS from "../contributors/data.json";
import ContributorSection from "./sections/contributor-section";
import LandingSection from "./sections/landing-section";
import ShowcaseSection from "./sections/showcase-section";
import { cn } from "@/utils";

const Home = () => {
  return (
    <div>
      <BackgroundGradient />
      <GridGradient className="stroke-main-text/10" />

      <main className="flex w-full flex-col items-center justify-center">
        <LandingSection
          title="Reusable components for clean, responsive interfaces."
          description="A new and evolving library of reusable components—built with simplicity at its core and aiming to become flexible, high-performance solution for projects of all sizes."
          mobileDescription="A new and evolving library of reusable components—built with simplicity at its core and aiming to become flexible."
          builtFor={[
            {
              icon: <FaHtml5 size={18} className="text-html-logo" />,
              name: "HTML",
              href: "https://mijn-ui-tailwind.vercel.app",
            },
            {
              icon: <FaReact size={18} className="text-react-logo" />,
              name: "React",
              href: "https://mijn-ui.vercel.app",
            },
            {
              icon: <FaLaravel size={18} className="text-laravel-logo" />,
              name: "Laravel",
              href: "#",
            },
          ]}
        />

        <div className="mt-[clamp(120px,15vw,200px)] flex w-full items-center justify-center p-4 sm:p-8">
          <ShowcaseSection />
        </div>

        <div className="relative mt-[clamp(80px,12vw,80px)] flex w-full max-w-screen-xl flex-col items-center justify-center">
          <BorderGradient className="max-w-md" />
          <div className="my-14 w-full">
            <ContributorSection contributors={CONTRIBUTORS} />
          </div>
          <BorderGradient className="max-w-md" />
        </div>
      </main>

      <Footer className="mt-20" text="All Right Reserved By MijnUI." />
    </div>
  );
};

const LeftRadialGradient = ({
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
          "radial-gradient(50% 80% at 50% -20%, rgba(239, 138, 94, 0.1), rgba(255, 255, 255, 0))",
      }}
      {...props}
    />
  );
};

export default Home;
