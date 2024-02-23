import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { LinkIcon } from "../_components/Interactive/LinkIcon";
import { PageRow } from "../_components/Layout/PageRow";
import { GithubUrl, LinkedInUrl } from "../constants";
import { ScrollToTop } from "../_components/Interactive/ScrollToTop";

export const Footer = () => {
    return (
        <PageRow outerClassName="bg-bg-3-light dark:bg-bg-3-dark"
            innerClassName="text-center pb-4 pt-12 flex flex-col gap-5">
            <div className="flex justify-center gap-8">
                <LinkIcon icon={faLinkedin} href={LinkedInUrl} size="xl"
                    title="Connect with me on LinkedIn!"/>
                <LinkIcon icon={faGithub} href={GithubUrl} size="xl"
                    title="Check out my Github!"/>
            </div>
            <div><ScrollToTop /></div>
            <div className="text-center text-fg-2-light dark:text-fg-2-dark">
                &copy; Edwin Rybarczyk 2024
            </div>
        </PageRow>
    );
}
