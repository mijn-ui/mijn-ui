import React from "react";
import LinkCard from "./link-card";
import { IoRocketOutline } from "react-icons/io5";

const ShowcaseAlert = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-alert--docs"
      label="Alert"
    >
      <div className="[&amp;>svg]:text-foreground [&amp;>div]:translate-y-[-3px] relative w-full max-w-60 rounded-lg border border-border px-2 py-3 pl-9 text-foreground">
        <span className="absolute left-3 top-4 translate-y-[-3px]">
          <IoRocketOutline size={18} />
        </span>
        <h5 className="w-full text-sm font-semibold">Heads Up!</h5>
        <div className="mt-1 text-xs">
          You can add components to your app using the CLI.
        </div>
      </div>
    </LinkCard>
  );
};

export default ShowcaseAlert;
