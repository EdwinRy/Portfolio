"use client"

import { ThemeProvider } from "next-themes"

interface ProviderProps {
    children: React.ReactNode
}

export const Providers = ({ children } : ProviderProps) =>
    <ThemeProvider attribute="class" enableSystem={true}>
        {children}
    </ThemeProvider>

