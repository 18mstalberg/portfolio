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
                    <div
                        key={category.title}
                        className="rounded-lg border border-(--muted) bg-(--card) p-4 shadow-sm"
                    >
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-(--text-primary) mb-3">
                            {category.title}
                        </h4>

                        <div className="flex flex-wrap justify-center gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-(--accent-muted) text-(--accent)"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
