import Button from "@/components/mijn-ui/Button";
import Image from "next/image";
import React from "react";

const ContributorSection = () => {
  return (
    <section className="w-full flex items-center justify-center flex-col p-2 sm:p-5">
      <h3 className="bg-gradient-to-br from-black to-zinc-500 bg-clip-text text-2xl/[1.2] sm:text-4xl/[1.2] font-bold sm:font-extrabold tracking-tight text-transparent text-center">Contributors</h3>

      <div className="mt-8 flex flex-wrap gap-y-8 gap-x-5 sm:gap-5 items-center justify-center w-full">
        <div className="flex w-40 items-center justify-center flex-col text-center">
          <a href="https://github.com/HTLA380/" target="_blank" className="rounded-full w-8 h-8 overflow-hidden">
            <Image src={"/assets/contributors/htet_aung_lin.png"} width={50} height={50} alt="Htet Aung Lin" className="w-full h-full object-cover" />
          </a>

          <p className="text-sm">Htet Aung Lin</p>
          <p className="text-xs text-muted-foreground">&#8226; Mijn React Components</p>
        </div>

        <div className="h-12 hidden sm:block w-px bg-black"></div>

        <div className="flex w-40 items-center justify-center flex-col text-center max-w-96">
          <a href="#" target="_blank" className="rounded-full w-8 h-8 overflow-hidden">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">K</div>
          </a>

          <p className="text-sm">Kyaw Saw Aung</p>
          <p className="text-xs text-muted-foreground">&#8226; DevOps</p>
        </div>

        <div className="h-12 hidden sm:block w-px bg-black"></div>

        <div className="flex w-40 flex-col justify-center items-center">
          <a href="#" target="_blank" className="inline-block rounded-full w-8 h-8 overflow-hidden">
            <Image src={"/assets/contributors/sann_ko_ko.jpeg"} width={50} height={50} alt="Htet Aung Lin" className="w-full h-full object-cover" />
          </a>

          <p className="text-sm">Sann KoKo</p>
          <p className="text-xs text-muted-foreground">&#8226; Project Manager</p>
        </div>

        <div className="h-12 w-px hidden sm:block bg-black"></div>

        <div className="flex w-40 items-center justify-center flex-col">
          <a href="#" target="_blank" className="rounded-full w-8 h-8 overflow-hidden">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">H</div>
          </a>

          <p className="text-sm">Hein Htoo Htoo Kyaw</p>
          <p className="text-xs text-muted-foreground">&#8226; UI Designer</p>
        </div>

        <div className="h-12 hidden sm:block w-px bg-black"></div>

        <div className="flex w-40 items-center justify-center flex-col text-center max-w-96">
          <a href="https://github.com/WaiYanPhoneAant" target="_blank" className="rounded-full w-8 h-8 overflow-hidden">
            <Image src={"/assets/contributors/wai_yan_phone_aant.jpeg"} width={50} height={50} alt="Wai Yan Phone Aant" className="w-full h-full object-cover" />
          </a>

          <p className="text-sm">Wai Yan Phone Aant</p>
          <p className="text-xs text-muted-foreground">&#8226; Tailwind Components</p>
        </div>

        <div className="h-12 w-px hidden sm:block bg-black"></div>

        <div className="flex w-40 items-center justify-center flex-col text-center max-w-96">
          <a href="#" target="_blank" className="rounded-full w-8 h-8 overflow-hidden">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">P</div>
          </a>

          <p className="text-sm">Paing Soe Ko</p>
          <p className="text-xs text-muted-foreground">&#8226; Tailwind Components</p>
        </div>
      </div>
    </section>
  );
};

export default ContributorSection;
