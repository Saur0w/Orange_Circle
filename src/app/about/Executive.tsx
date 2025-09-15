"use client";

import styles from "./executive.module.scss";
import Image from "next/image";
import {JSX} from "react";

interface Executive {
    id: number;
    name: string;
    title: string;
    image: string;
}

export default function Executive(): JSX.Element {
    const executives: Executive[] = [
        {
            id: 1,
            name: "werwer",
            title: "Director Corporate Finance",
            image: "/images/dp.jpg"
        },
        {
            id: 2,
            name: "abcd",
            title: "Global HR Director",
            image: "/images/dp2.jpg"
        },
        {
            id: 3,
            name: "xyz",
            title: "Director ESG",
            image: "/images/beate-kampmann.jpg"
        },
        {
            id: 4,
            name: "qwerty",
            title: "Head of Governance & Compliance",
            image: "/images/beba-miletic.jpg"
        }
    ];

    return (
        <>
            <section className={styles.executive}>
                <div className={styles.content}>
                    <div className={styles.head}>
                        <h1>Executive Team</h1>
                    </div>
                    <div className={styles.imageContainer}>
                        {executives.map((executive: Executive) => (
                            <div key={executive.id} className={styles.executiveCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={executive.image}
                                        alt={`${executive.name} - ${executive.title}`}
                                        width={280}
                                        height={350}
                                        className={styles.executiveImage}
                                        priority={executive.id <= 2}
                                    />
                                </div>
                                <div className={styles.executiveInfo}>
                                    <h3 className={styles.executiveName}>{executive.name}</h3>
                                    <p className={styles.executiveTitle}>{executive.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
