import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-pink-300 to-yellow-50">  
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} alt="misfits" className="w-20 mb-5 h-20" />
          <p className="text-xs leading-snug">
            Discover our bold new arrivals designed to break the rules. From
            streetwear to statement pieces, Misfits brings you styles that dare
            to be different. Stand out. Stay original. Be unapologetically you.
          </p>
        </div>

        
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/collection">Collections</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 99999-99999</li>
            <li>support@misfitswears.in</li>
          </ul>
        </div>
      </div>

      <div>
        <hr></hr>
        <p className="py-5 text-sm text-center">CopyRight 2025@ misfits.com - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;


 