import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {getCartCount}=useContext(ShopContext);
  const {setShowSearch} = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/"><img src={assets.logo} alt="MisFits" className="w-20 h-10" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" />

        <div className="group relative">
          <Link to="/login"><img className="w-5 cursor-pointer" src={assets.profile_icon} /></Link>

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2  w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">LogOut</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 z-50 ${
    visible ? "w-full" : "w-0"
  }`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            onClick={() => setVisible(false)}
            className="cursor-pointer flex items-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon}></img>
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} to='/collection' className='py-2 pl-6 border'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} to='/about' className='py-2 pl-6 border'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} to='/contact' className='py-2 pl-6 border'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
