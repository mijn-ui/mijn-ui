"use client";

import React, { useEffect } from "react";

import ShowcaseAlert from "@/components/showcase/showcase-alert";
import ShowcaseAlertDialog from "@/components/showcase/showcase-alert-dialog";
import ShowcaseButton from "@/components/showcase/showcase-button";
import ShowcaseCard from "@/components/showcase/showcase-card";
import ShowcaseCheckbox from "@/components/showcase/showcase-checkbox";
import ShowcaseComboBox from "@/components/showcase/showcase-combo-box";
import ShowcaseInput from "@/components/showcase/showcase-input";
import ShowcaseProgress from "@/components/showcase/showcase-progress";
import ShowcaseTabs from "@/components/showcase/showcase-tabs";

const ShowcaseSection = () => {
  // card glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementsByClassName("card");
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
    <section className="relative w-full lg:max-w-screen-xl rounded-3xl bg-white ring ring-black max-w-lg">
      <div className="p-2 scroll_animation min-h-screen sm:gap-2 w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" id="cards">
        <ShowcaseTabs />
        <ShowcaseAlertDialog />
        <ShowcaseComboBox />
        <ShowcaseProgress />
        <ShowcaseInput />
        <ShowcaseButton />
        <ShowcaseAlert />
        <ShowcaseCheckbox />
        <ShowcaseCard />
      </div>
    </section>
  );
};

export default ShowcaseSection;