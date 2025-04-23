import { IconSvgProps } from "@/types"
import { cn } from "@/utils"

const TopGridGradient = ({ className, ...props }: IconSvgProps) => {
  return (
    <svg
      className={cn(
        "absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]",
        className,
      )}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <pattern
          id="hero"
          width="80"
          height="80"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero)"></rect>
    </svg>
  )
}

export default TopGridGradient
