import { VertSeparator } from "./VertSeparator";
import { ThemeToggle } from "./ThemeToggle";
import { IconLink } from "./IconLink";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GithubUrl, LinkedInUrl, NavbarConsts } from "../constants";

const {height} = NavbarConsts;

export const NavBar = () => {
    return (
        <div className={`w-full p-4 px-7 border-dashed border border-orange-600
            bg-primary-bg-light/85 dark:bg-primary-bg-dark/85
            z-50 max-height-[${height}] fixed`}
        >
            <div className="flex justify-between items-center">
                <div className="text-3xl">Edwin Rybarczyk</div>
                <div className="flex gap-6 text-2xl">
                    {/* Links */}
                    <div>About</div>
                    <div>Stack</div>
                    <div>Projects</div>
                    <div>Contact</div>

                    {/* Socials */}
                    <div><VertSeparator /></div>
                    <IconLink icon={faLinkedin} href={LinkedInUrl}
                        title="Connect with me on LinkedIn!"/>
                    <IconLink icon={faGithub} href={GithubUrl}
                        title="Check out my Github!"/>

                    {/* Toggle dark mode */}
                    <div><VertSeparator /></div>
                    <div><ThemeToggle /></div>
                </div>
            </div>
        </div>
    );
}
