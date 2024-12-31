"use client"; // if using Next.js App Router

import React from "react";
import { Code, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Navbar } from "~/app/_component/Navbar";
import styles from "../../styles/home.module.css";

const projectsData = [
    {
        title: "AI Integrated Finance Tracker",
        description:
            "A smart tool that leverages AI to monitor, analyze, and optimize your financial activities...",
        imageUrl: "/images/ai-chatbot.png",
        githubUrl: "https://github.com/your-username/ai-chatbot",
        githubUrl2: "",
        demoUrl: "https://your-demo-link.com",
    },
    {
        title: "JHU Course Vote Social Media Platform",
        description:
            "A live rating/social media platform to talk about Courses in our school...",
        imageUrl: "/images/realtime-dashboard.png",
        githubUrl: "https://github.com/Deodat-Lawson/click_to_punch_nlp",
        githubUrl2: "",
        demoUrl: "https://www.jhucoursevote.online/",
    },
    {
        title: "Rome",
        description: "",
        imageUrl: "/images/ecommerce-platform.png",
        githubUrl: "https://github.com/ho-tony/rome-fe",
        githubUrl2: "https://github.com/klxu03/rome",
        demoUrl: "https://devpost.com/software/rome",
    },
];

export default function Portfolio() {
    return (
        <div className={styles.portfolioContainer}>
            {/* Navigation */}

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Timothy Lin</h1>
                    <p className={styles.heroDescription}>
                        A software engineer who has a fascination with emerging
                        technologies and passion for pushing the boundaries of what’s
                        possible. I transform forward-thinking ideas into real-world
                        applications and tackle complex problems—especially those that sit
                        at the intersection of deep tech research and impactful business
                        opportunities.
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

            {/* Featured Projects Section */}
            <section id="projects" className={styles.projectsSection}>
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <div className={styles.projectsGrid}>
                    {projectsData.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div
                                className={styles.projectImage}
                                style={{ backgroundImage: `url(${project.imageUrl})` }}
                            ></div>
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>
                                    {project.description}
                                </p>
                                <div className={styles.projectLinks}>
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            className={styles.projectLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                    )}
                                    {project.githubUrl2 && (
                                        <a
                                            href={project.githubUrl2}
                                            className={styles.projectLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            className={styles.projectLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={16} />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.buttonGroup}>
                    <a href="#projects" className={styles.primaryButton}>
                        <Code className={styles.buttonIcon} />
                        More Projects
                    </a>
                </div>
            </section>

            {/* Skills Section */}
            <section className={styles.skillsSection}>
                <h2 className={styles.sectionTitle}>Technical Skills</h2>
                <div className={styles.skillsGrid}>
                    {[
                        "JavaScript",
                        "React",
                        "Node.js",
                        "Python",
                        "TypeScript",
                        "Next.js",
                        "SQL",
                        "AWS",
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
                    <a
                        href="https://github.com/Deodat-Lawson"
                        className={styles.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github size={32} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tlin2004/"
                        className={styles.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin size={32} />
                    </a>
                    <a
                        href="mailto:tlin56@jh.edu"
                        className={styles.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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
}