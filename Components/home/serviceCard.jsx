"use client";

import React, {useEffect} from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import 'aos/dist/aos.css'


const HeroContent = ({
    title, title2, title3, title4, description, description2, description3, description4
}) => {
  useEffect(()=>{
    AOS.init;
  }, [])
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex-row md:flex mt-8 mb-4 items-center justify-center z-[20] w-[98%] gap-8 px-5"
    >
      <div
        className="  md:mb-0 mb-4 p-2 font-semibold flex flex-col gap-5 h-fit md:h-60 justify-center m-auto text-start w-[100%] md:w-[50%] bg-blue-700 bg-opacity-10 hover:shadow-2xl hover:shadow-blue-500
       rounded-lg hover:transition hover:duration-700 hover:ease-in-out hover:text-black hover:bg-white transform hover:-translate-y-1 hover:scale-110   "
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
            className=" my-5 font-sans "
          >
            {description}
          </motion.p>
        </div>
      </div>
      <div
        className=" md:mb-0 mb-4 p-2 font-semibold flex flex-col gap-5 h-fit md:h-60 justify-center m-auto text-start w-[100%] md:w-[50%] bg-blue-700 bg-opacity-10 hover:shadow-2xl hover:shadow-blue-500
       rounded-lg hover:transition hover:duration-700 hover:ease-in-out hover:text-black hover:bg-white transform hover:-translate-y-1 hover:scale-110  "
      >
        <div className="">
          <motion.div
           data-aos="fade-down" data-aos-delat="1000"
            className="flex flex-col gap-6  text-2xl font-bold h-auto"
          >
            <span>
              {title2.split(' ')[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                {title2.split(' ')[1]}{" "}
              </span>
            </span>
          </motion.div>

          <motion.p
           data-aos="zoom-in" data-aos-delay="800"
            className=" my-5 font-sans "
          >
            {description2}
          </motion.p>
        </div>
      </div>
      <div
        className=" md:mb-0 mb-4 p-2 h-fit md:h-60 font-semibold flex flex-col gap-5 justify-center m-auto text-start w-[100%] md:w-[50%] bg-blue-700 bg-opacity-10 hover:shadow-2xl hover:shadow-blue-500
       rounded-lg hover:transition hover:duration-700 hover:ease-in-out hover:text-black hover:bg-white transform hover:-translate-y-1 hover:scale-110  "
      >
        <div className="">
          <motion.div
            data-aos="fade-down" data-aos-delat="1000"
            className="flex flex-col gap-6  text-2xl font-bold h-auto"
          >
            <span>
              {title3.split(' ')[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                {title3.split(' ')[1]}{" "}
              </span>
            </span>
          </motion.div>

          <motion.p
           data-aos="zoom-in" data-aos-delay="800"
            className=" my-5 font-sans "
          >
            {description3}
          </motion.p>
        </div>
      </div>
      <div
        className=" md:mb-0 mb-4 p-2 h-fit md:h-60 font-semibold flex flex-col gap-5 justify-center m-auto text-start w-[100%] md:w-[50%] bg-blue-700 bg-opacity-10 hover:shadow-2xl hover:shadow-blue-500
       rounded-lg hover:transition hover:duration-700 hover:ease-in-out hover:text-black hover:bg-white transform hover:-translate-y-1 hover:scale-110 "
      >
        <div className="">
          <motion.div
           data-aos="fade-down" data-aos-delat="800"
            className="flex flex-col gap-6  text-2xl font-bold h-auto"
          >
            <span>
              {title4.split(' ')[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                {title4.split(' ')[1]}{" "}
              </span>
            </span>
          </motion.div>

          <motion.p
            data-aos="zoom-in" data-aos-delay="800"
            className=" my-5 font-sans "
          >
            {description4}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
