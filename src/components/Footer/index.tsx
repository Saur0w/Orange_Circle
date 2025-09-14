"use client";

import styles from './style.module.scss';
import Magnetic from '@/ui/Magnetic/index';
import Link from 'next/link';

export default function Footer() {
    const currentYear: number = new Date().getFullYear();

    return (
        <section className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__content}>

                    <div className={styles.footer__links}>
                        <div className={styles.footer__linkGroup}>
                            <h3>Navigation</h3>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/sustainability">Sustainability</Link></li>
                                <li><Link href="/projects">Projects</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className={styles.footer__linkGroup}>
                            <h3>Contact</h3>
                            <ul>
                                <li className={styles.info}><p>Email: orangeCircle@gmail.com</p></li>
                                <li className={styles.info}><p>Phone: +91 8171xxxxxx</p></li>
                                <li>123 Main Street</li>
                                <li>India, Gurgaon</li>
                            </ul>
                        </div>
                        <div className={styles.footer__linkGroup}>
                            <h3>Social Media</h3>
                            <ul>
                                <li><Link href="/">LinkedIn</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className={styles.footer__bottom}>
                    <p className={styles.footer__copyright}>
                        &copy; {currentYear} Orange Circle. All rights reserved.
                    </p>
                    <div className={styles.footer__social}>
                        <Magnetic>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z" />
                                </svg>
                            </Link>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </section>
    );
}
