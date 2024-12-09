import React from "react";

import LinkCard from "./link-card";

const ShowcaseAlertDialog = () => {
  return (
    <LinkCard
      href="https://mijn-ui.vercel.app/docs/components/alert-dialog"
      label="Alert Dialog"
      cardContentClass="p-11"
      containerClass="hidden xl:block"
    >
      <div className="flex w-full max-w-lg flex-col gap-2 rounded-xl bg-surface p-4 shadow-md sm:p-6">
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
          <button className="border-border rounded-md border px-3 py-2 text-xxs sm:text-xs">
            Cancel
          </button>
          <button className="rounded-md bg-primary px-3 py-2 text-xxs text-primary-text sm:text-xs">
            Continue
          </button>
        </div>
      </div>
    </LinkCard>
  );
};

export default ShowcaseAlertDialog;
