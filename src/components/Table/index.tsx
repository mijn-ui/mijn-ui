import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils";

const Table = forwardRef<HTMLTableElement, ComponentProps<"table">>(
  ({ className, ...props }, ref) => (
    <table ref={ref} className={cn("relative text-sm", className)} {...props} />
  ),
);

Table.displayName = "Table";

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<"thead">
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("h-11", className)} {...props} />
));

TableHeader.displayName = "TableHeader";

const TableBody = forwardRef<HTMLTableSectionElement, ComponentProps<"tbody">>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn("divide-y divide-border", className)}
      {...props}
    />
  ),
);
TableBody.displayName = "TableBody";

const TableFooter = forwardRef<
  HTMLTableSectionElement,
  ComponentProps<"tfoot">
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t font-medium", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = forwardRef<HTMLTableRowElement, ComponentProps<"tr">>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn("border-b border-border text-left", className)}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHeaderCell = forwardRef<HTMLTableCellElement, ComponentProps<"th">>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn("px-4 py-3 font-semibold", className)}
      {...props}
    />
  ),
);

TableHeaderCell.displayName = "TableHeaderCell";

const TableCell = forwardRef<HTMLTableCellElement, ComponentProps<"td">>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn("px-4 py-2 align-middle", className)}
      {...props}
    />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  ComponentProps<"caption">
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHeaderCell,
  TableRow,
  TableCell,
  TableCaption,
};
