"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./style.module.scss";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(SplitText, Flip, ScrollTrigger);

type SplitTextInstance = {
    lines: HTMLElement[];
    revert: () => void;
};

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();

    useGSAP(
        () => {
            if (pathname !== "/about") return;
            if (!textRef.current || !imagesRef.current) return;

            // Split text into lines (use array, not NodeList)
            const textElements = Array.from(
                textRef.current.querySelectorAll("h1, h2, p")
            );
            const split = new SplitText(textElements, {
                type: "lines",
                linesClass: styles.line,
            }) as unknown as SplitTextInstance;

            // Main timeline
            const mainTl = gsap.timeline();

            // Text reveal
            mainTl.from(split.lines, {
                delay: 1.5,
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
            });

            // Collect image elements as an array
            const images = Array.from(
                imagesRef.current.querySelectorAll(`.${styles.img}`)
            ) as HTMLElement[];

            // Ensure classes start in the correct state
            images.forEach((img) => img.classList.remove(styles.animateOut));

            // FLIP: capture, change, animate
            requestAnimationFrame(() => {
                const state = Flip.getState(images);
                images.forEach((img) => img.classList.add(styles.animateOut));

                const flipAnimation = Flip.from(state, {
                    duration: 1.5,
                    ease: "power3.inOut",
                    stagger: 0.05,
                });

                // Add flip to the main timeline
                mainTl.add(flipAnimation, 0);

                // After FLIP, arrange first three as cards
                mainTl.add(() => {
                    const firstThreeCards = images.slice(0, 3);

                    gsap.to(firstThreeCards, {
                        duration: 1.2,
                        ease: "power3.out",
                        stagger: { amount: 0.6, from: "start" },
                        x: (index: number) => {
                            const spacing = 250;
                            const startX = -spacing;
                            return startX + index * spacing;
                        },
                        y: (index: number) => index * -10,
                        rotation: (index: number) => (index - 1) * 5,
                        scale: 0.9,
                        zIndex: (index: number) => 10 - index,
                        transformOrigin: "center center",
                    });

                    // Floating motion on the first three
                    gsap.to(firstThreeCards, {
                        duration: 2,
                        delay: 0.8,
                        y: "+=15",
                        ease: "power2.inOut",
                        yoyo: true,
                        repeat: -1,
                        stagger: { amount: 0.1, from: "start" },
                    });

                    // Subtle motion for the remaining stack
                    const remainingCards = images.slice(3);
                    gsap.to(remainingCards, {
                        duration: 0.8,
                        delay: 0.4,
                        y: "-=20",
                        ease: "power2.out",
                        stagger: 0.02,
                    });
                }, "+=0.02");
            });
        },
        { scope: sectionRef, dependencies: [pathname] }
    );

    const imageList: string[] = [
        "c2.jpg",
        "google.jpg",
        "funny.jpg",
        "decimal.jpg",
        "locomotive.png",
        "powell.jpg",
        "sustainability.jpg",
        "maven.jpg",
        "landing/sky.jpg",
        "landing/main.jpg",
        "landing/maintenance.jpg",
        "panda.jpg",
        "maven.jpg",
        "officestudio.png",
        "wix.jpg",
    ];

    return (
        <section className={styles.about} ref={sectionRef}>
            <div className={styles.imagesContainer} ref={imagesRef}>
                {imageList.map((src: string, index: number) => {
                    const file = src.split("/").pop() ?? "";
                    const altText = file.replace(/\.[^/.]+$/, "");
                    return (
                        <div key={`${src}-${index}`} className={`${styles.img} img-${index}`}>
                            <Image
                                src={`/images/${src}`}
                                alt={altText}
                                width={500}
                                height={300}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    );
                })}
            </div>

            <div className={styles.text} ref={textRef}>
                <div className={styles.heading}>
                    <h1>Engineering Bright Futures with Smart Solar Solutions</h1>
                </div>
                <div className={styles.siteInfo}>
                    <h2>Empowering sustainable growth through solar engineering, design, and execution</h2>
                </div>
                <div className={styles.siteInfoFooter}>
                    <p>Orange Circle – Innovative Solar EPC Solutions</p>
                    <p>Founded in 2024</p>
                </div>
            </div>
        </section>
    );
}
