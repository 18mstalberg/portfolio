import { FaTools } from "react-icons/fa";
import type { SkillCategory } from "../resumeData";

interface SkillsSectionProps {
    skillCategories: SkillCategory[];
}

const SkillsSection = ({ skillCategories }: SkillsSectionProps) => {
    return (
        <section className="space-y-6">
            <header className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--accent-muted) text-(--accent)">
                    <FaTools className="text-base" />
                </span>
                <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-(--text-secondary)">Skills</h3>
            </header>
            <div className="grid gap-6 sm:grid-cols-2">
                {skillCategories.map((category) => (
                    <div key={category.title} className="space-y-2">
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-(--text-primary)">
                            {category.title}
                        </h4>
                        <ul className="ml-5 list-disc space-y-1 text-sm text-(--text-secondary)">
                            {category.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
