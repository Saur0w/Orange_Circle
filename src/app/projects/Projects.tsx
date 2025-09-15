"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./project.module.scss";

interface Project {
    [key: string]: string;
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const SHEET_ID = "1PyYr5yjtVghzBie9LAwWsm3J3q4FFpuJt6Sv7deEKyU";
            const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
            const SHEET_NAME = "Projects";

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

            try {
                const res = await axios.get(url);
                const [headers, ...rows] = res.data.values as string[][];

                const data: Project[] = rows.map((row: string[]) =>
                    Object.fromEntries(headers.map((h: string, i: number) => [h, row[i] || ""]))
                );

                setProjects(data);
            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    console.error("Error fetching data", error.response?.data ?? error.message);
                } else if (error instanceof Error) {
                    console.error("Error fetching data", error.message);
                } else {
                    console.error("Error fetching data", String(error));
                }
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Projects</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>CLIENT</th>
                    <th>LOCATION</th>
                    <th>STATUS</th>
                    <th>SERVICES</th>
                    <th>YEAR</th>
                </tr>
                </thead>
                <tbody>
                {projects.map((proj, index) => (
                    <tr key={index}>
                        <td>{proj["Project Name"]}</td>
                        <td>{proj["Location"]}</td>
                        <td>
                            <span className={styles.statusBadge}>{proj["Status"]}</span>
                        </td>
                        <td>{proj["Services"]}</td>
                        <td>{proj["Year"]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
