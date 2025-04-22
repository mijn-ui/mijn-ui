import { Template } from "@/types"

export const Templates: Template[] = [
  {
    id: "1",
    name: "RAG AI Chatbot Template",
    status: "beta",
    description:
      "A template for creating a chatbot that can answer questions using a knowledge base.",
    images: {
      light: "/images/templates/rag-chat-light.png",
      dark: "/images/templates/rag-chat-dark.png",
    },
    technology: "next.js",
    previewURL: "https://mijnui-ai-chat-template.vercel.app",
    githubURL: "https://github.com/mijn-ui/ai-chat-template",
  },
  {
    id: "2",
    name: "ERP Template",
    status: "beta",
    description:
      "A template for creating a point of sale system for an ERP application.",
    images: {
      light: "/images/templates/erp-light.png",
      dark: "/images/templates/erp-dark.png",
    },
    technology: "next.js",
    previewURL: "https://mijnui-erp-template.vercel.app",
    githubURL: "https://github.com/mijn-ui/erp-template",
  },
  {
    id: "3",
    name: "Dashboard Template",
    status: "beta",
    description: "A template for creating a dashboard for an ERP application.",
    images: {
      light: "/images/templates/dashboard-light.png",
      dark: "/images/templates/dashboard-dark.png",
    },
    technology: "next.js",
    previewURL: "https://mijnui-dashboard-template.vercel.app",
    githubURL: "https://github.com/mijn-ui/dashboard-template",
  },
]
