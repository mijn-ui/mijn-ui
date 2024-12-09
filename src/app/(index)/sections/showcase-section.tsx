"use client";

import React, { useEffect } from "react";

import ShowcaseAlertDialog from "@/components/showcase/showcase-alert-dialog";
import ShowcaseCalendar from "@/components/showcase/showcase-calendar";
import ShowcaseCalendarFull from "@/components/showcase/showcase-calendar-full";
import ShowcaseComboBox from "@/components/showcase/showcase-select";
import ShowcaseKanban from "@/components/showcase/showcase-kanban";
import ShowcasePagination from "@/components/showcase/showcase-pagination";
import ShowcaseStepper from "@/components/showcase/showcase-stepper";
import ShowcaseTable from "@/components/showcase/showcase-table";
import ShowcaseTabs from "@/components/showcase/showcase-tabs";

const ShowcaseSection = () => {
  // card glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementsByClassName("card_glow");
      Array.from(cards).forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.setAttribute("style", `--mouse-x: ${x}px; --mouse-y: ${y}px;`);
      });
    };

    const cardsContainer = document.getElementById("cards");
    if (cardsContainer) {
      cardsContainer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="relative w-full max-w-lg rounded-3xl ring ring-muted-text lg:max-w-screen-xl">
      <div
        className="scroll_animation grid min-h-screen w-full grid-cols-1 p-0 sm:p-2 md:gap-2 lg:grid-cols-2 xl:grid-cols-3"
        id="cards"
      >
        <ShowcaseTabs />
        <ShowcasePagination />
        <ShowcaseStepper />
        <ShowcaseCalendar />
        <ShowcaseComboBox />
        <ShowcaseAlertDialog />
        <ShowcaseKanban />
        <ShowcaseTable />
        <ShowcaseCalendarFull />
      </div>
    </section>
  );
};

export default ShowcaseSection;
