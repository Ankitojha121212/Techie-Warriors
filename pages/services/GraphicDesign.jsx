import React from "react";
import Image from "next/image";
import Graphic1 from "../../public/floppyFull.png";

import Inquiry from "../../Components/home/inquiry";

const GraphicDesign = () => {
  return (
    <div className="container mx-auto my-8 mt-16">
      <div className="p-5">
        <section className="mb-8">
          <p className="font-semibold text-2xl mb-4">
            We specialize in creating stunning and creative <span className="text-red-700">Graphic Designs</span> tailored to meet your visual communication needs.
          </p>
        </section>
        <section className="mb-8 text-xl font-semibold">
          <h2 className="text-4xl p-1 rounded-md text-center font-semibold mb-4">
            <span className="bg-red-600 px-5 p-1 text-white rounded-md">
              Services Offered in Graphic Design
            </span>
          </h2>
          <ul className=" pl-6 flex flex-col md:flex-row justify-between gap-8">
            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            >
              <Image
                src={Graphic1}
                alt="Graphic Design 1"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Logo Design</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                src="https://media.designrush.com/articles/174114/conversions/Best-PRINT-designs-details.jpg"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Print Design</li>
            </div>
            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                src="https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg?w=996&t=st=1703610880~exp=1703611480~hmac=7b41ffce5a96f005b923f9bfcb72001e94c08d165f8cc43f06a3fef270fe6c3f"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Illustration Services</li>
            </div>

            {/* Add more graphic design services */}
          </ul>
        </section>

        {/* Section 2: Our Approach */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Update content for graphic design approach */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300">
            <h2 className="text-2xl text-red-700 font-bold mb-2">Our Approach</h2>
            <p className="text-sm">
              Our approach to graphic design is rooted in understanding your brand's visual language and creating designs that effectively communicate your message. We focus on delivering aesthetically pleasing and impactful designs that resonate with your target audience.
            </p>
          </div>

          {/* Repeat the following structure for each point */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300">
            <h2 className="text-2xl font-bold mb-2 text-red-700">Creative Solutions</h2>
            <p className="text-sm">
              We pride ourselves on providing creative solutions for your graphic design needs. Whether it's designing a captivating logo or crafting engaging print materials, we aim to deliver designs that set you apart in the market.
            </p>
          </div>

          {/* Add more graphic design approach points */}
        </section>

        {/* Section 3: Services Offered */}

        {/* Section 4: Showcase */}
      </div>
      <Inquiry />
    </div>
  );
};

export default GraphicDesign;
