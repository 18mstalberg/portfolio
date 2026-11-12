import { FaApple, FaExternalLinkAlt, FaGithub, FaGooglePlay } from "react-icons/fa";
import { projects, type Project } from "./projectsData";

const ProjectCard = ({ project }: { project: Project }) => {
    const { github, demo, appStore, googlePlay } = project.links ?? {};

    return (
        <article className="lift -mx-5 space-y-4 p-5 text-left">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-xl font-semibold text-(--text-primary)">{project.name}</h4>
                        {project.status === "In progress" && (
                            <span className="rounded-full border border-(--border) px-2 py-0.5 text-xs font-medium text-(--text-tertiary)">
                                In progress
                            </span>
                        )}
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wide text-(--text-tertiary)">
                        {project.context}
                    </p>
                    <p className="text-sm text-(--text-secondary)">{project.tagline}</p>
                </div>
                {(github || demo || appStore || googlePlay) && (
                    <div className="flex shrink-0 items-center gap-4">
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source on GitHub`}>
                                <FaGithub className="h-5 w-5" />
                            </a>
                        )}
                        {demo && (
                            <a href={demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo`}>
                                <FaExternalLinkAlt className="h-4 w-4" />
                            </a>
                        )}
                        {appStore && (
                            <a href={appStore} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on the App Store`}>
                                <FaApple className="h-5 w-5" />
                            </a>
                        )}
                        {googlePlay && (
                            <a href={googlePlay} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on Google Play`}>
                                <FaGooglePlay className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                )}
            </div>

            <p className="text-sm leading-relaxed text-(--text-secondary)">{project.description}</p>

            <ul className="ml-5 list-disc space-y-2 text-sm text-(--text-secondary)">
                {project.highlights.map((highlight) => (
                    <li key={highlight} className="leading-relaxed">
                        {highlight}
                    </li>
                ))}
            </ul>

            <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                {project.technologies.map((tech) => (
                    <li
                        key={tech}
                        className="rounded-full border border-(--border) px-3 py-1 text-xs font-medium text-(--accent)"
                    >
                        {tech}
                    </li>
                ))}
            </ul>
        </article>
    );
};

const ProjectsContent = () => {
    const sorted = [...projects].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));

    return (
        <div className="space-y-3">
            {sorted.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectsContent;
