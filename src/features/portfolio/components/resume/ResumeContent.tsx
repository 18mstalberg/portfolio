import ObjectiveSummary from "./sections/ObjectiveSummary";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import { education, experiences, objective, relevantCourses, skillCategories } from "./resumeData";

const ResumeContent = () => {
    return (
        <div className="space-y-10">
            <ObjectiveSummary objective={objective} />
            <ExperienceSection experiences={experiences} />
            <SkillsSection skillCategories={skillCategories} />
            <EducationSection education={education} relevantCourses={relevantCourses} />
        </div>
    );
};

export default ResumeContent;
