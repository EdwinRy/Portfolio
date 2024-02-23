import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../Interactive/IconButton";
import { NavResponsiveProps } from "./NavResponsive";

interface NavOverlayMenuProps extends NavResponsiveProps {
    toggleMenu: () => void
    visible: boolean
}

export const NavOverlayMenu = (
    { toggleMenu, visible, links, socials, buttons }: NavOverlayMenuProps) =>
    visible &&
    <div className="lg:hidden fixed w-full h-full z-50
        bg-bg-1-light/95 dark:bg-bg-1-dark/95 text-2xl"
        onClick={toggleMenu}>
        <div className={`w-full p-5 px-6 max-height-[${height}] text-right mb-7`}>
            <IconButton onClick={toggleMenu} icon={faXmark} size="xl" />
        </div>
        <div className="flex gap-16 text-4xl flex-col text-center">
            <div className="flex gap-7 text-4xl flex-col text-center">
                {links}
            </div>

            <div className="flex justify-center gap-10">
                {socials("xl")}
            </div>
            <div className="mx-auto">
                {buttons}
            </div>
        </div>
    </div>
