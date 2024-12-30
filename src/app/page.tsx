"use client"

import React, { useState, useEffect } from 'react';
import { Code, Briefcase, User, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import styles from '../styles/home.module.css';

const Portfolio = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000);
    }, []);

    if (isLoading) {
        return (
            <div className={styles.loadingScreen}>
                <div className={styles.loadingText}>
                    {['デ', 'ベ', 'ロ', 'ッ', 'パ', 'ー'].map((char, index) => (
                        <span
                            key={index}
                            className={styles.loadingChar}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
              {char}
            </span>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.portfolioContainer}>
            {/* Navigation */}
            <nav className={styles.navContainer}>
                <div className={styles.navContent}>
                    <div className={styles.navLogo}>DevName.io</div>
                    <div className={styles.navLinks}>
                        <button onClick={() => setActiveSection('about')} className={styles.navLink}>About</button>
                        <button onClick={() => setActiveSection('projects')} className={styles.navLink}>Projects</button>
                        <button onClick={() => setActiveSection('contact')} className={styles.navLink}>Contact</button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Software Engineer</h1>
                    <p className={styles.heroDescription}>
                        Crafting digital experiences with code. Bringing ideas to life through elegant solutions.
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

            {/* Projects Grid */}
            <section id="projects" className={styles.projectsSection}>
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <div className={styles.projectsGrid}>
                    {[1, 2, 3].map((project) => (
                        <div key={project} className={styles.projectCard}>
                            <div className={styles.projectImage}></div>
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>Project {project}</h3>
                                <p className={styles.projectDescription}>
                                    A brief description of the project and the technologies used.
                                </p>
                                <div className={styles.projectLinks}>
                                    <a href="#" className={styles.projectLink}>
                                        <Github size={16} />
                                        Code
                                    </a>
                                    <a href="#" className={styles.projectLink}>
                                        <ExternalLink size={16} />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className={styles.skillsSection}>
                <h2 className={styles.sectionTitle}>Technical Skills</h2>
                <div className={styles.skillsGrid}>
                    {[
                        'JavaScript', 'React', 'Node.js', 'Python',
                        'TypeScript', 'Next.js', 'SQL', 'AWS'
                    ].map((skill) => (
                        <div key={skill} className={styles.skillItem}>
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={styles.contactSection}>
                <h2 className={styles.sectionTitle}>Let's Connect</h2>
                <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialLink}>
                        <Github size={32} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <Linkedin size={32} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <Mail size={32} />
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>© 2024 Timothy Lin. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Portfolio;