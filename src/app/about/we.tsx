"use client";

import styles from "./we.module.scss";
import Text from "@/ui/Text/index";

export default function WeKnowWhoWeAre() {
    return (
        <>
            <section className={styles.we}>
                <div className={styles.content}>
                    <div className={styles.head}>
                        <div className={styles.headLine}>
                            <div className={styles.line}></div>
                            <h5>We are Orange Circle</h5>
                        </div>
                        <h1>Powering the <br/><span className={styles.highlight}>energy transition</span></h1>
                    </div>
                    <div className={styles.para}>
                        <Text>
                            <p>
                                Orange Circle is a leading utility-scale solar development platform with a global footprint and a
                                20-year track record. Our OECD-focused development strategy, world-scale development
                                pipeline, investments in BESS technology, and independent power producer (&#34;IPP&#34;) business
                                model strongly position ib vogt for accelerated near-term growth.
                            </p>
                        </Text>
                    </div>
                </div>
            </section>
        </>
    );
}
