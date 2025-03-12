import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

import { Inter } from "next/font/google"



// Load Inter from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Master Business Analysis - The Ultimate eBook Guide",
  description:
    "Transform your analytical skills and boost your career with our comprehensive guide to modern business analysis techniques.",
  openGraph: {
    title: "Master Business Analysis - The Ultimate eBook Guide",
    description:
      "Transform your analytical skills and boost your career with our comprehensive guide to modern business analysis techniques.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`} data-theme="light">
      <head />
      <body>{children}</body>
    </html>
  )
}

