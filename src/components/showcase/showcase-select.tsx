import React from "react"
import LinkCard from "@/components/showcase/link-card"
import { LuCheck, LuChevronsUpDown } from "react-icons/lu"

const ShowcaseComboBox = () => {
  return (
    <LinkCard
      href="https://mijn-ui.vercel.app/react/docs/components/select"
      label="Select"
    >
      <div className="relative">
        <button
          type="button"
          className={
            "border-border inline-flex items-center justify-between gap-2 rounded-md border bg-surface py-2 pl-4 pr-3 text-xs font-medium text-main-text"
          }
          aria-controls="combobox-options"
        >
          Select Fruits
          <LuChevronsUpDown className="flex-shrink-0" />
        </button>

        <ul className="border-border mt-1 flex w-full flex-col overflow-auto rounded-md border bg-surface p-1 py-1 text-xs font-normal text-surface-text shadow-sm transition duration-100 ease-in">
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
    </LinkCard>
  )
}

export default ShowcaseComboBox
