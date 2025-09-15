"use client";

import React from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Legend
} from "recharts";
import styles from "./style.module.scss";

interface DataPoint {
    year: string;
    solar: number;
    wind: number;
    coal: number;
    hydropower: number;
}

const data: DataPoint[] = [
    { year: "2015", solar: 50, wind: 60, coal: 100, hydropower: 80 },
    { year: "2016", solar: 48, wind: 58, coal: 95, hydropower: 78 },
    { year: "2017", solar: 45, wind: 55, coal: 90, hydropower: 75 },
    { year: "2018", solar: 42, wind: 52, coal: 85, hydropower: 70 },
    { year: "2019", solar: 40, wind: 50, coal: 80, hydropower: 68 },
    { year: "2020", solar: 38, wind: 48, coal: 75, hydropower: 65 },
    { year: "2021", solar: 35, wind: 45, coal: 70, hydropower: 60 },
    { year: "2022", solar: 33, wind: 42, coal: 65, hydropower: 58 },
    { year: "2023", solar: 30, wind: 40, coal: 60, hydropower: 55 },
];

type TooltipEntry = {
    color?: string;
    name?: string | number;
    value?: number | string;
    dataKey?: string | number;
    payload?: unknown;
};
type CustomTooltipProps = {
    active?: boolean;
    payload?: TooltipEntry[];
    label?: string | number;
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.customTooltip}>
                <p className={styles.label}>Year: {String(label)}</p>
                {payload.map((entry, index) => (
                    <p key={index} style={{ color: entry.color ?? "#999" }}>
                        {entry.name}: {entry.value} $/MWh
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export default function PowerGenerationCostChart() {
    return (
        <div className={styles.chartContainer}>
            <h2 className={styles.chartTitle}>Energy Generation Cost Comparison</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" opacity={0.7} />
                    <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#666" }} axisLine={{ stroke: "#d0d0d0" }} tickLine={false} />
                    <YAxis
                        label={{ value: "Cost ($/MWh)", angle: -90, position: "insideLeft", style: { fontSize: 13, fill: "#666" } }}
                        tick={{ fontSize: 12, fill: "#666" }}
                        axisLine={{ stroke: "#d0d0d0" }}
                        tickLine={false}
                    />
                    <Tooltip content={(props) => <CustomTooltip {...(props as CustomTooltipProps)} />} />
                    <Legend verticalAlign="top" align="right" wrapperStyle={{ fontSize: "13px", paddingBottom: "10px" }} />
                    <Line type="monotone" dataKey="solar" stroke="#FF7E45" strokeWidth={3} name="Solar" dot={false} activeDot={{ r: 6, strokeWidth: 0, fill: "#FF7E45" }} />
                    <Line type="monotone" dataKey="wind" stroke="#4C9AFF" strokeWidth={3} name="Wind" dot={false} activeDot={{ r: 6, strokeWidth: 0, fill: "#4C9AFF" }} />
                    <Line type="monotone" dataKey="coal" stroke="#6B778C" strokeWidth={3} name="Coal" dot={false} activeDot={{ r: 6, strokeWidth: 0, fill: "#6B778C" }} />
                    <Line type="monotone" dataKey="hydropower" stroke="#36B37E" strokeWidth={3} name="Hydropower" dot={false} activeDot={{ r: 6, strokeWidth: 0, fill: "#36B37E" }} />
                </LineChart>
            </ResponsiveContainer>
            <p className={styles.chartDescription}>📉 Renewable energy costs continue to decrease while traditional sources remain higher</p>
        </div>
    );
}
