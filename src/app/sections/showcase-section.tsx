import React from "react";

import ShowcaseTabs from "@/components/showcase/showcase-tabs";
import ShowcaseAlertDialog from "@/components/showcase/showcase-alert-dialog";
import ShowcaseComboBox from "../../components/showcase/showcase-combo-box";
import ShowcaseInput from "@/components/showcase/showcase-input";
import ShowcaseProgress from "@/components/showcase/showcase-progress";
import ShowcaseCard from "@/components/showcase/showcase-card";
import ShowcaseAlert from "@/components/showcase/showcase-alert";
import ShowcaseButton from "@/components/showcase/showcase-button";
import ShowcaseCheckbox from "@/components/showcase/showcase-checkbox";

const ShowcaseSection = () => {
  return (
    <section className="relative min-h-screen p-2.5 sm:p-5 gap-2 w-full max-w-screen-xl overflow-hidden rounded-3xl bg-white ring ring-black grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
      <ShowcaseTabs />
      <ShowcaseAlertDialog />
      <ShowcaseComboBox />
      <ShowcaseProgress />
      <ShowcaseInput />
      <ShowcaseButton />
      <ShowcaseAlert />
      <ShowcaseCheckbox />
      <ShowcaseCard />
    </section>
  );
};

export default ShowcaseSection;
