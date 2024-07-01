import React from "react";
import Image from "next/image";

import Inquiry from "../../Components/home/inquiry";

const SEOServices = () => {
  return (
    <div className="container mx-auto my-8 mt-16">
      <div className="p-5">
        <section className="mb-8">
          <p className="font-semibold text-2xl mb-4">
            Boost your online presence with our effective <span className="text-red-700">Search Engine Optimization (SEO) services</span>. We enhance your website's visibility and help you reach a wider audience.
          </p>
        </section>
        <section className="mb-8 text-xl font-semibold">
          <h2 className="text-4xl p-1 rounded-md text-center font-semibold mb-4">
            <span className="bg-red-600 px-5 p-1 text-white rounded-md">
              Services Offered in SEO
            </span>
          </h2>
          <ul className=" pl-6 flex flex-col md:flex-row justify-between gap-8">
            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            >
              <img
                src="https://img.freepik.com/free-vector/people-using-search-box-query-engine-giving-result_74855-11000.jpg?w=996&t=st=1703611515~exp=1703612115~hmac=ec1c3078ab85bcd0298f34fe0235f491d80408b8018c7c259a92ed25a61a8346"
                alt="SEO Service 1"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Keyword Research</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                src="https://img.freepik.com/free-vector/seo-analytics-concept-illustration_114360-9862.jpg?w=740&t=st=1703611634~exp=1703612234~hmac=dc1e4f7af92b4c1b57200dfab7ade4997af0384fdcad3d65c1039c8d9b7f1aa7"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>On-Page Optimization</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                src="https://www.elegantthemes.com/blog/wp-content/uploads/2022/02/link-building-tips.png"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Link Building</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                src="https://static.semrush.com/blog/uploads/media/ff/81/ff81cde7fc126fc716f5296401a63749/original.jpeg"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>SEO Audits</li>
            </div>

            {/* Add more SEO services */}
          </ul>
        </section>

        {/* Section 2: Our Approach */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Update content for SEO approach */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300">
            <h2 className="text-2xl text-red-700 font-bold mb-2">Our Approach</h2>
            <p className="text-sm">
              Our SEO approach involves a strategic combination of keyword research, on-page optimization, and link building to improve your website's search engine rankings. We conduct thorough SEO audits to identify areas for improvement and ensure your website is optimized for search engines.
            </p>
          </div>

          {/* Repeat the following structure for each point */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300">
            <h2 className="text-2xl font-bold mb-2 text-red-700">Keyword Optimization</h2>
            <p className="text-sm">
              We perform in-depth keyword research to identify the most relevant and high-performing keywords for your business. By optimizing your content with these keywords, we enhance your website's visibility in search engine results.
            </p>
          </div>

          {/* Add more SEO approach points */}
        </section>

        {/* Section 3: Services Offered */}

        {/* Section 4: Showcase */}
      </div>
      <Inquiry />
    </div>
  );
};

export default SEOServices;
