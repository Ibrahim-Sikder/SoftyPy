import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import Review from "../../components/Review/Review";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";

const Home = () => {
    return (
        <div>
         <Banner/>
         <WhoWeAre/>
         <Brand/>
         <Review/>
        </div>
    );
};

export default Home;