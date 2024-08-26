import React from "react";
import LinkCard from "./link-card";
import { IoRocketOutline } from "react-icons/io5";

const ShowcaseAlert = () => {
  return (
    <LinkCard href="https://mijnui.com/docs/?path=/docs/components-alert--docs" label="Alert">
      <div className="max-w-60 relative rounded-lg py-3 px-2 border-border border [&amp;>svg]:text-foreground [&amp;>div]:translate-y-[-3px] text-foreground w-full pl-9">
        <span className="translate-y-[-3px] absolute left-3 top-4 ">
          <IoRocketOutline size={18} />
        </span>
        <h5 className="w-full font-semibold text-sm">Heads Up!</h5>
        <div className="mt-1 text-xs">You can add components to your app using the CLI.</div>
      </div>
    </LinkCard>
  );
};

export default ShowcaseAlert;
