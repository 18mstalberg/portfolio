export const objective =
    "Software engineer experienced in designing and modernizing scalable applications, backend systems, and cloud infrastructure. Proven ability to take ownership of technical initiatives, improve software architecture, and optimize performance and maintainability across production systems. Skilled in full-stack development with an expanding focus on Rust and systems programming. Collaborative problem-solver experienced in translating technical requirements into reliable, efficient, and maintainable software.";

export type Experience = {
    id: string;
    role: string;
    company: string;
    location: string;
    timeframe: string;
    employmentNote?: string;
    technologies?: string;
    achievements: string[];
};

export const experiences: Experience[] = [
    {
        id: "roadrunner",
        role: "Full-Stack Software Developer",
        company: "RoadRunner",
        location: "Remote",
        timeframe: "Nov 2025 – Nov 2026",
        technologies: "TypeScript, React, Ruby on Rails, PostgreSQL, AWS, Terraform, Nx, GitHub Actions",
        achievements: [
            "Developed and maintained production applications supporting sales, customer management, operations, billing, and internal business workflows across a full-stack architecture.",
            "Led frontend modernization initiatives, migrating legacy Rails-rendered interfaces into a modular React and TypeScript architecture within an Nx monorepo, improving maintainability, modularity, and separation of concerns.",
            "Designed and implemented backend functionality using Ruby on Rails, including REST APIs, background jobs, database operations, and third-party integrations supporting complex business workflows.",
            "Contributed to application reliability through automated testing, code reviews, troubleshooting, and improvements to CI/CD workflows.",
            "Maintained and enhanced cloud-based development infrastructure using AWS, Terraform, and Coder, improving consistency and reliability of engineering environments.",
        ],
    },
    {
        id: "uptech",
        role: "Full-Stack Software Developer",
        company: "Uptech Studio",
        location: "Bend, OR",
        timeframe: "June 2024 – Current",
        employmentNote: "Full-time: June 2024 – October 2025 | Contract: November 2025 – Present",
        technologies: "TypeScript, React, Python, PostgreSQL, AWS, Terraform, Docker, Flutter, Firebase, Supabase",
        achievements: [
            "Developed and maintained production applications across web, mobile, and backend systems, contributing to application architecture, API integrations, and complex business workflows.",
            "Worked on EV charging infrastructure integrations, implementing and troubleshooting communication protocols between charging hardware and cloud-based management platforms.",
            "Built and launched a subscription-based mobile app on iOS and Android as the sole developer, owning everything from barcode scanning and a product database of thousands of items to authentication, backend services, and in-app payments using Flutter, Supabase, and RevenueCat.",
            "Led modernization and refactoring efforts across legacy applications, improving software architecture, maintainability, and automated testing.",
            "Designed and optimized PostgreSQL schemas, queries, and migrations, supporting complex data relationships, data integrity, and application performance.",
            "Developed backend services, REST APIs, and Python automation tools, including a computer vision desktop agent that detected patient monitor alerts in under a second across 100+ monitors at dozens of healthcare locations.",
            "Designed and deployed cloud infrastructure using AWS, Terraform, and Docker, implementing CI/CD pipelines and supporting production reliability and security.",
        ],
    },
    {
        id: "osu",
        role: "Research Assistant & Computer Science Tutor",
        company: "Oregon State University",
        location: "Bend, OR",
        timeframe: "Sept 2023 – June 2024",
        technologies: "Python, FastAPI, AWS (EC2, S3, RDS), Docker, REST APIs",
        achievements: [
            "Led cloud infrastructure development for a grant-funded research project, implementing AWS infrastructure and containerized Python APIs.",
            "Collaborated with researchers and stakeholders to define requirements, design technical solutions, and provide guidance to team members.",
            "Tutored computer science students across introductory and advanced coursework, strengthening technical communication and mentorship skills.",
        ],
    },
];

export type Education = {
    title: string;
    details?: string;
};

export const education: Education[] = [
    {
        title: "AWS Certified Cloud Practitioner (CLF-C02) — Amazon Web Services",
        details: "June 2025",
    },
    {
        title: "HIPAA for Business Associates Training",
        details: "Feb 2025",
    },
    {
        title: "B.S. Computer Science — Oregon State University – Cascades (Bend, OR)",
        details: "Graduation: June 2024 — GPA: 4.0",
    },
];

export type SkillCategory = {
    title: string;
    skills: string[];
};

export const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: ["TypeScript", "Rust", "Python", "Ruby", "SQL", "HTML5", "CSS3", "Dart"],
    },
    {
        title: "Backend & Systems",
        skills: [
            "Ruby on Rails",
            "Axum",
            "Node.js",
            "FastAPI",
            "REST APIs",
            "GraphQL",
            "Asynchronous Processing",
            "Event-Driven Architecture",
            "OCPP",
        ],
    },
    {
        title: "Cloud & Infrastructure",
        skills: ["AWS (EC2, Lambda, S3, RDS, Cognito, IAM, etc.)", "Terraform", "Docker", "GitHub Actions", "CI/CD"],
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MySQL", "Supabase", "Firebase", "Amazon RDS"],
    },
    {
        title: "Frontend & Mobile",
        skills: ["React", "Next.js", "Vue", "Flutter", "Tailwind CSS"],
    },
    {
        title: "Testing & Engineering Practices",
        skills: [
            "Unit & Integration Testing",
            "RSpec",
            "Vitest",
            "Git",
            "Code Review",
            "System Design",
            "Performance Optimization",
        ],
    },
    {
        title: "Security & Tooling",
        skills: [
            "Authentication & Authorization",
            "RBAC",
            "HIPAA",
            "Nx",
            "Sentry",
            "AI-Assisted Spec-Driven Development (Claude Code, GitHub Copilot)",
        ],
    },
];
