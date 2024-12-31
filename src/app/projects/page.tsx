// src/pages/projects.tsx
"use client"

import React, { useState } from 'react';
import { Github, ExternalLink, Cpu, Code, Layout } from 'lucide-react';
import styles from '../../styles/projects.module.css';
import {Navbar} from "~/app/_component/Navbar";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl: string;
    category: 'fullstack' | 'ml' | 'other';
}

const projects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product management, and real-time payment processing.',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
        githubUrl: 'https://github.com/yourusername/ecommerce',
        liveUrl: 'https://yourapp.com',
        imageUrl: '/projects/ecommerce.jpg',
        category: 'fullstack'
    },
    {
        id: '2',
        title: 'AI Image Generator',
        description: 'A machine learning model that generates artistic images from text descriptions using stable diffusion.',
        technologies: ['Python', 'PyTorch', 'FastAPI', 'React'],
        githubUrl: 'https://github.com/yourusername/ai-image-gen',
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
    // Add more projects here...
];

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'ml' | 'other'>('all');

    const filteredProjects = projects.filter(project =>
        activeFilter === 'all' ? true : project.category === activeFilter
    );

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'fullstack':
                return <Layout className={styles.filterIcon} />;
            case 'ml':
                return <Cpu className={styles.filterIcon} />;
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