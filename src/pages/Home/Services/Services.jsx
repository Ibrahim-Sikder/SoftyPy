import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import icon from "../../../../public/assets/icon6.png";

import "./Services.css";
const Services = () => {
  const cardData = [
    {
      id: 1,
      img: icon,
      name: "Web Development",
      desc:'SoftyPy, We have a practical solution for best Custom WordPress Website Design and Development services in the world.'
    },
    {
      id: 1,
      img: icon,
      name: "App Development",
      desc: 'Developing innovative and native mobile Apps for Android, iOS, BlackBerry, and Windows platforms.'
    },
    {
      id: 1,
      img: icon,
      name: "Digital Marketing",
      desc: 'Amazing results start with amazing strategies. We’ve worked with the top companies in the world. Many of them used us specifically for strategy!'
    },
    {
      id: 1,
      img: icon,
      name: "Social Media​​ Marketing",
      desc: 'SoftyPy Digitla Marketing Agency classifies your business goals & executes competitor by follow social media strategy.'
    },
    {
      id: 1,
      img: icon,
      name: "Content Marketing​",
      desc: 'SoftyPy is the best content marketing agency in the world. We have a professionals team for content marketing'
    },
    {
      id: 1,
      img: icon,
      name: "SEO ",
      desc: 'SoftyPy SEO services can build your high rankings and achieving your organic traffic & improve search engine result.'
    },
    {
      id: 1,
      img: icon,
      name: "PPC",
      desc: 'SoftyPy as experts in the world wide in internet campaign and advertising for your business by use Pay Per Click advertising strategy.'
    },
    
  ];
  return (
    <div className="servicesWraps">
      <div className="mb-8">
        <SectionTitle
          title="Our Services"
          text=" Unlocking digital potential, we provide bespoke IT services that blend innovation with reliability, ensuring your business stands out in a rapidly evolving tech landscape"
        ></SectionTitle>
      </div>
      <div className="ourServicesWrap">
        <div className="ourServiceLeftSide">
          <h3 className="text-3xl mb-3 text-[#F87015] font-bold ">
            Your Vision, Our Mission.
          </h3>
          <p>
            {" "}
            At SoftyPy, we drive digital excellence through our range of IT
            services. Our innovative solutions are tailored to meet your
            specific needs, ensuring your business remains agile and
            competitive. Partner with us to accelerate your digital journey and
            thrive in the evolving tech landscape.
          </p>
        </div>
        <div className="ourServicesRightSide">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {cardData.map((card) => (
                <div key={card.id} className="cards ">
                  <div className="inner-box">
                    <div className="cards-front cards-front5">
                      <div className="iconWrap">
                        <img src={icon} alt="icon" />
                      </div>
                      <p className="mt-2">Web Development</p>
                    </div>
                    <div className="cards-back text-white">
                      <div className="cards-back-content px-3">
                        <h4 className="text-xl "> Web Development</h4>
                        <p className="my-3">
                          Decorate an attractive website that represents all the
                          traveling scopes both.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
