const Resume = () => {
    return (
        <div className="h-full w-full md:overflow-y-auto rounded-2xl border border-(--border) bg-(--bg-elevated) shadow p-6 flex flex-col gap-6">
            <h2 className="text-2xl font-bold mb-2 text-(--text-primary)">Resume</h2>
            {/* Objective / Summary */}
            <section>
                <h3 className="text-lg font-semibold mb-1 text-(--text-primary)">Objective</h3>
                <p className="text-(--text-secondary)">
                    Full-stack software engineer with experience across multiple technology stacks,
                    building scalable and impactful software solutions. Skilled in leveraging and
                    merging both emerging technologies such as AI and industry best practices to
                    drive innovation and efficiency. Always looking to improve and build better systems.
                </p>
            </section>

            {/* Work Experience */}
            <section>
                <h3 className="text-lg font-semibold mb-2 text-(--text-primary)">Work Experience</h3>

                <article className="mb-4">
                    <div className="flex items-baseline justify-between">
                        <div>
                            <div className="font-medium text-(--text-primary)">Full-Stack Software Developer</div>
                            <div className="text-sm text-(--text-tertiary)">Uptech Studio — Bend, OR</div>
                        </div>
                        <div className="text-sm text-(--text-tertiary)">June 2024 – Current</div>
                    </div>
                    <div className="mt-2 text-(--text-secondary)">
                        <div className="text-sm mb-2">Technologies: Flutter, Supabase, Firebase, AWS (RDS, S3, Lambda, Amplify, Cognito, CodeBuild), Terraform, React, PostgreSQL, TypeScript, Ruby on Rails, Python (incl. Computer Vision), SQL & NoSQL</div>
                        <ul className="px-4 text-left list-disc list-inside space-y-1">
                            <li>Architected, developed, and deployed cross-platform mobile applications using Flutter to production (App Store & Google Play).</li>
                            <li>Led implementation of secure, anonymous authentication and robust session management with role-based access controls.</li>
                            <li>Refactored legacy full-stack codebases to improve architecture, maintainability, and testing.</li>
                            <li>Designed and optimized complex PostgreSQL queries to ensure performant data access patterns.</li>
                            <li>Utilized Supabase for authentication, row-level security, and edge functions for low-latency server logic.</li>
                            <li>Built and maintained CI/CD and infrastructure using AWS services and Terraform.</li>
                            <li>Engineered scalable backend services and a signed desktop app with integrated computer vision in Python.</li>
                            <li>Managed complex database migrations ensuring schema integrity and minimal downtime.</li>
                        </ul>
                    </div>
                </article>

                <article className="mb-4">
                    <div className="flex items-baseline justify-between">
                        <div>
                            <div className="font-medium text-(--text-primary)">Computer Science Tutor</div>
                            <div className="text-sm text-(--text-tertiary)">Oregon State University — Bend, OR</div>
                        </div>
                        <div className="text-sm text-(--text-tertiary)">Sept 2023 – June 2024</div>
                    </div>
                    <div className="mt-2 text-(--text-secondary)">
                        <ul className="px-4 text-left list-disc list-inside space-y-1">
                            <li>Provided tutoring for computer science coursework from introductory to advanced topics.</li>
                            <li>Adapted teaching methods to diverse learning styles and student needs.</li>
                            <li>Covered programming languages, data structures, algorithms, operating systems, and networks.</li>
                        </ul>
                    </div>
                </article>

                <article>
                    <div className="flex items-baseline justify-between">
                        <div>
                            <div className="font-medium text-(--text-primary)">Research Assistant — FFAR/Kroger Grant (Cloud Team Lead)</div>
                            <div className="text-sm text-(--text-tertiary)">Oregon State University — Bend, OR</div>
                        </div>
                        <div className="text-sm text-(--text-tertiary)">Mar 2023 – Dec 2023</div>
                    </div>
                    <div className="mt-2 text-(--text-secondary)">
                        <ul className="px-4 text-left list-disc list-inside space-y-1">
                            <li>Led cloud team to set up scalable, secure cloud infrastructure for a research project.</li>
                            <li>Designed and implemented a FastAPI custom API deployed in Docker on EC2.</li>
                            <li>Managed storage with S3 and relational data with RDS; used Pydantic for data models.</li>
                            <li>Collaborated with stakeholders to align technical work with research goals.</li>
                        </ul>
                    </div>
                </article>
            </section>

            {/* Education & Certifications */}
            <section>
                <h3 className="text-lg font-semibold mb-2 text-(--text-primary)">Education & Certifications</h3>
                <ul className="space-y-2 text-(--text-secondary)">
                    <li>
                        <div className="font-medium text-(--text-primary)">B.S. Computer Science — Oregon State University, Cascades (Bend, OR)</div>
                        <div className="text-sm text-(--text-tertiary)">Graduation: June 2024 — GPA: 4.0</div>
                    </li>
                    <li>
                        <div className="font-medium text-(--text-primary)">Certified Cloud Practitioner (CLF-C02) — Amazon Web Services (AWS)</div>
                    </li>
                </ul>
                <div className="mt-2 text-(--text-secondary)">
                    <div className="font-semibold text-(--text-primary)">Relevant Courses & Skills</div>
                    <div className="text-sm">Advanced Web Development, React.js, Node.js, Server-side rendering, RESTful APIs, Authentication, Databases, MySQL, PostgreSQL, MongoDB, Data Structures & Algorithms, Machine Learning, Python, scikit-learn, TensorFlow, Network Programming, Software Engineering, Testing, Git</div>
                </div>
            </section>

            {/* Skills */}
            <section>
                <h3 className="text-lg font-semibold mb-2 text-(--text-primary)">Skills</h3>
                <ul className="flex flex-wrap gap-2">
                    <li className="bg-(--bg-secondary) px-3 py-1 rounded text-sm text-(--text-primary)">JavaScript</li>
                    <li className="bg-(--bg-secondary) px-3 py-1 rounded text-sm text-(--text-primary)">TypeScript</li>
                    <li className="bg-(--bg-secondary) px-3 py-1 rounded text-sm text-(--text-primary)">React</li>
                    <li className="bg-(--bg-secondary) px-3 py-1 rounded text-sm text-(--text-primary)">Flutter</li>
                    <li className="bg-(--bg-secondary) px-3 py-1 rounded text-sm text-(--text-primary)">Python</li>
                    <li className="bg-(--bg-secondary) px-3 py-1 rounded text-sm text-(--text-primary)">PostgreSQL</li>
                    <li className="bg-(--bg-secondary) px-3 py-1 rounded text-sm text-(--text-primary)">AWS</li>
                    <li className="bg-(--bg-secondary) px-3 py-1 rounded text-sm text-(--text-primary)">Supabase</li>
                    <li className="bg-(--bg-secondary) px-3 py-1 rounded text-sm text-(--text-primary)">Terraform</li>
                </ul>
            </section>
        </div>
    );
}

export default Resume;
