import Resume from "../../../features/portfolio/components/Resume";

const PortfolioRoute = () => {
    return (
        <div className="p-2 flex-col">
            <p className="text-3xl">Micah Stalberg</p>
            <Resume />
            <a href="https://www.linkedin.com/in/micah-stalberg-490101182/">Link to my LinkedIn</a>
        </div>
    );
}

export default PortfolioRoute;
