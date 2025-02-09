import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import styles from '../../styles/work.module.css';

interface WorkExperience {
    id: string;
    company: string;
    position: string;
    location: string;
    duration: string;
    description: string[];
    technologies: string[];
    companyUrl?: string;
    logo?: string;
}

const experiences: WorkExperience[] = [
    {
        id: '5',
        company: 'Alamma Health (Start Up)',
        position: 'Software Engineering Intern',
        location: 'Baltimore, MD, USA',
        duration: 'Jan 2025 - Present',
        description: [
            'Currently Onboarding'
        ],
        technologies: ['LangChain'],
        companyUrl: '',
        logo: ''
    },
    {
        id: '6',
        company: 'Aireful (Start Up)',
        position: 'Software Engineering Tech Lead',
        location: 'Baltimore, MD, USA',
        duration: 'Jan 2025 - Present',
        description: [
            'Developed a AI powered Chatbot Platform that integrate multiple LLMs (Gemini, ChatGPT, Deepseek, and Claude) models to provide a seamless experience for users',
            'Lead a small team of 2-3 developers to build a scalable and secure infrastructure using Next.js, Prisma, Supabase and Vercel',
        ],
        technologies: ['Vercel', 'React', 'Next.js', 'Prisma', 'Supabase'],
        companyUrl: 'https://aireful.vercel.app/',
        logo: 'https://h0xotvuawi.ufs.sh/f/KSLubuOGoQY2QTeWKet9Utl6FkETmxeuvZC0YAg84VMB57c1'
    },
    {
        id: '7',
        company: 'Johns Hopkins University',
        position: 'Algorithms Course Assistant',
        location: 'Baltimore, MD, USA',
        duration: 'Jan 2025 - Present',
        description: [
            'Guided students through complex algorithmic concepts, homework assignments, and projects during weekly office hours.',
            'Led small-group review sessions, clarified problem sets, and proctored quizzes to reinforce key topics.',
            'Collaborated with faculty and fellow course assistants to enhance course materials and ensure a smooth learning experience for students.',
        ],
        technologies: ['Min-Cut Max-Flow','Dynamic Programming', 'Graph Theory', 'Greedy Algorithms', 'Time Complexity', 'NP Completeness'],
        companyUrl: 'https://www.jhu.edu/',
        logo: 'https://h0xotvuawi.ufs.sh/f/KSLubuOGoQY2bwMRkW2r4k1ug2cIMO7AxhWZJm08SoX5VeYq'
    },
    {
        id: '1',
        company: 'Willis Towers Watson',
        position: 'Health and Benefits Data Engineer Intern',
        location: 'Seattle, WA, USA',
        duration: 'June 2024 - Aug 2024',
        description: [
            'Built a data pipeline to support ETL workflow for multiple major clients, including data input, cleaning, reformatting, and\n' +
            'preprocessing to streamline trends and patterns through Python, SQL, and Excel.',
            'Cleaned, analyzed and compared large datasets on employee benefits through k-means clustering for major tech clients',
            'Presented in-depth explanations of AI and taught AI integration techniques through live demonstrations, influencing\n' +
            'multiple major projects in the North America region.'
        ],
        technologies: ['Pandas', 'Excel VBA', 'PostgresSQL', 'scikit-learn', 'Jupyter Notebook'],
        companyUrl: 'https://www.wtwco.com/en-ca',
        logo: 'https://utfs.io/f/KSLubuOGoQY2Mfa6QpMSGUXTVvkwH8PJRbmEroyz5InsBguq'
    },
    {
        id: '2',
        company: 'Eth Tech',
        position: 'Software Engineer Intern',
        location: 'Newark, CA, USA (Remote)',
        duration: 'Dec 2023 - Mar 2024',
        description: [
            'Developed an online retail platform in a microservices architecture using Java Spring Boot for backend development.',
            'Engineered advanced features for seamless product exploration, selection, and management, harnessing Spring Data for\n' +
            'efficient data operations across MySQL and MongoDB databases.',
            'Implemented an efficient Redis caching mechanism to optimize system performance, reduce response times, and ensure\n' +
            'seamless scalability to meet growing user demands.',
            'Orchestrated the deployment of the online retail service on AWS cloud infrastructure, ensuring optimized hosting efficiency\n' +
            'for uninterrupted service availability.'
        ],
        technologies: ['Spring Boot', 'PostgreSQL', 'Redis', 'MongoDB', 'AWS'],
        companyUrl: 'https://www.eth-tech.net/',
        logo: 'https://utfs.io/f/KSLubuOGoQY2CnQSeWjHkEcFtWzHdeU91aP2BbIivKDZlyM0'
    },
    {
        id: '3',
        company: 'Quam Plus International Financial Limited',
        position: 'Software Developer Intern',
        location: 'Hong Kong',
        duration: 'May 2023 – June 2023',
        description: [
            'Created detailed stock reports with leadership, incorporating industry and financial analysis, ESG, and risk assessments.',
            'Used TensorFlow to optimize a neural network algorithm for the Asia market, saving over 100 hours in testing time.',
            'Worked with cross-functional teams to improve data pipelines and quality, ensuring insights for decision-making.'
        ],
        technologies: ['Tensorflow', 'scikit-learn', 'Jupyter Notebook', 'Bloomberg Terminal', 'Excel'],
        companyUrl: 'https://www.quamplus.com/en',
        logo: 'https://utfs.io/f/KSLubuOGoQY2Beisf7gL8ECAqmWXPS0Rjg7y1kdYa6cOFIQu'
    },
    {
        id: '4',
        company: 'Learning Buddies Network',
        position: 'IT Manager & System Developer',
        location: 'Vancouver, BC, Canada',
        duration: 'Sep 2020 – May 2023',
        description: [
            'Led the development of a Learning Management System (LMS) to support online training for over 1,000 volunteers,\n' +
            'applying a full stack with React for frontend, Express.js and Flask for backend, and MySQL for database management.    ',
            'Developed RESTful APIs using Express.js for handling of user authentication, course management, and data retrieval, with\n' +
            'additional functionalities implemented in Flask for complex data processing and integration of machine learning models.',
            'Utilized MySQL to store and manage user information, course details, and registration data, implementing indexing and\n' +
            'query optimization to ensure data integrity and efficient retrieval processes.',
            'Actively gathered user feedback through surveys and analytics, performing iterative improvements and deploying updates\n' +
            'seamlessly with CI/CD pipelines, enhancing the overall functionality and user satisfaction of the LMS platform.'
        ],
        technologies: ['Javascript','Flask', 'MySQL', 'scikit-learn', 'Express.js','Google Colab'],
        companyUrl: 'https://www.learningbuddiesnetwork.com',
        logo: 'https://utfs.io/f/KSLubuOGoQY27zQfRLDCPh9nKE7rO421wRlFovAZybVg0asS'
    }
];

const ExperiencePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Work Experience</h1>
                <p className={styles.subtitle}>
                    My professional journey in software development
                </p>
            </div>

            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div
                        key={exp.id}
                        className={`${styles.timelineItem} ${index % 2 === 0 ? styles.right : styles.left}`}
                    >
                        <div className={styles.timelineContent}>
                            <div className={styles.logoContainer}>
                                {exp.logo ? (
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        className={styles.companyLogo}
                                    />
                                ) : (
                                    <Briefcase className={styles.defaultLogo} />
                                )}
                            </div>

                            <div className={styles.companyHeader}>
                                <h3 className={styles.companyName}>
                                    {exp.company}
                                    {exp.companyUrl && (
                                        <a
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.companyLink}
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </h3>
                                <h4 className={styles.position}>{exp.position}</h4>
                            </div>

                            <div className={styles.metaInfo}>
                <span className={styles.duration}>
                  <Calendar size={16} />
                    {exp.duration}
                </span>
                                <span className={styles.location}>
                  <MapPin size={16} />
                                    {exp.location}
                </span>
                            </div>

                            <ul className={styles.responsibilities}>
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>

                            <div className={styles.technologies}>
                                {exp.technologies.map((tech) => (
                                    <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencePage;