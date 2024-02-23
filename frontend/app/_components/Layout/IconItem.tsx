import { ReactNode } from "react"

interface IconItemProps {
    icon?: ReactNode,
    label: ReactNode
}

export const IconItem = ({label, icon}: IconItemProps) =>
    <div className="flex items-center gap-3 text-xl">
        <div>{icon}</div>
        <div>{label}</div>
    </div>
