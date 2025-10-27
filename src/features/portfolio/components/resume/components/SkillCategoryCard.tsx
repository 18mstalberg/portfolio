import type { SkillCategory } from "../resumeData";

interface SkillCategoryCardProps {
    category: SkillCategory;
}

const SkillCategoryCard = ({ category }: SkillCategoryCardProps) => {
    return (
        <div className="rounded-2xl border border-(--border) bg-(--bg-secondary) p-5">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-(--text-primary)">{category.title}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full border border-(--accent) bg-(--bg-elevated) px-3 py-1 text-xs font-medium text-(--accent)"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillCategoryCard;
