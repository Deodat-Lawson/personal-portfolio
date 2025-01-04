import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navContent}>
                {/* Logo */}
                <div className={styles.navLogo}>Timothy Lin</div>

                {/* Hamburger Icon (shown only on mobile) */}
                <button className={styles.hamburger} onClick={handleMenuToggle}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                {/* Desktop Nav Links */}
                <div className={styles.navLinks}>
                    <Link href="/home">
                        <button className={styles.navLink}>About</button>
                    </Link>
                    <Link href="/work">
                        <button className={styles.navLink}>Work Experience</button>
                    </Link>
                    <Link href="/projects">
                        <button className={styles.navLink}>Projects</button>
                    </Link>
                    <Link href="/contact">
                        <button className={styles.navLink}>Contact</button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu (appears when hamburger is clicked) */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/home">
                        <button className={styles.mobileNavLink} onClick={handleMenuToggle}>
                            About
                        </button>
                    </Link>
                    <Link href="/work">
                        <button className={styles.mobileNavLink} onClick={handleMenuToggle}>
                            Work Experience
                        </button>
                    </Link>
                    <Link href="/projects">
                        <button className={styles.mobileNavLink} onClick={handleMenuToggle}>
                            Projects
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className={styles.mobileNavLink} onClick={handleMenuToggle}>
                            Contact
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};