"use client";

import React, { useState, useEffect } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import aos from 'aos';
import 'aos/dist/aos.css';
import { bannerData } from "@/constants";
import Support from '@/public/support.png'
import Image from "next/image";


const HeroContent = () => {
  const [texts, setTexts] = useState(["AFFORDABILITY", "TECHNICAL SUPPORT", "COMPLETE SOLUTION", "Starting Price : just 2999/-"]);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const typeText = (text: any, currentIndex: any, callback: any) => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setTimeout(() => typeText(text, currentIndex + 1, callback), 100);
      } else {
        setTimeout(callback, 2000);
      }
    };

    const displayTexts = async () => {
      while (true) {
        for (const text of texts) {
          await new Promise(resolve => typeText(text, 0, resolve));
        }
      }
    };

    displayTexts();
  }, [texts]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-5 mt-24 md:mt-40 w-full z-[20]">
      <div className="h-full w-[98%] md:w-[50%] flex flex-col gap-5 justify-center items-center m-auto text-start">

        <div className="py-[8px] px-[7px] flex md:hidden border bg-blue-200 rounded-lg  border-[#7042f88b] opacity-[0.9]  relative shadow-2xl shadow-black">

          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-5xl p-2 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-purple-500 font-bold animate-pulse mt-8 
          
            "
          >


            Techie Warriors</h1>


        </div >
        <div className="flex flex-col gap-6 mt-6 text-4xl font-bold max-w-[600px] w-auto h-auto "
          data-aos="flip-down" data-aos-delay="1000">
          <span>
            Providing Complete
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-red-700">
              {" "}
              IT Solution{" "}
            </span>
            with Cutting-Edge Technology
          </span>
        </div>
        <div>
          <h2 className="bg-gradient-to-r from-black to-red-700 bg-clip-text text-transparent text-4xl first-letter:
          font-semibold mt-12 ">Best IT Company in India</h2>
        </div>

        <p className="text-lg my-5 w-ful font-semibold md:max-w-[600px]">
          Welcome to Techie Warriors, where innovation meets excellence! As a leading IT solutions provider, we specialize in delivering a comprehensive suite of services tailored to meet your digital needs.
        </p>
      </div>

      <div className="w-[50%] h-52 mt-24 flex justify-center items-center">
        <div className="text-4xl font-bold flex  flex-col gap-8">
          <div className=" px-[7px] hidden md:flex relative">

            <Image
              src="/warriors.png"
              width={800}
              height={800}
              alt="Techi Warriors"
              className="w-72 h-72"
            />

          </div >
          <h2 className="w-full text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-slate-950 to-red-600 ">{displayedText}</h2>
          <div className="flex mt-24 gap-24" data-aos="fade-down" data-aos-delay="2000" data-aos-easing="ease-in-sine">
            <div className=" 
           w-16 rounded-full h-16 bg-white bg-gradient-to-r from-slate-700 via-red-500 to-purple-600
           hover:transform hover:rotate-90 animate-spin filter blur-xl
           "></div>
            <div className="
           w-16 rounded-full h-16 bg-white bg-gradient-to-r from-slate-700 via-red-400 to-purple-600
           hover:transform hover:rotate-90 animate-bounce filter blur-lg
           "></div>
            <div className="
           w-16 rounded-full h-16 bg-white bg-gradient-to-r from-slate-700 via-green-300 to-purple-600
           hover:transform hover:rotate-90 animate-spin filter blur-xl shadow-sm shadow-sky-500
           "></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
