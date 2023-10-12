import Banner from "../../components/Banner/Banner";
import BoostSection from "../../components/BostSection/BoostSection";
import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Work from "../../components/Work/Work";
import TopServices from "../../pages/Services/TopServices/TopServices";
import Choos from "./ChoosUs/Choos";
import TimeLine from "./TimeLine/TimeLine";
const Home = () => {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <TopServices />
      <div className="my-24">
        <TimeLine />
      </div>
      <Choos />
      <Brand />
      <Review />
      <BoostSection />
    </div>
  );
};

export default Home;
