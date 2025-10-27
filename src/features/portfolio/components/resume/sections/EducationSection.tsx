import { FaGraduationCap } from "react-icons/fa";
import type { Education } from "../resumeData";
import EducationCard from "../components/EducationCard";

interface EducationSectionProps {
    education: Education[];
    relevantCourses: string;
}

const EducationSection = ({ education, relevantCourses }: EducationSectionProps) => {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-2 text-(--text-tertiary)">
                <FaGraduationCap className="text-sm" />
                <span className="text-sm font-semibold uppercase tracking-widest text-(--text-secondary)">
                    Education &amp; Certifications
                </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {education.map((item) => (
                    <EducationCard key={item.title} item={item} />
                ))}
            </div>
            <div className="rounded-2xl border border-dashed border-(--border) p-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-(--text-secondary)">Relevant Courses &amp; Skills</h4>
                <p className="mt-2 text-sm text-(--text-secondary)">{relevantCourses}</p>
            </div>
        </section>
    );
};

export default EducationSection;
