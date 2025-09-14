"use client";

import CountUp from "react-countup";
import styles from "./style.module.scss";
import {JSX} from "react";

export default function Stats(): JSX.Element {
    return (
        <>
            <div className={styles.statsContainer}>
                <div className={styles.statBox}>
                    <p>
                        <span className={styles.orange}>
                            &gt; <CountUp end={55} duration={2} />
                            <span className={styles.unit}> GWp</span>
                        </span>
                    </p>
                    <p className={styles.label}>PV project pipeline</p>
                </div>

                <div className={styles.statBox}>
                    <p>
                        <span className={styles.orange}>
                            <CountUp end={4.7} duration={2} decimals={2} />
                            <span className={styles.unit}> GWp</span>
                        </span>
                    </p>
                    <p className={styles.label}>PV solutions built and under construction</p>
                </div>

                <div className={styles.statBox}>
                    <p>
                        <span className={styles.orange}>
                            <CountUp end={2199667} duration={3} separator="," />
                            <span className={styles.unit}> t. p.a.</span>
                        </span>
                    </p>
                    <p className={styles.label}>CO₂ savings from our projects</p>
                </div>
            </div>
        </>
    );
}
