"use client"

import Link from "next/link"
import { Title } from "@/components/ui/typography"
import Footer from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import ThemeToggler from "@/components/theme-toggler"
import { TemplateShowcase } from "./template-showcase"
import { LuArrowLeft } from "react-icons/lu"

const TemplatePage = () => {
  return (
    <>
      <Navbar className="border-b-border">
        <div className="flex items-center gap-1">
          <Link
            href={"/"}
            className="md:hidden text-sm text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
          <ThemeToggler />
        </div>
      </Navbar>
      <main className="w-full min-h-screen flex justify-center pt-32 pb-20 md:text-start text-center">
        <div className="w-full max-w-screen-xl px-5">
          <Link
            href={"/"}
            className="md:flex hidden text-sm items-center gap-1 w-fit underline mb-2 text-secondary hover:text-foreground"
          >
            <LuArrowLeft />
            Go Back Home
          </Link>
          <Title>Templates</Title>
          <p className="text-muted-foreground max-w-screen-md px-2 text-small md:text-medium">
            These templates are currently in beta. They showcase the
            capabilities of our components and design system. More templates are
            coming soon, but we recommend not using them in production
            environments yet.
          </p>

          <TemplateShowcase />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TemplatePage
