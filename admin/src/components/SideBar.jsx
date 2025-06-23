import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"

const SideBar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2 bg-[#1E1E2F]" >
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px] text-white">
        <NavLink
          className="flex items-center gap-3 border border-gray-700 border-r-0 px-3 py-2 rounded-r-lg hover:bg-[#6C5CE7] transition-all duration-200"
          to="/add"
        >
          <img className="w-5 h-5" src={assets.add_icon} />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-gray-700 border-r-0 px-3 py-2 rounded-r-lg hover:bg-[#6C5CE7] transition-all duration-200"
          to="/list"
        >
          <img className="w-5 h-5" src={assets.order_icon} />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-gray-700 border-r-0 px-3 py-2 rounded-r-lg hover:bg-[#6C5CE7] transition-all duration-200"
          to="/order"
        >
          <img className="w-5 h-5" src={assets.order_icon} />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar
