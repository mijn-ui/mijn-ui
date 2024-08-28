import React from "react";
import Link from "next/link";
import { cn } from "@/utils";

type StyledLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const StyledLink = ({ children, href, className }: StyledLinkProps) => {
  return (
    <Link className={cn("inline-flex items-center gap-1.5 text-sm text-blue-800 hover:text-blue-900 hover:underline", className)} href={href}>
      {children}
    </Link>
  );
};

export default StyledLink;