import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import icon from "../../../../public/assets/icon6.png";
import icon2 from "../../../../public/assets/icon3.png";
import icon3 from "../../../../public/assets/icon8.png";
import icon4 from "../../../../public/assets/icon9.png";
import icon5 from "../../../../public/assets/icon10.png";

import "./Services.css";

const Services = () => {
  
  const cardData = [
    {
      id: 1,
      img: icon,
      name: "Web & APP Development",
      desc:"SoftyPy specializes in crafting dynamic websites and innovative mobile apps, delivering a seamless user experience and digital solutions tailored to your needs."
    },
    {
      id: 2,
      img: icon2,
      name: "ERP Solutions",
      desc: "ERP Solutions optimize business operations through integrated software, fostering efficiency and informed decision-making for sustained growth."
    },
    
    {
      id: 3,
      img: icon5,
      name: "UI/UX Design ​",
      desc: "At SoftyPy, we craft exceptional UI/UX designs that harmonize aesthetics and functionality, ensuring delightful user experiences for your digital products."
    },
    {
      id: 4,
      img: icon3,
      name: "Digital Marketing",
      desc:"SoftyPy drives business growth with data-driven digital marketing strategies, elevating your online presence and engaging target audiences for lasting results."
    },
    {
      id: 5,
      img: icon4,
      name: "SEO ",
      desc: 'SoftyPy SEO services can build your high rankings and achieving your organic traffic & improve search engine result.'
    },
    
  ];
  return (
    <div className="servicesWraps">
      <div className="">
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
            <div className="cardsWrap">
              {cardData.map((card) => (
                <div key={card.id} className="cards">
                  <div className="inner-box">
                    <div className="cards-front cards-front5">
                      <div className="iconWrap">
                        <img src={card.img} alt="icon" />
                      </div>
                      <p className="mt-2 font-bold">{card.name}</p>
                    </div>
                    <div className="cards-back text-white">
                      <div className="cards-back-content md:px-3">
                        <b className="block"> {card.name}</b>
                        <small className="my-1 md:my-3">
                         {card.desc}
                        </small>
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
