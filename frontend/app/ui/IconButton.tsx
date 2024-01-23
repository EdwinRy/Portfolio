import { ReactNode } from "react"

type Props = {
    children: ReactNode
    onClick?: () => void
    className?: string
}

export const IconButton = ({children, onClick, className}: Props) => {
    return (
        <button onClick={onClick} className={`${className} w-8`}>
            {children}
        </button>
    )
}
