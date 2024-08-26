import React, {
  ComponentProps,
  createContext,
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { LuCheck, LuChevronsUpDown } from "react-icons/lu";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
  WithDisplayName,
} from "@/types";
import { cn } from "@/utils";

type ComboBoxContextType = {
  open: boolean;
  toggle: (open: boolean) => void;
  selectedValue: string | number | null;
  onSelectValue: (value: string | number | null) => void;
};

const ComboBoxContext = createContext<ComboBoxContextType | undefined>(
  undefined,
);

const useComboBox = () => {
  const context = useContext(ComboBoxContext);
  if (!context) {
    throw new Error("useComboBox must be used within a ComboBoxProvider");
  }
  return context;
};

type ComboBoxProps = ComponentProps<"div"> & {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  selectedValue: string | number | null;
  setSelectedValue: React.Dispatch<React.SetStateAction<any>>;
};

const ComboBox = ({
  open,
  setOpen,
  selectedValue,
  className,
  setSelectedValue,
  ...props
}: ComboBoxProps) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(false);

  const isControlled = open !== undefined && setOpen !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleToggle = (open: boolean) => {
    if (isControlled) {
      setOpen?.(open);
    } else {
      setInternalOpen(open);
    }
  };

  const onSelectValue = useCallback(
    (newValue: any) => {
      setSelectedValue(newValue);
    },
    [setSelectedValue],
  );

  return (
    <ComboBoxContext.Provider
      value={{
        open: isOpen,
        toggle: handleToggle,
        selectedValue,
        onSelectValue,
      }}
    >
      <div
        data-state={isOpen ? "open" : "closed"}
        className={cn("group relative", className)}
        {...props}
      />
    </ComboBoxContext.Provider>
  );
};

export type ComboBoxHandlerProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C>;

type ComboBoxHandlerComponent = <C extends React.ElementType = "button">(
  props: ComboBoxHandlerProps<C>,
) => React.ReactElement | null;

const ComboBoxHandler: WithDisplayName<ComboBoxHandlerComponent> = forwardRef(
  <C extends React.ElementType = "button">(
    {
      renderAs,
      className,
      onClick,
      children,
      ...props
    }: ComboBoxHandlerProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { toggle, open } = useComboBox();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      toggle(!open);
      if (onClick) onClick(e);
    };

    const Component = renderAs || "button";

    return (
      <Component
        ref={ref}
        type="button"
        className={cn(
          "inline-flex items-center justify-between gap-2 rounded-md border border-border py-2 pl-4 pr-3 text-sm font-medium text-foreground",
          className,
        )}
        onClick={handleClick}
        aria-expanded={open}
        aria-controls="combobox-options"
        {...props}
      >
        {children}
        <LuChevronsUpDown className="h-4 w-4 flex-shrink-0" />
      </Component>
    );
  },
) as ComboBoxHandlerComponent;

ComboBoxHandler.displayName = "ComboBoxHandler";

const ComboBoxContent = forwardRef<HTMLUListElement, ComponentProps<"ul">>(
  ({ className, ...props }, ref) => {
    const { open } = useComboBox();

    if (!open) return null;

    return (
      <ul
        ref={ref}
        id="combobox-options"
        className={cn(
          "absolute z-10 mt-1 flex w-full origin-top flex-col overflow-auto rounded-lg border border-border bg-card p-1 text-sm font-normal text-card-foreground shadow-sm transition duration-100 ease-in",
          open ? "scale_in" : "scale_out",
          className,
        )}
        tabIndex={-1}
        role="listbox"
        {...props}
      />
    );
  },
);

ComboBoxContent.displayName = "ComboBoxContent";

type ComboBoxOptionProps = ComponentProps<"li"> & {
  value: string;
  children: ReactNode;
};

const ComboBoxOption = forwardRef<HTMLLIElement, ComboBoxOptionProps>(
  ({ value, className, children, onClick, ...props }, ref) => {
    const { onSelectValue, toggle, selectedValue } = useComboBox();

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
      onSelectValue(value);
      toggle(false);

      if (onClick) onClick(e);
    };

    return (
      <li
        ref={ref}
        className={cn(
          "inline-flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-default px-3 py-2 hover:bg-accent",
          selectedValue === value && "bg-accent",
          className,
        )}
        role="option"
        onClick={handleClick}
        aria-selected={selectedValue === value}
        {...props}
      >
        {children}
        {selectedValue === value && (
          <LuCheck className="h-3.5 w-3.5 flex-shrink-0" />
        )}
      </li>
    );
  },
);

ComboBoxOption.displayName = "ComboBoxOption";

export { ComboBox, ComboBoxContent, ComboBoxOption, ComboBoxHandler };
