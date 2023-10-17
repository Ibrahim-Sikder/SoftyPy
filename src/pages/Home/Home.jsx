import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import SwiperTimeLine from "../../components/TimeLine/SwiperTimeLine";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Services from "./Services/Services";
import Choos from "./ChoosUs/Choos";
import TimeLine from "./TimeLine/TimeLine";
import CountDown from "./CountDown/CountDown";
const Home = () => {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <SwiperTimeLine />
      <div className="my-24">
        <TimeLine />
      </div>
      <Choos />
      <Services />
      <Brand />
      <Review />
      <CountDown />
    </div>
  );
};

export default Home;
