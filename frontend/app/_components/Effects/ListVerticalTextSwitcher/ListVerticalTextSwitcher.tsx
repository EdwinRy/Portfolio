"use client";
import "./ListSwitcher.css";
import React, { useEffect, useState } from "react";
import { ReactNode } from "react";

interface ListSwitcherProps {
    children: Iterable<ReactNode>,
    height?: string,
}

// Todo: make this more generic
export const ListVerticalTextSwitcher = (
    { children, height="-28px" }: ListSwitcherProps
) => {

    const style = {
        "--shiftItemHeight": height,
    }

    const [childArray, setChildArray] = useState(React.Children.toArray(children));
    const [animActive, setAnimActive] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => {
            setAnimActive(true);
        }, 4500);

        const t2 = setTimeout(() => {
            setAnimActive(false);
            setChildArray(childArray.slice(1).concat(childArray.slice(0, 1)));
        }, 6000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        }

    }, [childArray]);

    const shifterClass = animActive
        ? "shiftListContainer shiftListContainerActive"
        : "shiftListContainer";

    return (
        <div className="shiftOuter">
            <div className={shifterClass} style={style as any}>
                {childArray.map((child, i) =>
                    <div key={i} className="">
                        {child}
                    </div>
                )}
            </div>
        </div>
    );
}
