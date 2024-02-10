"use client"
import { ThemeToggle } from "../Interactive/ThemeToggle";
import { LinkIcon } from "../Interactive/LinkIcon";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GithubUrl, LinkedInUrl } from "../../constants";
import { NavLink } from "./NavLink";
import { NavResponsive } from "./NavResponsive";
import { IconSize } from "@/app/_utils/types";

export const NavBar = () => {
    const title =
    <div className="text-3xl">
        <a className="hidden sm:block hover:underline decoration-stone-500/50
            decoration-4 underline-offset-8" href="/">
            <h1>Edwin Rybarczyk</h1>
        </a>
        <a className="block sm:hidden hover:underline decoration-stone-500/50
            decoration-4 underline-offset-8" href="/">
            <h1>Edwin R.</h1>
        </a>
    </div>

    const links =
        <>
            <NavLink link="/">Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Stack</NavLink>
            {/* <NavLink>Projects</NavLink> */}
            {/* <NavLink link="/contact">Contact</NavLink> */}
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

    return <NavResponsive title={title} links={links} socials={socials} buttons={buttons} />
}
