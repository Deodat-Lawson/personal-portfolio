"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Code, Mail } from 'lucide-react';
import styles from '../styles/home.module.css';

const Portfolio = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        // Fallback timer in case video fails to load
        const fallbackTimer = setTimeout(() => {
            setIsLoading(false);
        }, 6000); // 6 seconds maximum wait time

        return () => clearTimeout(fallbackTimer);
    }, []);

    const handleVideoEnd = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            // Fade out the loading screen when video finishes
            videoElement.parentElement.classList.add(styles.fadeOut);
            setTimeout(() => setIsLoading(false), 1000);
        }
    };

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    const skipIntro = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            // Fade out the loading screen when the user skips
            videoElement.parentElement.classList.add(styles.fadeOut);
            setTimeout(() => setIsLoading(false), 1000);
        }
    };

    // Show the loading video if still loading
    if (isLoading) {
        return (
            <div className={styles.loadingScreen}>
                <div className={styles.loadingOverlay} />
                <video
                    ref={videoRef}
                    className={styles.loadingVideo}
                    autoPlay        // Automatically start playing
                    muted           // Required for autoplay in many browsers
                    playsInline     // Allows inline playback on iOS devices
                    onEnded={handleVideoEnd}
                    onLoadedData={handleVideoLoad}
                >
                    <source src="/loading-animation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {isVideoLoaded && (
                    <button
                        className={styles.skipButton}
                        onClick={skipIntro}
                    >
                        Skip Intro
                    </button>
                )}
            </div>
        );
    }

    // Portfolio content after loading
    return (
        <div className={styles.portfolioContainer}>
            {/* Navigation */}
            <nav className={styles.navContainer}>
                <div className={styles.navContent}>
                    <div className={styles.navLogo}>DevName.io</div>
                    <div className={styles.navLinks}>
                        <button className={styles.navLink}>About</button>
                        <button className={styles.navLink}>Projects</button>
                        <button className={styles.navLink}>Contact</button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Timothy Lin</h1>
                    <p className={styles.heroDescription}>
                        A software engineer who has a fascination with emerging technologies and passion for pushing the boundaries of what’s possible. I transform forward-thinking ideas into real-world applications and tackle complex problems—especially those that sit at the intersection of deep tech research and impactful business opportunities.
                    </p>
                    <div className={styles.buttonGroup}>
                        <a href="#projects" className={styles.primaryButton}>
                            <Code className={styles.buttonIcon} />
                            View Projects
                        </a>
                        <a href="#contact" className={styles.secondaryButton}>
                            <Mail className={styles.buttonIcon} />
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>

            {/* Add any other sections you have (Projects, Skills, Contact, etc.) */}

            {/* Footer */}
            <footer className={styles.footer}>
                <p>© 2024 Timothy Lin. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Portfolio;