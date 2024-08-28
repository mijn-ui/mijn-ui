import React from "react";

import Button from "../mijn-ui/Button";
import LinkCard from "./link-card";

const ShowcaseAlertDialog = () => {
  return (
    <LinkCard href="https://mijnui.com/docs/?path=/docs/components-alertdialog--docs" label="Alert Dialog">
      <div className="flex flex-col w-full max-w-lg gap-2 p-6 bg-white rounded-xl ">
        <div>
          <h5 className="text-sm font-semibold">Are you sure absolutely sure?</h5>
          <p className="mt-2 text-xs">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
        </div>

        <div className="flex items-center justify-end gap-2">
          <Button variant={"outline"} className="text-xs" size={"sm"}>
            Cancel
          </Button>
          <Button className="text-xs" size={"sm"}>
            Continue
          </Button>
        </div>
      </div>
    </LinkCard>
  );
};

export default ShowcaseAlertDialog;
