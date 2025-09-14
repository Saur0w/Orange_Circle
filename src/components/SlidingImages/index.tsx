"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./style.module.scss";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface SliderItem {
    color: string;
    src: string;
}

const slider1: SliderItem[] = [
    { color: "#e3e5e7", src: "project.jpg" },
    { color: "#d6d7dc", src: "landing/main.jpg" },
    { color: "#e3e3e3", src: "landing/work.jpg" },
    { color: "#21242b", src: "landing/installation.jpg" }
];

const slider2: SliderItem[] = [
    { color: "#d4e3ec", src: "landing/sky.jpg" },
    { color: "#e5e0e1", src: "landing/maintenance.jpg" },
    { color: "#d7d4cf", src: "sustainability.jpg" },
    { color: "#e1dad6", src: "wix.jpg" }
];

export default function SlidingImages() {
    const container = useRef<HTMLElement>(null);
    const slider1Ref = useRef<HTMLDivElement>(null);
    const slider2Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(slider1Ref.current, {
            x: 150,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(slider2Ref.current, {
            x: -150,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }, { scope: container });

    return (
        <section ref={container} className={styles.slidingImages}>
            <div ref={slider1Ref} className={styles.slider}>
                {slider1.map((project, index) => (
                    <div key={index} className={styles.project} style={{ backgroundColor: project.color }}>
                        <div className={styles.imageContainer}>
                            <Image
                                fill
                                alt="image"
                                src={`/images/${project.src}`}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div ref={slider2Ref} className={styles.slider}>
                {slider2.map((project, index) => (
                    <div key={index} className={styles.project} style={{ backgroundColor: project.color }}>
                        <div className={styles.imageContainer}>
                            <Image
                                fill
                                alt="image"
                                src={`/images/${project.src}`}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
