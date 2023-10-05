import { useLoaderData } from "react-router-dom";
import "./Services.css";
import responsive from "../../../public/assets/dev.png";
import web from "../../../public/assets/web.jpg";
import social from "../../../public/assets/ecommerce.png";
import content from "../../../public/assets/content.jpg";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

import { FaQuoteLeft, FaArrowRight, FaLocationArrow } from "react-icons/fa";



import { useRef, useEffect } from "react";
import TopServices from "./TopServices/TopServices";
const Services = () => {


  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const datas = [
    {
      id: 1,
      name: "Website Design & Development",
      title:
        "SoftyPy, We have a practical solution for best Custom WordPress Website Design and Development services in the world.",
      img: web,
    },
    {
      id: 1,
      name: "Website Design & Development",
      title:
        "SoftyPy, We have a practical solution for best Custom WordPress Website Design and Development services in the world.",
      img: content,
    },
    {
      id: 1,
      name: "Website Design & Development",
      title:
        "SoftyPy, We have a practical solution for best Custom WordPress Website Design and Development services in the world.",
      img: social,
    },
  ];

  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <div className="servicesWrap">
        <div className="servicesContent">
          <div>
            <h2 className="text-2xl md:text-5xl font-bold">We Are SoftyPy </h2>
            <h3 className="text-xl md:text-2xl font-bold mt-5">
              Best Web Development Company In Bangladesh
            </h3>
          </div>
        </div>
      </div>

      <div className="singleServicesWrap">
        <div className="services">
          <div className="servicesLeftSide">
            <h3>
              Premium Website Development Service Empowering Business Growth
              With Professionalism & Expertise
            </h3>
            <p className="my-5">
              SoftyPy IT LIMITED is a corporate website development company
              working for more than 5 years. A corporate website is a platform
              where a business company or organization upholds its
              functionality. A company introduction, its products, and services,
              its terms and conditions, protocols, its policy, and consumer
              relations, etc are placed on a website. In the era of digital
              marketing, every existing corporate body has an official corporate
              website. Here’s to mention one thing, a corporate website is
              completely different from an Ecommerce website.{" "}
            </p>
            <p>
              Our professional web developers follow industry trends and
              creative design websites. For the last five years, FARA IT
              LIMITED, a web developer company in Dhaka, Bangladesh, has been
              designing and developing a significant number of websites for
              multiple industries. From our vast experience, we can say that no
              matter which industry you are in, you need a super good-looking,
              responsive, secure, flexible, and well-structured website.
              Therefore, we build websites based on our clients’ demands.
            </p>
          </div>
          <div className="srvicesRightSide">
            <img src={responsive} alt="device" />
          </div>
        </div>
        <div className="ourServices my-14">
          <div className="mb-8">
            <SectionTitle
              title="Types of Web Development Services"
              text="“Web design is not just about creating pretty layouts. It's about understanding the marketing challenge behind your business.”"
            ></SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="inner-box">
                <div className="card-front card-front5">
                  <h3 className="text-white text-4xl font-bold">
                    Travel Agency Website
                  </h3>
                </div>
                <div className="card-back text-white">
                  <div className="card-back-content px-3">
                    <h4 className="text-2xl font-bold ">
                      {" "}
                      Travel Agency Website{" "}
                    </h4>
                    <p className="my-3">
                      Decorate an attractive website that represents all the
                      traveling scopes both at home and abroad. Make sure
                      travelers can find it easy and helpful.
                    </p>
                    <div className="flex items-center justify-center bg-[#F87015] w-32 h-10 mx-auto rounded-full radius">
                      <button>See more </button>
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="inner-box">
                <div className="card-front card-front1">
                  <h3 className="text-white text-4xl font-bold">
                    Eccomerce Website{" "}
                  </h3>
                </div>
                <div className="card-back text-white">
                  <div className="card-back-content px-3">
                    <h4 className="text-2xl font-bold ">Ecommerce Website </h4>
                    <p className="my-3">
                      A website that can properly manage all kinds of products
                      you want to sell. Help your customers to purchase easily
                      through eCommerce sites.
                    </p>
                    <div className="flex items-center justify-center bg-[#F87015] w-32 h-10 mx-auto rounded-full radius">
                      <button>See more </button>
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="inner-box">
                <div className="card-front card-front2">
                  <h3 className="text-white text-4xl font-bold">
                    Education Website{" "}
                  </h3>
                </div>
                <div className="card-back text-white">
                  <div className="card-back-content px-3">
                    <h4 className="text-2xl font-bold ">Education Website </h4>
                    <p className="my-3">
                      Spread the proper education using an informative and
                      learner-friendly educational website. Take the learning
                      system to one step higher.
                    </p>
                    <div className="flex items-center justify-center bg-[#F87015] w-32 h-10 mx-auto rounded-full radius">
                      <button>See more </button>
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="inner-box">
                <div className="card-front card-front3">
                  <h3 className="text-white text-4xl font-bold">
                    Blog Website{" "}
                  </h3>
                </div>
                <div className="card-back text-white">
                  <div className="card-back-content px-3">
                    <h4 className="text-2xl font-bold ">Blog Website </h4>
                    <p className="my-3">
                      Publish all your writings and personal experience through
                      a nice-looking blog/portfolio website. Give your readers
                      an amazing reading environment.
                    </p>
                    <div className="flex items-center justify-center bg-[#F87015] w-32 h-10 mx-auto rounded-full radius">
                      <button>See more </button>
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="inner-box">
                <div className="card-front card-front4">
                  <h3 className="text-white text-4xl font-bold">
                    Corporate Website{" "}
                  </h3>
                </div>
                <div className="card-back text-white">
                  <div className="card-back-content px-3">
                    <h4 className="text-2xl font-bold ">Corporate Website </h4>
                    <p className="my-3">
                      “Every problem is a gift—without problems we would not
                      grow.”
                    </p>
                    <div className="flex items-center justify-center bg-[#F87015] w-32 h-10 mx-auto rounded-full radius">
                      <button>See more </button>
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="inner-box">
                <div className="card-front card-front6">
                  <h3 className="text-white text-4xl font-bold">
                    News Website{" "}
                  </h3>
                </div>
                <div className="card-back text-white">
                  <div className="card-back-content px-3">
                    <h4 className="text-2xl font-bold ">News Website </h4>
                    <p className="my-3">
                      “Were it left to me to decide if we should have a
                      government without newspapers, or newspapers without a
                      government, I should not hesitate a moment to prefer the
                      latter.”
                    </p>
                    <div className="flex items-center justify-center bg-[#F87015] w-32 h-10 mx-auto rounded-full radius">
                      <button>See more </button>
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="whatWeDo my-14">
            <h2>What We Do </h2>
            <div>
              <p>
                We build better businesses by creating joyful digital ideas,
                products and experiences that connect the hearts of brands to
                the hearts of our consumers.
              </p>
            </div>
          </div>

          <div className="products mt-56">
            <div className="productLeftSide">
              <h2>Products </h2>
              <p className="text-xl">
                We make better products and make products better. From design
                and innovation sprints to UX design sprints and marathons, we
                create things that work for users and brands. Our approach was
                agile before they called it agile, finding innovation through
                structured ideation, prototyping and user-testing. Over the past
                couple of years, we’ve dived deep into machine learning and AI,
                but always with one question in mind: how does it make life
                better for humans?
              </p>
            </div>
            <div className="productRightSide">
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="/animation.json"
                className="animation"
              ></lottie-player>
            </div>
          </div>

          <div className="relatedServices">
            <div>
              <div className="relatedServiceHead mb-10">
                <h2 className="text-3xl md:text-5xl">Our Top Services</h2>
              </div>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
              {datas.map((data) => (
                <div key={data.id} className="singleRelatedService">
                  <img src={data.img} alt="ecommerce" />
                  <h3 className="text-2xl font-bold">{data.name}</h3>
                  <p className="my-3"> {data.title}</p>
                  <div className="flex items-center">
                    <button>Learn More </button>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              ))}
            </div> */}
              <TopServices/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;