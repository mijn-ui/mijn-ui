import {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useState,
} from "react";
import React from "react";
import { LuChevronDown } from "react-icons/lu";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
  WithDisplayName,
} from "@/types";
import { cn } from "@/utils";

type AccordionContextType = {
  open: boolean;
  toggle: () => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an AccordionProvider");
  }
  return context;
};

type AccordionProps = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
} & ComponentProps<"div">;

const Accordion = ({ open, setOpen, className, ...props }: AccordionProps) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(false);

  const isControlled = open !== undefined && setOpen !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleToggle = () => {
    if (isControlled) {
      setOpen?.((prev) => !prev);
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  return (
    <AccordionContext.Provider value={{ open: isOpen, toggle: handleToggle }}>
      <div
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          "group flex w-full flex-col gap-3 border-b border-border",
          className,
        )}
        {...props}
      />
    </AccordionContext.Provider>
  );
};

export type AccordionHandlerProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C>;

type AccordionHandlerComponent = <C extends React.ElementType = "button">(
  props: AccordionHandlerProps<C>,
) => React.ReactElement | null;

const AccordionHandler: WithDisplayName<AccordionHandlerComponent> = forwardRef(
  <C extends React.ElementType = "button">(
    { renderAs, children, className, ...props }: AccordionHandlerProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { toggle } = useAccordion();

    const Component = renderAs || "button";

    return (
      <Component
        ref={ref}
        onClick={toggle}
        className={cn("flex items-center justify-between", className)}
        {...props}
      >
        {children}

        <span className={cn("transition group-data-[state=open]:rotate-180")}>
          <LuChevronDown className="h-4 w-4" />
        </span>
      </Component>
    );
  },
) as AccordionHandlerComponent;

AccordionHandler.displayName = "AccordionHandler";

const AccordionContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => {
    const { open } = useAccordion();

    return (
      <div
        ref={ref}
        className={cn(
          "height_animation w-full origin-bottom",
          open ? "height_animation_active pb-2" : "",
          className,
        )}
        {...props}
      >
        <div>{children}</div>
      </div>
    );
  },
);

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionHandler };
