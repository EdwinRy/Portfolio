import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Providers } from "./providers";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Edwin Rybarczyk | Software Developer",
  description: "Edwin Rybarczyk software developer website",
  keywords: ["Edwin", "EdwinRy", "Developer", "Software", "Edwin Rybarczyk", "Fullstack"],
  creator: "Edwin Rybarczyk",
  publisher: "Edwin Rybarczyk",
  metadataBase: new URL("https://edwinry.com"),
  openGraph: {
    title: "Edwin Rybarczyk | Software Developer",
    description: "Edwin Rybarczyk software developer website",
    url: "https://edwinry.com",
    siteName: "Edwin Rybarczyk",
    images: [
      {
        url: "https://edwinry.com/img/Edwin.png",
        width: 250,
        height: 250,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full' suppressHydrationWarning>
      <body className={`${inter.className} h-full`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
