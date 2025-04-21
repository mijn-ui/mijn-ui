import React from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@mijn-ui/react-avatar"

type ContributorSectionProps = {
  contributors: Contributor[]
}

const ContributorSection = ({ contributors }: ContributorSectionProps) => {
  return (
    <section className="flex w-full flex-col items-center justify-center p-2 sm:p-5">
      <h3 className="bg-gradient-to-br from-foreground to-muted-foreground/70 bg-clip-text text-center text-2xl/[1.2] font-bold tracking-tight text-transparent sm:text-4xl/[1.2] sm:font-extrabold">
        Core Contributors
      </h3>

      <div className="flex mt-10 w-full flex-wrap items-center justify-center gap-x-5 gap-y-8 lg:gap-0 lg:divide-x lg:divide-gray-400">
        {contributors.map((contributor) => (
          <Contributor
            key={contributor.name}
            name={contributor.name}
            position={contributor.position}
            link={contributor.link}
            avatar={contributor.avatar}
          />
        ))}
      </div>
    </section>
  )
}

type Contributor = {
  link: string
  name: string
  avatar?: string
  position: string
}

const Contributor = ({ link, name, avatar, position }: Contributor) => {
  return (
    <div className="flex min-w-40 flex-col items-center justify-center px-4 text-center">
      <Avatar size="md">
        <AvatarImage src={avatar} alt="anthony" />
        <AvatarFallback>{name?.substring(0, 1)}</AvatarFallback>
      </Avatar>

      <Link
        href={link}
        target={link !== "#" ? "_blank" : undefined}
        className="mt-1 text-sm hover:underline"
      >
        {name}
      </Link>
      <p className="text-xs text-muted-foreground">&#8226; {position}</p>
    </div>
  )
}

export default ContributorSection
