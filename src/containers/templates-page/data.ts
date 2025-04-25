import { TechnologyGroup } from "@/types"

export type Template = {
  id: string
  name: string
  status?: string
  description: string
  cover: {
    light: string
    dark: string
  }
  images: { light: string[]; dark: string[] }
  technologies: string[]
  previewURL: string
  githubURL: string
}

type Templates = {
  group: TechnologyGroup
  items: Template[]
}

export const TemplateGroups: Array<TechnologyGroup> = [
  "react",
  "tailwind",
  "laravel",
] as const

export const Templates: Templates[] = [
  {
    group: "react",
    items: [
      {
        id: "1",
        name: "RAG AI Chatbot Template",
        status: "beta",
        description:
          "A template for creating a chatbot that can answer questions using a knowledge base.",
        cover: {
          light: "/images/templates/rag-chat/light/cover.png",
          dark: "/images/templates/rag-chat/dark/cover.png",
        },
        images: {
          light: [
            "/images/templates/rag-chat/light/01.png",
            "/images/templates/rag-chat/light/02.png",
            "/images/templates/rag-chat/light/03.png",
          ],
          dark: [
            "/images/templates/rag-chat/dark/01.png",
            "/images/templates/rag-chat/dark/02.png",
            "/images/templates/rag-chat/dark/03.png",
          ],
        },
        technologies: [
          "Next.js v15",
          "React.js v19",
          "next-auth v5",
          "next-themes v0.4",
          "Tailwind.css v3.4",
          "react-query v5",
          "react-hook-form v7",
          "zod v3",
          "mijn-ui v0.1.0",
        ],
        previewURL: "https://mijnui-ai-chat-template.vercel.app",
        githubURL: "https://github.com/mijn-ui/ai-chat-template",
      },
      {
        id: "2",
        name: "ERP Template",
        status: "beta",
        description:
          "A template for creating a point of sale system for an ERP application.",
        cover: {
          light: "/images/templates/erp/light/cover.png",
          dark: "/images/templates/erp/dark/cover.png",
        },
        images: {
          light: [
            "/images/templates/erp/light/01.png",
            "/images/templates/erp/light/02.png",
            "/images/templates/erp/light/03.png",
          ],
          dark: [
            "/images/templates/erp/dark/01.png",
            "/images/templates/erp/dark/02.png",
            "/images/templates/erp/dark/03.png",
          ],
        },
        technologies: [
          "Next.js v15",
          "React.js v19",
          "next-themes v0.4",
          "mijn-ui v0.1.0",
        ],
        previewURL: "https://mijnui-erp-template.vercel.app",
        githubURL: "https://github.com/mijn-ui/erp-template",
      },
      {
        id: "3",
        name: "Dashboard Template",
        status: "beta",
        description:
          "A template for creating a dashboard for an ERP application.",
        cover: {
          light: "/images/templates/dashboard/light/cover.png",
          dark: "/images/templates/dashboard/dark/cover.png",
        },
        images: {
          light: [
            "/images/templates/dashboard/light/01.png",
            "/images/templates/dashboard/light/02.png",
            "/images/templates/dashboard/light/03.png",
          ],
          dark: [
            "/images/templates/dashboard/dark/01.png",
            "/images/templates/dashboard/dark/02.png",
            "/images/templates/dashboard/dark/03.png",
          ],
        },
        technologies: [
          "next.js",
          "next-auth v5",
          "next-themes v0.4",
          "react-hook-form v7",
          "mijn-ui v0.1.0",
        ],
        previewURL: "https://mijnui-dashboard-template.vercel.app",
        githubURL: "https://github.com/mijn-ui/dashboard-template",
      },
    ],
  },
  {
    group: "tailwind",
    items: [],
  },
  {
    group: "laravel",
    items: [],
  },
]
