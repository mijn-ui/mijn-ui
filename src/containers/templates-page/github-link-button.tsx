import React from "react"
import { Button } from "@mijn-ui/react-button"
import { FaGithub } from "react-icons/fa"

const GithubLinkButton = ({ href }: { href: string }) => {
  return (
    <Button asChild size="xs" className="text-xs" variant="outlined">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <FaGithub />
        Github
      </a>
    </Button>
  )
}

export { GithubLinkButton }
