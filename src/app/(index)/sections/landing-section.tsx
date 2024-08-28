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

const LandingSection = ({
  title,
  description,
  mobileDescription,
  builtFor,
}: LandingSectionProps) => {
  return (
    <section className="flex w-full max-w-4xl flex-col items-center px-5 pt-32 text-center sm:px-8 sm:pt-44 md:px-10 md:pt-56">
      <Title>{title}</Title>

      <div className="mt-6 text-base font-medium text-neutral-700 sm:text-lg">
        <p className="hidden sm:block">{description}</p>

        <p className="block sm:hidden">{mobileDescription}</p>
      </div>

      <p className="mt-6 text-xs uppercase text-neutral-500">Built For</p>

      <div className="relative mt-2 flex items-center gap-2">
        {builtFor.map(({ icon, name }) => (
          <Button
            key={name}
            variant={"outline"}
            size={"sm"}
            className="relative text-xs"
          >
            {icon}
            {name}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default LandingSection;
