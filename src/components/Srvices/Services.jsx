import SectionTitle from "../../pages/Shared/SectionTitle/SectionTitle";
import {FaArrowRight } from "react-icons/fa";
import web from '../../../public/assets/web.jpg'
import digital from '../../../public/assets/digital.jpg'
import seo from '../../../public/assets/seo.jpg'
import content from '../../../public/assets/content.jpg'
import social from '../../../public/assets/social.jpg'
import add from '../../../public/assets/adds.jpg'
import './Services.css'


const Services = () => {
    const servicesData = [
        {
            id:1,
            title: 'WordPress Website Design & Development',
            img: web,
            subTitle: 'SoftyPy, We have a practical solution for best Custom WordPress Website Design and Development services in the world.',

        },
        
        {
            id:3,
            title: 'Social Media​​ Marketing',
            img: social,
            subTitle: 'SoftyPy Digitla Marketing Agency classifies your business goals & executes competitor by follow social media strategy.',

        },
        {
            id:4,
            title: 'SEO',
            img: seo,
            subTitle: 'SoftyPy SEO services can build your high rankings and achieving your organic traffic & improve search engine result.',

        },
        {
            id:5,
            title: 'Content Marketing​',
            img: content,
            subTitle: 'SoftyPy is the best content marketing agency in the world. We have a professionals team for content marketing',

        },
        {
            id:6,
            title: 'PPC',
            img: add,
            subTitle: 'SoftyPy as experts in the world wide in internet campaign and advertising for your business by use Pay Per Click advertising strategy.',

        },
        {
            id:2,
            title: 'Digital Marketing Strategy​​',
            img: digital,
            subTitle: 'Amazing results start with amazing strategies. We’ve worked with the top companies in the world. Many of them used us specifically for strategy!',

        },

    ]
    return (
        <div className="my-16 w-[1300px] mx-auto">
         <div className="mb-10">
         <SectionTitle title='Our Services' text='We Have A Wide Array Of Services To Offer Our Clients. But We Can Generally Boil All Of Our Services Down Into Different Categories'></SectionTitle>
         </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
           {
            servicesData.map(service=> <div key={service.id} className="serviceBox mt-5 ">
            <img src={service.img} alt="web" />
          <div className="text-left">
          <h4 className="text-xl text-[#F99049] font-bold">{service.title}</h4>
            <p className="my-2">{service.subTitle}</p>
            <div className="flex items-center">
            <button className="mr-2">Learn More</button>
            <FaArrowRight className="text-[#951FE8] "/>
            </div>
          </div>
        </div>)
           }
          </div>

        </div>
    );
};

export default Services;