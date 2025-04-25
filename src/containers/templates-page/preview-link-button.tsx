import React from "react"
import { Button } from "@mijn-ui/react-button"
import { LuExternalLink } from "react-icons/lu"

const PreviewLinkButton = ({ href }: { href: string }) => {
  return (
    <Button size="xs" asChild className="text-xs">
      <a href={href} target="_blank" rel="noopener noreferrer">
        Preview
        <LuExternalLink />
      </a>
    </Button>
  )
}

export { PreviewLinkButton }
