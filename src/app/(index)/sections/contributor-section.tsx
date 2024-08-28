import React from "react";

import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

import StyledLink from "@/components/typography/link";

type ContributorSectionProps = {
  contributors: Contributor[];
};

const ContributorSection = ({ contributors }: ContributorSectionProps) => {
  return (
    <section className="w-full flex items-center justify-center flex-col p-2 sm:p-5">
      <h3 className="bg-gradient-to-br from-black to-zinc-500 bg-clip-text text-2xl/[1.2] sm:text-4xl/[1.2] font-bold sm:font-extrabold tracking-tight text-transparent text-center">Contributors</h3>

      <div className="mt-8 flex flex-wrap lg:divide-x lg:divide-gray-400 gap-y-8 gap-x-5 lg:gap-0 items-center justify-center w-full">
        {contributors.map((contributor) => (
          <Contributor key={contributor.name} name={contributor.name} position={contributor.position} link={contributor.link} avatarURL={contributor.avatarURL} />
        ))}
      </div>

      <StyledLink className="mt-10" href={"/contributors"}>
        See More Info <LuArrowUpRight />
      </StyledLink>
    </section>
  );
};

type Contributor = {
  link: string;
  name: string;
  avatarURL: string | null;
  position: string;
};

const Contributor = ({ link, name, avatarURL, position }: Contributor) => {
  return (
    <div className="flex px-4 min-w-40 items-center justify-center flex-col text-center">
      <div className="relative flex items-center justify-center shrink-0 overflow-hidden ring-ring-white bg-muted rounded-full ring-1 w-8 h-8">
        {avatarURL ? <Image src={avatarURL} alt={name} width={40} height={40} /> : <span>{name?.substring(0, 1)}</span>}
      </div>

      <a href={link} target="_blank" className="text-sm hover:underline mt-1">
        {name}
      </a>
      <p className="text-xs text-muted-foreground">&#8226; {position}</p>
    </div>
  );
};

export default ContributorSection;
