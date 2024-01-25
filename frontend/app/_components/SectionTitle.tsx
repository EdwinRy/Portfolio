
type Props = {
    children: string,
}

export const SectionTitle = ({children} : Props) =>
    <div className="w-full text-center p-5">
        <div className="text-3xl">
            {children}
        </div>
    </div>
