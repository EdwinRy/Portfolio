import { SectionTitle } from "../_components/Typography/SectionTitle";
import Image from "next/image";
import { PageRow } from "../_components/Layout/PageRow";
import { SectionSubtitle } from "@components/Typography/SectionSubtitle";
import { Link } from "../_components/Interactive/Link";
import { GithubUrl } from "../constants";
import { LuBrainCircuit } from "react-icons/lu";
import { FaMobile } from "react-icons/fa6";
import { FaCogs, FaPaintBrush } from "react-icons/fa";
import { ReactNode } from "react";

export const About = () =>
    <PageRow outerClassName="bg-bg-2-light dark:bg-bg-2-dark pb-24">
        <SectionTitle id="about">About Me</SectionTitle>
        <WhoAmI />
        <WhatDoIDo />
    </PageRow>

const WhoAmI = () =>
    <div className="mx-auto w-fit pt-2 gap-x-10 gap-y-3 max-w-3xl pb-20
        grid md:grid-cols-[max-content_1fr] md:py-16 md:gap-y-8"
    >
        <SectionSubtitle>
            Who am I?
        </SectionSubtitle>
        <div></div>
        <div>
            <Image src="/img/Edwin2.jpg" alt="Edwin Rybarczyk"
                    width="175" height="175" priority={true}
                    className="rounded-full mx-auto w-[175px] h-[175px] object-cover" />
        </div>
        <div>
            <h3 className="text-2xl mb-5 text-accent-2-light dark:text-accent-2-dark">
                A software engineer experienced with full-stack, mobile apps
                and data engineering
            </h3>
            <p className="mb-4">
                I&apos;m passionate about crafting solutions that suit the business
                needs using most suitable technologies and practices to ensure product
                quality and maintainability. I have many years of experience working
                on large scale projects with high user volumes, utilising thorough
                automated testing and CI/CD deployment.
            </p>
            <p  className="mb-4">
                I have a <Link href={GithubUrl}>GitHub page</Link> where I share
                my personal projects, some of these are also listed below.
            </p>
            {/* <p>
                If you&apos;d like to connect with me, feel free to reach out
                either through <Link href={LinkedInUrl}>LinkedIn</Link>, email,
                or the <Link href="/contact">contact page</Link> on this site.
            </p> */}
        </div>
    </div>

const WhatDoIDo = () =>
    <div className="text-center pt-14 md:px-10">
        <SectionSubtitle>
            What do I do?
        </SectionSubtitle>
        <div className="grid my-8 gap-6 justify-center
            md:grid-cols-2 lg:grid-cols-4 md:gap-8
        ">
            <WhatDoIDoSection icon={<FaPaintBrush/>} label="Front-end">
                Build fast and responsive web applications with modern technologies
                such as React.js and tailwind, with automated UI testing.
            </WhatDoIDoSection>

            <WhatDoIDoSection icon={<FaCogs/>} label="Back-end">
                Design and implement scalable and maintainable back-end systems
                using industry standard such as TDD and DDD with support for CI/CD
                and containerisation.
            </WhatDoIDoSection>

            <WhatDoIDoSection icon={<FaMobile/>} label="Mobile apps">
                Use React Native, Flutter and Xamarin to build cross-platform mobile apps
                with a focus on performance and user experience.
            </WhatDoIDoSection>

            <WhatDoIDoSection icon={<LuBrainCircuit/>} label="Machine Learning">
                Develop data processing pipelines and machine learning models.
                Craft dashboards and visualisations to present insights.
            </WhatDoIDoSection>
        </div>
    </div>

const WhatDoIDoSection = (
    { icon, label, children }:
    { icon: ReactNode, label: string, children?: ReactNode }) =>
    <div className="flex flex-col items-center outline px-6 py-8 rounded-xl
        outline-2 outline-bg-1-light dark:outline-bg-1-dark
        hover:drop-shadow-xl-light
        bg-bg-2-light dark:bg-bg-2-dark
        text-fg-1-light dark:text-fg-1-dark"
    >
        <div className="text-5xl mb-5 text-fg-2-light dark:text-fg-2-dark">
            {icon}
        </div>
        <div className="font-bold mb-5">
            {label}
        </div>
        <p className="text-left">
            {children}
        </p>
    </div>

