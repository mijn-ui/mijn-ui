import React from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@mijn-ui/react-avatar"
import { cn } from "@mijn-ui/react-theme"
import { getGitHubContributors } from "./get-contributors"

const ContributorSection = async () => {
  const contributors = await getGitHubContributors()

  return (
    <section className="flex w-full flex-col items-center justify-center p-2 sm:p-5 max-w-screen-lg text-center">
      <h3 className="bg-gradient-to-br from-foreground to-muted-foreground/70 bg-clip-text text-3xl/[1.2] font-bold tracking-tight text-transparent sm:text-4xl/[1.2] sm:font-extrabold w-full">
        Contributors
      </h3>
      <p className="text-muted-foreground w-full mt-1">
        We&apos;re grateful to our contributors who have shaped and strengthened
        our community. <br /> Their dedication and passion make mijnui possible.
      </p>

      <div className="w-full mt-8 gap-4 flex items-center justify-center flex-wrap">
        {contributors.map((contributor) => (
          <Contributor
            key={contributor.name}
            name={contributor.name}
            link={contributor.link}
            avatar={contributor.avatar}
            totalContributors={contributors.length}
          />
        ))}
      </div>
    </section>
  )
}

type Contributor = {
  totalContributors: number
  link: string
  name: string
  avatar?: string
}

const Contributor = ({
  link,
  name,
  avatar,
  totalContributors,
}: Contributor) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        totalContributors < 14 && "w-28",
      )}
    >
      <Avatar
        asChild
        size={
          totalContributors < 14 ? "md" : totalContributors < 32 ? "sm" : "xs"
        }
      >
        <Link href={link} target={link !== "#" ? "_blank" : undefined}>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name?.substring(0, 1)}</AvatarFallback>
        </Link>
      </Avatar>

      {totalContributors < 14 && (
        <Link
          href={link}
          target={link !== "#" ? "_blank" : undefined}
          className="mt-1 truncate w-full text-xs hover:underline hidden md:block"
        >
          {name}
        </Link>
      )}

      {/* <p className="text-xs text-muted-foreground">&#8226; {position}</p> */}
    </div>
  )
}

export default ContributorSection
