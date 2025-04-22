import React from "react"

const ShowcaseTabs = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-1 whitespace-nowrap">
        <button
          tabIndex={-1}
          className={
            "rounded-md bg-default px-3 py-2 text-xs text-foreground hover:bg-accent hover:text-accent-foreground"
          }
        >
          Tab One
        </button>
        <button
          tabIndex={-1}
          className={
            "rounded-md bg-transparent px-3 py-2 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          }
        >
          Tab Two
        </button>
        <button
          tabIndex={-1}
          className={
            "rounded-md bg-transparent px-3 py-2 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          }
        >
          Tab Three
        </button>
      </div>

      <div className="h-32 w-full">
        <div className="flex h-full w-full items-center justify-center space-y-2 rounded-lg bg-card p-4 text-xs shadow-md sm:text-sm">
          Tab One Content
        </div>
      </div>
    </div>
  )
}

export default ShowcaseTabs
