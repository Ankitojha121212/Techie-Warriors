import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-[80vh] w-full" id="about-me">
      {/* Background div with animations */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-200 via-purple-200 to-blue-200 filter blur-xl  opacity-75 animate-pulse">
        <div className="mt-56 absolute rounded-full square"></div>
        <div className="mt-56 ml-40 absolute rounded-full square"></div>
        <div className="mt-56 flex justify-center items-center absolute rounded-full square"></div>
        <div className=" absolute square"></div>
        <div className="mt-56 transform translate-x-56 absolute rounded-full square"></div>
        <div className="mt-56 mb-12 absolute rounded-full square"></div>
      </div>

      {/* Your original content */}
      <HeroContent />
    </div>
  );
};

export default Hero;
