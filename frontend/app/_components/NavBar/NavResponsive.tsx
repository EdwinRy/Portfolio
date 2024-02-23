import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useState } from "react";
import { IconButton } from "../Interactive/IconButton";
import { VertSeparator } from "../Typography/VertSeparator";
import { NavOverlayMenu } from "./NavOverlayMenu";
import { IconSize } from "@/app/_utils/types";

export interface NavResponsiveProps {
    links: ReactNode,
    title?: ReactNode,
    socials: (size: IconSize) => ReactNode,
    buttons: ReactNode
}

export const NavResponsive = ({title, links, socials, buttons} : NavResponsiveProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <div className={`w-full p-5 px-6 transition duration-150
                    bg-bg-1-light/85 dark:bg-bg-1-dark/85
                    z-40 fixed`}
            >
                <NavLarge title={title} links={links} socials={socials} buttons={buttons} />
                <NavSmall title={title} toggleMenu={toggleMenu} />
            </div>

            <NavOverlayMenu toggleMenu={toggleMenu} visible={menuOpen}
                links={links} socials={socials} buttons={buttons} />
        </>
    )
}

const NavLarge = ({title, links, socials, buttons} : NavResponsiveProps) =>
    <div className={`justify-between items-center lg:flex hidden max-height-[${height}]`}>
        {title}
        <div className="flex gap-6 text-2xl">
            {links}
            <div><VertSeparator /></div>
            {socials("1x")}
            <div><VertSeparator /></div>
            {buttons}
        </div>
    </div>

const NavSmall = ({title, toggleMenu}: {title: ReactNode, toggleMenu: () => void }) =>
    <div className="justify-between items-center max-w-screen-xl flex lg:hidden">
        {title}
        <div className="flex gap-6 text-2xl">
            <IconButton onClick={toggleMenu} icon={faBars} />
        </div>
    </div>
