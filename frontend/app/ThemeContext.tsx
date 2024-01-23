"use client";
import { createContext, useState, useMemo } from "react";

export enum Theme {
    Dark = "dark",
    Light = "light",
}

interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<Theme>(Theme.Dark);

    const memoisedTheme = useMemo(() => {
        return {
            theme,
            setTheme,
        };
    }, [theme])

    return (
        <ThemeContext.Provider value={memoisedTheme}>
            <div className={`${theme} h-full`}>
                <div className={`h-full overflow-auto
                    bg-primary-bg-light dark:bg-primary-bg-dark
                    text-primary-fg-light dark:text-primary-fg-dark`}
                >
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    )
}

