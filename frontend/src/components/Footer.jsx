import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" w-full bg-white border-t text-sm text-gray-600 z-50 px-4 sm:px-20 py-3">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-6 sm:gap-14 items-start">
        <div>
          <img src="" alt="misfits" className="w-20 mb-2" />
          <p className="text-xs leading-snug">
            Discover our bold new arrivals designed to break the rules. From
            streetwear to statement pieces, Misfits brings you styles that dare
            to be different. Stand out. Stay original. Be unapologetically you.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2 text-sm">COMPANY</h3>
          <ul className="space-y-1 text-xs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/collection">Collections</Link>
            </li>
          </ul>
        </div>

        {/* Add more sections here if needed */}
      </div>
    </div>
  );
};

export default Footer;
