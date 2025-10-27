import ResumeContent from "./resume/ResumeContent";

const Resume = () => {
    return (
        <div className="h-full w-full rounded-2xl border border-(--border) bg-(--bg-elevated) p-8 md:overflow-y-auto">
            <header className="mb-10">
                <h2 className="text-3xl font-bold text-(--text-primary)">Resume</h2>
            </header>
            <ResumeContent />
        </div>
    );
};

export default Resume;
