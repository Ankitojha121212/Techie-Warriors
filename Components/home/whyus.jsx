import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { WhyusData } from "../../constants/data";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-[97%] md:w-full h-auto mx-auto">
      <div className="flex flex-col justify-center items-center" data-aos="fade-up">
        <h2 className="font-semibold text-4xl">Why Us</h2>
        <p className="text-lg mt-2 text-center">
          We allow us to manage your projects from beginning to end. There are
          plenty of specifications that we have, the most important of them
          are as follows.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-8">
        {WhyusData.map((item, index) => (
          <div
            key={index}
            className="border-2 mt-8 hover:cursor-pointer px-5 border-black rounded-e-3xl rounded-b-2xl text-center bg-slate-100 hover:transition hover:duration-700 hover:ease-linear hover:border-3 hover:border-purple-500 hover:text-black hover:bg-white transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-black"
            data-aos={item.aos}
          >
            <div className="flex h-12 gap-2 items-center">
              <span className="translate-x-3 -translate-y-6 font-semibold text-3xl">
                {">"}
              </span>
              <Image
                src={item.imgSrc}
                width={64}
                height={64}
                alt={item.title}
                className="w-16 h-16 -translate-y-8 rounded-full bg-white border-1 shadow-md shadow-black z-50"
              />
              <span className="-translate-y-[24px] font-semibold text-3xl -translate-x-3">
                {"<"}
              </span>
              <h4 className="text-lg md:text-3xl h-8 -translate-y-6 bg-black text-white px-2 text-center rounded-lg">
                {item.title}
              </h4>
            </div>
            <div>
              <p className="text-slate-950 mb-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
