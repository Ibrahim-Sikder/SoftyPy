import Banner from "../../components/Banner/Banner";
import BoostSection from "../../components/BostSection/BoostSection";
import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import Services from "../../components/Srvices/Services";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";

const Home = () => {
    return (
        <div>
         <Banner/>
         <WhoWeAre/>
         <Services/>
         <Brand/>
         <Review/>
         <BoostSection/>
        </div>
    );
};

export default Home;