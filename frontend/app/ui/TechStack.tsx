import { SectionTitle } from "../_components/Typography/SectionTitle";
import { PageRow } from "../_components/Layout/PageRow";
import { TitledGrid } from "../_components/Layout/TitledGrid";
import { IconItemLink } from "@components/Interactive/IconItemLink";
import {
    SiDotnet,
    SiGooglebigquery, SiGooglecloud, SiJest, SiJupyter, SiKubernetes, SiLooker,
    SiMicrosoftazure, SiMongodb, SiPandas, SiPostgresql, SiPuppeteer, SiRedis,
    SiSnowflake, SiStorybook, SiTailwindcss, SiTypescript
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaGolang, FaNodeJs, FaRust } from "react-icons/fa6";
import { DiPython } from "react-icons/di";

export const TechStack = () =>
    <PageRow>
        <SectionTitle id="stack">My Tech Stack</SectionTitle>
        <div className="grid grid-cols-1 gap-6 my-8 md:mx-8 mb-24
            md:grid-cols-2 md:gap-8"
        >
            <FrontEnd />
            <BackEnd />
            <Data />
            <Other />
        </div>
    </PageRow>

const FrontEnd = () =>
    <TitledGrid title="Front-end" className="bg-bg-2-light dark:bg-bg-2-dark">
        <IconItemLink
            link="https://www.typescriptlang.org"
            icon={<SiTypescript className="text-[#4c87e6]" />}
            label="Typescript"
        />
        <IconItemLink
            link="https://nextjs.org"
            icon={<TbBrandNextjs />}
            label="Next.js"
        />
        <IconItemLink
            link="https://react.dev"
            icon={<GrReactjs className="text-[#5a94ed]" />}
            label="React.js"
        />
        <IconItemLink
            link="https://reactnative.dev"
            icon={<TbBrandReactNative className="text-[#5a94ed]" />}
            label="React Native"
        />
        <IconItemLink
            link="https://jestjs.io"
            icon={<SiJest className="text-[#df3f64]" />}
            label="Jest"
        />
        <IconItemLink
            link="https://storybook.js.org"
            icon={<SiStorybook className="text-[#c642ae]" />}
            label="Storybook"
        />
        <IconItemLink
            link="https://tailwindcss.com"
            icon={<SiTailwindcss className="text-[#4ea4ff]" />}
            label="Tailwind"
        />
        <IconItemLink
            link="https://pptr.dev"
            icon={<SiPuppeteer className="text-[#57f0ae]" />}
            label="Puppeteer"
        />
    </TitledGrid>

const BackEnd = () =>
    <TitledGrid title="Back-end" className="bg-bg-2-light dark:bg-bg-2-dark">
        <IconItemLink
            link="https://go.dev"
            icon={<FaGolang className="text-[#46cbff]" />}
            label="Go"
        />
        <IconItemLink
            link="https://www.python.org"
            icon={<DiPython className="text-[#458bee]" />}
            label="Python"
        />
        <IconItemLink
            link="https://nodejs.org"
            icon={<FaNodeJs className="text-[#34c56c]" />}
            label="Node.js"
        />
        <IconItemLink
            link="https://www.rust-lang.org"
            icon={<FaRust className="text-[#ffa600]" />}
            label="Rust"
        />
        <IconItemLink
            link="https://dotnet.microsoft.com"
            icon={<SiDotnet className="text-[#a362e0]" />}
            label=".NET"
        />
    </TitledGrid>

const Data = () =>
    <TitledGrid title="Data" className="bg-bg-2-light dark:bg-bg-2-dark">
        <IconItemLink
            link="https://www.mongodb.com"
            icon={<SiMongodb className="text-[#21ab28]" />}
            label="MongoDB"
        />
        <IconItemLink
            link="https://www.postgresql.org"
            icon={<SiPostgresql className="text-[#0077ff]" />}
            label="PostgreSQL"
        />
        <IconItemLink
            link="https://redis.io"
            icon={<SiRedis className="text-[#d82736]" />}
            label="Redis"
        />
        <IconItemLink
            link="https://cloud.google.com/looker"
            icon={<SiLooker className="text-[#00bfff]" />}
            label="Looker"
        />
        <IconItemLink
            link="https://www.snowflake.com/"
            icon={<SiSnowflake className="text-[#2fbdff]" />}
            label="Snowflake"
        />
        <IconItemLink
            link="https://cloud.google.com/bigquery"
            icon={<SiGooglebigquery className="text-[#006eff]" />}
            label="BigQuery"
        />
        <IconItemLink
            link="https://jupyter.org"
            icon={<SiJupyter className="text-[#ff9d00]" />}
            label="Jupyter"
        />
        <IconItemLink
            link="https://pandas.pydata.org"
            icon={<SiPandas className="text-[#b139fb]" />}
            label="Pandas"
        />
    </TitledGrid>

const Other = () =>

    <TitledGrid title="Other" className="bg-bg-2-light dark:bg-bg-2-dark">
        <IconItemLink
            link="https://kubernetes.io"
            icon={<SiKubernetes className="text-[#0073ff]" />}
            label="Kubernetes"
        />
        <IconItemLink
            link="https://cloud.google.com"
            icon={<SiGooglecloud className="text-[#ffbb00]" />}
            label="GCP"
        />
        <IconItemLink
            link="https://azure.microsoft.com"
            icon={<SiMicrosoftazure className="text-[#007bff]" />}
            label="Azure"
        />
    </TitledGrid>
