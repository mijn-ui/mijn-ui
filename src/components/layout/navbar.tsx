import Link from "next/link";
import React from "react";
import ThemeToggler from "../theme-toggler";
import Logo from "../icons/logo";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex w-full items-center justify-center">
      <nav className="flex w-full max-w-screen-xl items-center justify-between px-5 py-2.5 sm:p-5">
        <Link href={"/"} className="flex items-center gap-2">
          <span className="w-6 sm:w-8">
            <Logo className="size-7" />
          </span>

          <p className="text-base font-bold tracking-wide sm:text-xl">MijnUI</p>
        </Link>

        <ThemeToggler
          variant={"text"}
          color="accent"
          radius={"full"}
          className="text-lg"
        />
      </nav>
    </header>
  );
};

export default Navbar;
