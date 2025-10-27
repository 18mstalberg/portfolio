import ResumeContent from "./resume/ResumeContent";

const Resume = () => {
    return (
        <div className="h-full w-full rounded-2xl border border-(--border) bg-(--bg-elevated) p-8 shadow-xl md:overflow-y-auto">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-(--text-primary)">Resume</h2>
                <p className="mt-2 text-sm text-(--text-secondary)">
                    Modular card layout highlighting key achievements, skills, and education with interactive details.
                </p>
            </div>
            <ResumeContent />
        </div>
    );
};

export default Resume;
