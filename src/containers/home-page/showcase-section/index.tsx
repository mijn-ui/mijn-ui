"use client"

import React, { Suspense, useEffect } from "react"
import { Button } from "@mijn-ui/react-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@mijn-ui/react-tabs"
import { cn } from "@mijn-ui/react-theme"
import "./animation.css"
import LinkCard from "./link-card"
import { Showcases } from "./showcases"
import { useScrollActive } from "@/hooks/use-scroll-active"
import { FaLaravel, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"

const ShowcaseSection = () => {
  const active = useScrollActive()

  useCardGlowEffect()

  const tabIcons = {
    tailwind: (
      <RiTailwindCssFill size={18} className="text-sky-600 dark:text-sky-500" />
    ),
    react: <FaReact size={18} className="text-[#0058cc]" />,
    laravel: <FaLaravel size={18} className="text-[#F05340]" />,
  }

  return (
    <section
      className={cn(
        "relative w-full bg-[#f9fafb] dark:bg-[#0c0c0c] px-5 sm:px-10 overflow-x-hidden flex justify-center pb-24 md:pb-48 flex-col items-center ease-in-out md:pt-14 transition",
        active ? "opacity-100" : "opacity-50 blur-[0.5px]",
      )}
    >
      <div
        className={cn(
          "w-full max-w-screen-xl transition ease-in-out flex justify-center",
          active ? "scale-100" : "scale-[0.98]",
        )}
      >
        <Tabs unstyled defaultValue="tailwind">
          <TabsList
            unstyled
            className="flex items-center w-full divide-x max-w-screen-xl mt-10 transition"
          >
            {Showcases.map((showcase) => (
              <TabsTrigger
                key={showcase.group}
                value={showcase.group}
                unstyled
                disabled={showcase.items.length === 0}
                asChild
              >
                <Button
                  className="text-xs text-muted-foreground gap-2 border-gray-600 border-dashed data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                  size="sm"
                  variant="ghost"
                  radius="none"
                >
                  {tabIcons[showcase.group]}
                  {showcase.group.charAt(0).toUpperCase() +
                    showcase.group.slice(1)}
                </Button>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="relative w-full max-w-lg lg:max-w-screen-xl">
            {Showcases.map((showcase) => (
              <TabsContent
                key={showcase.group}
                value={showcase.group}
                tabIndex={-1}
                className="relative grid w-full h-full grid-cols-1 md:gap-1 lg:grid-cols-2 xl:grid-cols-3"
                id="cards"
              >
                {showcase.items.map((item, index) => (
                  <Suspense
                    key={`${item.name}-${index}`}
                    fallback={
                      <div className="w-full min-h-72 col-span-1 flex items-center justify-center border aspect-video">
                        <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
                      </div>
                    }
                  >
                    <LinkCard
                      href={item.link}
                      label={item.name}
                      inprogress={item.inprogress}
                    >
                      <item.component />
                    </LinkCard>
                  </Suspense>
                ))}
              </TabsContent>
            ))}
            <BorderDecorator />
          </div>
        </Tabs>
      </div>
    </section>
  )
}

function useCardGlowEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementsByClassName("card_glow")
      Array.from(cards).forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        card.setAttribute("style", `--mouse-x: ${x}px; --mouse-y: ${y}px;`)
      })
    }

    const cardsContainer = document.getElementById("cards")
    if (cardsContainer) {
      cardsContainer.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])
}

const BorderDecorator = () => (
  <div className="pointer-events-none absolute inset-0 sm:right-px">
    <div className="absolute -inset-y-16 -left-px w-px">
      <div className="absolute -inset-y-16 left-px w-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            x1={0}
            y1={0}
            x2={0}
            y2="100%"
            stroke="currentColor"
            strokeWidth={2}
            strokeDasharray="1 3"
          />
        </svg>
      </div>
    </div>
    <div className="absolute -inset-x-20 -top-[38px] h-px">
      <div className="absolute -inset-x-20 top-px h-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            x1={0}
            y1={0}
            x2={"100%"}
            y2={0}
            stroke="currentColor"
            strokeWidth={2}
            strokeDasharray="1 3"
          />
        </svg>
      </div>
    </div>
    <div className="absolute -inset-x-20 -bottom-[38px] h-px">
      <div className="absolute -inset-x-20 top-px h-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            x1={0}
            y1={0}
            x2={"100%"}
            y2={0}
            stroke="currentColor"
            strokeWidth={2}
            strokeDasharray="1 3"
          />
        </svg>
      </div>
    </div>
    <div className="absolute -inset-x-20 -top-px h-px">
      <div className="absolute -inset-x-20 top-px h-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            x1={0}
            y1={0}
            x2={"100%"}
            y2={0}
            stroke="currentColor"
            strokeWidth={2}
            strokeDasharray="1 3"
          />
        </svg>
      </div>
    </div>
    <div className="absolute -inset-x-20 -bottom-px h-px">
      <div className="absolute -inset-x-20 bottom-px h-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            x1={0}
            y1={0}
            x2={"100%"}
            y2={0}
            stroke="currentColor"
            strokeWidth={2}
            strokeDasharray="1 3"
          />
        </svg>
      </div>
    </div>
    <div className="absolute -inset-y-16 -right-px w-px">
      <div className="absolute -inset-y-16 w-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            x1={0}
            y1={0}
            x2={0}
            y2="100%"
            stroke="currentColor"
            strokeWidth={2}
            strokeDasharray="1 3"
          />
        </svg>
      </div>
    </div>
  </div>
)

export default ShowcaseSection
