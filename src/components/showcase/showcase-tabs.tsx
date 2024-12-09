import React from "react"
import LinkCard from "./link-card"

const ShowcaseTabs = () => {
  return (
    <LinkCard href="/react/docs/components/tabs" label="Tabs">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-1 whitespace-nowrap">
          <button
            className={
              "rounded-md bg-surface px-3 py-2 text-xs text-main-text hover:bg-surface hover:text-surface-text"
            }
          >
            Tab One
          </button>
          <button
            className={
              "rounded-md bg-transparent px-3 py-2 text-xs text-muted-text hover:bg-surface hover:text-surface-text"
            }
          >
            Tab Two
          </button>
          <button
            className={
              "rounded-md bg-transparent px-3 py-2 text-xs text-muted-text hover:bg-surface hover:text-surface-text"
            }
          >
            Tab Three
          </button>
        </div>

        <div className="h-32 w-full">
          <div className="flex h-full w-full items-center justify-center space-y-2 rounded-lg bg-surface p-4 text-xs drop-shadow-sm sm:text-sm">
            Tab One Content
          </div>
        </div>
      </div>
    </LinkCard>
  )
}

export default ShowcaseTabs
