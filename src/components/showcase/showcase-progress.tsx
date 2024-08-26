import React from "react";
import LinkCard from "./link-card";

const ShowcaseProgress = () => {
  return (
    <LinkCard href="https://mijnui.com/docs/?path=/docs/components-progressBar--docs" label="ProgressBar">
      <div className="max-w-60 w-full space-y-1">
        <div className="flex items-center justify-between text-xs font-medium text-foreground">
          <h5>Progress Label</h5>
          <p>75%</p>
        </div>
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-primary w-3/4"></div>
        </div>
        <div className="flex items-center justify-between text-xs text-card-description">
          <p>min</p>
          <p>max</p>
        </div>
      </div>
    </LinkCard>
  );
};

export default ShowcaseProgress;
