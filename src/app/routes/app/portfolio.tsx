import ProfileCard from "../../../features/portfolio/components/ProfileCard";
import Resume from "../../../features/portfolio/components/Resume";

const PortfolioRoute = () => {
    return (
        <main className="h-screen px-6 py-10 sm:px-10 lg:px-16">
            <div className="h-full mx-auto flex w-full max-w-5xl flex-col gap-12 lg:flex-row lg:items-start">
                <div className="h-full lg:sticky lg:top-10 ">
                    <ProfileCard />
                </div>

                <section className="flex-1 space-y-8">
                    <Resume />
                    <a
                        href="https://www.linkedin.com/in/micah-stalberg-490101182/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-(--accent) transition hover:text-(--accent-hover)"
                    >
                        Connect on LinkedIn
                    </a>
                </section>
            </div>
        </main>
    );
};

export default PortfolioRoute;