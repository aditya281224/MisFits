import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { getCartCount, navigate, token, setToken, setCartItems } =
    useContext(ShopContext);
  const { setShowSearch } = useContext(ShopContext);

  const logout = () => {
    navigate("/");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <div className="w-full text-sm bg-gradient-to-r from-pink-300 to-yellow-50">
      <div className="max-w-7xl mx-auto px-3 flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="MisFits" className="w-16 h-auto" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-4 text-gray-800 font-medium">
          {["/", "/collection", "/about", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                `hover:text-black transition ${
                  isActive ? "text-black underline underline-offset-4" : ""
                }`
              }
            >
              {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
            </NavLink>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-5">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-4 cursor-pointer"
            alt="search"
          />

          {/* Profile Dropdown */}
          <div className="relative group">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              src={assets.profile_icon}
              className="w-4 cursor-pointer"
              alt="profile"
            />
            {token && (
              <div className="absolute right-0 mt-1 w-36 bg-white text-gray-600 rounded shadow-md opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-200 z-10 text-xs">
                <div className="flex flex-col px-3 py-2 gap-1">
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-black"
                  >
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-black"
                  >
                    Log Out
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-4" alt="cart" />
            <p className="absolute -right-1 -bottom-1 w-3.5 h-3.5 bg-black text-white text-[8px] rounded-full flex items-center justify-center">
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile Menu Icon */}
          <img
            src={assets.menu_icon}
            className="w-4 cursor-pointer sm:hidden"
            onClick={() => setVisible(true)}
            alt="menu"
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gradient-to-b from-pink-100 to-yellow-50 transition-all duration-300 z-50 ${
          visible ? "w-full sm:w-64" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-700 font-medium text-sm">
          <div
            onClick={() => setVisible(false)}
            className="cursor-pointer flex items-center gap-3 p-3 border-b"
          >
            <img
              className="h-3 rotate-180"
              src={assets.dropdown_icon}
              alt="back"
            />
            <p>Back</p>
          </div>
          {["/", "/collection", "/about", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              onClick={() => setVisible(false)}
              to={path}
              className="py-2 px-5 border-b hover:bg-pink-200 transition"
            >
              {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
