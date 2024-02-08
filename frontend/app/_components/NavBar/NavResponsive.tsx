import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useState } from "react";
import { IconButton } from "../Interactive/IconButton";
import { VertSeparator } from "../Typography/VertSeparator";
import { NavOverlayMenu } from "./NavOverlayMenu";
import { IconSize } from "@/app/_utils/types";

export interface NavResponsiveProps {
    links: ReactNode,
    socials: (size: IconSize) => ReactNode,
    buttons: ReactNode
}

export const NavResponsive = ({links, socials, buttons} : NavResponsiveProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <div className={`w-full p-5 px-6
                    bg-bg-1-light/85 dark:bg-bg-1-dark/85
                    z-40 fixed`}
            >
                <NavLarge links={links} socials={socials} buttons={buttons} />
                <NavSmall toggleMenu={toggleMenu} />
            </div>

            <NavOverlayMenu toggleMenu={toggleMenu} visible={menuOpen}
                links={links} socials={socials} buttons={buttons} />
        </>
    )
}

const HomeButton =
    <div className="text-3xl">
        <a className="hidden sm:block hover:underline decoration-stone-500/50
            decoration-4 underline-offset-8" href="/">Edwin Rybarczyk</a>
        <a className="block sm:hidden hover:underline decoration-stone-500/50
            decoration-4 underline-offset-8" href="/">Edwin R.</a>
    </div>

const NavLarge = ({links, socials, buttons} : NavResponsiveProps) =>
    <div className={`justify-between items-center lg:flex hidden max-height-[${height}]`}>
        {HomeButton}
        <div className="flex gap-6 text-2xl">
            {links}
            <div><VertSeparator /></div>
            {socials("1x")}
            <div><VertSeparator /></div>
            {buttons}
        </div>
    </div>

const NavSmall = (props: { toggleMenu: () => void }) =>
    <div className="justify-between items-center max-w-screen-xl flex lg:hidden">
        {HomeButton}
        <div className="flex gap-6 text-2xl">
            <IconButton onClick={props.toggleMenu} icon={faBars} />
        </div>
    </div>
