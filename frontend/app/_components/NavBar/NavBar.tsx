"use client"
import { ThemeToggle } from "../Interactive/ThemeToggle";
import { LinkIcon } from "../Interactive/LinkIcon";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GithubUrl, LinkedInUrl } from "../../constants";
import { NavLink } from "./NavLink";
import { NavResponsive } from "./NavResponsive";
import { IconSize } from "@/app/_utils/types";

export const NavBar = () => {
    const links =
        <>
            <NavLink link="/">Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Stack</NavLink>
            {/* <NavLink>Projects</NavLink> */}
            <NavLink link="/contact">Contact</NavLink>
        </>;

    const socials = (size: IconSize) =>
        <>
            <LinkIcon icon={faGithub} href={GithubUrl}
                title="Check out my Github!" size={size} />
            <LinkIcon icon={faLinkedin} href={LinkedInUrl}
                title="Connect with me on LinkedIn!" size={size} />
        </>;

    const buttons =
        <ThemeToggle />

    return <NavResponsive links={links} socials={socials} buttons={buttons} />
}
