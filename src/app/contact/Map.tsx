"use client";

import Image from "next/image";
import styles from "./map.module.scss";
import {JSX} from "react";

export default function Headquarter(): JSX.Element {
    return (
        <section className={styles.headquarter}>
            <div className={styles.content}>
                <h1 className={styles.head}>Headquarter</h1>

                <div className={styles.imageContainer}>
                    <Image
                        src="/images/map.jpg"
                        alt="Headquarter"
                        width={1000}
                        height={500}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
