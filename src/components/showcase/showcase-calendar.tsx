import React from "react";

import Calendar from "../mijn-ui/Calendar";
import LinkCard from "./link-card";

const ShowcaseCalendar = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-calendar--docs"
      label="Calendar"
      cardContentClass="p-10"
    >
      <Calendar className="max-h-full max-w-52 overflow-hidden p-2" />
    </LinkCard>
  );
};

export default ShowcaseCalendar;
