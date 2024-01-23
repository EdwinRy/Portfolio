"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButton } from "./IconButton"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { Theme, ThemeContext } from "../ThemeContext"

export const ThemeToggle = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        if (theme === Theme.Dark) {
            setTheme(Theme.Light)
        } else {
            setTheme(Theme.Dark)
        }
    }

    return (
        <IconButton onClick={toggleTheme}>
            {theme === Theme.Dark && (
                <FontAwesomeIcon icon={faSun}
                    className="text-amber-300" size="sm" />
            )}
            {theme === Theme.Light && (
                <FontAwesomeIcon icon={faMoon}
                    className="text-gray-500" size="sm" />
            )}
        </IconButton>
    )
}