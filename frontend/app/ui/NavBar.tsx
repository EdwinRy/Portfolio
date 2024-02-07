"use client"
import { VertSeparator } from "../_components/VertSeparator";
import { ThemeToggle } from "../_components/ThemeToggle";
import { IconLink } from "../_components/IconLink";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GithubUrl, LinkedInUrl, NavbarConsts } from "../constants";
import { IconButton } from "../_components/IconButton";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const {height} = NavbarConsts;

const NavLarge = () =>
    <div className={`justify-between items-center lg:flex hidden max-height-[${height}]`}>
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
                title="Connect with me on LinkedIn!" />
            <IconLink icon={faGithub} href={GithubUrl}
                title="Check out my Github!" />

            {/* Toggle dark mode */}
            <div><VertSeparator /></div>
            <div><ThemeToggle /></div>
        </div>
    </div>

const NavSmall = (props: {toggleMenu: () => void}) =>
    <div className="justify-between items-center max-w-screen-xl flex lg:hidden">
        <div className="text-3xl">Edwin Rybarczyk</div>
        <div className="flex gap-6 text-2xl">
            <IconButton onClick={props.toggleMenu} icon={faBars}/>
        </div>
    </div>

const NavMenu = (props: {toggleMenu: () => void}) =>
    <div className="fixed w-full h-full z-50 bg-bg-1-light/95 dark:bg-bg-1-dark/95 text-2xl"
        onClick={props.toggleMenu}>
        <div className={`w-full p-5 px-6 max-height-[${height}] text-right mb-7`}>
            <IconButton onClick={props.toggleMenu} icon={faXmark} size="xl"/>
        </div>
        <div className="flex gap-16 text-4xl flex-col text-center">
            <div className="flex gap-7 text-4xl flex-col text-center">
                <div>About</div>
                <div>Stack</div>
                <div>Projects</div>
                <div>Contact</div>
            </div>

            <div className="flex justify-center gap-10">
                <IconLink icon={faLinkedin} href={LinkedInUrl} size="xl"
                    title="Connect with me on LinkedIn!" />
                <IconLink icon={faGithub} href={GithubUrl} size="xl"
                    title="Check out my Github!" />
            </div>
            <div><ThemeToggle/></div>
        </div>
    </div>

export const NavBar = () =>
{
    const [menuOpen, setMenuOpen] = useState(true);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <div className={`w-full p-5 px-6
                    bg-bg-1-light/85 dark:bg-bg-1-dark/85
                    z-40 fixed`}
            >
                <NavLarge />
                <NavSmall toggleMenu={toggleMenu}/>
            </div>
            {menuOpen && <NavMenu toggleMenu={toggleMenu}/>}
        </>
    )
}
