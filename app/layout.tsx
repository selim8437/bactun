import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AppHeader } from "@/components/app-header"
import { AppFooter } from "@/components/app-footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cours Bac Tunisie",
  description: "Accédez gratuitement à tous les cours et matériels d'apprentissage pour votre année scolaire",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3841950769318476"
     crossOrigin="anonymous"></script></head>
      <body className={`font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <AppHeader />
          <main className="flex-1">{children}</main>
          <AppFooter />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
