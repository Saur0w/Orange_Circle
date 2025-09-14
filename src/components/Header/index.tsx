"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface DropdownItem {
    path: string;
    label: string;
}

interface DropdownItems {
    projects: DropdownItem[];
    sustainability: DropdownItem[];
    about: DropdownItem[];
}

// Type for active dropdown state
type DropdownType = 'projects' | 'sustainability' | 'about' | null;

export default function Header() {
    const dropdownItems: DropdownItems = {
        projects: [
            { path: "/projects/commercial", label: "Commercial Projects" },
            { path: "/projects/residential", label: "Residential Projects" },
            { path: "/projects/infrastructure", label: "Infrastructure" },
            { path: "/projects/featured", label: "Featured Work" },
        ],
        sustainability: [
            { path: "/sustainability/green-building", label: "Green Building" },
            { path: "/sustainability/energy", label: "Energy Solutions" },
            { path: "/sustainability/certifications", label: "Certifications" },
            { path: "/sustainability/case-studies", label: "Case Studies" },
        ],
        about: [
            { path: "/about/story", label: "Our Story" },
            { path: "/about/team", label: "Team" },
            { path: "/about/awards", label: "Awards" },
            { path: "/about/careers", label: "Careers" },
        ],
    };

    // Typed refs
    const container = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    // Typed state
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<DropdownType>(null);

    // Close all menus function
    const closeAllMenus = useCallback((): void => {
        setIsMenuOpen(false);
        setActiveDesktopDropdown(null);
        document.body.style.overflow = "auto";
    }, []);

    // Handle navigation click
    const handleNavClick = useCallback((): void => {
        closeAllMenus();
    }, [closeAllMenus]);

    // Mobile menu toggle
    const toggleMobileMenu = useCallback((): void => {
        setIsMenuOpen(!isMenuOpen);
        setActiveDesktopDropdown(null); // Close desktop dropdown when opening mobile
    }, [isMenuOpen]);

    // Desktop dropdown handlers
    const handleDropdownEnter = useCallback((dropdownName: DropdownType): void => {
        if (!isMenuOpen) { // Only open if mobile menu is closed
            setActiveDesktopDropdown(dropdownName);
        }
    }, [isMenuOpen]);

    const handleDropdownLeave = useCallback((): void => {
        setActiveDesktopDropdown(null);
    }, []);

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            const target = event.target as Element;
            const dropdown = target.closest(`.${styles.dropdown}`);
            const mobileBtn = target.closest(`.${styles.mobileMenuBtn}`);

            if (!dropdown && !mobileBtn && activeDesktopDropdown) {
                setActiveDesktopDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [activeDesktopDropdown]);

    // GSAP animations
    useGSAP(() => {
        gsap.set(".menuLinkItemHolder", {
            y: 75,
            opacity: 0,
        });

        tl.current = gsap
            .timeline({ paused: true })
            .to(".menuOverlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(".menuLinkItemHolder", {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            });
    }, { scope: container });

    // Handle mobile menu animation
    useEffect(() => {
        if (tl.current) {
            if (isMenuOpen) {
                tl.current.play();
                document.body.style.overflow = "hidden";
            } else {
                tl.current.reverse();
                document.body.style.overflow = "auto";
            }
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return (
        <div className={styles.headerContainer} ref={container}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link href="/" className={styles.brand} onClick={handleNavClick}>
                        <div className={styles.logoText}>
                            <h1>
                                <span className={styles.headText}>Orange Circle</span>
                            </h1>
                        </div>
                    </Link>

                    <nav className={styles.desktopNav}>
                        {/* Projects Dropdown */}
                        <div
                            className={styles.dropdown}
                            onMouseEnter={() => handleDropdownEnter('projects')}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <div className={styles.navItem}>
                                <Link href="/projects" onClick={handleNavClick}>Projects</Link>
                                <svg
                                    className={`${styles.chevron} ${activeDesktopDropdown === 'projects' ? styles.rotated : ''}`}
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                >
                                    <path
                                        d="M2 4l4 4 4-4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />
                                </svg>
                            </div>
                            <div className={`${styles.dropdownMenu} ${activeDesktopDropdown === 'projects' ? styles.show : ''}`}>
                                <div className={styles.dropdownContent}>
                                    <div className={styles.dropdownGrid}>
                                        <div className={styles.dropdownLinks}>
                                            <h3>Projects</h3>
                                            <div className={styles.linksList}>
                                                {dropdownItems.projects.map((item: DropdownItem, index: number) => (
                                                    <Link
                                                        key={index}
                                                        href={item.path}
                                                        onClick={handleNavClick}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={styles.dropdownInfo}>
                                            <p>Discover our comprehensive portfolio of architectural projects and design solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sustainability Dropdown */}
                        <div
                            className={styles.dropdown}
                            onMouseEnter={() => handleDropdownEnter('sustainability')}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <div className={styles.navItem}>
                                <Link href="/sustainability" onClick={handleNavClick}>Sustainability</Link>
                                <svg
                                    className={`${styles.chevron} ${activeDesktopDropdown === 'sustainability' ? styles.rotated : ''}`}
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                >
                                    <path
                                        d="M2 4l4 4 4-4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />
                                </svg>
                            </div>
                            <div className={`${styles.dropdownMenu} ${activeDesktopDropdown === 'sustainability' ? styles.show : ''}`}>
                                <div className={styles.dropdownContent}>
                                    <div className={styles.dropdownGrid}>
                                        <div className={styles.dropdownLinks}>
                                            <h3>Sustainability</h3>
                                            <div className={styles.linksList}>
                                                {dropdownItems.sustainability.map((item: DropdownItem, index: number) => (
                                                    <Link
                                                        key={index}
                                                        href={item.path}
                                                        onClick={handleNavClick}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={styles.dropdownInfo}>
                                            <p>Explore our sustainable design practices and eco-friendly architectural solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description Us Dropdown */}
                        <div
                            className={styles.dropdown}
                            onMouseEnter={() => handleDropdownEnter('about')}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <div className={styles.navItem}>
                                <Link href="/about" onClick={handleNavClick}>About Us</Link>
                                <svg
                                    className={`${styles.chevron} ${activeDesktopDropdown === 'about' ? styles.rotated : ''}`}
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                >
                                    <path
                                        d="M2 4l4 4 4-4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />
                                </svg>
                            </div>
                            <div className={`${styles.dropdownMenu} ${activeDesktopDropdown === 'about' ? styles.show : ''}`}>
                                <div className={styles.dropdownContent}>
                                    <div className={styles.dropdownGrid}>
                                        <div className={styles.dropdownLinks}>
                                            <h3>About Us</h3>
                                            <div className={styles.linksList}>
                                                {dropdownItems.about.map((item: DropdownItem, index: number) => (
                                                    <Link
                                                        key={index}
                                                        href={item.path}
                                                        onClick={handleNavClick}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={styles.dropdownInfo}>
                                            <p>Learn more about our team, mission, and commitment to exceptional design.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/contact" className={styles.navItem} onClick={handleNavClick}>
                            Contact
                        </Link>
                    </nav>

                    <div className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
                        <span>{isMenuOpen ? "Close" : "Menu"}</span>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.menuOverlay} menuOverlay`}>
                <div className={styles.menuOverlayBar}>
                    <div className={styles.menuClose} onClick={closeAllMenus}>
                        <span>&#x2715;</span>
                    </div>
                </div>
                <div className={styles.menuContent}>
                    <div className={styles.menuLinks}>
                        <div className={styles.menuLinkItem}>
                            <div className="menuLinkItemHolder">
                                <Link href="/" className={styles.menuLink} onClick={handleNavClick}>
                                    Home
                                </Link>
                            </div>
                        </div>
                        <div className={styles.menuLinkItem}>
                            <div className="menuLinkItemHolder">
                                <Link href="/projects" className={styles.menuLink} onClick={handleNavClick}>
                                    Projects
                                </Link>
                            </div>
                        </div>
                        <div className={styles.menuLinkItem}>
                            <div className="menuLinkItemHolder">
                                <Link href="/sustainability" className={styles.menuLink} onClick={handleNavClick}>
                                    Sustainability
                                </Link>
                            </div>
                        </div>
                        <div className={styles.menuLinkItem}>
                            <div className="menuLinkItemHolder">
                                <Link href="/about" className={styles.menuLink} onClick={handleNavClick}>
                                    About Us
                                </Link>
                            </div>
                        </div>
                        <div className={styles.menuLinkItem}>
                            <div className="menuLinkItemHolder">
                                <Link href="/contact" className={styles.menuLink} onClick={handleNavClick}>
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.menuFooter}>
                    <p>Orange Circle</p>
                </div>
            </div>
        </div>
    );
}
