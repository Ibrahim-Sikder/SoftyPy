import "./SingleService.css";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhyChoosSe from "../Home/ChoosUs/WhyChoosSe";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Products from "../../components/MoreProducts/Products";
AOS.init();

const SingleService = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div>
      <div className="servicesWrap">
        <div className="servicesContent">
          <div>
            <h2 className="text-2xl md:text-5xl font-bold">
              One-Stop Shop for All Your Online Needs{" "}
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mt-5">
              Best Web Development Company In Bangladesh
            </h3>
          </div>
        </div>
      </div>
      <div className="singleServicesWrap">
        <div className="ecommerServices">
          <div className="leftSide">
            <h3 className="text-4xl font-bold mb-3">
              Why Need E-commerce Website?
            </h3>
            <div className="my-2">
              <b>Global Reach:</b>
              <p>
                {" "}
                An eCommerce website enables your business to transcend
                geographical boundaries, reaching potential customers worldwide.
                It breaks down the limitations of a physical store and offers an
                expansive global market to tap into.
              </p>
            </div>
            <div className="my-2">
              <b> 24/7 Accessibility: </b>
              <p>
                Your eCommerce website never closes. It provides customers with
                the convenience of shopping whenever they prefer, whether it is
                early morning or late at night. This accessibility enhances
                customer satisfaction and boosts sales.
              </p>
            </div>
            <div className="my-2">
              <b> Cost-Effective: </b>
              <p>
                {" "}
                Operating an eCommerce website is often more cost-effective than
                maintaining a physical storefront. You save on expenses related
                to rent, utilities, and staff, making it an efficient way to run
                a business.
              </p>
            </div>
            <div className="my-2">
              <b> Customer Convenience:</b>
              <p>
                {" "}
                Shoppers appreciate the convenience of browsing and buying from
                the comfort of their homes. They can also compare products, read
                reviews, and access detailed product information, contributing
                to a better shopping experience.
              </p>
            </div>
            <div className="my-2">
              <b> Marketing Opportunities: </b>
              <p>
                {" "}
                Online marketing tools and strategies like SEO, email marketing,
                and social media can be seamlessly integrated into your
                eCommerce website. These tools help increase your online
                visibility and drive more traffic.
              </p>
            </div>
          </div>
          <div className="rightSide">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="/ecommerce.json"
            ></lottie-player>
          </div>
        </div>
        <div className="my-10">
        <SectionTitle
            title="Our More Products "
          ></SectionTitle>
          <Products/>
       
        </div>
        <div className="mt-16">
          <SectionTitle
            title="Why Choose SoftyPy For Your Software Solution?"
          ></SectionTitle>
          <div className="my-10">
            <WhyChoosSe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
