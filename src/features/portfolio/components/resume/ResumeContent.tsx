
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import { education, experiences, relevantCourses, skillCategories } from "./resumeData";

const ResumeContent = () => {
    return (
        <div >
            <ExperienceSection experiences={experiences} />
            <SkillsSection skillCategories={skillCategories} />
            <EducationSection education={education} relevantCourses={relevantCourses} />
        </div>
    );
};

export default ResumeContent;
