import { FaTools } from "react-icons/fa";
import type { SkillCategory } from "../resumeData";
import SkillCategoryCard from "../components/SkillCategoryCard";

interface SkillsSectionProps {
    skillCategories: SkillCategory[];
}

const SkillsSection = ({ skillCategories }: SkillsSectionProps) => {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-2 text-(--text-tertiary)">
                <FaTools className="text-sm" />
                <span className="text-sm font-semibold uppercase tracking-widest text-(--text-secondary)">Skills</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                {skillCategories.map((category) => (
                    <SkillCategoryCard key={category.title} category={category} />
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
