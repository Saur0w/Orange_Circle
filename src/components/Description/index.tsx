"use client";

import styles from "./style.module.scss";
import Link from "next/link";

export default function Description() {
    return (
        <section className={styles.about}>
            <div className={styles.heading}>
                <h4>We are Orange Circle</h4>
                <div className={styles.line} />
                <h1>
                    A leading{" "}
                    <span className={styles.highlight}>
                         utility-scale<br />solar development<br />platform
                     </span>{" "}
                    with a global<br />
                    footprint and a 20-year track record.
                </h1>
            </div>

            <div className={styles.para}>
                <p>
                    Our OECD-focused development strategy, world-scale development
                    pipeline, investments in BESS technology, and independent power
                    producer (“IPP”) business model strongly position ib vogt for
                    accelerated near-term growth.
                </p>

                <Link href="/about" className={styles.cta}>
                    Company Profile
                </Link>
            </div>
        </section>
    );
}
