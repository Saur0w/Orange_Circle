"use client";

import styles from './style.module.scss';
import Co2ReductionChart from '@/components/Graph/index';

export default function Sustainability() {
    return (
        <section className={styles.sustainability}>
            <div className={styles.intro}>
                <div className={styles.textContent}>
                    <div className={styles.heading}>
                        <h3>Looking Ahead</h3>
                        <div className={styles.line}></div>
                        <h1>
                            Solar Energy is<br /> the Clear Choice for a <br />
                            Brighter <span className={styles.to}>Tomorrow</span>
                        </h1>
                    </div>
                    <h2>Cost Efficiency & Scalable Growth</h2>
                    <p>Solar PV is now the most affordable and scalable power source worldwide...</p>
                    <p>Ongoing innovation and rising demand continue to drive down costs...</p>
                </div>

                <div className={styles.graph}>
                    <Co2ReductionChart />
                </div>
            </div>

            <div className={styles.future}></div>
        </section>
    );
}
