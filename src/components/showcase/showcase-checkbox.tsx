import React from "react";

import { LuCheck } from "react-icons/lu";

import LinkCard from "./link-card";

const ShowcaseCheckbox = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-checkbox--docs"
      label="Checkbox"
    >
      <div className="inline-flex items-center gap-2">
        <label
          htmlFor={"showcase-checkbox"}
          className="relative flex items-center"
        >
          <input
            id={"showcase-checkbox"}
            type="checkbox"
            defaultChecked
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-black transition-all checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary disabled:cursor-default disabled:border-disabled disabled:checked:bg-disabled [&+span>svg]:text-primary-foreground"
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
