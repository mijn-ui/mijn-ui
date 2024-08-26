import LinkCard from "@/components/showcase/link-card";
import React from "react";
import { LuChevronsUpDown } from "react-icons/lu";

const ShowcaseComboBox = () => {
  return (
    <LinkCard href="https://mijnui.com/docs/?path=/docs/components-alertdialog--docs" label="ComboBox">
      <div className="relative">
        <button
          type="button"
          className={"inline-flex items-center justify-between gap-2 rounded-md border border-border bg-card text-xs py-2 pl-4 pr-3 font-medium text-foreground"}
          aria-controls="combobox-options">
          Select Fruits
          <LuChevronsUpDown className="flex-shrink-0" />
        </button>

        <ul className="mt-1 flex w-full flex-col overflow-auto rounded-md border border-border text-xs font-normal text-card-foreground shadow-sm py-1 transition duration-100 ease-in bg-card">
          <li className="inline-flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-default px-3 py-1.5 hover:bg-accent">Apple</li>

          <li className="inline-flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-default px-3 py-1.5 hover:bg-accent">Berry</li>

          <li className="inline-flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-default px-3 py-1.5 hover:bg-accent">Orange</li>
        </ul>
      </div>
    </LinkCard>
  );
};

export default ShowcaseComboBox;
