import Button from "@/components/mijn-ui/Button";
import React from "react";
import { FaHtml5, FaLaravel, FaReact } from "react-icons/fa6";

const LandingSection = () => {
  return (
    <section className="w-full max-w-4xl flex items-center flex-col pt-32 sm:pt-44 text-center md:px-8 px-5">
      <h1 className="bg-gradient-to-br from-black to-zinc-500 bg-clip-text text-3xl/[1.2] xs:text-4xl/[1.2] font-bold sm:font-extrabold tracking-tight text-transparent md:text-6xl/[1.2]">
        Reusable components that fit right into your projects.
      </h1>

      <div className="mt-6 text-base sm:text-lg font-medium text-neutral-700">
        <p className="hidden sm:block">
          A new and evolving library of reusable components—built with simplicity at its core and aiming to become flexible, high-performance solution for projects of all sizes.
        </p>

        <p className="block sm:hidden">A new and evolving library of reusable components—built with simplicity at its core and aiming to become flexible.</p>
      </div>

      <p className="text-neutral-500 uppercase text-xs mt-6">Built For</p>

      <div className="flex relative items-center gap-2 mt-2">
        <Button variant={"outline"} size={"sm"} className="relative text-xs">
          <FaHtml5 size={18} className="text-[#e34c26]" />
          HTML
        </Button>
        <Button variant={"outline"} size={"sm"} className="text-xs relative">
          <FaReact size={18} className="text-[#0058cc]" />
          React
        </Button>
        <Button variant={"outline"} size={"sm"} className="text-xs relative">
          <FaLaravel className="text-[#F05340]" size={18} />
          Laravel
        </Button>
      </div>
    </section>
  );
};

export default LandingSection;
