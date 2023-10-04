import { useLoaderData } from "react-router-dom";
import './Services.css'
import responsive from '../../../public/assets/dev.png'
const Services = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <div className="servicesWrap">
          <div className="servicesContent">
           <div>
           <h2 className="text-2xl md:text-5xl font-bold">We are SoftyPy </h2>
          <h3 className="text-xl md:text-2xl font-bold mt-5">Best Web Development Company In Bangladesh</h3>
           </div>
          
          </div>
        </div>


        <div className="services">
          <div className="servicesLeftSide"> 
          <h3 >Premium Website Development Service Empowering Business Growth With Professionalism & Expertise</h3>
            <p className="my-5">SoftyPy IT LIMITED is a corporate website development company working for more than 5 years. A corporate website is a platform where a business company or organization upholds its functionality. A company introduction, its products, and services, its terms and conditions, protocols, its policy, and consumer relations, etc are placed on a  website. In the era of digital marketing, every existing corporate body has an official corporate website. Here’s to mention one thing, a corporate website is completely different from an Ecommerce website. </p>
            <p>Our professional web developers follow industry trends and creative design websites. For the last five years, FARA IT LIMITED, a web developer company in Dhaka, Bangladesh, has been designing and developing a significant number of websites for multiple industries. From our vast experience, we can say that no matter which industry you are in, you need a super good-looking, responsive, secure, flexible, and well-structured website. Therefore, we build websites based on our clients’ demands.</p>
          </div>
          <div className="srvicesRightSide"> 
          <img src={responsive} alt="device" />
          </div>
        </div>
        </div>
    );
};

export default Services;