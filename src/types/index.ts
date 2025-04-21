import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement>

export type Contributor = {
  id: string
  name: string
  avatar?: string
  link: string
  url: string
  contributedTo: string
}
