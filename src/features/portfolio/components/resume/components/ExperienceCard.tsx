import { FiChevronDown } from "react-icons/fi";
import type { Experience } from "../resumeData";

interface ExperienceCardProps {
    experience: Experience;
    expanded: boolean;
    onToggle: (id: string) => void;
}

const ExperienceCard = ({ experience, expanded, onToggle }: ExperienceCardProps) => {
    return (
        <article className="group flex h-full flex-col rounded-3xl border border-transparent bg-(--bg-secondary) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-lg">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold text-(--text-primary)">{experience.role}</h4>
                    <p className="text-sm text-(--text-tertiary)">
                        {experience.company} — {experience.location}
                    </p>
                </div>
                <span className="rounded-full border border-(--border) px-3 py-1 text-xs font-medium text-(--text-secondary)">
                    {experience.timeframe}
                </span>
            </div>

            {experience.technologies ? (
                <p className="mt-3 text-sm text-(--text-secondary)">{experience.technologies}</p>
            ) : null}

            <div className={`mt-4 overflow-hidden transition-all duration-300 ${expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="space-y-2 text-sm text-(--text-secondary)">
                    {experience.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-(--accent)" />
                            <span>{achievement}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                onClick={() => onToggle(experience.id)}
                className="mt-5 flex items-center gap-2 self-start border-(--border) bg-transparent px-3 py-2 text-xs font-medium uppercase tracking-wide text-(--text-secondary) transition-colors hover:border-(--accent) hover:text-(--accent)"
            >
                {expanded ? "Hide details" : "Show details"}
                <FiChevronDown className={`transition-transform ${expanded ? "rotate-180" : "rotate-0"}`} />
            </button>
        </article>
    );
};

export default ExperienceCard;
