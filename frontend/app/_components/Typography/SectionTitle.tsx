import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    id?: string
}

export const SectionTitle = ({ children, id }: Props) => {

    if (typeof children == "string") {
        const title = children as string;
        id = id ?? title.toLowerCase().split(" ").join("-");
    }

    return (
        <div id={id} className="w-full text-center p-5 scroll-m-20">
            <div className="text-3xl underline
                decoration-stone-500/50 decoration-4 underline-offset-8">
                {children}
            </div>
        </div>
    );
}
