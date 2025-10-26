import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ProfileCard = () => {
    return (
        <aside
            id="profile-card"
            className="h-full w-full md:max-w-xs rounded-3xl border border-(--border) bg-(--bg-elevated) sm:p-8 p-4"
        >
            <div className="h-full flex flex-col items-center text-center">
                <div className="h-full w-full relative mb-8 flex flex-col items-center ">
                    <div className="w-full overflow-hidden rounded-2xl border border-(--border) shadow-inner shadow-black/40">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <h3 className="sm:text-2xl text-xl font-semibold pt-2">Micah Stalberg</h3>
                    <p className="sm:text-base text-sm text-(--text-secondary)">
                        Full-stack software engineer with experience across multiple technology stacks, building scalable and impactful software solutions. Always looking to improve and build better systems.
                    </p>
                    <div className="w-full flex flex-col gap-4 items-center">
                        <div className="flex flex-row items-center justify-center gap-6 mt-2">
                            <a href="mailto:micahrain2000@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
                                <AiOutlineMail className="w-6 h-6 text-(--accent) hover:text-(--accent-hover) transition" />
                            </a>
                            <a href="https://github.com/18mstalberg" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="w-6 h-6 text-(--accent) hover:text-(--accent-hover) transition" />
                            </a>
                            <a href="https://www.linkedin.com/in/micah-stalberg-490101182/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="w-6 h-6 text-(--accent) hover:text-(--accent-hover) transition" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default ProfileCard;
