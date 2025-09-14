import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | Orange Circle",
    description: "Learn about Orange Circle - Engineering Bright Futures with Smart Solar Solutions. Our mission is to empower sustainable growth through solar engineering, design, and execution.",
    keywords: "Orange Circle, about us, solar solutions, sustainable energy, solar engineering, EPC solutions",
};

interface AboutLayoutProps {
    children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
    return (
        <>
            {children}
        </>
    );
}
