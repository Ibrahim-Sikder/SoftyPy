import "./HeroSection.css";
import softypy from "../../../../public/assets/softypy.png";
import hero from "../../../../public/assets/hero.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div>
      <div className="header">
        <div>
          <div className="navbar">
            <div className="w-52 text-white">
              <Link to="/">
                <img src={softypy} alt="softypy" />
              </Link>
            </div>
            <ul className="navbar-list">
              <Link to="/">
                {" "}
                <li className="navbar-item">Home</li>
              </Link>
              <Link to="/services">
                {" "}
                <li className="navbar-item">Services</li>
              </Link>
              <Link to="/portfolio">
                {" "}
                <li className="navbar-item">Portfolio</li>
              </Link>
              <Link to="/client">
                {" "}
                <li className="navbar-item">Happy Clients </li>
              </Link>
              <Link to="/about">
                {" "}
                <li className="navbar-item">About Us </li>
              </Link>
              <Link to="/contact">
                {" "}
                <li className="navbar-item">Contact Us </li>
              </Link>
            </ul>
          </div>

          <div className="header-content">
            <div className="right-side">
              <img src={hero} alt="hero" />
            </div>
            <div className="left-side">
              <h1 className="welcome-heading">Welcome to SoftyPy !</h1>
              <p className="welcome-paragraph">
                Accelerate Your Business Growth With Our Proven Digital
                Marketing Strategies <br />
                We help businesses of all sizes maximize their online presence
                and reach their target audience with our data-driven approach to
                digital marketing.
              </p>
              <button className="ExploreBtn"> Explore Us </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
