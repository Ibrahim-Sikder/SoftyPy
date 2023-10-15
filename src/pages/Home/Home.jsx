import Banner from "../../components/Banner/Banner";
import BoostSection from "../../components/BostSection/BoostSection";
import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import TopServices from "../../pages/Services/TopServices/TopServices";
import WhyChooseUs from "../Services/TopServices/WhyChooseUs";
import Choos from "./ChoosUs/Choos";
import TimeLine from "./TimeLine/TimeLine";
const Home = () => {
  return (
    <div>
      <Banner />
      <WhoWeAre />

      <div className="my-24">
        <TimeLine />
      </div>
      <WhyChooseUs/>
      <Choos />
      <TopServices />
      <Brand />
      <Review />
      <BoostSection />
    </div>
  );
};

export default Home;
