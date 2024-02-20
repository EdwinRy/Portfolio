"use client"
import Image from "next/image";
import { PageRow } from "../_components/Layout/PageRow";
import { ListVerticalTextSwitcher } from "@components/Effects/ListVerticalTextSwitcher";
import { ParticleField } from "@components/ParticleField";
import { useTheme } from "next-themes";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";


export const IntroScreen = () => {

    const { resolvedTheme } = useTheme()
    const isDark = resolvedTheme === "dark";
    const postProcessing = isDark;
    const particleColour = isDark ? "white" : "black";
    const hasWebGL = WebGL.isWebGLAvailable();

    return (
        <>
            <PageRow id="introScreen" outerClassName="h-full transition duration-150 relative"
                innerClassName="flex items-center justify-center"
            >
                <div className={`flex items-center gap-6 flex-col md:flex-row z-30 p-10 rounded-3xl 
                    ${ hasWebGL && "backdrop-blur-sm bg-bg-2-light/40 dark:bg-bg-2-dark/40"}
                `}>
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
                </div>
                {hasWebGL && <div className="absolute w-full h-full z-20"></div>}
                {hasWebGL && <ParticleField
                    count={200}
                    particleColour={particleColour}
                    postProcessing={postProcessing}/>}
            </PageRow>
        </>
    );
}
