import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/navbar"
import "./css/globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"], fallback: ["sans serif"] })

export const metadata: Metadata = {
  title: "MijnUI",
  description: "Component Library for React, Laravel, HTML",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
