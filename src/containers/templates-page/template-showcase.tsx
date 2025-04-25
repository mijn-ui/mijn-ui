"use client"

import { Button } from "@mijn-ui/react-button"
import { cn } from "@mijn-ui/react-theme"
import { ThemeImage } from "@/components/ui/theme-image"
import { TechIcons } from "@/components/tech-icons"
import { TemplateGroups, Templates } from "./data"
import { GithubLinkButton } from "./github-link-button"
import { PreviewLinkButton } from "./preview-link-button"
import { useQueryState } from "nuqs"

const TemplateShowcase = () => {
  const [filter, setFilter] = useQueryState("filter")

  const filteredGroups = filter
    ? Templates.filter((group) => group.group === filter)
    : Templates

  const filteredTemplates = filteredGroups.flatMap((group) => group.items)
  return (
    <>
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
              <div className="flex gap-2 w-full items-start justify-center md:justify-between mt-4">
                <div className="flex items-center gap-2 mt-4">
                  {template.githubURL && (
                    <GithubLinkButton href={template.githubURL} />
                  )}

                  {template.previewURL && (
                    <PreviewLinkButton href={template.previewURL} />
                  )}
                </div>

                <div className="p-5 space-y-2 md:block min-w-96 hidden">
                  <h4>Built With:</h4>
                  <ul className="px-5 grid grid-cols-2 gap-2 w-full text-muted-foreground max-w-md">
                    {template.technologies.map((tech) => (
                      <li className="list-disc text-sm" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
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
    </>
  )
}

export { TemplateShowcase }
