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
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-square-QvThFCKnQoqBUVDJVEv4z4gzPFwug4.png",
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
