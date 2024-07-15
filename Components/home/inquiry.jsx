

import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Feedback from "./feedback";

const HeroContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");


  useEffect(() => {
    AOS.init;
  }, []);
  const submitHanler = async () => {
    

    const res = await axios.post("/api/inquiry", {
      name,
      email,
      mobile,
      location,
      query,
    });
    if (res.status === 200) {
      toast("Thank you for Query !");
      toast("One of us will response you soon !");
    } else {
      toast("Something went wrong");
    }
  };

  return (
    <>
      <motion.div>
        <div
          initial="hidden"
          animate="visible"
          className="flex-row md:flex mt-16 mb-4 items-center justify-center z-[20] w-[98%] gap-8 px-5"
        >
          <div className="w-[98%] md:w-[40%] mt-4 md:mt-0">
            <Feedback/>
          </div>

          <div className="shadow-lg shadow-black p-2 px-8 w-[98%] md:w-[40%] mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold text-center
            bg-gradient-to-r from-black to-red-700 bg-clip-text text-transparent">Contact us</h2>

            <div className="flex gap-2 mb-4 mt-8 justify-center">
              <div className=" text-lg">
                <div className=" flex flex-col gap-6 hover:text-black w-72">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-2 rounded-sm   bg-white border-x-2 border-y-2 border-black"
                  />
                  <input
                    placeholder="Enter your Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-2 rounded-sm   bg-white border-x-2 border-y-2 border-black"
                  />
                  <input
                    placeholder="Enter your Phone Number"
                    type="number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="px-2 rounded-sm  bg-white border-x-2 border-y-2 border-black"
                  />
                  <input
                    placeholder="Enter your Location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="px-2 rounded-sm   bg-white border-x-2 border-y-2 border-black"
                  />
                  <input
                    placeholder="Enter your Query"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="px-2 rounded-sm  bg-white border-x-2 border-y-2 border-black"
                  />

                  <button
                    className=" px-2 btn font-semibold translate-x-28 text-xl"
                    onClick={submitHanler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default HeroContent;
