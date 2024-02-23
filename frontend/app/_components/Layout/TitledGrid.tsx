import { ReactNode } from "react";

interface TitledGridProps {
    children: ReactNode,
    title: string
    className?: string
}

export const TitledGrid = ({ children, title, className }: TitledGridProps) => {
    return (
        <div className={`${className} rounded-xl p-10 pb-12 duration-200 ease-in-out
            dark:hover:drop-shadow-md-dark hover:drop-shadow-md-light`}
        >
            <div className="text-2xl mb-6 font-light text-fg-4-light dark:text-fg-4-dark">
                {title}
            </div>
            <div className="flex flex-wrap w-auto justify-start gap-3 gap-x-5">
                {children}
            </div>
        </div>
    );
}
