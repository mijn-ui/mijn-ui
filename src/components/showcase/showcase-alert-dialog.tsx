import React from "react";

import LinkCard from "./link-card";

const ShowcaseAlertDialog = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-alertdialog--docs"
      label="Alert Dialog"
      className="p-11"
    >
      <div className="flex w-full max-w-lg flex-col gap-2 rounded-xl bg-white p-4 sm:p-6">
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
          <button className="text-xxs rounded-md border border-border px-3 py-2 sm:text-xs">
            Cancel
          </button>
          <button className="text-xxs rounded-md bg-primary px-3 py-2 text-primary-foreground sm:text-xs">
            Continue
          </button>
        </div>
      </div>
    </LinkCard>
  );
};

export default ShowcaseAlertDialog;
