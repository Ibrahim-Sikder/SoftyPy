import softypy from "../../../../public/assets/softypy2.png";
import "./Footer.css";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaRegEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="px-24 ">
      <div className="flex justify-between">
       <div>
       <p>	Pioneering Technologies for a Smarter Future </p>
        <p className="text-xl mt-2 font-bold text-[#F87015]">Here to Help, 24/7.</p>
       </div>
        <div className="flex items-center">
          <div className="contact">
            <FaRegEnvelope className="mr-2 emalIcon" />
            <input autoComplete="off" type="text" placeholder="Email Address " />
          </div>
          <div className="contactBtn">
            <button className="mr-2">Request Now </button>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex justify-between w-full  contactUs">
        <div>
          <div className="w-56 text-left">
            <img src={softypy} alt="softypy" />
            <p className="mt-3">42, Gulshan Avenue, Gulshan-1, Jabbar Tower (3rd Floor), Dhaka-1212, Bangladesh</p>
          </div>
         
        </div>
        <div className="services">
          <h3 className="text-xl font-bold text-[#FF5400] mb-3">Services </h3>
          <p> Digital Marketing Strategy</p>
          <p>Social Media Marketing</p>
          <p>Search Engine Optimization</p>
          <p>Content Marketing</p>
          <p>Website Design and Development</p>
          <p>PPC</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#FF5400] mb-3">Products </h3>
          <p>SoftyPy Software </p>
          <p>SoftyPy SEO </p>
          <p>SoftyPy Digital Margeting </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#FF5400] mb-3">About Us </h3>
          <p>Happy Client</p>
          <p>About SoftyPy </p>
          <p>Blog </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#FF5400] mb-3">Contact Us </h3>

          <div className="flex items-center">
            <FaPhoneAlt />
            <p> +880 1762-380594</p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt />
            <p> +880 1670-405744</p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt />
            <p>softypy@gmail.com</p>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-bold text-[#FF5400] mb-3 ">
              Social Contact{" "}
            </h3>
            <div className="flex items-center w-[150px] justify-between">
              <div className="socialIcon">
                <FaFacebook />
              </div>
              <div className="socialIcon">
                <FaLinkedin />
              </div>

              <div className="socialIcon">
                <FaInstagramSquare />
              </div>
              <div className="socialIcon">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="" />
      <div className="flex items-center justify-between py-3">
        <p>All Right reserve | SoftyPy - 2023 </p>
        <div className="termCondition flex items-center justify-between"> 
            <p>Term & Conditions </p>
            <p>Privacy policy </p>
            <p>Cookies </p>
            <p>Term & Conditions </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
