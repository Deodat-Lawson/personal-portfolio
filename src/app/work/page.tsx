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
        id: '8',
        company: 'Roblox',
        position: 'Software Engineer Intern + Engineer Campus Ambassador',
        location: 'San Mateo, CA, USA',
        duration: 'May 2025 - Aug 2025',
        description: [
            'Developed an Interactive 3D Rig Facial Control Editor desktop application with Roblox Studio. Provide intuitive real-time rendering, and a combination of parameterized and drag-and-drop facial animation editing for 10M+ global creators.',
            'Developed specialized visualization, 3D graphic and animation rendering, and editor control UX components. Established a reusable component library and published across Roblox Studio organization. Reduced duplicated UX effort by 12%.',
            'Proposed a keyframe caching and optimization algorithm in the core Roblox animation engine. Improved framerate by ~50%.',
            'Developed a real-time data synchronisation pipeline to support interoperability between new React-lua based rendering component and legacy C++ Roblox game engine based editing component. Reduced legacy complement latency by up to 80%',
            'Defined a canonical data model, interface and event bus to standardize user editing actions. Improved conflict resolution and editing responseness with event-sourcing and operational transformation for undo, redo, and collaborative editing.',
            'Evangelized GenAI adoption for coding productivity, developed tools and prompts to analyze codebase, automate testing and CR.'
        ],
        technologies: ['C++', 'Lua', 'React-lua', 'Cursor', '3D Graphics'],
        companyUrl: 'https://www.roblox.com/',
        logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjY3NjMgMEwwIDQ0LjE2NTlMNDMuNTc3MSA1Nkw1NS4yNTMzIDExLjgzNDFMMTEuNjc2MyAwWk0zMi4wODQ5IDM1LjgyN0wxOS45MDc5IDMyLjUxODVMMjMuMTcyMyAyMC4xNzY5TDM1LjM1NDIgMjMuNDg1NUwzMi4wODQ5IDM1LjgyN1oiIGZpbGw9IiMzOTNCM0QiLz4KPC9zdmc+Cg=='
    },
    {
        id: '9',
        company: 'NextTier',
        position: 'Software Engineer Technology Intern',
        location: 'Sacramento, CA, USA',
        duration: 'Jan 2025 - May 2025',
        description: [
            'Developed a quantitative and fundamentals analysis data pipeline and Gen AI advisor agent for cryptocurrency traders',
            'Implemented a near real-time data pipeline to ingest multi-format, mixed structured and unstructured data from more than 100+ exchanges and 12+ data sources. Implemented configurable and extensible orchestration with AirFlow.',
            'Developed data sanitization, standardization, aggregation and analytical business logic as a set of composable stages.',
            'Implemented a multi-agent summarization and advisor copilot with specialized agents for data interpretation, report generation, debate-based reasoning to generate balanced and objective advice using available analytics data and documents.',
            'Developed context engineering and knowledge retrieval capability. Optimized a natural language to the InfluxDB query generation model for qualitative analysis. Deployed semantic search with Pinecone for unstructured document knowledge.',
            'Proposed implemented context-aware UX layout engine to dynamically compose common reporting and dashboard widget based on user profile, current task, and data being analyzed or queried. Reduced UX complexity and user fatigue.',
            'Deployed CI/CD pipeline and configured infrastructure and deployment using K8s to orchestrate a containerized fleet.'
        ],
        technologies: ['Java', 'Spring Boot', 'Python', 'Kafka', 'Redis', 'InfluxDB', 'AWS', 'Pinecone', 'LangGraph', 'API Gateway', 'ECS', 'Bedrock'],
        companyUrl: 'https://www.nexttier.com/',
        logo: ''
    },
    {
        id: '5',
        company: 'Alamma Health (Start Up)',
        position: 'Software Engineering Intern',
        location: 'Baltimore, MD, USA',
        duration: 'Jan 2025 - Present',
        description: [
            'Developing Langchain Agents and Tools to gather CO2 emissions data from a user-specified food menu',
            'Design and Implemented fully working React Native app with Expo Go',
        ],
        technologies: ['LangChain', 'React Native'],
        companyUrl: '',
        logo: ''
    },
    {
        id: '6',
        company: 'Aireful (Startup)',
        position: 'Cofounder and Software Engineer Lead',
        location: 'Baltimore, MD, USA',
        duration: 'Jan 2025 - Present',
        description: [
            'Implemented a bi-directional text-to-speech and text-to-SQL natural language querying against any Redis and Supabase instance.',
            'Developed intelligent semantics and schema analysis and extraction logic, user intent interpretation, and query generation.',
            'Integrated Adobe Acrobat and Bright Data APIs with an AI agent to automate document fill-out workflows.',
            'Optimized prompt engineering using SAMMO to improve relevance, improved user positive feedback rate from 56% to 72%.'
        ],
        technologies: ['Python', 'Pinecone', 'SAMMO', 'Chain of Thought', 'ANN Algorithm (HNSW/IVF/LSH)', 'PEFT (LoRA, QLoRA)'],
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