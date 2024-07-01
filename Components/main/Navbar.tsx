import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "@/components/header/button";
import AOS from 'aos';
import Icon from "../../public/favicon.ico"

import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    AOS.init;
  }, [])

  return (
    <div className="w-full h-[65px] fixed top-0 bg-slate-950  z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="flex md:hidden flex-col">
          {menu ? (
            <>
              <div className=" flex translate-y-32 z-50">
                <Button />
                <Image
                  src="https://cdn-icons-png.flaticon.com/256/10693/10693585.png"
                  width={50}
                  height={50}
                  alt="Close"
                  className=" w-8 h-8"
                  onClick={()=>setMenu(false)}
                />
              </div>
            </>
          ) : (
            
            <Image
              src="https://cdn-icons-png.flaticon.com/256/10613/10613684.png"
              width={50}
              height={30}
              alt="Menu"
              className="rounded-full -translate-x-12"
              onClick={() => setMenu(true)}
            />
            
          )}

        </div>
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src={Icon}
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin rounded-full bg-inherit"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300"
            data-aos="fade-zoom-in" data-aos-delay="1200">
            Techie Warriors
          </span>
        </Link>

        <div className="w-fit h-full flex flex-row items-center justify-between md:mr-20">
          <div className="hidden md:flex items-center justify-between w-full h-auto border-2 border-blue-800 bg-slate-950  px-[20px] py-[10px] rounded-full gap-4
           text-gray-200">
            <Button />
          </div>

        </div>

        <div className="flex flex-row gap-5">
          <h2 className="text-white">Call +91-9835776768</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
