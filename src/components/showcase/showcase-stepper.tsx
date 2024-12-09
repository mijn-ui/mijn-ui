import React from "react";

import LinkCard from "./link-card";

const ShowcaseStepper = () => {
  return (
    <LinkCard href="#" inprogress label="Stepper">
      <div className="flex w-full max-w-60 flex-col">
        <div className="flex w-full max-w-xl items-center justify-center gap-2">
          {/* /* ------------------------------ Current Step ------------------------------ * / */}
          <button className="flex size-6 flex-shrink-0 items-center justify-center rounded-full border border-main-text bg-main-text text-xs text-main">
            1
          </button>

          <div className="h-px w-full bg-main-border" />

          <button className="flex size-6 flex-shrink-0 items-center justify-center rounded-full border border-main-text bg-surface text-xs">
            2
          </button>

          <div className="h-px w-full bg-main-border" />

          <button className="flex size-6 flex-shrink-0 items-center justify-center rounded-full border text-xs text-muted-text">
            3
          </button>
        </div>
      </div>

      <div className="my-2 flex w-full max-w-60 flex-col items-center justify-center rounded-md bg-surface p-2">
        <p className="text-center text-xxs text-main">Step-2</p>
        <input
          type="text"
          className="w-full rounded-md border bg-transparent px-2 py-1 text-xxs"
          placeholder="Name"
        />

        <input
          type="email"
          className="mt-1.5 w-full rounded-md border bg-transparent px-2 py-1 text-xxs"
          placeholder="Email"
        />

        <input
          type="password"
          className="mt-1.5 w-full rounded-md border bg-transparent px-2 py-1 text-xxs"
          placeholder="Password"
        />
        <div className="mt-2 flex w-full justify-end gap-1">
          <button className="border-border inline-flex items-center justify-center rounded-md border px-2.5 py-1 text-xxs text-main-text hover:bg-secondary/90 disabled:bg-muted disabled:text-muted-text">
            Previous
          </button>
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-2.5 py-1 text-xxs text-primary-text hover:bg-primary/90 disabled:bg-muted disabled:text-muted-text">
            Next
          </button>
        </div>
      </div>
    </LinkCard>
  );
};

export default ShowcaseStepper;
