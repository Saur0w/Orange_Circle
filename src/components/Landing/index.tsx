"use client";

import styles from './style.module.scss';
import {JSX} from "react";

export default function Landing(): JSX.Element {
    return (
        <section className={styles.landing}>
            <video autoPlay muted loop className={styles.bgVideo}>
                <source src="/Videos/Hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>
                        Powering the<br />
                        energy transition
                    </h1>
                </div>

                <div className={styles.lineHead}>
                    <div className={styles.line}></div>
                    <h5>Our mission is to help create a sustainably better world.
                        <br />Solar Photovoltaic is the First and Best Alternative</h5>
                </div>
            </div>
        </section>
    );
}
