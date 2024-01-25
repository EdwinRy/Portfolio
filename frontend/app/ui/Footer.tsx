import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconLink } from "../_components/IconLink";
import { PageRow } from "./PageRow";
import { GithubUrl, LinkedInUrl } from "../constants";
import { ScrollToTop } from "../_components/ScrollToTop";

export const Footer = () => {
    return (
        <PageRow outerClassName="bg-bg-3-light dark:bg-bg-3-dark"
            innerClassName="text-center pb-4 pt-12 flex flex-col gap-5">
            <div className="flex justify-center gap-8">
                <IconLink icon={faLinkedin} href={LinkedInUrl} size="xl"
                    title="Connect with me on LinkedIn!"/>
                <IconLink icon={faGithub} href={GithubUrl} size="xl"
                    title="Check out my Github!"/>
            </div>
            <ScrollToTop />
            <div className="text-center text-fg-2-light dark:text-fg-2-dark">
                &copy; Edwin Rybarczyk 2024
            </div>
        </PageRow>
    );
}
