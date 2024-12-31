import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navContent}>
                <div className={styles.navLogo}>Timothy Lin</div>
                <div className={styles.navLinks}>
                    <Link href="/home">
                        <button className={styles.navLink}>About</button>
                    </Link>
                    <Link href="/projects">
                        <button className={styles.navLink}>Projects</button>
                    </Link>
                    <Link href="/contact">
                        <button className={styles.navLink}>Contact</button>
                    </Link>

                </div>
            </div>
        </nav>
    );
};