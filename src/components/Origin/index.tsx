"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Founder {
    image: string;
    name: string;
    title: string;
    links: {
        label: string;
        href: string;
    }[];
    bio: string;
}

export default function Origin() {
    const originRef = useRef<HTMLElement>(null);

    const founders: Founder[] = [
        {
            image: "/images/dp.jpg",
            name: "ABC",
            title: "President",
            links: [
                { label: "LinkedIn", href: "/" },
                { label: "Email", href: "mailto:abc@example.com" }
            ],
            bio: `ABC is an accomplished international leader with over 25 years of experience across the energy, aerospace, and automotive industries. Before joining ib vogt as CEO, he served as CEO of EnBW Energie Baden-Württemberg AG, where he led the company through the energy crisis of 2022–2023 and delivered record financial results. Prior to that, he was CEO of Rolls-Royce Power Systems, where he oversaw a global transformation strategy and helped achieve the most successful year in the company's history. Mr. Schell has held senior executive roles at UTC Aerospace Systems and DaimlerChrysler AG, managing global teams in engineering, operations, and corporate strategy. He is known for driving digital transformation, performance culture, and sustainable leadership within complex international organizations. A mechanical engineer by training, he holds an MBA from Michigan State University and a Diploma in Mechanical Engineering from Technische Universität Clausthal.`
        },
        {
            image: "/images/xyzdp.jpg",
            name: "XYZ",
            title: "Vice President & CEO",
            links: [
                { label: "LinkedIn", href: "/" },
                { label: "Portfolio", href: "/portfolio" }
            ],
            bio: `Carsten Stang joined ib vogt in 2016 and is responsible for the company wide Business Development activities and regional organisations. Before Carsten joined ib vogt he held positions at Solarhybrid AG and ReneSola Ltd. His experience comprises developing ground mounted solar projects, raising non-recourse project financing, concluding power purchase agreements, structuring buy and sell transactions of solar project vehicles as well as initiating and concluding joint development endeavors with partners.`
        }
    ];

    useGSAP(() => {
        gsap.fromTo('.reveal-image',
            {
                clipPath: 'inset(0 0 100% 0)',
            },
            {
                clipPath: 'inset(0 0 0% 0)',
                ease: 'none',
                scrollTrigger: {
                    trigger: originRef.current,
                    start: 'top 90%',
                    end: 'center center',
                    scrub: true,
                    markers: false,
                },
            }
        );
    }, { scope: originRef });

    return (
        <section className={styles.origin} ref={originRef}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h1>Executive Management Board</h1>
                </div>

                <div className={styles.profile}>
                    {founders.map((person, index) => (
                        <div key={index} className={styles.profileInfo}>
                            <div className={styles.imageContainer}>
                                <div className={styles.imageInfo}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            width={350}
                                            height={350}
                                            className="reveal-image"
                                        />
                                    </div>
                                    <p>{person.name}</p>
                                    <p>{person.title}</p>
                                </div>
                                <div className={styles.links}>
                                    {person.links.map((link, i) => (
                                        <Link key={i} href={link.href} target="_blank">
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <p>{person.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
