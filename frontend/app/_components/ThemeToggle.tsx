"use client"
import { IconButton } from "./IconButton"
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { Theme } from "../ThemeContext"
import { useTheme } from "next-themes"

export const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [theme, setLocalTheme] = useState(Theme.Light)

    useEffect(() => {
        setLocalTheme((resolvedTheme ?? "dark") as Theme)
    }, [resolvedTheme]);

    const toggleTheme = () => {
        if (theme === Theme.Dark) {
            setTheme(Theme.Light)
        } else {
            setTheme(Theme.Dark)
        }
    }

    return (
        <IconButton onClick={toggleTheme} icon={faCircleHalfStroke} size="sm"/>
    )
}
