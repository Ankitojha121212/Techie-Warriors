import React from "react";
import Inquiry from "../../Components/home/inquiry";

const EmailMarketing = () => {
  return (
    <div className="container mx-auto my-8 mt-16">
      <div className="p-5">
        <section className="mb-8">
          <p className="font-semibold text-2xl mb-4">
            Boost your marketing efforts with our effective <span className="text-red-700">Email Marketing</span> services. We create compelling campaigns to engage your audience and drive conversions.
          </p>
        </section>
        <section className="mb-8 text-xl font-semibold">
          <h2 className="text-4xl p-1 rounded-md text-center font-semibold mb-4">
            <span className="bg-red-600 px-5 p-1 text-white rounded-md">
              Services Offered in Email Marketing
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
              hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8"
            >
              <img
                src="https://example.com/email1.jpg"
                alt="Email Marketing 1"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Strategic Email Campaigns</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
              hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8"
            >
              <img
                src="https://example.com/email2.jpg"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Personalized Email Content</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
              hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8"
            >
              <img
                src="https://example.com/email3.jpg"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Email Automation</li>
            </div>

            {/* Add more Email Marketing services */}
          </div>
        </section>

        {/* Section 2: Our Approach */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Update content for Email Marketing approach */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300 mt-8">
            <h2 className="text-2xl text-red-700 font-bold mb-2">Our Approach</h2>
            <p className="text-sm">
              Our Email Marketing approach involves creating strategic campaigns that resonate with your audience. We focus on delivering personalized content and leveraging email automation to nurture leads and drive conversions.
            </p>
          </div>

          {/* Repeat the following structure for each point */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300 mt-8">
            <h2 className="text-2xl font-bold mb-2 text-red-700">Personalization for Impact</h2>
            <p className="text-sm">
              Personalization is key in our email campaigns. We craft personalized content to make each email relevant and impactful, enhancing engagement and building a stronger connection with your audience.
            </p>
          </div>

          {/* Add more Email Marketing approach points */}
        </section>

        {/* Section 3: Services Offered */}

        {/* Section 4: Showcase */}
      </div>
      <Inquiry />
    </div>
  );
};

export default EmailMarketing;
