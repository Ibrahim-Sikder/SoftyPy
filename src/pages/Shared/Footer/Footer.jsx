import softypy from "../../../../public/assets/softypy2.png";
import "./Footer.css";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaRegEnvelope,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";
import location from '../../../../public/assets/location.png'
import laptop from '../../../../public/assets/laptop.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerWrap">
      <div className="footerTop">
       <div className="footerTopBarContent">
       <div className="leftSideContent">
       <div >
          <p className="text-2xl mt-2 font-bold">
          Empowering Your Business with SoftyPy Technology
          </p>
          <p className="my-2">SoftyPy is your digital navigator, expertly charting the course for your IT voyage. As a trusted IT solutions provider, we craft bespoke software, steer your network to smooth waters, guard your cybersecurity like a fortress, and keep your hardware shipshape. We are not just a compass; we are your guiding star in the digital realm.</p>
        </div>
        <div className="flex contaact items-center flex-wrap sm:mt-8">
          <div className="requestDemo">
            <FaRegEnvelope className="mr-2 emalIcon" />
            <input
              autoComplete="off"
              type="text"
              placeholder="Email Address "
            />
          </div>
          <div className="contactBtn">
            <button className="mr-2">Request Now </button>
            <FaArrowRight />
          </div>
        </div>
       </div>
       <Link to='/'><div className="rightSideImgWRap">
        <img src={laptop} alt="laptop" />
       </div></Link>
       </div>
      </div>
      <hr className="my-8" />
      <div className="contactUs">
        <div>
          <div className="w-56 text-left">
            <img src={softypy} alt="softypy" />
            <div className="flex items-center">
            <img className="mr-2" src={location} alt="location" />
            <p className="mt-3">
              42, Gulshan Avenue, Gulshan-1, Jabbar Tower (3rd Floor),
              Dhaka-1212, Bangladesh
            </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#FF5400] mb-3">Services </h3>        
          <p>Web & APP Development</p>
          <p>ERP Solutions</p>
          <p>UI/UX Design</p>
          <p>Digital Marketing</p>
          <p>SEO</p>
        </div>
        <div>
         <Link to='/about'> <h3 className="text-xl font-bold text-[#FF5400] mb-3">About </h3></Link>
          <p>Happy Client</p>
          <p>About SoftyPy </p>
          <p>Blog </p>
        </div>

        <div>
         <Link to='/contact'> <h3 className="text-xl font-bold text-[#FF5400] mb-3">Contact  </h3></Link>

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
              Follow Us
            </h3>
            <div className="flex items-center w-[150px] justify-between">
              <div className="socialIcon">
                <FaFacebook />
              </div>
              <div className="socialIcon">
                <FaLinkedin />
              </div>

              <div className="socialIcon twiteer">
                <FaTwitter />
              </div>
              <div className="socialIcon">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="copyRight py-3">
        <p className="sm:mb-5">All Right reserve | SoftyPy - 2023 </p>
        <div className="termCondition flex items-center justify-between flex-wrap ">
          <p>Term & Conditions </p>
          <p>Privacy policy </p>
          <p>Cookies </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
