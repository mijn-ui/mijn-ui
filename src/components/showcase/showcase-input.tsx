import React from "react";

import { LuSearch } from "react-icons/lu";

import { Input } from "../mijn-ui/Input";
import LinkCard from "./link-card";

const ShowcaseInput = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-input--docs"
      label="Input"
    >
      <Input
        placeholder="Search..."
        id="showcase-input"
        readOnly
        startIcon={<LuSearch />}
        className="max-w-60 text-xs"
      />
    </LinkCard>
  );
};

export default ShowcaseInput;
