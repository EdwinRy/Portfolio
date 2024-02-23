import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    id?: string
}

export const SectionSubtitle = ({ children, id }: Props) => {

    if (typeof children == "string") {
        const title = children as string;
        id = id ?? title.toLowerCase().split(" ").join("-");
    }

    return (
        <div id={id} className="text-3xl text-center font-light
        text-accent-1-light dark:text-accent-1-dark"
        >
            {children}
        </div>
    );
}
