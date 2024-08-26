import React, { ComponentProps, createContext, forwardRef, useCallback, useContext, useState } from "react";

import { PolymorphicComponentPropsWithRef, PolymorphicRef, WithDisplayName } from "@/types";
import { cn } from "@/utils";

import { buttonStyles } from "../Button";

// Define the context for managing the current tab state
type TabsContextType = {
  currentValue: string;
  toggleCurrentValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};

type TabsProps = ComponentProps<"div"> & {
  defaultValue?: string;
};

// Main Tabs component managing the current tab state
const Tabs = ({ children, defaultValue = "", className, ...props }: TabsProps) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const toggleCurrentValue = useCallback((value: string) => {
    setCurrentValue(value);
  }, []);

  return (
    <TabsContext.Provider value={{ currentValue, toggleCurrentValue }}>
      <div className={cn("", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// TabsList component for wrapping tab triggers
const TabsList = forwardRef<HTMLDivElement, ComponentProps<"div">>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
    {children}
  </div>
));

TabsList.displayName = "TabsList";

export type TabsHandlerProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, { value: string }>;

type TabsHandlerComponent = <C extends React.ElementType = "button">(props: TabsHandlerProps<C>) => React.ReactElement | null;

// TabsHandler component for each individual tab
const TabsHandler: WithDisplayName<TabsHandlerComponent> = forwardRef(
  <C extends React.ElementType = "button">({ renderAs, value, className, ...props }: TabsHandlerProps<C>, ref: PolymorphicRef<C>) => {
    const { currentValue, toggleCurrentValue } = useTabs();
    const Component = renderAs || "button";

    return (
      <Component
        ref={ref}
        onClick={() => toggleCurrentValue(value)}
        className={cn(
          buttonStyles(),
          "bg-transparent text-muted-foreground hover:bg-card hover:text-card-foreground",
          value === currentValue && "bg-card text-card-foreground drop-shadow-sm",
          className
        )}
        {...props}
      />
    );
  }
) as TabsHandlerComponent;

TabsHandler.displayName = "TabsHandler";

type TabsContentProps = ComponentProps<"div"> & {
  value: string;
};

// TabsContent component to display the content of the active tab
const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(({ children, value, className, ...props }, ref) => {
  const { currentValue } = useTabs();

  return currentValue === value ? (
    <div ref={ref} className={cn("", className)} {...props}>
      {children}
    </div>
  ) : null;
});

TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList, TabsHandler };
