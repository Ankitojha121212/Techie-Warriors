import React from "react";
import Pic from "../../public/webdev.png";
import Pic2 from "../../public/webDesign2.png";
import Image from "next/image";
import Responsive from "../../public/responsive.gif";
import Ecommerce from "../../public/e-commerce.gif";
import Custom from "../../public/custom.gif";
import Dynamic from "../../public/dynamic.gif";
import Inquiry from "../../Components/home/inquiry";
const Services = () => {
  return (
    <div className="container mx-auto my-8 mt-16">
      <div className="flex gap-8 justify-between w-full">
        <div className="flex justify-center items-center w-[40%]">
          <Image src={Pic2} alt="best web designer in India" />
        </div>
        <div className="w-[50%] flex justify-center">
          <Image
            src={Pic}
            alt="Best Web Disgner in india"
            className="w-80 h-80 mt-8"
          />
        </div>
      </div>
      <div className="p-5">
        <section className="mb-8">
          <p className="font-semibold text-2xl mb-4">
            We specialize in creating stunning and user-friendly websites
            tailored to meet your business needs.
          </p>
        </section>
        <section className="mb-8 text-xl font-semibold">
          <h2 className="text-4xl p-1 rounded-md text-center font-semibold mb-4">
            <text className="bg-red-600 px-5 p-1 text-white rounded-md">
              Services Offered in web Development
            </text>
          </h2>
          <ul className="list-disc pl-6 flex flex-col md:flex-row gap-8">
            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            >
              <Image
                src={Responsive}
                alt="Responsive Web Design"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Static Website Development</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <Image
                src={Dynamic}
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Dynamic Website Development</li>
            </div>
            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            >
              <Image
                src={Custom}
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li className="">Custom Website Development</li>
            </div>
            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            >
              <Image
                src={Ecommerce}
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li className="">E-Commerce Website Development</li>
            </div>

            {/* Add more services */}
          </ul>
        </section>

        {/* Section 2: Our Approach */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300">
            <h2 className="text-2xl text-red-700 font-bold mb-2">Our Approach</h2>
            <p className="text-sm">
              Floppy Technology's approach to website designing is holistic,
              starting with understanding the client's business objectives and
              target audience. This understanding is then translated into a
              unique and effective web presence that aligns with the client's
              brand identity.
            </p>
          </div>

          {/* Repeat the following structure for each point */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300">
            <h2 className="text-2xl font-bold mb-2 text-red-700">Comprehensive Approach</h2>
            <p className="text-sm">
              Floppy Technology emphasizes a comprehensive approach, indicating
              that their website designing process covers various aspects and
              considerations.
            </p>
          </div>

          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300">
            <h2 className="text-2xl font-bold text-red-700 mb-2">
              Understanding Business Goals
            </h2>
            <p className="text-sm">
              Before starting the design process, Floppy Technology aims to
              understand the specific goals of your business. This involves
              gaining insights into what you want to achieve with your website,
              such as increasing online
              showcasing.
            </p>
          </div>

          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300">
            <h2 className="text-2xl font-bold mb-2 text-red-700">
              Considering Brand Identity
            </h2>
            <p className="text-sm">
              Brand identity refers to the visual and messaging elements that
              represent your brand. Floppy Technology recognizes the importance
              of aligning the website design with your brand's identity. This
              ensures consistency and helps in creating a cohesive online
              presence.
            </p>
          </div>

          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300">
            <h2 className="text-2xl font-bold mb-2 text-red-700">
              Creating a Unique Web Presence
            </h2>
            <p className="text-sm">
              The ultimate goal of the website design process is to create a
              unique and distinctive online presence for your business. Floppy
              Technology aims to develop websites that stand out from the
              competition and leave a lasting impression on visitors.
            </p>
          </div>
        </section>

        {/* Section 3: Services Offered */}

        {/* Section 4: Showcase */}
      </div>
      <Inquiry />
    </div>
  );
};

export default Services;
