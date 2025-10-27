export const objective =
    "Full-stack software engineer with experience across multiple technology stacks, building scalable and impactful software solutions. Skilled in leveraging and merging both emerging technologies such as AI and industry best practices to drive innovation and efficiency. Always looking to improve and build better systems.";

export type Experience = {
    id: string;
    role: string;
    company: string;
    location: string;
    timeframe: string;
    technologies?: string;
    achievements: string[];
};

export const experiences: Experience[] = [
    {
        id: "uptech",
        role: "Full-Stack Software Developer",
        company: "Uptech Studio",
        location: "Bend, OR",
        timeframe: "June 2024 – Current",
        technologies:
            "Flutter, Supabase, Firebase, AWS (RDS, S3, Lambda, Amplify, Cognito, CodeBuild), Terraform, React, PostgreSQL, TypeScript, Ruby on Rails, Python (incl. Computer Vision), SQL & NoSQL",
        achievements: [
            "Architected, developed, and deployed cross-platform mobile applications using Flutter to production (App Store & Google Play).",
            "Led implementation of secure, anonymous authentication and robust session management with role-based access controls.",
            "Refactored legacy full-stack codebases to improve architecture, maintainability, and testing.",
            "Designed and optimized complex PostgreSQL queries to ensure performant data access patterns.",
            "Utilized Supabase for authentication, row-level security, and edge functions for low-latency server logic.",
            "Built and maintained CI/CD and infrastructure using AWS services and Terraform.",
            "Engineered scalable backend services and a signed desktop app with integrated computer vision in Python.",
            "Managed complex database migrations ensuring schema integrity and minimal downtime.",
        ],
    },
    {
        id: "tutor",
        role: "Computer Science Tutor",
        company: "Oregon State University",
        location: "Bend, OR",
        timeframe: "Sept 2023 – June 2024",
        achievements: [
            "Provided tutoring for computer science coursework from introductory to advanced topics.",
            "Adapted teaching methods to diverse learning styles and student needs.",
            "Covered programming languages, data structures, algorithms, operating systems, and networks.",
        ],
    },
    {
        id: "research",
        role: "Research Assistant — FFAR/Kroger Grant (Cloud Team Lead)",
        company: "Oregon State University",
        location: "Bend, OR",
        timeframe: "Mar 2023 – Dec 2023",
        achievements: [
            "Led cloud team to set up scalable, secure cloud infrastructure for a research project.",
            "Designed and implemented a FastAPI custom API deployed in Docker on EC2.",
            "Managed storage with S3 and relational data with RDS; used Pydantic for data models.",
            "Collaborated with stakeholders to align technical work with research goals.",
        ],
    },
];

export type Education = {
    title: string;
    details?: string;
};

export const education: Education[] = [
    {
        title: "B.S. Computer Science — Oregon State University, Cascades (Bend, OR)",
        details: "Graduation: June 2024 — GPA: 4.0",
    },
    {
        title: "Certified Cloud Practitioner (CLF-C02) — Amazon Web Services (AWS)",
        details: "June 2025"
    },
];

export type SkillCategory = {
    title: string;
    skills: string[];
};

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Web/Mobile Development",
        skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Flutter", "Dart"],
    },
    {
        title: "Backend & APIs",
        skills: ["Node.js", "Ruby on Rails", "Python", "PostgreSQL", "mySQL", "Supabase", "GraphQL"],
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS (Lambda, RDS, S3, Codebuild, IAM, Cognito, etc.)", "Terraform", "Docker", "GitHub Actions"],
    },
    {
        title: "Tooling & Workflow",
        skills: ["Git", "Jest", "Postman", "Figma", "Sentry", "Amplitude", "Mixpanel", " VSCode"],
    },
];
