import React from "react";

import { LuCheck } from "react-icons/lu";

import LinkCard from "./link-card";

const ShowcaseCheckbox = () => {
  return (
    <LinkCard href="https://mijnui.com/docs/?path=/docs/components-checkbox--docs" label="Checkbox">
      <div className="inline-flex items-center gap-2">
        <label htmlFor={"showcase-checkbox"} className="relative flex items-center">
          <input
            id={"showcase-checkbox"}
            type="checkbox"
            defaultChecked
            className="before:content[''] w-5 h-5 peer relative cursor-pointer disabled:cursor-default appearance-none rounded-[4px] disabled:checked:bg-disabled disabled:border-disabled border border-black transition-all indeterminate:border-primary indeterminate:bg-primary [&+span>svg]:text-primary-foreground checked:border-primary checked:bg-primary"
          />
          <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100 peer-disabled:[&>svg]:text-disabled-foreground">
            <LuCheck className="h-4 w-4" />
          </span>
        </label>
      </div>
    </LinkCard>
  );
};

export default ShowcaseCheckbox;
