import { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import ExperienceCard from "../components/ExperienceCard";
import type { Experience } from "../resumeData";

interface ExperienceSectionProps {
    experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
    const defaultExpandedId = experiences[0]?.id;
    const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(
        defaultExpandedId ? { [defaultExpandedId]: true } : {}
    );

    const handleToggle = (id: string) => {
        setExpandedCards((previous) => ({ ...previous, [id]: !previous[id] }));
    };

    return (
        <section className="space-y-4">
            <div className="flex items-center gap-2 text-(--text-tertiary)">
                <FaBriefcase className="text-sm" />
                <span className="text-sm font-semibold uppercase tracking-widest text-(--text-secondary)">Work Experience</span>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.id}
                        experience={experience}
                        expanded={Boolean(expandedCards[experience.id])}
                        onToggle={handleToggle}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
