import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            {/* Navigation */}
            <nav className={styles.fixedNav}>
                <div className={styles.navContent}>
                    <div className="flex items-center">
                        <span className={styles.brand}>Your Name</span>
                    </div>
                    <div className={styles.navRight}>
                        <Link href="/#projects" className={styles.navLink}>
                            Projects
                        </Link>
                        <Link href="/#skills" className={styles.navLink}>
                            Skills
                        </Link>
                        <Link href="/#contact" className={styles.navLink}>
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};