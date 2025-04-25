import { Inter } from "next/font/google"
import Navbar from "@/components/layout/navbar"
import "./globals.css"
import { baseUrl, createMetadata } from "@/utils/metadata"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"], fallback: ["sans serif"] })

export const metadata = createMetadata({
  title: "MijnUI",
  description:
    "A new and evolving library of reusable components built for React, HTML and Laravel.",
  metadataBase: baseUrl,
})

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
