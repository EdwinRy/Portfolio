import { useEffect, useState } from "react";

export const useViewportResizeUpdate = (timeout: number = 50) => {

    const [update, setUpdate] = useState(false);
    let resizeTimeout: NodeJS.Timeout | null = null;

    const handleResize = () => {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(() => {
            setUpdate(!update);
        }, timeout);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);

        return () => {
            window.removeEventListener("resize", handleResize, false);
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
        };
    }, [update]);

    return update;
}
