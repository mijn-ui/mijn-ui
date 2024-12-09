import React from "react";

import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

import StyledLink from "@/components/typography/link";
import Link from "next/link";

type ContributorSectionProps = {
  contributors: Contributor[];
};

const ContributorSection = ({ contributors }: ContributorSectionProps) => {
  return (
    <section className="flex w-full flex-col items-center justify-center p-2 sm:p-5">
      <h3 className="bg-gradient-to-br from-main-text to-muted-text/70 bg-clip-text text-center text-2xl/[1.2] font-bold tracking-tight text-transparent sm:text-4xl/[1.2] sm:font-extrabold">
        Contributors
      </h3>

      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-8 lg:gap-0 lg:divide-x lg:divide-gray-400">
        {contributors.map((contributor) => (
          <Contributor
            key={contributor.name}
            name={contributor.name}
            position={contributor.position}
            link={contributor.link}
            avatarURL={contributor.avatarURL}
          />
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
    <div className="flex min-w-40 flex-col items-center justify-center px-4 text-center">
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted">
        {avatarURL ? (
          <Image src={avatarURL} alt={name} width={40} height={40} />
        ) : (
          <span>{name?.substring(0, 1)}</span>
        )}
      </div>

      <Link
        href={link}
        target={link !== "#" ? "_blank" : undefined}
        className="mt-1 text-sm hover:underline"
      >
        {name}
      </Link>
      <p className="text-xs text-muted-text">&#8226; {position}</p>
    </div>
  );
};

export default ContributorSection;
