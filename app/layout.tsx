import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ToastProvider } from "@/components/toast-provider"
import GoogleAnalytics from "@/components/google-analytics"
import Script from "next/script"
import { Suspense } from "react"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Autonomica — Applied AI lab building companies that run themselves",
  description:
    "Applied AI lab: custom agent creation and deployment (research, competition, content, website ops) and distributed batch AI. Production systems only — no pilots.",
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
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Suspense>
            {children}
            <ToastProvider />
            <GoogleAnalytics />
          </Suspense>
        </ThemeProvider>
        <Script
          defer
          data-domain="autonomica.xyz"
          src="https://analytics.cypherpunk.cloud/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
