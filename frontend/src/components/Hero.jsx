import React, { useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);   
  const textRef = useRef(null);   
  const imgRef  = useRef(null);   

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 75%",       
        end: "bottom 60%",      
        toggleActions: "play none none none", 
        once: true             
      }
    })
    .from(textRef.current, { x: -120, opacity: 0, duration: 0.8, ease: "power3.out" })
    .from(imgRef.current,  { x: 120,  opacity: 0, duration: 0.8, ease: "power3.out" }, "<0.1");
  }, []);

  return (
    <section
      ref={heroRef}
      className="flex flex-col sm:flex-row border border-gray-400 overflow-hidden"
    >
      {/* ─── Left (text) ─── */}
      <div
        ref={textRef}
        className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0"
      >
        <div className="text-[#414141] max-w-md">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]" />
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>

          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            LATEST ARRIVALS
          </h1>

          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]" />
          </div>
        </div>
      </div>

      {/* ─── Right (image) ─── */}
      <img
        ref={imgRef}
        src={assets.hero_img}
        alt="Hero"
        className="w-full sm:w-1/2 object-cover"
      />
    </section>
  );
};

export default Hero;
