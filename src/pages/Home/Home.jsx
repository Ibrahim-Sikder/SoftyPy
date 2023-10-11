import Banner from "../../components/Banner/Banner";
import BoostSection from "../../components/BostSection/BoostSection";
import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Work from "../../components/Work/Work";
import TopServices from "../../pages/Services/TopServices/TopServices";
import Choos from "./ChoosUs/Choos";
const Home = () => {
    return (
        <div>
         <Banner/>
         <WhoWeAre/>
         <TopServices/>
         <Work/>
         <Choos/>
         <Brand/>
         <Review/>
         <BoostSection/>
        </div>
    );
};

export default Home;