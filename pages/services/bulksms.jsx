import React from "react";

import Inquiry from "../../Components/home/inquiry";

const BulkSMSMarketing = () => {
  return (
    <div className="container mx-auto my-8 mt-16">
      <div className="p-5">
        <section className="mb-8">
          <p className="font-semibold text-2xl mb-4">
            Reach your audience instantly with our targeted <span className="text-red-700">Bulk SMS Marketing</span> services. We provide efficient and cost-effective SMS campaigns to promote your brand and engage customers.
          </p>
        </section>
        <section className="mb-8 text-xl font-semibold">
          <h2 className="text-4xl p-1 rounded-md text-center font-semibold mb-4">
            <span className="bg-red-600 px-5 p-1 text-white rounded-md">
              Services Offered in Bulk SMS Marketing
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
              hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8"
            >
              <img
                src="https://example.com/bulksms1.jpg"
                alt="Bulk SMS Marketing 1"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Targeted SMS Campaigns</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
              hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8"
            >
              <img
                src="https://example.com/bulksms2.jpg"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Personalized Messaging</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
              hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-8"
            >
              <img
                src="https://example.com/bulksms3.jpg"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Automated SMS Campaigns</li>
            </div>

            {/* Add more Bulk SMS Marketing services */}
          </div>
        </section>

        {/* Section 2: Our Approach */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Update content for Bulk SMS Marketing approach */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300 mt-8">
            <h2 className="text-2xl text-red-700 font-bold mb-2">Our Approach</h2>
            <p className="text-sm">
              Our Bulk SMS Marketing approach focuses on delivering targeted and personalized messages to your audience. We create campaigns that are tailored to your business goals, whether it's promoting a product, sending updates, or running time-sensitive promotions.
            </p>
          </div>

          {/* Repeat the following structure for each point */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300 mt-8">
            <h2 className="text-2xl font-bold mb-2 text-red-700">Personalization Matters</h2>
            <p className="text-sm">
              We understand the importance of personalization in SMS marketing. Our campaigns are crafted to include personalized elements, making your messages more relevant and impactful to your audience.
            </p>
          </div>

          {/* Add more Bulk SMS Marketing approach points */}
        </section>

        {/* Section 3: Services Offered */}

        {/* Section 4: Showcase */}
      </div>
      <Inquiry />
    </div>
  );
};

export default BulkSMSMarketing;
