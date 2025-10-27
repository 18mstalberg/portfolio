
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import { education, experiences, skillCategories } from "./resumeData";

const ResumeContent = () => {
    return (
        <div className="space-y-3">
            <ExperienceSection experiences={experiences} />
            <SkillsSection skillCategories={skillCategories} />
            <EducationSection education={education} />
        </div>
    );
};

export default ResumeContent;
