import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { ReactNode } from "react"

interface Props {
    href: string,
    className?: string,
    target?: string,
    title?: string,
    size?: FontAwesomeIconProps['size'],
    icon: FontAwesomeIconProps['icon']
}

export const IconLink = ({ 
    icon, size="sm", href, className, target="_blank", title
}: Props) => {

    return (
        <a href={href} className={`${className}`} target={target} title={title}>
            <FontAwesomeIcon icon={icon}
                className="text-primary-text-light dark:text-primary-text-dark"
                size={size} />
        </a>
    )
}