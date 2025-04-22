import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement>

export type Contributor = {
  id: string
  name: string
  link: string
  avatar?: string
  position: string
}

export type Template = {
  id: string
  name: string
  status?: string
  description: string
  images: {
    light: string
    dark: string
  }
  technology: string
  previewURL: string
  githubURL: string
}
