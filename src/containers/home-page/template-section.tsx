import React from "react"
import Link from "next/link"
import { Badge } from "@mijn-ui/react-badge"
import { Button } from "@mijn-ui/react-button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react-card"
import { ThemeImage } from "@/components/ui/theme-image"
import { SubTitle } from "@/components/ui/typography"
import { TechIcons } from "@/components/tech-icons"
import { Template, Templates } from "@/containers/templates-page/data"
import { GithubLinkButton } from "@/containers/templates-page/github-link-button"
import { PreviewLinkButton } from "@/containers/templates-page/preview-link-button"
import { LuArrowRight } from "react-icons/lu"

const TemplateSection = () => {
  const flattenTemplates = Templates.flatMap((group) => group.items).slice(0, 9)

  return (
    <section className="pb-14 pt-16 md:pt-32 w-full max-w-screen-xl">
      <SubTitle className="lg:text-start text-center">Templates</SubTitle>
      <div className="flex items-center justify-center flex-col">
        <div className="w-fit mt-10 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flattenTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        <div className="w-full flex items-center justify-center mt-10">
          <Button asChild color="primary" size="lg" className="text-sm">
            <Link href={"/templates"}>
              Browse All <LuArrowRight className="mt-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

type TemplateCardProps = {
  template: Template
}

export const TemplateCard = ({ template }: TemplateCardProps) => {
  const Icon = TechIcons[template.technology as keyof typeof TechIcons]

  return (
    <Card className="w-full rounded-2xl max-w-96 lg:max-w-none flex flex-col">
      <CardHeader>
        <Link
          href={template.previewURL}
          target="_blank"
          className="w-full h-full rounded-large aspect-video border border-border/40 overflow-hidden bg-accent/50"
        >
          <ThemeImage
            width={1920}
            height={1080}
            alt={template.name}
            lightSrc={template.cover.light}
            darkSrc={template.cover.dark}
            className="size-full object-cover hover:scale-105 transition duration-300"
          />
        </Link>
      </CardHeader>

      <CardContent className="p-4 relative">
        <Badge
          size="xs"
          className="absolute top-5 right-6 flex items-center gap-1 w-fit"
        >
          <Icon className="text-foreground size-3.5" /> {template.technology}
        </Badge>
        <CardTitle className="mb-1 text-lg">{template.name}</CardTitle>
        <CardDescription>{template.description}</CardDescription>
      </CardContent>

      <CardFooter className="justify-end gap-2">
        {template.githubURL && <GithubLinkButton href={template.githubURL} />}
        {template.previewURL && (
          <PreviewLinkButton href={template.previewURL} />
        )}
      </CardFooter>
    </Card>
  )
}

export default TemplateSection
