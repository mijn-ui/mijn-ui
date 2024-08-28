import Image from "next/image";
import React from "react";
import { LuArrowLeft, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import CONTRIBUTORS from "./data.json";
import GridGradient from "@/components/decorators/grid-gradient";
import Footer from "@/components/footer";
import SubTitle from "@/components/typography/sub-title";
import StyledLink from "@/components/typography/link";

const Contributors = () => {
  return (
    <div className="min-h-screen">
      <GridGradient />
      <BackgroundGradient />

      <main className="relative flex items-center px-5 pt-24 sm:pt-32 sm:pb-24 flex-col h-full max-h-max">
        <SubTitle>Contributors</SubTitle>

        <div className="w-full mt-10 overflow-y-auto p-2.5 sm:p-5 shadow-sm bg-card/40 rounded-3xl max-w-3xl backdrop-blur-[0.5px]">
          <div className="space-y-10 sm:space-y-0">
            {CONTRIBUTORS.map((contributor) => (
              <RenderContributor key={contributor.name} {...contributor} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 w-full max-w-3xl mt-5">
          <StyledLink href={"/"}>
            <LuArrowLeft /> Home
          </StyledLink>

          <Pagination />
        </div>
      </main>

      <Footer
        className="mt-20  sm:fixed sm:inset-x-0 sm:bottom-0 sm:m-0"
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

export default Contributors;

type RenderContributorProps = (typeof CONTRIBUTORS)[number];

const RenderContributor = ({ name, avatarURL, link, contributedTo, position }: RenderContributorProps) => (
  <div className="flex relative flex-col sm:flex-row text-center sm:text-left items-center gap-4 py-3 px-4">
    <div className="flex items-center justify-center shrink-0 overflow-hidden ring-ring-white bg-muted rounded-full ring-1 w-10 h-10">
      {avatarURL ? <Image src={avatarURL} alt={name} width={120} height={120} className="w-full h-full object-cover" /> : <span>{name.substring(0, 1)}</span>}
    </div>

    <div className="w-full">
      <a href={link} target="_blank" className="text-base hover:underline">
        {name}
      </a>
      <p className="shrink-0 text-xs text-muted-foreground">
        <span className="font-medium">Contributed to:</span> {contributedTo}
      </p>
    </div>
    <p className="text-xs shrink-0 text-muted-foreground z-10 top-0 right-0 p-2 absolute text-left">&#8226; {position}</p>
  </div>
);

const Pagination = () => (
  <div className="flex items-center gap-2">
    <button className="w-8 h-8 text-disabled-foreground flex items-center justify-center">
      <LuChevronLeft size={20} />
    </button>

    <p className="text-disabled-foreground text-xs cursor-pointer">0</p>

    <button className="w-8 h-8 text-disabled-foreground flex items-center justify-center">
      <LuChevronRight size={20} />
    </button>
  </div>
);

const BackgroundGradient = () => <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(100%_100%_at_50%_0%,hsl(18,81.9%,65.3%,0.2),rgba(255,255,255,0))]"></div>;
