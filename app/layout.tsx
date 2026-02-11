import type React from "react"
import type { Metadata } from "next"
import { Syne, Figtree, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ToastProvider } from "@/components/toast-provider"
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
})

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Autonomica — The Business That Builds Itself",
  description:
    "Autonomica is an experimental company building tools, blueprints, and products to create the world's first fully AI-operated business.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${figtree.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Suspense>
            {children}
            <ToastProvider />
            <GoogleAnalytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
