
import { assets } from "../assets/assets";
import Title from "./Title";


const Hero = () => {
  
  return (
    <section className="flex flex-col sm:flex-row overflow-hidden bg-gradient-to-r from-blue-100 to-yellow-50 ">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6 sm:px-0">
        <div className="max-w-md text-[#333]">
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 md:w-10 h-[2px] bg-[#333]" />
            <span className="text-xs md:text-sm font-medium tracking-wide text-gray-700">
              <Title text1={"CURATED"} text2={"DESIGNS"}/>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-4 text-[#2b2b2b]">
            Fashion that <span className="text-pink-500">Defines</span> <br />
            Your <span className="text-yellow-500">Vibe</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-gray-700 mb-6">
            Explore exclusive drops, premium quality, and the latest arrivals for every mood. Elevate your style — without saying a word.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
            className="px-6 py-2 bg-black text-white rounded-full font-semibold text-sm md:text-base hover:bg-pink-500 transition duration-300"
          >
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full sm:w-1/2">
        <img
          src={assets.hero_img}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
