const ProfileCard = () => {
    return (
        <aside
            id="profile-card"
            className="h-full w-full max-w-sm rounded-3xl border border-(--border) bg-(--bg-elevated) p-8 shadow-[0_20px_60px_-30px_rgba(16,185,129,0.65)]"
        >
            <div className="flex flex-col items-center text-center">
                <div className="relative mb-8 flex w-full max-w-[220px] flex-col items-center sm:max-w-[260px]">
                    <div className="aspect-square w-full overflow-hidden rounded-2xl border border-(--border) shadow-inner shadow-black/40">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-tight">Micah Stalberg</h3>
                    <p className="text-base text-(--text-secondary)">Full Stack Developer</p>
                </div>
            </div>
        </aside>
    );
};

export default ProfileCard;
