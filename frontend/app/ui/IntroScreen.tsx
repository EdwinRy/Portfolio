import Image from "next/image";
import { PageRow } from "../_components/Layout/PageRow";
import { ListVerticalTextSwitcher } from "@components/Effects/ListVerticalTextSwitcher";

export const IntroScreen = () => {
    return (
        <PageRow id="introScreen" outerClassName="h-full transition duration-150"
            innerClassName="flex items-center justify-center"
        >
            <div className="flex items-center gap-6 flex-col md:flex-row">
                <div>
                    <Image src="/img/Edwin.png" alt="Edwin Rybarczyk"
                        width="250" height="250" priority={true}
                        className="rounded-3xl mx-auto w-[250px] h-[250px] object-cover" />
                </div>
                <div className="text-left">
                    <h1 className="text-3xl font-bold">Hi, I&apos;m Edwin Rybarczyk</h1>
                    <div className="text-xl">
                        <ListVerticalTextSwitcher>
                            <p>Fullstack Software Developer 👨‍💻</p>
                            <p>Problem solver 🤔 </p>
                            <p>Fencer 🤺</p>
                        </ListVerticalTextSwitcher>
                    </div>
                </div>
            </div>
        </PageRow>
    );
}
