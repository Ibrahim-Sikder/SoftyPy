import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import SwiperTimeLine from "../../components/TimeLine/SwiperTimeLine";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import Services from "./Services/Services";
import Choos2 from "./ChoosUs/Choose2";
import TimeLine from "./TimeLine/TimeLine";
import CountDown from "./CountDown/CountDown";
import HeroSection from "../../components/Banner/HeroSection/HeroSection";


const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <HeroSection/>
      <WhoWeAre />
      <SwiperTimeLine />
    
      <div>
        <TimeLine />
      </div>
      <Choos2 />
      <Services />
      <Brand />
      <Review />
      <CountDown />
    </div>
  );
};

export default Home;
