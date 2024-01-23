import Image from "next/image";
import { PageRow } from "./ui/PageRow";

export const IntroScreen = () => {
    return (
        <PageRow outerClassName="h-full"
            innerClassName="flex items-center justify-center"
        >
            <div className="flex items-center gap-6">
                <div>
                    <Image src="/img/Edwin.png" alt="Edwin Rybarczyk"
                        width="250" height="250"
                        className="rounded-3xl max-w-[250px] mx-auto" />
                </div>
                <div className="text-left">
                    <h1 className="text-3xl font-bold">Hi, I&apos;m Edwin Rybarczyk</h1>
                    <p className="text-xl">Fullstack Software Engineer</p>
                </div>
            </div>
        </PageRow>
    );
}
