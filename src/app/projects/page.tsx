// src/pages/projects.tsx
"use client"

import React, { useState } from 'react';
import { Github, ExternalLink, Cpu, Code, Layout, Smartphone } from 'lucide-react';
import styles from '../../styles/projects.module.css';
import { Navbar } from '~/app/_component/Navbar';

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    githubUrl2?: string;
    liveUrl?: string;
    devpostUrl?: string; // <-- Add DevPost URL here
    imageUrl: string;
    videoUrl?: string;
    category: 'fullstack' | 'ml' | 'mobile' | 'other';
}

const projects: Project[] = [
    {
        id: '1',
        title: 'JHU Course Vote Social Media Platform',
        description:
            "A live rating/social platform for course discussions can greatly benefit your school community by making course selection more transparent, fostering meaningful peer interactions, and improving overall academic experiences.",
        technologies: ['Next.js', 'TypeScript', 'Drizzle', 'PostgreSQL', 'Clerk'],
        githubUrl: 'https://github.com/Deodat-Lawson/click_to_punch_nlp',
        githubUrl2: '',
        liveUrl: 'https://www.jhucoursevote.online/',
        devpostUrl: '',
        imageUrl: '/projects/ecommerce.jpg',
        videoUrl:'https://www.youtube.com/embed/jZFcyiArpVI?si=ljYGqwvHG7-48lFF',
        category: 'fullstack',
    },
    {
        id: '2',
        title: 'AI Integrated Finance Tracker',
        description:
            'A smart tool that leverages AI to monitor, analyze, and optimize your financial activities, providing personalized insights and real-time updates to keep your finances on track.',
        technologies: ['Spring Boot', 'ChatGPT API', 'Next.js', 'React', 'Chain-of-thought Prompting'],
        githubUrl: 'https://github.com/Deodat-Lawson/personalFinanceTrackFrontend',
        githubUrl2: 'https://github.com/Deodat-Lawson/personalFinanceTrackBackend',
        liveUrl: '',
        devpostUrl: '', // Example DevPost link
        imageUrl: '/projects/ai-image.jpg',
        videoUrl:'https://www.youtube.com/embed/gImQ5uFKIYo?si=K-RfFyzREASox7CT',
        category: 'fullstack',
    },
    {
        id: '3',
        title: 'Portfolio Website',
        description: 'My Personal portfolio website built with modern technologies and smooth animations.',
        technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'EmailJS'],
        githubUrl: 'https://github.com/Deodat-Lawson/personal-portfolio',
        liveUrl: 'timothylin.site',
        devpostUrl: '',
        imageUrl: '/projects/portfolio.jpg',
        videoUrl: 'https://www.youtube.com/embed/5K68y1pTUFU?si=DebgvITy-S3hUWOk',
        category: 'fullstack',
    },
    {
        id: '5',
        title: 'BenGenius',
        description: 'We strive to make trash classification easier and promote environmental consciousness in our community. By identifying trash types and offering instruction on possible disposal, our app fosters a great sense of collective responsibility. Moreover, our app benefits the visually impaired, allowing them to independently sort and dispose of their waste with the help of our app’s audio cues and OpenCV.',
        technologies: ['React.js' , 'Flask' , 'OpenCV', 'Tensorflow', 'ChatGPT API'],
        githubUrl: 'https://github.com/Deodat-Lawson/BinGenuisBackend',
        githubUrl2: 'https://github.com/JohnnieShen/BinGenius',
        liveUrl: '',
        devpostUrl: 'https://devpost.com/software/bingenius',
        imageUrl: '',
        videoUrl: 'https://www.youtube.com/embed/JwAIbWA-Kmg?si=CIz_cr3xUAiieNNU',
        category: 'ml',
    },
    {
        id: '4',
        title: 'LifePal',
        description: 'LifePal is an incentivized timer app that helps students stay organized and motivated by allowing them to create custom sessions, categorize timers, track upcoming and completed sessions, and compare productivity in an analytics tab. Inspired by Tamagotchi, LifePal features a pet system that levels up with completed study sessions, providing a fun and engaging way to reinforce good habits.',
        technologies: ['Android Studio','Firebase'],
        githubUrl: 'https://github.com/jhu-cs-uima-sp24/teamItestRepo',
        liveUrl: '',
        devpostUrl: '',
        imageUrl: '',
        videoUrl:'https://www.youtube.com/embed/R-QbORHD2Ps?si=EY43yB-CExVMDqZ3',
        category: 'mobile',
    },
    {
        id: '6',
        title: 'NORA AI',
        description: 'AI university application consultant',
        technologies: ['Next.js', 'PostgresSQL', 'Clerk', 'SAMMO Prompting', 'Chain Of Thought Prompting', 'ChatGPT API'],
        githubUrl: 'https://github.com/Deodat-Lawson/the_most_promising_future_frontend',
        githubUrl2: 'https://github.com/Deodat-Lawson/the_most_promising_future_backend',
        liveUrl: '',
        devpostUrl: '', // Example DevPost link
        imageUrl: '',
        videoUrl:'https://www.youtube.com/embed/R-QbORHD2Ps?si=EY43yB-CExVMDqZ3',
        category: 'fullstack',
    },
    {
        id: '10',
        title: 'BodyFat Estimator',
        description: 'Self trained model that measures body fat based on scrapped dataset',
        technologies: ['pandas', 'numpy', 'seaborn', 'matplotlib', 'AWS'],
        githubUrl: 'https://github.com/Deodat-Lawson/BodyFatEstimator/tree/main',
        githubUrl2: '',
        liveUrl: '',
        devpostUrl: '',
        imageUrl: '',
        videoUrl:'https://www.youtube.com/embed/R-QbORHD2Ps?si=EY43yB-CExVMDqZ3',
        category: 'ml',
    },
    {
        id: '7',
        title: 'Rome',
        description: 'Rome is an AI-powered platform that transforms brand identities into personalized, interactive video games, enabling deeper audience engagement and memorable digital experiences. By leveraging generative AI, it seamlessly integrates a brand’s essence into dynamic gameplay.',
        technologies: ['Kamboom.js', 'Typescript', 'Django', 'React', 'Midjourney'],
        githubUrl: "https://github.com/ho-tony/rome-fe",
        githubUrl2: "https://github.com/klxu03/rome",
        liveUrl: '',
        devpostUrl: 'https://devpost.com/software/rome',
        imageUrl: '',
        videoUrl:'https://www.youtube.com/embed/DhvwM8waTL0?si=VQNn-7eZgZOpdCTw',
        category: 'fullstack',
    },
    {
        id: '8',
        title: 'Project Venus',
        description: '',
        technologies: ['Django', 'React.js'],
        githubUrl: 'https://github.com/Deodat-Lawson/projectVenus',
        githubUrl2: '',
        liveUrl: '',
        devpostUrl: '',
        imageUrl: '',
        videoUrl:'https://www.youtube.com/embed/R-QbORHD2Ps?si=EY43yB-CExVMDqZ3',
        category: 'fullstack',
    },
    {
        id: '9',
        title: 'Hop On Dining',
        description: 'Our application shows the map of the campus, provides the total number of people in the dining halls in real-time, and tells users the daily menus and expected waiting time.',
        technologies: ['Android Studio', 'Firebase', 'Statistical Analysis'],
        githubUrl: 'https://github.com/Charles201428/Hop-On-Dinning-Hall-Stats-Analysis',
        githubUrl2: 'https://github.com/Deodat-Lawson/HackathonA',
        liveUrl: '',
        devpostUrl: 'https://devpost.com/software/hop-on-dining',
        imageUrl: '',
        videoUrl:'https://www.youtube.com/embed/R-QbORHD2Ps?si=EY43yB-CExVMDqZ3',
        category: 'mobile',
    },

];

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'ml' | 'mobile' | 'other'>('all');

    const filteredProjects = projects.filter((project) =>
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
            {/* Sticky/fixed navbar container (if you have one) */}
            <Navbar /> {/* <-- Example usage if you have a Navbar component */}

            {/* Main content container */}
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>My Projects</h1>
                    <p className={styles.subtitle}>Explore my journey through code and creativity</p>
                </div>

                <div className={styles.filters}>
                    <button
                        className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`${styles.filterButton} ${activeFilter === 'fullstack' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('fullstack')}
                    >
                        <Layout className={styles.filterIcon} />
                        Full-Stack
                    </button>
                    <button
                        className={`${styles.filterButton} ${activeFilter === 'ml' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('ml')}
                    >
                        <Cpu className={styles.filterIcon} />
                        Machine Learning
                    </button>
                    <button
                        className={`${styles.filterButton} ${activeFilter === 'mobile' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('mobile')}
                    >
                        <Smartphone className={styles.filterIcon} />
                        Mobile
                    </button>

                    <button
                        className={`${styles.filterButton} ${activeFilter === 'other' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('other')}
                    >
                        <Code className={styles.filterIcon} />
                        Others
                    </button>
                </div>

                <div className={styles.projectsGrid}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <div className={styles.projectVideo}>
                                <iframe
                                    width="100%"
                                    height="250"
                                    src={project.videoUrl}
                                    title={project.title}
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                            <div className={styles.projectContent}>
                                <div className={styles.projectHeader}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <div className={styles.categoryIcon}>{getCategoryIcon(project.category)}</div>
                                </div>
                                <p className={styles.projectDescription}>{project.description}</p>
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
                                    {project.devpostUrl && (
                                        <a
                                            href={project.devpostUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.projectLink}
                                        >
                                            <ExternalLink size={20} />
                                            <span>DevPost</span>
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