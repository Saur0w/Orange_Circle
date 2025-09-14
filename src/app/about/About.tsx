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

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);

    const floatingImages: string[] = [  // These will animate differently
        'locomotive.png',
        'officestudio.png',
        'landing/main.jpg',
    ];

    const pathname = usePathname();

    useGSAP(() => {
        if (pathname !== "/about") return;
        if (!textRef.current || !imagesRef.current) return;

        // Text animation
        const elements = textRef.current.querySelectorAll("h1, h2, p");
        const split = new SplitText(elements, {
            type: "lines",
            linesClass: styles.line,
        });

        // Create main timeline
        const mainTl = gsap.timeline();

        // Text animation
        mainTl.from(split.lines, {
            delay: 1.5,
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
        });

        const images = imagesRef.current.querySelectorAll(`.${styles.img}`);
        images.forEach((img) => img.classList.remove(styles.animateOut));

        // Initial Flip animation
        requestAnimationFrame(() => {
            const state = Flip.getState(images);
            images.forEach((img) => img.classList.add(styles.animateOut));

            const flipAnimation = Flip.from(state, {
                duration: 1.5,
                ease: "power3.inOut",
                stagger: 0.05,
            });

            // Add flip animation to timeline
            mainTl.add(flipAnimation, 0);

            // After flip completes, animate first 3 cards horizontally
            mainTl.call(() => {
                const firstThreeCards = Array.from(images).slice(0, 3);

                // Animate the first 3 cards to horizontal positions
                gsap.to(firstThreeCards, {
                    duration: 1.2,
                    ease: "power3.out",
                    stagger: {
                        amount: 0.6,
                        from: "start"
                    },
                    x: (index: number) => {
                        // Calculate horizontal positions
                        const spacing = 250; // Adjust spacing between cards
                        const startX = -spacing; // Start position for first card
                        return startX + (index * spacing);
                    },
                    y: (index: number) => {
                        // Slight vertical offset for visual appeal
                        return index * -10;
                    },
                    rotation: (index: number) => {
                        // Slight rotation for card effect
                        return (index - 1) * 5;
                    },
                    scale: 0.9, // Slightly smaller for card effect
                    zIndex: (index: number) => 10 - index, // Ensure proper stacking
                    transformOrigin: "center center",
                });

                // Optional: Add floating animation to the horizontally arranged cards
                gsap.to(firstThreeCards, {
                    duration: 2,
                    delay: 0.8,
                    y: "+=15",
                    ease: "power2.inOut",
                    yoyo: true,
                    repeat: -1,
                    stagger: {
                        amount: 0.1,
                        from: "start"
                    }
                });

                // Keep remaining cards in stack with subtle movement
                const remainingCards = Array.from(images).slice(3);
                gsap.to(remainingCards, {
                    duration: 0.8,
                    delay: 0.4,
                    y: "-=20",
                    ease: "power2.out",
                    stagger: 0.02
                });

            }, null, "+=0.02"); // Start 0.5s after flip completes
        });

    }, {
        scope: sectionRef,
        dependencies: [pathname]
    });

    return (
        <section className={styles.about} ref={sectionRef}>
            <div className={styles.imagesContainer} ref={imagesRef}>
                {[
                    'c2.jpg',
                    'google.jpg',
                    'funny.jpg',
                    'decimal.jpg',
                    'locomotive.png',
                    'powell.jpg',
                    'sustainability.jpg',
                    'maven.jpg',
                    'landing/sky.jpg',
                    'landing/main.jpg',
                    'landing/maintenance.jpg',
                    'panda.jpg',
                    'maven.jpg',
                    'officestudio.png',
                    'wix.jpg'
                ].map((src: string, index: number) => (
                    <div key={`${src}-${index}`} className={`${styles.img} img-${index}`}>
                        <Image
                            src={`/images/${src}`}
                            alt={src.split('/').pop()?.split('.')[0] || ''}
                            width={500}
                            height={300}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                ))}
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
