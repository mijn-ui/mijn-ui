import React from "react";

import { Card } from "../mijn-ui/Card";
import LinkCard from "./link-card";

const ShowcaseTabs = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-tabs--docs"
      label="Tabs"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-1 whitespace-nowrap">
          <button
            className={
              "rounded-md bg-card px-3 py-2 text-xs text-foreground hover:bg-card hover:text-card-foreground"
            }
          >
            Tab One
          </button>
          <button
            className={
              "rounded-md bg-transparent px-3 py-2 text-xs text-muted-foreground hover:bg-card hover:text-card-foreground"
            }
          >
            Tab Two
          </button>
          <button
            className={
              "rounded-md bg-transparent px-3 py-2 text-xs text-muted-foreground hover:bg-card hover:text-card-foreground"
            }
          >
            Tab Three
          </button>
        </div>

        <div className="h-32 w-full">
          <Card className="flex h-full w-full items-center justify-center text-xs drop-shadow-sm sm:text-sm">
            Tab One Content
          </Card>
        </div>
      </div>
    </LinkCard>
  );
};

export default ShowcaseTabs;
