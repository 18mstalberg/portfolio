import ProfileCard from "../../../features/portfolio/components/ProfileCard";
import Resume from "../../../features/portfolio/components/Resume";

const PortfolioRoute = () => {
    return (
        <main className="md:h-screen p-4 sm:p-8 lg:p-16">
            <div className="h-full mx-auto flex w-full flex-col gap-12 md:flex-row md:items-start">
                <ProfileCard />
                <Resume />
            </div>
        </main>
    );
};

export default PortfolioRoute;