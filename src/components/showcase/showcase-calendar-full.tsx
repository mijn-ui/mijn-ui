import React from "react";

import Image from "next/image";

import LinkCard from "./link-card";

const ShowcaseCalendarFull = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-calendarFull--docs"
      label="CalendarFull"
    >
      <div className="h-fit max-h-full w-fit rounded-md bg-card p-2">
        <Image
          src={"/assets/components/calendar-full.svg"}
          width={1024}
          height={724}
          alt="full-calendar"
          className="h-full w-full"
        />
      </div>
    </LinkCard>
  );
};

export default ShowcaseCalendarFull;
