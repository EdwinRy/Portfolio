import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconLink } from "../_components/IconLink";
import { PageRow } from "./PageRow";
import { VertSeparator } from "./VertSeparator";
import { GithubUrl, LinkedInUrl } from "../constants";

export const Footer = () => {
    return (
        <PageRow
            outerClassName="bg-tertiary-bg-light dark:bg-tertiary-bg-dark"
            className="text-center pb-2">
            <div className="flex">
            <VertSeparator />
            <IconLink icon={faLinkedin} href={LinkedInUrl}
                title="Connect with me on LinkedIn!"/>
            <IconLink icon={faGithub} href={GithubUrl}
                title="Check out my Github!"/>
            </div>
            <div className="text-center text-secondary-fg-light dark:text-secondary-fg-dark">
                &copy; Edwin Rybarczyk 2024
            </div>
        </PageRow>
    );
}
