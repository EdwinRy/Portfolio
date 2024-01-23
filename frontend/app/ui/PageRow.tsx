
import { ReactNode } from "react"

interface Props {
    children?: ReactNode | ReactNode[] | string
    outerChildren?: ReactNode | ReactNode[] | string
    outerClassName?: string
    innerClassName?: string
    className?: string
}

export const PageRow = (
    { children, outerChildren, outerClassName, innerClassName, className }: Props
) => {
    return (
        <div className={`${outerClassName} w-full 
            border-dashed border border-green-400`}
        >
            <div className={`${innerClassName} ${className} max-w-screen-xl h-full mx-auto
                border-dashed border border-indigo-400`}
            >
                {children}
            </div>
            {outerChildren}
        </div>
    )
}
