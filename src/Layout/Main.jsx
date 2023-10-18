import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import TopBar from "../components/TopBar/TopBar";

const Main = () => {
    return (
        <div>
            {/* <TopBar/>
            <NavBar/> */}
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Main;