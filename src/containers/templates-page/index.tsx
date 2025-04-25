"use client"

import Link from "next/link"
import { Button } from "@mijn-ui/react-button"
import { cn } from "@mijn-ui/react-theme"
import { ThemeImage } from "@/components/ui/theme-image"
import { Title } from "@/components/ui/typography"
import Footer from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { TechIcons } from "@/components/tech-icons"
import ThemeToggler from "@/components/theme-toggler"
import { TemplateGroups, Templates } from "./data"
import { GithubLinkButton } from "./github-link-button"
import { PreviewLinkButton } from "./preview-link-button"
import { useQueryState } from "nuqs"
import { LuArrowLeft } from "react-icons/lu"

const TemplatesShowcase = () => {
  const [filter, setFilter] = useQueryState("filter")

  const filteredGroups = filter
    ? Templates.filter((group) => group.group === filter)
    : Templates

  const filteredTemplates = filteredGroups.flatMap((group) => group.items)

  return (
    <>
      <Navbar className="border-b-border">
        <ThemeToggler />
      </Navbar>
      <main className="w-full min-h-screen flex justify-center pt-32 pb-20 md:text-start text-center">
        <div className="w-full max-w-screen-xl px-5">
          <Link
            href={"/"}
            className="text-sm flex items-center gap-1 w-fit underline mb-2 text-secondary hover:text-foreground"
          >
            <LuArrowLeft />
            Go Back Home
          </Link>
          <Title>Templates</Title>
          <p className="text-muted-foreground max-w-screen-md px-2 text-small md:text-medium">
            These templates are currently in beta. They showcase the
            capabilities of our components and design system. More templates are
            coming soon, but we recommend not using them in production
            environments yet.
          </p>

          <div className="mt-12 flex gap-1 z-10 items-center justify-center md:justify-end sticky bg-background py-2 top-14">
            {TemplateGroups.map((group) => {
              const Icon = TechIcons[group]
              const active = filter === group
              return (
                <Button
                  key={group}
                  className={cn(
                    "capitalize",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                  size="sm"
                  variant={active ? "filled" : "ghost"}
                  onClick={() => setFilter(group)}
                >
                  <Icon />
                  {group}
                </Button>
              )
            })}

            <Button
              className={cn(
                "capitalize",
                !filter ? "text-foreground" : "text-muted-foreground",
              )}
              size="sm"
              variant={!filter ? "filled" : "outlined"}
              onClick={() => setFilter(null)}
            >
              All
            </Button>
          </div>

          <div className="py-12 space-y-12">
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template) => (
                <div key={template.id} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">{template.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {template.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {template.images.light.map((lightImage, index) => (
                      <div
                        key={index}
                        className="relative w-full aspect-video rounded-medium border overflow-hidden"
                      >
                        <ThemeImage
                          lightSrc={lightImage}
                          darkSrc={template.images.dark[index]}
                          alt={`${template.name} Preview ${index + 1}`}
                          width={1920}
                          height={1080}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 justify-center md:justify-start mt-4">
                    {template.githubURL && (
                      <GithubLinkButton href={template.githubURL} />
                    )}

                    {template.previewURL && (
                      <PreviewLinkButton href={template.previewURL} />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground">
                <p className="text-lg font-semibold">
                  More templates are coming soon!
                </p>
                <p className="text-sm">
                  We are currently in beta and actively working on adding more
                  templates to showcase the full potential of our design system.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TemplatesShowcase
