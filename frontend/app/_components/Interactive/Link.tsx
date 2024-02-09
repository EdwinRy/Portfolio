import { ReactNode } from "react"

interface LinkProps {
    href: string,
    children: ReactNode
}

export const Link = ({href, children}: LinkProps) =>
    <a href={href} target="_blank" className="italic
        hover:font-bold
        text-accent-3-light dark:text-accent-3-dark">
        {children}
    </a>
