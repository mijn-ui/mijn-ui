import React from "react";
import LinkCard from "./link-card";
import Button from "../mijn-ui/Button";

const ShowcaseButton = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-button--docs"
      label="Button"
    >
      <Button className="text-xs">Button</Button>
    </LinkCard>
  );
};

export default ShowcaseButton;
