import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

interface Props {
    href: string,
    className?: string,
    target?: string,
    title?: string,
    size?: FontAwesomeIconProps["size"],
    icon: FontAwesomeIconProps["icon"]
}

export const LinkIcon = ({
    icon, size="1x", href, className="", target="_blank", title,
}: Props) =>
        <a href={href} title={title} target={target}
            className={`text-2xl text-fg-1-light dark:text-fg-1-dark${className}`}
        >
            <FontAwesomeIcon icon={icon} size={size}
                className="text-3xl"
            />
        </a>
