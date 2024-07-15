import React from "react";
import Service from "./serviceCard";
import { ServiceData } from "../../constants/data";


const Hero = () => {
  return (
    <div className="relative flex justify-center items-center flex-col h-full w-full" id="about-me">
      <h2 className="mt-24 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-600 text-4xl font-semibold">
        Services Overview
      </h2>
      <div className="grid md:grid-cols-4 grid-cols-1">
       
              {ServiceData.map((service, index) => (
                 <>
                 <div className="">
        <Service
          key={index}
          title={service.title}
          description={service.description}

        />
        </div>
        </>
      ))}
     

    </div>
    </div>
  );
};

export default Hero;
