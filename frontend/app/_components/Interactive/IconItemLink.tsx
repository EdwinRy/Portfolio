import { ReactNode } from "react"

interface IconItemProps {
    icon?: ReactNode,
    link?: string
    label: ReactNode
}

export const IconItemLink = ({label, link, icon}: IconItemProps) =>
    <a href={link} target="_blank"
        className="flex items-center gap-3 text-xl flex-nowrap text-nowrap w-fit
        p-2 hover:font-semibold duration-150 ease-in-out
    ">
        <div>{icon}</div>
        <div>{label}</div>
    </a>
