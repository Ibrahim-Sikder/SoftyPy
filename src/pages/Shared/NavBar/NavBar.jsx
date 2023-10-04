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
    useEffect(() => {
      const handleScroll = () => {
        setStickyMenu(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className="bg-white ">
      <div className="flex items-center justify-between navbar mx-auto ">
        <div className="w-52 ">
          <Link to='/'><img src={softypy} alt="softypy" /></Link>
        </div>
        <div className="menubar">
          <ul>
          <Link to='/'> <li>Home</li></Link>
           <Link to='/services'> <li>Services</li></Link>
           <Link to='/portfolio'> <li>Portfolio</li></Link>
            <li>Happy Clients </li>
            <li>Products</li>
            <li>Contact Us </li>
          </ul>
        </div>
        <div onClick={toggleMobileMenu} className='bar'>
          <div>
            <span className={mobileMenu ? ` ` : `bar1`}></span>
            <span className={mobileMenu ? ` ` : `bar2`}></span>
            <span className={mobileMenu ? ` ` : `bar3`}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
