
import { HTMLProps, ReactNode } from "react"

type Props = {
    id?: string,
    children?: ReactNode,
    outerChildren?: ReactNode | ReactNode[] | string,
    outerClassName?: HTMLProps<HTMLElement>["className"],
    innerClassName?: HTMLProps<HTMLElement>["className"],
}

export const PageRow = (
    { id="", children, outerChildren, outerClassName, innerClassName }: Props
) => {
    return (
        <div id={id} className={`${outerClassName} w-full transition duration-150
            bg-bg-1-light dark:bg-bg-1-dark`}>
            <div className={`${innerClassName} max-w-screen-xl h-full mx-auto py-5 px-8 md:px-3`}>
                {children}
            </div>
            {outerChildren}
        </div>
    )
}
