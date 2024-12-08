import React from "react";

import Title from "@/components/typography/title";
import { Button } from "@mijn-ui/react-button";

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

      <div className="text-muted-text mt-6 text-base font-medium sm:text-lg">
        <p className="hidden sm:block">{description}</p>

        <p className="block sm:hidden">{mobileDescription}</p>
      </div>

      <p className="text-muted-text mt-6 text-xs uppercase">Built For</p>

      <div className="relative mt-2 flex items-center gap-2">
        {builtFor.map(({ icon, name }) => (
          <Button
            key={name}
            variant={"outline"}
            color="muted"
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
