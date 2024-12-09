import React from "react"
import LinkCard from "./link-card"
import { LuChevronLeft, LuChevronRight, LuMoreHorizontal } from "react-icons/lu"

const ShowcasePagination = () => {
  return (
    <LinkCard
      href="https://mijn-ui.vercel.app/docs/components/pagination
      "
      label="Pagination"
    >
      <nav className="flex max-w-60 items-center justify-center gap-2">
        <button className="inline-flex h-9 items-center justify-center gap-1 rounded-md px-2 py-1.5 font-medium hover:bg-accent hover:text-accent-text disabled:bg-muted disabled:text-muted-text sm:h-10">
          <LuChevronLeft />
          <span className="hidden text-xs sm:inline">Previous</span>
        </button>

        <span
          aria-hidden="true"
          className="flex h-7 w-7 items-center justify-center text-sm"
        >
          <LuMoreHorizontal />
        </span>

        <ul className="flex flex-row items-center gap-1">
          <li>
            <button className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md text-xs hover:bg-accent hover:text-accent-text disabled:bg-muted disabled:text-muted-text">
              6
            </button>
          </li>
          <li>
            <button className="border-border inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md border bg-surface text-xs text-main-text hover:bg-accent disabled:bg-muted disabled:text-muted-text">
              7
            </button>
          </li>
          <li>
            <button className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-md text-xs hover:bg-accent hover:text-accent-text disabled:bg-muted disabled:text-muted-text">
              8
            </button>
          </li>
        </ul>

        <span
          aria-hidden="true"
          className="flex h-7 w-7 items-center justify-center text-sm [&>svg]:h-3.5 [&>svg]:w-3.5 sm:[&>svg]:h-4 sm:[&>svg]:w-4"
        >
          <LuMoreHorizontal />
        </span>

        <button className="inline-flex h-9 items-center justify-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-text disabled:bg-muted disabled:text-muted-text sm:h-10">
          <span className="hidden text-xs sm:inline">Next</span>
          <LuChevronRight />
        </button>
      </nav>
    </LinkCard>
  )
}

export default ShowcasePagination
