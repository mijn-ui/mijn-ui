import { useEffect, useState } from "react"

/**
 * Hook that tracks when page scroll exceeds a threshold.
 *
 * @param threshold - Scroll position in pixels to trigger active state (default: 5)
 * @returns boolean - True when scrolled beyond threshold
 *
 * @example
 * const isScrolled = useScrollActive();
 * <div className={isScrolled ? "scrolled" : ""}>...</div>
 */
export function useScrollActive(threshold = 5) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY
      setActive(scrollHeight > threshold)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [threshold])

  return active
}
