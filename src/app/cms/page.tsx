"use client";

import { useState } from "react";
import styles from "./style.module.scss";

type Feature = {
    title: string;
    description: string;
};

const features: Feature[] = [
    { title: "Content models", description: "Define types, fields, and validation for structured content" },
    { title: "Rich text", description: "Author pages with headings, media, and links in a safe pipeline" },
    { title: "Media library", description: "Store and reuse images, video, and documents with versioning" },
    { title: "Workflows", description: "Draft, review, and publish with role based approvals" },
];

const steps: string[] = [
    "Draft content in the editor",
    "Request review from stakeholders",
    "Approve changes after QA",
    "Publish to production",
];

export default function Page() {
    const [expanded, setExpanded] = useState(false);

    return (
        <main className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>CMS</h1>
                <p className={styles.subtitle}>
                    Manage pages, media, and releases with an efficient editorial workflow
                </p>
                <button
                    className={styles.toggle}
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                >
                    {expanded ? "Hide details" : "Show details"}
                </button>
            </section>

            <section className={styles.gridSection} hidden={!expanded}>
                <h2 className={styles.sectionTitle}>Key features</h2>
                <div className={styles.grid}>
                    {features.map((f) => (
                        <article key={f.title} className={styles.card}>
                            <h3 className={styles.cardTitle}>{f.title}</h3>
                            <p className={styles.cardText}>{f.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.workflow}>
                <h2 className={styles.sectionTitle}>Editorial flow</h2>
                <ol className={styles.steps}>
                    {steps.map((s) => (
                        <li key={s} className={styles.stepItem}>
                            {s}
                        </li>
                    ))}
                </ol>
            </section>
        </main>
    );
}
