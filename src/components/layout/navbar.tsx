import Link from "next/link";
import React from "react";
import Button from "../mijn-ui/Button";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex w-full items-center justify-center">
      <nav className="flex w-full max-w-screen-xl items-center justify-between px-5 py-2.5 sm:p-5">
        <Link href={"/"} className="flex items-center gap-2">
          <span className="w-6 sm:w-8">
            <Image
              src={"/assets/logo.svg"}
              width={120}
              height={45}
              alt="logo"
            />
          </span>

          <p className="text-base font-bold tracking-wide sm:text-xl">MijnUI</p>
        </Link>

        <Button
          renderAs="a"
          href="https://mijnui.com/docs"
          target="_blank"
          className="bg-black text-xs hover:bg-black/80 sm:text-sm"
        >
          Documentation
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
