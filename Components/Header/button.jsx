"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Buttons = () => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isneearj, setIsNeeraj] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleServicesHover = () => {
    setIsServicesHovered(true);
    setIsNeeraj(false);
  };

  const handleServicesLeave = () => {
    setIsServicesHovered(false);
  };

  const handleVideoHover = () => {
    setIsNeeraj(true);
    setIsServicesHovered(false);
  };

  const handleVideoLeave = () => {
    setIsNeeraj(false);
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 pr-4" data-aos="fade-right">
      <Link href={`/`}>
        <button className="btn bg-sky-600 text-white    px-2 hover:bg-black active:bg-green-600 focus:bg-blue-950 shadow-md shadow-black focus:shadow-red-600">
          Home
        </button>
      </Link>
      <Link href={``}>
        <div
          className="relative btn text-white shadow-2xl  px-2"
          onMouseEnter={handleServicesHover}
          
        >
          <ul  className="w-auto bg-sky-600 hover:bg-black active:bg-green-600 focus:bg-blue-950 shadow-md shadow-black focus:shadow-red-600 px-2 rounded-md" data-aos="flip-down" data-aos-delay="1500">
          Tech Services
            {isServicesHovered && (
              <div className="text-sm bg-slate-950 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 rounded-md">
                <div onMouseLeave={handleServicesLeave} className="grid gap-4 w-48 hover:w-60 h-96 ">
                  <Link
                    href="/services/websiteDesigning"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    Website Designing
                  </Link>
                  <Link
                    href="/services/websiteDevelopment"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    Website Development
                  </Link>
                  <Link
                    href="/services/software"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    Software Development
                  </Link>
                  <Link
                    href="/services/software"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    Mobile Application
                  </Link>
                  <Link
                    href="/services/GraphicDesign"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    Graphic Designing
                  </Link>
                  <Link
                    href="/services/smm"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    Social Media Management
                  </Link>
                </div>
              </div>
            )}
          </ul>
        </div>
      </Link>

      <Link href={``}>
        <div
          className="relative btn text-white shadow-2xl  px-2 "
          onMouseEnter={handleVideoHover}
          
        >
          <ul  className="w-auto bg-sky-600 hover:bg-black active:bg-green-600 focus:bg-blue-950 shadow-md shadow-black focus:shadow-red-600 px-2 rounded-md" data-aos="flip-down" data-aos-delay="1500">
            Graphic Services
            {isneearj && (
              <div className="text-sm absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-slate-950 rounded-md">
                <div onMouseLeave={handleVideoLeave} className="grid gap-4 w-48 hover:w-60 h-96 ">
                  <Link
                    href="/services/websiteDesigning"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    Video Editing
                  </Link>
                  <Link
                    href="/services/websiteDevelopment"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    VFX 
                  </Link>
                  <Link
                    href="/services/software"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    Motion Graphic
                  </Link>
                  <Link
                    href="/services/software"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    Graphic Designing
                  </Link>
                  <Link
                    href="/services/GraphicDesign"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    Logo Designing
                  </Link>
                  <Link
                    href="/services/smm"
                    className="px-2 mt-4  hover:text-blue-100"
                  >
                    3D Animation
                  </Link>
                </div>
              </div>
            )}
          </ul>
        </div>
      </Link>
      
      <Link href="contactus">
        <button className="btn bg-sky-600 text-white    px-2  hover:bg-black active:bg-green-600 focus:bg-blue-950 shadow-md shadow-black focus:shadow-red-600">
          Contact us
        </button>
      </Link>
      <Link href={`/aboutus`}>
        <button className="btn bg-sky-600 text-white    px-2 hover:bg-black active:bg-green-600 focus:bg-blue-950 shadow-md shadow-black focus:shadow-red-600">
          About us
        </button>
      </Link>
    </div>
  );
};

export default Buttons;








 {/* <div className="flex gap-4 ">
                    <div
                      className="grid md:flex"
                      onMouseEnter={handleMarketingHover}
                      onMouseLeave={handleMarketingHoverLeave}
                    >
                      <button className="px-2 btn mt-4 hover:text-blue-100">
                        Digital Marketing
                      </button>
                      {marketingHovered && (
                        <>
                          <div className="bg-slate-950 ml-0 md:ml-24 mt-8 bg-opacity-50">
                            <li className="btn px-2 mt-2  w-64">
                              <Link href="/services/seo">
                                Search Engine Optimization
                              </Link>
                            </li>
                            <li className="btn px-2 mt-2  w-64">
                              <Link href="/services/sem">
                                Search Engine Marketing
                              </Link>
                            </li>
                            <li className="btn px-2 mt-2  w-64">
                              <Link href="/services/smh">
                                Social Media Marketing
                              </Link>
                            </li>
                            <li className="btn px-2 mt-2  w-64">
                              <Link href="services/bulksms">Bulk SMS</Link>
                            </li>

                            <li className="btn px-2 mt-2  w-64">
                              <Link href="/services/emailmarketing">
                                Email Marketin
                              </Link>
                            </li>
                          </div>
                        </>
                      )}
                    </div>
                  </div> */}