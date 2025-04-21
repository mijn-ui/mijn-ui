import React from "react"
import { LuCheck, LuChevronsUpDown } from "react-icons/lu"

const ShowcaseSelect = () => {
  return (
    <div className="relative">
      <button
        tabIndex={-1}
        type="button"
        className={
          "border-border inline-flex items-center justify-between gap-2 rounded-md border bg-card py-2 pl-4 pr-3 text-xs font-medium text-foreground"
        }
        aria-controls="combobox-options"
      >
        Select Fruits
        <LuChevronsUpDown className="flex-shrink-0" />
      </button>

      <ul className="border-border mt-1 flex w-full flex-col overflow-auto rounded-md border bg-card p-1 py-1 text-xs font-normal text-card-foreground shadow-sm transition duration-100 ease-in">
        <li className="inline-flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-default bg-primary/20 px-3 py-1.5 text-primary">
          Apple <LuCheck />
        </li>

        <li className="inline-flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-default px-3 py-1.5 hover:bg-accent">
          Berry
        </li>

        <li className="inline-flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-default px-3 py-1.5 hover:bg-accent">
          Orange
        </li>
      </ul>
    </div>
  )
}

export default ShowcaseSelect
