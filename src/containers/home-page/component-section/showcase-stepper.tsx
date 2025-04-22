import React from "react"

const ShowcaseStepper = () => {
  return (
    <>
      <div className="flex w-full max-w-60 flex-col">
        <div className="flex w-full max-w-xl items-center justify-center gap-2">
          {/* /* ------------------------------ Current Step ------------------------------ * / */}
          <button
            tabIndex={-1}
            className="flex size-6 flex-shrink-0 items-center justify-center rounded-full border border-foreground bg-foreground text-xs text-background"
          >
            1
          </button>

          <div className="h-px w-full bg-foreground" />

          <button
            tabIndex={-1}
            className="flex size-6 flex-shrink-0 items-center justify-center rounded-full border border-foreground text-xs"
          >
            2
          </button>

          <div className="h-px w-full bg-foreground" />

          <button
            tabIndex={-1}
            className="flex size-6 flex-shrink-0 items-center justify-center rounded-full border text-xs text-muted-foreground"
          >
            3
          </button>
        </div>
      </div>

      <div className="my-2 flex w-full max-w-60 flex-col items-center justify-center rounded-md bg-card shadow-md p-2">
        <p className="text-center text-xxs">Step-2</p>
        <input
          tabIndex={-1}
          type="text"
          className="w-full rounded-md border bg-transparent px-2 py-1 text-xxs"
          placeholder="Name"
        />

        <input
          tabIndex={-1}
          type="email"
          className="mt-1.5 w-full rounded-md border bg-transparent px-2 py-1 text-xxs"
          placeholder="Email"
        />

        <input
          tabIndex={-1}
          type="password"
          className="mt-1.5 w-full rounded-md border bg-transparent px-2 py-1 text-xxs"
          placeholder="Password"
        />
        <div className="mt-2 flex w-full justify-end gap-1">
          <button
            tabIndex={-1}
            className="border-border inline-flex items-center justify-center rounded-md border px-2.5 py-1 text-xxs text-foreground hover:bg-secondary/90 disabled:bg-muted disabled:text-muted-foreground"
          >
            Previous
          </button>
          <button
            tabIndex={-1}
            className="inline-flex items-center justify-center rounded-md bg-primary px-2.5 py-1 text-xxs text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground"
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default ShowcaseStepper
