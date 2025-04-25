import { Inter } from "next/font/google"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import "./globals.css"
import { baseUrl, createMetadata } from "@/utils/metadata"
import { ThemeProvider } from "next-themes"
import { NuqsAdapter } from "nuqs/adapters/next/app"

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
          <TailwindIndicator />
          <NuqsAdapter>{children}</NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  )
}
