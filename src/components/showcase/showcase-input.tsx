import React from "react";
import LinkCard from "./link-card";
import { Input } from "../mijn-ui/Input";
import { LuSearch } from "react-icons/lu";

const ShowcaseInput = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-input--docs"
      label="Input"
    >
      <Input
        placeholder="Search..."
        readOnly
        startIcon={<LuSearch />}
        className="max-w-60 text-xs"
      />
    </LinkCard>
  );
};

export default ShowcaseInput;
