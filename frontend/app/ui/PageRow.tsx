
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
        <div id={id} className={`${outerClassName} w-full
            bg-bg-1-light dark:bg-bg-1-dark`}
        >
            <div className={`${innerClassName} max-w-screen-xl h-full mx-auto`}>
                {children}
            </div>
            {outerChildren}
        </div>
    )
}
