import React from "react";

import Button from "@/components/mijn-ui/Button";
import Title from "@/components/typography/title";

type LandingSectionProps = {
  title: string;
  description: string;
  mobileDescription: string;
  builtFor: Array<{
    icon: React.ReactNode;
    name: string;
  }>;
};

const LandingSection = ({ title, description, mobileDescription, builtFor }: LandingSectionProps) => {
  return (
    <section className="w-full max-w-4xl flex items-center flex-col pt-32 sm:pt-44 md:pt-56 text-center md:px-10 sm:px-8 px-5">
      <Title>{title}</Title>

      <div className="mt-6 text-base sm:text-lg font-medium text-neutral-700">
        <p className="hidden sm:block">{description}</p>

        <p className="block sm:hidden">{mobileDescription}</p>
      </div>

      <p className="text-neutral-500 uppercase text-xs mt-6">Built For</p>

      <div className="flex relative items-center gap-2 mt-2">
        {builtFor.map(({ icon, name }) => (
          <Button key={name} variant={"outline"} size={"sm"} className="relative text-xs">
            {icon}
            {name}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default LandingSection;
