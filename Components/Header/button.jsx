import React, { useState } from "react";
import Link from "next/link";

const Buttons = () => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isNeerajHovered, setIsNeerajHovered] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleServicesHover = () => {
    setIsServicesHovered(true);
    setIsNeerajHovered(false);
  };

  const handleServicesLeave = () => {
    setIsServicesHovered(false);
  };

  const handleNeerajHover = () => {
    setIsNeerajHovered(true);
    setIsServicesHovered(false);
  };

  const handleNeerajLeave = () => {
    setIsNeerajHovered(false);
  };

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const isActive = (tab) => {
    return activeTab === tab;
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 pr-4">
      <Link href="/">
        <button
          className={`btn bg-slate-950 text-white px-2  active:bg-green-600  shadow-md shadow-black focus:shadow-red-600 ${isActive("Home") ? 'border-b-2 border-white' : ''}`}
          onClick={() => handleSetActiveTab("Home")}
        >
          Home
        </button>
      </Link>

      <div className="relative">
        <button
          className={`btn text-white shadow-2xl px-2 ${isActive("Tech Services") ? 'border-b-2 border-white' : ''}`}
          onMouseEnter={handleServicesHover}
          onClick={() => handleSetActiveTab("Tech Services")}
        >
          Tech Services
        </button>
        <ul
          className={`absolute top-full mt-8 left-1/2 transform -translate-x-1/2 p-2 bg-slate-950 rounded-md shadow-md bg-opacity-90 ${
            isServicesHovered ? "scale-110 opacity-100 visible" : "scale-0 opacity-0 invisible"
          } transition-all duration-300 ease-in-out`}
          style={{ minWidth: "12rem" }}
          onMouseLeave={handleServicesLeave}
        >
          <li>
            <Link
              href="/services/websiteDesigning"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              Website Designing
            </Link>
          </li>
          <li>
            <Link
              href="/services/websiteDevelopment"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              Website Development
            </Link>
          </li>
          <li>
            <Link
              href="/services/software"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              Software Development
            </Link>
          </li>
          <li>
            <Link
              href="/services/software"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              Mobile Application
            </Link>
          </li>
          <li>
            <Link
              href="/services/GraphicDesign"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              Graphic Designing
            </Link>
          </li>
          <li>
            <Link
              href="/services/smm"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              Social Media Management
            </Link>
          </li>
        </ul>
      </div>

      <div className="relative">
        <button
          className={`btn text-white shadow-2xl px-2 ${isActive("Graphic Services") ? 'border-b-2 border-white' : ''}`}
          onMouseEnter={handleNeerajHover}
          onClick={() => handleSetActiveTab("Graphic Services")}
        >
          Graphic Services
        </button>
        <ul
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-8 p-2 bg-slate-950 rounded-md shadow-md bg-opacity-90 ${
            isNeerajHovered ? "scale-110 opacity-100 visible" : "scale-0 opacity-0 invisible"
          } transition-all duration-300 ease-in-out`}
          style={{ minWidth: "12rem" }}
          onMouseLeave={handleNeerajLeave}
        >
          <li>
            <Link
              href="/services/websiteDesigning"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              Video Editing
            </Link>
          </li>
          <li>
            <Link
              href="/services/websiteDevelopment"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              VFX
            </Link>
          </li>
          <li>
            <Link
              href="/services/software"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              Motion Graphic
            </Link>
          </li>
          <li>
            <Link
              href="/services/software"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              Graphic Designing
            </Link>
          </li>
          <li>
            <Link
              href="/services/GraphicDesign"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              Logo Designing
            </Link>
          </li>
          <li>
            <Link
              href="/services/smm"
              className="px-2 mt-4 hover:bg-cyan-600 rounded-md py-1 block"
            >
              3D Animation
            </Link>
          </li>
        </ul>
      </div>

      <Link href="/contactus">
        <button
          className={`btn bg-slate-950 text-white px-2 hover:bg-black active:bg-green-600 focus:bg-blue-950 shadow-md shadow-black focus:shadow-red-600 ${isActive("Contact us") ? 'border-b-2 border-white' : ''}`}
          onClick={() => handleSetActiveTab("Contact us")}
        >
          Contact us
        </button>
      </Link>

      <Link href="/aboutus">
        <button
          className={`btn bg-slate-950  text-white px-2 hover:bg-black active:bg-green-600 focus:bg-blue-950 shadow-md shadow-black focus:shadow-red-600 ${isActive("About us") ? 'border-b-2 border-white' : ''}`}
          onClick={() => handleSetActiveTab("About us")}
        >
          About us
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
