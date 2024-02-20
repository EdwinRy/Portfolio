"use client"
import Image from "next/image";
import { PageRow } from "../_components/Layout/PageRow";
import { ListVerticalTextSwitcher } from "@components/Effects/ListVerticalTextSwitcher";
import { ParticleField } from "@components/ParticleField";

export const IntroScreen = () => {

    return (
        <>
            <PageRow id="introScreen" outerClassName="h-full transition duration-150 relative"
                innerClassName="flex items-center justify-center"
            >
                {/* <div className="flex items-center gap-6 flex-col md:flex-row z-30">
                    <div>
                        <Image src="/img/Edwin.png" alt="Edwin Rybarczyk"
                            width="250" height="250" priority={true}
                            className="rounded-3xl mx-auto w-[250px] h-[250px] object-cover" />
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-bold hidden sm:inline-block">
                            Hi, I&apos;m Edwin Rybarczyk
                        </h1>
                        <h1 className="text-3xl font-bold sm:hidden">Hi, I&apos;m Edwin</h1>
                        <div className="text-xl">
                            <ListVerticalTextSwitcher>
                                <p>Software Developer 👨‍💻</p>
                                <p>Problem solver 🤔</p>
                                <p>ML Engineer 🧠</p>
                                <p>Continuous learner 🧑‍🎓</p>
                                <p>Fencer 🤺</p>
                            </ListVerticalTextSwitcher>
                        </div>
                    </div>
                </div> */}
                {/* <div className="absolute w-full h-full z-20"></div> */}
                <ParticleField count={200} />
            </PageRow>
        </>
    );
}
