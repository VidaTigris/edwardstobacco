import type React from "react"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "Edward's Pipe & Tobacco | A Tampa Landmark Since 1960",
  description:
    "Supplying Pipes, Tobacco, Cigars, Smokers Accessories and Gift Items since 1960. Visit our Tampa location at 3235 Henderson Blvd.",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon.ico-wC1MZURAmoGWTIxF9PDHMsPXErH6zT.x-icon",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-m6KLmyWl6XiHtlF1vCJEDJ3ggaeWfc.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-mI33T03hI7MOrXdEmXEIqKqqaVx311.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-3VQt7pQEDBFc6GWWjvDKBffxZKFulA.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "android-chrome-192x192",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-cFf2tRrcpzClCWwrQajXT6kh442TlT.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-DuSKH5KLPQZ19vWDNagsAbeAm1cz7y.png",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
