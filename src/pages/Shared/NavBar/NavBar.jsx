import "./NavBar.css";
import softypy from "../../../../public/assets/softypy.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    const [stickyMenu, setStickyMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(true);
    const toggleMobileMenu = () => {
      setMobileMenu((mobileMenu) => !mobileMenu);
    };
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".navbar");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  
  return (
    <div>
      <div className="navbar">
            <div className="w-52 logo">
              <Link to="/">
                <h3 className="text-4xl font-bold">SoftyPy</h3>
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

            <div onClick={toggleMobileMenu} className='bar'>
          <div>
            <span className={mobileMenu ? ` ` : `bar1`}></span>
            <span className={mobileMenu ? ` ` : `bar2`}></span>
            <span className={mobileMenu ? ` ` : `bar3`}></span>
          </div>
        </div>
       
          </div>
          <div >
        <ul className={mobileMenu ? `mobileMenu` : `mobileMenuActive`}>
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
         

    </div>
  );
};

export default NavBar;
