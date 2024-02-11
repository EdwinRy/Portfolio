"use client";
import "./ListSwitcher.css";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ReactNode } from "react";

interface ListSwitcherProps {
    children: Iterable<ReactNode>,
    height?: string,
}

export const ListVerticalTextSwitcher = (
    { children, height="-28px" }: ListSwitcherProps
) => {

    const style = {
        "--shiftItemHeight": height,
    }

    const childCount = React.Children.count(children);
    // const [currentChild, setCurrentChild ] = useState(0);

    const [childArray, setChildArray] = useState(React.Children.toArray(children));
    const containerRef = React.createRef<HTMLDivElement>();

    useLayoutEffect(() => {
        const t1 = setTimeout(() => {
            if (containerRef.current) {
                containerRef.current.classList.add("shiftListContainerActive");
            }
        }, 1000);

        const t2 = setTimeout(() => {
            console.log("switch")
            if (containerRef.current) {
                containerRef.current.classList.remove("shiftListContainerActive");
            }
            setChildArray(childArray.slice(1).concat(childArray.slice(0, 1)));
        }, 4000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        }

    }, [childArray]);

    useEffect(() => { console.log('mounted'); }, [])

    console.log(childCount, childArray)

    return (
        <div className="shiftOuter">
            <div className="shiftListContainer" ref={containerRef} style={style as any}>
                {childArray.map((child, i) =>
                    // <SwitcherItem key={i} child={child} ref={childRefs[i]} />
                    <div key={i} className="">
                        {child}
                    </div>
                )}
            </div>
        </div>
    );
}
