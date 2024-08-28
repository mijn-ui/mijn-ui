import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

type FooterProps = {
  companyInfo: Array<Company> | Company;
  text: string;
  className?: string;
};

type Company = {
  name: string;
  logoURL: string;
};

const Footer = ({ companyInfo, className, text }: FooterProps) => {
  return (
    <footer className={cn("bg-black py-4 w-full flex items-center justify-center", className)}>
      <div className="w-full px-5 py-2 flex flex-col sm:flex-row gap-2 items-center justify-between max-w-screen-lg">
        <div className="flex items-center gap-10">
          {Array.isArray(companyInfo) ? companyInfo.map((company) => <RenderCompanyInfo key={company.name} {...company} />) : <RenderCompanyInfo {...companyInfo} />}
        </div>

        <p className="text-xs bg-gradient-to-br from-white to-zinc-300 sm:text-sm bg-clip-text font-medium tracking-tight text-transparent">{text}</p>
      </div>
    </footer>
  );
};

const RenderCompanyInfo = ({ name, logoURL }: Company) => (
  <div className="flex items-center gap-2">
    <Image className="w-6 h-6 sm:w-7 sm:h-7" src={logoURL} alt={name} width={40} height={40} />
    <p className="text-neutral-300 text-xs sm:text-sm">{name}</p>
  </div>
);

export default Footer;
