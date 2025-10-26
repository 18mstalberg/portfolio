import ProfileCard from "../../../features/portfolio/components/ProfileCard";
import Resume from "../../../features/portfolio/components/Resume";

const PortfolioRoute = () => {
    return (
        <main className="h-screen p-4 sm:p-8 lg:p-16">
            <div className="h-full mx-auto flex w-full flex-col gap-12 lg:flex-row lg:items-start">
                <div className="h-full lg:sticky lg:top-10 ">
                    <ProfileCard />
                </div>

                <section className="flex-1 space-y-8">
                    <Resume />
                </section>
            </div>
        </main>
    );
};

export default PortfolioRoute;