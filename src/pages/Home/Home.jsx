import Banner from "../../components/Banner/Banner";
import BoostSection from "../../components/BostSection/BoostSection";
import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import TopServices from "../../pages/Services/TopServices/TopServices";
const Home = () => {
    return (
        <div>
         <Banner/>
         <WhoWeAre/>
         <TopServices/>
         <Brand/>
         <Review/>
         <BoostSection/>
        </div>
    );
};

export default Home;