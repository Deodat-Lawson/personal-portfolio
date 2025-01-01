"use client"; // if using Next.js App Router

import React from "react";
import { Code, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Navbar } from "~/app/_component/Navbar";
import styles from "../../styles/home.module.css";

const projectsData = [
    {
        title: "AI Integrated Finance Tracker",
        description:
            "A smart tool that leverages AI to monitor, analyze, and optimize your financial activities, providing personalized insights and real-time updates to keep your finances on track. ",
        imageUrl: "/images/ai-chatbot.png",
        videoUrl:'https://www.youtube.com/embed/gImQ5uFKIYo?si=K-RfFyzREASox7CT',
        githubUrl: "https://github.com/Deodat-Lawson/personalFinanceTrackFrontend",
        githubUrl2: "https://github.com/Deodat-Lawson/personalFinanceTrackBackend",
        demoUrl: "",
    },
    {
        title: "JHU Course Vote Social Media Platform",
        description:
            "A live rating/social platform for course discussions can greatly benefit your school community by making course selection more transparent, fostering meaningful peer interactions, and improving overall academic experiences.",
        imageUrl: "/images/realtime-dashboard.png",
        videoUrl:'https://www.youtube.com/embed/jZFcyiArpVI?si=ljYGqwvHG7-48lFF',
        githubUrl: "https://github.com/Deodat-Lawson/click_to_punch_nlp",
        githubUrl2: "",
        demoUrl: "https://www.jhucoursevote.online/",
    },
    {
        title: "Rome",
        description: "Rome is an AI-powered platform that transforms brand identities into personalized, interactive video games, enabling deeper audience engagement and memorable digital experiences. By leveraging generative AI, it seamlessly integrates a brand’s essence into dynamic gameplay, offering creators, influencers, and companies a unique way to expand their digital presence and connect with their audience.",
        imageUrl: "/images/ecommerce-platform.png",
        videoUrl:'https://www.youtube.com/embed/DhvwM8waTL0?si=VQNn-7eZgZOpdCTw',
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
                    <p className={styles.heroSubtitle}>3rd Yr @ Johns Hopkins University</p>
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
                            <div className={styles.projectVideo}>
                                <iframe
                                    src={project.videoUrl}
                                    title={project.title}
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
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

                <div className={styles.buttonGroup} style={{ marginTop: '2rem' }}>
                    <a href="/projects" className={styles.primaryButton}>
                        <Code className={styles.buttonIcon} />
                        More Projects
                    </a>
                </div>
            </section>

            {/* Skills Section */}
            <section className={styles.skillsSection}>
                <h2 className={styles.sectionTitle}>Technical Skills</h2>
                <h3 className={styles.sectionSubtitle}>Programming Languages</h3>
                <div className={styles.skillsGrid}>
                    {[
                        "Java",
                        "JavaScript",
                        "SQL",
                        "Python",
                        "C",
                        "C++",
                        "Bash",
                        "React",
                        "TypeScript",
                    ].map((skill) => (
                        <div key={skill} className={styles.skillItem}>
                            {skill}
                        </div>
                    ))}
                </div>

                <h3 className={styles.sectionSubtitle}>Framework & Technologies:</h3>
                <div className={styles.skillsGrid}>
                    {[
                        "Spring Boot",
                        "Next.js",
                        "Django",
                        "React",
                        "Express.js",
                        "MySQL",
                        "Postgres SQL",
                        "Kafka",
                        "Redis",
                        "Node.js",
                        "AWS",
                        "Azure",
                        "Google Cloud",
                        "Numpy",
                        "Pytorch",
                        "Scikit-learn",
                        "Flask",
                        "Tensorflow",
                        "Pandas"
                    ].map((skill) => (
                        <div key={skill} className={styles.skillItem}>
                            {skill}
                        </div>
                    ))}
                </div>


                <h3 className={styles.sectionSubtitle}>Development Tools:</h3>
                <div className={styles.skillsGrid}>
                    {[
                        "Git",
                        "GitHub",
                        "Unix",
                        "Vim",
                        "Vercel",
                        "NPM",
                        "PNPM",
                        "Jupyter Notebook",
                        "Google Collab",
                        "Intellij IDEA",
                        "Webstorm",
                        "Pytorch",
                        "Clion",
                        "Maven",
                        "Postman",
                        "Jenkins",
                        "JUnit",
                        "TestNG",
                        "Clerk",
                        "EmailJS",
                    ].map((skill) => (
                        <div key={skill} className={styles.skillItem}>
                            {skill}
                        </div>
                    ))}
                </div>


            </section>

            {/* Contact Section */}
            <section id="contact" className={styles.contactSection}>
                <h2 className={styles.sectionTitle}>Let&#39;s Connect</h2>
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