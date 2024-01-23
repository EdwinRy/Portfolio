import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeContextProvider } from "./ThemeContext"

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Edwin Rybarczyk",
  description: "My portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={`${inter.className} h-full`}>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  )
}
