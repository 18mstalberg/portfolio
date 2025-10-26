const SkillCard = ({ skill }: { skill: string }) => {
    return <li className="bg-(--bg-secondary) px-3 py-1 rounded text-sm text-(--text-primary)">{skill}</li>
}
export default SkillCard;