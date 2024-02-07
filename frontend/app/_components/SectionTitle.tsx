
type Props = {
    children: string,
}

export const SectionTitle = ({children} : Props) =>
    <div className="w-full text-center p-5">
        <div className="text-3xl underline decoration-stone-500/50 decoration-4 underline-offset-8">
            {children}
        </div>
    </div>
