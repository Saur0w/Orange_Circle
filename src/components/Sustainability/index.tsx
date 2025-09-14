"use client";

import styles from "./style.module.scss";
import Link from "next/link";
import Text from "@/ui/Text/index";
import {JSX} from "react";

export default function SusSection(): JSX.Element {
    return (
        <section className={styles.sus}>
            <div className={styles.content}>
                <h5>Sustainability</h5>
                <div className={styles.line}></div>
                <Text>
                    <h1>
                        <span className={styles.highlight}>Climate change</span> and decarbonising power generation are among the central issues the world is
                        facing today.
                    </h1>
                </Text>
                <Text>
                    <p>
                        We, as mankind, are at a historical turning point. Much stands in the balance.
                        The consequences of climate change are likely to be catastrophic for society and
                        we need to rapidly implement solutions – which are by and large available –
                        to combat mankind&#39;s CO2 footprint.
                    </p>
                </Text>
                <div className={styles.button}>
                    <Link href="/sustainability">
                        <button>Find out More about our mission</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
