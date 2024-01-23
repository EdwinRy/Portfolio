import { ReactNode } from "react"

interface Props {
    children: ReactNode
    href: string
    className?: string
}

export const TextLink = ({ children, href, className }: Props) => {
    return (
        <a href={href} className={`${className}`}>
            {children}
        </a>
    )
}