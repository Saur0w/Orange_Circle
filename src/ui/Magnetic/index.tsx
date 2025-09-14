"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

// 1.  Props typing
interface MagneticProps {
    children: React.ReactNode;
}

export default function Magnetic({ children }: MagneticProps) {
    // 2.  Typed ref (the element could be null until mounted)
    const magnetic = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = magnetic.current;
        if (!element) return;

        // 3.  gsap.quickTo returns a setter function →   (value: number) => void
        const xTo = gsap.quickTo(element, "x", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });

        const yTo = gsap.quickTo(element, "y", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });

        // 4.  Typed event parameter
        const handleMouseMove = (e: MouseEvent): void => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseLeave = (): void => {
            xTo(0);
            yTo(0);
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        // 5.  Clean-up function still typed as void
        return (): void => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div ref={magnetic} style={{ display: "inline-block" }}>
            {children}
        </div>
    );
}
