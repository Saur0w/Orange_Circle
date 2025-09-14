import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sustainability | Orange Circle",
    description: "Learn about Orange Circle - Engineering Bright Futures with Smart Solar Solutions. Our mission is to empower sustainable growth through solar engineering, design, and execution.",
    keywords: "Orange Circle, about us, solar solutions, sustainable energy, solar engineering, EPC solutions",
};

interface ProjectLayoutProps {
    children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
    return (
        <>
            {children}
        </>
    );
}
