import { FaGraduationCap } from "react-icons/fa";
import type { Education } from "../resumeData";

interface EducationSectionProps {
    education: Education[];
    relevantCourses: string;
}

const EducationSection = ({ education, relevantCourses }: EducationSectionProps) => {
    return (
        <section className="space-y-6">
            <header className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--accent-muted) text-(--accent)">
                    <FaGraduationCap className="text-base" />
                </span>
                <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-(--text-secondary)">
                    Education &amp; Certifications
                </h3>
            </header>
            <div className="space-y-5">
                {education.map((item) => (
                    <div key={item.title} className="space-y-1 border-l border-(--border) pl-4">
                        <h4 className="text-base font-semibold text-(--text-primary)">{item.title}</h4>
                        {item.details ? <p className="text-sm text-(--text-secondary)">{item.details}</p> : null}
                    </div>
                ))}
            </div>
            <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-(--text-primary)">
                    Relevant Courses &amp; Skills
                </h4>
                <p className="text-sm leading-relaxed text-(--text-secondary)">{relevantCourses}</p>
            </div>
        </section>
    );
};

export default EducationSection;
