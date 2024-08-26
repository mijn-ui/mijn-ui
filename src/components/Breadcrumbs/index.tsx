import { ComponentProps, forwardRef } from "react";
import { LuChevronRight } from "react-icons/lu";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
  WithDisplayName,
} from "@/types";
import { cn } from "@/utils";

const Breadcrumbs = forwardRef<HTMLElement, ComponentProps<"nav">>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        "flex flex-wrap items-center justify-start",
        "gap-1 text-muted-foreground",
        className,
      )}
      aria-label="breadcrumb"
      {...props}
    />
  ),
);

Breadcrumbs.displayName = "Breadcrumbs";

const BreadcrumbItem = forwardRef<HTMLSpanElement, ComponentProps<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("flex items-center text-xs", className)}
      {...props}
    />
  ),
);

BreadcrumbItem.displayName = "BreadcrumbItem";

export type BreadCrumbLinkProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C>;

type BreadCrumbComponent = <C extends React.ElementType = "a">(
  props: BreadCrumbLinkProps<C>,
) => React.ReactElement | null;

const BreadcrumbLink: WithDisplayName<BreadCrumbComponent> = forwardRef(
  <C extends React.ElementType = "a">(
    { renderAs, className, ...props }: BreadCrumbLinkProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const Component = renderAs || "a";

    return (
      <Component
        ref={ref}
        className={cn(
          "flex items-center text-muted-foreground hover:text-foreground hover:underline",
          className,
        )}
        {...props}
      />
    );
  },
) as BreadCrumbComponent;

BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbsSeparator = forwardRef<HTMLElement, ComponentProps<"span">>(
  ({ className, ...props }, ref) => (
    <span ref={ref} {...props} className={cn("h-3 w-3", className)}>
      <LuChevronRight className="h-full w-full" />
    </span>
  ),
);

BreadcrumbsSeparator.displayName = "BreadcrumbsSeparator";

export { BreadcrumbItem, BreadcrumbLink, Breadcrumbs, BreadcrumbsSeparator };
