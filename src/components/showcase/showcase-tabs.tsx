import React from "react";
import Button from "../mijn-ui/Button";
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
          <Button
            className={
              "bg-card text-xs text-foreground hover:bg-card hover:text-card-foreground"
            }
          >
            Tab One
          </Button>
          <Button
            className={
              "bg-transparent text-xs text-muted-foreground hover:bg-card hover:text-card-foreground"
            }
          >
            Tab Two
          </Button>
          <Button
            className={
              "bg-transparent text-xs text-muted-foreground hover:bg-card hover:text-card-foreground"
            }
          >
            Tab Three
          </Button>
        </div>

        <div className="h-32 w-full">
          <Card className="flex h-full w-full items-center justify-center text-sm drop-shadow-sm">
            Tab One Content
          </Card>
        </div>
      </div>
    </LinkCard>
  );
};

export default ShowcaseTabs;
