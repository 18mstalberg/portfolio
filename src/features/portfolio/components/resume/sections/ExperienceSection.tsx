import { FaBriefcase } from "react-icons/fa";
import type { Experience } from "../resumeData";

interface ExperienceSectionProps {
    experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
    return (
        <section className="space-y-6">
            <header className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--accent-muted) text-(--accent)">
                    <FaBriefcase className="text-base" />
                </span>
                <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-(--text-secondary)">Experience</h3>
            </header>
            <div className="space-y-8">
                {experiences.map((experience) => (
                    <article key={experience.id} className="space-y-3">
                        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                            <div>
                                <h4 className="text-xl font-semibold text-(--text-primary)">{experience.role}</h4>
                                <p className="text-sm text-(--text-secondary)">
                                    {experience.company} — {experience.location}
                                </p>
                            </div>
                            <span className="text-sm font-medium uppercase tracking-wide text-(--text-tertiary)">
                                {experience.timeframe}
                            </span>
                        </div>
                        {experience.technologies ? (
                            <p className="text-sm text-(--text-secondary)">{experience.technologies}</p>
                        ) : null}
                        <ul className="ml-5 list-disc space-y-2 text-sm text-(--text-secondary)">
                            {experience.achievements.map((achievement) => (
                                <li key={achievement} className="leading-relaxed">
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
