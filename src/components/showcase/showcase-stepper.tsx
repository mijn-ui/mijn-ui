import React from "react";

import LinkCard from "./link-card";

const ShowcaseStepper = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/upcomming-components-stepper--default"
      label="Stepper"
    >
      <div className="flex w-full max-w-60 flex-col">
        <div className="stepper__main-container flex w-full flex-row flex-wrap justify-between">
          <StepperButton active="true" completed="true">
            <span className="text-md text-center font-medium">1</span>
          </StepperButton>

          <StepperButton current="true">
            <span className="text-md text-center font-medium">2</span>
          </StepperButton>

          <StepperButton>
            <span className="text-md text-center font-medium">3</span>
          </StepperButton>
        </div>
      </div>

      <div className="my-2 flex w-full max-w-60 flex-col items-center justify-center rounded-md bg-card p-2">
        <p className="text-center text-xxs text-card-description">Step-2</p>
        <input
          type="text"
          className="w-full border-b px-2 py-1 text-xxs"
          placeholder="Name"
        />

        <input
          type="email"
          className="mt-1.5 w-full border-b px-2 py-1 text-xxs"
          placeholder="Email"
        />

        <input
          type="password"
          className="mt-1.5 w-full border-b px-2 py-1 text-xxs"
          placeholder="Password"
        />
        <div className="mt-2 flex w-full justify-end gap-1">
          <button className="inline-flex items-center justify-center rounded-md border border-border px-2.5 py-1 text-xxs text-foreground hover:bg-secondary/90 disabled:bg-disabled disabled:text-disabled-foreground">
            Previous
          </button>
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-2.5 py-1 text-xxs text-primary-foreground hover:bg-primary/90 disabled:bg-disabled disabled:text-disabled-foreground">
            Next
          </button>
        </div>
      </div>
    </LinkCard>
  );
};

type StepperButtonProps = {
  completed?: "true" | "false";
  active?: "true" | "false";
  invalid?: "true" | "false";
  clickable?: "true" | "false";
  loading?: "true" | "false";
  current?: "true" | "false";
  children: React.ReactNode;
};

const StepperButton = ({
  completed = "false",
  active = "false",
  invalid = "false",
  clickable = "false",
  current = "false",
  loading = "false",
  children,
}: StepperButtonProps) => (
  <div
    aria-disabled="true"
    className="stepper__horizontal-step data-[invalid=true]:[&:not(:last-child)]:after:bg-destructive relative flex items-center transition-all duration-200 [&:not(:last-child)]:flex-1 [&:not(:last-child)]:after:me-[8px] [&:not(:last-child)]:after:ms-[8px] [&:not(:last-child)]:after:h-[2px] [&:not(:last-child)]:after:flex-1 [&:not(:last-child)]:after:bg-border [&:not(:last-child)]:after:transition-all [&:not(:last-child)]:after:duration-200 [&:not(:last-child)]:after:content-[''] data-[completed=true]:[&:not(:last-child)]:after:bg-foreground"
    data-completed={completed}
    data-active={active}
    data-invalid={invalid}
    data-clickable={clickable}
  >
    <div className="stepper__horizontal-step-container flex items-center">
      <button
        className="stepper__step-button-container data-[invalid=true]:bg-destructive data-[invalid=true]:border-destructive data-[invalid=true]:text-destructive-foreground pointer-events-none flex h-[24px] w-[24px] items-center justify-center gap-1 rounded-full border border-border bg-neutral-50 p-0 text-xs text-foreground hover:bg-accent hover:text-accent-foreground disabled:bg-disabled disabled:text-disabled-foreground data-[clickable=true]:pointer-events-auto data-[active=true]:border-foreground data-[current=true]:border-foreground data-[active=true]:bg-foreground data-[current=true]:bg-neutral-50 data-[active=true]:text-primary-foreground"
        type="button"
        data-current={current}
        data-invalid={invalid}
        data-active={active}
        data-clickable={clickable}
        data-loading={loading}
      >
        {children}
      </button>
    </div>
  </div>
);

export default ShowcaseStepper;
