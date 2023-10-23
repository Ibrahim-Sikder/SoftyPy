
import { Link, Outlet, } from "react-router-dom";
import logo from "../../public/assets/softypy.png"

const DashboardLayout = () => {
  return (
    <div>
      

      <div className="drawerflex  dashboardWrap">
       
        <div className="drawer-content">
        
          <Outlet></Outlet>
          
        </div>
        <div className="fixed overflow-y-scroll overflow-x-hidden  drawwerLeftSide h-screen text-lg font-semibold  bg-[#191E2D] text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 ">
            <li>
              <Link to="/" className="shadow-md z-10">
                <img src={logo} className="h-20"/>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="shadow-md z-10">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allsellers" className="shadow-md">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allbuyers" className="shadow-md">
                Services
              </Link>
            </li>
            <li>
              <Link to="/dashboard/myOrders" className="shadow-md">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/dashboard/myreviews" className="shadow-md">
                Contact Us 
              </Link>
            </li>
            <li>
              <Link to="/dashboard/wishlist" className="shadow-md">
                My Favourite Items
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reporteditems" className="shadow-md">
                Happy Client
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addproperties" className="shadow-md">
               Portfolio 
              </Link>
            </li>
          
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
