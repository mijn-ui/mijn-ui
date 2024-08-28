import React from "react";

import Calendar from "../mijn-ui/Calendar";
import LinkCard from "./link-card";

const ShowcaseCalendar = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-checkbox--docs"
      label="Calendar"
    >
      <Calendar className="max-w-64 space-y-1" />
    </LinkCard>
  );
};

export default ShowcaseCalendar;
