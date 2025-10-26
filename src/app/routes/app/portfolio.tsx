import ProfileCard from "../../../features/portfolio/components/ProfileCard";
import Resume from "../../../features/portfolio/components/Resume";

const PortfolioRoute = () => {
    return (
        <div className="profile-route-container">
            <ProfileCard />
            <div className="">
                <Resume />
                <a href="https://www.linkedin.com/in/micah-stalberg-490101182/">Link to my LinkedIn</a>
            </div>
        </div>
    );
}

export default PortfolioRoute;
