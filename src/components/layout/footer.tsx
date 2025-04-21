import React from "react"
import { cn } from "@/utils"

type FooterProps = {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={cn(
        "flex w-full items-center justify-center border-t py-6",
        className,
      )}
    >
      <p className="from-foreground text-center to-muted-foreground/70 bg-gradient-to-br bg-clip-text text-tiny font-medium tracking-tight text-transparent sm:text-sm">
        All Right Reserved By MijnUI.
      </p>
    </footer>
  )
}

export default Footer
