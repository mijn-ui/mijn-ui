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
    <footer
      className={cn(
        "flex w-full items-center justify-center bg-black py-4",
        className,
      )}
    >
      <div className="flex w-full max-w-screen-lg flex-col items-center justify-between gap-2 px-5 py-2 sm:flex-row">
        <div className="flex items-center gap-10">
          {Array.isArray(companyInfo) ? (
            companyInfo.map((company) => (
              <RenderCompanyInfo key={company.name} {...company} />
            ))
          ) : (
            <RenderCompanyInfo {...companyInfo} />
          )}
        </div>

        <p className="bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-xs font-medium tracking-tight text-transparent sm:text-sm">
          {text}
        </p>
      </div>
    </footer>
  );
};

const RenderCompanyInfo = ({ name, logoURL }: Company) => (
  <div className="flex items-center gap-2">
    <Image
      className="h-6 w-6 sm:h-7 sm:w-7"
      src={logoURL}
      alt={name}
      width={40}
      height={40}
    />
    <p className="text-xs text-neutral-300 sm:text-sm">{name}</p>
  </div>
);

export default Footer;
