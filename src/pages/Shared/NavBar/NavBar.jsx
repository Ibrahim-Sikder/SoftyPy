import './NavBar.css'
import softypy from '../../../../public/assets/softypy.png'
const NavBar = () => {
    return (
        <div className='bg-white '>
            <div className="flex items-center justify-between h-[80px] w-[1300px] mx-auto ">
               <div  className='w-52 '>
               <img src={softypy} alt="softypy" />
               </div>
               <div className='menubar'>
               <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Happy Clients </li>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact Us </li>
               </ul>
               </div>
            </div>
        </div>
    );
};

export default NavBar;