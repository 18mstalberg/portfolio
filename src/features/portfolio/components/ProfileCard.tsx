const ProfileCard = () => {
    return (
        <div className="" id="profile-card">
            <img
                src="/profile.jpg"
                alt="Profile"
                className="object-contain rounded w-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Micah Stalberg</h3>
            <p className="text-sm text-gray-500">Full Stack Developer</p>
        </div>

    );
}

export default ProfileCard;
