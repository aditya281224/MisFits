import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-yellow-50">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img}></img>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">OUR STORE</p>
          <p className="text-gray-500">
            {" "}
            Misfits HQ
            <br />
            Basement 404, Hype Street
            <br />
            Sector YOLO, New Delhi, INDIA
          </p>
          <p className="text-gray-500">📞 +91  99999-99999</p>
          <p className="text-gray-600">✉️ support@misfitswears.in</p>
        </div>
      </div>
      <div className=" text-center py-12 px-4 rounded-md">
        <Title text1={"GET"} text2={"IN TOUCH"} />
        <p className="mt-4 text-gray-800 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Got a question, a collab idea, or just want to rant about fashion?
          We're all ears (and DMs). Drop us a message, send a meme, or tag us on
          socials — we might just feature you.
        </p>
        <p className="mt-6 text-gray-700 text-sm">
          Our team of caffeine-fueled creatives will get back to you faster than
          your last impulse buy.
        </p>
      </div>
    </div>
  );
};

export default Contact;
