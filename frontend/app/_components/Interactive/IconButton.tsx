"use client"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { HTMLProps } from "react"

type Props = {
    onClick?: () => void
    className?: HTMLProps<HTMLElement>["className"],
    iconClassName?: HTMLProps<HTMLElement>["className"],
    size?: FontAwesomeIconProps["size"],
    icon: FontAwesomeIconProps["icon"]
    title?: string,
}

export const IconButton = ({
    onClick, className="", iconClassName="", title, icon, size="1x",
}: Props) => {
    return (
        <button className={`${className} group inline-block`}
            title={title} onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} size={size}
                className={`${iconClassName} text-3xl`}
            />
        </button>
    )
}
