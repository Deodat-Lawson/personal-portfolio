// src/pages/projects.tsx
"use client"

import React, { useState } from 'react';
import {Github, ExternalLink, Cpu, Code, Layout, Phone, Smartphone} from 'lucide-react';
import styles from '../../styles/projects.module.css';
import {Navbar} from "~/app/_component/Navbar";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    githubUrl2?: string;
    liveUrl?: string;
    imageUrl: string;
    category: 'fullstack' | 'ml' | 'mobile' | 'other';
}



const projectsData = [
    {
        title: "AI Integrated Finance Tracker",
        description:
            "A smart tool that leverages AI to monitor, analyze, and optimize your financial activities...",
        imageUrl: "/images/ai-chatbot.png",
        githubUrl: "https://github.com/Deodat-Lawson/personalFinanceTrackFrontend",
        githubUrl2: "https://github.com/Deodat-Lawson/personalFinanceTrackBackend",
        demoUrl: "",
    },
    {
        title: "JHU Course Vote Social Media Platform",
        description:
            "A live rating/social platform for course discussions can greatly benefit your school community by making course selection more transparent, fostering meaningful peer interactions, and improving overall academic experiences.",
        imageUrl: "/images/realtime-dashboard.png",
        githubUrl: "https://github.com/Deodat-Lawson/click_to_punch_nlp",
        githubUrl2: "",
        demoUrl: "https://www.jhucoursevote.online/",
    },
    {
        title: "Rome",
        description: "Rome is an AI-powered platform that transforms brand identities into personalized, interactive video games, enabling deeper audience engagement and memorable digital experiences. By leveraging generative AI, it seamlessly integrates a brand’s essence into dynamic gameplay, offering creators, influencers, and companies a unique way to expand their digital presence and connect with their audience.",
        imageUrl: "/images/ecommerce-platform.png",
        githubUrl: "https://github.com/ho-tony/rome-fe",
        githubUrl2: "https://github.com/klxu03/rome",
        demoUrl: "https://devpost.com/software/rome",
    },
];

