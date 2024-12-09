"use client";

import React from "react";

import Image from "next/image";
import { LuArrowLeft, LuChevronLeft, LuChevronRight } from "react-icons/lu";

import GridGradient from "@/components/decorators/grid-gradient";
import Footer from "@/components/layout/footer";
import StyledLink from "@/components/typography/link";
import SubTitle from "@/components/typography/sub-title";

import CONTRIBUTORS from "./data.json";
import BackgroundGradient from "@/components/decorators/background-gradient";

const Contributors = () => {
  return (
    <div className="min-h-screen">
      <GridGradient className="stroke-main-text/10" />
      <BackgroundGradient />

      <main className="relative flex h-full max-h-max flex-col items-center px-5 pt-24 sm:pb-24 sm:pt-32">
        <SubTitle>Contributors</SubTitle>

        <div className="mt-10 w-full max-w-3xl overflow-y-auto rounded-3xl bg-surface/40 p-2.5 shadow-sm backdrop-blur-lg sm:p-5">
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
    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted ring-1 ring-ring">
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
      <p className="shrink-0 text-xs text-muted-text">
        <span className="font-medium">Contributed to:</span> {contributedTo}
      </p>
    </div>
    <p className="absolute right-0 top-0 z-10 shrink-0 p-2 text-left text-xs text-muted-text">
      &#8226; {position}
    </p>
  </div>
);

const Pagination = () => (
  <div className="flex items-center gap-2">
    <button className="flex h-8 w-8 items-center justify-center text-muted-text">
      <LuChevronLeft size={20} />
    </button>

    <p className="cursor-pointer text-xs text-muted-text">0</p>

    <button className="flex h-8 w-8 items-center justify-center text-muted-text">
      <LuChevronRight size={20} />
    </button>
  </div>
);
