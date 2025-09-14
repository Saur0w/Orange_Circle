"use client";

import styles from "./style.module.scss";
import Link from "next/link";
import Text from "@/ui/Text/index";

export default function JoinUsSection() {
    return (
        <section className={styles.career}>
            <div className={styles.content}>
                <div className={styles.lineHead}>
                    <div className={styles.line}></div>
                    <h5>Career</h5>
                </div>
                <Text>
                    <h1>
                        <span className={styles.highlight}>Join the team </span>and help us power the energy transition.
                    </h1>
                </Text>
                <Text>
                    <p>
                        Solar will become the energy of the future, and the future is now. Are you interested in making
                        a difference in the world? Then begin an exciting career with a team of solar professionals who
                        are changing the world for the better.
                    </p>
                </Text>
                <div className={styles.button}>
                    <Link href="/career">
                        <button>Learn More</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
