"use client";

import styles from './career.module.scss';
import Text from "@/ui/Text/index";

export default function Career() {
    return (
        <section className={styles.career}>
            <div className={styles.content}>
                <header className={styles.head}>
                    <div className={styles.line} aria-hidden="true"></div>
                    <h5 className={styles.subtitle}>Career</h5>
                </header>

                <Text>
                    <h1 className={styles.title}>
                        Join the team and help us power the energy transition
                    </h1>
                </Text>
            </div>
        </section>
    );
}