const projects: Project[] = [
    {
        id: '1',
        title: 'JHU Course Vote Social Media Platform',
        description: "A live rating/social platform for course discussions can greatly benefit your school community by making course selection more transparent, fostering meaningful peer interactions, and improving overall academic experiences.",
        technologies: ['Next.js', 'TypeScript', 'Drizzle', 'PostgreSQL', 'Clerk'],
        githubUrl: 'https://github.com/Deodat-Lawson/click_to_punch_nlp',
        githubUrl2: '',
        liveUrl: 'https://www.jhucoursevote.online/',
        imageUrl: '/projects/ecommerce.jpg',
        category: 'fullstack'
    },
    {
        id: '2',
        title: 'AI Integrated Finance Tracker',
        description: 'A machine learning model that generates artistic images from text descriptions using stable diffusion.',
        technologies: ['Python', 'PyTorch', 'FastAPI', 'React'],
        githubUrl: "https://github.com/Deodat-Lawson/personalFinanceTrackFrontend",
        githubUrl2: "https://github.com/Deodat-Lawson/personalFinanceTrackBackend",
        imageUrl: '/projects/ai-image.jpg',
        category: 'ml'
    },
    {
        id: '3',
        title: 'Portfolio Website',
        description: 'Personal portfolio website built with modern technologies and smooth animations.',
        technologies: ['Next.js', 'TypeScript', 'Framer Motion'],
        githubUrl: 'https://github.com/yourusername/portfolio',
        liveUrl: 'https://yourportfolio.com',
        imageUrl: '/projects/portfolio.jpg',
        category: 'other'
    },
    {
        id: '4',
        title: 'LifePal',
        description: 'Personal portfolio website built with modern technologies and smooth animations.',
        technologies: ['Next.js', 'TypeScript', 'Framer Motion'],
        githubUrl: 'https://github.com/yourusername/portfolio',
        liveUrl: 'https://yourportfolio.com',
        imageUrl: '/projects/portfolio.jpg',
        category: 'mobile'
    },
    {
        id: '5',
        title: 'BenGenius',
        description: 'Personal portfolio website built with modern technologies and smooth animations.',
        technologies: ['Next.js', 'TypeScript', 'Framer Motion'],
        githubUrl: 'https://github.com/yourusername/portfolio',
        liveUrl: 'https://yourportfolio.com',
        imageUrl: '/projects/portfolio.jpg',
        category: 'ml',
    },
    {
        id: '6',
        title: 'NORA AI',
        description: 'Personal portfolio website built with modern technologies and smooth animations.',
        technologies: ['Next.js', 'PostgresSQL', 'Clerk',  'SAMMO Prompting', 'Chain Of Thought Prompting'],
        githubUrl: 'https://github.com/Deodat-Lawson/the_most_promising_future_frontend',
        githubUrl2: 'https://github.com/Deodat-Lawson/the_most_promising_future_backend',
        liveUrl: '',
        imageUrl: '/projects/portfolio.jpg',
        category: 'ml',
    },
    // Add more projects here...
];

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'ml' |'mobile'| 'other'>('all');

    const filteredProjects = projects.filter(project =>
        activeFilter === 'all' ? true : project.category === activeFilter
    );

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'fullstack':
                return <Layout className={styles.filterIcon} />;
            case 'ml':
                return <Cpu className={styles.filterIcon} />;
            case 'mobile':
                return <Smartphone className={styles.filterIcon} />;
            case 'other':
                return <Code className={styles.filterIcon} />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.projectsPage}>
            {/* Sticky/fixed navbar container */}

            {/* Main content container */}
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>My Projects</h1>
                    <p className={styles.subtitle}>
                        Explore my journey through code and creativity
                    </p>
                </div>

                <div className={styles.filters}>
                    <button
                        className={`${styles.filterButton} ${
                            activeFilter === 'all' ? styles.active : ''
                        }`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`${styles.filterButton} ${
                            activeFilter === 'fullstack' ? styles.active : ''
                        }`}
                        onClick={() => setActiveFilter('fullstack')}
                    >
                        <Layout className={styles.filterIcon} />
                        Full-Stack
                    </button>
                    <button
                        className={`${styles.filterButton} ${
                            activeFilter === 'ml' ? styles.active : ''
                        }`}
                        onClick={() => setActiveFilter('ml')}
                    >
                        <Cpu className={styles.filterIcon} />
                        Machine Learning
                    </button>
                    <button
                        className={`${styles.filterButton} ${
                            activeFilter === 'mobile' ? styles.active : ''
                        }`}
                        onClick={() => setActiveFilter('mobile')}
                    >
                        <Smartphone className={styles.filterIcon} />
                        Mobile
                    </button>

                    <button
                        className={`${styles.filterButton} ${
                            activeFilter === 'other' ? styles.active : ''
                        }`}
                        onClick={() => setActiveFilter('other')}
                    >
                        <Code className={styles.filterIcon} />
                        Others
                    </button>
                </div>

                <div className={styles.projectsGrid}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <div
                                className={styles.projectImage}
                                style={{ backgroundImage: `url(${project.imageUrl})` }}
                            />
                            <div className={styles.projectContent}>
                                <div className={styles.projectHeader}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <div className={styles.categoryIcon}>
                                        {getCategoryIcon(project.category)}
                                    </div>
                                </div>
                                <p className={styles.projectDescription}>
                                    {project.description}
                                </p>
                                <div className={styles.technologies}>
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                                    ))}
                                </div>
                                <div className={styles.projectLinks}>
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.projectLink}
                                        >
                                            <Github size={20} />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    {project.githubUrl2 && (
                                        <a
                                            href={project.githubUrl2}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.projectLink}
                                        >
                                            <Github size={20} />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.projectLink}
                                        >
                                            <ExternalLink size={20} />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;