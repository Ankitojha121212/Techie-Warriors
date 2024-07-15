"use client";

import React, {useEffect} from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import 'aos/dist/aos.css'


const HeroContent = ({
    title, description
}) => {
  useEffect(()=>{
    AOS.init;
  }, [])
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex-row md:flex mt-8 mb-4 items-center justify-center px-2"
    >
      <div
        className="  md:mb-0 mb-4 p-2  flex flex-col gap-5 h-72 justify-center m-auto text-start  bg-blue-700 bg-opacity-10 hover:shadow-2xl hover:shadow-blue-500
       rounded-lg hover:transition hover:duration-700 shadow-md shadow-black hover:ease-in-out hover:text-black hover:bg-white transform hover:-translate-y-1 hover:scale-110   "
      >
        <div className="">
          <motion.div
            
            className="flex flex-col gap-6  text-2xl font-bold h-auto"
            data-aos="fade-down" data-aos-delat="1000"
          >
            <span>
              {title.split(' ')[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                {title.split(' ')[1]}{" "}
              </span>
            </span>
          </motion.div>

          <motion.p
            data-aos="zoom-in" data-aos-delay="800"
            className=" my-5 font-sans font-medium "
          >
            {description}
          </motion.p>
        </div>
      </div>
      
      
      
    </motion.div>
  );
};

export default HeroContent;
