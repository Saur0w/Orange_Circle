"use client";

import styles from "./Form.module.scss";
import Text from "@/ui/Text/index";
import Link from "next/link";

export default function YourCareer() {
    return (
        <>
            <section className={styles.yourCareer}>
                <div className={styles.body}>
                    <div className={styles.headLine}>
                        <div className={styles.line}></div>
                        <h5>Your Career</h5>
                    </div>
                    <div className={styles.para}>
                        <Text>
                            <p>
                                Solar will become the energy of the future, and the future is now. Are you interested in
                                making a difference in the world? Then begin an exciting career with a team of solar
                                professionals who are changing the world for the better.
                            </p>
                        </Text>

                        <Text>
                            <p>
                                ib vogt provides a rewarding environment for our global and diverse staff to learn, grow
                                and
                                contribute. We all work together as a team in a highly-skilled, collaborative and
                                stimulating atmosphere, which in turn makes ib vogt a leader in our field of expertise.
                            </p>
                        </Text>
                        <Text>
                            <p>
                                ib vogt is expanding quickly on an international scale as we develop, finance, build,
                                maintain and operate solar projects around the globe. If you would like to help us build
                                a
                                cleaner, solar-powered future, we invite you to join our team of dedicated solar
                                experts.
                            </p>
                        </Text>
                        <div className={styles.points}>
                            <ul>
                                <li>Are you a self-motivated professional who champions the same environmental values as we do?</li>
                                <li>Do you want to have a positive and lasting impact on the planet?</li>
                                <li>Are you ready to join a dynamic, international team that thrives on cooperation and growth?</li>
                            </ul>
                        </div>

                        <div className={styles.button}>
                            <h3>Join the Team</h3>
                            <button>
                                <Link href="/contact">
                                    <span>Get in Touch</span>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={styles.arrow}
                                    >
                                        <path
                                            d="M7 17L17 7M17 7H7M17 7V17"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}