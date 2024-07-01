import React from "react";
import Image from "next/image";

import Inquiry from "../../Components/home/inquiry";

const SEMServices = () => {
  return (
    <div className="container mx-auto my-8 mt-16">
      <div className="p-5">
        <section className="mb-8">
          <p className="font-semibold text-2xl mb-4">
            Drive targeted traffic to your website with our effective <span className="text-red-700">Search Engine Marketing (SEM) services</span>. We help you create and manage strategic paid advertising campaigns.
          </p>
        </section>
        <section className="mb-8 text-xl font-semibold">
          <h2 className="text-4xl p-1 rounded-md text-center font-semibold mb-4">
            <span className="bg-red-600 px-5 p-1 text-white rounded-md">
              Services Offered in Search Engine Marketing
            </span>
          </h2>
          <ul className=" pl-6 flex flex-col md:flex-row justify-between gap-8">
            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110 "
            >
              <img
                src="https://www.slideteam.net/media/catalog/product/cache/1280x720/g/o/google_adwords_campaign_dashboard_ppt_powerpoint_presentation_ideas_demonstration_slide01.jpg"
                alt="SEM Service 1"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Google Ads Campaigns</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                src="https://media.sproutsocial.com/uploads/2018/05/Facebook-Ad-Examples.png"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>Facebook Ads</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                src="https://shape.io/mkt/assets/images/blog/linkedin-ads-budget-agencies-guide.png"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>LinkedIn Advertising</li>
            </div>

            <div
              className="flex flex-col justify-center items-center bg-white text-black rounded-md
            hover:transition hover:duration-700 hover:ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <img
                src="https://ninjasem.com/images/blog/sem-strategies.png?v=1683282761502207856"
                className="rounded-md w-80 filter contrast-120 h-48"
              />
              <li>SEM Strategy Consultation</li>
            </div>

            {/* Add more SEM services */}
          </ul>
        </section>

        {/* Section 2: Our Approach */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Update content for SEM approach */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300">
            <h2 className="text-2xl text-red-700 font-bold mb-2">Our Approach</h2>
            <p className="text-sm">
              Our Search Engine Marketing approach involves creating customized paid advertising campaigns tailored to your business goals. We strategically target audiences across platforms like Google Ads, Facebook, and LinkedIn to maximize your online visibility and drive qualified traffic to your website.
            </p>
          </div>

          {/* Repeat the following structure for each point */}
          <div className="hover:border-green-500 hover:shadow-md border border-gray-300 rounded p-4 transition duration-300">
            <h2 className="text-2xl font-bold mb-2 text-red-700">Targeted Advertising</h2>
            <p className="text-sm">
              We specialize in creating targeted advertising campaigns that reach your specific audience. Whether it's through keyword targeting on search engines or demographic targeting on social media, we optimize your ads for maximum impact.
            </p>
          </div>

        
        </section>

      </div>
      <Inquiry />
    </div>
  );
};

export default SEMServices;
