import type { Education } from "../resumeData";

interface EducationCardProps {
    item: Education;
}

const EducationCard = ({ item }: EducationCardProps) => {
    return (
        <div className="rounded-3xl border border-(--border) bg-(--bg-secondary) p-6">
            <h4 className="text-base font-semibold text-(--text-primary)">{item.title}</h4>
            {item.details ? <p className="mt-1 text-sm text-(--text-tertiary)">{item.details}</p> : null}
        </div>
    );
};

export default EducationCard;
