import type { MetadataRoute } from "next"
import { baseUrl } from "@/utils/metadata"

export const revalidate = false

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString()

  return [
    {
      url: url("/contributors"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/react"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/tailwind"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
