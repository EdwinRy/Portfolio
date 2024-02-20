"use client";
import { useEffect, useState } from "react";

export const useViewport = (timeout: number = 50) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    let resizeTimeout: NodeJS.Timeout | null = null;

    const handleResize = () => {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(() => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
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
    }, [width, height]);


    return { width, height };
}
