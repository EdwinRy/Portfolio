import { ReactNode } from "react";
import { SectionTitle } from "../_components/SectionTitle";
import { PageRow } from "./PageRow";

const TechStackItem = ({children}: {children: ReactNode}) =>
    <div>{children}</div>

const TechStackSection = ({title, children}: {title: string, children: ReactNode}) =>
    <div className="border border-dashed rounded-xl border-orange-500 mx-16 p-8">
        <div className="text-2xl underline mb-5">
            {title}
        </div>
        <div className="grid grid-cols-3">
            {children}
        </div>
    </div>

export const TechStack = () =>
    <PageRow >
        <SectionTitle>My Tech Stack</SectionTitle>
        <TechStackSection title="Front-end">
            <TechStackItem>TypeScript</TechStackItem>
            <TechStackItem>Next.js</TechStackItem>
            <TechStackItem>React.js</TechStackItem>
            <TechStackItem>React Native</TechStackItem>
            <TechStackItem>Jest</TechStackItem>
            <TechStackItem>Storybook</TechStackItem>
            <TechStackItem>Tailwind</TechStackItem>
            <TechStackItem>Puppeteer</TechStackItem>
            <TechStackItem>Razer</TechStackItem>
        </TechStackSection>
        <TechStackSection title="Back-end">
            <TechStackItem>Go</TechStackItem>
            <TechStackItem>Python</TechStackItem>
            <TechStackItem>Node.js</TechStackItem>
            <TechStackItem>Rust</TechStackItem>
        </TechStackSection>
        <TechStackSection title="Data">
            <TechStackItem>MongoDB</TechStackItem>
            <TechStackItem>PostgreSQL</TechStackItem>
            <TechStackItem>Redis</TechStackItem>
            <TechStackItem>Firestore</TechStackItem>
            <TechStackItem>Looker</TechStackItem>
            <TechStackItem>Snowflake</TechStackItem>
            <TechStackItem>BigQuery</TechStackItem>
        </TechStackSection>
        <TechStackSection title="Other">
            <TechStackItem>Kubernetes</TechStackItem>
            <TechStackItem>GCP</TechStackItem>
            <TechStackItem>Azure</TechStackItem>
        </TechStackSection>
    </PageRow>

