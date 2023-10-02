import {
  FaHome,
  FaPhoneAlt,
  FaRegEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import "./TopBar.css";
const TopBar = () => {
  return (
    <div className="bg-[#000000] text-white">
      <div className="flex items-center justify-between topBar">
        <div className="flex items-center ">
        <div className="flex items-center justify-center">
          <FaHome className="text-[#F76300] mr-2 " />
          <span>
            42, Gulshan Avenue, Gulshan-1, Jabbar Tower (3rd Floor), Dhaka-1212,
          </span>
        </div>
        <div className="flex items-center justify-center mx-5">
          <FaPhoneAlt className="text-[#F76300] mr-2 " />
          <span>+880 1762-380594</span>
        </div>
        <div className="flex items-center justify-center">
          <FaRegEnvelope className="text-[#F76300] mr-2 " />
          <span>softypy@gmail.com</span>
        </div>
        </div>
        <div>
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
  );
};

export default TopBar;
