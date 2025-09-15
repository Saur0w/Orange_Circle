"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

type SplitTextInstance = {
    lines: HTMLElement[];
    revert: () => void;
};

interface TextProps {
    children: React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
}

export default function Text({
                                 children,
                                 animateOnScroll = true,
                                 delay = 0,
                             }: TextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const splitRef = useRef<SplitTextInstance[]>([]);
    const lines = useRef<HTMLElement[]>([]);

    useGSAP(
        () => {
            const container = containerRef.current;
            if (!container) return;

            splitRef.current = [];
            lines.current = [];

            // If wrapper attr is present, split each direct child; else split the container itself
            const elements: HTMLElement[] = container.hasAttribute("data-copy-wrapper")
                ? Array.from(container.querySelectorAll<HTMLElement>(":scope > *"))
                : [container];

            elements.forEach((element) => {
                const split = new SplitText(element, {
                    type: "lines",
                    linesClass: "line++",
                }) as unknown as SplitTextInstance;

                splitRef.current.push(split);

                const computedStyle = window.getComputedStyle(element);
                const textIndent = computedStyle.textIndent;

                // Apply indent to the first split line (index into the array), then reset original element indent
                if (textIndent && textIndent !== "0px" && split.lines.length > 0) {
                    // Option A: first line only
                    // split.lines.style.paddingLeft = textIndent;

                    // Option B (preferred): set all lines via GSAP to avoid direct .style on arrays
                    gsap.set(split.lines, { paddingLeft: textIndent });

                    element.style.textIndent = "0";
                }

                lines.current.push(...split.lines);
            });

            // Prepare reveal
            gsap.set(lines.current, { yPercent: 100, willChange: "transform" });

            const animationProps = {
                yPercent: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out" as gsap.EaseString,
                delay,
            };

            if (animateOnScroll) {
                gsap.to(lines.current, {
                    ...animationProps,
                    scrollTrigger: {
                        trigger: container,
                        start: "top 75%",
                        once: true,
                    },
                });
            } else {
                gsap.to(lines.current, animationProps);
            }

            // Cleanup: restore original DOM
            return () => {
                splitRef.current.forEach((split) => split?.revert());
            };
        },
        { scope: containerRef, dependencies: [animateOnScroll, delay] }
    );

    return (
        <div
            ref={containerRef}
            data-copy-wrapper={React.Children.count(children) > 1 ? "true" : undefined}
        >
            {children}
        </div>
    );
}
