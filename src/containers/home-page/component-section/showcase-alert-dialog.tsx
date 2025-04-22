import React from "react"

const ShowcaseAlertDialog = () => {
  return (
    <div className="p-10">
      <div className="flex w-full max-w-lg flex-col gap-2 rounded-xl bg-popover p-4 shadow-md sm:p-6">
        <div>
          <h5 className="text-sm font-semibold">
            Are you sure absolutely sure?
          </h5>
          <p className="mt-2 text-xs">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            tabIndex={-1}
            className="rounded-md px-3 py-2 text-xxs sm:text-xs hover:bg-accent hover:text-accent-foreground"
          >
            Cancel
          </button>
          <button
            tabIndex={-1}
            className="rounded-md bg-primary px-3 py-2 text-xxs text-primary-foreground sm:text-xs"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseAlertDialog
