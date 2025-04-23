import React, { ComponentProps } from "react"
import { cn } from "@/utils"

const TopBackgroundGradient = ({
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-20%,hsl(18,81.9%,65.3%,0.5),rgba(255,255,255,0))] dark:bg-[radial-gradient(80%_60%_at_50%_-20%,hsl(18,81.9%,65.3%,0.2),rgba(255,255,255,0))]",
        className,
      )}
      {...props}
    />
  )
}

export default TopBackgroundGradient
