import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CMS",
    description: "Tools and workflows for content management",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <section>{children}</section>;
}
