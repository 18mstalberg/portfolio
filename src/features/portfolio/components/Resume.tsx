import { useSearchParams } from "react-router";
import ResumeContent from "./resume/ResumeContent";
import ProjectsContent from "./projects/ProjectsContent";

const TABS = [
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const Resume = () => {
    // Tab lives in the URL (?tab=projects) so a link can open straight to projects.
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab: TabId = searchParams.get("tab") === "projects" ? "projects" : "resume";

    const selectTab = (id: TabId) => {
        setSearchParams(id === "resume" ? {} : { tab: id }, { replace: true });
    };

    return (
        <div className="resume-scroll h-full w-full rounded-2xl border border-(--border) bg-(--bg-elevated) p-8 md:overflow-y-auto">
            <header className="mb-10">
                <div role="tablist" aria-label="Portfolio sections" className="flex gap-6 border-b border-(--border)">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            id={`tab-${tab.id}`}
                            aria-selected={activeTab === tab.id}
                            aria-controls={`panel-${tab.id}`}
                            onClick={() => selectTab(tab.id)}
                            className="tab"
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </header>
            <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
                {activeTab === "resume" ? <ResumeContent /> : <ProjectsContent />}
            </div>
        </div>
    );
};

export default Resume;
