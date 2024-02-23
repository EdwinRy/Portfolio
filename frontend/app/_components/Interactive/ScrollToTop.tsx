
"use client"
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";
import { IconButton } from "./IconButton";

export const ScrollToTop = () =>
    <IconButton icon={faSpaceAwesome} size="4x" title="Back to top"
        iconClassName="hover:rocketBounce p-5
        dark:drop-shadow-2xl-dark drop-shadow-2xl-light"
        onClick={() => {
            console.log("here")
            document.getElementById("introScreen")
                ?.scrollIntoView({ block: "start", behavior: "smooth" });}}
    />
