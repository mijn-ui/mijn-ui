import React, {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useState,
} from "react";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
  WithDisplayName,
} from "@/types";
import { cn } from "@/utils";

import { buttonStyles } from "../Button";

type AlertDialogContextType = {
  open: boolean;
  toggle: (open: boolean) => void;
};

const AlertDialogContext = createContext<AlertDialogContextType | undefined>(
  undefined,
);

const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);

  if (!context) {
    throw new Error(
      "useAlertDialog must be used within an AlertContextProvider",
    );
  }

  return context;
};

type AlertDialogProps = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
} & ComponentProps<"div">;

const AlertDialog = ({
  open,
  setOpen,
  className,
  ...props
}: AlertDialogProps) => {
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

  return (
    <AlertDialogContext.Provider value={{ open: isOpen, toggle: handleToggle }}>
      <div
        data-state={isOpen ? "open" : "closed"}
        className={cn("group relative", className)}
        {...props}
      />
    </AlertDialogContext.Provider>
  );
};

export type AlertDialogHandlerProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C>;

type AlertDialogHandlerComponent = <C extends React.ElementType = "button">(
  props: AlertDialogHandlerProps<C>,
) => React.ReactElement | null;

const AlertDialogHandler: WithDisplayName<AlertDialogHandlerComponent> =
  forwardRef(
    <C extends React.ElementType = "button">(
      { renderAs, className, ...props }: AlertDialogHandlerProps<C>,
      ref: PolymorphicRef<C>,
    ) => {
      const { toggle } = useAlertDialog();

      const Component = renderAs || "button";

      return (
        <Component
          ref={ref}
          className={cn(buttonStyles({ className }))}
          onClick={() => toggle(true)}
          {...props}
        />
      );
    },
  ) as AlertDialogHandlerComponent;

AlertDialogHandler.displayName = "AlertDialogHandler";

const AlertDialogOverlay = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    const { open } = useAlertDialog();

    return (
      <div
        ref={ref}
        className={cn(
          "fixed inset-0 z-50 bg-black/70",
          open ? "fade_in" : "fade_out",
          className,
        )}
        {...props}
      />
    );
  },
);

AlertDialogOverlay.displayName = "AlertDialogOverlay";

const AlertDialogContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    const { open } = useAlertDialog();

    return (
      open && (
        <>
          <AlertDialogOverlay />
          <div
            ref={ref}
            className={cn(
              "fixed left-1/2 top-1/2 z-50 w-full max-w-lg origin-bottom-left -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6",
              open ? "scale_in" : "scale_out",
              className,
            )}
            {...props}
          />
        </>
      )
    );
  },
);

AlertDialogContent.displayName = "AlertDialogContent";

const AlertDialogTitle = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <h5
        ref={ref}
        className={cn("text-lg font-semibold", className)}
        {...props}
      />
    );
  },
);

AlertDialogTitle.displayName = "AlertDialogTitle";

const AlertDialogDescription = forwardRef<
  HTMLDivElement,
  ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mt-1 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});

AlertDialogDescription.displayName = "AlertDialogDescription";

const AlertDialogFooter = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mt-6 flex items-center justify-end gap-2", className)}
        {...props}
      />
    );
  },
);

AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogClose = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button">
>(({ className, onClick, ...props }, ref) => {
  const { toggle } = useAlertDialog();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggle(false);
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      ref={ref}
      className={buttonStyles({ variant: "outline", className })}
      {...props}
    />
  );
});

AlertDialogClose.displayName = "AlertDialogClose";

const AlertDialogAction = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button">
>(({ className, onClick, ...props }, ref) => {
  const { toggle } = useAlertDialog();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggle(false);
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      ref={ref}
      className={buttonStyles({ className })}
      {...props}
    />
  );
});

AlertDialogAction.displayName = "AlertDialogAction";

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogHandler,
};
