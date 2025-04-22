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
import { Icons } from "@/components/icons"
import { Templates } from "./data"
import { TemplateImage } from "./template-image"
import { Template } from "@/types"
import { FaGithub } from "react-icons/fa"
import { LuArrowRight, LuExternalLink } from "react-icons/lu"

const TemplateSection = () => {
  return (
    <section id="templates-and-blocks">
      <h3 className="bg-gradient-to-br from-foreground to-muted-foreground/70 bg-clip-text text-2xl/[1.2] font-bold tracking-tight text-transparent sm:text-4xl/[1.2] sm:font-extrabold">
        Templates & Blocks
      </h3>
      <div className="w-full mt-10 grid grid-cols-3 gap-4">
        {Templates.map((template) => (
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
    </section>
  )
}

type TemplateCardProps = {
  template: Template
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  const Icon = Icons[template.technology as keyof typeof Icons]

  return (
    <Card className="w-full rounded-2xl flex flex-col">
      <CardHeader>
        <Link
          href={template.previewURL}
          target="_blank"
          className="w-full h-full rounded-large aspect-video border border-border/40 overflow-hidden bg-accent/50"
        >
          <TemplateImage
            width={1920}
            height={1080}
            alt={template.name}
            lightSrc={template.images.light}
            darkSrc={template.images.dark}
            placeholder="blur"
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
        {template.githubURL && (
          <Button asChild size="xs" className="text-xs" variant="outlined">
            <Link href={template.githubURL} target="_blank">
              <FaGithub />
              Github
            </Link>
          </Button>
        )}
        {template.previewURL && (
          <Button size="xs" asChild className="text-xs">
            <Link href={template.previewURL} target="_blank">
              Preview
              <LuExternalLink />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default TemplateSection
