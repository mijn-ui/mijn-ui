import {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useState,
} from "react";
import { LuChevronDown } from "react-icons/lu";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
  WithDisplayName,
} from "@/types";
import { cn } from "@/utils";

import { buttonStyles } from "../Button";

const List = forwardRef<HTMLUListElement, ComponentProps<"ul">>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn("w-full list-none space-y-1 p-1", className)}
        {...props}
      />
    );
  },
);

List.displayName = "List";

const ListItem = forwardRef<HTMLLIElement, ComponentProps<"li">>(
  ({ className, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn("flex items-center gap-2 px-4 py-2 text-sm", className)}
        {...props}
      />
    );
  },
);

ListItem.displayName = "ListItem";

type ListItemButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C>;

type ListItemButtonComponent = <C extends React.ElementType = "button">(
  props: ListItemButtonProps<C>,
) => React.ReactElement | null;

const ListItemButton: WithDisplayName<ListItemButtonComponent> = forwardRef(
  <C extends React.ElementType = "button">(
    { renderAs, className, ...props }: ListItemButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const Component = renderAs || "button";

    return (
      <Component
        ref={ref}
        className={cn(
          buttonStyles({ variant: "ghost", className: "w-full gap-2" }),
          className,
        )}
        {...props}
      />
    );
  },
) as ListItemButtonComponent;

ListItemButton.displayName = "ListItemButton";

const ListItemLeadingIcon = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-md bg-muted text-sm text-foreground [&>svg]:h-5 [&>svg]:w-5",
        className,
      )}
      {...props}
    />
  ),
);

ListItemLeadingIcon.displayName = "ListItemLeadingIcon";

const ListItemIcon = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "flex size-5 flex-shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4",
          className,
        )}
        {...props}
      />
    );
  },
);

ListItemIcon.displayName = "ListItemIcon";

const ListItemContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1 text-left", className)} {...props} />
  ),
);

ListItemContent.displayName = "ListItemContent";

const ListDivider = forwardRef<HTMLHRElement, ComponentProps<"hr">>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn("my-2 border-t border-border", className)}
      {...props}
    />
  ),
);

ListDivider.displayName = "ListDivider";

type ListSubMenuContextType = {
  open: boolean;
  toggle: (open: boolean) => void;
};

const ListSubMenuContext = createContext<ListSubMenuContextType | undefined>(
  undefined,
);

const useListSubMenu = () => {
  const context = useContext(ListSubMenuContext);
  if (!context) {
    throw new Error(
      "useListSubMenu must be used within an ListSubMenuProvider",
    );
  }
  return context;
};

type ListSubMenuProps = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
} & ComponentProps<"div">;

const ListSubMenu = ({
  open,
  setOpen,
  className,
  ...props
}: ListSubMenuProps) => {
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
    <ListSubMenuContext.Provider value={{ open: isOpen, toggle: handleToggle }}>
      <div
        data-state={isOpen ? "open" : "closed"}
        className={cn("group", className)}
        {...props}
      />
    </ListSubMenuContext.Provider>
  );
};

export type ListSubMenuHandlerProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C>;

type ListSubMenuHandlerComponent = <C extends React.ElementType = "button">(
  props: ListSubMenuHandlerProps<C>,
) => React.ReactElement | null;

const ListSubMenuHandler: WithDisplayName<ListSubMenuHandlerComponent> =
  forwardRef(
    <C extends React.ElementType = "button">(
      { renderAs, children, className, ...props }: ListSubMenuHandlerProps<C>,
      ref: PolymorphicRef<C>,
    ) => {
      const { open, toggle } = useListSubMenu();

      const Component = renderAs || "button";

      return (
        <Component
          ref={ref}
          onClick={() => toggle(!open)}
          className={cn(
            "inline-flex h-10 w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground group-data-[state=open]:hover:bg-primary group-data-[state=open]:hover:text-primary-foreground",
            className,
          )}
          {...props}
        >
          {children}

          <span className={cn("transition group-data-[state=open]:rotate-180")}>
            <LuChevronDown className="h-4 w-4" />
          </span>
        </Component>
      );
    },
  ) as ListSubMenuHandlerComponent;

ListSubMenuHandler.displayName = "ListSubMenuHandlerComponent";

const ListSubMenuContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => {
    const { open } = useListSubMenu();

    return (
      <div
        ref={ref}
        className={cn(
          "height_animation w-full",
          open && "height_animation_active",
          className,
        )}
        {...props}
      >
        <div>{children}</div>
      </div>
    );
  },
);

ListSubMenuContent.displayName = "ListSubMenuContent";

export {
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemIcon,
  ListItemLeadingIcon,
  ListSubMenu,
  ListSubMenuContent,
  ListSubMenuHandler,
};
