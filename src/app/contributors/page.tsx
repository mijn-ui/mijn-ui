import React from "react";

import Image from "next/image";
import { LuArrowLeft, LuChevronLeft, LuChevronRight } from "react-icons/lu";

import GridGradient from "@/components/decorators/grid-gradient";
import Footer from "@/components/layout/footer";
import StyledLink from "@/components/typography/link";
import SubTitle from "@/components/typography/sub-title";

import CONTRIBUTORS from "./data.json";

const Contributors = () => {
  return (
    <div className="min-h-screen">
      <GridGradient />
      <BackgroundGradient />

      <main className="relative flex h-full max-h-max flex-col items-center px-5 pt-24 sm:pb-24 sm:pt-32">
        <SubTitle>Contributors</SubTitle>

        <div className="mt-10 w-full max-w-3xl overflow-y-auto rounded-3xl bg-card/40 p-2.5 shadow-sm backdrop-blur-[0.5px] sm:p-5">
          <div className="space-y-10 sm:space-y-0">
            {CONTRIBUTORS.map((contributor) => (
              <RenderContributor key={contributor.name} {...contributor} />
            ))}
          </div>
        </div>

        <div className="mt-5 flex w-full max-w-3xl items-center justify-between gap-3">
          <StyledLink href={"/"}>
            <LuArrowLeft /> Home
          </StyledLink>

          <Pagination />
        </div>
      </main>

      <Footer
        className="mt-20 sm:fixed sm:inset-x-0 sm:bottom-0 sm:m-0"
        text="All Right Reserved By MijnUI."
      />
    </div>
  );
};

export default Contributors;

type RenderContributorProps = (typeof CONTRIBUTORS)[number];

const RenderContributor = ({
  name,
  avatarURL,
  link,
  contributedTo,
  position,
}: RenderContributorProps) => (
  <div className="relative flex flex-col items-center gap-4 px-4 py-3 text-center sm:flex-row sm:text-left">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted ring-1 ring-ring-white">
      {avatarURL ? (
        <Image
          src={avatarURL}
          alt={name}
          width={120}
          height={120}
          className="h-full w-full object-cover"
        />
      ) : (
        <span>{name.substring(0, 1)}</span>
      )}
    </div>

    <div className="w-full">
      <a href={link} target="_blank" className="text-base hover:underline">
        {name}
      </a>
      <p className="shrink-0 text-xs text-muted-foreground">
        <span className="font-medium">Contributed to:</span> {contributedTo}
      </p>
    </div>
    <p className="absolute right-0 top-0 z-10 shrink-0 p-2 text-left text-xs text-muted-foreground">
      &#8226; {position}
    </p>
  </div>
);

const Pagination = () => (
  <div className="flex items-center gap-2">
    <button className="flex h-8 w-8 items-center justify-center text-disabled-foreground">
      <LuChevronLeft size={20} />
    </button>

    <p className="cursor-pointer text-xs text-disabled-foreground">0</p>

    <button className="flex h-8 w-8 items-center justify-center text-disabled-foreground">
      <LuChevronRight size={20} />
    </button>
  </div>
);

const BackgroundGradient = () => (
  <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(100%_100%_at_50%_0%,hsl(18,81.9%,65.3%,0.2),rgba(255,255,255,0))]"></div>
);
