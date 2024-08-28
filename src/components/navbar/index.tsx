import Link from "next/link";
import React from "react";
import Button from "../mijn-ui/Button";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="z-50 fixed inset-x-0 top-0 w-full flex items-center justify-center">
      <nav className="w-full max-w-screen-xl py-2.5 px-5 sm:p-5 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <span className="w-6 sm:w-8">
            <Image src={"/assets/logo.svg"} width={120} height={45} alt="logo" />
          </span>

          <p className="font-bold text-base sm:text-xl tracking-wide">MijnUI</p>
        </Link>

        <Button renderAs="a" href="https://mijnui.com/docs" target="_blank" className="bg-black hover:bg-black/80 text-xs sm:text-sm">
          Documentation
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
