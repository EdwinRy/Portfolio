import { ReactNode } from "react";

export const NavLink = ({ children, link }: { children: ReactNode, link?: string }) => {

    if (typeof children == "string") {
        const title = children as string;
        link = link ?? "#" + title.toLowerCase().split(" ").join("-");
    }

    return (
        <a href={link} className="hover:underline decoration-stone-500/50
            decoration-4 underline-offset-8">
            {children}
        </a>
    )
}
