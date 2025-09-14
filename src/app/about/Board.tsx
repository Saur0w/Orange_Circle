"use client";

import styles from "./board.module.scss";
import Image from "next/image";
import {JSX} from "react";

interface Founder {
    name: string;
    title: string;
    image: string;
}

export default function Founders(): JSX.Element {
    const founders: Founder[] = [
        {
            name: "ABC",
            title: "President",
            image: "/images/dp.jpg",
        },
        {
            name: "XYZ",
            title: "Vice President & CEO",
            image: "/images/dp.jpg",
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Executive Management Board</h1>

            <div className={styles.boardMembers}>
                {founders.map((founder: Founder, index: number) => (
                    <div key={index} className={styles.member}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={founder.image}
                                alt={`${founder.name} Profile`}
                                width={250}
                                height={250}
                                className={styles.memberImage}
                                priority={index < 2}
                            />
                        </div>
                        <div className={styles.memberInfo}>
                            <h2 className={styles.memberName}>{founder.name}</h2>
                            <p className={styles.memberTitle}>{founder.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
