import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

interface Props {
    href: string,
    className?: string,
    target?: string,
    title?: string,
    size?: FontAwesomeIconProps["size"],
    icon: FontAwesomeIconProps["icon"]
}

export const IconLink = ({
    icon, size="sm", href, className="", target="_blank", title,
}: Props) => {

    return (
        <a href={href} title={title} target={target}
            className={`text-2xl text-primary-text-light dark:text-primary-text-dark${className}`}
        >
            <FontAwesomeIcon icon={icon} size={size}
                className=""
            />
        </a>
    )
}
